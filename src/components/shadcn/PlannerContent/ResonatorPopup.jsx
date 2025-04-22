import React, { useState } from 'react'
import { UserRoundPlus, Swords, ArrowUpDown, Wrench, CircleFadingArrowUp, ArrowDownUp, ChevronDown } from 'lucide-react'
import { characterlist, items, elementfilters } from '../../layouts/data/itemdata'
import { samplecharacterlist, sampleweaponlist } from '../../layouts/data/sampledata'
import { characterascensionrecipe, talentrecipes, statbonusrecipe, inherentskillrecipe } from '../../layouts/data/recipes'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
} from "@/components/ui/command"

const ResonatorPopup = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fromASCisOpen, setFromASCisOpen] = useState(false);
  const [toASCisOpen, setToASCisOpen] = useState(false);

  const [curr_AL, setCurr_AL] = useState(0); //Ascension Level
  const [target_AL, setTarget_AL] = useState(0);

  const [curr_talents, setCurr_Talents] = useState(
    {
      normal_atk: 1,
      res_skill: 1,
      res_lib: 1,
      forte_cir: 1,
      intro_skill: 1,
      inh_skill_1: 0,
      inh_skill_2: 0,
      stat_bonus1_1: 0,
      stat_bonus1_2: 0,
      stat_bonus2_1: 0,
      stat_bonus2_2: 0,
    }
  )

  const [tar_talents, setTar_Talents] = useState(
    {
      normal_atk: 10,
      res_skill: 10,
      res_lib: 10,
      forte_cir: 10,
      intro_skill: 10,
      inh_skill_1: 1,
      inh_skill_2: 1,
      stat_bonus1_1: 1,
      stat_bonus1_2: 1,
      stat_bonus2_1: 1,
      stat_bonus2_2: 1,
    }
  )

  const talentKeys = [
    { key: 'normal_atk', label: 'Basic Attack' },
    { key: 'res_skill', label: 'Resonance Skill' },
    { key: 'res_lib', label: 'Resonance Liberation' },
    { key: 'forte_cir', label: 'Forte Circuit' },
    { key: 'intro_skill', label: 'Intro Skill' },
  ];


  function ascendCharacter(initialTier, targetTier){
    const requiredMats = {
      experience: 0,
      shellcredits: 0,
      basic_am: 0,
      medium_am: 0,
      advanced_am: 0,
      premium_am: 0,
      bossmaterial: 0,
      regionalspecialty: 0,
    }

    if (initialTier === targetTier){
      return requiredMats;
    }

    if (initialTier < 1 || targetTier > characterascensionrecipe.length || initialTier > targetTier){
      return console.error("Invalid tier range.")
    }

    for (let i = initialTier - 1 ; i < targetTier ; i++){
      const recipe = characterascensionrecipe[i]

      for (const [mat, value] of Object.entries(recipe)){
        if (mat in requiredMats){
          requiredMats[mat] += value;
        }
      }
    }
    
    return requiredMats;
  }
  
  function levelTalent(initialTier, targetTier){
    const requiredMats = {
      shellcredits: 0,
      basic_am: 0,
      medium_am: 0,
      advanced_am: 0,
      premium_am: 0,
      basic_tm: 0,
      medium_tm: 0,
      advanced_tm: 0,
      premium_tm: 0,
      weeklyboss: 0,
    }

    if (initialTier === targetTier){
      return requiredMats;
    }

    if (initialTier < 1 || targetTier > talentrecipes.length || initialTier > targetTier){
      return console.error("Invalid tier range.")
    }

    for (let i = initialTier - 1 ; i < targetTier ; i++){
      const recipe = talentrecipes[i]

      for (const [mat, value] of Object.entries(recipe)){
        if (mat in requiredMats){
          requiredMats[mat] += value;
        }
      }
    }
    return requiredMats;
  }

  function levelStatBonus(initialTier, targetTier){
    const requiredMats = {
      shellcredits: 0,
      basic_am: 0,
      medium_am: 0,
      advanced_am: 0,
      premium_am: 0,
      basic_tm: 0,
      medium_tm: 0,
      advanced_tm: 0,
      premium_tm: 0,
      weeklyboss: 0,
    }

    if (initialTier === targetTier){
      return requiredMats;
    }

    if (initialTier < 1 || targetTier > statbonusrecipe.length || initialTier > targetTier){
      return console.error("Invalid tier range.")
    }

    for (let i = initialTier - 1 ; i < targetTier ; i++){
      const recipe = statbonusrecipe[i]

      for (const [mat, value] of Object.entries(recipe)){
        if (mat in requiredMats){
          requiredMats[mat] += value;
        }
      }
    }
    return requiredMats;
  }

  function levelInherentSkill(initialTier, targetTier){
    const requiredMats = {
      shellcredits: 0,
      basic_am: 0,
      medium_am: 0,
      advanced_am: 0,
      premium_am: 0,
      basic_tm: 0,
      medium_tm: 0,
      advanced_tm: 0,
      premium_tm: 0,
      weeklyboss: 0,
    }

    if (initialTier === targetTier){
      return requiredMats;
    }

    if (initialTier < 1 || targetTier > inherentskillrecipe.length || initialTier > targetTier){
      return console.error("Invalid tier range.")
    }

    for (let i = initialTier - 1 ; i < targetTier ; i++){
      const recipe = inherentskillrecipe[i]

      for (const [mat, value] of Object.entries(recipe)){
        if (mat in requiredMats){
          requiredMats[mat] += value;
        }
      }
    }
    return requiredMats;
  }

  function getTotalMaterials(){
    const requiredMats = []

    requiredMats.push(ascendCharacter(1, 13))
    requiredMats.push(levelTalent(1, 10))
    requiredMats.push(levelStatBonus(1, 2))
    requiredMats.push(levelInherentSkill(1, 2))

    const totalMats = requiredMats.reduce((acc, curr) => {
      for (const [mat, value] of Object.entries(curr)) {
          acc[mat] = (acc[mat] || 0) + value;
      }
      return acc;
    }, {});
  }

  getTotalMaterials()

  return (
    <div id='resonator-popup' className='flex flex-col gap-2'>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
              <button id='selected-resonator' className='w-full bg-white/20 flex rounded-lg px-6 py-2'>
                {selected != null ?
                  <div className='flex items-center justify-center w-full'>
                    {samplecharacterlist[selected].name}
                    
                  </div>
                  : <div className='flex items-center justify-center w-full'>Select a Resonator...</div>
                } <ArrowDownUp/>
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
                                  ${character.rarity === 5 ? "text-[#FCD063]" :
                                    character.rarity === 4 ? "text-[#AC6EFA]" :
                                    ""
                      }`} 
                      value={character.name} 
                      onSelect={()=>{setSelected(i); setIsOpen(false)}}>
                      <img src={character.charactericon} className='max-h-10 rounded object-contain'/>
                      <p className='truncate'>{character.name}</p>
                      <img src={character.element ? elementfilters.find((element) => element.element === character.element).src : "hidden"} className='max-h-10 rounded object-contain' title={character.element.toUpperCase()}/>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <p className='flex'>Ascension Level</p>
        <div className='text-white flex flex-row justify-center items-center gap-2'>
          <Popover open={fromASCisOpen} onOpenChange={setFromASCisOpen}>
            <PopoverTrigger className='bg-white/20 rounded py-1 flex w-full px-2'>
                <div className='w-full'>{characterascensionrecipe[curr_AL].level}</div><ChevronDown/>
            </PopoverTrigger>
            <PopoverContent className='p-0 popover-content-same-as-trigger'>
              {characterascensionrecipe.map((tier, i) => (
                <ul className='flex flex-col justify-center'>
                  <button className='text-center hover:bg-gray-300 border-b-1 p-2' key={i} onClick={() => {setCurr_AL(i); setFromASCisOpen(false)}}>{tier.level}</button>
                </ul>
              ))}
            </PopoverContent>
          </Popover>
          <Popover open={toASCisOpen} onOpenChange={setToASCisOpen}>
            <p>to</p>
            <PopoverTrigger className='bg-white/20 rounded py-1 flex w-full px-2'>
                <div className='w-full'>{characterascensionrecipe[target_AL].level}</div><ChevronDown/>
            </PopoverTrigger>
            <PopoverContent className='p-0 popover-content-same-as-trigger'>
              {characterascensionrecipe.map((tier, i) => (
                i >= curr_AL && <div className='flex flex-col justify-center'>
                  <button className='text-center hover:bg-gray-300 border-b-1 p-2' key={i} onClick={() => {setTarget_AL(i); setToASCisOpen(false)}}>{tier.level}</button>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        <div id='talent-section' className='flex flex-col gap-4'>
          <h1 className='border-b-1 border-b-white/20 py-2'>Talents</h1>
          {talentKeys.map((talent) => (
            <div key={talent.key} id={talent.key} className='grid grid-cols-2 gap-2 mb-2'>
              <p className='text-nowrap'>{talent.label}:</p>
              <div className='flex justify-between'>
                <input
                  className='w-1/4 text-center border-b-1 border-b-white/20'
                  type='number'
                  min={talent.key.startsWith('inh_skill') ? 0 : 1}
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
                  className='w-1/4 text-center border-b-1 border-b-white/20'
                  type='number'
                  min={talent.key.startsWith('inh_skill') ? 1 : 1}
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
  )
}

export default ResonatorPopup
