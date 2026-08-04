import assert from 'node:assert/strict'
import test from 'node:test'

import {
  interpolateSalary,
  MAXIMUM_SUPER_GROSS,
  MINIMUM_SUPER_GROSS,
  normalizeSuperGross,
  salaryPoints,
} from './salary-math.ts'

test('reproduit les points relevés sur le simulateur Urssaf', () => {
  for (const point of salaryPoints) {
    assert.ok(Math.abs(interpolateSalary(point.superGross).net - point.net) < 0.01)
  }
})

test('correspond aux libellés des raccourcis du simulateur', () => {
  assert.ok(Math.abs(interpolateSalary(5_291).net - 3_000) < 1)
  assert.ok(Math.abs(interpolateSalary(9_063).net - 5_000) < 1)
})

test('le net croît avec le superbrut et reste inférieur', () => {
  let previousNet = 0
  for (let superGross = MINIMUM_SUPER_GROSS; superGross <= MAXIMUM_SUPER_GROSS; superGross += 100) {
    const { net } = interpolateSalary(superGross)
    assert.ok(net > previousNet)
    assert.ok(net < superGross)
    previousNet = net
  }
})

test('normalizeSuperGross borne et arrondit', () => {
  assert.equal(normalizeSuperGross(0), MINIMUM_SUPER_GROSS)
  assert.equal(normalizeSuperGross(1_000_000), MAXIMUM_SUPER_GROSS)
  assert.equal(normalizeSuperGross(4_000.4), 4_000)
})
