import { weapons } from "../layouts/data/weapondata"
import { sampleweaponlist } from "../layouts/data/sampledata"
import { sortfilters, weaponfilters } from "../layouts/data/itemdata"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState } from "react"
import WeaponsContentPopup from "./WeaponsContent/WeaponsContentPopup"

const WeaponsContent = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [weapon, setWeapon] = useState(null)
  
  const filteredObjects = weapons.filter((weapon) =>
      selectedFilter.length !== 0 ? selectedFilter.includes(weapon.type) : true
  );

  return (
    <Dialog>
      <div id="character-filters no-scrollbar" className="character-filters md:justify-center">
          <ToggleGroup 
              type="multiple" 
              className="bg-transparent h-[50px] px-2 rounded-sm"
              onValueChange={(value) => setSelectedFilter(value)}
              >
              {weaponfilters.map((item, i) => (
                  <ToggleGroupItem key={i} value={item.weapon} title={item.alt}
                      className={`data-[state=on]:bg-[#606265] data-[state=on]:  data-[state=on]:  data-[state=off]:`}>
                          <img src={item.src} alt={item.alt} width="34px"/>
              </ToggleGroupItem>
              ))}
          </ToggleGroup>
      </div>

      <div id="character-list" className="flex justify-items-center flex-wrap gap-x-4">
            {filteredObjects.map((weapon,i) => (
                <DialogTrigger key={i} title={weapon.name} className="cursor-pointer icon-card relative transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg">
                    <div 
                    onClick={() => setWeapon(weapon)}
                    className={`rounded-lg h-[125px] overflow-hidden
                    ${  weapon.rarity === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%" :
                        weapon.rarity === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%" :
                        ""
                    }`}>
                        <img src={weapon.image} alt={weapon.name} id='character-icons' className={'translate-y-3'}/>
                    </div>
                    <p id="name" className="px-2 truncate">{weapon.name}</p>
                </DialogTrigger>
            ))}
        </div>
        <DialogContent className="popup-background !w-[800px] !max-w-none">
            <DialogHeader hidden>
            <DialogTitle >Are you absolutely sure?</DialogTitle>
            <DialogDescription >
            </DialogDescription>
            </DialogHeader>
            <WeaponsContentPopup weapon={weapon}/>
        </DialogContent>
    </Dialog>
  )
}

export default WeaponsContent
