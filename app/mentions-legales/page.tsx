import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#fbfcfe] text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
        >
          ← Retour au site
        </Link>

        <header className="mt-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Informations légales
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Mentions légales
          </h1>

          <p className="mt-5 text-sm text-slate-500">
            Dernière mise à jour : août 2026
          </p>
        </header>

        <div className="mt-12 space-y-10 text-base leading-8 text-slate-600">
          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              1. Éditeur du site
            </h2>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-900">Yves Kabuya</p>

              <p className="mt-2">
                Professeur d&apos;anglais · Kinshasa, République démocratique
                du Congo
              </p>

              <a
                href="mailto:yveskabuyakabuya@gmail.com"
                className="mt-2 block text-blue-700 hover:text-blue-900"
              >
                yveskabuyakabuya@gmail.com
              </a>

              <p className="mt-2">Téléphone : +243 891 369 069</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              2. Objet du site
            </h2>

            <p className="mt-4">
              Ce site présente les activités professionnelles, l&apos;expérience,
              les méthodes d&apos;enseignement et les services proposés par
              Yves Kabuya dans le domaine de l&apos;enseignement de
              l&apos;anglais.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              3. Services proposés
            </h2>

            <p className="mt-4">
              Les informations présentées sur le site concernent notamment
              l&apos;anglais général, la conversation et l&apos;expression,
              ainsi que l&apos;anglais professionnel.
            </p>

            <p className="mt-4">
              Les modalités, disponibilités et tarifs peuvent être
              communiqués directement par Yves Kabuya selon les besoins de
              chaque apprenant.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              4. Test de niveau
            </h2>

            <p className="mt-4">
              Le test de niveau disponible sur ce site fournit uniquement une
              estimation indicative du niveau d&apos;anglais du visiteur.
            </p>

            <p className="mt-4">
              Il ne constitue pas un examen officiel et ne délivre aucune
              certification reconnue.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              5. Propriété intellectuelle
            </h2>

            <p className="mt-4">
              Sauf indication contraire, les textes, photographies, éléments
              graphiques, contenus et éléments de présentation présents sur
              ce site sont destinés à la présentation de l&apos;activité
              professionnelle de Yves Kabuya.
            </p>

            <p className="mt-4">
              Toute reproduction, modification ou réutilisation substantielle
              des contenus du site sans autorisation préalable peut être
              interdite par les règles applicables en matière de propriété
              intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              6. Liens externes
            </h2>

            <p className="mt-4">
              Le site peut contenir des liens vers des services ou plateformes
              externes. Yves Kabuya ne contrôle pas nécessairement le contenu,
              la disponibilité ou les pratiques de confidentialité de ces
              plateformes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              7. Responsabilité
            </h2>

            <p className="mt-4">
              Les informations publiées sur ce site sont fournies à titre
              informatif et peuvent être modifiées ou mises à jour sans
              préavis.
            </p>

            <p className="mt-4">
              Yves Kabuya s&apos;efforce de maintenir des informations
              pertinentes et exactes, sans toutefois garantir l&apos;absence
              totale d&apos;erreurs ou d&apos;interruptions du service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              8. Contact
            </h2>

            <p className="mt-4">
              Pour toute question concernant le site ou les services proposés,
              vous pouvez contacter :
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-900">Yves Kabuya</p>

              <a
                href="mailto:yveskabuyakabuya@gmail.com"
                className="mt-2 block text-blue-700 hover:text-blue-900"
              >
                yveskabuyakabuya@gmail.com
              </a>

              <p className="mt-2">+243 891 369 069</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}