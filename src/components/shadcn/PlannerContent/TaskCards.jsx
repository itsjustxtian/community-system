import { items } from "@/components/layouts/data/itemdata";
//import { sampleweaponlist } from "@/components/layouts/data/sampledata";
import { characterlist } from "@/components/layouts/data/itemdata";
import { weapons } from "@/components/layouts/data/weapondata";
const samplecharacterlist = characterlist;
const sampleweaponlist = weapons;
import { ChartArea, CircleFadingArrowUp, EllipsisVertical, Pencil, Trash2, Wrench } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import {
  characterascensionrecipe,
  talentrecipes,
  statbonusrecipe,
  inherentskillrecipe,
} from "@/components/layouts/data/recipes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MaterialIcons from "./MaterialIcons";
import { 
  calculateRequiredMaterials, 
  combineMaterials, 
  processTask, 
  processAllTasks, 
  calculateWithCrafting, 
  calculateLeft,
  mapMaterialNames,
  hasSufficientInventoryWithCrafting
} from "./materialCalculations";
import EditResonatorPopup from "./EditResonatorPopup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InventoryPopup from "../ItemsContent/InventoryPopup";
import { toast } from "sonner";
import { weaponrecipe } from "@/components/layouts/data/weapondata";
import { Skeleton } from "@/components/ui/skeleton";

const materialTemplate = {
  experience: 0,
  shellcredits: 0,
  basic_am: 0,
  medium_am: 0,
  advanced_am: 0,
  premium_am: 0,
  basic_tm: 0,
  medium_tm: 0,
  advanced_tm: 0,
  premium_tm: 0,
  bossmaterial: 0,
  regionalspecialty: 0,
  weeklyboss: 0,
};

const sampleinventory = {
  "Shell Credit": 1669000,
  "Basic Resonance Potion": 100,
  "Medium Resonance Potion": 100,
  "Advanced Resonance Potion": 100,
  "Premium Resonance Potion": 100,
  "LF Howler Core": 2000,
  "MF Howler Core": 30,
  "HF Howler Core": 55,
  "FF Howler Core": 0,
  "Lento Helix": 100,
  "Adagio Helix": 28,
  "Andante Helix": 54,
  "Presto Helix": 60,
  "Sound-Keeping Tacet Core": 43,
  "Lanternberry": 60,
  "Wintry Bell": 50,
  "Monument Bell": 13
}

const experienceValues = {
  "Basic Resonance Potion": 1000,
  "Medium Resonance Potion": 3000,
  "Advanced Resonance Potion": 8000,
  "Premium Resonance Potion": 20000,
  "Basic Energy Core": 1000,
  "Medium Energy Core": 3000,
  "Advanced Energy Core": 8000,
  "Premium Energy Core": 20000,
};

const TaskCards = () => {
  const [inventory, setInventory] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedTrigger, setSelectedTrigger] = useState("");
  const [editingCharacter, setEditingCharacter] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [userId, setUserId] = useState(null);
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const dialogContentMap = {
    "Edit Resonator": <EditResonatorPopup closeDialog={() => { setOpen(false); setEditingCharacter(null); setEditTask(null) }} character={editingCharacter} task={editTask} />,
    "Inventory Item": <InventoryPopup item={item} quantity={quantity} setQuantity={setQuantity}/>
  };

  const refetchInventory = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return;
  
    const { data, error } = await supabase
      .from("inventory")
      .select("inventory")
      .eq("user_id", user.id)
      .single();
  
    if (error) {
      console.error("Inventory fetch error:", error.message);
    } else {
      setInventory(data.inventory);
    }
  };
  

  const handleDialogChange = async (isOpen) => {
    console.log("handleDialogChange called");
    if (!isOpen && item) {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
  
      const newEntry = { [item.name]: Number(quantity) };
  
      const { error } = await supabase.rpc('merge_inventory', {
        user_id_input: user.id,
        new_data: newEntry,
      });
  
      if (error) {
        console.error("Failed to update inventory:", error.message);
      } else {
        await refetchInventory(); // updates the actual inventory state used by MaterialIcons
      }
    }
  };

  async function handleUpgrade({
    character,
    taskMaterials,
    inventory,
    taskId,
    renamedMaterials,
    task
  }) {
    const updatedInventory = { ...inventory };
  
    for (const materialKey of Object.keys(taskMaterials)) {
      const foundItemName = renamedMaterials[materialKey] || materialKey;
      const foundItem = { name: foundItemName };
  
      const { amountLeft, craftAmount } = calculateLeft({
        materialKey,
        foundItem,
        inventory: updatedInventory,
        taskMaterials,
        character,
        experienceValues,
      });
  
      const requiredAmount = taskMaterials[materialKey];
      const existingAmount = updatedInventory[foundItem.name] || 0;
  
      const toDeduct = Math.min(existingAmount, requiredAmount);
      updatedInventory[foundItem.name] = existingAmount - toDeduct;
  
      if (craftAmount > 0) {
        const ascensionTiers = ["basic_am", "medium_am", "advanced_am", "premium_am"];
        const talentTiers = ["basic_tm", "medium_tm", "advanced_tm", "premium_tm"];
        const isAsc = ascensionTiers.includes(materialKey);
        const isTal = talentTiers.includes(materialKey);
        const tiers = isAsc ? ascensionTiers : isTal ? talentTiers : null;
  
        if (tiers) {
          const currentTierIndex = tiers.indexOf(materialKey);
          for (let i = currentTierIndex - 1; i >= 0; i--) {
            const tierGap = currentTierIndex - i;
            const requiredPerUnit = Math.pow(3, tierGap);
            const subMaterialName = character.materials[0][
              isAsc ? "ascension_materials" : "talent_materials"
            ][tiers[i]];
            const available = updatedInventory[subMaterialName] || 0;
            const used = craftAmount * requiredPerUnit;
            updatedInventory[subMaterialName] = Math.max(0, available - used);
          }
        }
      }
    }
  
    // Update inventory in Supabase
    const { error: inventoryError } = await supabase
      .from("inventory")
      .update({ inventory: updatedInventory })
      .eq("user_id", userId);
  
    if (inventoryError) {
      console.error("Failed to update inventory:", inventoryError.message);
      return false;
    }
  
    // Update planner_tasks: set curr_AL = target_AL and curr_talents = tar_talents
    const { error: plannerError } = await supabase
      .from("planner_tasks")
      .update({
        curr_AL: task.target_AL,           // <-- Make sure this exists
        curr_talents: task.tar_talents     // <-- Make sure this exists
      })
      .eq("user_id", userId)
      .eq("id", taskId);
  
    if (plannerError) {
      console.error("Failed to update planner task:", plannerError.message);
      return false;
    }

    task.task === "resonator" ? toast("Successfully upgraded the resonator.") : toast("Successfully upgraded the weapon.")
  
    return true;
  }
  
  async function handleDelete(taskId, userId) {
    const { error } = await supabase
      .from("planner_tasks")
      .delete()
      .eq("id", taskId)
      .eq("user_id", userId);
  
    if (error) {
      console.error("Failed to delete task:", error.message);
      return false;
    }

    toast("Resonator has been deleted.")
  
    return true;
  }
  
  useEffect(() => {
    let tasksChannel, inventoryChannel;
  
    async function fetchData() {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
  
      if (userError || !user) {
        console.error("User fetch error:", userError?.message);
        setLoading(false);
        return;
      }
  
      setUserId(user.id);
  
      // Fetch tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from("planner_tasks")
        .select("*")
        .eq("user_id", user.id)
        .order("priority", { ascending: true });
  
      if (tasksError) {
        console.error("Tasks fetch error:", tasksError.message);
      } else {
        setTasks(tasksData || []);
      }
  
      // Fetch inventory
      const { data: inventoryData, error: inventoryError } = await supabase
        .from("inventory")
        .select("inventory")
        .eq("user_id", user.id)
        .single();
  
      if (inventoryError) {
        if (inventoryError.code === "PGRST116") {
          const { error: insertError } = await supabase.from("inventory").insert([
            { user_id: user.id, inventory: {} }
          ]);
          if (insertError) {
            console.error("Inventory insert error:", insertError.message);
          } else {
            setInventory({});
          }
        } else {
          console.error("Inventory fetch error:", inventoryError.message);
        }
      } else {
        setInventory(inventoryData.inventory);
      }
  
      setLoading(false);
  
      // Realtime subscriptions
      tasksChannel = supabase
        .channel("planner_tasks_updates")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "planner_tasks",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            if (payload.eventType === "INSERT") {
              setTasks((prev) => [...prev, payload.new]);
            } else if (payload.eventType === "UPDATE") {
              setTasks((prev) =>
                prev.map((task) =>
                  task.id === payload.new.id ? payload.new : task
                )
              );
            } else if (payload.eventType === "DELETE") {
              setTasks((prev) =>
                prev.filter((task) => task.id !== payload.old.id)
              );
            }
          }
        )
        .subscribe();
  
      inventoryChannel = supabase
        .channel("inventory_updates")
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "inventory",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            setInventory(payload.new.inventory);
          }
        )
        .subscribe();
    }
  
    fetchData();
  
    // ✅ Clean up on unmount
    return () => {
      if (tasksChannel) supabase.removeChannel(tasksChannel);
      if (inventoryChannel) supabase.removeChannel(inventoryChannel);
    };
  }, []);
  
  

  if (loading) return (
    <div className="flex flex-col w-full h-full space-y-3 opacity-25">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
  

  return (
    <div id="task-cards" className="grid lg:grid-cols-2 p-4 gap-4">
      <Dialog open={open} 
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen && selectedTrigger === "Inventory Item") {handleDialogChange()};
        if (!isOpen) {setEditingCharacter(null); setEditTask(null); setSelectedTrigger("")}
      }}>
      {tasks.map((task, i) => {
        const taskMaterials = processTask(
          task,
          characterascensionrecipe,
          materialTemplate,
          statbonusrecipe,
          inherentskillrecipe,
          talentrecipes,
          weaponrecipe
        );

        const list = task.task === "resonator" ? samplecharacterlist : sampleweaponlist;
        const character = list.find(item => item.name === task.task_name);


        const renamedMaterials = mapMaterialNames(taskMaterials, character);
        const canCraft = hasSufficientInventoryWithCrafting(renamedMaterials, inventory, taskMaterials, character, experienceValues);

        console.log("requirements:", taskMaterials)
        console.log("inventory:", inventory, renamedMaterials)
        console.log("canCraft?", canCraft)

        return (
          <div
            id="task"
            key={i}
            className="border-1 border-white/10 rounded-lg flex max-w-[600px] max-h-[450px]"
          >
            <div
              id="icon"
              className={`w-[40%] flex items-center overflow-hidden transition
              ${
                character.rarity === 5
                  ? "bg-radial-[at_100%_80%_] from-[#FCD063]/80 hover:from-[#FCD063] to-transparent to-85%"
                  : character.rarity === 4
                    ? "bg-radial-[at_100%_80%_] from-[#AC6EFA]/80 hover:from-[#AC6EFA] to-transparent to-85%"
                    : items[0].qualityLevel === 3
                      ? "bg-radial-[at_100%_80%_] from-[#21AAFF]/80 hover:from-[#21AAFF] to-transparent to-85%"
                      : items[0].qualityLevel === 2
                        ? "bg-radial-[at_100%_80%_] from-[#69D68A]/80 hover:from-[#69D68A] to-transparent to-85%"
                        : "bg-radial-[at_100%_80%_] from-white/80 hover:from-white to-transparent to-85%"
              }
              `}
            >
              <div id="image">
                <img
                  src={task.task === "resonator" ? character.characterportrait : character.image}
                  className="hover:scale-110 transition ease-in-out"
                  alt={character.name}
                />
              </div>
            </div>
            <div id="details" className="p-2 w-[60%]">
              <div className="flex w-full justify-between">
                <div className="w-full">
                  <div id="name">{character.name}</div>
                  <div id="subtext" className="flex">
                    Level: {task.task === "resonator" ? characterascensionrecipe[task.curr_AL].level : weaponrecipe[task.curr_AL].level} - {task.task === "resonator" ? characterascensionrecipe[task.target_AL].level : weaponrecipe[task.target_AL].level}
                  </div>
                </div>
                <div id="buttons" className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem disabled={!canCraft} onClick={() => {handleUpgrade({character, taskMaterials, inventory, taskId: task.id, renamedMaterials, task})}}><CircleFadingArrowUp /> Upgrade</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DialogTrigger>
                        <DropdownMenuItem onClick={() => {
                            setTimeout(() => {
                              setEditingCharacter(character);
                              setEditTask(task);
                              setOpen(true);
                              setSelectedTrigger("Edit Resonator");
                            }, 100); // short delay ensures dropdown unmounts
                          }}
                        >
                          <Pencil /> Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DropdownMenuItem className="text-red-600 hover:text-red-600" onClick={() => handleDelete(task.id, userId)}><Trash2 color="red"/> Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div id="materials-left" className="mt-3">
                <div id="subtext">To farm:</div>
                <div id="materials-to-farm" className="flex flex-wrap justify-center gap-3 w-full max-h-[250px] overflow-auto">
                  { // Other Materials (not ascension_materials or talent_materials)
                    Object.entries(character.materials[0]).map(([materialKey, materialName]) => {
                      // Skip ascension_materials and talent_materials
                      if (materialKey === "ascension_materials" || materialKey === "talent_materials") return null;

                      const foundItem = items.find((item) => item.name === materialName);
                      const itemQuantity = inventory?.[foundItem.name] || 0;

                      const { amountLeft, craftAmount } = calculateLeft({ 
                        materialKey, 
                        foundItem, 
                        inventory, 
                        taskMaterials, 
                        character,
                        experienceValues
                      });
                
                      return (
                        <DialogTrigger asChild>
                          <div
                            onClick={() => {
                              setItem(foundItem); // ← probably meant to set `foundItem`, not `item`
                              setQuantity(itemQuantity);
                              setSelectedTrigger("Inventory Item")
                            }}
                          >
                            <MaterialIcons 
                              amountLeft={amountLeft}
                              craftAmount={craftAmount}
                              materialKey={materialKey}
                              foundItem={foundItem}
                            />
                          </div>
                        </DialogTrigger>
                      );
                    })
                  }

                  { //Ascension Materials
                    Object.entries(character.materials[0].ascension_materials).map(
                      ([materialKey, materialName]) => {
                        const foundItem = items.find(
                          (item) => item.name === materialName
                        );
                        const itemQuantity = inventory?.[foundItem.name] || 0;

                        const { amountLeft, craftAmount } = calculateLeft({ 
                          materialKey, 
                          foundItem, 
                          inventory, 
                          taskMaterials, 
                          character,
                          experienceValues
                        });
                    
                        return (
                          <DialogTrigger asChild>
                            <div
                              onClick={() => {
                                setItem(foundItem); // ← probably meant to set `foundItem`, not `item`
                                setQuantity(itemQuantity);
                                setSelectedTrigger("Inventory Item")
                              }}
                            >
                              <MaterialIcons 
                                amountLeft={amountLeft}
                                craftAmount={craftAmount}
                                materialKey={materialKey}
                                foundItem={foundItem}
                              />
                            </div>
                          </DialogTrigger>
                        );
                      }
                    )
                  }

                  { //Talent Materials
                    Object.entries(character.materials[0].talent_materials).map(
                      ([materialKey, materialName]) => {
                        const foundItem = items.find(
                          (item) => item.name === materialName
                        );
                        const itemQuantity = inventory?.[foundItem.name] || 0;

                        const { amountLeft, craftAmount } = calculateLeft({ 
                          materialKey, 
                          foundItem, 
                          inventory, 
                          taskMaterials, 
                          character,
                          experienceValues
                        });
                    
                        return (
                          <DialogTrigger asChild>
                            <div
                              onClick={() => {
                                setItem(foundItem); // ← probably meant to set `foundItem`, not `item`
                                setQuantity(itemQuantity);
                                setSelectedTrigger("Inventory Item")
                              }}
                            >
                              <MaterialIcons 
                                amountLeft={amountLeft}
                                craftAmount={craftAmount}
                                materialKey={materialKey}
                                foundItem={foundItem}
                              />
                            </div>
                          </DialogTrigger>
                        );
                      }
                    )
                  }

                </div>
              </div>
            </div>
          </div>
        );
      })}
      
        <DialogContent className="text-white bg-linear-to-tr from-[#111112] from-15% to-[#222325] to-80% border-0">
          <DialogHeader className="hidden">
            <DialogTitle>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {dialogContentMap[selectedTrigger]}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskCards;
