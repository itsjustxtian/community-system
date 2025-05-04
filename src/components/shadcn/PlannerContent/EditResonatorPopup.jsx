import { useState } from "react";
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
  Edit,
} from "lucide-react";
import {  characterascensionrecipe } from "../../layouts/data/recipes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const EditResonatorPopup = ({ closeDialog, character, task }) => {
  console.log("task in EditResonator Popup", task);
  if (!task) return null; 

  const [fromASCisOpen, setFromASCisOpen] = useState(false);
  const [toASCisOpen, setToASCisOpen] = useState(false);

  const [curr_AL, setCurr_AL] = useState(task.curr_AL); //Ascension Level
  const [target_AL, setTarget_AL] = useState(task.target_AL);

  const [curr_talents, setCurr_Talents] = useState(
    task.task === "resonator"
      ? {
          normal_atk: task.curr_talents.normal_atk,
          res_skill: task.curr_talents.res_skill,
          res_lib: task.curr_talents.res_lib,
          forte_cir: task.curr_talents.forte_cir,
          intro_skill: task.curr_talents.intro_skill,
          inh_skill: task.curr_talents.inh_skill,
          stat_bonus1: task.curr_talents.stat_bonus1,
          stat_bonus2: task.curr_talents.stat_bonus2,
          stat_bonus3: task.curr_talents.stat_bonus3,
          stat_bonus4: task.curr_talents.stat_bonus4,
        }
      : null
  );
  

  const [tar_talents, setTar_Talents] = useState(
    task.task === "resonator"
      ? {
          normal_atk: task.tar_talents.normal_atk,
          res_skill: task.tar_talents.res_skill,
          res_lib: task.tar_talents.res_lib,
          forte_cir: task.tar_talents.forte_cir,
          intro_skill: task.tar_talents.intro_skill,
          inh_skill: task.tar_talents.inh_skill,
          stat_bonus1: task.tar_talents.stat_bonus1,
          stat_bonus2: task.tar_talents.stat_bonus2,
          stat_bonus3: task.tar_talents.stat_bonus3,
          stat_bonus4: task.tar_talents.stat_bonus4,
        }
        : null
  );

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

  async function handleUpdateTask(taskId) {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    console.log("Updating task with ID:", taskId);
    console.log("For user ID:", user.id);

  
    if (userError) {
      console.error('User fetch error:', userError.message);
      return;
    }
  
    if (!user) {
      console.error('No user logged in.');
      return;
    }
  
    const { error: updateError } = await supabase
      .from('planner_tasks')
      .update({
        curr_AL: curr_AL,
        target_AL: target_AL,
        curr_talents: curr_talents,
        tar_talents: tar_talents
      })
      .eq('id', taskId)
      .eq('user_id', user.id); // Optional: ensures only user's task gets updated
  
    if (updateError) {
      console.error('Update failed:', updateError.message);
      toast("Failed to update resonator!");
    } else {
      toast('Resonator details updated!');
      closeDialog();
    }
  }
  

  return (
    <div id="resonator-popup" className="flex flex-col gap-2">
      <div className="flex border-b-1 border-b-white/20 pb-6">
        <div className="flex items-center gap-6">
          <Avatar className="w-16 h-16 bg-[#222325]">
            <AvatarImage src={task.task === "resonator" ? character.charactericon : character.image} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <p>{character.name}</p>
        </div>
      </div>
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

        {task.task === "resonator" && <div className="flex flex-col gap-4">
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
        </div>}

        {task.task === "resonator" && <div className="flex flex-col gap-4">
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
        </div>}
      </div>

      <div className="border-b-1 border-b-white/20 py-2" />

      <div className="flex gap-2 justify-end">
        <button 
            className="transition flex justify-center items-center gap-2 p-2 bg-white/20 hover:bg-white/40 rounded-md"
            onClick={() => {
              handleUpdateTask(task.id)}}
        >
            <Edit /> Update
        </button>
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

export default EditResonatorPopup;
