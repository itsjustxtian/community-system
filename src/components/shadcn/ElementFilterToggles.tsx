import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import aero from "@/assets/images/element-types-icons/element_aero.png"
import electro from "@/assets/images/element-types-icons/element_electro.png"
import fusion from "@/assets/images/element-types-icons/element_fusion.png"
import glacio from "@/assets/images/element-types-icons/element_glacio.png"
import havoc from "@/assets/images/element-types-icons/element_havoc.png"
import spectro from "@/assets/images/element-types-icons/element_spectro.png"


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

const FilterToggles = ({  }) => {
  return (
    <div className='flex'>
      <ToggleGroup type="multiple" className="bg-[#DBD8E0] h-[50px] px-2 rounded-sm">
        {elementfilters.map((item => (<ToggleGroupItem value={item.element}
          className={`data-[state=on]:bg-[#606265] data-[state=on]:shadow-lg  data-[state=on]:shadow-white/50  data-[state=off]:`}>
            <img src={item.src} alt={item.alt}/>
          </ToggleGroupItem>
        )))}
      </ToggleGroup>
    </div>
  )
}

export default FilterToggles
