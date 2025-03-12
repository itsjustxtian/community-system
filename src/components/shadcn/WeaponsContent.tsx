import { weapons } from "../layouts/data/weapondata"

const WeaponsContent = () => {
  return (
    <div>
      <div id="character-list" className="grid justify-items-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
            {weapons.map((weapon,i) => (
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
