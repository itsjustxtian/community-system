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
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import { weaponrecipe } from "@/components/layouts/data/weapondata";
import { sampleweaponlist } from "@/components/layouts/data/sampledata";
import { weaponfilters } from "@/components/layouts/data/itemdata";

const weapons = sampleweaponlist;

const sortedweapons = weapons.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});




const WeaponPopup = ({closeDialog}) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fromASCisOpen, setFromASCisOpen] = useState(false);
  const [toASCisOpen, setToASCisOpen] = useState(false);
  const [curr_AL, setCurr_AL] = useState(0); //Ascension Level
  const [target_AL, setTarget_AL] = useState(13);

  async function handleAddTask() {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    const selectedWeapon = weapons[selected];
  
    if (userError) {
      console.error('User fetch error:', userError.message);
      return;
    }
  
    if (!user) {
      console.error('No user logged in.');
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
          task: "weapon",
          task_name: selectedWeapon.name,
          priority: nextPriority, // 👈 Add here
          curr_AL: curr_AL,
          target_AL: target_AL
        }
      ]);
  
    if (error) {
      console.error('Upload failed:', error.message);
      toast("Failed to upload weapon!");
    } else {
      console.log('Upload successful!');
      closeDialog();
    }
  }

  return (
    <div id="weapon-popup" className="flex flex-col gap-2">
      
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            id="selected-resonator"
            className="w-full bg-white/20 flex rounded-lg px-6 py-2"
          >
            {selected != null ? (
              <div className="flex items-center justify-center w-full">
                {weapons[selected].name}
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                Select a Weapon...
              </div>
            )}
            <ArrowDownUp />
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-linear-to-tr from-[#111112] from-15% to-[#222325] to-80% border-0 popover-content-same-as-trigger">
          <Command className="bg-transparent text-white ">
            <CommandInput placeholder="Type a resonator or search..." />
            <CommandList className="command-list">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {sortedweapons.map((weapon, i) => (
                  <CommandItem
                    key={i}
                    className={`flex justify-between
                                  ${
                                    weapon.rarity === 5
                                      ? "text-[#FCD063]"
                                      : weapon.rarity === 4
                                        ? "text-[#AC6EFA]"
                                        : ""
                                  }`}
                    value={weapon.name}
                    onSelect={() => {
                      setSelected(i);
                      setIsOpen(false);
                    }}
                  >
                    <img
                      src={weapon.image}
                      className="max-h-10 rounded object-contain"
                    />
                    <p className="truncate">{weapon.name}</p>
                    <img
                      src={
                        weapon.type
                          ? weaponfilters.find(
                              (type) => type.weapon === weapon.type
                            ).src
                          : "hidden"
                      }
                      className="max-h-10 rounded object-contain"
                      title={weapon.type}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selected != null && (<div className="text-white flex flex-row justify-center items-center gap-2">
        <Popover open={fromASCisOpen} onOpenChange={setFromASCisOpen}>
          <PopoverTrigger className="bg-white/20 rounded py-1 flex w-full px-2">
            <div className="w-full">
              {weaponrecipe[curr_AL].level}
            </div>
            <ChevronDown />
          </PopoverTrigger>
          <PopoverContent className="p-0 popover-content-same-as-trigger max-h-[200px] overflow-y-scroll">
            {weaponrecipe.map((tier, i) => (
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
              {weaponrecipe[target_AL].level}
            </div>
            <ChevronDown />
          </PopoverTrigger>
          <PopoverContent className="p-0 popover-content-same-as-trigger max-h-[200px] overflow-y-scroll">
            {weaponrecipe.map(
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
      </div>)}

      <div className="flex gap-2 justify-end">
        {selected != null && (
          <button className="transition flex justify-center items-center gap-2 p-2 bg-white/20 hover:bg-white/40 rounded-md" onClick={handleAddTask}>
            <Swords /> Add Weapon
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
  )
}

export default WeaponPopup
