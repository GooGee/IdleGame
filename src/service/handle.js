function deepCopy(data) {
    return JSON.parse(JSON.stringify(data))
}

/**
 * 根据强化等级计算强化后属性
 * @param {obj} entry 装备基础属性
 * @param {number} lv  装备强化等级
 */
function CalculateStrAttr(entry, lv) {
    var a = 1
    // 确定强化系数
    a = (1.055 ** lv ** 1.1)
    entry.map((item) => {
        let value
        switch (item.type) {
            case 'ATK':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value
                break;
            case 'DEF':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value
                break;
            case 'HP':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value
                break;
            case 'ATKPERCENT':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value + '%'
                break;
            case 'DEFPERCENT':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value + '%'
                break;
            case 'HPPERCENT':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value + '%'
                break;
            case 'CRIT':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value + '%'
                break;
            case 'CRITDMG':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value + '%'
                break;
            case 'BLOC':
                value = Math.round(a * item.value)
                item.value = value
                item.showValue = '+' + value
                break;
            default:
                break;
        }

    })
    return entry
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
    const gold = modifier * parseInt(factor * level ** 1.2 * (Math.random() * 5 + 11))
    const HP = modifier * parseInt(factor * level ** 2 * (Math.random() * 5 + 11))
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
            0.5 - 0.3 * factor,
            0.3 + 0.2 * factor,
            0.2 + 0.1 * factor,
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

/**
 * 随机化生成副本
 * @param {number} level  副本等级
 * @param {number} difficulty(1:容易 2:困难 3:极难) 副本难度
 */
function createRandomDungeons(level = 1, difficulty = 1) {
    const factor = difficulty == 1 ? 1 : difficulty == 2 ? 1.2 : 1.5
    const boss = makeMonster(level, factor, true)
    const dungeonsConfig = {
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
    return dungeonsConfig
}

export default {
    deepCopy,
    CalculateStrAttr,
    createRandomDungeons
}
