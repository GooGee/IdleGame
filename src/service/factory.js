
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
    const entry = {}
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
            var random = level * 0.11 + (factor * level / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        case 'DEFPERCENT':
            var random = level * 0.11 + (factor * level / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        case 'HPPERCENT':
            var random = level * 0.11 + (factor * level / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        // case 'BLOCPERCENT':
        //   var random = lv * 0.1 + (randomCoefficient * lv / 10 + 5)
        //   random = parseFloat(random * qualityCoefficient).toFixed(1)
        //   random = random || 1
        //   entry.value = random
        //   entry.showVal = '+' + random + '%'
        //   break;
        case 'CRIT':
            var random = level * 0.11 + (factor * level / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        case 'CRITDMG':
            var random = level * 0.11 + (factor * level / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        // case 'BLOC':
        //   var random = lv * 0.6 + (randomCoefficient * lv / 2 + 1)
        //   random = parseInt(random * qualityCoefficient)
        //   random = random || 1
        //   entry.value = random
        //   entry.showVal = '+' + random
        //   break;
        // case 'EVA':
        //     var random = randomCoefficient  * 12 + 3
        //     random = parseInt(random * qualityCoefficient)
        //     entry.value = random
        //     entry.showVal = '+' + random + '%'
        //     break;
        default:
            break;
    }
    return entry
}
