import { UserRoundPlus, Swords, ArrowUpDown } from 'lucide-react'

const PlannerContent = () => {
  return (
    <div>
      <div id='planner-controls' className='flex gap-2 py-4 border-b-1 border-white/10'>
        <button className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><UserRoundPlus/> New Resonator</button>
        <button className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><Swords/> New Weapon</button>
        <button className='bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition'><ArrowUpDown/> Rearrange Priority</button>
      </div>
      <div id='task-cards' className='grid grid-cols-3'>

        <div id='task' className='border-1 border-white/10 flex w-[20vw] h-[20vh]'>
          <div id='icon' className='w-[30%] border-1'>
            Icon goes here...
          </div>
          <div id='details'>
            Details go here...
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlannerContent
