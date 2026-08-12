import Link from "next/link";

export default function PolitiqueDeConfidentialite() {
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
            Confidentialité
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-5 text-sm text-slate-500">
            Dernière mise à jour : août 2026
          </p>
        </header>

        <div className="mt-12 space-y-10 text-base leading-8 text-slate-600">
          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              1. Introduction
            </h2>

            <p className="mt-4">
              Cette politique de confidentialité explique comment les
              informations peuvent être traitées lorsque vous utilisez le
              site internet de Yves Kabuya, professeur d&apos;anglais à
              Kinshasa.
            </p>

            <p className="mt-4">
              Le site a pour objectif de présenter les services d&apos;Yves
              Kabuya, ses méthodes d&apos;enseignement, son expérience ainsi
              que de permettre aux visiteurs de prendre contact avec lui.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              2. Données personnelles
            </h2>

            <p className="mt-4">
              Le site ne contient actuellement aucun formulaire demandant
              directement aux visiteurs de fournir leur nom, adresse,
              numéro de téléphone ou autres données personnelles.
            </p>

            <p className="mt-4">
              Si vous choisissez de contacter Yves Kabuya par téléphone,
              e-mail ou WhatsApp, les informations que vous communiquez
              volontairement sont traitées afin de répondre à votre demande
              et d&apos;assurer le suivi de votre communication.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              3. Test de niveau d&apos;anglais
            </h2>

            <p className="mt-4">
              Le site propose un test de niveau d&apos;anglais à caractère
              indicatif. Le test ne demande pas d&apos;informations
              personnelles pour être utilisé.
            </p>

            <p className="mt-4">
              Afin de limiter le nombre de tentatives, le navigateur utilisé
              peut conserver localement le nombre de tests effectués grâce au
              mécanisme de stockage local du navigateur (<code>localStorage</code>).
            </p>

            <p className="mt-4">
              Cette information est conservée sur l&apos;appareil du visiteur
              et n&apos;est pas utilisée par le site pour identifier
              personnellement celui-ci.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              4. Cookies et technologies de suivi
            </h2>

            <p className="mt-4">
              Le site n&apos;utilise actuellement pas de cookies publicitaires,
              de pixels publicitaires ou de systèmes d&apos;analyse destinés
              à suivre le comportement des visiteurs à des fins commerciales.
            </p>

            <p className="mt-4">
              Le fonctionnement du test de niveau utilise toutefois le
              stockage local du navigateur, comme indiqué ci-dessus.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              5. Services externes
            </h2>

            <p className="mt-4">
              Le site contient des liens permettant notamment de contacter
              Yves Kabuya par WhatsApp, téléphone ou e-mail, ainsi qu&apos;un
              lien vers le profil Facebook du développeur du site.
            </p>

            <p className="mt-4">
              Lorsque vous utilisez ces liens, vous quittez le site et
              utilisez les services concernés. Le traitement éventuel de vos
              données par ces services est soumis à leurs propres politiques
              de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              6. Hébergement
            </h2>

            <p className="mt-4">
              Le site est hébergé et déployé à l&apos;aide de services
              d&apos;infrastructure web tiers. Des informations techniques
              nécessaires au fonctionnement, à la sécurité et à la
              disponibilité du site peuvent être traitées par ces
              fournisseurs conformément à leurs propres politiques.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              7. Sécurité
            </h2>

            <p className="mt-4">
              Des mesures techniques raisonnables sont utilisées afin de
              maintenir le site disponible et de limiter les accès non
              autorisés. Toutefois, aucune transmission ou infrastructure
              informatique ne peut être garantie comme étant totalement
              sécurisée.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              8. Modifications
            </h2>

            <p className="mt-4">
              Cette politique peut être mise à jour lorsque le fonctionnement
              du site, les services utilisés ou les obligations applicables
              évoluent. La date de dernière mise à jour sera alors modifiée
              en conséquence.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate-900">
              9. Contact
            </h2>

            <p className="mt-4">
              Pour toute question concernant cette politique ou la manière
              dont vos informations sont traitées, vous pouvez contacter
              Yves Kabuya :
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-900">Yves Kabuya</p>

              <a
                href="mailto:yveskabuyakabuya@gmail.com"
                className="mt-2 block text-blue-700 hover:text-blue-900"
              >
                yveskabuyakabuya@gmail.com
              </a>

              <p className="mt-2 text-slate-600">
                Kinshasa, République démocratique du Congo
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}