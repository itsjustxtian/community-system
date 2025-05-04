import React, { useState } from "react";
import {
  UserRoundPlus,
  Swords,
  ArrowUpDown,
  Wrench,
  CircleFadingArrowUp,
  ArrowDownUp,
  ChevronDown,
  Circle,
  Diamond,
  Square,
  X,
} from "lucide-react";
import {
  characterlist,
  items,
  elementfilters,
} from "../../layouts/data/itemdata";
/*import {
  samplecharacterlist,
  sampleweaponlist,
} from "../../layouts/data/sampledata";*/
const samplecharacterlist = characterlist;
import {
  characterascensionrecipe,
  talentrecipes,
  statbonusrecipe,
  inherentskillrecipe,
} from "../../layouts/data/recipes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Toggle } from "@/components/ui/toggle";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

const ResonatorPopup = ({ closeDialog }) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fromASCisOpen, setFromASCisOpen] = useState(false);
  const [toASCisOpen, setToASCisOpen] = useState(false);

  const [curr_AL, setCurr_AL] = useState(0); //Ascension Level
  const [target_AL, setTarget_AL] = useState(13);

  const [curr_talents, setCurr_Talents] = useState({
    normal_atk: 1,
    res_skill: 1,
    res_lib: 1,
    forte_cir: 1,
    intro_skill: 1,
    inh_skill: 0,
    stat_bonus1: 0,
    stat_bonus2: 0,
    stat_bonus3: 0,
    stat_bonus4: 0,
  });

  const [tar_talents, setTar_Talents] = useState({
    normal_atk: 10,
    res_skill: 10,
    res_lib: 10,
    forte_cir: 10,
    intro_skill: 10,
    inh_skill: 2,
    stat_bonus1: 2,
    stat_bonus2: 2,
    stat_bonus3: 2,
    stat_bonus4: 2,
  });

  const talentKeys = [
    { key: "normal_atk", label: "Basic Attack" },
    { key: "res_skill", label: "Resonance Skill" },
    { key: "res_lib", label: "Resonance Liberation" },
    { key: "forte_cir", label: "Forte Circuit" },
    { key: "intro_skill", label: "Intro Skill" },
  ];

  const inherentKeys = [
    { key: "stat_bonus1", label: "Stat Bonus 1" },
    { key: "stat_bonus2", label: "Stat Bonus 2" },
    { key: "inh_skill", label: "Inherent Skill" },
    { key: "stat_bonus3", label: "Stat Bonus 3" },
    { key: "stat_bonus4", label: "Stat Bonus 4" },
  ];

  async function handleAddTask() {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    const selectedCharacter = samplecharacterlist[selected];
  
    if (userError) {
      console.error('User fetch error:', userError.message);
      return;
    }
  
    if (!user) {
      console.error('No user logged in.');
      return;
    }
  
    // 👇 Check if a resonator already exists for this user
    const { data: existingTask, error: fetchError } = await supabase
      .from('planner_tasks')
      .select('*')
      .eq('user_id', user.id)
      .eq('task_name', selectedCharacter.name)
      .maybeSingle();
  
    if (fetchError) {
      console.error('Fetch error:', fetchError.message);
      return;
    }
  
    if (existingTask) {
      toast.error("Resonator already exists! Try editing the task instead.");
      return;
    }
  
    // 👇 Get the highest priority for this user
    const { data: maxPriorityData, error: priorityError } = await supabase
      .from('planner_tasks')
      .select('priority')
      .eq('user_id', user.id)
      .order('priority', { ascending: false })
      .limit(1)
      .maybeSingle();
  
    if (priorityError) {
      console.error('Priority fetch error:', priorityError.message);
      return;
    }
  
    const nextPriority = maxPriorityData?.priority ? maxPriorityData.priority + 1 : 1;
    // If no tasks yet → start at 1
  
    // ✅ Insert new task with next priority
    const { error } = await supabase
      .from('planner_tasks')
      .insert([
        {
          user_id: user.id,
          task: "resonator",
          task_name: selectedCharacter.name,
          priority: nextPriority, // 👈 Add here
          curr_AL: curr_AL,
          target_AL: target_AL,
          curr_talents: curr_talents,
          tar_talents: tar_talents,
        }
      ]);
  
    if (error) {
      console.error('Upload failed:', error.message);
      toast("Failed to upload resonator!");
    } else {
      console.log('Upload successful!');
      closeDialog();
    }
  }
  
  
  
  return (
    <div id="resonator-popup" className="flex flex-col gap-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            id="selected-resonator"
            className="w-full bg-white/20 flex rounded-lg px-6 py-2"
          >
            {selected != null ? (
              <div className="flex items-center justify-center w-full">
                {samplecharacterlist[selected].name}
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                Select a Resonator...
              </div>
            )}{" "}
            <ArrowDownUp />
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-linear-to-tr from-[#111112] from-15% to-[#222325] to-80% border-0 popover-content-same-as-trigger">
          <Command className="bg-transparent text-white ">
            <CommandInput placeholder="Type a resonator or search..." />
            <CommandList className="command-list">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {samplecharacterlist.map((character, i) => (
                  <CommandItem
                    key={i}
                    className={`flex justify-between
                                  ${
                                    character.rarity === 5
                                      ? "text-[#FCD063]"
                                      : character.rarity === 4
                                        ? "text-[#AC6EFA]"
                                        : ""
                                  }`}
                    value={character.name}
                    onSelect={() => {
                      setSelected(i);
                      setIsOpen(false);
                    }}
                  >
                    <img
                      src={character.charactericon}
                      className="max-h-10 rounded object-contain"
                    />
                    <p className="truncate">{character.name}</p>
                    <img
                      src={
                        character.element
                          ? elementfilters.find(
                              (element) => element.element === character.element
                            ).src
                          : "hidden"
                      }
                      className="max-h-10 rounded object-contain"
                      title={character.element.toUpperCase()}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selected != null && (
        <div id="talent-section" className="overflow-y-scroll ">
          <p className="flex">Ascension Level</p>
          <div className="text-white flex flex-row justify-center items-center gap-2">
            <Popover open={fromASCisOpen} onOpenChange={setFromASCisOpen}>
              <PopoverTrigger className="bg-white/20 rounded py-1 flex w-full px-2">
                <div className="w-full">
                  {characterascensionrecipe[curr_AL].level}
                </div>
                <ChevronDown />
              </PopoverTrigger>
              <PopoverContent className="p-0 popover-content-same-as-trigger max-h-[200px] overflow-y-scroll">
                {characterascensionrecipe.map((tier, i) => (
                  <ul key={i} className="flex flex-col justify-center">
                    <button
                      className="text-center hover:bg-gray-300 border-b-1 p-2"
                      key={i}
                      onClick={() => {
                        setCurr_AL(i);
                        setFromASCisOpen(false);
                      }}
                    >
                      {tier.level}
                    </button>
                  </ul>
                ))}
              </PopoverContent>
            </Popover>
            <Popover open={toASCisOpen} onOpenChange={setToASCisOpen}>
              <p>to</p>
              <PopoverTrigger className="bg-white/20 rounded py-1 flex w-full px-2">
                <div className="w-full">
                  {characterascensionrecipe[target_AL].level}
                </div>
                <ChevronDown />
              </PopoverTrigger>
              <PopoverContent className="p-0 popover-content-same-as-trigger max-h-[200px] overflow-y-scroll">
                {characterascensionrecipe.map(
                  (tier, i) =>
                    i >= curr_AL && (
                      <div key={i} className="flex flex-col justify-center">
                        <button
                          className="text-center hover:bg-gray-300 border-b-1 p-2"
                          key={i}
                          onClick={() => {
                            setTarget_AL(i);
                            setToASCisOpen(false);
                          }}
                        >
                          {tier.level}
                        </button>
                      </div>
                    )
                )}
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="border-b-1 border-b-white/20 py-2">Talents</h1>
            {talentKeys.map((talent) => (
              <div
                key={talent.key}
                id={talent.key}
                className="grid grid-cols-2 gap-2 mb-2"
              >
                <p className="text-nowrap">{talent.label}:</p>
                <div className="flex justify-start gap-2">
                  <input
                    className="w-1/4 text-center border-b-1 border-b-white/20"
                    type="number"
                    min={talent.key.startsWith("inh_skill") ? 0 : 1}
                    max={10}
                    value={curr_talents[talent.key]}
                    onChange={(e) =>
                      setCurr_Talents((prev) => ({
                        ...prev,
                        [talent.key]: parseInt(e.target.value, 10),
                      }))
                    }
                  />
                  to
                  <input
                    className="w-1/4 text-center border-b-1 border-b-white/20"
                    type="number"
                    min={talent.key.startsWith("inh_skill") ? 1 : 1}
                    max={10}
                    value={tar_talents[talent.key]}
                    onChange={(e) =>
                      setTar_Talents((prev) => ({
                        ...prev,
                        [talent.key]: parseInt(e.target.value, 10),
                      }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="border-b-1 border-b-white/20 py-2">
              Inherent Skills and Stat Bonuses
            </h1>

            {inherentKeys.map((talent) => (
              <div
                key={talent.key}
                id={talent.key}
                className="grid grid-cols-2 gap-2 mb-2"
              >
                <p className="text-nowrap">{talent.label}:</p>
                <div className="flex justify-start gap-2">
                  <input
                    className="w-1/4 text-center border-b-1 border-b-white/20"
                    type="number"
                    min={talent.key.startsWith("inh_skill") ? 0 : 1}
                    max={10}
                    value={curr_talents[talent.key]}
                    onChange={(e) =>
                      setCurr_Talents((prev) => ({
                        ...prev,
                        [talent.key]: parseInt(e.target.value, 10),
                      }))
                    }
                  />
                  to
                  <input
                    className="w-1/4 text-center border-b-1 border-b-white/20"
                    type="number"
                    min={talent.key.startsWith("inh_skill") ? 1 : 1}
                    max={10}
                    value={tar_talents[talent.key]}
                    onChange={(e) =>
                      setTar_Talents((prev) => ({
                        ...prev,
                        [talent.key]: parseInt(e.target.value, 10),
                      }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-b-1 border-b-white/20 py-2" />

      <div className="flex gap-2 justify-end">
        {selected != null && (
          <button className="transition flex justify-center items-center gap-2 p-2 bg-white/20 hover:bg-white/40 rounded-md" onClick={handleAddTask}>
            <UserRoundPlus /> Add Resonator
          </button>
        )}
        <button
          className="transition flex justify-center items-center gap-2 p-2 bg-red-600/50 hover:bg-red-600/80 rounded-md"
          onClick={closeDialog}
        >
          <X /> Cancel
        </button>
      </div>
    </div>
  );
};

export default ResonatorPopup;
