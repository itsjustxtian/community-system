import { UserRoundPlus, Swords, ArrowUpDown, Wrench, CircleFadingArrowUp, ArrowDownUp } from 'lucide-react'
import { characterlist, items, elementfilters } from '../layouts/data/itemdata'
import { samplecharacterlist, sampleweaponlist } from '../layouts/data/sampledata'
import { characterascensionrecipe, talentrecipes, statbonusrecipe, inherentskillrecipe } from '../layouts/data/recipes'
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
import { useState } from 'react'

const PlannerContent = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [totalMaterials, setTotalMaterials] = useState([])

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

    console.log(totalMats);
  }

  getTotalMaterials()
  

  return (
    <div className='planner-content'>
      <Dialog>
      <div id='planner-controls' className='flex gap-2 py-4 border-b-1 border-white/10'>
          <DialogTrigger className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><UserRoundPlus/> New Resonator</DialogTrigger>
          <DialogTrigger className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><Swords/> New Weapon</DialogTrigger>
          <DialogTrigger className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><ArrowUpDown/> Rearrange Priority</DialogTrigger>
      </div>
      <div id='task-cards' className='grid grid-cols-3 p-4 gap-4'>

        {samplecharacterlist.map((character, i) =>
          <div key={i} id='task' className='border-1 border-white/10 rounded-lg flex max-w-[20vw] max-h-[20vh]'>
            <div id='icon' className={`w-[40%] flex items-center overflow-hidden transition
              ${character.rarity === 5 ? "bg-radial-[at_100%_80%_] from-[#FCD063]/80 hover:from-[#FCD063] to-transparent to-85%" :
                character.rarity === 4 ? "bg-radial-[at_100%_80%_] from-[#AC6EFA]/80 hover:from-[#AC6EFA] to-transparent to-85%" :
                items[0].qualityLevel === 3 ? "bg-radial-[at_100%_80%_] from-[#21AAFF]/80 hover:from-[#21AAFF] to-transparent to-85%" :
                items[0].qualityLevel === 2 ? "bg-radial-[at_100%_80%_] from-[#69D68A]/80 hover:from-[#69D68A] to-transparent to-85%" :
                "bg-radial-[at_100%_80%_] from-white/80 hover:from-white to-transparent to-85%"}
              `}>
              <div id='image'>
                <img src={character.characterportrait} className='hover:scale-110 transition ease-in-out' alt={character.name} />
              </div>
            </div>
            <div id='details' className='p-2 w-[60%]'>
              <div className='flex w-full justify-between'>
                <div>
                  <div id='name'>{character.name}</div>
                  <div id='subtext' className='flex'>Lvl {0} - {90}</div>
                </div>
                <div id='buttons' className='flex items-center gap-1'>
                  <button className='transition border-1 border-white/30 hover:border-white/50 rounded p-1 h-fit' title='Edit Details'><Wrench className='max-h-5 max-w-5'/></button>
                  <button className='transition border-1 border-white/30 hover:border-white/50 rounded p-1 h-fit' title='Ascend'><CircleFadingArrowUp className='max-h-5 max-w-5'/></button>
                </div>
              </div>
              <div id='materials-left' className='mt-3'>
                <div id='subtext'>To farm:</div>
                <div id='material' className={`relative w-fit rounded-md flex flex-col items-center
                  ${items[0].qualityLevel === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-80%" :
                    items[0].qualityLevel === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-80%" :
                    items[0].qualityLevel === 3 ? "bg-linear-to-t from-[#21AAFF]/80 hover:from-[#21AAFF] transition from-10% to-transparent to-80%" :
                    items[0].qualityLevel === 2 ? "bg-linear-to-t from-[#69D68A]/80 hover:from-[#69D68A] transition from-10% to-transparent to-80%" :
                    ""}`
                }>
                  <img src={items[0].image} className='h-[2.5rem]'/>
                  <div id='subtext' className='bg-black w-full text-center rounded-b-sm'>1k</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <DialogContent className='text-white bg-linear-to-tr from-[#111112] from-15% to-[#222325] to-80% border-0'>
        <DialogHeader>
          <DialogTitle className=''>Add a new resonator</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
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
        <div className='text-white'>
          <h1>Ascension Level</h1>
          
        </div>
      </DialogContent>
      </Dialog>
    </div>
  )
}

export default PlannerContent

