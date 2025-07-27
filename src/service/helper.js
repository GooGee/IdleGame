
const N_1k = 1000
const N_1m = N_1k * N_1k

export function calculateGainingPoint(playerAttribute) {
    let sum = playerAttribute.lv < 20 ? 0 : Math.floor((playerAttribute.lv - 20) ** 1.2)

    if (playerAttribute.GOLD >= N_1m) {
        sum += playerAttribute.GOLD / N_1m
    }

    const warezz = [
        playerAttribute.armor,
        playerAttribute.neck,
        playerAttribute.ring,
        playerAttribute.weapon,
    ]

    warezz.forEach(function (item) {
        if (item.lv < 20) {
            return
        }

        // sum += ((item.lv - 20) / 10) ** 1.5 * (0.1 * item.enchantlvl ** 1.5 + 1) * item.quality.qualityCoefficient / 3
    })

    return parseInt(sum)
}

/**
 * 
 * @param {object} item 
 * @param {boolean} ignoreUpgrade 
 * @returns 
 */
export function calculatePrice(item, ignoreUpgrade = true) {
    let factor = 1
    const upgrade = item.enchantlvl ? item.enchantlvl : 1
    factor += upgrade * 0.2
    if (ignoreUpgrade) {
        factor = 1
    }

    let quality = item.quality.qualityCoefficient
    if (quality < 0.9) {
        quality = 0.9
    }
    return parseInt(item.lv ** 1.5 * quality ** 3 * factor * 10)
}

/**
 * 
 * @param {object} item 
 * @param {boolean} ignoreUpgrade 
 * @returns 
 */
export function calculateUpgradePrice(item, ignoreUpgrade = true) {
    return parseInt(calculatePrice(item, ignoreUpgrade) / 5)
}

/**
 * 
 * @param {number} level 
 * @returns 
 */
export function calculateUpgradeChance(level) {
    let odds = level * 0.05
    if (odds > 0.99) {
        odds = 0.99
    }
    return 1 - odds
}

/**
 * 
 * @param {number} value 
 * @param {number} level 
 * @returns 
 */
export function calculateUpgradeValue(value, level) {
    const factor = level * 0.05 + 1
    return Math.round(factor * value)
}

/**
 * 
 * @param {array} entryzz 
 * @param {number} level 
 * @returns 
 */
export function setUpgradeValue(entryzz, level) {
    entryzz.map((item) => {
        const value = calculateUpgradeValue(item.value, level)
        item.value = value
        item.showValue = '+' + value
        if (['ATKPERCENT', 'DEFPERCENT', 'HPPERCENT', 'CRIT', 'CRITDMG'].includes(item.type)) {
            item.showValue = '+' + value + '%'
        }
    })
    return entryzz
}
