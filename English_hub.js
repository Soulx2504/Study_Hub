document.addEventListener('DOMContentLoaded', function() {
    // Function to flip the flashcard
    function flipFlashcard(card) {
        card.classList.toggle('flip');
    }

    // Add event listener to each flashcard
    document.querySelectorAll('.flashcard').forEach(card => {
        card.addEventListener('click', () => {
            flipFlashcard(card);
        });
    });

    // Add event listener to the flip button
    document.getElementById('flipBtn').addEventListener('click', function() {
        document.querySelectorAll('.flashcard').forEach(card => {
            flipFlashcard(card);
        });
    });
});

function toggleMarkingScheme() {
  var markingSchemes = document.querySelectorAll('.marking-scheme-image');
  markingSchemes.forEach(function(markingScheme) {
      markingScheme.classList.toggle('hidden');
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const characterSelect = document.getElementById('characterSelect');
    const bioBtn = document.getElementById('bioBtn');
    const quotesBtn = document.getElementById('quotesBtn');
    const characterInfo = document.getElementById('characterInfo');

// Character data
const characters = {
    hamlet: {
        bio: "Hamlet: The Prince of Denmark and the protagonist of the play. He is a deeply introspective and philosophical young man who is mourning the death of his father, King Hamlet. Hamlet is highly intelligent and contemplative, often contemplating the nature of life, death, and morality. His famous soliloquies reveal his inner turmoil as he struggles with the duty to avenge his father's murder while also grappling with his own existential crisis.",
        quotes: [
            "To be, or not to be: that is the question.",
            "Frailty, thy name is woman!",
            "There is nothing either good or bad, but thinking makes it so."
        ]
    },
    claudius: {
        bio: "Claudius: Hamlet's uncle and the current King of Denmark. He is ambitious and manipulative, having murdered his brother, King Hamlet, in order to seize the throne and marry Queen Gertrude. Claudius is politically savvy and skilled at manipulating those around him to maintain his power.",
        quotes: [
            "Oh, my offense is rank, it smells to heaven.",
            "My words fly up, my thoughts remain below: Words without thoughts never to heaven go.",
            "When sorrows come, they come not single spies, but in battalions."
        ]
    },
    gertrude: {
        bio: "Gertrude: The Queen of Denmark and Hamlet's mother. She is initially portrayed as a loving and dutiful wife to King Hamlet and later marries Claudius shortly after her husband's death. Gertrude's relationship with Hamlet is complicated, as he views her marriage to Claudius as a betrayal.",
        quotes: [
            "Good night, sweet prince, and flights of angels sing thee to thy rest!",
            "Thou know'st 'tis common; all that lives must die, passing through nature to eternity.",
            "There is a willow grows aslant a brook, that shows his hoar leaves in the glassy stream."
        ]
    },
    polonius: {
        bio: "Polonius: The Lord Chamberlain of Claudius's court and the father of Laertes and Ophelia. Polonius is a busybody, often meddling in the affairs of others in an attempt to gain favor with the king. He is somewhat bumbling and pompous but is ultimately loyal to Claudius.",
        quotes: [
            "Neither a borrower nor a lender be, for loan oft loses both itself and friend.",
            "This above all: to thine own self be true.",
            "Though this be madness, yet there is method in 't."
        ]
    },
    ophelia: {
        bio: "Ophelia: Polonius's daughter and Hamlet's love interest. Ophelia is a gentle and obedient young woman who is manipulated by both her father and brother, Laertes, as well as Claudius, into spying on Hamlet. She is driven to madness by the conflicting demands placed upon her and ultimately drowns herself.",
        quotes: [
            "Lord, we know what we are, but know not what we may be.",
            "There's rosemary, that's for remembrance; pray, love, remember.",
            "And I, of ladies most deject and wretched, that sucked the honey of his music vows."
        ]
    },
    laertes: {
        bio: "Laertes: Polonius's son and Ophelia's brother. Laertes is a hot-headed and impulsive young man who is fiercely protective of his family's honor. He becomes embroiled in a plot with Claudius to kill Hamlet in revenge for the deaths of his father, Polonius, and sister, Ophelia.",
        quotes: [
            "To hell, allegiance! Vows, to the blackest devil!",
            "I dare damnation. To this point I stand, that both the worlds I give to negligence, let come what comes, only I'll be revenged most thoroughly for my father.",
            "Why, as a woodcock to mine own springe, Osric. I am justly killed with mine own treachery."
        ]
    },
    horatio: {
        bio: "Horatio: Hamlet's loyal friend and confidant. Horatio is a rational and level-headed figure who serves as a foil to Hamlet's more erratic behavior. He is the only character who remains alive at the end of the play to tell Hamlet's story.",
        quotes: [
            "There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.",
            "Goodnight, sweet prince, and flights of angels sing thee to thy rest!",
            "Now cracks a noble heart. Good night, sweet prince, and flights of angels sing thee to thy rest!"
        ]
    },
    rosencrantz: {
        bio: "Rosencrantz: Childhood friend of Hamlet. He and Guildenstern are summoned by Claudius to spy on Hamlet.",
        quotes: [
            "My lord, you once did love me.",
            "What a piece of work is man, how noble in reason, how infinite in faculties, in form and moving how express and admirable, in action how like an angel, in apprehension how like a god!",
            "My honored lord!"
        ]
    },
    guildenstern: {
        bio: "Guildenstern: Childhood friend of Hamlet. He and Rosencrantz are summoned by Claudius to spy on Hamlet.",
        quotes: [
            "My lord, you once did love me.",
            "What a piece of work is man, how noble in reason, how infinite in faculties, in form and moving how express and admirable, in action how like an angel, in apprehension how like a god!",
            "My honored lord!"
        ]
    }
    };

    // Function to display character bio
    function showBio() {
        const selectedCharacter = characterSelect.value;
        const bio = characters[selectedCharacter].bio;
        characterInfo.textContent = bio;
        characterInfo.style.display = 'block';
    }

    // Function to display character quotes
    function showQuotes() {
        const selectedCharacter = characterSelect.value;
        const quotes = characters[selectedCharacter].quotes.join('\n');
        characterInfo.textContent = quotes;
        characterInfo.style.display = 'block';
    }

    // Event listeners for bio and quotes buttons
    bioBtn.addEventListener('click', showBio);
    quotesBtn.addEventListener('click', showQuotes);
});

function showGuidelines() {
    var selectElement = document.getElementById("questionTypeSelect");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    var guidelinesDiv = document.getElementById("questionInfo");
    
    if (selectedOption === "structure") {
        guidelinesDiv.style.display = "block";
    } else {
        guidelinesDiv.style.display = "none";
    }
}