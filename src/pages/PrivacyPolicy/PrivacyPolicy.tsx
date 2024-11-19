import React from "react";
import s from "./style.module.scss"

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={s.container}>
      <h1>Politique de Confidentialité</h1>
      <p><strong>Dernière mise à jour :</strong> 19 Novembre 2024</p>

      <section>
        <h2>1. Informations que nous collectons</h2>
        <p>
          Nous collectons les types de données suivants :
        </p>
        <ul>
          <li>
            <strong>Données techniques :</strong> adresse IP (anonymisée si possible), type de
            navigateur, système d'exploitation.
          </li>
          <li>
            <strong>Données de navigation :</strong> pages visitées, temps passé sur le site,
            actions effectuées.
          </li>
        </ul>
        <p>
          Ces données sont collectées via des cookies (voir la section 4).
        </p>
      </section>

      <section>
        <h2>2. Comment utilisons-nous vos données ?</h2>
        <p>
          Nous utilisons vos données pour :
        </p>
        <ul>
          <li>Analyser les performances du site (via Google Analytics).</li>
          <li>Améliorer votre expérience utilisateur.</li>
          <li>Détecter et prévenir les problèmes techniques.</li>
        </ul>
      </section>

      <section>
        <h2>3. Partage de vos données</h2>
        <p>
          Nous ne partageons vos données qu'avec des tiers de confiance :
        </p>
        <ul>
          <li>
            <strong>Google Analytics :</strong> utilisé pour analyser le trafic de notre site.
            Google Analytics utilise des cookies pour collecter des données anonymisées.
            Consultez leur politique <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              ici
            </a>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          Les cookies sont de petits fichiers texte stockés sur votre appareil. Nous utilisons les
          types de cookies suivants :
        </p>
        <ul>
          <li>
            <strong>Cookies essentiels :</strong> nécessaires au bon fonctionnement du site.
          </li>
          <li>
            <strong>Cookies analytiques :</strong> utilisés pour collecter des statistiques
            anonymisées sur votre navigation (Google Analytics).
          </li>
        </ul>
        <p>
          Vous pouvez gérer vos préférences de cookies via notre bannière ou les paramètres de votre
          navigateur. Pour en savoir plus, consultez notre{" "}
          <a href="/politique-cookies" target="_blank" rel="noopener noreferrer">
            Politique sur les Cookies
          </a>
          .
        </p>
      </section>

      <section>
        <h2>5. Vos droits</h2>
        <p>En vertu du RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>
            <strong>Accès :</strong> demander une copie des données collectées.
          </li>
          <li>
            <strong>Rectification :</strong> corriger les données inexactes.
          </li>
          <li>
            <strong>Suppression :</strong> demander la suppression de vos données.
          </li>
          <li>
            <strong>Opposition :</strong> refuser l’utilisation de vos données à certaines fins,
            comme les cookies analytiques.
          </li>
        </ul>
        <p>
          Pour exercer vos droits, contactez-nous à :{" "}
          <a href="mailto:contact@tonsite.com">contact@tonsite.com</a>.
        </p>
      </section>

      <section>
        <h2>6. Sécurité de vos données</h2>
        <p>
          Nous prenons des mesures techniques et organisationnelles pour protéger vos données
          contre tout accès non autorisé ou usage abusif.
        </p>
      </section>

      <section>
        <h2>7. Liens vers des sites tiers</h2>
        <p>
          Notre site peut contenir des liens vers d'autres sites. Nous ne sommes pas responsables de
          leurs politiques de confidentialité. Nous vous encourageons à consulter leurs propres
          politiques.
        </p>
      </section>

      <section>
        <h2>8. Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique pour refléter les changements de nos pratiques
          ou des lois en vigueur. La dernière date de mise à jour est indiquée en haut de cette
          page.
        </p>
      </section>

      <section>
        <h2>9. Nous contacter</h2>
        <p>
          Pour toute question ou demande concernant cette politique, contactez-nous à :{" "}
          <a href="mailto:contact@tonsite.com">contact@tonsite.com</a>.
        </p>
      </section>

      <section>
        <h2>10. Consentement</h2>
        <p>
          En utilisant notre site, vous acceptez les termes de cette politique de confidentialité.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
