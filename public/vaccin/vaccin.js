const messages = {
    q1: {
        correct: "Très bien ! Voici plus d'information pour vous:",
        incorrect: "C'est pas grave voici la réponse:",
        explication: "Pour faire simple, un vaccin est comme une maladie affaiblie qui permet à notre système immunitaire de se protéger contre des futurs agents pathogènes. Il aide aussi à prévenir, ou à rappeler à nos cellules comment se défendre contre une bactérie ou un virus. Certains vaccins peuvent même être perçu comme un boost pour les anticorps que nous produisant afin d’améliorer notre santé. En bref, il permet une meilleure immunité. ",
        lien: "https://immunize.ca/fr/quest-ce-que-la-vaccination"
    },
    q2: {
        correct: "Bonne réponse !",
        incorrect: "Mauvaise réponse.",
        explication: "En effet, il y a de nombreux effets secondaires suites a des vaccins. Nous pouvons allez d’une simple fatigue a une fièvre, voir à une réaction allergique dans certain cas de figure.",
        lien: "https://ici.radio-canada.ca/nouvelle/2042558/pandemie-maladie-virus-infection-sante"
    },
    q3: {
        correct: "Bonne réponse!",
        incorrect: "Mauvaise réponse.",
        explication: "Selon canada.com il est efficace mais pas totalement ; <<Certains vaccins sont très efficaces pour nous empêcher d'être infectés par un virus ou une bactérie, comme les vaccins contre la rougeole ou le méningocoque. D'autres vaccins peuvent diminuer les risques d'infection. Cependant, si nous sommes infectés, ces vaccins nous aident à éviter de tomber vraiment malades, comme les vaccins contre la grippe et la COVID-19.>> en bref, pas tous les vaccins sont radicaux, certains réduisent seulement la malade et d’autre l’empêche de se manifester. ",
        lien: "https://www.canada.ca/fr/sante-publique/services/vaccinations-pour-enfants.html?utm_campaign=hc-sc-childhood-vaccination-24-25&utm_medium=sem&utm_source=ggl&utm_content=ad-text-fr&utm_term=effets%20secondaires%20vaccin&adv=2425-578250&id_campaign=21359294360&id_source=166236163827&id_content=701538256297&gad_source=1&gclid=Cj0KCQjw7ZO0BhDYARIsAFttkCjNd2WQt66SRHtUPBRi8oWFByu235KrmVZArVpnCM9jiL7w-8knSpkaAjYEEALw_wcB&gclsrc=aw.ds"
    },
    q4: {
        correct: "Bonne réponse!",
        incorrect: "Mauvaise réponse.",
        explication: "En effet, ceci est seulement de l’imaginaire commun de la société. En réalité, ce ne sont que de fausses rumeurs qui ont émergé avec l’arrivée du covid-19.",
        lien: "https://factuel.afp.com/non-les-vaccins-anti-covid-ne-contiennent-pas-de-puces-magnetiques"
    },
    q5: {
        correct: "Bonne réponse!",
        incorrect: "Mauvaise réponse.",
        explication: "En effet, il n'y a aucune preuve crédible soutenant cette affirmation. La grande majorité des scientifiques et des experts en santé publique affirment que le virus a une origine zoonotique, ce qui signifie qu'il a transmis des animaux aux humains. ",
        lien: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/origins-of-the-virus"
    },
    q6: {
        correct: "Bonne réponse!",
        incorrect: "Mauvaise réponse.",
        explication: "En effet, les vaccins contre la COVID-19 n'ont aucun impact sur votre ADN. Ils ne font qu'introduire dans votre organisme une version inactive ou affaiblie du virus, ou une partie de celui-ci, pour apprendre à votre système immunitaire à le reconnaître et à le combattre. ",
        lien: "https://factuel.afp.com/covid-19-non-les-vaccins-arn-ne-modifient-pas-les-genes-des-patients"
    },
    q7: {
        correct: "Bonne réponse!",
        incorrect: "Mauvaise réponse.",
        explication: "En effet, le port du masque est un moyen efficace de réduire la transmission du virus, surtout dans les espaces intérieurs ou les endroits bondés. Les masques agissent en bloquant les gouttelettes respiratoires qui peuvent contenir le virus lorsqu'une personne infectée tousse, éternue ou parle. ",
        lien: "https://ccnse.ca/resources/evidence-reviews/les-masques-et-la-pandemie-de-covid-19-etat-des-connaissances"
    },
    q8: {
        correct: "Bonne réponse!",
        incorrect: "Mauvaise réponse.",
        explication: "Bien que la grippe puisse être grave, la COVID-19 s'est avérée être un virus beaucoup plus transmissible et mortel. Elle a également entraîné un plus grand nombre d'hospitalisations et de décès, en particulier parmi les personnes âgées et celles souffrant de problèmes de santé sous-jacents. ",
        lien: "https://www.inserm.fr/actualite/grippe-et-covid-19-participez-a-la-surveillance-des-infections-respiratoires-de-lhiver-2023-2024/"
    },
    q9: {
        correct: "Bonne réponse!",
        incorrect: "Mauvaise réponse.",
        explication: "En effet, les tests PCR (réaction en chaîne par polymérase) sont un outil important et fiable pour diagnostiquer la présence active du virus COVID-19. Ces tests détectent le matériel génétique du virus dans un échantillon respiratoire prélevé par écouvillonnage. ",
        lien: "https://presse.inserm.fr/canal-detox/des-tests-pour-tous-vraiment/"
    }
};

function submitQuestion(questionId, correctAnswer) {
    const questionElement = document.getElementById(questionId);
    const radios = questionElement.querySelectorAll('input[type="radio"]');
    let userAnswer;

    radios.forEach(radio => {
        if (radio.checked) {
            userAnswer = radio.value;
        }
    });

    const resultElement = questionElement.querySelector('.result');
    const resultat = document.getElementById("resultat");

    if (userAnswer === undefined) {
        resultElement.innerHTML = '<span style="color: orange;">Veuillez sélectionner une réponse.</span>';
    } else if (userAnswer === correctAnswer) {
        resultElement.innerHTML = `<span style="color: green;">${messages[questionId].correct}</span>`;
        resultat.innerHTML = `<p>${messages[questionId].explication}</p><a href="${messages[questionId].lien}" target="_blank">En savoir plus</a>`;
    } else {
        resultElement.innerHTML = `<span style="color: red;">${messages[questionId].incorrect}</span>`;
        resultat.innerHTML = `<p>${messages[questionId].explication}</p><a href="${messages[questionId].lien}" target="_blank">En savoir plus</a>`;
    }
}

function showNextQuestion(question) {
    window.location.href = `/vaccin/${question + 1}`
}

