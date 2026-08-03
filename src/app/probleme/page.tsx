import type { Metadata } from 'next'
import Link from 'next/link'

import { SalaryBreakdown } from '@/home/salary-breakdown'

export const metadata: Metadata = {
  title: 'Le problème — Superbrut',
  description: 'Pourquoi le salaire brut et la distinction entre cotisations patronales et salariales masquent le coût réel du travail.',
  alternates: { canonical: '/probleme' },
}

export default function ProblemPage() {
  return (
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
          <Link className="hero-link" href="/">
            Tester votre salaire <span aria-hidden="true">→</span>
          </Link>
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
      </article>
    </main>
  )
}
