
/**
 * @param {number} level  
 * @param {number} qualityCoefficient  
 */
export function makeRandomEntry(level, qualityCoefficient) {

    const extraEntry = [{
        value: 11,
        showVal: '+11',
        type: 'ATK',
        name: '攻击力'
    }, {
        value: 5,
        showVal: '+5%',
        type: 'CRIT',
        name: '暴击率'
    }, {
        value: 5,
        showVal: '+5%',
        type: 'CRITDMG',
        name: '暴击伤害'
    }, {
        value: 20,
        showVal: '+20',
        type: 'HP',
        name: '生命值'
    }, {
        value: 8,
        showVal: '+8',
        type: 'DEF',
        name: '防御力'
    }, {
        value: 5,
        showVal: '+5%',
        type: 'ATKPERCENT',
        name: '攻击力'
    }, {
        value: 5,
        showVal: '+5%',
        type: 'DEFPERCENT',
        name: '防御力'
    }, {
        value: 5,
        showVal: '+5%',
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
    let entry = {}
    const index = Math.floor((Math.random() * extraEntry.length));
    entry = extraEntry[index]
    entry.EntryLevel = Math.floor(factor * 100)
    switch (entry.type) {
        case 'ATK':
            var random = level * 1 + (factor * level / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'DEF':
            var random = level * 0.4 + (factor * level / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'HP':
            var random = level * 3 + (factor * level / 2 + 1)
            random = parseInt(random * qualityCoefficient)
            entry.value = random
            entry.showVal = '+' + random
            break;
        case 'ATKPERCENT':
        case 'DEFPERCENT':
        case 'HPPERCENT':
        case 'CRIT':
        case 'CRITDMG':
            const percentage = (factor * 15 + 5).toFixed(1)
            entry.value = percentage
            entry.showVal = '+' + percentage + '%'
            break;
        default:
            break;
    }
    return entry
}

/**
 * 
 * @param {number} level 
 * @param {number} difficulty 
 */
export function makeDungeon(level = 1, difficulty = 1) {
    const factor = difficulty == 1 ? 1 : difficulty == 2 ? 1.2 : 1.5
    const boss = makeMonster(level, factor, true)
    return {
        id: level + '' + difficulty,
        battleTime: 2000,
        name: 'Lv' + level + '_' + (difficulty == 1 ? '容易' : difficulty == 2 ? '困难' : '极难'),
        eventNum: '5',
        lv: level,
        needDPS: boss.attribute.ATK,
        difficulty: difficulty,
        difficultyName: difficulty == 1 ? '容易' : difficulty == 2 ? '困难' : '极难',
        top: Math.random() * 70 + 15 + '%',
        left: Math.random() * 70 + 10 + '%',
        eventType: [
            makeMonster(level, factor),
            makeMonster(level, factor),
            makeMonster(level, factor),
            makeMonster(level, factor),
            boss,
        ]
    }
}

/**
 * 
 * @param {number} level 
 * @param {number} factor 
 * @returns 
 */
function makeMonster(level, factor, isBoss = false) {
    const modifier = isBoss ? 2 : 1
    const name = isBoss ? 'boss' : 'monster'
    const gold = modifier * parseInt(factor * level ** 1.2 * (Math.random() * 1 + 11))
    const HP = modifier * parseInt(factor * level ** 2 * (Math.random() * 1 + 11))
    const ATK = modifier * parseInt(factor * level ** 2 * (Math.random() * 1 + 2))
    let equip = [
        0.1 * factor,
        0.2 * factor,
        0.1 * factor,
        0,
    ]
    if (isBoss) {
        equip = [
            0,
            0.3 - 0.2 * factor,
            0.5 - 0.1 * factor,
            0.2 + 0.3 * factor,
        ]
    }
    return {
        name: name,
        type: name,
        eventType: 'battle',
        attribute: { HP, ATK, },
        trophy: { gold, equip, },
    }
}
