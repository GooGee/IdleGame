
const N_1k = 1000
const N_1m = N_1k * N_1k

const LevelOdds = 0.05
const MaxOdds = 0.95
const MinQuality = 0.9
const UpgradePriceFactor = 5

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

    sum += player.lv ** 1.2

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
    if (ignoreUpgrade === false) {
        const level = item.enchantlvl ? item.enchantlvl : 0
        for (let index = 1; index <= level; index++) {
            let odds = index * LevelOdds
            if (odds > MaxOdds) {
                odds = MaxOdds
            }
            factor += 1 / (1 - odds) / UpgradePriceFactor
        }

        let amount = 0
        let sum = 0
        item.extraEntry.forEach(function (one) {
            if (one.EntryLevel) {
                let value = one.EntryLevel
                if (value <= 11) {
                    return
                }
                if (value > 99) {
                    value = 99
                }
                sum += value - 50
                amount += 1
            }
        })
        if (amount) {
            const odds = sum / amount / 50
            factor += 1 / (1 - odds * odds) / UpgradePriceFactor * amount
        }
    }

    let quality = item.quality.qualityCoefficient
    if (quality < MinQuality) {
        quality = MinQuality
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
    return parseInt(calculatePrice(item, ignoreUpgrade) / UpgradePriceFactor)
}

/**
 * 
 * @param {number} level 
 * @returns 
 */
export function calculateUpgradeChance(level) {
    if (level < 1) {
        return 1
    }
    let odds = level * LevelOdds
    if (odds > MaxOdds) {
        odds = MaxOdds
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
    const factor = level * LevelOdds + 1
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
