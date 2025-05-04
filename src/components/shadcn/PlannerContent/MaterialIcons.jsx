const sampleinventory = {
    "Shell Credit": 1669000,
    "Basic Resonance Potion": 100,
    "Medium Resonance Potion": 100,
    "Advanced Resonance Potion": 100,
    "Premium Resonance Potion": 100,
    "LF Howler Core": 2000,
    "MF Howler Core": 30,
    "HF Howler Core": 55,
    "FF Howler Core": 0,
    "Lento Helix": 100,
    "Adagio Helix": 28,
    "Andante Helix": 54,
    "Presto Helix": 60,
    "Sound-Keeping Tacet Core": 43,
    "Lanternberry": 60,
    "Wintry Bell": 50,
    "Monument Bell": 13
}

const experienceValues = {
    "Basic Resonance Potion": 1000,
    "Medium Resonance Potion": 3000,
    "Advanced Resonance Potion": 8000,
    "Premium Resonance Potion": 20000,
  };
  

const MaterialIcons = ({ amountLeft, craftAmount, foundItem, materialKey }) => {
      function formatAmount(amount) {
        if (amount >= 1_000_000) {
          return (amount / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m";
        } else if (amount >= 1_000) {
          return (amount / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
        }
        return amount.toString();
      }
      
      const formattedAmountLeft = formatAmount(amountLeft);

      
  return (
    <div
      key={materialKey}
      id="material"
      className={`relative w-18 min-h-16 rounded-md flex flex-col items-center p-1 cursor-pointer
            ${  amountLeft === 0 ? "opacity-25" : "" }
            ${  foundItem.qualityLevel === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%" :
                foundItem.qualityLevel === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%" :
                foundItem.qualityLevel === 3 ? "bg-linear-to-t from-[#21AAFF]/80 hover:from-[#21AAFF] transition from-10% to-transparent to-70%" :
                foundItem.qualityLevel === 2 ? "bg-linear-to-t from-[#69D68A]/80 hover:from-[#69D68A] transition from-10% to-transparent to-70%" :
                "bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-70%"
            }
        `}
    >
      {foundItem ? (
        <img
          src={foundItem.image}
          alt={foundItem.name}
          title={foundItem.name}
          className="h-[90%]"
        />
      ) : (
        <div className="h-[2.5rem] w-[2.5rem] bg-white/10 flex items-center justify-center text-xs">
          ?
        </div>
      )}
      <div id="subtext" title="Amount to Craft" className={`absolute flex justify-center items-center top-0 right-0 h-5 w-5
        ${craftAmount === 0 ? "hidden" : ""}`}>
        {craftAmount}
      </div>
      <div
        id="subtext"
        title="Amount to Farm"
        className="bg-black absolute bottom-0 w-full text-center rounded-b-sm text-xs"
      >
        {formattedAmountLeft}
      </div>
    </div>
  );
};

export default MaterialIcons;
