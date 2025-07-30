
const N_1k = 1000
const N_1m = N_1k * N_1k

/**
 * 
 * @param {object[]} attributezz 
 * @returns 
 */
export function caculateAttribute(attributezz) {
    const data = {
        'HP': 0,
        'ATK': 0,
        'CRIT': 0,
        'CRITDMG': 0,
        'DEF': 0,
        'BLOC': 0,
        'MOVESPEED': 0,
        'BATTLESPEED': 0,
    }
    attributezz.map(item => {
        switch (item.name) {
            case 'HP':
                item.currentValue = item.point * 10 + item.oldValue
                data.HP = item.currentValue
                break;
            case 'ATK':
                item.currentValue = item.point * 2 + item.oldValue
                data.ATK = item.currentValue
                break;
            case 'CRIT':
                item.currentValue = item.point * 1 + item.oldValue
                data.CRIT = item.currentValue
                break;
            case 'CRITDMG':
                item.currentValue = item.point * 2 + item.oldValue
                data.CRITDMG = item.currentValue
                break;
            case 'DEF':
                item.currentValue = item.point * 2 + item.oldValue
                data.DEF = item.currentValue
                break;
            default:
                break;
        }
    })
    return data
}

/**
 * 
 * @param {Player} player 
 * @returns 
 */
export function calculateGainingPoint(player) {
    let sum = player.GOLD / N_1m

    if (player.lv > 20) {
        sum += (player.lv - 20) ** 1.5
    }

    return Math.ceil(sum)
}

/**
 * 
 * @param {Equipment} item 
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
 * @param {Equipment} item 
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
