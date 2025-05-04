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
  {   weapon: "Gauntlets",
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
      slug: "refined-phlogiston",
      name: "Refined Phlogiston",
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
      slug: "flawless-phlogiston",
      name: "Flawless Phlogiston",
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

const howlermaterials = {
  basic_am: "LF Howler Core",
  medium_am: "MF Howler Core",
  advanced_am: "HF Howler Core",
  premium_am: "FF Howler Core",
}

const ringmaterials = {
  basic_am: "Crude Ring",
  medium_am: "Basic Ring",
  advanced_am: "Improved Ring",
  premium_am: "Tailored Ring",
}

const whisperinmaterials = {
  basic_am: "LF Whisperin Core",
  medium_am: "MF Whisperin Core",
  advanced_am: "HF Whisperin Core",
  premium_am: "FF Whisperin Core",
}

const sworduser = {
  basic_tm: "Inert Metallic Drip",
  medium_tm: "Reactive Metallic Drip",
  advanced_tm: "Polarized Metallic Drip",
  premium_tm: "Heterized Metallic Drip",
}

const pistoluser = {
  basic_tm: "Impure Phlogiston",
  medium_tm: "Extracted Phlogiston",
  advanced_tm: "Refined Phlogiston",
  premium_tm: "Flawless Phlogiston",
}

const rectifieruser = {
  basic_tm: "Lento Helix",
  medium_tm: "Adagio Helix",
  advanced_tm: "Andante Helix",
  premium_tm: "Presto Helix",
}

const broadbladeuser = {
  basic_tm: "Waveworn Residue 210",
  medium_tm: "Waveworn Residue 226",
  advanced_tm: "Waveworn Residue 235",
  premium_tm: "Waveworn Residue 239",
}

const gauntletuser = {
  basic_tm: "Cadence Seed",
  medium_tm: "Cadence Bud",
  advanced_tm: "Cadence Leaf",
  premium_tm: "Cadence Blossom",
}

export const characterlist = [
  { name: "Aalto",
    element: "aero",
    weapon: "Pistols",
    charactericon: "/src/assets/images/character-icons-small/aalto-icon.webp",
    characterportrait: "/src/assets/images/portraits/aalto.webp",
    rarity: 4,
    version: 1.0,
    talent: [
      {
        basic_attack: {
          name: "Normal Attack: Half Truths",
          description: {
            "Basic Attack": "Aalto fires up to 5 consecutive shots, dealing Aero DMG. Basic Attack 4 will spread the \"Mist\" forward, which lasts for 1.5s.",
            "Heavy Attack": "Aalto enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Aero DMG.",
            "Mid-air Attack": "Aalto consumes Stamina to perform consecutive shots at the target in mid-air, dealing Aero DMG.",
            "Dodge Counter": "Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG."
          }
        },
        resonance_skill: {
          name: "Resonance Skill: Shift Trick",
          description: {
            "Mist Avatar": "Casts \"Mist\" and 1 \"Mist Avatar(s)\" to taunt the surrounding targets. The avatars inherit a portion of Aalto's HP and generate 6 Mist Bullets around them, dealing Aero DMG.",
            "Mist Missiles": "Deals Aero DMG, considered as Resonance Skill damage.",
          }
        },
        resonance_lib: {
          name: "Resonance Liberation: Flower in the Mist",
          description: {
            "": "Generate a \"Gate of Quandary\" in front of you dealing Aero DMG. When bullets pass through the \"Gate of Quandary\", ATK is increased. \"Gate of Quandary\" lasts for 10s."
          }
        },
        forte_circuit: {
          name: "Forte Circuit: Misty Cover",
          description: {
            "": "When Aalto passes through \"Mist\" or \"Gate of Quandary\", he enters \"Mistcloak Dash\".",
            "Mistcloak Dash":"Movement speed increased; During this period, \"Mist Drops\" are continuously consumed, and for each 1 \"Mist Drop\" consumed, 1 Resonance Skill Mist Missile is generated.",
            "Mist Drops":"Aalto can hold up to 6 Mist Drops. When Basic Attack or Mid-air Attack passes through \"Mist\" and hits the target, 1 \"Mist Drop\" is recovered.",
          }
        },
        inherent_skill_1: {
          name: "Inherent Skill: Perfect Performance",
          description: {
            "": "Aalto's Heavy Attack will always critically hit, triggered once every 30 seconds."
          }
        },
        inherent_skill_2: {
          name: "Inherent Skill: Mid-game Break",
          description: {
            "": "Aalto will continuously recover Stamina when he is in the Forte Circuit Miscloak Dash state."
          }
        },
        intro_skill: {
          name: "Intro Skill: Feint Shot",
          description: {
            "": "Aalto suddenly appears and performs rapid continuous shooting, dealing Aero DMG."
          }
        },
        outro_skill: {
          name: "Outro Skill: Dissolving Mist",
          description: {
            "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 23% Aero DMG Deepen for 14 seconds or until the Character is switched."
          }
        },
      }
    ],
    materials: [
      {
        shellcredits: "Shell Credit",
        ascension_materials: {
          experience: "Premium Resonance Potion",
          bossmaterial: "Roaring Rock Fist",
          regionalspecialty: "Wintry Bell",
          ...howlermaterials,
        },
        talent_materials: {
          ...pistoluser,
          weeklyboss: "Monument Bell",
        },
      }
    ]
  },
  { name: "Baizhi",
    element: "glacio",
    weapon: "Rectifier",
    charactericon: "/src/assets/images/character-icons-small/baizhi-icon.webp",
    characterportrait: "/src/assets/images/portraits/baizhi.webp",
    rarity: 4,
    version: 1.0,
    talent: [
        {
          basic_attack: {
            name:"Normal Attack: Destined Promise",
            description: {
              "Basic Attack": "Baizhi instructs You'tan to perform up to 4 consecutive attacks, dealing Glacio damage.",
              "Heavy Attack": "Baizhi continuously consumes Stamina to command You'tan to attack enemies, dealing Glacio damage. During Heavy Attack, Baizhi can command You'tan to move.",
              "Mid-air Attack": "Baizhi consumes Stamina and summons You’tan in mid-air to perform a Plunging Attack, dealing Glacio damage.",
              "Dodge Counter": "Use Basic Attack after a successful Dodge to attack the target, dealing Glacio damage.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Emergency Plan",
            description: {
              "": "Baizhi calls You'tan to attack the target, dealing Glacio damage while restoring HP for the entire team."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Momentary Union",
            description: {
              "": "Baizhi summons You'tan to restore HP for the entire team, generating 4 stacks of Remnant Entities.",
              "Remnant Entities": "Remnant Entities follow the active team members and automatically consume 1 stacks of Remnant Entities to attack the targets every 2.5s, dealing Glacio damage on hit while restoring HP to all team members nearby."
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Cycle of Life",
            description: {
              "You'tan": "A Remnant Creature that answers to Baizhi’s mind and desires while sharing all her attributes. You’tan goes back to Baizhi when Baizhi dodges.",
              "Concentration": "Baizhi consumes all \"Concentrations\" when casting Heavy Attack or Resonance Skill Emergency Plan to continuously restore HP for Characters nearby. Each 1 \"Concentration\" consumed restores HP for 1 time every 2s.\n When Baizhi consumes \"Concentration\" to cast Heavy Attack, Baizhi additionally restores Concerto Energy and Resonance Energy; When Baizhi consumes \"Concentration\" to cast Resonance Skill Emergency Plan, Baizhi additionally restores Concerto Energy.\nBaizhi can hold up to 4 \"Concentrations\". Baizhi obtains 1 \"Concentration\" for every Basic Attack on hit.",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Range",
            description: {
              "": "When Baizhi casts Resonance Skill Emergency Plan, You'tan generates a field of Euphonia that lasts for 15s.",
              "Euphonia": "ATK of the Resonators who picks up Euphonia is increased by 15% for 20s",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Stimulus Feedback",
            description: {
              "": "For every Heavy Attack on hit, Baizhi restores HP to the nearby team member with the least HP equal to 0.25% of Baizhi's max HP."
            }
          },
          intro_skill: {
            name: "Intro Skill: Overflowing Frost",
            description: {
              "": "Baizhi calls You'tan to perform 1 plunging attack, dealing Glacio damage while restoring HP to all team members nearby."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rejuvinating Flow",
            description: {
              "": "Baizhi restores HP equal to 1.54% of her max HP to The next character (or other characters on a nearby team that activates an Outro Skill) every 3s for 30s. Resonators gaining this healing also gain 15% all-Type DMG Deepen for 6s."
            }
          },
        }
      ],
    materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Sound-Keeping Tacet Core",
            regionalspecialty: "Lanternberry",
            ...howlermaterials
          },
          talent_materials: {
            ...rectifieruser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Calcharo",
      element: "electro",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/calcharo-icon.webp",
      characterportrait: "/src/assets/images/portraits/calcharo.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Gnawing Fangs",
            description: {
              "Basic Attack": "Perform up to 4 attacks, dealing Electro DMG.",
              "Heavy Attack": "Consume Stamina to attack the target, dealing Electro DMG.",
              "Mid-air Attack": "Consume Stamina to perform a Mid-Air Plunging Attack, dealing Electro DMG.",
              "Dodge Counter": "Using Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Extermination Order",
            description: {
              "": "Cast up to 3 attacks. Deal Electro DMG.\nIf this Character is switched or Resonance Skill Extermination Order is not repeated in a while, it will be put on a Cooldown. Resonance Skill Extermination Order does not reset your Basic Attack stage."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Phantom Etching",
            description: {
              "": "Calcharo attacks the target, dealing Electro DMG and enters Deathblade Gear state. After Resonance Liberation Deathblade Gear state ends, Calcharo's next Intro Skill is replaced with Intro Skill \"Necessary Means\", which deals Electro DMG, considered as Intro Skill damage.",
              "Deathblade Gear": "Basic Attack is replaced with Basic Attack Hounds Roar. Dodge Counter deals increased damage, considered as Resonance Liberation damage.",
              "Hounds Roar": "Perform up to 5 consecutive attacks, dealing Electro DMG, considered as Basic Attack Damage."
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Hunting Mission",
            description: {
              "Heavy Attack: \"Mercy\"": "When Calcharo has 3 \"Cruelty\", his Heavy Attack is replaced with Heavy Attack \"Mercy\". When casting Heavy Attack \"Mercy\", Calcharo consumes 3 \"Cruelty\" to deal Electro DMG, considered as Heavy Attack damage, and recovers Resonance Energy and Concerto Energy.",
              "\"Cruelty\"": "Calcharo can hold up to 3 \"Cruelty\". Under Resonance Liberation Deathblade Gear state, \"Cruelty\" cannot be acquired. When Resonance Skill Extermination Order hits the target, gain 1 \"Cruelty\".",
              "Heavy Attack: \"Death Messenger\"": "When Calcharo has 5 \"Killing Intent\", his Basic Attack is replaced with Heavy Attack \"Death Messenger\". When casting Heavy Attack \"Death Messenger\", Calcharo consumes 5 \"Killing Intent\" to deal Electro DMG, considered as Resonance Liberation damage, and recovers Resonance Energy and Concerto Energy.",
              "\"Killing Intent\"": "Under Resonance Liberation Deathblade Gear state, Calcharo's Forte Gauge is replaced with \"Killing Intent\", stacking up to 5. When Basic Attack Hounds Roar hits the target, Calcharo gains 1 \"Killing Intent\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Bloodshed Awaken",
            description: {
              "": "When casting Heavy Attack \"Mercy\", Calcharo's Resonance Liberation DMG Bonus is increased by 10% for 15s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Revenant Rush",
            description: {
              "": "When Heavy Attack \"Death Messenger\" hits the target, the damage taken by Calcharo is reduced by 15% for 5s."
            }
          },
          intro_skill: {
            name: "Intro Skill: Wanted Outlaw",
            description: {
              "": "Attack the target, dealing Electro DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Shadowy Raid",
            description: {
              "": "Calcharo summons Phantom to support the Resonator, clearing the targets in front with a slash. The Phantom's attack deals Electro DMG equal to 195.98%+391.96% of Calcharo's ATK."
            }
          },
        }
      ],
    materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Thundering Tacet Core",
            regionalspecialty: "Iris",
            ...ringmaterials,
          },
          talent_materials: {
            ...broadbladeuser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Changli",
      element: "fusion",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/changli-icon.webp",
      characterportrait: "/src/assets/images/portraits/changli.webp",
      rarity: 5,
      version: 1.1,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: ",
            description: {
              "Basic Attack": "Perform up to 4 consecutive attacks, dealing Fusion DMG. After releasing Basic Attack 4, enter True Sight, lasting for 12s.",
              "Heavy Attack": "Hold Basic Attack on the ground to perform an upward strike at the cost of Stamina, dealing Fusion DMG. Use Basic Attack within a certain time to release Mid-Air Attack 3.",
              "Mid-air Attack": "Consume Stamina to perform up to 4 consecutive attacks in mid-air, dealing Fusion DMG. After releasing Mid-air Attack 4, enter True Sight, lasting for 12s.",
              "Mid-air Heavy Attack": "Shortly after holding Basic Attack in mid-air or using Basic Attack True Sight: Charge, use Basic Attack to perform a plunging attack at the cost of Stamina, dealing Fusion DMG. Use Basic Attack within a certain time to release Basic Attack 3.",
              "Dodge Counter": "Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Tripartite Flames",
            description: {
              "True Sight: Capture": "After releasing Resonance Skill, Changli dashes towards the enemy and enters True Sight, lasting for 12s. In the end, she releases a plunging attack, dealing Fusion DMG. True Sight: Capture has 2 initial attempts and can be used up to 2 times. The number of attempts is increased by 1 every 12s. Can be cast in mid-air.",
              "Basic Attack: True Sight - Conquest": "When in True Sight, if Changli uses Ground Basic Attack, she releases True Sight: Conquest, dashing towards the enemy and dealing Fusion DMG, considered as Resonance Skill DMG. After releasing True Sight: Conquest, True Sight ends.",
              "Basic Attack: True Sight - Charge": "When in True Sight, if Changli jumps or uses Basic Attack in mid-air, she releases True Sight: Charge, dashing towards the enemy and dealing Fusion DMG, considered as Resonance Skill DMG. After releasing True Sight: Charge, True Sight ends.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Radiance of Fealty",
            description: {
              "": "Deal Fusion DMG to nearby targets, obtaining 4 stacks of Enflamement, and entering Fiery Feather. Can be cast in mid-air.",
              "Fiery Feather": "When Changli releases Heavy Attack Flaming Sacrifice within 10s, her ATK is increased by 25%, after which Fiery Feather ends."
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Flaming Sacrifice",
            description: {
              "Heavy Attack: Flaming Sacrifice": "When releasing Heavy Attack, if Changli carries 4 stacks of Enflamement, she consumes all stacks of Enflamement to cast Flaming Sacrifice, dealing Fusion DMG, considered as Resonance Skill DMG. While casting Flaming Sacrifice, Changli takes 40% less DMG.",
              "Enflamement": "Changli can hold up to 4 stacks of Enflamement.\nChangli obtains 1 stack of Enflamement for every Basic Attack: True Sight - Conquest on hit.\nChangli obtains 1 stack of Enflamement for every Basic Attack: True Sight - Charge on hit.\nChangli obtains 4 stacks of Enflamement for every Resonance Liberation Radiance of Fealty",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Secret Strategist",
            description: {
              "": "When Changli releases Basic Attack: True Sight - Conquest or Basic Attack: True Sight - Charge, for each stack of Enflamement, Changli's Fusion DMG Bonus is increased by 5%.",
              "": "",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Sweeping Force",
            description: {
              "": "When Changli releases Heavy Attack Flaming Sacrifice or Resonance Liberation Radiance of Fealty, Changli's Fusion DMG Bonus is increased by 20%, and Changli ignores 15% of the target's DEF when dealing damage."
            }
          },
          intro_skill: {
            name: "Intro Skill: Obedience of Rules",
            description: {
              "": "Changli appears in mid-air, attacks the target, and enters True Sight, lasting for 12s."
            }
          },
          outro_skill: {
            name: "Outro Skill: Strategy of Duality",
            description: {
              "": "The incoming Resonator has their Fusion DMG Amplified by 20% and Resonance Liberation DMG Amplified by 25% for 10s or until the Resonator is switched out."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Pavo Plum",
            ...ringmaterials
          },
          talent_materials: {
            ...sworduser,
            weeklyboss: "Sentinel's Dagger",
          },
        }
      ]
  },
  {   name: "Chixia",
      element: "fusion",
      weapon: "Pistols",
      charactericon: "/src/assets/images/character-icons-small/chixia-icon.webp",
      characterportrait: "/src/assets/images/portraits/chixia.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: POW POW",
            description: {
              "Basic Attack": "Chixia fires up to 4 consecutive shots at a single target, dealing Fusion DMG.",
              "Heavy Attack": "Chixia enters the aiming state for a more powerful shot. The shot fired deals Fusion DMG.",
              "Mid-air Attack": "Chixia consumes Stamina to continuously shoot the target in the air, dealing Fusion DMG.",
              "Dodge Counter": "Use a Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Whizzing Fight Spirit",
            description: {
              "": "Chixia unleashes a flurry of shots, dealing Fusion DMG. Whizzing Fight Spirit has 2 initial charges."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Blazing Flames",
            description: {
              "": "Chixia fires up fast shots at nearby enemies, dealing Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Heroic Bullets",
            description: {
              "Resonance Skill: DAKA DAKA!": "Hold Resonance Skill Whizzing Fight Spirit to enter DAKA DAKA!. In this state:\n- Chixia continuously consumes \"Thermobaric Bullets\" to attack the target, dealing Fusion DMG, considered as Resonance Skill damage.\n- Tap Basic Attack to cast Basic Attack IV, dealing Fusion DMG, considered as Basic Attack damage. Then she terminates \"DAKA DAKA!\".\n- If 30 \"Thermobaric Bullets\" have been fired when Basic Attackis activated, Chixia will cast Resonance Skill Boom Boom and terminate \"DAKA DAKA!\" Chixia terminates \"DAKA DAKA!\" when all \"Thermobaric Bullets\" are consumed.",
              "Resonance Skill: Boom Boom": "Chixia deals Fusion DMG, considered as Resonance Skill damage.",
              "Thermobaric Bullets": "Chixia can hold up to 60 \"Thermobaric Bullets\". Innate Skill Scorching Magazine increases Max \"Thermobaric Bullets\" by 10. Chixia obtains \"Thermobaric Bullets\" for every Normal Attack POW POW on hit. Chixia obtains \"Thermobaric Bullets\" upon casting Intro Skill Grand Entrance and Resonance Skill Whizzing Fight Spirit.",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Scorching Magazine",
            description: {
              "": "Max \"Thermobaric Bullets\" is increased by 10 rounds. The damage for Resonance Skill Boom Boom is increased by 50%.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Numbingly Spicy!",
            description: {
              "": "Each \"Thermobaric Bullets\" that hits a target during Resonance Skill DAKA DAKA! increases ATK by 1% for 10s, stacking up to 30 times."
            }
          },
          intro_skill: {
            name: "Intro Skill: Grand Entrance",
            description: {
              "": "Chixia makes a heroic entrance and fires rapidly with her dual pistols at the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Leaping Flames",
            description: {
              "": "Chixia releases a shock wave surrounding the target, dealing Fusion DMG equal to 530.00% of Chixia's ATK to enemies within the range."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Belle Poppy",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Danjin",
      element: "havoc",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/danjin-icon.webp",
      characterportrait: "/src/assets/images/portraits/danjin.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Execution",
            description: {
              "Basic Attack": "Danjin performs up to 3 consecutive attacks, dealing Havoc DMG.",
              "Heavy Attack": "Danjin combines her Forte with the blade in her hand and consumes Stamina to launch consecutive attacks, dealing Havoc DMG.",
              "Mid-air Attack": "Consumes Stamina to perform a mid-air Plunging Attack, dealing Havoc DMG.",
              "Dodge Counter": " Basic Attack after a successful Dodge to launch an attack, dealing Havoc DMG.",
              "Dodge Counter: Ruby Shades": "After a successful Dodge Counter, Danjin can use the Resonance Skill Crimson Fragment to cast the Resonance Skill Crimson Erosion"
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Crimson Fragment",
            description: {
              "": "When casting Incinerating Will, each attack consumes 3% of Danjin's max HP. When Danjin's HP is less than 1%, this no longer consumes HP.",
              "Carmine Gleam": "Danjin attacks the target, dealing Havoc DMG.",
              "Crimson Erosion": "After Basic Attack II, Dodge Counter or Intro Skill Vindication, use Resonance Skill to perform up to 2 consecutive strikes, dealing Havoc DMG. When Crimson Erosion II hits a target, apply Incinerating Will to it.",
              "Incinerating Will": "Danjin's damage dealt to targets marked with Incinerating Will is increased by 20%.",
              "Sanguine Pulse": "Use Resonance Skill after Basic Attack III to perform up to 3 consecutive attacks, dealing Havoc DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Crimson Bloom",
            description: {
              "": "Danjin's anger intensifies as she frantically swings her dual blades, performing multiple rapid consecutive attacks, and 1 Scarlet Burst attack(s), dealing Havoc DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Serene Vigil",
            description: {
              "Heavy Attack: Chaoscleave": "After accumulating 60 \"Ruby Blossom\", long press Basic Attack to consume all \"Ruby Blossom\" to cast Chaoscleave, dealing Havoc DMG, considered as Heavy Attack damage, and restoring HP to Danjin.\nIf current \"Ruby Blossom\" exceeds 120, this consumes 120 \"Ruby Blossom\" to increase the damage multiplier of Chaoscleave and Scatterbloom performed this time.",
              "Heavy Attack: Scatterbloom": "Use Basic Attack after Heavy Attack Chaoscleave to launch Shatter to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.",
              "Ruby Blossom": "Danjin obtains \"Ruby Blossom\" when using Resonance Skill Crimson Fragment.",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Crimson Light",
            description: {
              "": "The damage of the Resonance Skill Crimson Erosion triggered by Dodge Counter: Ruby Shades is increased by 20%. The HP cost and stacks of \"Ruby Blossom\" recovered are doubled.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Overflow",
            description: {
              "": "After casting the Resonance Skill Sanguine Pulse, Danjin's Heavy Attack damage is increased by 30% for 5s."
            }
          },
          intro_skill: {
            name: "Intro Skill: Vindiction",
            description: {
              "": "With unwavering determination, Danjin unleashes a strike, dealing Havoc DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Duality",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 23% Havoc DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Strife Tacet Core",
            regionalspecialty: "Belle Poppy",
            ...ringmaterials
          },
          talent_materials: {
            ...sworduser,
            weeklyboss: "Unwarranted Feather",
          },
        }
      ]
  },
  {   name: "Encore",
      element: "fusion",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/encore-icon.webp",
      characterportrait: "/src/assets/images/portraits/encore.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Wooly Attack",
            description: {
              "Basic Attack": "Perform up to 4 consecutive attacks, dealing Fusion DMG.",
              "Basic Attack: Wooly Strike": "After the Basic Attack IV, press Basic Attack to attack the target, dealing Fusion DMG",
              "Heavy Attack": "Encore consumes Stamina to attack the target, dealing Fusion DMG.",
              "Mid-air Attack": "Encore consumes Stamina to perform a Plunging Attack, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Flaming Woolies",
            description: {
              "Flaming Woolies": "Summon Cloudy and Cosmos to attack the target with high-temperature rays, dealing Fusion DMG.",
              "Energetic Welcome": "After casting Flaming Woolies, use Resonance Skill to launch Energetic Welcome to attack the target, dealing Fusion DMG."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Cosmos Rave",
            description: {
              "": "As Encore loses control, Cosmos breaks free and wreaks havoc on its surroundings.",
              "Basic Attack: Cosmos: Frolicking": "During Cosmos Rampage, the Basic Attack is replaced with Cosmos: Frolicking, which performs up to 4 consecutive attacks, dealing Fusion DMG, considered as Basic Attack damage.",
              "Cosmos: Heavy Attack": "During Cosmos Rampage, the Heavy Attack is replaced with Cosmos: Heavy Attack, consuming Stamina to attack the target, dealing Fusion DMG, considered as Heavy Attack damage.",
              "Resonance Skill: Cosmos: Rampage": "During Cosmos Rampage, Flaming Woolies is replaced with Cosmos:Rampage, attacking the target with uncontrollable flames, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Cosmos: Dodge Counter": "During Cosmos Rampage, use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG, considered as Basic Attack damage.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Black & White Woolies",
            description: {
              "Resonance Liberation: Cloudy Frenzy": "When Encore's \"Dissonance\" is full, after casting a Heavy Attack, Encore will consume all \"Dissonance\" to enter the Dissonance state, reducing damage taken by 70%. Switching Characters does not interrupt \"Dissonance\".\nAfter the Dissonance state ends, Encore will cast Cloudy Frenzy, dealing Fusion DMG, considered as Resonance Liberation damage.",
              "Resonance Liberation: Cosmos Rupture": "During Cosmos Rampage, when casting Heavy Attack, if \"Dissonance\" is full, Encore will consume all \"Dissonance\" to enter Cosmos' Dissonance state, reducing damage taken by 70%. Switching Characters does not interrupt \"Dissonance\".\nAfter Cosmos' Dissonance state ends, Encore will cast Cosmos Rupture, dealing Fusion DMG, considered as Resonance Liberation damage.",
              "Dissonance": "Encore can hold up to 100 \"Dissonance\".\nWhen Normal Attack Wooly Attack hits the target, Encore restores \"Dissonance\". When Resonance Skill Flaming Woolies hits the target, Encore restores \"Dissonance\". When Resonance Skill Energetic Welcome hits the target, Encore restores \"Dissonance\". When Intro Skill Woolies Helpers hits the target, Encore restores \"Dissonance\".\nDuring the duration of Resonance Liberation Cosmos Rampage, hitting targets will restore \"Dissonance\" to Encore.",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Angry Cosmos",
            description: {
              "": "During the Resonance Liberation Cosmos Rave, when Encore's HP is above 70%, DMG dealt is increased by 10%.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Woolies Cheer Dance",
            description: {
              "": "When Resonance Skill Flaming Woolies or Resonance Skill Cosmos: Rave is cast, Encore's Fusion DMG Bonus is increased by 10% for 10 seconds."
            }
          },
          intro_skill: {
            name: "Intro Skill: Woolies Can Help!",
            description: {
              "": "Encore pounces at the enemies with Cosmos, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Thermal Field",
            description: {
              "": "Encore generates a Flame Zone centered around skill target, with a radius of 3m. Targets inside the Flame Zone are continuously burned, suffering Fusion DMG equal to 176.76% of Encore's ATK every 1.5s for 6s."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Pecok Flower",
            ...whisperinmaterials
          },
          talent_materials: {
            ...rectifieruser,
            weeklyboss: "Unending Destruction",
          },
        }
      ]
  },
  {   name: "Jianxin",
      element: "aero",
      weapon: "Gauntlets",
      charactericon: "/src/assets/images/character-icons-small/jianxin-icon.webp",
      characterportrait: "/src/assets/images/portraits/jianxin.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Fengyiquan",
            description: {
              "Basic Attack": "Perform up to 4 attacks, dealing Aero DMG.",
              "Heavy Attack": "Consume Stamina to attack the target, dealing Aero DMG.",
              "Mid-air Attack": "Jianxin consumes Stamina to plunge and unleash a powerful kick, dealing Aero DMG.",
              "Dodge Counter": "Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Calming Air",
            description: {
              "": "Hold Resonance Skill to enter Parry Stance.",
              "Chi Counter": "When Jianxin is attacked in the Parry Stance, she does not take damage and immediately performs Chi Counter, dealing Aero DMG.",
              "Chi Parry": "Release the Resonance Skill during Parry Stance to interrupt Parry Stance and cast Chi Parry, dealing Aero DMG."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Purification Force Field",
            description: {
              "": "Creates a strong wind field, continuously pulling targets within the wind field to the center and causing Aero DMG. When the wind field disappears, it will cause Aero DMG to all targets within the range again.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Primordial Chi Spiral",
            description: {
              "Heavy Attack: Primordial Chi Spiral": "When \"Chi\" is stacked to its max, hold Heavy Attack to cast Primordial Chi Spiral and start Zhoutian Progress.",
              "Zhoutian Progress": "Jianxin's anti-interruption is increased, and her the damage taken is reduced by 50%.\nJianxin continuously consumes \"Chi\" and casts Chi Strike to attack targets nearby, dealing Aero DMG. As Zhoutian Progress accumulates, Jianxin reaches different Zhoutian and gain effects accordingly.\n- Before Minor Zhoutian: Gain Zhoutian Progress 1 shield. When Zhoutian Progress is interrupted, cast Pushing Punch to attack the target, dealing Aero DMG.\n- Minor Zhoutian: Gain Zhoutian Progress 2 shield and cast Shock to attack the target, dealing Aero DMG. When Zhoutian Progress is interrupted, cast Yielding Pull to attack the target, dealing Aero DMG.\n -Major Zhoutian: Inner: Gain Zhoutian Progress 3 shield and cast Shock to attack the target, dealing Aero DMG. When Zhoutian Progress is interrupted, cast Yielding Pull to attack the target, dealing Aero DMG.\n- Major Zhoutian: Outer: Gain Zhoutian Progress 3 shield and cast Shock to attack the target, dealing Aero DMG.\n- When you release Basic Attack button, interrupt Zhoutian Progress and lose all \"Chi\". When all \"Chi\" is consumed, end Zhoutian Progress.\nWhen Zhoutian Progress ends, regain a shield according to the Zhoutian Progress you reached; As the shield provided by Heavy Attack: Primordial Chi Spiral persists, restore HP for the on-field character once every 6s.",
              "Chi": "Jianxin can hold up to 120 Chi. Chi is obtained when a Normal Attack Fengyiquan hits the target. Chi is obtained when the Resonance Skill Calming Air is cast. Chi is obtained when the Resonance Skill Chi Counter or Resonance Skill Chi Parry hits the target. Chi is obtained when the Intro Skill Essence of Tao hits the target."
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Formless Release",
            description: {
              "": "Damage of Resonance Liberation Purification Force Field is increased by 20%.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Reflection",
            description: {
              "": "The shield obtained with Heavy Attack Primordial Chi Spiral is increased by 20%."
            }
          },
          intro_skill: {
            name: "Intro Skill: Essence of Tao",
            description: {
              "": "Pull targets within the range, dealing Aero DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Transcendence",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Resonance Liberation DMG Deepen for 14s or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Roaring Rock Fist",
            regionalspecialty: "Lanternberry",
            ...howlermaterials
          },
          talent_materials: {
            ...gauntletuser,
            weeklyboss: "Unending Destruction",
          },
        }
      ]
  },
  {   name: "Jinhsi",
      element: "spectro",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/jinhsi-icon.webp",
      characterportrait: "/src/assets/images/portraits/jinhsi.webp",
      rarity: 5,
      version: 1.1,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Slash of Breaking Dawn",
            description: {
              "Basic Attack": "Perform up to 4 consecutive strikes, dealing Spectro DMG.",
              "Heavy Attack": "Perform a charged attack at the cost of Stamina, dealing Spectro DMG.",
              "Mid-air Attack": "Perform a plunging attack while in mid-air at the cost of Stamina, dealing Spectro DMG.",
              "Dodge Counter": "Use Basic Attack after a successful Dodge to counterattack, dealing Spectro DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Trailing Lights of Eons",
            description: {
              "": "Dash forward and perform consecutive strikes that inflict Spectro DMG.",
              "Overflowing Radiance": "After Jinhsi uses Basic Attack 4 or, while not in Incarnation, Intro Skill Loong's Halo, an alternative Resonance Skill Overflowing Radiance is available within 5s.\nResonance Skill Overflowing Radiance inflicts Spectro DMG and sends Jinhsi into Incarnation. Can be cast in mid-air.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Purge of Light",
            description: {
              "": "Unleash the power of invocation to deal Spectro DMG. Can be cast in mid-air.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Luminal Synthesis",
            description: {
              "Incarnation": "While in Incarnation:\n- Alternative Basic Attack \"Incarnation - Basic Attack\" becomes available. Perform up to 4 consecutive strikes, dealing Spectro DMG considered as Resonance Skill DMG. The basic attack cycle of this will not be reset. Can be cast in mid-air.\n- Alternative Resonance Skill \"Crescent Divinity\" becomes available. Deal Spectro DMG. Can be cast in mid-air.\n- Alternative Heavy Attack \"Incarnation - Heavy Attack\" becomes available. Attack the target in mid-air at the cost of Stamina, dealing Spectro DMG.\n- Alternative Dodge \"Incarnation - Dodge\" is available while in mid-air. Can be cast multiple times at the cost of Stamina.\n- Alternative Dodge Counter \"Incarnation - Dodge Counter\" becomes available. Deal Spectro DMG. Can be cast in mid-air",
              "Resonance Skill - Illuminous Epiphany": "After Stage 4 of Incarnation - Basic Attack, Incarnation terminates and Jinhsi gains Ordination Glow. Can be cast in mid-air.\n While Ordination Glow lasts:\n- Basic Attack is replaced with Heavy Attack \"Incarnation - Heavy Attack\". Attack the target in mid-air at the cost of Stamina, dealing Spectro DMG.\n- Resonance Skill is replaced with Resonance Skill \"Illuminous Epiphany\". Send out Solar Flare that detonates as Stella Glamor, dealing Spectro DMG after a short delay. Consume up to 50 Incandescence, with each point of Incandescence granting bonus DMG Multiplier percentage to Stella Glamor. Can be cast in mid-air.\n- After casting Resonance Skill Illuminous Epiphany, Jinhsi gains Unison. This can be triggered once every 25s.",
              "Unison": "While Jinhsi has Unison, switching to other Resonators will remove Jinhsi's Unison to trigger Jinhsi's Outro Skill and the incoming Resonator's Intro Skill. Unison will be consumed in priority in place of Concerto Energy when Concerto Energy is full.",
              "Incandescence": "Jinhsi can hold up to 50 Incandescence.\nWhen Jinhsi is in the party, all nearby Resonators in the party gain Eras in Unity. Eras in Unity provides 2 independent effects:\nJinhsi gains 1 Incandescence anytime Resonators in the party inflict Attribute DMG. This effect may be triggered by damage of the same Attribute for up to 1 time(s) every 3s. Additionally, Jinhsi gains 2 Incandescence when Resonators in the party damage the enemy with Coordinated Attacks. This effect may be triggered by Coordinated Attacks of the same Attribute for up to 1 time(s) every 3s.",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Radiant Surge",
            description: {
              "": "Jinhsi's Spectro DMG Bonus is increased by 20%.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Converged Flash",
            description: {
              "": "DMG Multiplier of Intro Skill Loong's Halo is increased by 50%."
            }
          },
          intro_skill: {
            name: "Intro Skill: Loong's Halo",
            description: {
              "": "Attack the target, dealing Spectro DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Temporal Bender",
            description: {
              "": "Summoning the power homologous with the Sentinel, Jinhsi may now gain Incandescence via Eras in Unity from damage of the same Attribute more effectively, at 1 time(s) every 1s for 20s."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Elegy Tacet Core",
            regionalspecialty: "Loong's Pearl",
            ...howlermaterials,
          },
          talent_materials: {
            ...broadbladeuser,
            weeklyboss: "Sentinel's Dagger",
          },
        }
      ]
  },
  {   name: "Jiyan",
      element: "aero",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/jiyan-icon.webp",
      characterportrait: "/src/assets/images/portraits/jiyan.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Lone Lance",
            description: {
              "Basic Attack": "Perform up to 5 consecutive attacks, dealing Aero DMG.",
              "Heavy Attack": "Consume Stamina to perform a thrust attack, dealing Aero DMG.",
              "Heavy Attack: Windborne Strike": "Hold the Basic Attack during Heavy Attack to cast Windborne Strike after the Heavy Attack ends, dealing Aero DMG.",
              "Heavy Attack: Abyssal Slash": "Release the Basic Attack during the Heavy Attack to cast Abyssal Slash after the Heavy Attack ends, dealing Aero DMG.",
              "Mid-air Attack": "Consume Stamina to perform a Mid-Air Plunging Attack, dealing Aero DMG. After the Plunging Attack, use Basic Attack to perform a following attack, dealing Aero DMG.",
              "Mid-air Attack: Banner of Triumph": "After casting the Heavy Attack Windborne Strike or the Resonance Skill Windqueller in the air, Jiyan can perform an aerial attack, dealing Aero DMG.",
              "Dodge Counter": "Use a Basic Attack after a successful Dodge to attack the target with, dealing Aero DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Windqueller",
            description: {
              "": "Dash forward a certain distance, dealing Aero DMG. Can be cast in the air."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Emerald Storm: Prelude",
            description: {
              "": "After releasing Emerald Storm: Prelude, Jiyan enters Qingloong Mode.",
              "Qingloong Mode": "Jiyan has increased Anti-interruption; Basic Attack, Heavy Attack and Dodge Counter are replaced with Heavy Attack Lance of Qingloong.",
              "Heavy Attack: Lance of Qingloong": "Perform up to 3 continuous attacks, dealing Aero DMG, considered as Heavy Attack damage.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Qingloong at War",
            description: {
              "": "When casting Resonance Skill Windqueller, if Jiyan has 30 or more \"Resolve\", he consumes 30 \"Resolve\" to increase the damage of this Resonance Skill Windqueller by 20%. When Jiyan is in Qingloong Mode, DMG of Resonance Skill Windqueller is increased by 20% and no longer consumes \"Resolve\".",
              "Resonance Liberation: Emerald Storm: Finale": "When casting Resonance Liberation Emerald Storm: Prelude, if Jiyan has 30 \"Resolve\" or more, he will consume 30 \"Resolve\" to cast Emerald Storm: Finale, dealing Aero DMG, considered as Heavy Attack damage. Emerald Storm: Finale can be cast in mid-air at low altitude.",
              "Resolve": "Jiyan can hold up to 60 Resolve. Jiyan gains \"Resolve\" when his Normal Attack Lone Lance hits the target. Jiyan gains \"Resolve\" when the Intro Skill Tactical Strike hits the target. If Jiyan does not hit a target within 15 seconds, his \"Resolve\" will gradually decrease",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Heavenly Balance",
            description: {
              "": "After casting the Intro Skill Tactical Strike, Jiyan's ATK is increased by 10% for 15s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Tempest Taming",
            description: {
              "": "When attacks hit a target, Jiyan's Crit. DMG is increased by 12% for 8s."
            }
          },
          intro_skill: {
            name: "Intro Skill: Tactical Strike",
            description: {
              "": "Jiyan stabs the target from the air, dealing Aero DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Discipline",
            description: {
              "": "When the next Character's (or other Characters on a nearby team that activates an Outro Skill) Heavy Attack hits the target, Jiyan will summon Qingloong to launch a Coordinated Attack, dealing Aero DMG equal to 313.40% of Jiyan's ATK. This attack lasts for 8s, and can be triggered once every 1s, up to 2 times."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Roaring Rock Fist",
            regionalspecialty: "Pecok Flower",
            ...howlermaterials
          },
          talent_materials: {
            ...broadbladeuser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Lingyang",
      element: "glacio",
      weapon: "Gauntlets",
      charactericon: "/src/assets/images/character-icons-small/lingyang-icon.webp",
      characterportrait: "/src/assets/images/portraits/lingyang.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Majestic Fists",
            description: {
              "Basic Attack": "Perform up to 5 attacks, dealing Glacio damage.",
              "Basic Attack: Feral Roars": "After Resonance Skill Furious Punches is cast, Basic Attack V is replaced with Feral Roars, dealing Glacio damage.",
              "Heavy Attack": "Consume Stamina to attack the target, dealing Glacio damage.",
              "Mid-air Attack": "Consume Stamina to perform a Mid-air Plunging Attack, dealing Glacio damage.",
              "Dodge Counter": "Use a Basic Attack after a successful Dodge to attack the target, dealing Glacio damage.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Ancient Arts",
            description: {
              "Ancient Arts": "Attack the target, dealing Glacio damage.",
              "Furious Punches": "When Basic Attacks III, IV, or V or Basic Attack Feral Roars hits the target, Resonance Skill Ancient Arts is replaced with Resonance Skill Swift Punches. If Lingyang uses Basic Attack after casting Basic Attack Feral Roars and Resonance Skill Swift Punches, he will start from Basic Attack III.\nLingyang's Resonance Skill will not reset his Basic Attack stage.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Strive: Lion's Vigor",
            description: {
              "": "Attack the target, dealing Glacio damage, and receive the blessing of Lion's Vigor, which lasts for 14 seconds.",
              "Lion's Vigor": "Lingyang's Glacio DMG Bonus is increased by 50%."
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Unification of Spirits",
            description: {
              "Heavy Attack: Glorious Plunge": "When Lion's Spirit is full, use Heavy Attack to perform Glorious Plunge, dealing Glacio damage.",
              "Mid-air Attack: Tail Strike": "When Lion's Spirit is not full, use Basic Attack after Heavy Attack to perform Tail Strike, dealing Glacio damage.",
              "Striding Lion": "After casting Heavy Attack Glorious Plunge, enter Striding Lion state; After casting Intro Skill Lion Awakens or Resonance Liberation Strive: Lion's Vigor, if Lion's Spirit is full, use Basic Attack to enter Striding Lion state. In the Striding Lion state: Attacks can be launched in mid-air. If you are back on the ground, use Heavy Attack Glorious Plunge to get back in the air.\nLion's Spirit is continuously consumed, and the Striding Lion state ends in 5s after Lion's Spirit runs out; If Lingyang is in the Resonance Liberation Lion's Vigor state, the consumption speed of Lion's Spirit is reduced by 50%, extending Striding Lion state by up to 10s.\nLingyang's Basic Attack is replaced with Basic Attack Feral Gyrate, which performs up to 2 consecutive attacks, dealing Glacio damage. Lingyang's Resonance Skill is replaced with Mountain Roamer, dealing Glacio damage. When Lion's Spirit is less than 10, use Basic Attack to perform Stormy Kicks, dealing Glacio damage; after performing Basic Attack Stormy Kicks, the Mid-air Attack Radiant Plunge becomes available. Concerto Energy is restored when Lion's Spirit is consumed.",
              "Lion's Spirit": "Lingyang can hold up to 100 Lion's Spirit. When casting Resonance Skill Furious Punches, Lion's Spirit is restored. When casting Intro Skill Lion Awakens, Lion's Spirit is restored. When casting Resonance Liberation Strive: Lion's Vigor, Lion's Spirit is restored.",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Lion's Pride",
            description: {
              "": "The damage of the Intro Skill Lion Awakens is increased by 50%.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Diligent Practice",
            description: {
              "": "Under the Striding Lion state, within 3s after each Basic Attack, the next Mountain Roamer will deal an additional Glacio damage, equal to 150% of Mountain Roamer damage, considered as Resonance Skill damage."
            }
          },
          intro_skill: {
            name: "Intro Skill: Lion Awakens",
            description: {
              "": "Lingyang appears and deals Glacio damage."
            }
          },
          outro_skill: {
            name: "Outro Skill: Frosty Marks",
            description: {
              "": "Lingyang releases a shock wave centered on the skill target, dealing Glacio DMG equal to 587.94% of Lingyang's ATK to targets within the range."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Sound-Keeping Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...gauntletuser,
            weeklyboss: "Unending Destruction",
          },
        }
      ]
  },
  {   name: "Mortefi",
      element: "fusion",
      weapon: "Pistols",
      charactericon: "/src/assets/images/character-icons-small/mortefi-icon.webp",
      characterportrait: "/src/assets/images/portraits/mortefi.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Havoc Rover",
      element: "havoc",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/rover-female-icon.webp",
      characterportrait: "/src/assets/images/portraits/rover-havoc.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Tuneslayer",
            description: {
              "Basic Attack": "Rover-Havoc performs up to 5 consecutive attacks, dealing Havoc DMG.",
              "Heavy Attack": "Rover-Havoc consumes Stamina to attack, dealing Havoc DMG. Use Basic Attack after casting Heavy Attack to cast Basic Attack IV.",
              "Mid-air Attack": "Rover-Havoc consumes Stamina to cast a Mid-Air Plunging Attack, dealing Havoc DMG.",
              "Dodge Counter": "Use Basic Attack after a successful Dodge to attack the target, dealing Havoc DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Wingblade",
            description: {
              "": "Transforms sound into feathers, dealing Havoc DMG."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Deadening Abyss",
            description: {
              "": "Gather the echoes between Rover's palms to attack a target, dealing Havoc DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Umbra Eclipse",
            description: {
              "Devastation": "When \"Umbra\" is full, hold Basic Attack to cast Devastation to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.",
              "Dark Surge": "After casting Devastation, Rover enters the Dark Surge state. In this state: Basic Attack is replaced with Enhanced Basic Attack, which performs up to 5 consecutive attacks, dealing Havoc DMG.\n- Heavy Attack is replaced with Enhanced Heavy Attack.\n- Use Basic Attack after casting Enhanced Heavy Attack to cast Heavy Attack Thwackblade to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.\n- Use Basic Attack after casting Heavy Attack Thwackblade to cast Enhanced Basic Attack 3 to attack the target, dealing Havoc DMG.\n- Resonance Skill Wingblade is replaced with Resonance Skill Lifetaker, transforming sounds into blades to attack the target, dealing Havoc DMG.",
              "Umbra": "Rover can hold up to 100 points of Umbra.\nNormal Attack Tuneslayer recovers Umbra on hit. Resonance Skill Wingblade recovers Umbra when cast. Resonance Skill Lifetaker recovers Umbra when cast. Intro Skill Instant of Annihilation recovers Umbra when cast."
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Metamorph",
            description: {
              "": "In the Dark Surge state, Havoc DMG Bonus is increased by 20%.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Bleak Crescendo",
            description: {
              "": "While in the Dark Surge state, Basic Attack recovers 1 Resonance Energy when it hits a target, and this effect can be triggered once per second."
            }
          },
          intro_skill: {
            name: "Intro Skill: Instant of Annihilation",
            description: {
              "": "Attack the target, dealing Havoc DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Soundweaver",
            description: {
              "": "Summons a Havoc Field to attack a target, dealing 143.3% Havoc DMG to targets within range every 2s for 6s."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Mysterious Code",
            regionalspecialty: "Pecok Flower",
            ...whisperinmaterials
          },
          talent_materials: {
            ...sworduser,
            weeklyboss: "Unwarranted Feather",
          },
        }
      ]
  },
  {   name: "Spectro Rover",
      element: "spectro",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/rover-havoc-male-icon.webp",
      characterportrait: "/src/assets/images/portraits/rover-spectro.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Vibration Manifestation",
            description: {
              "Basic Attack": "Rover casts up to 4 consecutive attacks, dealing Spectro DMG.",
              "Heavy Attack": "Rover consumes Stamina, dealing Spectro DMG.",
              "Heavy Attack: Resonance": "After Basic Attack III or Heavy Attack, press the Basic Attack button at the right time to perform Heavy Attack Resonance, dealing Spectro DMG.",
              "Heavy Attack: Aftertune": "After Heavy Attack Resonance or Dodge Counter hits a target, press the Basic Attack button to perform Heavy Attack Aftertune, dealing Spectro DMG.",
              "Mid-air Attack": "Rover consumes Stamina to perform a Mid-Air Plunging Attack, dealing Spectro DMG.",
              "Dodge Counter": "Use Basic Attack after a successful Dodge to attack the target, dealing Spectro DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Resonating Slashes",
            description: {
              "": "Rover launches an attack forward, dealing Spectro DMG."
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Echoing Orchestra",
            description: {
              "": "Channel Spectro energy to attack the target area, causing a blast after a short delay, dealing Spectro DMG and applying 6 stack(s) of Spectro Frazzle.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: World in a Grain of Sand",
            description: {
              "Resonance Skill: Resonating Spin": "If \"Diminutive Sound\" exceeds 50 when Resonance Skill is used, Rover consumes 50 \"Diminutive Sound\" to cast Resonating Spin, dealing Spectro DMG. This damage is considered as Resonance Skill DMG and applies 2 stack(s) of Spectro Frazzle along with Shimmer.",
              "Shimmer": "Shimmer prevents Spectro Frazzle stacks from reducing over time.",
              "Resonance Skill: Resonating Echoes": "After Resonance Skill Resonating Spin ends, Rover performs Resonance Skill Resonating Echoes upon pressing the Basic Attack button. Rover performs attacks forward, dealing Spectro DMG considered as Resonance Skill DMG.",
              "Diminutive Sound": "Rover can hold up to 100 \"Diminutive Sounds\". Rover obtains \"Diminutive Sound\" for every Normal Attack Vibration Manifestation on hit. Rover obtains \"Diminutive Sound\" for every Heavy Attack aftertune on hit. Rover obtains \"Diminutive Sound\" upon casting Intro Skill Waveshock."
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Reticence",
            description: {
              "": "Damage dealt by Rover's Resonance Skill Resonating Echoes is increased by 60%.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Silent Listener",
            description: {
              "": "Rover's ATK is increased by 15% for 5s upon casting Heavy Attack Resonance."
            }
          },
          intro_skill: {
            name: "Intro Skill: Waveshock",
            description: {
              "": "Rover attacks the target, dealing Spectro DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Instant",
            description: {
              "": "Rover generates an area of stasis surrounding the next character (or other characters on a nearby team that activates an Outro Skill) over 3s."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Mysterious Code",
            regionalspecialty: "Pecok Flower",
            ...whisperinmaterials
          },
          talent_materials: {
            ...sworduser,
            weeklyboss: "Unending Destruction",
          },
        }
      ]
  },
  {   name: "Sanhua", //Gikapoy nako ari na part
      element: "glacio",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/sanhua-icon.webp",
      characterportrait: "/src/assets/images/portraits/sanhua.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Taoqi",
      element: "havoc",
      weapon: "Broadblade",
      charactericon: "/src/assets/images/character-icons-small/taoqi-icon.webp",
      characterportrait: "/src/assets/images/portraits/taoqi.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Verina",
      element: "spectro",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/verina-icon.webp",
      characterportrait: "/src/assets/images/portraits/verina.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Yangyang",
      element: "aero",
      weapon: "Sword",
      charactericon: "/src/assets/images/character-icons-small/yangyang-icon.webp",
      characterportrait: "/src/assets/images/portraits/yangyang.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Yinlin",
      element: "electro",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/yinlin-icon.webp",
      characterportrait: "/src/assets/images/portraits/yinlin.webp",
      rarity: 5,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Yuanwu",
      element: "electro",
      weapon: "Gauntlets",
      charactericon: "/src/assets/images/character-icons-small/yuanwu-icon.webp",
      characterportrait: "/src/assets/images/portraits/yuanwu.webp",
      rarity: 4,
      version: 1.0,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
  {   name: "Zhezhi",
      element: "glacio",
      weapon: "Rectifier",
      charactericon: "/src/assets/images/character-icons-small/zhezhi-icon.webp",
      characterportrait: "/src/assets/images/portraits/zhezhi.webp",
      rarity: 5,
      version: 1.2,
      talent: [
        {
          basic_attack: {
            name:"Normal Attack: Impromptu Show",
            description: {
              "Basic Attack": "Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.",
              "Heavy Attack": "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",
              "Mid-air Attack": "Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",
              "Dodge Counter": "Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.",
            }
          },
          resonance_skill: {
            name: "Resonance Skill: Passionate Variation",
            description: {
              "": "Launch high-speed flame lightning forward, dealing Fusion DMG.",
            }
          },
          resonance_lib: {
            name: "Resonance Liberation: Violent Finale",
            description: {
              "": "Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.",
              "Burning Rhapsody": "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
              "Marcato": "Deals Fusion DMG.",
            }
          },
          forte_circuit: {
            name: "Forte Circuit: Fury Fugue",
            description: {
              "Resonance Skill: Fury Fugue": "When Mortefi's \"Annoyance\" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all \"Annoyance\" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.",
              "Annoyance": "Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores \"Annoyance\".",
            }
          },
          inherent_skill_1: {
            name: "Inherent Skill: Harmonic Control",
            description: {
              "": "After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.",
            }
          },
          inherent_skill_2: {
            name: "Inherent Skill: Rhythmic Vibrato",
            description: {
              "": "During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends."
            }
          },
          intro_skill: {
            name: "Intro Skill: Dissonance",
            description: {
              "": "Attack the target, dealing Fusion DMG."
            }
          },
          outro_skill: {
            name: "Outro Skill: Rage Transposition",
            description: {
              "": "The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched."
            }
          },
        }
      ],
      materials: [
        {
          shellcredits: "Shell Credit",
          ascension_materials: {
            experience: "Premium Resonance Potion",
            bossmaterial: "Rage Tacet Core",
            regionalspecialty: "Coriolus",
            ...whisperinmaterials
          },
          talent_materials: {
            ...pistoluser,
            weeklyboss: "Monument Bell",
          },
        }
      ]
  },
]