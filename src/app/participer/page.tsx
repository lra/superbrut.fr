import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Participer — Superbrut',
  description: 'Soutenez et diffusez notre proposition pour des fiches de paie plus claires et transparentes.',
  alternates: { canonical: '/participer' },
}

export default function ParticipatePage() {
  return (
    <main id="top">
      <article>
        <section className="content-section dark-section" id="participer">
          <p className="section-number">04</p>
          <div className="section-content">
            <h1 className="page-title">Participer</h1>
            <p className="section-intro">
              Notre objectif est d’obtenir le soutien du plus grand nombre possible de parlementaires, quel que soit leur bord politique, puis les évolutions législatives nécessaires.
            </p>
            <div className="participation-grid">
              <section>
                <p className="card-number">01</p>
                <h2 className="card-title">Militer</h2>
                <p>
                  Il est essentiel de convaincre nos élus que notre proposition dispose d’un réel soutien. Relayez ce message auprès des décideurs politiques, à commencer par votre député.
                </p>
              </section>
              <section>
                <p className="card-number">02</p>
                <h2 className="card-title">Diffuser</h2>
                <p>
                  Auprès de vos amis, collègues, proches ou sur les réseaux sociaux&nbsp;: diffusez notre message et faites connaître nos propositions le plus largement possible.
                </p>
              </section>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
