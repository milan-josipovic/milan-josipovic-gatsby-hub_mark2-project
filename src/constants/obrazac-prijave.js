export default {
    title: "Obrazac prijave ",
    description: "Konkurs je otvoren za sve koji imaju ideje, a nemaju tim, kao i one koji bi da se priključe pojedincu ili timu koji već radi na svojoj startup ideji.   Cilj je da povežemo kandidate koji bi da se uključe u startup zajednicu i zakorače u svet preduzetništva.   Upoznaćete ljude sa zanimljivim idejama i kandidate sa odličnim veštinama iz raznih oblasti .   Uz prijavu poslati CV.",
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "text",
        name: "question1",
        title: "E-mail",
        isRequired: true,
        inputType: "email"
       },
       {
        type: "text",
        name: "question2",
        title: "Ime i Prezime",
        isRequired: true
       },
       {
        type: "text",
        name: "question3",
        title: "Telefon",
        isRequired: true,
        inputType: "number"
       },
       {
        type: "text",
        name: "question4",
        title: "Obrazovanje (stepen i ime obrazovne institucije) ",
        isRequired: true
       },
       {
        type: "radiogroup",
        name: "question5",
        title: "Imate li startup ideju? ",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "DA"
         },
         {
          value: "item2",
          text: "NE"
         }
        ]
       },
       {
        type: "checkbox",
        name: "question6",
        title: "Koja su tvoja znanja i veštine:",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Programiranje"
         },
         {
          value: "item2",
          text: "Dizajn"
         },
         {
          value: "item3",
          text: "Marketing"
         },
         {
          value: "item4",
          text: "Prodaja"
         },
         {
          value: "item5",
          text: "Biznis Razvoj"
         },
         {
          value: "item6",
          text: "Razvoj"
         }
        ]
       },
       {
        type: "comment",
        name: "question7",
        title: "Ostalo"
       },
       {
        type: "comment",
        name: "question8",
        title: "Zašto želiš da se priključiš startapu? ",
        isRequired: true
       },
       {
        type: "radiogroup",
        name: "question9",
        title: "Koliko znaš o preduzetništvu? ",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Nimalo"
         },
         {
          value: "item2",
          text: "U procesu sam učenja"
         },
         {
          value: "item3",
          text: "Znam dosta"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question10",
        title: "Da li biste se prijavili za program u kom bi razvijali svoju startup ideju? ",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "DA"
         },
         {
          value: "item2",
          text: "NE"
         }
        ]
       },
       {
        type: "file",
        name: "question12",
        title: "Vaš CV",
        storeDataAsText: false,
        waitForUpload: true,
        maxSize: 2097152
       }
      ]
     }
    ]
   }