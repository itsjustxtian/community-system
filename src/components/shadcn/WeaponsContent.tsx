import { weapons } from "../layouts/data/weapondata"
import { sortfilters, weaponfilters } from "../layouts/data/itemdata"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

const WeaponsContent = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  
  const filteredObjects = weapons.filter((weapon) =>
      selectedFilter.length !== 0 ? selectedFilter.includes(weapon.type) : true
  );

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
                <button className="icon-card relative transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg">
                    <div 
                    title={weapon.name}
                    className={`rounded-lg h-[125px] overflow-hidden
                    ${  weapon.rarity === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%" :
                        weapon.rarity === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%" :
                        ""
                    }`}>
                        <img src={weapon.image} alt={weapon.name} id='character-icons' className={'translate-y-3'}/>
                    </div>
                    <p id="name" className="px-2 truncate">{weapon.name}</p>
                </button>
            ))}
        </div>
    </div>
  )
}

export default WeaponsContent
