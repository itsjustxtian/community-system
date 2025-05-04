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

export const samplecharacterlist = [
    {
        name: "Aalto",
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
              basic_am: "LF Howler Core",
              medium_am: "MF Howler Core",
              advanced_am: "HF Howler Core",
              premium_am: "FF Howler Core",
            },
            talent_materials: {
              ...pistoluser,
              weeklyboss: "Monument Bell",
            },
          }
        ]
    },
    {
        name: "Baizhi",
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
                basic_am: "LF Howler Core",
                medium_am: "MF Howler Core",
                advanced_am: "HF Howler Core",
                premium_am: "FF Howler Core",
              },
              talent_materials: {
                ...rectifieruser,
                weeklyboss: "Monument Bell",
              },
            }
          ]
    },
]

export const sampleweaponlist = [
    {
        name: "Ages of Harvest",
        image: "/src/assets/images/weapons/ages-of-harvest.webp",
        rarity: 5,
        type: "Broadblade",
        base_atk: 587,
        main_stat: "CRIT Rate 24.3%",
        description: "Grants 12% Attribute DMG Bonus. Casting Intro Skill gives the equipper Ageless Marking, which grants 24% Resonance Skill DMG Bonus for 12s. Casting Resonance Skill gives the equipper Ethereal Endowment, which grants 24% Resonance Skill DMG Bonus for 12s.",
        materials: [
            {
              shellcredits: "Shell Credit",
              ascension_materials: {
                experience: "Premium Energy Core",
                basic_am: "LF Whisperin Core",
                medium_am: "MF Whisperin Core",
                advanced_am: "HF Whisperin Core",
                premium_am: "FF Whisperin Core",
              },
              talent_materials: {
                basic_tm: "Waveworn Residue 210",
                medium_tm: "Waveworn Residue 226",
                advanced_tm: "Waveworn Residue 235",
                premium_tm: "Waveworn Residue 239",
              }
            }
        ],
    },
    {
        name: "Verdant Summit",
        image: "/src/assets/images/weapons/verdant-summit.webp",
        rarity: 5,
        type: "Broadblade",
        main_stat: "CRIT DMG 48.6%",
        base_atk: 587,
        description: "Increases the DMG Bonus of all Resonance Attributes by 12%. Every time Intro Skill or Resonance Liberation is cast, increases Heavy Attack DMG Bonus by 24%, stacking up to 2 time(s). This effect lasts for 14s.",
        materials: [
            {
              shellcredits: "Shell Credit",
              ascension_materials: {
                experience: "Premium Energy Core",
                basic_am: "LF Whisperin Core",
                medium_am: "MF Whisperin Core",
                advanced_am: "HF Whisperin Core",
                premium_am: "FF Whisperin Core",
              },
              talent_materials: {
                basic_tm: "Waveworn Residue 210",
                medium_tm: "Waveworn Residue 226",
                advanced_tm: "Waveworn Residue 235",
                premium_tm: "Waveworn Residue 239",
              }
            }
        ],
    },
]