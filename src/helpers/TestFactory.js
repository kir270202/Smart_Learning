/* eslint-disable */
const tests = [
  {
  "id": "1",
  "title": "Grundlagen der Informatik Test",
  "description": "Dieser Test prüft Ihr Wissen zu den Grundlagen der Informatik.",
  "items": [
    {
      "identifier": "algorithms-question",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    },
    {
      "identifier": "bit-question",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    },
    {
      "identifier": "byte-question",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    },
    {
      "identifier": "turing-question",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    }
  ]
},

{
  "id": "2",
  "title": "Grundlagen der Datenbanken Test",
  "description": "Dieser Test prüft Ihr Wissen zu den Grundlagen der Datenbanken.",
  "items": [
    {
      "identifier": "primarschluessel",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    },
    {
      "identifier": "sql_erstellen",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    }
  ]
},

{
  "id": "3",
  "title": "Grundlagen der Netzwerke Test",
  "description": "Dieser Test prüft Ihr Wissen zu den Grundlagen der Netzwerke.",
  "items": [
    {
      "identifier": "router",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    },
    {
      "identifier": "ip_adresse",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    },
    {
      "identifier": "protokolle",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    },
    {
      "identifier": "https",
      "sessionControl": {
        "showFeedback": true,
        "validateResponses": true,
        "submissionMode": "simultaneous"
      }
    }
  ]
}



]

/* eslint-enable */
export class TestFactory {

  constructor () {
    this.tests = tests
    return this
  }

  load () {
    return this.tests
  }

  getById (id) {
    return this.tests.find(test => test.id === id)
  }

}
