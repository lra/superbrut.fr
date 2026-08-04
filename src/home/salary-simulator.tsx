'use client'

import type { CSSProperties } from 'react'
import { useSyncExternalStore } from 'react'

import {
  interpolateSalary,
  MAXIMUM_SUPER_GROSS,
  MINIMUM_SUPER_GROSS,
  normalizeSuperGross,
} from '@/home/salary-math'

const SUPER_GROSS_CHANGE_EVENT = 'superbrut-change'

const quickPicks = [
  { label: 'SMIC', value: MINIMUM_SUPER_GROSS },
  { label: '≈ 3 000 € net', value: 5_291 },
  { label: '≈ 5 000 € net', value: 9_063 },
  { label: '≈ 10 000 € net', value: MAXIMUM_SUPER_GROSS },
] as const

const currencyFormatter = new Intl.NumberFormat('fr-FR', {
  currency: 'EUR',
  maximumFractionDigits: 0,
  style: 'currency',
})

export function SalarySimulator() {
  const linkedSuperGross = useSyncExternalStore(subscribeToSuperGross, getLinkedSuperGross, getServerSuperGross)
  const superGross = linkedSuperGross ?? 4_000
  const salary = interpolateSalary(superGross)
  const contributions = superGross - salary.net
  const netShare = (salary.net / superGross) * 100
  const progress = ((superGross - MINIMUM_SUPER_GROSS) / (MAXIMUM_SUPER_GROSS - MINIMUM_SUPER_GROSS)) * 100
  const sliderStyle = { '--slider-progress': `${progress}%` } as CSSProperties

  function selectSalary(amount: number) {
    const normalizedAmount = normalizeSuperGross(amount)
    const url = new URL(window.location.href)
    url.searchParams.set('superbrut', String(normalizedAmount))

    window.history.replaceState(null, '', url)
    window.dispatchEvent(new Event(SUPER_GROSS_CHANGE_EVENT))
  }

  return (
    <section aria-labelledby="simulator-title" className="simulator-section" id="simulateur">
      <div className="simulator-wrap">
        <header className="simulator-heading">
          <p className="simulator-kicker">À vous de jouer</p>
          <h1 id="simulator-title">Votre salaire passe où&nbsp;?</h1>
          <p>
            Faites glisser le superbrut — tout ce que paie l’employeur — et regardez ce qu’il vous reste vraiment avant impôt.
          </p>
        </header>

        <div className="simulator-card">
          <div className="simulator-controls">
            <div className="super-gross-readout">
              <span>Superbrut mensuel</span>
              <output htmlFor="super-gross-slider">{formatCurrency(superGross)}</output>
            </div>

            <label className="visually-hidden" htmlFor="super-gross-slider">
              Choisir le salaire superbrut mensuel
            </label>
            <input
              aria-valuetext={`${formatCurrency(superGross)} superbrut par mois`}
              id="super-gross-slider"
              max={MAXIMUM_SUPER_GROSS}
              min={MINIMUM_SUPER_GROSS}
              onChange={(event) => selectSalary(Number(event.target.value))}
              step="1"
              style={sliderStyle}
              type="range"
              value={superGross}
            />
            <div aria-hidden="true" className="slider-limits">
              <span>SMIC</span>
              <span>≈ 10&nbsp;000&nbsp;€ net</span>
            </div>

            <div aria-label="Exemples de salaires" className="quick-picks" role="group">
              {quickPicks.map((quickPick) => (
                <button
                  aria-pressed={superGross === quickPick.value}
                  key={quickPick.label}
                  onClick={() => selectSalary(quickPick.value)}
                  type="button"
                >
                  {quickPick.label}
                </button>
              ))}
            </div>

            <p className="simulator-assumptions">
              Estimation 2026, salarié non-cadre en CDI, à temps plein, avant impôt sur le revenu.
            </p>
            <a className="simulator-permalink" href={`/?superbrut=${superGross}`}>
              Lien direct vers ce salaire <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="simulator-result">
            <p className="result-stamp">{getSalaryMood(salary.net)}</p>
            <p className="result-label">Net avant impôt</p>
            <output aria-live="polite" className="net-amount" htmlFor="super-gross-slider">
              {formatCurrency(salary.net)}
            </output>
            <p className="result-period">
              net par mois <span>· {formatCurrency(salary.net * 12)} par an</span>
            </p>

            <dl className="salary-cascade">
              <div>
                <dt><span aria-hidden="true">+</span> Superbrut</dt>
                <dd>{formatCurrency(superGross)}</dd>
              </div>
              <div>
                <dt><span aria-hidden="true">−</span> Cotisations sociales</dt>
                <dd>{formatCurrency(contributions)}</dd>
              </div>
              <div className="cascade-total">
                <dt><span aria-hidden="true">=</span> Net avant impôt</dt>
                <dd>{formatCurrency(salary.net)}</dd>
              </div>
            </dl>

            <div className="hundred-euros">
              <p>Pour chaque 100&nbsp;€ payés</p>
              <div aria-hidden="true" className="hundred-euros-bar">
                <span style={{ width: `${netShare}%` }} />
              </div>
              <div className="hundred-euros-legend">
                <span><strong>{Math.round(netShare)}&nbsp;€</strong> pour vous</span>
                <span><strong>{Math.round(100 - netShare)}&nbsp;€</strong> de cotisations</span>
              </div>
            </div>
          </div>
        </div>

        <p className="simulator-source">
          Calcul indicatif interpolé à partir du <a href="https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net">simulateur officiel Urssaf</a>. Les conventions collectives, avantages et situations particulières peuvent modifier le résultat.
        </p>
      </div>
    </section>
  )
}

function formatCurrency(amount: number) {
  return currencyFormatter.format(amount)
}

function getSalaryMood(net: number) {
  if (net < 2_000) return 'Niveau départ'
  if (net < 3_500) return 'Ça grimpe'
  if (net < 6_000) return 'Belle accélération'
  if (net < 9_000) return 'Plein régime'
  return 'Boss final'
}

function subscribeToSuperGross(onStoreChange: () => void) {
  window.addEventListener('popstate', onStoreChange)
  window.addEventListener(SUPER_GROSS_CHANGE_EVENT, onStoreChange)

  return () => {
    window.removeEventListener('popstate', onStoreChange)
    window.removeEventListener(SUPER_GROSS_CHANGE_EVENT, onStoreChange)
  }
}

function getLinkedSuperGross() {
  const linkedSalary = new URLSearchParams(window.location.search).get('superbrut')
  if (linkedSalary === null || linkedSalary.trim() === '') return null

  const amount = Number(linkedSalary)
  return Number.isFinite(amount) ? normalizeSuperGross(amount) : null
}

function getServerSuperGross() {
  return null
}
