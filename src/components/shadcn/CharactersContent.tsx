import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { useState } from "react"
import { characterlist, sortfilters, elementfilters, weaponfilters } from "../layouts/data/itemdata"

const CharactersContent = () => {
    const [selectedFilter, setSelectedFilter] = useState([]);

    const filteredObjects = characterlist.filter((character) =>
        selectedFilter.length !== 0 ? selectedFilter.includes(character.element) || selectedFilter.includes(character.weapon) : true
    );

    console.log(selectedFilter);

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
                {elementfilters.map((item) => (
                    <ToggleGroupItem value={item.element} title={item.alt}
                        className={`data-[state=on]:bg-[#606265] data-[state=on]:  data-[state=on]:  data-[state=off]:`}>
                            <img src={item.src} alt={item.alt} width="34px"/>
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>

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
            {filteredObjects.map((character,i) => (
                <button className="relative icon-card transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg">
                    <div 
                    title={character.name}
                    className={`rounded-lg h-[125px] overflow-hidden
                    ${  character.element === 'aero' ? "bg-linear-to-t from-[#55FFB5]/80 hover:from-[#55FFB5] transition from-10% to-transparent to-70%" :
                        character.element === 'electro' ? "bg-linear-to-t from-[#B46BFF]/80 hover:from-[#B46BFF] transition from-10% to-transparent to-70%":
                        character.element === 'fusion' ? "bg-linear-to-t from-[#F0744E]/80 hover:from-[#F0744E] transition from-10% to-transparent to-70%":
                        character.element === 'glacio' ? "bg-linear-to-t from-[#41AEFB]/80 hover:from-[#41AEFB] transition from-10% to-transparent to-70%":
                        character.element === 'havoc' ? "bg-linear-to-t from-[#E649A6]/80 hover:from-[#E649A6] transition from-10% to-transparent to-70%":
                        character.element === 'spectro' ? "bg-linear-to-t from-[#F8E56C]/80 hover:from-[#F8E56C] transition from-10% to-transparent to-70%":
                        ""
                    }`}>
                        <img src={character.charactericon} alt={character.name} id='character-icons' className={'translate-y-3'}/>
                    </div>
                    <p id="name" className="px-2 truncate">{character.name}</p>
                </button>
            ))}
        </div>
      
    </div>
  )
}

export default CharactersContent
