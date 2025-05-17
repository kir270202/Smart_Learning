/* eslint-disable */
const items = [
  {
  identifier: "algorithms-question",
  guid: "algorithms-question",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="algorithms-question" title="Algorithmus Definition" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
    <qti-correct-response>
      <qti-value>2</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <qti-choice-interaction response-identifier="RESPONSE" max-choices="1">
      <qti-prompt>Was beschreibt ein Algorithmus in der Informatik?</qti-prompt>
      <qti-simple-choice identifier="0">Ein Programm</qti-simple-choice>
      <qti-simple-choice identifier="1">Eine Hardwarekomponente</qti-simple-choice>
      <qti-simple-choice identifier="2">Eine endliche Folge von Anweisungen</qti-simple-choice>
      <qti-simple-choice identifier="3">Ein Datenformat</qti-simple-choice>
    </qti-choice-interaction>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "bit-question",
  guid: "bit-question",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="bit-question" title="Bit" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string">
    <qti-correct-response>
      <qti-value>Bit</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <p>Wie nennt man den kleinstmöglichen Speicherbereich in der digitalen Datenverarbeitung?</p>
    <qti-text-entry-interaction response-identifier="RESPONSE" expected-length="10"/>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "byte-question",
  guid: "byte-question",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="byte-question" title="Byte Aufbau" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string">
    <qti-correct-response>
      <qti-value>8</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <p>
      Ein Byte besteht aus
      <qti-text-entry-interaction response-identifier="RESPONSE" expected-length="2"/>
      Bits.
    </p>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "turing-question",
  guid: "turing-question",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="turing-question" title="Turingmaschinen" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="multiple" base-type="identifier">
    <qti-correct-response>
      <qti-value>0</qti-value>
      <qti-value>1</qti-value>
      <qti-value>2</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <qti-choice-interaction response-identifier="RESPONSE" max-choices="4">
      <qti-prompt>Welche Aussagen treffen auf Turingmaschinen zu?</qti-prompt>
      <qti-simple-choice identifier="0">Sie sind theoretische Modelle zur Beschreibung von Berechnungen.</qti-simple-choice>
      <qti-simple-choice identifier="1">Sie haben unbegrenzten Speicher.</qti-simple-choice>
      <qti-simple-choice identifier="2">Sie können jede berechenbare Funktion ausführen.</qti-simple-choice>
      <qti-simple-choice identifier="3">Sie bestehen aus CPU und RAM.</qti-simple-choice>
    </qti-choice-interaction>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "https",
  guid: "https",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="https" title="Sicheres Web-Protokoll" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string">
    <qti-correct-response>
      <qti-value>HTTPS</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <p>
      Das Protokoll zur sicheren Übertragung im Web heißt
      <qti-text-entry-interaction response-identifier="RESPONSE" expected-length="10"/>
    </p>
  </qti-item-body>

    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>

</qti-assessment-item>
`
},
{
  identifier: "ip_adresse",
  guid: "ip_adresse",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="ip_adresse" title="IP-Adresse" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string">
    <qti-correct-response>
      <qti-value>IP-Adresse</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <p>Wie nennt man eine eindeutige Adresse eines Geräts im Netzwerk?</p>
    <qti-text-entry-interaction response-identifier="RESPONSE" expected-length="15"/>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "primarschluessel",
  guid: "primarschluessel",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="primarschluessel" title="Primärschlüssel Frage" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
    <qti-correct-response>
      <qti-value>choice0</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>1.0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <qti-choice-interaction response-identifier="RESPONSE" shuffle="false" max-choices="1">
      <qti-prompt>Was ist ein Primärschlüssel in einer Datenbank?</qti-prompt>
      <qti-simple-choice identifier="choice0">Ein eindeutiges Attribut</qti-simple-choice>
      <qti-simple-choice identifier="choice1">Ein Fremdschlüssel</qti-simple-choice>
      <qti-simple-choice identifier="choice2">Ein Datenbankname</qti-simple-choice>
      <qti-simple-choice identifier="choice3">Ein SQL-Befehl</qti-simple-choice>
    </qti-choice-interaction>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "protokolle",
  guid: "protokolle",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="protokolle" title="Protokolle" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="multiple" base-type="identifier">
    <qti-correct-response>
      <qti-value>HTTP</qti-value>
      <qti-value>FTP</qti-value>
      <qti-value>SMTP</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <qti-choice-interaction response-identifier="RESPONSE" max-choices="3">
      <qti-prompt>Welche Protokolle gehören zum TCP/IP-Modell?</qti-prompt>
      <qti-simple-choice identifier="HTTP">HTTP</qti-simple-choice>
      <qti-simple-choice identifier="FTP">FTP</qti-simple-choice>
      <qti-simple-choice identifier="SMTP">SMTP</qti-simple-choice>
      <qti-simple-choice identifier="Bluetooth">Bluetooth</qti-simple-choice>
    </qti-choice-interaction>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "router",
  guid: "router",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="router" title="Router Aufgabe" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
    <qti-correct-response>
      <qti-value>choice2</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>1.0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <qti-choice-interaction response-identifier="RESPONSE" shuffle="false" max-choices="1">
      <qti-prompt>Was ist die Aufgabe eines Routers im Netzwerk?</qti-prompt>
      <qti-simple-choice identifier="choice0">Verwalten von Datenbanken</qti-simple-choice>
      <qti-simple-choice identifier="choice1">Speichern von Passwörtern</qti-simple-choice>
      <qti-simple-choice identifier="choice2">Weiterleiten von Datenpaketen</qti-simple-choice>
      <qti-simple-choice identifier="choice3">Blockieren von Webseiten</qti-simple-choice>
    </qti-choice-interaction>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
},
{
  identifier: "sql_erstellen",
  guid: "sql_erstellen",
  submissionMode: "simultaneous",
  xml: `
<qti-assessment-item identifier="sql_erstellen" title="SQL Tabelle erstellen" adaptive="false" time-dependent="false">
  <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string">
    <qti-correct-response>
      <qti-value>CREATE</qti-value>
    </qti-correct-response>
  </qti-response-declaration>

  <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
    <qti-default-value>
      <qti-value>1.0</qti-value>
    </qti-default-value>
  </qti-outcome-declaration>

  <qti-item-body>
    <p>Mit welchem Befehl kann man in SQL eine neue Tabelle erstellen?</p>
    <qti-text-entry-interaction response-identifier="RESPONSE" expected-length="10"/>
  </qti-item-body>

  <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
`
}

  
]

/* eslint-enable */
export class ItemFactory {

  constructor () {
    this.items = items
    return this
  }

  loadAll () {
    return this.items
  }

  /**
   * @description Fetch all the items in the itemList.
   * @param {Array} testItemList - array of objects.
   */
  loadItems (testItemList) {
    let items = []

    testItemList.forEach((testItemObject) => {
      let itemIndex = this.items.findIndex(item => item.identifier == testItemObject.identifier)

      if (itemIndex < 0) return

      // Found the item.
      // Add sessionControl from the testItemObject sessionControl prop.
      this.items[itemIndex].sessionControl = testItemObject.sessionControl
      //Add it to our result
      items.push(this.items[itemIndex])
    }, this)

    return items
  }

}
