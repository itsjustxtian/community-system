import { UserRoundPlus, Swords, ArrowUpDown, Wrench, CircleFadingArrowUp, ArrowDownUp, ChevronDown } from 'lucide-react'
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
import ResonatorPopup from './PlannerContent/ResonatorPopup'

const PlannerContent = () => {

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
          <DialogTitle className='hidden'></DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
          <ResonatorPopup/>
      </DialogContent>
      </Dialog>
    </div>
  )
}

export default PlannerContent

