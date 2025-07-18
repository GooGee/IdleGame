export function calculatePrice(item) {
    return parseInt(item.lv * item.quality.qualityCoefficient * (250 + 20 * item.lv))
}
