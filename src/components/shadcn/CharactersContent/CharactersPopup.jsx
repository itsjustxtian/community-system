import './CharactersPopup.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { elementfilters, weaponfilters } from '@/components/layouts/data/itemdata'


const CharactersPopup = ({character}) => {
  const talents = character.talent[0]

  function getElementFilter(character, elementFilters) {
    return elementFilters.find(filter => filter.element === character.element);
  }

  function getWeaponFilter(character, weaponFilters) {
    return weaponFilters.find(filter => filter.weapon === character.weapon);
  }
  
  const characterelement = getElementFilter(character, elementfilters);
  const characterweapon = getWeaponFilter(character, weaponfilters)

  function highlightKeywords(text, highlights) {
    // Build a regex pattern for all keys (escape special characters if needed)
    const pattern = new RegExp(`(${Object.keys(highlights).join('|')})`, 'gi');
  
    const parts = text.split(pattern);
  
    return parts.map((part, i) => {
      const matchedKey = Object.keys(highlights).find(
        key => part.toLowerCase() === key.toLowerCase()
      );
  
      if (matchedKey) {
        return (
          <span key={i} className={highlights[matchedKey]}>
            {part}
          </span>
        );
      }
  
      return part;
    });
  }  

  const highlightMap = {
    "Aero DMG": "text-[#55FFB5] font-semibold",
    "Electro DMG": "text-[#B46BFF] font-semibold",
    "Fusion DMG": "text-[#F0744E] font-semibold",
    "Glacio DMG": "text-[#41AEFB] font-semibold",
    "Havoc DMG": "text-[#E649A6] font-semibold",
    "Spectro DMG": "text-[#F8E56C] font-semibold",
  };
  

  return (
    <div className="characters-popup flex h-[500px] space-x-6">
      <div className='w-1/2 flex flex-col h-full justify-center items-center'>
        <div className={`w-[80%] rounded
                    `}>
          <img src={character.characterportrait} alt="" className='object-contain hover:scale-110 transition' />
        </div>
        <div className='flex flex-col justify-center items-center h-full cal-sans-regular'>
          <div className=''>
            <h1 className=''>{character.name}</h1>
          </div>
          <div className='flex gap-4'>
            <div className={` flex gap-2
                    ${  character.element === 'aero' ? "text-[#55FFB5]" :
                        character.element === 'electro' ? "text-[#B46BFF]":
                        character.element === 'fusion' ? "text-[#F0744E]":
                        character.element === 'glacio' ? "text-[#41AEFB]":
                        character.element === 'havoc' ? "text-[#E649A6]":
                        character.element === 'spectro' ? "text-[#F8E56C]":
                        ""
                    }`}>
              <img src={characterelement.src} alt="" className='w-[25px]'/>
              <p className='cal-sans-regular'>{characterelement.alt}</p>
            </div>
            <div className='flex gap-2'>
              <img src={characterweapon.src} alt="" className='w-[25px]'/>
              <div>{characterweapon.alt}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 overflow-y-auto characters-popup '>
      {Object.entries(talents).map(([talentKey, talentValue], index) => (
        <div
          key={talentKey}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
        >
          <Accordion type="single" collapsible>
            <AccordionItem value={talentKey}>
              <AccordionTrigger className='hover:no-underline opacity-70 hover:opacity-100 data-[state=open]:opacity-100 transition'>
                <h2 className="text-xl font-semibold mb-2">{talentValue.name}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {Object.entries(talentValue.description).map(([label, text], index) => (
                    <div key={index}>
                      {label && <h3 className="font-bold">{label}</h3>}
                      {highlightKeywords(text, highlightMap)}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
      </div>
    </div>
  )
}

export default CharactersPopup
