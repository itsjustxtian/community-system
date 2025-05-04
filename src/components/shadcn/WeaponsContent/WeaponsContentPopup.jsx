import "./WeaponsContentPopup.css"

const WeaponsContentPopup = ({weapon}) => {
    console.log(weapon)
  return (
    <div className='weapons-popup flex gap-x-6'>
        <div className="flex justify-center items-center w-1/3">
            <div
                id="image"
                className={`rounded overflow-hidden w-[200px] h-[200px]
                ${weapon.rarity === 5
                    ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%"
                    : weapon.rarity === 4
                    ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%"
                    : ""
                }`}
            >
                <img
                src={weapon.image}
                alt=""
                className="w-full h-full object-cover"
                />
            </div>
        </div>


    <div id='description' className="w-2/3 flex flex-col justify-center space-y-4">
        <div><h1 className="text-xl font-bold">{weapon.name}</h1></div>
        <div id='about-weapons' className="flex justify-between">
            <p>Base Attack: <b>{weapon.base_atk}</b></p>
            <p><i>{weapon.type}</i></p>
        </div>
        <div>
        <p>{weapon.description}</p>
        </div>
    </div>
    </div>

  )
}

export default WeaponsContentPopup
