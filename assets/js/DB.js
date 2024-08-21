const drugs = [
    {
        name: "Heroin",
        use: ["Heroin is an opioid drug made from morphine and is typically used for its euphoric effects."],
        precaution: [
            "Heroin is illegal and highly addictive.",
            "Use can result in fatal overdose.",
            "Sharing needles can lead to the spread of diseases like HIV/AIDS and hepatitis."
        ],
        sideEffect: [
            "SHORT-TERM: Euphoria, dry mouth, warm flushing of the skin, heavy feeling in the hands and feet, clouded mental functioning, and drowsiness.",
            "LONG-TERM: Collapsed veins, infection of the heart lining and valves, abscesses, constipation, liver or kidney disease, and lung complications."
        ]
    },
    {
        name: "Methamphetamine (Meth)",
        use: ["Meth is a powerful, highly addictive stimulant that affects the central nervous system."],
        precaution: [
            "Meth is illegal and extremely addictive.",
            "Can lead to fatal overdose.",
            "Can cause severe psychological issues."
        ],
        sideEffect: [
            "SHORT-TERM: Increased wakefulness and physical activity, decreased appetite, faster breathing, rapid and/or irregular heartbeat, increased blood pressure, and hyperthermia.",
            "LONG-TERM: Extreme weight loss, addiction, severe dental problems ('meth mouth'), anxiety, confusion, insomnia, mood disturbances, violent behavior, and paranoia."
        ]
    },
    {
        name: "Cannabis (Marijuana)",
        use: [
            "Cannabis is used for its psychoactive effects and, in some cases, for medical purposes such as pain relief."
        ],
        precaution: [
            "Cannabis is illegal in Pakistan.",
            "Can exacerbate mental health issues like anxiety and paranoia.",
            "Should be avoided by adolescents as it can affect brain development."
        ],
        sideEffect: [
            "SHORT-TERM: Altered senses, altered sense of time, changes in mood, impaired body movement, difficulty with thinking and problem-solving, and impaired memory.",
            "LONG-TERM: Breathing problems, increased heart rate, problems with child development during and after pregnancy, and intense nausea and vomiting."
        ]
    },
    {
        name: "Cocaine",
        use: ["Cocaine is a powerful stimulant drug."],
        precaution: [
            "Cocaine is illegal and highly addictive.",
            "High potential for overdose and serious health complications."
        ],
        sideEffect: [
            "SHORT-TERM: Extreme happiness and energy, mental alertness, hypersensitivity to sight, sound, and touch, irritability, and paranoia.",
            "LONG-TERM: Loss of smell, nosebleeds, frequent runny nose, and problems with swallowing (from snorting); severe bowel decay (from swallowing); higher risk for contracting HIV, hepatitis C, and other bloodborne diseases."
        ]
    },
    {
        name: "Ecstasy (MDMA)",
        use: ["Often used in party or club settings for its euphoric and empathogenic effects."],
        precaution: [
            "Ecstasy is illegal and can be harmful.",
            "Risk of dehydration and overheating, especially in hot environments."
        ],
        sideEffect: [
            "SHORT-TERM: Enhanced sensory perception, euphoria, increased energy, emotional warmth, distorted sensory and time perception, and nausea.",
            "LONG-TERM: Confusion, depression, sleep problems, drug craving, anxiety, and paranoia."
        ]
    },
    {
        name: "Prescription Opioids (e.g., Oxycodone, Hydrocodone)",
        use: ["Prescribed for pain relief."],
        precaution: [
            "Should only be used as prescribed by a healthcare provider.",
            "High potential for addiction and misuse.",
            "Keep out of reach of children and others who might misuse them."
        ],
        sideEffect: [
            "SHORT-TERM: Pain relief, drowsiness, constipation, nausea, vomiting, and euphoria.",
            "LONG-TERM: Increased tolerance, physical dependence, addiction, overdose, and death."
        ]
    },
    {
        name: "Benzodiazepines (e.g., Diazepam, Alprazolam)",
        use: ["Prescribed for anxiety, insomnia, and other conditions."],
        precaution: [
            "Should be used exactly as prescribed.",
            "Can cause severe drowsiness and respiratory issues when mixed with alcohol.",
            "Can lead to dependence and withdrawal symptoms."
        ],
        sideEffect: [
            "SHORT-TERM: Drowsiness, dizziness, tiredness, blurred vision, and unsteadiness.",
            "LONG-TERM: Dependence, memory problems, and risk of overdose, especially when combined with other depressants."
        ]
    },
    {
        name: "Tramadol",
        use: ["Prescribed for moderate to moderately severe pain."],
        precaution: [
            "Should only be used as prescribed.",
            "Potential for abuse and addiction.",
            "Can interact with other medications and cause serious side effects."
        ],
        sideEffect: [
            "SHORT-TERM: Dizziness, headache, drowsiness, nausea, constipation, and vomiting.",
            "LONG-TERM: Dependence, tolerance, addiction, and risk of overdose."
        ]
    },
    {
        name: "Alcohol",
        use: ["Social settings, often consumed for relaxation or celebration.",
            "Can be used medicinally in small amounts for antiseptic purposes."],
        precaution: [
            "Avoid excessive consumption; it can lead to dependency and addiction.",
            "Should not be mixed with certain medications, especially those that depress the central nervous system.",
            "Pregnant women should avoid alcohol due to the risk of fetal alcohol syndrome.",
            "Never consume alcohol before driving or operating heavy machinery."
        ],
        sideEffect: [
            "SHORT-TERM: Impaired judgment, coordination, and reaction time.",
            "LONG-TERM: Liver damage (cirrhosis), cardiovascular problems, addiction, and mental health issues."
        ]
    },
    {
        name: "Caffeine",
        use: ["Commonly found in coffee, tea, and energy drinks.",
            "Found in Panadol Extra",
            "Used to increase alertness, reduce fatigue, and improve concentration."],
        precaution: [
            "Limit intake to avoid dependency and withdrawal symptoms.",
            "Excessive consumption can lead to insomnia, nervousness, and increased heart rate.",
            "Pregnant women should limit caffeine intake due to potential risks to the fetus.",
            "Should be avoided in the evening to prevent sleep disturbances."
        ],
        sideEffect: [
            "SHORT-TERM: Jitters, increased heart rate, anxiety.",
            "LONG-TERM: Potential for increased blood pressure, dependency, and gastrointestinal issues if consumed in large amounts."
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#drugTable tbody");

    drugs.forEach(drug => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.className = "drug"; 
        nameCell.textContent = drug.name;
        row.appendChild(nameCell);

        const useCell = document.createElement("td");
        useCell.className = "use";
        useCell.appendChild(createList(drug.use));
        row.appendChild(useCell);

        const precautionCell = document.createElement("td");
        precautionCell.className = "precaution";
        precautionCell.appendChild(createList(drug.precaution));
        row.appendChild(precautionCell);

        const sideEffectCell = document.createElement("td");
        sideEffectCell.className = "side-effect";
        sideEffectCell.appendChild(createList(drug.sideEffect));
        row.appendChild(sideEffectCell);

        tableBody.appendChild(row);
    });
});

function createList(items) {
    const ul = document.createElement("ul");
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = highlightTerms(item);
        ul.appendChild(li);
    });
    return ul;
}

function highlightTerms(text) {
    return text.replace(/(SHORT-TERM|LONG-TERM)/g, '<strong>$1</strong>');
}

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

