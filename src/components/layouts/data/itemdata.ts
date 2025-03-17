export const sortfilters = [
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

export const elementfilters = [
  {
      element: "aero",
      src: "/src/assets/images/element-types-icons/aero1.png",
      alt: "Aero",
      customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
  },
  {
    element: "electro",
    src: "/src/assets/images/element-types-icons/electro1.png",
    alt: "Electro",
    customshadow: "[0_0px_5px_rgba(180,107,255,1)]"
  },
  {
    element: "fusion",
    src: "/src/assets/images/element-types-icons/fusion1.png",
    alt: "Fusion",
    customshadow: "[0_0px_5px_rgba(240, 116, 78, 1)]"
  },
  {
    element: "glacio",
    src: "/src/assets/images/element-types-icons/glacio1.png",
    alt: "Glacio",
    customshadow: "[0_0px_5px_rgba(65,174,251,1)]"
  },
  {
    element: "havoc",
    src: "/src/assets/images/element-types-icons/havoc1.png",
    alt: "Havoc",
    customshadow: "[0_0px_5px_rgba(65,174,251,1)]"
  },
  {
    element: "spectro",
    src: "/src/assets/images/element-types-icons/spectro1.png",
    alt: "Spectro",
    customshadow: "[0_0px_5px_rgba(65,174,251,1)]"
  }
]

export const weaponfilters = [
  {   weapon: "Broadblade",
      src: "/src/assets/images/resonator-type-icons/Skill_Broadblade.png",
      alt: "Broadblade",
      customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
  },
  {   weapon: "Gauntlet",
      src: "/src/assets/images/resonator-type-icons/Skill_Gauntlet.png",
      alt: "Gauntlet",
      customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
  },
  {   weapon: "Pistols",
      src: "/src/assets/images/resonator-type-icons/Skill_Pistols.png",
      alt: "Pistols",
      customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
  },
  {   weapon: "Rectifier",
      src: "/src/assets/images/resonator-type-icons/Skill_Rectifier.png",
      alt: "Rectifier",
      customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
  },
  {   weapon: "Sword",
      src: "/src/assets/images/resonator-type-icons/Skill_Sword.png",
      alt: "Sword",
      customshadow: "[0_0px_5px_rgba(85,255,181,1)]"
  },
]

export const items = [
    {
      id: 2,
      slug: "shell-credit",
      name: "Shell Credit",
      tags: ["Universal Currency"],
      description:
        "The universal currency issued by Huanglong, officially recognized across many regions.",
      flavor:
        'In the ancient past, the ancestors of Huanglong utilized seashells as currency. Though the manufacturing techniques have evolved over time, the shell-like appearance of this currency has endured. \n"As a witness, it preserves the history of our people."',
      qualityLevel: 3,
      dropLocations: ["Simulation Training", "Quests", "Huanglong Exploration"],
      sortIndex: 0,
      image: "/src/assets/images/currency/shell-credit-2.webp",
    },
    {
      id: 41300005,
      slug: "mysterious-code",
      name: "Mysterious Code",
      tags: ["Resonator Ascension Material"],
      description: "Used for Rover's Ascension.",
      flavor:
        "The metal scrolls with mysterious symbols seem to be able to create some kind of connection with Rover.",
      qualityLevel: 5,
      dropLocations: ["Casket Delivery", "Quests"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/mysterious-code-41300005.webp"
    },
    {
      id: 41400014,
      slug: "strife-tacet-core",
      name: "Strife Tacet Core",
      tags: ["Resonator Ascension Material"],
      description: "The Crownless's drop, a Resonator's Ascension item.",
      flavor:
        "The core of Crownless's clone. Only more strife and sacrifice can mend the cracks and voids within this Tacet Core.",
      qualityLevel: 4,
      dropLocations: ["Crownless"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/strife-tacet-core-41400014.webp",
    },
    {
      id: 41400024,
      slug: "thundering-tacet-core",
      name: "Thundering Tacet Core",
      tags: ["Resonator Ascension Material"],
      description: "The Thundering Mephis's drop, a Resonator's Ascension item.",
      flavor:
        "The core of Thundering Mephis. Like a miniature thunderstorm, the core radiates a dazzling light between the flashes.",
      qualityLevel: 4,
      dropLocations: ["Thundering Mephis"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/thundering-tacet-core-41400024.webp"
    },
    {
      id: 41400034,
      slug: "elegy-tacet-core",
      name: "Elegy Tacet Core",
      tags: ["Resonator Ascension Material"],
      description: "The Mourning Aix's drop, a Resonator's Ascension item.",
      flavor:
        "The Tacet Core of Mourning Aix, singing a never-ending elegy. Those who touch the Tacet Core will be overwhelmed by a great sense of loneliness and loss and will unconsciously shed tears. But this is not empathy, perhaps just a kind of emotional hypersensitivity.",
      qualityLevel: 4,
      dropLocations: ["Mourning Aix"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/elegy-tacet-core-41400034.webp"
    },
    {
      id: 41400044,
      slug: "rage-tacet-core",
      name: "Rage Tacet Core",
      tags: ["Resonator Ascension Material"],
      description: "The Inferno Rider's drop, a Resonator's Ascension item.",
      flavor:
        "The Tacet Core of Inferno Rider, surrounded by the never-ending fire of rage. The raging flames, fueled by the supreme clamor, vow to burn everything to ashes.",
      qualityLevel: 4,
      dropLocations: ["Inferno Rider"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/rage-tacet-core-41400044.webp"
    },
    {
      id: 41400054,
      slug: "roaring-rock-fist",
      name: "Roaring Rock Fist",
      tags: ["Resonator Ascension Material"],
      description: "The Feilian Beringal's drop, a Resonator's Ascension item.",
      flavor:
        "The rock shell covering the arm of Feilian Beringal, named for the thunderous roar of Feilian's heavy punch.",
      qualityLevel: 4,
      dropLocations: ["Feilian Beringal"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/roaring-rock-fist-41400054.webp"
    },
    {
      id: 41400064,
      slug: "gold-dissolving-feather",
      name: "Gold-Dissolving Feather",
      tags: ["Resonator Ascension Material"],
      description: "The Impermanence Heron's drop, a Resonator's Ascension item.",
      flavor:
        "The golden feathers of Impermanence Heron, from which a dirty and rotten smell constantly flows. A researcher once tried to seal the feathers in various metal containers, but the containers would corrode in a moment.",
      qualityLevel: 4,
      dropLocations: ["Impermanence Heron"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/gold-dissolving-feather-41400064.webp"
    },
    {
      id: 41400074,
      slug: "sound-keeping-tacet-core",
      name: "Sound-Keeping Tacet Core",
      tags: ["Resonator Ascension Material"],
      description: "The Lampylumen Myriad's drop, a Resonator's Ascension item.",
      flavor:
        "The Tacet Core of Lampylumen Myriad, freezing the humming whispers. The surrounding sounds will be captured by the Tacet Core and turned into a cold absolute echo.",
      qualityLevel: 4,
      dropLocations: ["Lampylumen Myriad"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/sound-keeping-tacet-core-41400074.webp"
    },
    {
      id: 41400084,
      slug: "group-abomination-tacet-core",
      name: "Group Abomination Tacet Core",
      tags: ["Resonator Ascension Material"],
      description: "The Mech Abomination's drop, a Resonator's Ascension item.",
      flavor:
        "The huge Clamorling hidden in the underground ruins of Court of Savantae, is a huge collection of countless program logics. The heterogeneous Tacet Core is stacked in disorder, just like the complex code of the mechanical puppet.",
      qualityLevel: 4,
      dropLocations: ["Mech Abomination"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/group-abomination-tacet-core-41400084.webp"
    },
    {
      id: 41100011,
      slug: "lf-whisperin-core",
      name: "LF Whisperin Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a feeble Whisperin. It takes the form of a broken star. Faint and deep frequencies are still lingering within the core, yet the messages they try to convey remain elusive to all.",
      qualityLevel: 2,
      dropLocations: ["Whisperins", "Store", "Forgery Challenge", "Weapon Shop"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/lf-whisperin-core-41100011.webp"
    },
    {
      id: 41100012,
      slug: "mf-whisperin-core",
      name: "MF Whisperin Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a common Whisperin. It takes the form of a clear and complete star. Its Frequency Energy aligns with the hearing range of normal people. Yet, the question remains: what's the intention behind this imitation?",
      qualityLevel: 3,
      dropLocations: [
        "Synthesis",
        "Whisperins",
        "Forgery Challenge",
        "Weapon Shop",
      ],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/mf-whisperin-core-41100012.webp"
    },
    {
      id: 41100013,
      slug: "hf-whisperin-core",
      name: "HF Whisperin Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a powerful Whisperin. It takes the form of a star with sharp ridges along its outline—like an embodiment of its shrill Frequency Energy. Perhaps, its personification has already led to the Uncanny Valley effect.",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Whisperins"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/hf-whisperin-core-41100013.webp"
    },
    {
      id: 41100014,
      slug: "ff-whisperin-core",
      name: "FF Whisperin Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a special Whisperin. It takes the form of an intricate star, bearing both recognizable and unfamiliar Frequency Energy. It seems that humans only know the tip of the iceberg of themselves.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Whisperins"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/ff-whisperin-core-41100014.webp"
    },
    {
      id: 41100021,
      slug: "lf-howler-core",
      name: "LF Howler Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a feeble Howler. It is the remaining part of a Tacetite Bloom after it withers. Despite its astonishing accuracy in mimicry, it only ends one way—reducing to a mass of twisted Frequency Energy.",
      qualityLevel: 2,
      dropLocations: ["Howlers", "Store", "Forgery Challenge", "Weapon Shop"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/lf-howler-core-41100021.webp"
    },
    {
      id: 41100022,
      slug: "mf-howler-core",
      name: "MF Howler Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a common Howler. After the Tacetite Bloom withers, a certain amount of Frequency Energy remains. Similar to the natural cycle of life, this frequency can probably serve as the sustenance for newcomers.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Howlers", "Forgery Challenge", "Weapon Shop"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/mf-howler-core-41100022.webp"
    },
    {
      id: 41100023,
      slug: "hf-howler-core",
      name: "HF Howler Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a powerful Howler. The fierce and untamed Frequency Energy continues to reverberate within it. Evolution is all about adapting to the environment. Who will emerge victorious from the ordeal of the devastating Waveworm Phenomenon?",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Howlers"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/hf-howler-core-41100023.webp"
    },
    {
      id: 41100024,
      slug: "ff-howler-core",
      name: "FF Howler Core",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "The Tacet Core of a special Howler. It takes the form of a seed emerging from a withered Tacetite Bloom. Life is brimming with endless possibilities. This core, akin to the seed of life, also contains infinite possibilities.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Howlers"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/ff-howler-core-41100024.webp"
    },
    {
      id: 41100031,
      slug: "crude-ring",
      name: "Crude Ring",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "A crude ring that serves more as an identification than for practical use. It is used to display one's commitment to sever ties with civilized society.",
      qualityLevel: 2,
      dropLocations: ["Exiles", "Store", "Forgery Challenge", "Weapon Shop"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/crude-ring-41100031.webp"
    },
    {
      id: 41100032,
      slug: "basic-ring",
      name: "Basic Ring",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "A ring with bearable quality. Apart from helping the Exiles to recognize each other's identification, it also provides various functions such as basic communication, location services, and scanning. These features assist the Exiles to better survive in the wilderness.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Exiles", "Forgery Challenge", "Weapon Shop"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/basic-ring-41100032.webp"
    },
    {
      id: 41100033,
      slug: "improved-ring",
      name: "Improved Ring",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "An improved Ring, exclusive to a selected few. This ring stores a large amount of wilderness survival information. Certain entries detailing rare plants and special minerals hold academic significance compared to papers written by the Academy.",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Exiles"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/improved-ring-41100033.webp"
    },
    {
      id: 41100034,
      slug: "tailored-ring",
      name: "Tailored Ring",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "A ring made of special material using unique techniques. Its owner must boast a legendary experience. Much of the information stored within it is encrypted and challenging to decipher for details.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Exiles"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/tailored-ring-41100034.webp"
    },
    {
      id: 41200031,
      slug: "mask-of-constraint",
      name: "Mask of Constraint",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "A mask worn by Fractsidus recruits. It seems to be used to suppress the rejection reaction induced by the integration of Tacet Discords. The side effect that comes with it is the suppression of the wearer's normal human emotions. Perhaps, that's one of the designer's purposes?",
      qualityLevel: 2,
      dropLocations: ["Fractsidus"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/mask-of-constraint-41200031.webp"
    },
    {
      id: 41200032,
      slug: "mask-of-erosion",
      name: "Mask of Erosion",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "A mask worn by Fractsidus active members. Due to long-term use, its ability to stabilize frequency has been greatly mitigated. One can clearly feel the torment of being drowning in negative emotions from the mask.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Fractsidus"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/mask-of-erosion-41200032.webp"
    },
    {
      id: 41200033,
      slug: "mask-of-distortion",
      name: "Mask of Distortion",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "A mask worn by Fractsidus veterans. The original owner has now had no turning back on the road of Overclocking. Would they have chosen to wear this mask if they had foreseen all the torment and suffering that lay ahead?",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Fractsidus"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/mask-of-distortion-41200033.webp"
    },
    {
      id: 41200034,
      slug: "mask-of-insanity",
      name: "Mask of Insanity",
      tags: ["Weapon & Skill Material"],
      description:
        "A material used to break through weapons, ascend Resonators, and upgrade skills.",
      flavor:
        "A very peculiar Fractsidus mask. It would be nearly impossible for a normal person to imagine the mental state of its owner. Judging from the residual frequency on the mask, one can perceive that the owner's emotions have become severely distorted, generating frequencies that resemble Tacet Discords.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Fractsidus"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/mask-of-insanity-41200034.webp"
    },
    {
      id: 41400094,
      slug: "monument-bell",
      name: "Monument Bell",
      tags: ["Skill Upgrade Material"],
      description: "Drop from Bell-Borne Geochelone, used for skill upgrade.",
      flavor:
        "The ancient bell carried on the back of the Bell-Borne Geochelone. When the bell rings, the awakened past will leave a new mark in this era.",
      qualityLevel: 4,
      dropLocations: ["Bell-Borne Geochelone"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/monument-bell-41400094.webp"
    },
    {
      id: 41400104,
      slug: "wave-cutting-tooth",
      name: "Wave-Cutting Tooth",
      tags: ["Skill Upgrade Material"],
      description: "Drop from Seatrail Narwhal, used for skill upgrade.",
      flavor:
        "The blue spiral-shaped heteromorphic sharp tooth of Seatrail Narwhal, capable of cutting through waves. Legend has it, the water surface cut through by the Narwhal's tooth will leave long-lasting ripples.",
      qualityLevel: 4,
      dropLocations: ["Seatrail Narwhal"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/wave-cutting-tooth-41400104.webp"
    },
    {
      id: 41400114,
      slug: "unending-destruction",
      name: "Unending Destruction",
      tags: ["Skill Upgrade Material"],
      description: "Drop from Scar, used for skill upgrade.",
      flavor:
        "The card in Scar's hand with the mark of a black sheep. The flame attached to it seems to never extinguish. That flame will burn forever with Scar's never-ending desire for destruction.",
      qualityLevel: 4,
      dropLocations: ["Scar"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/unending-destruction-41400114.webp"
    },
    {
      id: 41400124,
      slug: "dreamless-feather",
      name: "Dreamless Feather",
      tags: ["Skill Upgrade Material"],
      description: "Dreamless drop item. Upgrades Resonator Skills.",
      flavor:
        "Emerging from the abyss with aspirations of ruling the land and the beings in Jinzhou, it now lies extinguished in the shadows, leaving behind only this feather.",
      qualityLevel: 4,
      dropLocations: ["Dreamless"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/dreamless-feather-41400124.webp"
    },
    {
      id: 43010001,
      slug: "basic-resonance-potion",
      name: "Basic Resonance Potion",
      tags: ["Resonator EXP Material"],
      description: "Provides 1,000 Resonator EXP.",
      flavor:
        "A potion that can slightly enhance the user's frequency perception ability. It is especially beneficial for Resonators struggling with mastering their Fortes, as it greatly enhances adaptability. However, when consumed by Resonators who already exhibit excellent control over their Fortes, its effectiveness is somewhat diminished due to its fully diluted nature.",
      qualityLevel: 2,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/basic-resonance-potion-43010001.webp"
    },
    {
      id: 43010002,
      slug: "medium-resonance-potion",
      name: "Medium Resonance Potion",
      tags: ["Resonator EXP Material"],
      description: "Provides 3,000 Resonator EXP.",
      flavor:
        'A potion that can further enhance the user\'s frequency perception ability. By adjusting the mixture ratio, this potion is more suitable for Resonators with relatively good control over their Fortes. With a near-perfect cost-effectiveness, it is regarded as flawless except for its "notoriously" bland taste.',
      qualityLevel: 3,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/medium-resonance-potion-43010002.webp"
    },
    {
      id: 43010003,
      slug: "advanced-resonance-potion",
      name: "Advanced Resonance Potion",
      tags: ["Resonator EXP Material"],
      description: "Provides 8,000 Resonator EXP.",
      flavor:
        "A potion that can greatly enhance the user's frequency perception ability. Collaborating with professional nutritionists, this potion is more beneficial to both physical and mental well-being compared to many healthcare products on the market. This potion enjoys a high reputation among Resonators, with many voices urging its manufacturer to explore a variety of flavors.",
      qualityLevel: 4,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/advanced-resonance-potion-43010003.webp"
    },
    {
      id: 43010004,
      slug: "premium-resonance-potion",
      name: "Premium Resonance Potion",
      tags: ["Resonator EXP Material"],
      description: "Provides 20,000 Resonator EXP.",
      flavor:
        "A potion that can significantly enhance the user's Frequency perception. Its formula is locked within a vault with the highest security. Rumor has it the inventor of this potion is a powerful Resonator in their own right, and their hope is to groom a successor capable of surpassing their achievements.",
      qualityLevel: 5,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/premium-resonance-potion-43010004.webp"
    },
    {
      id: 43020001,
      slug: "basic-energy-core",
      name: "Basic Energy Core",
      tags: ["Weapon EXP Material"],
      description: "Provides 1,000 Weapon EXP.",
      flavor:
        "Purified liquid energy extracted from Tacetite, its purity increasing with higher ratings. When injected into a weapon, it offers a corresponding bonus.",
      qualityLevel: 2,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/basic-energy-core-43020001.webp"
    },
    {
      id: 43020002,
      slug: "medium-energy-core",
      name: "Medium Energy Core",
      tags: ["Weapon EXP Material"],
      description: "Provides 3,000 Weapon EXP.",
      flavor:
        "A supplement storing a small amount of Tacetite Energy. It can be used to recharge the core modules of Tacetite Weapons. Routine preventative maintenance of weapons is advised for all Resonators, or they may find themselves caught off guard in the case of an emergency.",
      qualityLevel: 3,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/medium-energy-core-43020002.webp"
    },
    {
      id: 43020003,
      slug: "advanced-energy-core",
      name: "Advanced Energy Core",
      tags: ["Weapon EXP Material"],
      description: "Provides 8,000 Weapon EXP.",
      flavor:
        "A supplement storing a small amount of Tacetite Energy. It can be used in the core modules of Tacetite Weapons to increase power output. Weapons are the allies of Resonators and Tacetites serve as their food. Only by nourishing weapons well can they be handier and more powerful in battles.",
      qualityLevel: 4,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/advanced-energy-core-43020003.webp"
    },
    {
      id: 43020004,
      slug: "premium-energy-core",
      name: "Premium Energy Core",
      tags: ["Weapon EXP Material"],
      description: "Provides 20,000 Weapon EXP.",
      flavor:
        "A supplement storing high-density Tacetite Energy, fully capable of powering most Tacetite Weapons. Experienced Resonators often preassemble and preheat this supplement to prevent weapon malfunctions during intense battles.",
      qualityLevel: 5,
      dropLocations: ["Quests", "Huanglong Exploration", "Simulation Training"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/premium-energy-core-43020004.webp"
    },
    {
      id: 43020011,
      slug: "inert-metallic-drip",
      name: "Inert Metallic Drip",
      tags: ["Weapon & Skill Material"],
      description:
        "A basic material used to break through weapons and upgrade skills for Sword Resonators.",
      flavor:
        "A fluid metallic drip whose activity has been greatly diminished. Its surface appears lackluster, covered with a dense layer of passivation film. However, under suitable temperatures, the residual Frequency Energy within it can still be utilized.",
      qualityLevel: 2,
      dropLocations: [
        "Forgery Challenge: Flaming Remnants",
        "Souvenir Store",
        "Weapon Shop",
      ],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/inert-metallic-drip-43020011.webp"
    },
    {
      id: 43020012,
      slug: "reactive-metallic-drip",
      name: "Reactive Metallic Drip",
      tags: ["Weapon & Skill Material"],
      description:
        "A medium material used to break through weapons and upgrade skills for Sword Resonators.",
      flavor:
        "A fluid metallic drip whose activity has been partially retained. Its surface presents a luster similar to that of Tacetites. As it is quite reactive, it needs to be stored properly upon collection to prevent any loss of Frequency Energy.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Forgery Challenge: Flaming Remnants"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/reactive-metallic-drip-43020012.webp"
    },
    {
      id: 43020013,
      slug: "polarized-metallic-drip",
      name: "Polarized Metallic Drip",
      tags: ["Weapon & Skill Material"],
      description:
        "An advanced material used to break through weapons and upgrade skills for Sword Resonators.",
      flavor:
        "A fluid metallic drip with high activity. Its surface presents an amazing luster. This polarized matter only forms under extremely strict conditions, and the scientific world has yet to fully figure out its transformation patter.",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Forgery Challenge: Flaming Remnants"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/polarized-metallic-drip-43020013.webp"
    },
    {
      id: 43020014,
      slug: "heterized-metallic-drip",
      name: "Heterized Metallic Drip",
      tags: ["Weapon & Skill Material"],
      description:
        "A premium material used to break through weapons and upgrade skills for Sword Resonators.",
      flavor:
        "A special fluid metallic drip which can barely form naturally. It maintains a perpetual flow on its surface. Microscopic examinations of a few samples have revealed its intricate inner structure, resembling more of a living organism than an inorganic substance.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Forgery Challenge: Flaming Remnants"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/heterized-metallic-drip-43020014.webp",
    },
    {
      id: 43020021,
      slug: "impure-phlogiston",
      name: "Impure Phlogiston",
      tags: ["Weapon & Skill Material"],
      description:
        "A basic material used to break through weapons and upgrade skills for Pistols Resonators.",
      flavor:
        "A crystal shaped like a solidified flame. Its unconventional appearance challenges Old Science. Typically, it contains a rather high level of impurities and thus requires specialized purification treatment for practical use.",
      qualityLevel: 2,
      dropLocations: [
        "Forgery Challenge: Marigold Woods",
        "Souvenir Store",
        "Weapon Shop",
      ],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/impure-phlogiston-43020021.webp",
    },
    {
      id: 43020022,
      slug: "extracted-phlogiston",
      name: "Extracted Phlogiston",
      tags: ["Weapon & Skill Material"],
      description:
        "A medium material used to break through weapons and upgrade skills for Pistols Resonators.",
      flavor:
        "A crystal shaped like a solidified candle flame. Its impurities are significantly reduced through a rough extraction and recrystallization process. This makes it simple even for those without expertise to distinguish between crystals of varying quality.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Forgery Challenge: Marigold Woods"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/extracted-phlogiston-43020022.webp"
    },
    {
      id: 43020023,
      slug: "refined-phlohiston",
      name: "Refined Phlohiston",
      tags: ["Weapon & Skill Material"],
      description:
        "An advanced material used to break through weapons and upgrade skills for Pistols Resonators.",
      flavor:
        "A crystal shaped like a solidified firework. After repeated purification, it is almost free of impurities. Its eye-catching and magnificent appearance not only holds practical utility but also elevates its collectible value.",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Forgery Challenge: Marigold Woods"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/refined-phlohiston-43020023.webp",
    },
    {
      id: 43020024,
      slug: "flawless-phlohiston",
      name: "Flawless Phlohiston",
      tags: ["Weapon & Skill Material"],
      description:
        "A premium material used to break through weapons and upgrade skills for Pistols Resonators.",
      flavor:
        "A crystal shaped like a raging flame, known for its impeccable purity. As a result, some Resonators don't want to use these crystals solely for enhancement, instead opting to entrust professional craftsmen to process them into unique accessories.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Forgery Challenge: Marigold Woods"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/flawless-phlohiston-43020024.webp",
    },
    {
      id: 43020031,
      slug: "lento-helix",
      name: "Lento Helix",
      tags: ["Weapon & Skill Material"],
      description:
        "A basic material used to break through weapons and upgrade skills for Rectifier Resonators.",
      flavor:
        "A helix with soothing waveforms. Facing this remarkable substance, human beings finally realize what static vibration is about.",
      qualityLevel: 2,
      dropLocations: [
        "Forgery Challenge: Misty Forest",
        "Souvenir Store",
        "Weapon Shop",
      ],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/lento-helix-43020031.webp",
    },
    {
      id: 43020032,
      slug: "adagio-helix",
      name: "Adagio Helix",
      tags: ["Weapon & Skill Material"],
      description:
        "A medium material used to break through weapons and upgrade skills for Rectifier Resonators.",
      flavor:
        "A helix with gentle waveforms. Researchers can extract and utilize the sealed Cadence Energy within it. However, it is worth mentioning that researchers cannot effectively analyze the content contained within this helix.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Forgery Challenge: Misty Forest"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/adagio-helix-43020032.webp",
    },
    {
      id: 43020033,
      slug: "andante-helix",
      name: "Andante Helix",
      tags: ["Weapon & Skill Material"],
      description:
        "An advanced material used to break through weapons and upgrade skills for Rectifier Resonators.",
      flavor:
        "A helix with graceful waveforms, like a melodious song composed by nature. Instead of being studied by scientists, it might in essence be a subject best explored by researchers of aesthetics.",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Forgery Challenge: Misty Forest"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/andante-helix-43020033.webp",
    },
    {
      id: 43020034,
      slug: "presto-helix",
      name: "Presto Helix",
      tags: ["Weapon & Skill Material"],
      description:
        "A premium material used to break through weapons and upgrade skills for Rectifier Resonators.",
      flavor:
        "A helix with intense waveforms. Researchers are greatly captivated by the perfect harmony of movement and stillness it displays. However, to this day, no one knows how this harmony is formed.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Forgery Challenge: Misty Forest"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/presto-helix-43020034.webp",
    },
    {
      id: 43020041,
      slug: "waveworn-residue-210",
      name: "Waveworn Residue 210",
      tags: ["Weapon & Skill Material"],
      description:
        "A basic material used to break through weapons and upgrade skills for Broadblade Resonators.",
      flavor:
        "A Waveworn residue featuring a double-layered spherical shell. However, the inner balance has been disturbed, causing the Remnant within the inner core to reduce to the Reverberation.",
      qualityLevel: 2,
      dropLocations: [
        "Forgery Challenge: Eroded Ruins",
        "Souvenir Store",
        "Weapon Shop",
      ],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/waveworn-residue-210-43020041.webp",
    },
    {
      id: 43020042,
      slug: "waveworn-residue-226",
      name: "Waveworn Residue 226",
      tags: ["Weapon & Skill Material"],
      description:
        "A medium material used to break through weapons and upgrade skills for Broadblade Resonators.",
      flavor:
        "A Waveworn residue featuring a double-layered spherical shell. It is not in a state of decline. By selecting an appropriate absorber, users may still have the chance to extract Remnant Energy.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Forgery Challenge: Eroded Ruins"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/waveworn-residue-226-43020042.webp",
    },
    {
      id: 43020043,
      slug: "waveworn-residue-235",
      name: "Waveworn Residue 235",
      tags: ["Weapon & Skill Material"],
      description:
        "An advanced material used to break through weapons and upgrade skills for Broadblade Resonators.",
      flavor:
        "A Waveworn residue featuring a double-layered spherical shell. It maintains a delicate balance. When it is highly concentrated in a centrifuge, it produces products that have various applications.",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Forgery Challenge: Eroded Ruins"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/waveworn-residue-235-43020043.webp",
    },
    {
      id: 43020044,
      slug: "waveworn-residue-239",
      name: "Waveworn Residue 239",
      tags: ["Weapon & Skill Material"],
      description:
        "A premium material used to break through weapons and upgrade skills for Broadblade Resonators.",
      flavor:
        "A Waveworn residue featuring a double-layered spherical shell. It is known for its astonishing balance. Due to its indispensable role in many high-tech fields, it is subject to the most stringent trade restrictions.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Forgery Challenge: Eroded Ruins"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/waveworn-residue-239-43020044.webp",
    },
    {
      id: 43020051,
      slug: "cadence-seed",
      name: "Cadence Seed",
      tags: ["Weapon & Skill Material"],
      description:
        "A basic material used to break through weapons and upgrade skills for Gauntlets Resonators.",
      flavor:
        "An unusual substance resembling the shape of a plant seed. If you listen carefully, you can feel a pulse-like rhythm. However, in fact, this substance is not alive, and its structure is pretty similar to that of the Tacet Core of a Howler.",
      qualityLevel: 2,
      dropLocations: [
        "Forgery Challenge: Moonlit Groves",
        "Souvenir Store",
        "Weapon Shop",
      ],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/cadence-seed-43020051.webp",
    },
    {
      id: 43020052,
      slug: "cadence-bud",
      name: "Cadence Bud",
      tags: ["Weapon & Skill Material"],
      description:
        "A medium material used to break through weapons and upgrade skills for Gauntlets Resonators.",
      flavor:
        "An unusual substance resembling the shape of a plant bud. If you listen carefully, you can sense the pleasure of sprouting from the ground. However, it can never grow into a complete plant.",
      qualityLevel: 3,
      dropLocations: ["Synthesis", "Forgery Challenge: Moonlit Groves"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/cadence-bud-43020052.webp",
    },
    {
      id: 43020053,
      slug: "cadence-leaf",
      name: "Cadence Leaf",
      tags: ["Weapon & Skill Material"],
      description:
        "An advanced material used to break through weapons and upgrade skills for Gauntlets Resonators.",
      flavor:
        "An unusual substance resembling the shape of a new leaf. If you listen carefully, you can hear the faint rustle of it bathing in sunlight and sucking dew. In fact, it is able to absorb the wandering Frequency Energy from the environment.",
      qualityLevel: 4,
      dropLocations: ["Synthesis", "Forgery Challenge: Moonlit Groves"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/cadence-leaf-43020053.webp",
    },
    {
      id: 43020054,
      slug: "cadence-blossom",
      name: "Cadence Blossom",
      tags: ["Weapon & Skill Material"],
      description:
        "A premium material used to break through weapons and upgrade skills for Gauntlets Resonators.",
      flavor:
        "An unusual substance resembling the shape of a blossom. If you listen carefully, you can hear the petals unfolding. At the end of the silent time, a blossom of Cadence finally bursts into bloom.",
      qualityLevel: 5,
      dropLocations: ["Synthesis", "Forgery Challenge: Moonlit Groves"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/cadence-blossom-43020054.webp",
    },
    {
      id: 36000001,
      slug: "basic-sealed-tube",
      name: "Basic Sealed Tube",
      tags: ["Echo Development Material"],
      description: "Basic Echo EXP item. Provides 500 EXP.",
      flavor:
        "A cylindrical storage that contains simplified frequency cluster. To activate it, users must rotate the cipher wheel to the correct position. Resonators can then extract its data using their Terminal, employing it to optimize the performance of the absorbed Echoes.",
      qualityLevel: 2,
      dropLocations: ["Huanglong Exploration", "Tacet Field"],
      sortIndex: 0,
      image: "/src/assets/images/development-materials/basic-sealed-tube-36000001.webp"
    },
    {
      id: 36000002,
      slug: "medium-sealed-tube",
      name: "Medium Sealed Tube",
      tags: ["Echo Development Material"],
      description: "Medium Echo EXP item. Provides 1,000 EXP.",
      flavor:
        "A cylindrical storage that contains standard frequencies. To activate it, users must rotate the cipher wheel to the correct position. This medium-sized storage holds a greater volume of information compared to the basic version. Consequently, the database available for training is more complete, better optimizing the performance of the absorbed Echoes.",
      qualityLevel: 3,
      dropLocations: ["Huanglong Exploration", "Tacet Field"],
      sortIndex: 1,
      image: "/src/assets/images/development-materials/medium-sealed-tube-36000002.webp",
    },
    {
      id: 36000003,
      slug: "advanced-sealed-tube",
      name: "Advanced Sealed Tube",
      tags: ["Echo Development Material"],
      description: "Advanced Echo EXP item. Provides 2,000 EXP.",
      flavor:
        "A cylindrical storage that contains advanced frequencies. To activate it, users must rotate the cipher wheel to the correct position. This storage not only contains the database needed for routine training, but also incorporates simulation materials tailored to diverse scenarios. Therefore, it can fully exploit the potential of the absorbed Echoes.",
      qualityLevel: 4,
      dropLocations: [
        "Huanglong Exploration",
        "Tacet Field",
        "Souvenir Store",
        "Adversity Exchange",
        "Simulation Training Store",
      ],
      sortIndex: 2,
      image: "/src/assets/images/development-materials/advanced-sealed-tube-36000003.webp",
    },
    {
      id: 36000004,
      slug: "premium-sealed-tube",
      name: "Premium Sealed Tube",
      tags: ["Echo Development Material"],
      description: "Premium Echo EXP item. Provides 5,000 EXP.",
      flavor:
        "A cylindrical storage that contains special frequencies. To activate it, users must rotate the cipher wheel to the correct position. It contains precious data collected from various extreme environments, facilitating the revolutionary transformation of the absorbed Echoes.",
      qualityLevel: 5,
      dropLocations: [
        "Huanglong Exploration",
        "Tacet Field",
        "Simulation Training Store",
      ],
      sortIndex: 3,
      image: "/src/assets/images/development-materials/premium-sealed-tube-36000004.webp",
    },
    {
      id: 41400134,
      slug: "hidden-thunder-tacet-core",
      name: "Hidden Thunder Tacet Core",
      tags: ["Resonator Ascension Material"],
      description: "The Tempest Mephis's drop, a Resonator's Ascension item.",
      flavor:
        "The core of Tempest Mephis. Like a miniature thundercloud, the rumbling thunder spreads from the Tacet Core, causing the surroundings to quiver in its wake.",
      qualityLevel: 4,
      dropLocations: ["Tempest Mephis"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/hidden-thunder-tacet-core-41400134.webp",
    },
    {
      id: 44010027,
      slug: "test-universal-echo",
      name: "test/Universal Echo",
      tags: ["Echo Development Material"],
      description:
        "test/Universal Echoes can substitute any Echo consumed during Tuning.",
      flavor: "Echo Details",
      qualityLevel: 4,
      dropLocations: ["Huanglong Exploration", "Medium Tacet Field: Echo"],
      sortIndex: 0,
      image: "/src/assets/images/development-materials/test-universal-echo-44010027.webp",
    },
    {
      id: 44010028,
      slug: "test-golden-universal-echo",
      name: "test/Golden Universal Echo",
      tags: ["Echo Development Material"],
      description:
        "test/Golden Universal Echoes can substitute any Echo consumed during Tuning.",
      flavor: "Echo Details",
      qualityLevel: 5,
      dropLocations: ["Huanglong Exploration", "Medium Tacet Field: Echo"],
      sortIndex: 0,
      image: "/src/assets/images/development-materials/test-golden-universal-echo-44010028.webp",
    },
    {
      id: 36000011,
      slug: "basic-tuner",
      name: "Basic Tuner",
      tags: ["Echo Development Material"],
      description: "A device for Tuning 2-star Echoes. Unlocks one Substat.",
      flavor:
        "Adjust Echoes' frequencies, remove any noise, and unleash their true potential.",
      qualityLevel: 2,
      dropLocations: ["Huanglong Exploration", "Tacet Field"],
      sortIndex: 0,
      image: "/src/assets/images/development-materials/basic-tuner-36000011.webp",
    },
    {
      id: 36000012,
      slug: "medium-tuner",
      name: "Medium Tuner",
      tags: ["Echo Development Material"],
      description: "A device for Tuning 3-star Echoes. Unlocks one Substat.",
      flavor:
        "Adjust Echoes' frequencies, remove any noise, and unleash their true potential.",
      qualityLevel: 3,
      dropLocations: ["Huanglong Exploration", "Tacet Field"],
      sortIndex: 1,
      image: "/src/assets/images/development-materials/medium-tuner-36000012.webp",
    },
    {
      id: 36000013,
      slug: "advanced-tuner",
      name: "Advanced Tuner",
      tags: ["Echo Development Material"],
      description: "A device for Tuning 4-star Echoes. Unlocks one Substat.",
      flavor:
        "Adjust Echoes' frequencies, remove any noise, and unleash their true potential.",
      qualityLevel: 4,
      dropLocations: ["Huanglong Exploration", "Tacet Field"],
      sortIndex: 2,
      image: "/src/assets/images/development-materials/advanced-tuner-36000013.webp",
    },
    {
      id: 36000014,
      slug: "premium-tuner",
      name: "Premium Tuner",
      tags: ["Echo Development Material"],
      description: "A device for Tuning 5-star Echoes. Unlocks one Substat.",
      flavor:
        "Adjust Echoes' frequencies, remove any noise, and unleash their true potential.",
      qualityLevel: 5,
      dropLocations: ["Huanglong Exploration", "Tacet Field"],
      sortIndex: 3,
      image: "/src/assets/images/development-materials/premium-tuner-36000014.webp",
    },
    {
      id: 41400144,
      slug: "sentinel-s-dagger",
      name: "Sentinel's Dagger",
      tags: ["Skill Upgrade Material"],
      description:
        "Dropped by challenging Sentinel Jué. Can be used to upgrade skills.",
      flavor:
        "A ritual vessel gifted by Sentinel Jué.\nLegend holds that upon the Lament's arrival in Jinzhou, time became entangled, with no more clear line between mornings and nights.\nThe Magistrate used the Sentinel's dagger as the gnomon of the sundial to determine the date and time.",
      qualityLevel: 4,
      dropLocations: ["Sentinel Jué"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/sentinel-s-dagger-41400144.webp",
    },
    {
      id: 41400154,
      slug: "topological-confinement",
      name: "Topological Confinement",
      tags: ["Resonator Ascension Material"],
      description: "Fallacy of No Return's drop, used for Resonator Ascension.",
      flavor:
        "A dataset with an ever-changing topology that serves to create an infinite, eternal representation of reality. The Tethys System created this prison of causality, where unknown variations, including love and hope, are forever trapped.",
      qualityLevel: 4,
      dropLocations: ["Fallacy of No Return"],
      sortIndex: 5,
      image: "/src/assets/images/development-materials/topological-confinement-41400154.png",
    },
    {
        id: 42300030,
        slug: "iris",
        name: "Iris",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "A plant native to Whining Aix's Mire. It symbolizes broken or concealed affection.\nAffected by the continuous thundercloud weather of this place, this variant has a significantly shortened flowering period compared to its original species. A true pity, indeed.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Collection Spots",
          "Heron Wetland",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/iris-42300030.png"
      },
      {
        id: 42300040,
        slug: "terraspawn-fungus",
        name: "Terraspawn Fungus",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "A fungus that spreads across dark soil, resembling a black lotus. Once the cap matures and darkens, it begins to liquefy and makes the ground fertile for more mushrooms to grow, hence its name.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Collection Spots",
          "Withered Line",
          "Camp Overwatch",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/terraspawn-fungus-42300040.png",
      },
      {
        id: 42300050,
        slug: "lanternberry",
        name: "Lanternberry",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "A fluorescent berry growing in caves.\nBefore miners get down the mine in the Tiger's Maw, their family will tuck a lanternberry into their pocket, hoping its glow will lead them safely home in the midst of darkness.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Collection Spots",
          "Tiger's Maw Mine",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/lanternberry-42300050.png",
      },
      {
        id: 42300060,
        slug: "pecok-flower",
        name: "Pecok Flower",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "A vibrant flower, with its sap often processed into dye.\nKnown for its fragrance and water-resistant properties, the flower is commonly used to produce seal ink paste for official or personalized stamps.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Collection Spots",
          "Taoyuan Vale",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/pecok-flower-42300060.png",
      },
      {
        id: 42300070,
        slug: "belle-poppy",
        name: "Belle Poppy",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "Once the symbol of the Port City of Guixu, it nearly went extinct when Incinero Petals were rampant.\nHowever, at the outskirts of the city ruins, Belle Poppy was found to bloom still at its home, having endured the disaster.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Collection Spots",
          "Sea of Flames",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/belle-poppy-42300070.png",
      },
      {
        id: 42300080,
        slug: "coriolus",
        name: "Coriolus",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "A special fungus associated with ancient trees. Its medicinal and curative properties have been recorded in numerous medical classics of Jinzhou.\nAn ancient specimen is preserved in the Academy, a living relic tracing back to the era when the towering Central Banyan in the Dim Forest was not so majestic.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Giant Banyan",
          "Forbidden Forest",
          "Shifang Pharmacy",
          "Collection Spots",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/coriolus-42300080.png",
      },
      {
        id: 42300090,
        slug: "wintry-bell",
        name: "Wintry Bell",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "A flower blooming on the high shores.\nLegend has it that the Wintry Bell does not really wither. When the ancient bells born by the giant Turtoise in Gorges of Spirits resonate, they will rise again from the ice and snow.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Collection Spots",
          "Bell-Borne Ravine",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/wintry-bell-42300090.png",
      },
      {
        id: 42300100,
        slug: "violet-coral",
        name: "Violet Coral",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "Violet Coral, commonly found trapped in the shallow beaches, is always revitalized with the flow and withered with the ebb.",
        qualityLevel: 1,
        dropLocations: [
          "Overworld Collection",
          "Collection Spots",
          "Norfall Barrens",
          "Wuming Bay",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/violet-coral-42300100.png",
      },
      {
        id: 42310200,
        slug: "pavo-plum",
        name: "Pavo Plum",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "Berries resembling feathers, the people of Hongzhen call them Linglong Hearts.\nThey have an incredibly spicy taste and are said to be able to refresh the mind and enhance intelligence when consumed.",
        qualityLevel: 1,
        dropLocations: [
          "Luminous Shore",
          "Collection Spots",
          "Mt. Firmament",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/pavo-plum-42310200.png",
      },
      {
        id: 42310210,
        slug: "loongs-pearl",
        name: "Loong's Pearl",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "A tranquil flower, casting its gentle radiance amidst the shadows.",
        qualityLevel: 1,
        dropLocations: [
          "Mianloong Chamber",
          "Collection Spots",
          "Mt. Firmament",
          "Shifang Pharmacy",
        ],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/loongs-pearl-42310210.png",
      },
      {
        id: 42310230,
        slug: "nova",
        name: "Nova",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
          "An unstable crystal precipitated out of highly concentrated Remnant Energy. It is so unsteady that it starts to sublimate as soon as it is formed, disappearing into thin air as energy. Its existence reminds one of the transience of the life of a Nova.",
        qualityLevel: 1,
        dropLocations: ["Black Shores", "Collection Spots", "KU-Money's Shop"],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/nova-42310230.png",
      },
      {
        id: null,
        slug: "firecracker-jewelweed",
        name: "Firecracker Jewelweed",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
            "A vividly colored flower shaped like an unfurling firework. Give a Firecracker Jewelweed a gentle shake, and its swollen capsules will burst open... The seeds scatter in all directions, resembling the colorful burst of a firecracker.",
        qualityLevel: 1,
        dropLocations: ["Rosemary's Apothecary", "Collection Spots", "Nimbus Sanctum", "Overworld Collection"],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/firecracker-jewelweed.png",
      },
      {
        id: null,
        slug: "golden-fleece",
        name: "Golden Fleece",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
            "No flavor yet.",
        qualityLevel: 1,
        dropLocations: ["Rosemary's Apothecary", "Collection Spots", "Penitent's End", "Overworld Collection"],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/golden-fleece.png",
      },
      {
        id: null,
        slug: "sword-acorus",
        name: "Sword Acorus",
        tags: ["Ascension Material"],
        description: "A material used for Resonator Ascension.",
        flavor:
            "A tall flower with a firm stem, crowned by delicate flowers. Sword Acoruses are often used by instructors to teach swordsmanship to young nobles, replacing real swords with these harmless blooms. The children, entranced by the beauty and fragrance, find their attention captured far more easily than by cold, menacing blades.",
        qualityLevel: 1,
        dropLocations: ["Rosemary's Apothecary", "Collection Spots", "Ragunna", "Egla Town", "Averardo Vault", "Overworld Collection"],
        sortIndex: 0,
        image: "/src/assets/images/development-materials/sword-acorus.png",
      },
  ];

export const characterlist = [
  {
      name: "Aalto",
      element: "aero",
      weapon: "Pistols",
      charactericon: "/src/assets/images/character-icons-small/aalto-icon.webp",
      version: 1.0,
  },
  {
      name: "Baizhi",
      element: "glacio",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/baizhi-icon.webp",
      version: 1.0,
  },
  {
      name: "Calcharo",
      element: "electro",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/calcharo-icon.webp",
      version: 1.0,
  },
  {
      name: "Changli",
      element: "fusion",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/changli-icon.webp",
      version: 1.1,
  },
  {
      name: "Chixia",
      element: "fusion",
      weapon: "Pistols",
      charactericon: "/src/assets/images/character-icons-small/chixia-icon.webp",
      version: 1.0,
  },
  {
      name: "Danjin",
      element: "havoc",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/danjin-icon.webp",
      version: 1.0,
  },
  {
      name: "Encore",
      element: "fusion",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/encore-icon.webp",
      version: 1.0,
  },
  {
      name: "Jianxin",
      element: "aero",
      weapon: "Gauntlet",
      charactericon: "/src/assets/images/character-icons-small/jianxin-icon.webp",
      version: 1.0,
  },
  {
      name: "Jinhsi",
      element: "spectro",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/jinhsi-icon.webp",
      version: 1.1,
  },
  {
      name: "Jiyan",
      element: "aero",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/jiyan-icon.webp",
      version: 1.0,
  },
  {
      name: "Lingyang",
      element: "glacio",
      weapon: "Gauntlet",
      charactericon: "/src/assets/images/character-icons-small/lingyang-icon.webp",
      version: 1.0,
  },
  {
      name: "Mortefi",
      element: "fusion",
      weapon: "Pistols",
      charactericon: "/src/assets/images/character-icons-small/mortefi-icon.webp",
      version: 1.0,
  },
  {
      name: "Rover",
      element: "havoc",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/rover-icon.svg",
      version: 1.0,
  },
  {
      name: "Rover",
      element: "spectro",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/rover-icon.svg",
      version: 1.0,
  },
  {
      name: "Sanhua",
      element: "glacio",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/sanhua-icon.webp",
      version: 1.0,
  },
  {
      name: "Taoqi",
      element: "havoc",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/taoqi-icon.webp",
      version: 1.0,
  },
  {
      name: "Verina",
      element: "spectro",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/verina-icon.webp",
      version: 1.0,
  },
  {
      name: "Yangyang",
      element: "aero",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/yangyang-icon.webp",
      version: 1.0,
  },
  {
      name: "Yinlin",
      element: "electro",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/yinlin-icon.webp",
      version: 1.0,
  },
  {
      name: "Yuanwu",
      element: "electro",
      weapon: "Gauntlet",
      charactericon: "/src/assets/images/character-icons-small/yuanwu-icon.webp",
      version: 1.0,
  },
  {
      name: "Zhezhi",
      element: "glacio",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/zhezhi-icon.webp",
      version: 1.2,
  },
]