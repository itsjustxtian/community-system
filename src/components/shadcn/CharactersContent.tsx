import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import aero from "@/assets/images/element-types-icons/aero1.png"
import electro from "@/assets/images/element-types-icons/electro1.png"
import fusion from "@/assets/images/element-types-icons/fusion1.png"
import glacio from "@/assets/images/element-types-icons/glacio1.png"
import havoc from "@/assets/images/element-types-icons/havoc1.png"
import spectro from "@/assets/images/element-types-icons/spectro1.png"

import broadblade from '@/assets/images/resonator-type-icons/Skill_Broadblade.png'
import gauntlet from '@/assets/images/resonator-type-icons/Skill_Gauntlet.png'
import pistols from '@/assets/images/resonator-type-icons/Skill_Pistols.png'
import rectifier from '@/assets/images/resonator-type-icons/Skill_Rectifier.png'
import sword from '@/assets/images/resonator-type-icons/Skill_Sword.png'

import aalto from "@/assets/images/character-icons-small/aalto-icon.webp"
import baizhi from "@/assets/images/character-icons-small/baizhi-icon.webp"
import calcharo from "@/assets/images/character-icons-small/calcharo-icon.webp"
import changli from "@/assets/images/character-icons-small/changli-icon.webp"
import chixia from "@/assets/images/character-icons-small/chixia-icon.webp"
import danjin from "@/assets/images/character-icons-small/danjin-icon.webp"
import encore from "@/assets/images/character-icons-small/encore-icon.webp"
import jianxin from "@/assets/images/character-icons-small/jianxin-icon.webp"
import jinhsi from "@/assets/images/character-icons-small/jinhsi-icon.webp"
import jiyan from "@/assets/images/character-icons-small/jiyan-icon.webp"
import lingyang from "@/assets/images/character-icons-small/lingyang-icon.webp"
import mortefi from "@/assets/images/character-icons-small/mortefi-icon.webp"
import rover from "@/assets/images/character-icons-small/rover-icon.svg"
import sanhua from "@/assets/images/character-icons-small/sanhua-icon.webp"
import taoqi from "@/assets/images/character-icons-small/taoqi-icon.webp"
import verina from "@/assets/images/character-icons-small/verina-icon.webp"
import yangyang from "@/assets/images/character-icons-small/yangyang-icon.webp"
import yinlin from "@/assets/images/character-icons-small/yinlin-icon.webp"
import yuanwu from "@/assets/images/character-icons-small/yuanwu-icon.webp"
import zhezhi from "@/assets/images/character-icons-small/zhezhi-icon.webp"
import { useState } from "react"

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

const elementfilters = [
    {
        element: "aero",
        src: aero.src,
        alt: "Aero",
        customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
    },
    {
      element: "electro",
      src: electro.src,
      alt: "Electro",
      customshadow: "[0_0px_5px_rgba(180,107,255,1)]"
    },
    {
      element: "fusion",
      src: fusion.src,
      alt: "Fusion",
      customshadow: "[0_0px_5px_rgba(240, 116, 78, 1)]"
    },
    {
      element: "glacio",
      src: glacio.src,
      alt: "Glacio",
      customshadow: "[0_0px_5px_rgba(65,174,251,1)]"
    },
    {
      element: "havoc",
      src: havoc.src,
      alt: "Havoc",
      customshadow: "[0_0px_5px_rgba(65,174,251,1)]"
    },
    {
      element: "spectro",
      src: spectro.src,
      alt: "Spectro",
      customshadow: "[0_0px_5px_rgba(65,174,251,1)]"
    }
]

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

const characterlist = [
    {
        name: "Aalto",
        element: "aero",
        weapon: "pistols",
        charactericon: aalto,
        version: 1.0,
    },
    {
        name: "Baizhi",
        element: "glacio",
        weapon: "rectifier",
        charactericon: baizhi,
        version: 1.0,
    },
    {
        name: "Calcharo",
        element: "electro",
        weapon: "broadblade",
        charactericon: calcharo,
        version: 1.0,
    },
    {
        name: "Changli",
        element: "fusion",
        weapon: "sword",
        charactericon: changli,
        version: 1.1,
    },
    {
        name: "Chixia",
        element: "fusion",
        weapon: "pistols",
        charactericon: chixia,
        version: 1.0,
    },
    {
        name: "Danjin",
        element: "havoc",
        weapon: "sword",
        charactericon: danjin,
        version: 1.0,
    },
    {
        name: "Encore",
        element: "fusion",
        weapon: "rectifier",
        charactericon: encore,
        version: 1.0,
    },
    {
        name: "Jianxin",
        element: "aero",
        weapon: "gauntlet",
        charactericon: jianxin,
        version: 1.0,
    },
    {
        name: "Jinhsi",
        element: "spectro",
        weapon: "broadblade",
        charactericon: jinhsi,
        version: 1.1,
    },
    {
        name: "Jiyan",
        element: "aero",
        weapon: "broadblade",
        charactericon: jiyan,
        version: 1.0,
    },
    {
        name: "Lingyang",
        element: "glacio",
        weapon: "gauntlet",
        charactericon: lingyang,
        version: 1.0,
    },
    {
        name: "Mortefi",
        element: "fusion",
        weapon: "pistols",
        charactericon: mortefi,
        version: 1.0,
    },
    {
        name: "Rover",
        element: "havoc",
        weapon: "sword",
        charactericon: rover,
        version: 1.0,
    },
    {
        name: "Rover",
        element: "spectro",
        weapon: "sword",
        charactericon: rover,
        version: 1.0,
    },
    {
        name: "Sanhua",
        element: "glacio",
        weapon: "sword",
        charactericon: sanhua,
        version: 1.0,
    },
    {
        name: "Taoqi",
        element: "havoc",
        weapon: "broadblade",
        charactericon: taoqi,
        version: 1.0,
    },
    {
        name: "Verina",
        element: "spectro",
        weapon: "rectifier",
        charactericon: verina,
        version: 1.0,
    },
    {
        name: "Yangyang",
        element: "aero",
        weapon: "sword",
        charactericon: yangyang,
        version: 1.0,
    },
    {
        name: "Yinlin",
        element: "electro",
        weapon: "rectifier",
        charactericon: yinlin,
        version: 1.0,
    },
    {
        name: "Yuanwu",
        element: "electro",
        weapon: "gauntlet",
        charactericon: yuanwu,
        version: 1.0,
    },
    {
        name: "Zhezhi",
        element: "glacio",
        weapon: "rectifier",
        charactericon: zhezhi,
        version: 1.2,
    },
]

const CharactersContent = () => {
    const [selectedFilter, setSelectedFilter] = useState([]);

    const filteredObjects = characterlist.filter((character) =>
        selectedFilter.length !== 0 ? selectedFilter.includes(character.element) || selectedFilter.includes(character.weapon) : true
    );

    console.log(selectedFilter);

  return (
    <div>
        <div id="character-filters" className="character-filters flex items-center">
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

        <div id="character-list" className="grid grid-cols-9">
            {filteredObjects.map((character,i) => (
                <button className="relative icon-card transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg">
                    <div 
                    title={character.name}
                    className={`rounded-lg h-[125px]
                    ${  character.element === 'aero' ? "bg-linear-to-t from-[#55FFB5]/80 hover:from-[#55FFB5] transition from-10% to-transparent to-70%" :
                        character.element === 'electro' ? "bg-linear-to-t from-[#B46BFF]/80 hover:from-[#B46BFF] transition from-10% to-transparent to-70%":
                        character.element === 'fusion' ? "bg-linear-to-t from-[#F0744E]/80 hover:from-[#F0744E] transition from-10% to-transparent to-70%":
                        character.element === 'glacio' ? "bg-linear-to-t from-[#41AEFB]/80 hover:from-[#41AEFB] transition from-10% to-transparent to-70%":
                        character.element === 'havoc' ? "bg-linear-to-t from-[#E649A6]/80 hover:from-[#E649A6] transition from-10% to-transparent to-70%":
                        character.element === 'spectro' ? "bg-linear-to-t from-[#F8E56C]/80 hover:from-[#F8E56C] transition from-10% to-transparent to-70%":
                        ""
                    }`}>
                        <img src={character.charactericon.src} alt={character.name} id='character-icons' className={character.name.includes("Rover") ? 'translate-y-7 scale-135': 'translate-y-3'}/>
                    </div>
                    <p id="name" className="">{character.name}</p>
                </button>
            ))}
        </div>
      
    </div>
  )
}

export default CharactersContent
