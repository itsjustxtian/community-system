import { UserRoundPlus, Swords, ArrowUpDown, Wrench, CircleFadingArrowUp } from 'lucide-react'
import { characterlist, items } from '../layouts/data/itemdata'

const PlannerContent = () => {
  return (
    <div className='planner-content'>
      <div id='planner-controls' className='flex gap-2 py-4 border-b-1 border-white/10'>
        <button className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><UserRoundPlus/> New Resonator</button>
        <button className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><Swords/> New Weapon</button>
        <button className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><ArrowUpDown/> Rearrange Priority</button>
      </div>
      <div id='task-cards' className='grid grid-cols-3 p-4 gap-4'>

        {characterlist.map((character, i) =>
          <div key={i} id='task' className='border-1 border-white/10 rounded-lg flex max-w-[20vw] max-h-[20vh]'>
            <div id='icon' className='w-[40%] flex items-center overflow-hidden bg-radial-[at_100%_80%_] from-sky-200 to-transparent to-85%'>
              <div id='image'>
                <img src={character.characterportrait} alt="" />
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
                  ${  items[0].qualityLevel === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-80%" :
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
    </div>
  )
}

export default PlannerContent
