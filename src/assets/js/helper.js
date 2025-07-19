export function calculatePrice(item) {
    return parseInt((item.lv + 1) ** 1.5 * item.quality.qualityCoefficient ** 2 * 10)
}

export function calculateReplacePrice(item) {
    return parseInt(calculatePrice(item) / 2)
}

export function calculateUpgradePrice(item) {
    return parseInt(calculatePrice(item) / 5 * (1.2 ** item.enchantlvl))
}
