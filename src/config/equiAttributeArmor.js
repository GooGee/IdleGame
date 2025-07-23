/**
 * 护甲属性配置文件
 * @author couy
 */

export const equiAttributeArmor = {
    data() {
        return {
            qualityArmor: [{
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
                name: '神器',
                qualityCoefficient: 1.5,
                probability: '0.15',
                color: '#ff00ff', extraEntryNum: 3,
            }, {
                name: '史诗',
                qualityCoefficient: 2,
                probability: '0.05',
                color: '#f78918', extraEntryNum: 4,
            }, {
                name: '独特',
                qualityCoefficient: 2.2,
                probability: '0',
                color: '#ff0000', extraEntryNum: 5,
            }],
            extraEntryArmor: [{
                value: 11,
                showVal: '+11',
                type: 'ATK',
                name: '攻击力'
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
                type: 'DEFPERCENT',
                name: '防御力'
            }, {
                value: 11,
                showVal: '+11%',
                type: 'HPPERCENT',
                name: '生命值'
            },],
            uniqueCategoryArmor: [{
                name: '天使羽衣',
                des: '',
                iconSrc: './icons/U_Armor01.png',
                entry: [{
                    valCoefficient: 1.8,
                    value: 11,
                    showVal: '+11',
                    type: 'DEF',
                    name: '防御力'
                }, {
                    type: 'HP',
                    valCoefficient: 3.2,
                    value: 8,
                    showVal: '8',
                    name: '生命值'
                }]
            }, {
                name: '剑圣盔甲',
                des: '',
                iconSrc: './icons/U_Armor02.png',
                entry: [{
                    valCoefficient: 3.2,
                    value: 11,
                    showVal: '+11',
                    type: 'DEF',
                    name: '防御力'
                }, {
                    type: 'HP',
                    valCoefficient: 1.8,
                    value: 8,
                    showVal: '8',
                    name: '生命值'
                }]
            }, {
                name: '魔鬼战袍',
                des: '',
                iconSrc: './icons/U_Armor03.png',
                entry: [{
                    valCoefficient: 2.2,
                    value: 11,
                    showVal: '+11',
                    type: 'DEF',
                    name: '防御力'
                }, {
                    type: 'HP',
                    valCoefficient: 2.8,
                    value: 8,
                    showVal: '8',
                    name: '生命值'
                }]
            }, {
                name: '死神冥衣',
                des: '',
                iconSrc: './icons/U_Armor05.png',
                entry: [{
                    valCoefficient: 2.8,
                    value: 11,
                    showVal: '+11',
                    type: 'DEF',
                    name: '防御力'
                }, {
                    type: 'HP',
                    valCoefficient: 2.2,
                    value: 8,
                    showVal: '8',
                    name: '生命值'
                },]
            }, {
                name: '战神盔甲',
                des: '',
                iconSrc: './icons/U_Armor07.png',
                entry: [{
                    valCoefficient: 3.8,
                    value: 11,
                    showVal: '+11',
                    type: 'DEF',
                    name: '防御力'
                }, {
                    type: 'HP',
                    valCoefficient: 1.2,
                    value: 8,
                    showVal: '8',
                    name: '生命值'
                },]
            },],
            categoryArmor: [
                {
                    name: '紫金铠甲',
                    des: '',
                    iconSrc: './icons/A_A2.png',
                    entry: [{
                        valCoefficient: 2,
                        value: 11,
                        showVal: '+11',
                        type: 'DEF',
                        name: '防御力'
                    }, {
                        type: 'HP',
                        valCoefficient: 0.6,
                        value: 8,
                        showVal: '8',
                        name: '生命值'
                    }]
                },
                {
                    name: '勇士盔甲',
                    des: '',
                    iconSrc: './icons/A_A5.png',
                    entry: [{
                        valCoefficient: 1.2,
                        value: 11,
                        showVal: '+11',
                        type: 'DEF',
                        name: '防御力'
                    }, {
                        type: 'HP',
                        valCoefficient: 0.8,
                        value: 8,
                        showVal: '8',
                        name: '生命值'
                    }]
                },
                {
                    name: '皮甲',
                    des: '',
                    iconSrc: './icons/A_A3.png',
                    entry: [{
                        valCoefficient: 0.9,
                        value: 11,
                        showVal: '+11',
                        type: 'DEF',
                        name: '防御力'
                    }, {
                        type: 'HP',
                        valCoefficient: 1.2,
                        value: 8,
                        showVal: '8',
                        name: '生命值'
                    }]
                }
            ],
        }
    },
    methods: {
    }
};