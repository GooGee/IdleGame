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
 * 随机化生成副本
 * @param {number} lv  副本等级
 * @param {number} difficulty(1:普通 2:困难 3:极难) 副本难度
 */
function createRandomDungeons(lv, difficulty) {
    lv = lv || 1, difficulty = difficulty || 1;
    // 此处决定困难与极难的副本难度系数
    // 困难 1.1
    // 极难 1.25
    var df = difficulty == 1 ? 1 : difficulty == 2 ? 1.1 : 1.25
    var dungeonsConfig = {
        id: lv + '' + difficulty,
        battleTime: 2000,
        name: 'Lv' + lv + '_' + (difficulty == 1 ? '普通' : difficulty == 2 ? '困难' : '极难'),
        eventNum: '5',
        lv: lv,
        needDPS: parseInt(lv * lv ** 1.3 * 2 * difficulty),
        difficulty: difficulty,
        difficultyName: difficulty == 1 ? '普通' : difficulty == 2 ? '困难' : '极难',
        top: Math.random() * 70 + 15 + '%',
        left: Math.random() * 70 + 10 + '%',
        eventType: [{
            name: 'monster',
            type: 'monster',
            eventType: 'battle',
            attribute: {
                HP: parseInt(lv * lv ** 1.1 * (Math.random() * 5 + 16) * df),
                ATK: parseInt(lv * lv ** 1.1 * (Math.random() * 1 + 2) * df),
            },
            trophy: {
                gold: parseInt(lv ** 1.16 * (Math.random() * 5 + 11) * df),
                equip: [
                    0.2 * df, 0.08 * df, 0.03 * df, 0 * df
                ],
            }
        }, {
            name: 'monster',
            type: 'monster',
            eventType: 'battle',
            attribute: {
                HP: parseInt(lv * lv ** 1.1 * (Math.random() * 5 + 16) * df),
                ATK: parseInt(lv * lv ** 1.1 * (Math.random() * 1 + 2) * df),
            },
            trophy: {
                gold: parseInt(lv ** 1.16 * (Math.random() * 5 + 11) * df),
                equip: [
                    0.2 * df, 0.08 * df, 0.03 * df, 0 * df
                ],
            }
        }, {
            name: 'monster',
            type: 'monster',
            eventType: 'battle',
            attribute: {
                HP: parseInt(lv * lv ** 1.1 * (Math.random() * 5 + 16) * df),
                ATK: parseInt(lv * lv ** 1.1 * (Math.random() * 1 + 2) * df),
            },
            trophy: {
                gold: parseInt(lv ** 1.16 * (Math.random() * 5 + 11) * df),
                equip: [
                    0.2 * df, 0.08 * df, 0.03 * df, 0 * df
                ],
            }
        }, {
            name: 'monster',
            type: 'monster',
            eventType: 'battle',
            attribute: {
                HP: parseInt(lv * lv ** 1.1 * (Math.random() * 5 + 16) * df),
                ATK: parseInt(lv * lv ** 1.1 * (Math.random() * 1 + 2) * df),
            },
            trophy: {
                gold: parseInt(lv ** 1.16 * (Math.random() * 5 + 11) * df),
                equip: [
                    0.2 * df, 0.08 * df, 0.03 * df, 0 * df
                ],
            }
        }, {
            name: 'boss',
            type: 'boss',
            eventType: 'battle',
            attribute: {
                HP: parseInt(lv * lv ** 1.1 * (Math.random() * 5 + 30) * df),
                ATK: parseInt(lv * lv ** 1.1 * (Math.random() * 1 + 3) * df),
            },
            trophy: {
                gold: parseInt(lv ** 1.16 * (Math.random() * 10 + 28) * df),
                equip: [
                    0.25 - 0.05 * df, 0.55 - 0.15 * df, 0.15 + 0.15 * df, 0.05 + 0.05 * df
                ],
            }
        },]
    }
    return dungeonsConfig
}

export default {
    deepCopy,
    CalculateStrAttr,
    createRandomDungeons
}
