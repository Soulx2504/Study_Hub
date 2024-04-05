// Flashcard content
const flashcards = [
    { question: "What is a vector?", answer: "A quantity which has both a magnitude and direction" },
    { question: "What is a scalar?", answer: "A quantity which only has magnitude" },
    { question: "What is distance?", answer: "The overall ground covered by an object during its motion" },
    { question: "What is displacement?", answer: "The separation between two points in a named direction" },
    { question: "What is speed?", answer: "The distance travelled per unit time" },
    { question: "What is velocity?", answer: "The rate of change of displacement" },
    { question: "What is acceleration?", answer: "The rate of change of velocity" },
    { question: "What is momentum?", answer: "The product of a body’s mass and velocity" },
    { question: "What is the Principle Of Conservation Of Momentum?", answer: "In a closed system where no external forces act, momentum before is equal to momentum after" },
    { question: "What is force?", answer: "That which changes the momentum of an object" },
    { question: "What is a newton?", answer: "A force of 1 newton gives an acceleration of 1ms⁻² to a mass of 1kg" },
    { question: "What is weight?", answer: "The force at which a mass is attracted to the Earth" },
    { question: "What is friction?", answer: "The force that opposes motion between surfaces in contact" },
    { question: "What is Newton’s First Law?", answer: "A body remains at rest or in constant motion unless acted on by a resultant force" },
    { question: "What is Newton’s Second Law?", answer: "The rate of change of momentum is directly proportional to the applied force and takes place in the same direction as the applied force" },
    { question: "What is Newton’s Third Law?", answer: "For every action, there is an equal and opposite reaction" },
    { question: "What is angular velocity?", answer: "The angle (measured in radians) swept out per second" },
    { question: "What is centripetal acceleration?", answer: "The acceleration that a body which is moving in a circle has towards the centre of the circle" },
    { question: "What is centripetal force?", answer: "The force acting towards the centre that is needed to keep a body moving in a circle" },
    { question: "What is periodic time?", answer: "The time taken to complete one full revolution" },
    { question: "What is torque?", answer: "Torque is the moment of force. The product of the force applied and the perpendicular distance to the fulcrum" },
    { question: "What is a lever?", answer: "A rigid body which is free to rotate about a fixed point" },
    { question: "What is a couple?", answer: "Two parallel and equal forces that act in opposite directions" },
    { question: "What are the conditions for static equilibrium?", answer: "Firstly, the net force acting upon the object must be zero. Secondly, the net torque acting upon the object must also be zero" },
    { question: "What is Newton’s Law of Universal Gravitation?", answer: "The force felt between two bodies is directly proportional to the product of their masses and inversely proportional to the square of the distance between them" },
    { question: "What is the centre of gravity?", answer: "The point of an object through which the weight of that object appears to act" },
    { question: "What is Kepler’s Third Law?", answer: "The square of the period of a satellite is directly proportional to the cube of its radius of orbit and inversely proportional to the mass of the planet it is orbiting" },
    { question: "What is density?", answer: "Mass per unit volume" },
    { question: "What is pressure?", answer: "Force per unit area" },
    { question: "What is Archimedes’ Principle?", answer: "When a body is fully or partially immersed in a fluid, it experiences an upthrust which is equivalent to the weight of the fluid displaced" },
    { question: "What is the Law of Flotation?", answer: "A floating body will displace its own weight of fluid" },
    { question: "What is Boyle’s Law?", answer: "For a fixed mass of gas at a constant temperature, volume is inversely proportional to pressure" },
    { question: "What is Hooke’s Law?", answer: "When an object is bent, stretched or compressed by a displacement s, the restoring force F is directly proportional to the displacement, provided the elastic limit is not exceeded" },
    { question: "What is Simple Harmonic Motion?", answer: "Motion where the object’s acceleration is directly proportional to its displacement from a mean position and is always directed towards this mean position" }
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