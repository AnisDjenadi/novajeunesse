const messages = {
    q1: {
        correct: "Selon plusieurs articles, le 7 octobre 2023 est un jour de massacre, car le peuple israélien s’est fait attaquer par le Hamas. En réalité il n’en est rien, d’après le club, le Hamas a attaqué une base militaire de communication, afin d’affaiblir le réseau d’information des Israéliens et ils profitent du chaos pour prendre des otages dans des villes afin de marchander avec le peuple d’Israël, pour obtenir plus de droit. Malgré une attaque contre l’armée juive, le gouvernement israélien profite du moment de confusion, afin d’attaquer des civiles et le mettre sur le dos de la bande de gaza, afin de pouvoir justifier leur futur génocide.",
        incorrect: "Selon plusieurs articles, le 7 octobre 2023 est un jour de massacre, car le peuple israélien s’est fait attaquer par le Hamas. En réalité il n’en est rien, d’après le club, le Hamas a attaqué une base militaire de communication, afin d’affaiblir le réseau d’information des Israéliens et ils profitent du chaos pour prendre des otages dans des villes afin de marchander avec le peuple d’Israël, pour obtenir plus de droit. Malgré une attaque contre l’armée juive, le gouvernement israélien profite du moment de confusion, afin d’attaquer des civiles et le mettre sur le dos de la bande de gaza, afin de pouvoir justifier leur futur génocide."
    },
    q2: {
        correct: "Bonne réponse! Le soleil est une étoile.",
        incorrect: "Mauvaise réponse. Le soleil est une étoile."
    },
    q3: {
        correct: "Bonne réponse! Le vaccin contre le Covid-19 ne contient pas de microchip.",
        incorrect: "Mauvaise réponse. Le vaccin contre le Covid-19 ne contient pas de microchip."
    },
    q4: {
        correct: "Bonne réponse! Aucun vaccin n'est efficace à 100%.",
        incorrect: "Mauvaise réponse. Aucun vaccin n'est efficace à 100%."
    },
    q5: {
        correct: "Bonne réponse! Les vaccins contre le Covid-19 ont été testés pour leur sécurité.",
        incorrect: "Mauvaise réponse. Les vaccins contre le Covid-19 ont été testés pour leur sécurité."
    },
    q6: {
        correct: "Bonne réponse! Les vaccins contre le Covid-19 ne modifient pas votre ADN.",
        incorrect: "Mauvaise réponse. Les vaccins contre le Covid-19 ne modifient pas votre ADN."
    },
    q7: {
        correct: "Bonne réponse! Le vaccin contre le Covid-19 ne peut pas vous donner la maladie.",
        incorrect: "Mauvaise réponse. Le vaccin contre le Covid-19 ne peut pas vous donner la maladie."
    },
    q8: {
        correct: "Bonne réponse! Le vaccin contre le Covid-19 n'est pas obligatoire pour tous.",
        incorrect: "Mauvaise réponse. Le vaccin contre le Covid-19 n'est pas obligatoire pour tous."
    },
    q9: {
        correct: "Bonne réponse! Le vaccin contre le Covid-19 ne protège pas contre toutes les variantes du virus.",
        incorrect: "Mauvaise réponse. Le vaccin contre le Covid-19 ne protège pas contre toutes les variantes du virus."
    },
    q10: {
        correct: "Bonne réponse! Les vaccins contre le Covid-19 sont efficaces plus longtemps que quelques mois.",
        incorrect: "Mauvaise réponse. Les vaccins contre le Covid-19 sont efficaces plus longtemps que quelques mois."
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
    
    if (userAnswer === undefined) {
        resultElement.textContent = 'Veuillez sélectionner une réponse.';
        resultElement.style.color = 'orange';
    } else if (userAnswer === correctAnswer) {
        resultElement.textContent = messages[questionId].correct;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = messages[questionId].incorrect;
        resultElement.style.color = 'red';
    }
}
