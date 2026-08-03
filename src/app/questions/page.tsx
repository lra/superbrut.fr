import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questions fréquentes — Superbrut',
  description: 'Les réponses aux questions fréquentes sur l’initiative citoyenne Superbrut et ses effets.',
  alternates: { canonical: '/questions' },
}

export default function QuestionsPage() {
  return (
    <main id="top">
      <article>
        <section className="content-section" id="questions">
          <p className="section-number">05</p>
          <div className="section-content">
            <h1 className="page-title">Questions fréquentes</h1>
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
  )
}
