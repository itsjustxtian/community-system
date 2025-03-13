import { UserRoundPlus, Swords, ArrowUpDown } from 'lucide-react'

const PlannerContent = () => {
  return (
    <div>
      <div className='flex gap-2'>
        <button className='bg-white/20 px-4 py-2 flex items-center gap-2 rounded-lg'><UserRoundPlus/> New Resonator</button>
        <button className='bg-white/20 px-4 py-2 flex items-center gap-2 rounded-lg'><Swords/> New Weapon</button>
        <button className='bg-white/20 px-4 py-2 flex items-center gap-2 rounded-lg'><ArrowUpDown/> Rearrange Priority</button>
      </div>
      <div>

      </div>
    </div>
  )
}

export default PlannerContent
