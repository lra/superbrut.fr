import { SalaryBreakdown } from '@/home/salary-breakdown'

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Superbrut, retour en haut">
          super<span>brut</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#probleme">Le problème</a>
          <a href="#objectifs">Nos objectifs</a>
          <a href="#participer">Participer</a>
          <a href="#questions">Questions</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Initiative citoyenne indépendante</p>
            <h1>Le vrai salaire, c’est le superbrut.</h1>
            <p className="hero-lead">
              La distinction entre cotisations sociales patronales et salariales, comme la notion de salaire brut qui en découle, sont des fictions comptables qui cachent aux salariés français le coût réel de notre système social.
            </p>
            <p>
              Nous demandons au législateur que toutes les cotisations sociales soient regroupées en un seul ensemble et que les salariés soient officiellement rémunérés à hauteur de ce que dépensent réellement leurs employeurs&nbsp;: le <strong>superbrut</strong>.
            </p>
            <a className="hero-link" href="#objectifs">
              Découvrir notre proposition <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className="hero-example" aria-label="Le salaire en toute transparence">
            <p className="example-label">La réalité, simplement</p>
            <SalaryBreakdown
              caption="Décomposition du superbrut"
              rows={[
                { operator: '+', label: 'Superbrut', amount: '3 052,70 €' },
                { operator: '−', label: 'Cotisations sociales', amount: '1 253,97 €' },
                { operator: '=', label: 'Salaire net', amount: '1 798,73 €' },
              ]}
            />
          </aside>
        </section>

        <article>
          <section className="content-section" id="probleme">
            <p className="section-number">01</p>
            <div className="section-content">
              <h2>Le problème</h2>
              <p>
                La meilleure façon d’aborder le problème des cotisations sociales est encore de prendre un exemple. Ci-dessous, nous utilisons le simulateur de <a href="https://mon-entreprise.fr/">mon-entreprise.fr</a> pour le cas d’un salarié rémunéré à hauteur du salaire «&nbsp;brut&nbsp;» médian, soit 2&nbsp;300&nbsp;€ par mois. Voici son bulletin de paie simplifié&nbsp;:
              </p>

              <SalaryBreakdown
                caption="Bulletin de paie simplifié actuel"
                rows={[
                  { operator: '+', label: 'Coût total employeur', amount: '3 052,70 €' },
                  { operator: '−', label: 'Cotisations dites patronales', amount: '752,70 €' },
                  { operator: '=', label: 'Salaire brut', amount: '2 300,00 €' },
                  { operator: '−', label: 'Cotisations dites salariales', amount: '501,27 €' },
                  { operator: '=', label: 'Salaire net (avant impôt sur le revenu)', amount: '1 798,73 €' },
                ]}
              />

              <p>
                Concrètement, cela signifie que son employeur, pour verser un salaire net de 1&nbsp;798,73&nbsp;euros, doit débourser 3&nbsp;052,70&nbsp;euros&nbsp;: 752,70&nbsp;euros de charges dites patronales, 501,27&nbsp;euros de charges dites salariales et 1&nbsp;798,73&nbsp;euros de salaire net.
              </p>

              <h3>Et si l’employeur payait toutes les cotisations&nbsp;?</h3>
              <SalaryBreakdown
                caption="Toutes les cotisations attribuées à l’employeur"
                rows={[
                  { operator: '+', label: 'Coût total employeur', amount: '3 052,70 €' },
                  { operator: '−', label: 'Cotisations dites patronales', amount: '1 253,97 €' },
                  { operator: '=', label: 'Salaire brut', amount: '1 798,73 €' },
                  { operator: '−', label: 'Cotisations dites salariales', amount: '0,00 €' },
                  { operator: '=', label: 'Salaire net (avant impôt sur le revenu)', amount: '1 798,73 €' },
                ]}
              />
              <p>
                L’employeur ne paie pas un centime d’euro de plus, le salarié touche exactement la même somme et les organismes qui perçoivent les cotisations sociales reçoivent, au centime près, la même chose&nbsp;: 752,70&nbsp;€ + 501,27&nbsp;€ = 1&nbsp;253,97&nbsp;€.
              </p>

              <h3>Et si le salarié les payait toutes&nbsp;?</h3>
              <SalaryBreakdown
                caption="Toutes les cotisations attribuées au salarié"
                rows={[
                  { operator: '+', label: 'Coût total employeur', amount: '3 052,70 €' },
                  { operator: '−', label: 'Cotisations dites patronales', amount: '0,00 €' },
                  { operator: '=', label: 'Salaire brut', amount: '3 052,70 €' },
                  { operator: '−', label: 'Cotisations dites salariales', amount: '1 253,97 €' },
                  { operator: '=', label: 'Salaire net (avant impôt sur le revenu)', amount: '1 798,73 €' },
                ]}
              />
              <p>
                Là encore, l’employeur débourse toujours 3&nbsp;052,70&nbsp;euros, le salarié ne reçoit que 1&nbsp;798,73&nbsp;euros sur son compte et les organismes sociaux reçoivent 1&nbsp;253,97&nbsp;euros. D’un point de vue financier, rien n’a changé pour personne.
              </p>

              <blockquote>
                Les seules réalités concrètes sont les 3&nbsp;052,70&nbsp;euros payés par l’employeur, les 1&nbsp;798,73&nbsp;euros versés au salarié et les 1&nbsp;253,97&nbsp;euros prélevés au passage.
              </blockquote>

              <p>
                Le fameux salaire brut n’est payé ou perçu par personne. Les salariés s’intéressent à leur salaire net et leurs employeurs raisonnent toutes cotisations sociales incluses. Le salaire brut n’est qu’une fiction comptable.
              </p>
              <p>
                Toutes les cotisations sociales, qu’elles soient patronales ou salariales, ne sont rien d’autre que la différence entre ce que les employeurs paient pour rémunérer leurs salariés et ce que ces derniers gagnent effectivement à la fin du mois.
              </p>
            </div>
          </section>

          <section className="content-section tinted-section" id="enjeux">
            <p className="section-number">02</p>
            <div className="section-content">
              <h2>Les enjeux</h2>
              <p>
                Pourquoi les bulletins de paie distinguent-ils cotisations <s>patronales</s> et <s>salariales</s>, et pourquoi les rémunérations sont-elles exprimées en termes de <s>salaire brut</s>&nbsp;?
              </p>
              <p>
                Ces cotisations suivent des règles différentes et peuvent être modifiées indépendamment. Le salaire brut étant fixé contractuellement, employeurs et salariés ne peuvent le faire varier hors négociations salariales. Si le gouvernement augmente les cotisations dites patronales, le coût total des employés augmente. S’il augmente les cotisations dites salariales, leur rémunération nette baisse.
              </p>
              <p>
                Cette distinction permet ainsi aux gouvernements de modifier les conséquences financières de nos contrats de travail et de faire porter le coût des mesures sociales aux entreprises, aux salariés ou aux deux, en fonction des impératifs politiques du moment.
              </p>
              <p>
                Mais ce jeu de dupes n’échappe pas durablement à la réalité du marché du travail. Les charges lourdes et instables incitent les employeurs au gel des salaires et des promotions. Parallèlement, les salariés sont affaiblis par une image faussée de la situation. Cette mauvaise lisibilité ne profite à personne.
              </p>

              <div className="callout">
                <SalaryBreakdown
                  caption="Une présentation transparente"
                  rows={[
                    { operator: '+', label: 'Superbrut', amount: '3 052,70 €' },
                    { operator: '−', label: 'Cotisations sociales', amount: '1 253,97 €' },
                    { operator: '=', label: 'Salaire net', amount: '1 798,73 €' },
                  ]}
                />
                <p>
                  <strong>La présentation actuelle des fiches de paie est trompeuse.</strong> Elle cache ce que coûte vraiment le modèle social. C’est pour apporter la transparence due aux citoyens que nous avons créé superbrut.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section" id="objectifs">
            <p className="section-number">03</p>
            <div className="section-content">
              <h2>Nos objectifs</h2>
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

              <h3>Un calcul plus lisible, un montant identique</h3>
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

              <h3>Pourquoi faire du superbrut le salaire officiel&nbsp;?</h3>
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

          <section className="content-section dark-section" id="participer">
            <p className="section-number">04</p>
            <div className="section-content">
              <h2>Participer</h2>
              <p className="section-intro">
                Notre objectif est d’obtenir le soutien du plus grand nombre possible de parlementaires, quel que soit leur bord politique, puis les évolutions législatives nécessaires.
              </p>
              <div className="participation-grid">
                <section>
                  <p className="card-number">01</p>
                  <h3>Militer</h3>
                  <p>
                    Il est essentiel de convaincre nos élus que notre proposition dispose d’un réel soutien. Relayez ce message auprès des décideurs politiques, à commencer par votre député.
                  </p>
                </section>
                <section>
                  <p className="card-number">02</p>
                  <h3>Diffuser</h3>
                  <p>
                    Auprès de vos amis, collègues, proches ou sur les réseaux sociaux&nbsp;: diffusez notre message et faites connaître nos propositions le plus largement possible.
                  </p>
                </section>
              </div>
            </div>
          </section>

          <section className="content-section" id="questions">
            <p className="section-number">05</p>
            <div className="section-content">
              <h2>Questions fréquentes</h2>
              <div className="faq-list">
                <details>
                  <summary>Qui êtes-vous&nbsp;?</summary>
                  <p>
                    Nous sommes un groupe de citoyens souhaitant mettre fin à l’opacité du système actuel. Salariés, employeurs, étudiants, retraités, chômeurs, de droite, de gauche ou d’ailleurs, nous avons accepté de mettre nos opinions de côté dans le cadre de superbrut. Ensemble, nous avons un seul objectif&nbsp;: apporter de la clarté dans les fiches de paie.
                  </p>
                </details>
                <details>
                  <summary>Pourquoi superbrut&nbsp;?</summary>
                  <p>
                    Aucune démocratie ne peut fonctionner correctement si les électeurs ne disposent pas d’informations claires et compréhensibles. Les cotisations sociales faisant l’objet de décisions collectives, leurs assiettes, taux, montants et destinations doivent être aussi transparents que possible.
                  </p>
                </details>
                <details>
                  <summary>Qu’est-ce que cela va changer pour moi&nbsp;?</summary>
                  <p>
                    Pour les salariés, la réforme se traduirait par des bulletins de paie plus clairs et fidèles à la réalité économique. En termes de montant, rien ne changerait&nbsp;: les salariés percevraient le même net, les entreprises paieraient le même superbrut et les organismes collecteraient les mêmes cotisations.
                  </p>
                </details>
                <details>
                  <summary>L’État perdrait-il un outil de pilotage économique&nbsp;?</summary>
                  <p>
                    Oui. Aujourd’hui, l’État peut faire porter une hausse des cotisations sur les salariés ou les employeurs. Après la réforme, s’il souhaitait faire financer de nouvelles cotisations par les entreprises, il devrait imposer en toute transparence une hausse des salaires.
                  </p>
                </details>
                <details>
                  <summary>Êtes-vous indépendants&nbsp;?</summary>
                  <p>
                    Totalement. Nous n’avons aucun lien avec un parti politique, un syndicat, une entreprise, une ONG ou un think tank, et tenons à conserver cette indépendance.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          super<span>brut</span>
        </a>
        <p>Pour des fiches de paie claires et transparentes.</p>
      </footer>
    </>
  )
}
