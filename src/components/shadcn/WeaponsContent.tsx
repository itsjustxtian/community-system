import { weapons } from "../layouts/data/weapondata"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

import broadblade from '@/assets/images/resonator-type-icons/Skill_Broadblade.png'
import gauntlet from '@/assets/images/resonator-type-icons/Skill_Gauntlet.png'
import pistols from '@/assets/images/resonator-type-icons/Skill_Pistols.png'
import rectifier from '@/assets/images/resonator-type-icons/Skill_Rectifier.png'
import sword from '@/assets/images/resonator-type-icons/Skill_Sword.png'

const WeaponsContent = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  
  const filteredObjects = weapons.filter((weapon) =>
      selectedFilter.length !== 0 ? selectedFilter.includes(weapon.type) : true
  );

  const sortfilters = [
    {
        name: "Sort By Name (A-Z)",
        value: "name-az"
    },
    {
        name: "Sort By Name (Z-A)",
        value: "name-za"
    },
    {
        name: "Sort By Release (New to Old)",
        value: "release-new-old"
    },
    {
        name: "Sort By Release (Old to New)",
        value: "release-old-new"
    }
  ]

  const weaponfilters = [
    {   weapon: "Broadblade",
        src: broadblade.src,
        alt: "Broadblade",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "Gauntlets",
        src: gauntlet.src,
        alt: "Gauntlets",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "Pistols",
        src: pistols.src,
        alt: "Pistols",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "Rectifier",
        src: rectifier.src,
        alt: "Rectifier",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {   weapon: "Sword",
        src: sword.src,
        alt: "Sword",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
  ]
  return (
    <div>
      <div id="character-filters no-scrollbar" className="character-filters md:justify-center">
          <Select>
              <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                  {sortfilters.map((item) => (
                  <SelectItem value={item.value}>{item.name}</SelectItem>
                  ))
                  }
              </SelectContent>
          </Select>

          <ToggleGroup 
              type="multiple" 
              className="bg-transparent h-[50px] px-2 rounded-sm"
              onValueChange={(value) => setSelectedFilter(value)}
              >
              {weaponfilters.map((item) => (
                  <ToggleGroupItem value={item.weapon} title={item.alt}
                      className={`data-[state=on]:bg-[#606265] data-[state=on]:  data-[state=on]:  data-[state=off]:`}>
                          <img src={item.src} alt={item.alt} width="34px"/>
              </ToggleGroupItem>
              ))}
          </ToggleGroup>
      </div>

      <div id="character-list" className="grid justify-items-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
            {filteredObjects.map((weapon,i) => (
                <button className="relative icon-card transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg">
                    <div 
                    title={weapon.name}
                    className={`rounded-lg h-[125px]
                    ${  weapon.rarity === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%" :
                        weapon.rarity === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%" :
                        ""
                    }`}>
                        <img src={weapon.image} alt={weapon.name} id='character-icons' className={'translate-y-3'}/>
                    </div>
                    <p id="name" className="truncate">{weapon.name}</p>
                </button>
            ))}
        </div>
    </div>
  )
}

export default WeaponsContent
