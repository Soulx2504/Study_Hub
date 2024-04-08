const flashcards = [
    { question: "What is Heat Capacity?", answer: "The heat energy needed to raise the temperature of a substance by 1 K (symbol: C)." },
    { question: "What is Specific Heat Capacity?", answer: "The heat energy needed to raise the temperature of 1 kg of a substance by 1 K (Symbol: c)." },
    { question: "What is Latent Heat?", answer: "The heat energy needed to change the state of a substance without a change in temperature (symbol: L)." },
    { question: "What is Specific Latent Heat?", answer: "The heat energy needed to change the state of 1 kg of a substance without a change in temperature (symbol: l)." },
    { question: "What is Specific Latent Heat of Vaporisation?", answer: "The amount of heat energy needed to change 1 kg of a substance from a liquid to a gas without a change in temperature, i.e. its boiling point (symbol: Lᵥ)." },
    { question: "What is Conduction?", answer: "The transfer of heat through kinetic energy between adjacent particles of a medium but the medium itself does not move, e.g. heat transfer through metal." },
    { question: "What is Convection?", answer: "The transfer of heat through a fluid by the physical movement of the fluid, e.g. boiling a pot of water." },
    { question: "What is Radiation?", answer: "The transfer of heat by electromagnetic waves, e.g. the sun heating Earth." },
    { question: "What is U-Value?", answer: "The amount of heat energy passing through 1 m² of a substance per second when there is a temperature difference of 1 K between each side." },
    { question: "What is Solar Constant?", answer: "Average sun energy falling per second on 1 m² of the atmosphere of Earth (value: 1.35kWm⁻²)." }
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