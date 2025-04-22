import { items } from "../layouts/data/itemdata"

const ItemsContent = () => {
  return (
    <div>
        <div id="character-list" className="grid justify-items-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
            {items.map((item,i) => (
                <button key={i} className="relative icon-card transition max-w-[100px] h-[150px] bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-50% rounded-lg">
                    <div 
                    title={item.name}
                    className={`rounded-lg h-[125px]
                    ${  item.qualityLevel === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%" :
                        item.qualityLevel === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%" :
                        item.qualityLevel === 3 ? "bg-linear-to-t from-[#21AAFF]/80 hover:from-[#21AAFF] transition from-10% to-transparent to-70%" :
                        item.qualityLevel === 2 ? "bg-linear-to-t from-[#69D68A]/80 hover:from-[#69D68A] transition from-10% to-transparent to-70%" :
                        ""
                    }`}>
                        <img src={item.image} alt={item.name} id='character-icons' className={'translate-y-3'}/>
                    </div>
                    <p id="name" className="truncate">{item.name}</p>
                </button>
            ))}
        </div>
    </div>
  )
}

export default ItemsContent
