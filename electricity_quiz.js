const flashcards = [
    { question: "What is an insulator?", answer: "A substance through which electric charge cannot flow." },
    { question: "What is a conductor?", answer: "A substance through which electric charge can flow." },
    { question: "What is current?", answer: "The rate of flow of charge." },
    { question: "What does an ammeter measure?", answer: "Current." },
    { question: "What is Alternating Current (AC)?", answer: "Current that constantly changes direction." },
    { question: "What is Direct Current (DC)?", answer: "Current that flows in one direction only." },
    { question: "What is rectification?", answer: "The conversion of alternating current (AC) to direct current (DC)." },
    { question: "What is an ion?", answer: "An atom/group of atoms that have lost or gained one or more electrons." },
    { question: "What is electrolysis?", answer: "Causing a chemical reaction by passing a current through a liquid." },
    { question: "What is a series circuit?", answer: "A circuit where there is no split." },
    { question: "What is a parallel circuit?", answer: "A circuit where there is a split." },
    { question: "What is a fuse?", answer: "A safety device consisting of a wire which melts when a current above a pre-set value passes through it, interrupting the circuit and preventing electrocution." },
    { question: "What is a Miniature Circuit Breaker (MCB)?", answer: "A safety device which breaks a circuit if a current above a pre-set value is detected." },
    { question: "What is a Residual Current Device (RCD)?", answer: "A safety device which breaks a circuit if a current difference between live and neutral above a pre-set value is detected." },
    { question: "What is a radial circuit?", answer: "One where a separate live and neutral wire are connected from the distribution box to an appliance which uses a large amount of current, e.g. an electric shower." },
    { question: "What is a ring circuit?", answer: "One where the live, neutral and earth terminal of each socket are connected to three corresponding wires arranged in a loop with each end of said loop connected to the distribution box." },
    { question: "What is bonding?", answer: "A safety precaution whereby all metal pipes, taps and tanks are earthed as a safety precaution." },
    { question: "What is a kilowatt-hour?", answer: "The amount of energy used per hour by a 1000 W appliance." },
    { question: "What is potential difference?", answer: "The work done in bringing unit positive charge from one point to another." },
    { question: "What is a Coulomb?", answer: "Unit of electric charge. It is the quantity of charge that passes when a current of 1 A flows for 1 second." },
    { question: "What is a Volt?", answer: "The potential difference between two points is 1 volt if 1 joule of work is done in bringing 1 coulomb from one point to another." },
    { question: "What is capacitance?", answer: "The ratio of charge to potential in a conductor." },
    { question: "What is Electromotive Force (EMF)?", answer: "Potential difference between terminals of a battery when no current is being drawn from the battery." },
    { question: "What does a voltmeter measure?", answer: "Potential difference across a component or a circuit." },
    { question: "What is resistance?", answer: "The ratio of the voltage across a conductor to the current flowing through it." },
    { question: "What is an Ohm?", answer: "Unit of resistance. A conductor has 1 ohm of resistance if a current of 1 A passes through it when a potential difference of 1 V is applied across it." },
    { question: "What is Ohm’s Law?", answer: "If the temperature remains constant, the current flowing through a conductor is directly proportional to the potential difference across it." },
    { question: "What is resistivity?", answer: "The potential a material has for resistance." },
    { question: "What is Joule’s Law?", answer: "The rate of heat produced in a conductor is proportional to the square of the current flowing through it: P ∝ I²." },
    { question: "What is a thermistor?", answer: "A semiconductor whose resistance decreases as the temperature increases." },
    { question: "What is a Light Dependant Resistor (LDR)?", answer: "A semiconductor whose resistance decreases as light intensity increases." },
    { question: "What is a semiconductor?", answer: "A substance whose resistivity is between that of a good conductor and that of a good insulator." },
    { question: "What are holes?", answer: "Positively charged spaces in a substance which remain when electrons break free from a covalent bond." },
    { question: "What is doping?", answer: "Increasing the conductivity of a semiconductor by the addition of impurities." },
    { question: "What is intrinsic conduction?", answer: "Occurs in pure semiconductors due to electrons moving from negative to positive and an equal number of holes moving in the opposite direction." },
    { question: "What is extrinsic conduction?", answer: "Increased conduction in a semiconductor due to the addition of impurities." },
    { question: "What is a Wheatstone Bridge?", answer: "A circuit used to find an unknown value of a resistor through the use of ratios." },
    { question: "What is a P-Type Semiconductor?", answer: "One in which the impurity added produces extra holes which are available for conduction, e.g. adding boron to silicon." },
    { question: "What is an N-Type Semiconductor?", answer: "One in which the impurity added produces more free electrons available for conduction, e.g. adding phosphorous to silicon." },
    { question: "What is a P-N Junction?", answer: "When a P and an N type semiconductor are joined together they form a single semiconductor which allows current to flow in one direction only." },
    { question: "What is the depletion layer?", answer: "The insulative region at the meeting of the p-n junction where there are no majority charge carriers." },
    { question: "What is junction voltage?", answer: "The potential difference across a p-n junction caused by holes and electrons moving across the junction when it was formed." },
    { question: "What is a forward biased P-N junction?", answer: "Positive terminal of battery to p-type and negative terminal of battery to n-type. Conducts electricity." },
    { question: "What is a reverse biased P-N junction?", answer: "Positive terminal of battery to n-type and negative terminal of battery to p-type. Does not conduct electricity." },
    { question: "What is a Light Emitting Diode (LED)?", answer: "A diode that emits light when in forward bias." }
];
// Function to generate quiz questions from flashcards
function generateQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const submitButton = document.getElementById('submit-btn');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizModal = document.getElementById('quiz-modal');
    const quizResults = document.getElementById('quiz-results');
    const modalCloseBtn = document.querySelector('.modal .close');
    const restartButton = document.getElementById('restart-btn');
    const startTime = new Date().getTime();

    // Function to reset the quiz
    function resetQuiz() {
        quizForm.reset();
        quizFeedback.textContent = '';
        quizResults.textContent = '';
        quizModal.classList.add('hidden');
    }

    // Randomize flashcards
    const randomizedFlashcards = flashcards.sort(() => Math.random() - 0.5).slice(0, 10);

    randomizedFlashcards.forEach((flashcard, index) => {
        const questionId = `question${index + 1}`;
        const input = `<input type="text" name="${questionId}" placeholder="Enter your answer">`;
        const question = `<div class="question-box">${flashcard.question}</div>${input}`;
        quizForm.innerHTML += question;
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Calculate time taken
        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000;
        const minutes = Math.floor(timeTaken / 60);
        const seconds = Math.floor(timeTaken % 60);

        let score = 0;
        let feedbackText = '';

        randomizedFlashcards.forEach((flashcard, index) => {
            const questionId = `question${index + 1}`;
            const userAnswer = quizForm.elements[questionId].value;
            if (userAnswer.toLowerCase() === flashcard.answer.toLowerCase()) {
                score++;
            } else {
                // Display correct answer for incorrect responses
                feedbackText += `Question ${index + 1}: Correct Answer - ${flashcard.answer}\n`;
            }
        });

        const totalQuestions = 10;
        const percentage = (score / totalQuestions) * 100;
        feedbackText += `\nYour score: ${score} out of ${totalQuestions}. Time taken: ${minutes} minutes ${seconds} seconds (${timeTaken} seconds). Percentage: ${percentage.toFixed(2)}%`;

        // Display feedback
        quizFeedback.textContent = feedbackText;

        // Show modal with quiz results
        quizResults.textContent = feedbackText;
        quizModal.classList.remove('hidden');
    });

    // Close the modal when the close button is clicked
    modalCloseBtn.onclick = resetQuiz;

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == quizModal) {
            resetQuiz();
        }
    };

    // Restart quiz when restart button is clicked
    restartButton.addEventListener('click', resetQuiz);
}

// Call generateQuiz function when the page loads
window.addEventListener('load', generateQuiz);