// materialCalculations.js

function calculateRequiredMaterials(initialTier, targetTier, recipes, materialTemplate) {
    const requiredMats = { ...materialTemplate };
  
    if (initialTier === targetTier) return requiredMats;
    if (targetTier > recipes.length || initialTier > targetTier) {
      console.error("Invalid tier range.");
      return requiredMats;
    }
  
    for (let i = initialTier; i < targetTier; i++) {
      const recipe = recipes[i];
      for (const [mat, value] of Object.entries(recipe)) {
        if (mat in requiredMats) {
          requiredMats[mat] += value;
        }
      }
    }
    return requiredMats;
  }
  
  const combineMaterials = (materialsList) =>
    materialsList.reduce((acc, curr) => {
      for (const [mat, value] of Object.entries(curr)) {
        acc[mat] = (acc[mat] || 0) + value;
      }
      return acc;
    }, {});
  
  function processTask(task, characterascensionrecipe, materialTemplate, statbonusrecipe, inherentskillrecipe, talentrecipes, weaponrecipe) {
    const allMaterials = [];
  
    // Ascension materials
    const ascensionMaterials = calculateRequiredMaterials(
      task.curr_AL,
      task.target_AL,
      task.task === "resonator" ? characterascensionrecipe : weaponrecipe,
      materialTemplate
    );
    allMaterials.push(ascensionMaterials);
  
    // Talents
    if (task.task === "resonator") {for (const key in task.curr_talents) {
      const initialTier = task.curr_talents[key];
      const targetTier = task.tar_talents[key];
  
      if (initialTier === targetTier) continue;
  
      if (key.startsWith("stat_bonus")) {
        const statBonusMaterials = calculateRequiredMaterials(
          initialTier,
          targetTier,
          statbonusrecipe,
          materialTemplate
        );
        allMaterials.push(statBonusMaterials);
      } else if (key === "inh_skill") {
        const inherentSkillMaterials = calculateRequiredMaterials(
          initialTier,
          targetTier,
          inherentskillrecipe,
          materialTemplate
        );
        allMaterials.push(inherentSkillMaterials);
      } else {
        const talentMaterials = calculateRequiredMaterials(
          initialTier,
          targetTier,
          talentrecipes,
          materialTemplate
        );
        allMaterials.push(talentMaterials);
      }
    }}
  
    return combineMaterials(allMaterials);
  }
  
  function processAllTasks(tasks, characterascensionrecipe, materialTemplate, statbonusrecipe, inherentskillrecipe, talentrecipes) {
    const allMaterialsPerTask = tasks.map((task) =>
      processTask(task, characterascensionrecipe, materialTemplate, statbonusrecipe, inherentskillrecipe, talentrecipes)
    );
    return combineMaterials(allMaterialsPerTask);
  }
  
  function calculateWithCrafting(materialKey, inventory, taskMaterials, foundItem, character) {
    const ascensionTiers = ["basic_am", "medium_am", "advanced_am", "premium_am"];
    const talentTiers = ["basic_tm", "medium_tm", "advanced_tm", "premium_tm"];
  
    const isAscension = ascensionTiers.includes(materialKey);
    const isTalent = talentTiers.includes(materialKey);
  
    if (!isAscension && !isTalent) return null;
  
    const tierList = isAscension ? ascensionTiers : talentTiers;
    const currentTierIndex = tierList.indexOf(materialKey);
    if (currentTierIndex === -1) return null;
  
    const materialNames = tierList.map((tier) =>
      character.materials[0][isAscension ? "ascension_materials" : "talent_materials"][tier]
    );
  
    let needed = taskMaterials[materialKey] || 0;
    const workingInventory = { ...inventory };
  
    // Try to fulfill with existing inventory
    const currentMaterialName = materialNames[currentTierIndex];
    let available = workingInventory[currentMaterialName] || 0;
    let remaining = needed - available;
    if (remaining <= 0) return 0;
  
    // Work backwards from lower tiers and simulate crafting
    for (let i = currentTierIndex - 1; i >= 0 && remaining > 0; i--) {
      const lowerMaterialName = materialNames[i];
      let lowerAmount = workingInventory[lowerMaterialName] || 0;
      let craftable = lowerAmount;
  
      // Figure out how many of this lower tier we need to craft up
      let tierGap = currentTierIndex - i;
      let requiredPerUnit = Math.pow(3, tierGap);
      let possibleCrafts = Math.floor(craftable / requiredPerUnit);
  
      let craftUsed = Math.min(possibleCrafts, remaining);
      if (craftUsed > 0) {
        workingInventory[lowerMaterialName] -= craftUsed * requiredPerUnit;
        available += craftUsed;
        remaining -= craftUsed;
      }
    }
  
    return remaining > 0 ? remaining : 0;
  }
  
  
  function calculateLeft({ materialKey, foundItem, inventory, taskMaterials, character, experienceValues }) {
    if (!foundItem) return { amountLeft: taskMaterials[materialKey], craftAmount: 0 };
  
    if (materialKey === "experience") {
      let totalExp = 0;
      for (const [potionName, expPerPotion] of Object.entries(experienceValues)) {
        const potionCount = inventory[potionName] || 0;
        totalExp += potionCount * expPerPotion;
      }
  
      const requiredExp = taskMaterials.experience || 0;
      const remainingExp = requiredExp - totalExp;
      return { amountLeft: remainingExp > 0 ? remainingExp : 0, craftAmount: 0 };
    }
  
    const craftingLeft = calculateWithCrafting(materialKey, inventory, taskMaterials, foundItem, character);

    if (craftingLeft !== null) {
      const inventoryAmount = inventory[foundItem.name] || 0;
      const requiredAmount = taskMaterials[materialKey] || 0;
  
      const afterInventory = requiredAmount - inventoryAmount;
      const amountToCraft = Math.max(0, afterInventory - craftingLeft);
  
      return {
        amountLeft: craftingLeft,
        craftAmount: amountToCraft
      };
    }
  
    const inventoryAmount = inventory[foundItem.name] || 0;
    const requiredAmount = taskMaterials[materialKey] || 0;
    const amountLeft = requiredAmount - inventoryAmount;
  
    return { amountLeft: amountLeft > 0 ? amountLeft : 0, craftAmount: 0 };
  }

  function mapMaterialNames(taskMaterials, character) {
    const ascension = character.materials[0].ascension_materials;
    const talent = character.materials[0].talent_materials;
    const mapped = {};
  
    for (const [key, value] of Object.entries(taskMaterials)) {
      if (ascension[key]) {
        mapped[ascension[key]] = value;
      } else if (talent[key]) {
        mapped[talent[key]] = value;
      } else if (key === "shellcredits") {
        mapped[character.materials[0].shellcredits] = value;
      } else {
        mapped[key] = value; // fallback for unmatched keys like "experience"
      }
    }
  
    return mapped;
  }

  function hasSufficientInventory(renamedMaterials, inventory) {
    for (const [materialName, requiredAmount] of Object.entries(renamedMaterials)) {
      const availableAmount = inventory[materialName] || 0;
      if (availableAmount < requiredAmount) {
        return false;
      }
    }
    return true;
  }

  function hasSufficientInventoryWithCrafting(renamedMaterials, inventory, taskMaterials, character, experienceValues) {
    for (const [materialName, requiredAmount] of Object.entries(renamedMaterials)) {
      const materialKey = Object.keys(taskMaterials).find(key => {
        const mappedName = character.materials[0].ascension_materials[key] ||
                           character.materials[0].talent_materials[key] ||
                           (key === "shellcredits" ? character.materials[0].shellcredits : null);
        return mappedName === materialName;
      }) || materialName; // fallback: maybe it's something like "experience"
  
      const foundItem = { name: materialName };
  
      const { amountLeft } = calculateLeft({
        materialKey,
        foundItem,
        inventory,
        taskMaterials,
        character,
        experienceValues
      });
  
      if (amountLeft > 0) return false;
    }
  
    return true;
  }
  
  
  
  
  // Export everything you want to use outside
  export {
    calculateRequiredMaterials,
    combineMaterials,
    processTask,
    processAllTasks,
    calculateWithCrafting,
    calculateLeft,
    mapMaterialNames,
    hasSufficientInventory,
    hasSufficientInventoryWithCrafting
  };
  