/**
 * 项链属性配置文件
 * @author couy
 */

export const equiAttributeNeck = {
    data() {
        return {
            qualityNeck: [{
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
            extraEntryNeck: [{
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
                value: 8,
                showVal: '+8',
                type: 'DEF',
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
            uniqueCategoryNeck: [{
                name: '降魔项链',
                des: '',
                iconSrc: './icons/U_neck01.png',
                entry: [{
                    valCoefficient: 1.5,
                    value: 11,
                    showVal: '+11',
                    type: 'HP',
                    name: '生命值'
                }, {
                    valCoefficient: 1.5,
                    value: 8,
                    showVal: '+8',
                    type: 'DEF',
                    name: '防御力'
                }]
            }, {
                name: '恶魔血珠',
                des: '',
                iconSrc: './icons/U_neck04.png',
                entry: [{
                    valCoefficient: 1.2,
                    value: 11,
                    showVal: '+11',
                    type: 'HP',
                    name: '生命值'
                }, {
                    valCoefficient: 1.8,
                    value: 8,
                    showVal: '+8',
                    type: 'DEF',
                    name: '防御力'
                },]
            }, {
                name: '生命之源',
                des: '',
                iconSrc: './icons/U_neck05.png',
                entry: [{
                    valCoefficient: 1.8,
                    value: 11,
                    showVal: '+11',
                    type: 'HP',
                    name: '生命值'
                }, {
                    valCoefficient: 1.2,
                    value: 8,
                    showVal: '+8',
                    type: 'DEF',
                    name: '防御力'
                }]
            }],
            categoryNeck: [
                {
                    name: '十字项链',
                    des: '',
                    iconSrc: './icons/Ac_1.png',
                    entry: [{
                        valCoefficient: 1.5,
                        value: 11,
                        showVal: '+11',
                        type: 'HP',
                        name: '生命值'
                    }, {
                        valCoefficient: 0.5,
                        value: 8,
                        showVal: '+8',
                        type: 'DEF',
                        name: '防御力'
                    }]
                },
                {
                    name: '琉璃项链',
                    des: '',
                    iconSrc: './icons/Ac_7.png',
                    entry: [{
                        valCoefficient: 1.1,
                        value: 11,
                        showVal: '+11',
                        type: 'HP',
                        name: '生命值'
                    }, {
                        valCoefficient: 1.1,
                        value: 8,
                        showVal: '+8',
                        type: 'DEF',
                        name: '防御力'
                    }]
                },
                {
                    name: '红玉项链',
                    des: '',
                    iconSrc: './icons/Ac_5.png',
                    entry: [{
                        valCoefficient: 0.5,
                        value: 11,
                        showVal: '+11',
                        type: 'HP',
                        name: '生命值'
                    }, {
                        valCoefficient: 1.5,
                        value: 8,
                        showVal: '+8',
                        type: 'DEF',
                        name: '防御力'
                    }]
                }
            ]
        }
    },
    methods: {
    }
};