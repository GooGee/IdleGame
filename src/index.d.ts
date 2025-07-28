interface Equipment {
    lv: number
    itemType: string
    quality: Quality
    type: EquipmentType
    extraEntry: Entry[]
}

interface Entry {
    name: string
    type: string
    value: number
    showVal: string
    valCoefficient: number
}

interface EquipmentType {
    name: string
    des: string
    iconSrc: string
    entry: Entry[]
}

interface Quality {
    name: string
    color: string
    extraEntryNum: number
    probability: number
    qualityCoefficient: number
}
