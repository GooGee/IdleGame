import { setEntryzz } from "../service/factory"

/**
 * 戒指属性配置文件
 * @author couy
 */

export const equiAttributeRing = {
    data() {
        return {
            quality: [{
                name: '破旧',
                qualityCoefficient: 0.6,
                probability: '0.25',
                color: '#a1a1a1',
                extraEntryNum: 1,
            }, {
                name: '普通',
                qualityCoefficient: 0.9,
                probability: '0.55',
                color: '#fff', extraEntryNum: 2,
            }, {
                name: '精良',
                qualityCoefficient: 1.3,
                probability: '0.15',
                color: '#ff00ff', extraEntryNum: 3,
            }, {
                name: '传说',
                qualityCoefficient: 1.6,
                probability: '0.05',
                color: '#f78918', extraEntryNum: 4,
            }, {
                name: '神器',
                qualityCoefficient: 2,
                probability: '0',
                color: '#ff0000', extraEntryNum: 5,
            }],
            uniqueCategory: [{
                name: '星光指环',
                des: '',
                iconSrc: './icons/U_ring03.png',
                entry: [{
                    valCoefficient: 1.5,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 1.5,
                    value: 11,
                    showVal: '+11',
                    type: 'CRITDMG',
                    name: '暴击伤害'
                }]
            }, {
                name: '赤金戒指',
                des: '',
                iconSrc: './icons/U_ring04.png',
                entry: [{
                    valCoefficient: 1.8,
                    value: 11,
                    showVal: '+11',
                    type: 'ATK',
                    name: '攻击力'
                }, {
                    valCoefficient: 1.2,
                    value: 11,
                    showVal: '+11',
                    type: 'CRITDMG',
                    name: '暴击伤害'
                },]
            }, {
                name: '恶魔指环',
                des: '',
                iconSrc: './icons/U_ring05.png',
                entry: [{
                    valCoefficient: 1.2,
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
            },],
            category: [
                {
                    name: '玄铁指环',
                    des: '',
                    iconSrc: './icons/Ac_9.png',
                    entry: [{
                        valCoefficient: 1.1,
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
                },
                {
                    name: '蝠翼指环',
                    des: '',
                    iconSrc: './icons/U_ring01.png',
                    entry: [{
                        valCoefficient: 0.5,
                        value: 11,
                        showVal: '+11',
                        type: 'ATK',
                        name: '攻击力'
                    }, {
                        valCoefficient: 1.3,
                        value: 11,
                        showVal: '+11',
                        type: 'CRITDMG',
                        name: '暴击伤害'
                    },]
                },
                {
                    name: '白金戒指',
                    des: '',
                    iconSrc: './icons/Ac_10.png',
                    entry: [{
                        valCoefficient: 1.3,
                        value: 11,
                        showVal: '+11',
                        type: 'ATK',
                        name: '攻击力'
                    }, {
                        valCoefficient: 0.5,
                        value: 11,
                        showVal: '+11',
                        type: 'CRITDMG',
                        name: '暴击伤害'
                    },]
                },
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
            }]
        }
    },
    methods: {
        setEntryzz,
    }
};