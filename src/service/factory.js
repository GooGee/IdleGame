
/**
 * @param {number} level  
 * @param {number} qualityCoefficient  
 */
export function createRandomEntry(level, qualityCoefficient) {

    const extraEntry = [{
        value: 11,
        showVal: '+11',
        type: 'ATK',
        name: '攻击力'
    }, {
        value: 11,
        showVal: '+11%',
        type: 'CRIT',
        name: '暴击率'
    }, {
        value: 11,
        showVal: '+11%',
        type: 'CRITDMG',
        name: '暴击伤害'
    }, {
        value: 20,
        showVal: '+20',
        type: 'HP',
        name: '生命值'
    }, {
        value: 11,
        showVal: '+11%',
        type: 'DEF',
        name: '防御力'
    }, {
        value: 11,
        showVal: '+11%',
        type: 'ATKPERCENT',
        name: '攻击力'
    }, {
        value: 11,
        showVal: '+11%',
        type: 'DEFPERCENT',
        name: '防御力'
    }, {
        value: 11,
        showVal: '+11%',
        type: 'HPPERCENT',
        name: '生命值'
    },
        // {
        //   value: 11,
        //   showVal: '+11%',
        //   type: 'BLOCPERCENT',
        //   name: '格挡'
        // },
        // {
        //   value: 11,
        //   showVal: '+11%',
        //   type: 'BLOC',
        //   name: '格挡'
        // },
        // {
        //   value: 11,
        //   showVal: '+11%',
        //   type: 'EVA',
        //   name: '闪避'
        // },
    ]

    let factor = Math.random()
    if (factor < 0.11) {
        factor = 0.11
    }
    const percentage = (factor * (level ** 0.7 + 20) + 1).toFixed(1)
    let entry = {}
    const index = Math.floor((Math.random() * extraEntry.length));
    entry = extraEntry[index]
    entry.EntryLevel = Math.floor(factor * 100)
    switch (entry.type) {
        case 'ATK':
            var random = level * 1 + (factor * level / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'DEF':
            var random = level * 0.4 + (factor * level / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'HP':
            var random = level * 3 + (factor * level / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'ATKPERCENT':
            entry.value = percentage
            entry.showVal = '+' + percentage + '%'
            break;
        case 'DEFPERCENT':
            entry.value = percentage
            entry.showVal = '+' + percentage + '%'
            break;
        case 'HPPERCENT':
            entry.value = percentage
            entry.showVal = '+' + percentage + '%'
            break;
        case 'CRIT':
            entry.value = percentage
            entry.showVal = '+' + percentage + '%'
            break;
        case 'CRITDMG':
            entry.value = percentage
            entry.showVal = '+' + percentage + '%'
            break;
        default:
            break;
    }
    return entry
}
