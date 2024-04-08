const flashcards = [
    { question: "What is light?", answer: "Electromagnetic radiation that is detectable by the human eye. Wavelength: 400nm-700nm." },
    { question: "What is self-luminous?", answer: "An object that produces its own light, e.g., the Sun." },
    { question: "What is non-luminous?", answer: "An object that does not produce its own light and so reflects light from its surface, making it visible." },
    { question: "What is dispersion?", answer: "The separation of the different wavelengths/colours present in light." },
    { question: "What is a spectrometer?", answer: "Instrument used in optics to examine spectra and measure the wavelength of light." },
    { question: "What are primary colours?", answer: "These form white light when combined. They are red, blue, and green." },
    { question: "What are secondary colours?", answer: "These are formed by mixing two primary colours in equal intensity. They are yellow, magenta, and cyan." },
    { question: "What are complementary colours?", answer: "A primary colour and a secondary colour that form white when they are combined. These are blue with yellow, green with magenta, and red with cyan." },
    { question: "What is infrared light?", answer: "Light that is emitted by warm objects." },
    { question: "What is fluorescence?", answer: "When a body absorbs UV radiation and re-emits it as visible light." },
    { question: "What is monochromatic light?", answer: "Light of one wavelength/colour only." },
    { question: "What are the laws of reflection?", answer: "1. The incident ray, the reflected ray and the normal at the point of incidence all lie in the same plane. 2. The angle of incidence equals the angle of reflection." },
    { question: "What is a real image?", answer: "Image formed by the actual intersection of rays." },
    { question: "What is a virtual image?", answer: "Image formed by the apparent intersection of rays." },
    { question: "What is parallax?", answer: "The difference in apparent position of an object when viewed from different positions." },
    { question: "What is refraction?", answer: "The bending of light as it passes from one medium to another." },
    { question: "What are the laws of refraction?", answer: "1. The incident ray, the refracted ray and the normal all lie in the same plane. 2. For a given pair of media, the sine of the angle of incidence is proportional to the sine of the angle of refraction (Snell’s law)." },
    { question: "What is refractive index?", answer: "The ratio of the sine of the angle of incidence to the sine of the angle of refraction when light travels from air into the medium." },
    { question: "What is critical angle?", answer: "The angle of incidence in the denser medium when the angle of refraction in the rarer medium is 90°." },
    { question: "What is total internal reflection?", answer: "This occurs when the angle of incidence in the denser medium is larger than the critical angle so the light is reflected back into the denser medium." },
    { question: "What is an optic fibre?", answer: "Very thin, long and transparent material through which light travels by total internal reflection." },
    { question: "What is accommodation?", answer: "The ability of the eye to focus on objects at varying distances by changing the shape of the lens." },
    { question: "What is power of a lens?", answer: "The reciprocal of the lens focal length, i.e., 1/f." },
    { question: "What is magnification?", answer: "The ratio of the image distance/height to the object distance/height." },
    { question: "What is sound?", answer: "Mechanical waves produced by a vibrating object, e.g., tuning fork." },
    { question: "What is acoustics?", answer: "The study of sound." },
    { question: "What is fundamental frequency?", answer: "The frequency at which a body tends to vibrate if free to do so." },
    { question: "What are harmonics?", answer: "Frequencies that are multiples of the fundamental frequency. If f = fundamental frequency, then f = 1st harmonic." },
    { question: "What are overtones?", answer: "Frequencies that are multiples of the fundamental frequency. If f = fundamental frequency, then 2f = 1st overtone." },
    { question: "What is resonance?", answer: "When a body is forced to vibrate at its own natural frequency, resulting in large amplitude oscillations." },
    { question: "What is the threshold of hearing?", answer: "The smallest intensity audible by the human ear at a frequency of 1000 Hz. It has a value of 1x10-12 Wm⁻²." },
    { question: "What is sound intensity?", answer: "The power carried by sound waves per unit area in a direction perpendicular to that area." },
    { question: "What is sound intensity level?", answer: "Measured in decibels, it gives the intensity of a sound relative to the threshold of hearing." },
    { question: "What is a wave?", answer: "A disturbance that transfers energy through a medium, without any net movement of the medium." },
    { question: "What is medium?", answer: "Required to carry a wave, with the exception of electromagnetic waves." },
    { question: "What are mechanical waves?", answer: "Waves which require a medium to travel." },
    { question: "What are electromagnetic waves?", answer: "Waves which do not require a medium in which to travel. EM waves travel in a vacuum at the speed of light." },
    { question: "What is the electromagnetic spectrum?", answer: "The range of EM waves. From lowest to highest frequency we have radio waves, microwaves, infrared, visible light, ultraviolet, x-rays and gamma rays." },
    { question: "What is a transverse wave?", answer: "A wave whose vibrations are perpendicular to the direction in which the wave is travelling, e.g., light waves." },
    { question: "What is a longitudinal wave?", answer: "A wave whose vibrations are parallel to the direction in which the wave is travelling, e.g., sound waves." },
    { question: "What is a travelling wave?", answer: "Transfers energy as it travels from the source, producing it to all areas which it passes." },
    { question: "What is reflection?", answer: "The bouncing of a wave off the surface of obstacles in its path." },
    { question: "What is refraction?", answer: "The change in direction in which a wave is travelling when it travels from one medium to another." },
    { question: "What are coherent sources?", answer: "Sources that are in phase and have the same frequency." },
    { question: "What is interference?", answer: "Occurs when two or more waves meet. The resulting disturbance has an amplitude that is the algebraic sum of the individual amplitudes of each interfering wave." },
    { question: "What is an interference pattern?", answer: "Forms when two (or more) coherent sources meet." },
    { question: "What is constructive interference?", answer: "Occurs when two waves meet and the amplitude of the resultant wave is greater than the amplitude of each individual wave." },
    { question: "What is destructive interference?", answer: "Occurs when two waves meet and the amplitude of the resultant wave is less than the amplitude of each individual wave." },
    { question: "What is diffraction?", answer: "The sideways spreading of waves into the region after passing through/around a small gap/obstacle." },
    { question: "What is polarisation?", answer: "When the vibrations of a wave are confined to one plane only." },
    { question: "What is a stationary/standing wave?", answer: "Formed when two waves meet which are travelling in opposite directions but have the same amplitude and frequency." },
    { question: "What are wave nodes?", answer: "Points along a stationary wave which experience no amplitude." },
    { question: "What are antinodes?", answer: "Points along a stationary wave which experience maximum vibration and amplitude." },
    { question: "What is the Doppler effect?", answer: "The apparent change in frequency of a wave due to the relative motion of the source or the observer." },
    { question: "What is wavelength?", answer: "The distance between two successive crests or troughs." },
    { question: "What is frequency?", answer: "The number of complete oscillations of a wave per second." },
    { question: "What is velocity?", answer: "The distance travelled by a wave per second." },
    { question: "What is amplitude?", answer: "The maximum displacement of a point on a wave from the mean position." },
    { question: "What is periodic time?", answer: "The time taken for one complete oscillation of a wave." }
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