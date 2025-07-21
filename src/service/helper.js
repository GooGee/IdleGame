const N_1k = 1000
const N_1m = N_1k * N_1k

export function calculateGainingPoint(playerAttribute) {
    let sum = playerAttribute.lv < 20 ? 0 : Math.floor((playerAttribute.lv - 20) ** 1.5)

    if (playerAttribute.GOLD >= N_1m) {
        sum += playerAttribute.GOLD / N_1m
    }

    const warezz = [
        playerAttribute.armor,
        playerAttribute.neck,
        playerAttribute.ring,
        playerAttribute.weapon,
    ]

    warezz.forEach(function (item) {
        if (item.lv < 20) {
            return
        }

        // sum += ((item.lv - 20) / 10) ** 1.5 * (0.1 * item.enchantlvl ** 1.5 + 1) * item.quality.qualityCoefficient / 3
    })

    return parseInt(sum * 1.2)
}

export function calculatePrice(item) {
    return parseInt(item.lv ** 1.5 * item.quality.qualityCoefficient ** 3 * 10)
}

export function calculateUpgradePrice(item) {
    return parseInt(calculatePrice(item) / 5)
}

export function calculateUpgradeChange(level) {
    const base = 5
    if (level <= base) {
        return 1
    }

    let odds = (level - base) * 0.1
    if (odds > 0.9) {
        odds = 0.9
    }
    return 1 - odds
}
