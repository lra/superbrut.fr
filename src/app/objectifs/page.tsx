import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos objectifs — Superbrut',
  description: 'Notre proposition pour regrouper les cotisations sociales et faire du superbrut le salaire officiel.',
  alternates: { canonical: '/objectifs' },
}

export default function ObjectivesPage() {
  return (
    <main id="top">
      <article>
        <section className="content-section" id="objectifs">
          <p className="section-number">03</p>
          <div className="section-content">
            <h1 className="page-title">Nos objectifs</h1>
            <p>Notre proposition se décline en trois points&nbsp;:</p>
            <ol className="proposal-list">
              <li>
                Fusionner les cotisations sociales dites patronales et salariales en un seul ensemble dénommé <strong>cotisations sociales</strong>.
              </li>
              <li>
                Remplacer la notion actuelle de salaire brut par le salaire net effectivement versé, augmenté de l’ensemble des cotisations sociales&nbsp;: le <strong>superbrut</strong>.
              </li>
              <li>
                Faire exclusivement référence au superbrut dans toute négociation salariale et tout contrat de travail.
              </li>
            </ol>

            <p className="emphasis">
              Cette réforme ne modifierait ni les montants payés par les employeurs, ni ceux perçus par les salariés et les organismes sociaux. La transparence apportée aurait pour seul but de clarifier la fiche de paie et de mieux informer les citoyens.
            </p>

            <h2 className="subsection-title">Un calcul plus lisible, un montant identique</h2>
            <p>
              Pour un salaire brut de 2&nbsp;300&nbsp;euros, la cotisation au titre de la vieillesse non plafonnée est actuellement calculée ainsi&nbsp;:
            </p>
            <div className="table-scroll">
              <table className="comparison-table">
                <caption>Calcul actuel de la cotisation vieillesse</caption>
                <thead>
                  <tr>
                    <th scope="col">Assiette</th>
                    <th scope="col" colSpan={2}>Part employeur</th>
                    <th scope="col" colSpan={2}>Part salarié</th>
                  </tr>
                  <tr>
                    <th scope="col">Salaire brut</th>
                    <th scope="col">Taux</th>
                    <th scope="col">Montant</th>
                    <th scope="col">Taux</th>
                    <th scope="col">Montant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2 300,00 €</td>
                    <td>1,90 %</td>
                    <td>43,70 €</td>
                    <td>0,40 %</td>
                    <td>9,20 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Nous proposons de la recalculer à partir du superbrut actuel&nbsp;:</p>
            <div className="table-scroll">
              <table className="comparison-table">
                <caption>Calcul proposé de la cotisation vieillesse</caption>
                <thead>
                  <tr>
                    <th scope="col">Assiette</th>
                    <th scope="col" colSpan={2}>Cotisations sociales</th>
                  </tr>
                  <tr>
                    <th scope="col">Superbrut</th>
                    <th scope="col">Taux</th>
                    <th scope="col">Montant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 052,70 €</td>
                    <td>1,7329 %</td>
                    <td>52,90 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Seuls changent l’assiette — le superbrut au lieu du salaire brut — et le taux — 1,7329&nbsp;% au lieu de 1,90&nbsp;% + 0,40&nbsp;%. La Sécurité sociale perçoit exactement la même somme&nbsp;: 43,70&nbsp;€ + 9,20&nbsp;€ = 52,90&nbsp;€.
            </p>
            <p>
              Il ne s’agit donc pas de discuter les montants prélevés, mais de les regrouper par volonté de clarté et de transparence.
            </p>

            <h2 className="subsection-title">Pourquoi faire du superbrut le salaire officiel&nbsp;?</h2>
            <ol>
              <li>
                Les cotisations sociales font, de fait, partie de la rémunération des salariés. C’est aux salariés de déterminer si leur niveau est justifié par les services rendus en contrepartie.
              </li>
              <li>
                Le poids des cotisations est un objet de débat démocratique. Les entreprises n’ont pas le droit de vote, contrairement aux salariés&nbsp;: il est légitime que les citoyens-électeurs, bénéficiaires du système social, en contrôlent les coûts.
              </li>
              <li>
                Fonder les négociations sur le salaire net risquerait de conduire à des hausses de superbrut mettant en danger les entreprises fragiles et les chances de retour à l’emploi des chômeurs.
              </li>
            </ol>
            <p>
              Lors de la mise en œuvre de la réforme, tous les salaires contractuels seraient redéfinis comme égaux au superbrut, soit la somme du salaire brut et des cotisations payées par l’employeur avant la réforme.
            </p>
            <p>
              Dans notre exemple, un salarié actuellement payé 2&nbsp;300&nbsp;euros bruts verrait son salaire contractuel majoré à 3&nbsp;052,70&nbsp;euros. Personne ne serait lésé ou avantagé, mais nous gagnerions tous en transparence et en simplicité.
            </p>
          </div>
        </section>
      </article>
    </main>
  )
}
