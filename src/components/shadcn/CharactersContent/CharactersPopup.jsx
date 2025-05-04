import './CharactersPopup.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const CharactersPopup = ({character}) => {
  const talents = character.talent[0]

  return (
    <div className="characters-popup max-h-[600px] space-y-6 overflow-y-scroll">
      {Object.entries(talents).map(([talentKey, talentValue]) => (
        <Accordion key={talentKey} type="single" collapsible>
          <AccordionItem value={talentKey}>
            <AccordionTrigger>
              <h2 className="text-xl font-semibold mb-2">{talentValue.name}</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {Object.entries(talentValue.description).map(([label, text], index) => (
                  <div key={index}>
                    {label && <h3 className="font-bold">{label}</h3>}
                    <p className="whitespace-pre-line">{text}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>      
      ))}
    </div>
  )
}

export default CharactersPopup
