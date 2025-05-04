import { useEffect, useRef, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"  
import { items } from "../layouts/data/itemdata"
import InventoryPopup from "./ItemsContent/InventoryPopup";
import { supabase } from "@/lib/supabaseClient";
import { Skeleton } from "../ui/skeleton";

const itemTags = [
  "Universal Currency",
  "Resonator EXP Material",
  "Weapon EXP Material",
  "Echo Development Material",
  "Ascension Material",
  "Resonator Ascension Material",
  "Weapon & Skill Material",
  "Skill Upgrade Material",
  
];



const useUserInventory = () => {
  const [inventory, setInventory] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchInventory = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      // Use localStorage
      const localData = localStorage.getItem("guest_inventory");
      setInventory(localData ? JSON.parse(localData) : {});
      setUser(null);
      setLoading(false);
      return;
    }

    setUser(user);

    const { data, error } = await supabase
      .from("inventory")
      .select("inventory")
      .eq("user_id", user.id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        const { error: insertError } = await supabase.from("inventory").insert([{
          user_id: user.id,
          inventory: {},
        }]);

        if (insertError) {
          console.error("Insert error:", insertError.message);
        } else {
          setInventory({});
        }
      } else {
        console.error("Inventory fetch error:", error.message);
      }
    } else {
      setInventory(data.inventory);
    }

    setLoading(false);
  };

  const saveInventory = async (newData: Record<string, number>) => {
    if (user) {
      const { error } = await supabase.rpc("merge_inventory", {
        user_id_input: user.id,
        new_data: newData,
      });

      if (error) {
        console.error("Supabase update error:", error.message);
      } else {
        await fetchInventory(); // ✅ Still refetch after successful save
      }
    } else {
      const current = localStorage.getItem("guest_inventory");
      const parsed = current ? JSON.parse(current) : {};
      const merged = { ...parsed, ...newData };
      localStorage.setItem("guest_inventory", JSON.stringify(merged));
      setInventory(merged);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return {
    inventory,
    user,
    loading,
    saveInventory,
    refetchInventory: fetchInventory // ✅ restore this!
  };
};


  
  

const ItemsContent = () => {
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { inventory, user, loading, saveInventory, refetchInventory } = useUserInventory();

    const handleDialogChange = async (isOpen) => {
      if (!isOpen && item) {
        const newEntry = { [item.name]: Number(quantity) };
        await saveInventory(newEntry);
      }
    };
    

    function getTagSortIndex(item: typeof items[number]) {
      for (let tag of itemTags) {
        if (item.tags.includes(tag)) {
          return itemTags.indexOf(tag);
        }
      }
      return itemTags.length; // Push unmatched tags to the end
    }
      
    // Sort the items
    const sortedItems = [...items].sort((a, b) => {
      return getTagSortIndex(a) - getTagSortIndex(b);
    });      
      
      
    
    if (loading) return (
      <div className="flex flex-col space-y-3 opacity-25">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );

  return (
    <div>
        <Dialog onOpenChange={handleDialogChange}>    
            <div id="character-list" className="grid justify-items-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
                {sortedItems.map((item,i) => {
                    const itemQuantity = inventory?.[item.name] || 0;
                    
                    return (
                    <DialogTrigger 
                    key={i} 
                    onClick={() => {
                        setItem(item);
                        setQuantity(itemQuantity);
                    }}        
                    className="relative icon-card cursor-pointer transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg"
                    >
                        <div 
                        title={item.name}
                        className={`rounded-lg h-[125px]
                        ${  item.qualityLevel === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%" :
                            item.qualityLevel === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%" :
                            item.qualityLevel === 3 ? "bg-linear-to-t from-[#21AAFF]/80 hover:from-[#21AAFF] transition from-10% to-transparent to-70%" :
                            item.qualityLevel === 2 ? "bg-linear-to-t from-[#69D68A]/80 hover:from-[#69D68A] transition from-10% to-transparent to-70%" :
                            ""
                        }`}>
                            <img src={item.image} alt={item.name} id='character-icons' className={'translate-y-3'}/>
                        </div>
                        <p id="name" title={item.name} className="truncate px-2">{item.name}</p>
                    </DialogTrigger>
                )})}
            </div>

            <DialogContent className="text-white bg-linear-to-tr from-[#111112] from-15% to-[#222325] to-80% border-0">
                <DialogHeader className="hidden">
                <DialogTitle ></DialogTitle>
                <DialogDescription></DialogDescription>
                </DialogHeader>
                <InventoryPopup item={item} quantity={quantity} setQuantity={setQuantity}/>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default ItemsContent
