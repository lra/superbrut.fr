export interface SalaryPoint {
  net: number
  superGross: number
}

export const MINIMUM_SUPER_GROSS = 1_988
export const MAXIMUM_SUPER_GROSS = 18_000

// Points relevés en août 2026 sur le simulateur Urssaf
// (https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net),
// salarié non-cadre en CDI à temps plein. À rafraîchir chaque janvier :
// le SMIC et les taux de cotisations changent.
export const salaryPoints: readonly SalaryPoint[] = [
  { net: 1_455.99, superGross: 1_987.76 },
  { net: 1_561.26, superGross: 2_248.52 },
  { net: 1_957.05, superGross: 3_162.65 },
  { net: 2_352.85, superGross: 4_007.18 },
  { net: 3_144.45, superGross: 5_577.84 },
  { net: 4_742.99, superGross: 8_604.56 },
  { net: 6_347.18, superGross: 11_464.88 },
  { net: 7_951.38, superGross: 14_325.2 },
  { net: 9_555.57, superGross: 17_185.52 },
  { net: 11_159.77, superGross: 20_045.84 },
]

export function interpolateSalary(superGross: number): SalaryPoint {
  const upperIndex = salaryPoints.findIndex((point) => point.superGross >= superGross)
  const upper = salaryPoints[upperIndex === -1 ? salaryPoints.length - 1 : upperIndex]
  const lower = salaryPoints[Math.max(0, (upperIndex === -1 ? salaryPoints.length - 1 : upperIndex) - 1)]

  if (upper.superGross === lower.superGross) return upper

  const ratio = (superGross - lower.superGross) / (upper.superGross - lower.superGross)

  return {
    net: lower.net + (upper.net - lower.net) * ratio,
    superGross,
  }
}

export function normalizeSuperGross(amount: number) {
  return Math.min(MAXIMUM_SUPER_GROSS, Math.max(MINIMUM_SUPER_GROSS, Math.round(amount)))
}
