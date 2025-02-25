import aalto from "@/assets/images/character-icons-small/aalto-icon.webp"

const CharacterIcons = () => {
  return (
      <button className="icon-card transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg">
        <div className="bg-linear-to-t from-[#55FFB5]/80 hover:from-[#55FFB5] transition from-10% to-transparent to-70% rounded-lg h-[125px]">
            <img src={aalto.src} alt="Aalto pic" id="character-icons"/>
        </div>
        <p id="name">Aalto</p>
      </button>
  )
}

export default CharacterIcons
