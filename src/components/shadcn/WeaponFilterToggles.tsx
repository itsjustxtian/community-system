import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import broadblade from '@/assets/images/resonator-type-icons/Skill_Broadblade.png'
import gauntlet from '@/assets/images/resonator-type-icons/Skill_Gauntlet.png'
import pistols from '@/assets/images/resonator-type-icons/Skill_Pistols.png'
import rectifier from '@/assets/images/resonator-type-icons/Skill_Rectifier.png'
import sword from '@/assets/images/resonator-type-icons/Skill_Sword.png'


const weaponfilters = [
    {   weapon: "broadblade",
        src: broadblade.src,
        alt: "Broadblade",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "gauntlet",
        src: gauntlet.src,
        alt: "Gauntlet",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "pistols",
        src: pistols.src,
        alt: "Pistols",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "rectifier",
        src: rectifier.src,
        alt: "Rectifier",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "sword",
        src: sword.src,
        alt: "Sword",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
  ]
  
const WeaponFilterToggles = () => {
  return (
    <div>
        <ToggleGroup type="multiple" className="bg-transparent h-[50px] px-2 rounded-sm">
              {weaponfilters.map((item => (<ToggleGroupItem value={item.weapon}
                className={`data-[state=on]:bg-[#606265] data-[state=on]:  data-[state=on]:  data-[state=off]:`}>
                  <img src={item.src} alt={item.alt} width="34px"/>
                </ToggleGroupItem>
              )))}
        </ToggleGroup> 
    </div>
  )
}

export default WeaponFilterToggles
