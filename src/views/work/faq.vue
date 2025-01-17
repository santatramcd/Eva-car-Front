<template>
  <div>
    <div class="container mt-5">
      <div class="row division-position">
        <div class="col-md-4">
          <div class="divsearch">
            <h3 class="search-title">Recherche dans notre FAQ</h3>
            <div class="divisionsear">
              <input
                type="text"
                class="form-control formcont"
                aria-label="Amount"
                placeholder="Faite votre recherche ici"
                v-model="searchQuery"
              />
              <span class="spanserch"><i class="bi bi-search"></i></span>
            </div>
          </div>
          <ul class="ulsearch">
            <li class="lisearch">Le système de réservation en ligne</li>
            <li class="lisearch">Accidents et pannes</li>
            <li class="lisearch">Les règles de circulation routière</li>
            <li class="lisearch">Politique d'assurance et de responsabilité</li>
            <li class="lisearch">Tarifs et autres conditions de location</li>
            <li class="lisearch">Conditions de paiement</li>
            <li class="lisearch">À propos de Eva Car Rental</li>
          </ul>
        </div>
        <!-- Contenu de la page avec les sections -->
        <div class="col-md-8">
          <div
            class="toast-body divi1"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            v-show="isVisible"
          >
            <div class="div1">
              <span class="span1"
                ><i class="bi bi-exclamation-circle"></i
              ></span>
            </div>
            <div class="div2">
              <p class="param1">
                Vous êtes bien sur la version adaptée à la destination choisie :
                Seychelles.
              </p>
            </div>
            <div class="div3">
              <span class="spanicone1"
                ><i class="bi bi-x" @click="handleClick"></i
              ></span>
            </div>
          </div>

          <div class="res-position"></div>

          <div
            class="container p-0"
            v-for="(item, index) in filteredData"
            :key="index"
          >
          <h4>{{ item.h1 }}</h4>
            <p class="h1faq" @click="toggleIconNext(index)">
              <a
                data-bs-toggle="collapse"
                :href="'#collapseExample' + index"
                role="button"
                :aria-expanded="isIconChanged[index] ? 'true' : 'false'"
                :aria-controls="'collapseExample' + index"
              >
                {{ item.title }}
              </a>
              <span v-if="!isIconChanged[index]"
                ><i class="bi bi-chevron-down"></i
              ></span>
              <span v-else><i class="bi bi-chevron-up"></i></span>
            </p>
            <div
              :class="{
                collapse: isIconChanged[index],
                show: !isIconChanged[index],
              }"
              :id="'collapseExample' + index"
            >
              <div class="card card-body paramfaq" v-html="item.message">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const dataAuto = [
  {
    h1 : "1 - Le système de réservation en ligne",
    title: "1.1 Comment faire une réservation sur le site de Eva Car Rental ?",
    message: `La réservation en ligne ne prend que cinq minutes environ. D'abord, vous devez sélectionner le lieu de départ et d'arrivée, la période de réservation, puis vous devez cliquer sur le bouton "Afficher les offres". Vous obtiendrez une liste de toutes les voitures disponibles ainsi que le prix total de location, qui inclue les frais de livraison et de retour. Vous pouvez ensuite choisir l'une des voitures disponibles en cliquant sur le bouton "Réserver !" situé juste en-dessous du prix de chaque voiture. Sur la page suivante, vous pouvez fournir des détails supplémentaires, comme les options de paiement et d'assurance souhaitées, et bien sûr, votre nom et votre adresse. Ensuite, vous devrez confirmer l'ensemble de vos données avant de finaliser le processus de réservation. Immédiatement après avoir effectué cette réservation, vous recevrez un email vous informant que nous avons bien reçu votre demande. En parallèle, l'un de nos partenaires locaux sera prévenu. Dès que nous avons son feu vert, nous vous enverrons par mail la confirmation de réservation ainsi que la facture.`,
  },
  {
    title : "1.2 Quels sont les modes de paiement disponibles ?",
    message : "Nous acceptons différents modes de paiement. Vous pouvez payer par virement bancaire, carte de crédit (Visa et MasterCard), et PayPal (la majorité des cartes bancaires sont acceptées). Les devises acceptées dépendent du moyen de paiement choisi. Pour en savoir plus sur les devises acceptées Merci de noter que les virements bancaires ne sont pas disponibles pour les réservations de dernière minute (moins de 3 jours avant la date de départ). Dans certains cas, il est également possible de payer les frais de location en espèces lors de la livraison. Si cette option est disponible, elle sera affichée durant le processus de réservation. Cependant, si vous souhaitez payer à la livraison, nous vous recommandons de réserver notre assurance annulation. Les frais pour cette assurance doivent être payés dans les 2 jours suivant la réception de votre facture."
  },
  {
    title : "1.3 Vais-je obtenir exactement la voiture que j'ai sélectionnée ?",
    message : "Nous faisons de notre mieux pour vous fournir exactement le modèle de voiture que vous avez réservé. Cependant, il existe de rares cas où cela n'est pas possible, en raison d'accidents, de réparations ou tout simplement d'une erreur de planification. Heureusement, vous recevrez toujours une voiture d'une valeur équivalente ou supérieure à celle que vous avez choisie. Les voitures qui ont le même tarif / jour sur notre site Internet sont considérées comme ayant une valeur équivalente."
  },
  {
    title : "1.4 Y a-t-il une durée minimum de réservation ?",
    message : `La durée de réservation minimum dépend du pays, du modèle, et de la disponibilité de la voiture. Vous pouvez avoir un aperçu de la disponibilité des véhicules en utilisant notre formulaire de recherche. Pour les locations de courte durée, nous nous réservons le droit d'imposer des frais supplémentaires. De tels frais, s'ils ont lieu, seront toujours inclus par défaut dans les prix affichés.<br> <br>Informations spécifiques à Île Seychelles: À l'île Seychelles, les réservations d'une durée d'au moins quatre jours sont toujours acceptées. Les réservations de moins de deux jours ne sont jamais acceptées. Les réservations pour une durée comprise entre deux et quatre jours sont acceptées par notre système de réservation sous certaines conditions. Cette décision se fait séparément pour chaque modèle de voiture (Si vous apercevez le bouton 'Réserver', votre réservation peut être réalisée ; si le message «Période de réservation trop courte» est affiché, vous devez choisir une autre voiture et/ou une plus grande durée de réservation). <br><br>Pour les réservations d'une durée inférieure à cinq jours, un supplément de 15% pour chaque jour en moins est inclus dans le prix par défaut, par exemple : 2 = 2,45, 3 = 3,3 et 4 = 4,15 jours.`
  },
  {
    title : "1.5 Comment ajouter des options ?",
    message : `Vous pouvez ajouter des options, comme un siège-auto enfant ou un système de navigation GPS, lors du processus de réservation à l'étape où on demande votre nom et votre adresse. Merci de noter que la perte ou les dommages sur les accessoires en option ne sont pas couverts par l'assurance.<br><br>Informations spécifiques à Île Seychelles: Un système de navigation satellite est inclus dans toutes les locations. L'ajout d'un coffre de toit est à ce jour uniquement disponible sur la Toyota Avanza (2,82 € par jour, max. ~40 € par location). Des sièges bébé sont disponible pour 2,42 € par jour (max. ~34 € par location). Des sièges rehausseurs pour enfants sont disponibles gratuitement.`
  },
  {
    title : "1.6 L'option premium, c'est quoi exactement ?",
    message : `En général, les voitures de notre flotte n'ont pas plus de trois ans; Certaines de nos voitures sont encore neuves. D'habitude, nous assignons nos voitures de façon aléatoire aux clients, ce qui constitue la façon la plus économique de procéder. Étant donné que la plupart de nos clients ont une attitude pragmatique envers leur voiture de location, notre objectif principal est d'offrir des voitures robustes à bas prix. Cependant, certains de nos clients n'étaient prêts à accepter qu'une voiture toute neuve, cela a conduit à l'insatisfaction de certains clients dans le passé.<br><br>Pour répondre à cette demande, nous offrons maintenant une option de prime lorsque nous garantissons que votre voiture aura un kilométrage de moins de 35 000 km. Cette option ne coûte que 4,19 € supplémentaire par jour, ce qui reste un prix très compétitif par rapport aux grandes marques internationales de location de voitures (qui utilisent souvent leurs voitures jusqu'à 100 000 km).<br><br>Dans de nombreux cas, les frais couvrent uniquement le coût du déplacement d'une voiture appropriée à travers l'île. Ainsi, merci de réserver l'option premium uniquement si vous souhaitez recevoir une voiture neuve. Si vous ne réservez pas l'option, nous utiliserons simplement notre méthode d'assignation aléatoire.<br><br>Soyez conscient que parfois, les choses ne fonctionnent pas selon le calendrier (par exemple en raison d'accidents) et nous ne pouvons pas toujours tenir nos promesses. Si vous recevez une voiture avec plus de 35 000 km, nous vous rembourserons les frais pour l'option premium plus un 1,68 € par jour pour les inconvénients.<br><br>Ce ne sont pas tous nos modèles de voitures qui ont l'option premium. C'est parce que ce ne sont pas tous nos fournisseurs locaux qui sont prêts à relever le défi organisationnel supplémentaire. Vous pouvez facilement trouver les voitures qui ont l'option en utilisant les paramètres de filtre sur notre page d'offres.`
  },
  {
    title : "1.7 Quelles sont les conditions d'annulation ?",
    message : `Si vous devez annuler votre réservation, vous pouvez le faire sans frais supplémentaire jusqu'à 48 heures avant la période de location, sans aucune restriction. Si vous annulez votre réservation au-delà de cette période, ou si vous nous retournez la voiture avant la fin de la période de réservation, nous vous facturerons 30% des frais de location restants ou une journée de location ou 49 €, en nous basant sur somme la plus élevée. Veuillez voir aussi : assurance annulation.`
  },
  {
    h1: "2 - Accidents et pannes",
    title: "2.1 Que se passe-t-il si je suis impliqué dans un accident de voiture ?",
    message: `En cas d'accident, vous devez informer au plus tôt l'assistance téléphonique dont le numéro est indiqué sur votre confirmation de réservation. Chez Eva Car Rental, nos conseillers sont disponibles 24h/24. Un conseiller mettra à votre disposition une voiture de remplacement et vous aidera avec les formalités administratives, comme remplir un rapport de police, ce qui est obligatoire pour votre assurance.<br><br>
Si la police conclut qu'un tiers est entièrement responsable de l'accident, vous n'aurez rien à payer. Si vous êtes en tort et que le montant des dommages est égal ou supérieur à votre franchise, alors nous ne prélèverons que le montant maximum.`,
  },
  {
    title : "2.2 Que se passe-t-il en cas de panne ?",
    message : `Même si nous ne mettons en location que des voitures bien entretenues, une panne peut toujours arriver. Nous comprenons à quel point c'est frustrant lorsque cela se produit pendant vos vacances. C'est pourquoi nous nous efforcerons de mettre à votre disposition une voiture de remplacement ou une assistance dépannage dès que possible. Vous trouverez le numéro de téléphone de notre assistance téléphonique ouverte 24/24 sur votre confirmation de réservation. Nos conseillers vous apporteront leur aide, quelle que soit la situation.`
  },
  {
    h1: "3 - Les règles de circulation routière",
    title: "3.1 Quelles sont les règles de circulation à respecter ?",
    message: `À l'île Seychelles, comme dans toutes les anciennes colonies britanniques, vous devez conduire à gauche. Sauf indication contraire, la limite de vitesse pour les autoroutes est de 90 km/h. Dans les villes, la vitesse est limitée à 50 km/h, et sur toutes les autres routes, à 60 km/h.`,
  },
  {
    title : "3.2 Ai-je besoin d'un permis de conduire international ?",
    message : `A l'île Seychelles, les touristes ont le droit d'utiliser leur permis de conduire habituel pour une durée limitée de 4 semaines. Pour en savoir plus, vérifiez dans quels cas un permis de conduire international est nécessaire.`
  },
  {
    h1: "4 - Politique d'assurance et de responsabilité",
    title: "4.1 Quelles sont les assurances incluses dans la location ?",
    message: `Toutes les voitures de Eva Car Rental ont une assurance multirisque, incluant la protection contre le vol et une assurance responsabilité civile. L'assurance couvre tous les cas sauf les accidents occasionnés par la conduite sous influence, la violation des termes de la location ou la négligence coupable. La perte ou les dommages des clés du véhicule et des biens personnels ne sont pas couverts. D'autres éléments non couverts par l'assurance (ex: les pneus) vous seront présentés lors de la procédure de réservation en fonction de votre choix du pack d'assurance.`,
  },
  {
    title : "4.2 Doit-on payer une franchise en cas de dégâts ou de sinistre ?",
    message : `Vous pouvez choisir entre plusieurs packs d'assurances pendant la procédure de réservation, une fois que vous avez choisi une voiture. La franchise est le montant minimal que vous avez à payer en cas de dommage remboursable. Les packs avec franchise réduite (SDCW) ou même à zéro franchise peuvent être disponibles avec un coût quotidien supplémentaire. Merci de noter que la franchise s'applique par accident.<br><br>
Informations spécifiques à Île Seychelles: À l'Île Seychelles, selon le véhicule que vous avez choisi, vous devrez payer une franchise de 15 000 RsMU (~314 €) à 35 000 RsMU (~734 €) en cas de dégât ou de sinistre. Il vous est possible d'éviter la franchise en payant des frais supplémentaires de 5,24 € à 13,62 € par jour non remboursable (option disponible seulement pour les réservations de 5 jours ou plus).<br><br>
Franchise de 15 000 RsMU pour : Suzuki Alto, Suzuki Alto K10, Hyundai i10.<br>
Franchise de 25 000 RsMU pour : Kia Picanto, Suzuki Spresso, Hyundai Grand i10, Mitsubishi Mirage, Nissan March, Renault Kwid Climber, Suzuki Celerio, Suzuki Swift, Toyota Vitz, Honda Jazz, Hyundai i20, Suzuki Dzire Sedan, Toyota Yaris, Suzuki Ciaz, Toyota Yaris Sedan, Honda City, Hyundai Accent, Kia Cerato, Nissan Almera, Nissan Tiida, Toyota Corolla, Toyota Corolla Axio, Toyota Starlet, Nissan NP300, Suzuki Ertiga, Suzuki Fronx, Suzuki Vitara Brezza, Toyota Avanza, Toyota Corolla Fielder, Hyundai Creta, Nissan Juke, Nissan Qashqai, Honda Mobilio, Mitsubishi L200 D, Nissan NV 200, Mini Moke.<br>
Franchise de 35 000 RsMU pour : Kia Seltos, Kia Carnival, Mitsubishi Sportero, Toyota Hilux, Hyundai ix35, Mini cabriolet, Nissan Navara, BMW X2, Toyota RAV4, BMW X1, Hyundai Tucson, Kia Sportage, Mitsubishi Eclipse Cross, Ford Fusion, Jaguar XF.`
  },
  {
    title : "4.3 Dois-je verser un dépôt de garantie ?",
    message : `L'acompte à déposer dépend du type de véhicule et de l'option d'assurance. Le montant sera affiché pendant le processus de réservation. Si vous choisissez une assurance sans franchise, vous aurez quand même à déposer un (petit) acompte. Cela comptera par exemple pour les dommages non inclus dans l'assurance, le plein de carburant et les retours en retard. Vous pouvez payer l'acompte au moment de la livraison de la voiture, soit en espèces (dans la devise indiquée ou toute autre sur demande) ou par carte de crédit. Le montant sera normalement bloqué sur votre carte de crédit durant la période de location, ce qui va effectivement réduire votre limite de dépense. Merci de vérifier que le montant est disponible sur votre carte, et que le propriétaire de la carte est bien présent lors de la livraison. Si la voiture est restituée dans le même état que celui dans lequel vous l'avez prise, vous serez remboursés du montant total.<br><br>
Informations spécifiques à Île Seychelles: A l'île Seychelles, le dépôt de garantie est d'un minimum de 0 €.`
  },
  {
    title: "4.4 Qu'est-ce qui est couvert par l'assurance annulation ?",
    message: `Si vous annulez cette assurance, vous n'avez pas à payer de frais d'annulation tant que vous annulez votre réservation jusqu'à midi le jour de la livraison (heure locale). Même si vous annulez plus tard, vous ne paierez que pour une journée de location. Si vous devez restituer le véhicule plus tôt, l'assurance va aussi couvrir les frais d'annulation si vous pouvez prouver que vous n'étiez plus apte à poursuivre votre location . Comme preuve, nous acceptons par exemple un billet d'avion émis après le jour de la livraison. L'annulation des dépenses d'assurance peut être achetée à un prix de 16 € quelle que soit la durée de votre location.`,
  },
  {
    h1: " 5 - Tarifs et autres conditions de location",
    title: " 5.1 Comment les prix sont-ils calculés ?",
    message: `Les prix affichés chez Eva Car Rental sont saisonniers. Par ailleurs, nous appliquons automatiquement des remises en fonction de la durée de la location. Le prix exact dépend du type de voiture. Pour connaître les détails, suivez ces consignes : Rendez-vous sur la page "Voitures et tarifs" et maintenez votre curseur au-dessus du prix de la voiture qui vous intéresse. Bien sûr, notre système de réservation calcule le prix total automatiquement une fois que vous renseignez la durée de location.
    <br><br>
Informations spécifiques à Île Seychelles: A l'île Seychelles, nous suivons ce cycle saisonnier :<br>
01.01. - 14.01. haute saison<br>
15.01. - 31.01. mi-saison<br>
01.02. - 31.03. saison basse<br>
01.04. - 30.04. mi-saison<br>
01.05. - 30.09. saison basse<br>
01.10. - 31.10. mi-saison<br>
01.11. - 30.11 haute saison<br>
01.12. - 15.12. mi-saison<br>
16.12. - 31.12. haute saison<br>
<br><br>
Si votre réservation s'étale sur sept jours ou plus, vous êtes éligible à la remise de niveau 1. Si elle s'étale sur dix jours ou plus, vous êtes éligible à la remise de niveau 2.`,
  },
  {
    title: "5.2 Quelles sont les devises acceptées ?",
    message: `Le paiement en ligne par carte de crédit peut être fait en euros (EUR), livres britanniques (GBP) et dollars américains (USD). Le paiement par virement bancaire ou via PayPal ne peut être réalisé qu'en euros. Si vous voyez des prix affichés dans d'autres devises sur notre site web, c'est seulement à titre indicatif. Nous nous efforçons de déterminer votre devise préférée de manière automatique, en nous basant sur votre pays de connexion. Vous pouvez modifier la devise affichée en utilisant le menu déroulant dans le coin supérieur droit de toutes nos pages.`,
  },
  {
    title: "5.3 Où puis-je récupérer ma voiture de location ?",
    message: `Vous pouvez soit la récupérer à l'aéroport, soit demander à ce qu'elle vous soit livrée à l'endroit de votre choix. Précisez-nous simplement le lieu et l'heure du départ/retour, et un chauffeur vous y attendra. Dans certaines régions, la livraison de la voiture est déjà incluse dans le prix. Malheureusement, dans le cas de régions reculées, nous devons vous facturer un petit supplément. Le prix de livraison de la voiture est inclus par défaut dans les prix affichés sur notre site.`,
  },
  {
    title: "5.4 Puis-je choisir des endroits différents pour la livraison et la restitution du véhicule ?",
    message: `Oui. Et comme Seychelles est une si petite île, nous ne facturons pas de frais supplémentaires.`,
  },
  {
    title: "5.5 Le réservoir d'essence est-il plein lors de l'enlèvement de la voiture ?",
    message: `Nous ne garantissons pas que le réservoir sera plein au moment de la livraison. Nous garantissons néanmoins qu'il y aura suffisamment d'essence pour arriver à la station-service la plus proche. La voiture doit nous être restituée avec la même quantité d'essence que lors de la livraison.`,
  },
  {
    h1: "6 - Conditions de paiement",
    title: "6.1 Ai-je besoin d'une carte de crédit ?",
    message: `Non, vous pouvez aussi payer par virement bancaire ou via PayPal. Veuillez noter que si vous ne possédez pas de carte de crédit, vous pourriez être tenu de payer le dépôt de garantie en espèces. Plus d'infos sur le dépôt de garantie`,
  },
  {
    title: "6.2 Comment puis-je payer via Paypal ?",
    message: `Après avoir effectué votre réservation, vous recevrez un email de confirmation. Dans cet email, vous trouverez un espace affichant le logo PayPal à droite. A gauche, vous trouverez un lien qui vous conduira directement chez PayPal, avec les données de paiement pré-configurées. La transaction pourra être effectuée une fois que vous aurez saisi votre login. Si vous ne possédez pas de compte PayPal, vous pouvez vous inscrire gratuitement ou essayer PayPal en tant qu'invité.`,
  },
  {
    title: "6.3 Puis-je payer la voiture lors de sa livraison ?",
    message: `Les prix mentionnés sur notre site sont les tarifs en pré-paiement, vous devez donc régler à l'avance. Cependant, il y a deux exceptions :
<br><br>
Si vous optez pour notre assurance annulation, vous pouvez choisir de payer la voiture en espèces lors de sa livraison. Les frais de cette assurance doivent cependant être payés à l'avance. Pour ce faire, vous pouvez choisir l'un des modes de paiement habituels.
<br><br>
Pour les réservations de dernière minute (moins de 48 heures avant la livraison), il est généralement possible de payer sur place, même si vous ne prenez pas l'assurance.
<br><br>
Nous avons mis en place cette politique pour garantir le sérieux de votre réservation. Nous mettons en effet de côté une voiture pour vous, que nous livrons à votre convenance.`,
  },
  {
    title: "6.4 Quand et comment dois-je payer le dépôt de garantie ?",
    message: `Voir Dois-je verser un dépôt de garantie ?`,
  },
  {
    h1: "7 - À propos de Eva Car Rental",
    title: "7.1 Quels sont les atouts de Eva Car Rental ?",
    message: `Eva Car Rental vous apporte qualité et de fiabilité. Nous maintenons des normes élevées, parce que nous travaillons en étroite collaboration avec nos partenaires. Souvent, ces partenaires travaillent également pour de grands groupes de location de voitures. Dans ce cas de figure, il arrive que chaque partenaire ait sa propre politique, et cela peut devenir un véritable casse-tête pour les clients. Contrairement à d'autres sociétés, parce que nous travaillons en étroite collaboration avec nos partenaires, nous sommes en mesure de fournir un processus de location normalisé qui facilite la location de véhicules pour nos clients et leur permet de profiter de leurs vacances. Le prix est un autre atout indéniable de la location chez Eva Car Rental. Par rapport aux grandes sociétés de location où les clients paient davantage en raison principalement de programmes de marketing coûteux, chez Eva Car Rental, vous pouvez bénéficier des mêmes voitures pour un coût réduit, et profiter ainsi pleinement de l'argent économisé.
    <br><br>
Informations spécifiques à Île Seychelles: Eva Car Rental travaille avec de nombreux partenaires à l'île Seychelles, qui se sont avérés être des partenaires fiables et dignes de confiance au fil des années. Lorsqu'un problème survient malgré tout avec votre location, nous allons vous aider d'un point de vue neutre. L'avantage d'avoir plusieurs partenaires est que nous allons transférer votre réservation au partenaire qui a les frais de livraison vers votre hôtel les moins chers. Par conséquent, les frais de livraison peuvent varier pour chaque modèle de voiture et dépendent aussi de la disponibilité des voitures.
Tous les clients qui louent une voiture chez nous pour cinq jours ou plus recevront un système de navigation par satellite gratuit. Malheureusement, l'île Seychelles n'est pas financièrement significative pour les grandes compagnies de systèmes de navigation comme Garmin et Tom Tom. C'est pourquoi leurs cartes sont obsolètes et contiennent beaucoup d'erreurs. Auparavant, il nous arrivait souvent de recevoir des plaintes de clients guidés loin de l'itinéraire dans un champ de canne à sucre où ils avaient fait un grand détour à cause de mauvaises cartes. Aussi, nous avons décidé de mettre en place notre propre version de cette carte que nous pouvons actualiser indépendamment et plus rapidement que les autres sociétés de location de voiture à l'île Seychelles. En plus, nous y avons entré une liste des plages publiques renommées ainsi que celles qui sont peu connues à Seychelles, et notre dispositif GPS vous avertira également en cas de contrôles radars connus et de zones dangereuses.`,
  },
  {
    title: "7.2 De qui est constituée l'équipe de Eva Car Rental ?",
    message: `Eva Car Rental est une marque appartenant à Indian Ocean Travel. Nous sommes sur le marché de la location de voitures et dans le domaine du voyage depuis plus de 15 ans, et nous avons fait nos débuts sur le marché mauricien. Le siège social est situé à l'île Seychelles, mais nous nous sommes développés dans le monde entier, et nous avons désormais des équipes en Allemagne et en Roumanie. Nos collaborateurs parlent couramment l'anglais, le français, et l'allemand.`,
  },
  {
    title: "7.3 La réservation de voiture en ligne avec Eva Car Rental est-elle sécurisée ?",
    message: `Nous vous garantissons une réservation de voiture 100% sécurisée et votre argent est protégé. Voici pourquoi :
    <br><br>
a) Si l'un de nos fournisseurs rencontre des difficultés financières, votre argent est toujours en sécurité. Chez Eva Car Rental, nous ne touchons pas à vos fonds avant le retour du véhicule.
<br><br>
b) Il y a très peu de risque que nous fassions faillite, parce qu'en tant que courtier, nous avons beaucoup moins de procédures financières qu'une agence de location de voitures. Nous sommes très expérimentés dans le traitement de grandes quantités d'argent externe.
<br><br>
c) Grâce à notre système, payer vos factures en ligne est fiable et sécurisé. Nous n'avons pas accès à vos données financières. Si vous payez avec une carte de crédit ou via PayPal, le paiement est effectué directement par les serveurs de notre banque. Ceux qui déclarent être protégés contre le piratage ne savent pas de quoi ils parlent. Mais s'il n'y a rien à gagner pour un pirate, nous pouvons tous dormir sur nos deux oreilles.`,
  },
];

const isIconChanged = ref(Array(dataAuto.length).fill(false));
const searchQuery = ref("");

const filteredData = computed(() => {
  return dataAuto.filter((item) =>
    item.message.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const toggleIconNext = (index) => {
  isIconChanged.value[index] = !isIconChanged.value[index];
};

const isVisible = ref(true);

const handleClick = () => {
  isVisible.value = false;
};
</script>

<style lang="scss" scoped>
.custom-hover:hover {
  color: #6dace6;
}
.divsearch {
  background-color: #fff;
  padding: 20px;
  color: #2d3e52;
}
.divisionsear {
  position: relative;
}
.spanserch {
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #899e27;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.formcont {
  border-radius: 8px;
  height: 50px;
}
.search-title {
  font-size: 20px;
  padding: 8px 0px;
  color: #2d3e52;
}
.ulsearch {
  background-color: #f5f5f5;
  margin-top: 20px;
  padding: 20px;
  position: sticky;
  top: 70px;
}
.lisearch {
  margin-top: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: #2d3e52;
}
.lisearch:hover {
  color: #4a9fef;
  border-left: 1px solid #4a9fef;
}

/* example */
.divi1 {
  background-color: #f5cf77;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.div1 {
  /* background-color: #899e27; */
  width: 10%;
  padding: 5px;
}
.div2 {
  /* background-color: aquamarine; */
  width: 80%;
}
.div3 {
  /* background-color: crimson; */
  width: 5%;
}
.span1 {
  /* background-color: chartreuse; */
  font-size: 2rem;
  color: #2d3e52;
}
.param1 {
  /* background-color: lightpink; */
  padding: 15px 0px;
  font-weight: bold;
  color: #2d3e52;
}
.spanicone1 {
  /* background-color: slategray; */
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
}
/* style param */
.h1faq {
  background-color: #f5f5f5;
  font-size: 20px;
  margin-top: 20px;
  color: #2d3e52;
  width: 100%;
  display: flex;
  border-radius: 10px;
}
.h1faq a {
  width: 90%;
  // background-color: red;
  padding: 5px 10px;
}
.h1faq span {
  width: 10%;
  // background-color: #f5cf77;
  font-size: 1.2rem;
  padding: 5px 15px;
  color: #333;
  font-weight: 900;
  text-align: center;
  padding: 10px 0px;
}
a {
  color: #333;
}
.paramfaq {
  // background-color: #f5cf77;
  margin-top: 10px;
  text-align: justify;
  border: none;
}
li {
  list-style: none;
}
.bi-chevron-down,
.bi-chevron-up {
  //   transition: transform 0.5s ease;
  cursor: pointer;
}
.division-position {
  position: relative;
  // background-color: red;
}
.res-position {
  height: 160px;
  // background-color: red;
  display: none;
}
h4{
  padding: 10px;
}
@media (max-width: 768px) {
  .ulsearch {
    display: none;
  }
  .res-position {
    display: flex;
  }
  .divsearch {
    position: absolute;
    top: 185px;
    width: 95%;
    margin-bottom: 100px;
    // background: red;
  }
  .div3 {
    display: none;
  }
}

@media (max-width: 376px) {
  .param1 {
    padding: 15px;
    text-align: justify;
  }
}
</style>
