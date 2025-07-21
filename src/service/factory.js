
/**
 * @param {number} lv  
 * @param {number} qualityCoefficient  
 */
export function createRandomEntry(lv, qualityCoefficient) {

    const extraEntry = [{
        value: 11,
        showVal: '+11',
        type: 'ATK',
        name: '攻击力'
    }, {
        value: 8,
        showVal: '+8%',
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
        value: 8,
        showVal: '+8%',
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

    let randomCoefficient = Math.random()
    if (randomCoefficient < 0.11) {
        randomCoefficient = 0.11
    }
    let entry = {}
    let index = Math.floor((Math.random() * extraEntry.length));
    entry = extraEntry[index]
    entry.EntryLevel = Math.floor(randomCoefficient * 100)
    switch (entry.type) {
        case 'ATK':
            var random = lv * 1 + (randomCoefficient * lv / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'DEF':
            var random = lv * 0.4 + (randomCoefficient * lv / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'HP':
            var random = lv * 0.2 * 15 + (randomCoefficient * lv / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'ATKPERCENT':
            var random = lv * 0.11 + (randomCoefficient * lv / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        case 'DEFPERCENT':
            var random = lv * 0.11 + (randomCoefficient * lv / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            random = random || 1
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        case 'HPPERCENT':
            var random = lv * 0.11 + (randomCoefficient * lv / 10 + 5)
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
            var random = lv * 0.11 + (randomCoefficient * lv / 10 + 5)
            random = parseFloat(random * qualityCoefficient).toFixed(1)
            entry.value = random
            entry.showVal = '+' + random + '%'
            break;
        case 'CRITDMG':
            var random = lv * 0.11 + (randomCoefficient * lv / 10 + 5)
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
