# Opdracht: React Hooks Form

Deze opdracht hoort bij de tweede les over react. In de opdracht zullen zowel zaken die in de voorbereiding als zaken die in de les zelf zijn behandeld gebruikt worden. Om het gevoel van ‘de praktijk’ meer naar de opdracht te halen is de opzet zoals deze in een userstory gebruikt kan worden.

---

>Als klant wil een formulier waarmee ik aan kan geven welke welk huisdier ik tof vind

## Context

Voor een onderzoek naar …. willen we de gegevens van onze deelnemers kunnen registreren om verder onderzoek uit te kunnen voeren naar ….

## Acceptatie Criteria

* De applicatie is gebouwd met create-react-app
* De applicatie maakt gebruik van react-hook-form
* Het formulier heeft de volgende velden:
  * Voornaam:
    * Verplicht
  * Achternaam:
    * Verplicht
  * Leeftijd:
    * Verplicht
    * Minimaal 18 jaar
  * Postcode:
    * Verplicht
    * Valide postcode (bonus)
  * Huisnummer zonder toevoeging:
    * Verplicht
  * Radiobuttons Favoriete huisdier:
    * Opties: kat, hond, hamster, muis, anders
    * Verplicht
  * Ander huisdier
    * Verplicht bij optie anders
    * Wordt alleen getoond als optie anders is geselecteerd
  * Opmerking
    * Textarea
  * Akkoord met de voorwaarden
  * Verzendbutton

* Alle velden worden gevalideerd tijdens typen
* Bij success versturen wordt er een melding getoond dat het versturen succesvol was
* Bij een error tijdens versturen wordt er een error-melding getoond
* Het klikken op een label activeert de input

## Notes
* Styling is niet relevant
* Probeer zoveel mogelijk gebruik te maken van mappen structuur. Doe je het liever in 1 component, is dat zeker geen probleem
* Laat het weten als je vragen hebt

### Tip voor de folder struct
Atoms: input field, button, label, error-message,
Molecules: form-field > Deze bestaat uit een section met daarbinnen eenlabel, input en error component
Organism: Het formulier

## Extra handvat
* De voorbeelden uit de les staan: https://codesandbox.io/u/navelpluisje/sandboxes en beginnen allemaal met `React Hook Form`