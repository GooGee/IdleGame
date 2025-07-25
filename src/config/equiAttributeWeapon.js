/**
 * 武器属性配置文件
 * @author couy
 */

export const equiAttributeWeapon = {
    data() {
        return {
            quality: [{
                name: '破旧',
                qualityCoefficient: 0.7,
                probability: '0.25',
                color: '#a1a1a1',
                extraEntryNum: 1,
            }, {
                name: '普通',
                qualityCoefficient: 1,
                probability: '0.55',
                color: '#fff', extraEntryNum: 2,
            }, {
                name: '精良',
                qualityCoefficient: 1.5,
                probability: '0.15',
                color: '#ff00ff', extraEntryNum: 3,
            }, {
                name: '传说',
                qualityCoefficient: 2,
                probability: '0.05',
                color: '#f78918', extraEntryNum: 4,
            }, {
                name: '神器',
                qualityCoefficient: 2.2,
                probability: '0',
                color: '#ff0000', extraEntryNum: 5,
            }],
            uniqueCategory: [{
                name: '炼狱之刃',
                des: '',
                iconSrc: './icons/U_Sword01.png',
                entry: [{
                    valCoefficient: 3.8,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    type: 'DEF',
                    valCoefficient: 1.2,
                    value: 8,
                    showVal: '8',
                    name: '防御力'
                }]
            }, {
                name: '死神之镰',
                des: '',
                iconSrc: './icons/U_Sword04.png',
                entry: [{
                    valCoefficient: 3.2,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 1.8,
                    value: 11,
                    showVal: '+11',
                    type: 'CRITDMG',
                    name: '暴击伤害'
                }]
            }, {
                name: '霜电之刃',
                des: '',
                iconSrc: './icons/U_Sword05.png',
                entry: [{
                    valCoefficient: 2.8,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 2.2,
                    value: 11,
                    showVal: '+11',
                    type: 'CRITDMG',
                    name: '暴击伤害'
                }]
            }, {
                name: '六翼天使之剑',
                des: '',
                iconSrc: './icons/U_Sword08.png',
                entry: [{
                    valCoefficient: 2.2,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 2.8,
                    value: 11,
                    showVal: '+11',
                    type: 'CRITDMG',
                    name: '暴击伤害'
                }]
            }, {
                name: '战神之剑',
                des: '',
                iconSrc: './icons/U_Sword10.png',
                entry: [{
                    valCoefficient: 3.2,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    type: 'DEF',
                    valCoefficient: 1.8,
                    value: 8,
                    showVal: '8',
                    name: '防御力'
                }]
            },],
            category: [{
                name: '大剑',
                des: '',
                iconSrc: './icons/W_Sword007.png',
                entry: [{
                    valCoefficient: 1.5,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 1.1,
                    value: 8,
                    showVal: '8',
                    type: 'DEF',
                    name: '防御力'
                }]
            },
            {
                name: '烈焰之刃',
                des: '',
                iconSrc: './icons/W_Sword016.png',
                entry: [{
                    valCoefficient: 1.1,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 2.1,
                    value: 11,
                    showVal: '+11',
                    type: 'CRITDMG',
                    name: '暴击伤害'
                }]
            },
            {
                name: '冰晶之刃',
                des: '',
                iconSrc: './icons/W_Sword018.png',
                entry: [{
                    valCoefficient: 2.1,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 1.1,
                    value: 11,
                    showVal: '+11',
                    type: 'CRITDMG',
                    name: '暴击伤害'
                }]
            }
            ],
            extraEntry: [{
                value: 11,
                showVal: '+11',
                type: 'ATK',
                name: '攻击力'
            }, {
                type: 'CRIT',
                value: 8,
                showVal: '+8%',
                name: '暴击率'
            }, {
                type: 'CRITDMG',
                value: 11,
                showVal: '+11%',
                name: '暴击伤害'
            }, {
                type: 'HP',
                value: 20,
                showVal: '+20',
                name: '生命值'
            }, {
                type: 'DEF',
                value: 8,
                showVal: '+8',
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
            },]
        }
    },
    methods: {
    }
};