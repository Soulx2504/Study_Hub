const flashcards = [
    { question: "What is Nuclear Fission?", answer: "The splitting up of a large nucleus into two smaller nuclei of similar size with the release of energy and neutrons." },
    { question: "What is Nuclear Fusion?", answer: "The joining of two smaller nuclei to form a larger nucleus with the release of energy." },
    { question: "What is a Moderator?", answer: "Usually graphite or heavy water, it is used in a nuclear reactor to slow down neutrons so that they can cause fission reactions." },
    { question: "What are Control Rods?", answer: "Used in a nuclear reactor to absorb neutrons and therefore control the rate of reaction." },
    { question: "What is Electromagnetic Induction?", answer: "Inducing an electromotive force by changing the magnetic flux in a closed loop." },
    { question: "What is Faraday’s Law?", answer: "The size of the induced emf is directly proportional to the rate of change of flux." },
    { question: "What is Lenz’s Law?", answer: "The direction of an induced current is always such as to oppose the change producing it." },
    { question: "What is an Electrical Generator?", answer: "Uses electromagnetic induction to convert mechanical energy to electrical energy." },
    { question: "What is Mutual Induction?", answer: "When a changing magnetic field in one coil causes an induced emf to appear in a nearby coil." },
    { question: "What is a Transformer?", answer: "Device that changes the value of an alternating voltage." },
    { question: "What is Self-Induction?", answer: "Occurs when a changing magnetic field in a coil induces an emf in the coil itself." },
    { question: "What is a Magnetic Field?", answer: "A region of space where magnetic forces can be felt." },
    { question: "What is a Magnetic Field Line?", answer: "A tangent on any point of a magnetic field line gives the magnetic field direction at this point." },
    { question: "What is the Right-Hand Grip Rule?", answer: "If the right hand grasps a wire with the thumb pointing in the direction of the current, the fingers coiled around the wire show the magnetic field direction around it." },
    { question: "What is Fleming’s Left-Hand Rule?", answer: "If the thumb, index finger and middle finger are all perpendicular to each other, with the index finger pointing in the direction of the magnetic field and the middle finger pointing in the direction of the current, then the thumb points in the direction of the force." },
    { question: "What is Magnetic Flux Density (B)?", answer: "A vector at any point in the magnetic field whose magnitude is equivalent to the force experienced by a conductor of a length of 1 m, carrying a current of 1 A, at right angles to the field at that point and has the same direction as the magnetic field lines." },
    { question: "What is a Tesla?", answer: "Unit of magnetic flux density. Magnetic flux density at a point is 1 if a 1 m long conductor carrying a current of 1 A experiences a force of 1 N when placed perpendicular to the field." },
    { question: "What is a Weber?", answer: "Unit of magnetic flux. The magnetic flux over 1 m² is 1 Wb if placed in a field of magnetic flux density 1 T." },
    { question: "What is an Electromagnet?", answer: "Made of a solenoid and a soft iron core. When current passes though the solenoid, the core becomes magnetic." },
    { question: "What is an Ampere?", answer: "That constant current which, if maintained in two straight parallel conductors of infinite length, of negligible cross section and placed 1 m apart in a vacuum, would produce a force on each conductor of 2 x 10⁻⁷ newtons per meter of length." },
    { question: "What is Nuclear Fission?", answer: "The splitting up of a large nucleus into two smaller nuclei of similar size with the release of energy and neutrons." },
    { question: "What is Nuclear Fusion?", answer: "The joining of two smaller nuclei to form a larger nucleus with the release of energy." },
    { question: "What is a Moderator?", answer: "Usually graphite or heavy water, it is used in a nuclear reactor to slow down neutrons so that they can cause fission reactions." },
    { question: "What are Control Rods?", answer: "Used in a nuclear reactor to absorb neutrons and therefore control the rate of reaction." },
    { question: "What is Electromagnetic Induction?", answer: "Inducing an electromotive force by changing the magnetic flux in a closed loop." },
    { question: "What is Faraday’s Law?", answer: "The size of the induced emf is directly proportional to the rate of change of flux." },
    { question: "What is Lenz’s Law?", answer: "The direction of an induced current is always such as to oppose the change producing it." },
    { question: "What is an Electrical Generator?", answer: "Uses electromagnetic induction to convert mechanical energy to electrical energy." },
    { question: "What is Mutual Induction?", answer: "When a changing magnetic field in one coil causes an induced emf to appear in a nearby coil." },
    { question: "What is a Transformer?", answer: "Device that changes the value of an alternating voltage." },
    { question: "What is Self-Induction?", answer: "Occurs when a changing magnetic field in a coil induces an emf in the coil itself." },
    { question: "What is the Photoelectric Effect?", answer: "The release of electrons from a metal surface when EM radiation of above a certain frequency falls on it." },
    { question: "What is a Photon?", answer: "A packet of electromagnetic energy. Its energy is dependent on its frequency." },
    { question: "What is Threshold Frequency?", answer: "The minimum frequency needed for photoemission to occur. Every metal has a unique value." },
    { question: "What is Work Function?", answer: "The minimum energy needed by a photon to remove an electron from the surface of a metal." },
    { question: "What are X-Rays?", answer: "High frequency EM radiation produced when high speed electrons strike a metal target." },
    { question: "What is Electron?", answer: "Sub-atomic negatively-charged particle that orbits the nucleus." },
    { question: "What is Thermionic Emission?", answer: "When electrons are released from the surface of a hot metal." },
    { question: "What are Cathode Rays?", answer: "Streams of extremely fast electrons traveling from the cathode to the anode in an evacuated tube." },
    { question: "What is The Electronvolt (eV)?", answer: "The energy gained/lost by an electron as it moves through a p.d. of 1 V. Its value is 1.6 x 10⁻¹⁹ J." },
    { question: "What is Ionisation?", answer: "When an atom or molecule acquires a charge by gaining or losing electrons to form ions." },
    { question: "What is Activity?", answer: "The number of nuclei of a substance decaying per second." },
    { question: "What is Becquerel?", answer: "The unit of activity equivalent to 1 disintegration per second." },
    { question: "What is Law of Radioactive Decay?", answer: "The activity of a sample is directly proportional to the amount left undecayed." },
    { question: "What is Half-Life?", answer: "The time taken for half a sample’s present atoms to decay." },
    { question: "What are Cosmic Rays?", answer: "High-energy particles that originate in very distant parts of the universe. They mostly decay high in the Earth’s atmosphere." }
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