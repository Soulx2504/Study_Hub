let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick =( ) =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.remove('active');
};


$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.diet .box').show(400)
        }
        else{
            $('.diet .box').not('.'+ filter).hide(200)
            $('.diet .box').filter('.'+ filter).show(400)
        }     
        
        
    });


});

document.addEventListener("DOMContentLoaded", function() {
    const flashcards = document.querySelector(".flashcards");
    const createFlashcard = document.querySelector(".create-Flashcard");
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");
    const contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    contentArray.forEach(divMaker);

    function divMaker(text) {
        var div = document.createElement("div");
        var h2_question = document.createElement("h2");
        var h2_answer = document.createElement("h2");

        div.className = 'flashcards'; 
        h2_question.setAttribute('style', "border-top:1px solid red; padding: 15px; margin-top:30px");
        h2_question.innerHTML = text.my_question;

        h2_answer.setAttribute("style", "text-align:center; display:none; color:red");

        div.appendChild(h2_question);
        div.appendChild(h2_answer);

        div.addEventListener("click", function() {
            if (h2_answer.style.display === "none") {
                h2_answer.style.display = "block";
            } else {
                h2_answer.style.display = "none";
            }
        });

        flashcards.appendChild(div);
    }

    function addFlashcard() {
        var flashcard_info = {
            'my_question': question.value,
            'my_answer': answer.value
        }

        contentArray.push(flashcard_info);
        localStorage.setItem('items', JSON.stringify(contentArray));
        divMaker(contentArray[contentArray.length - 1]);
        question.value = '';
        answer.value = '';
    }

    function hideFlashcard() { 
        createFlashcard.style.display = "none";
    }

    function showCreateCardBox() { 
        createFlashcard.style.display = "block";
    }

    document.getElementById("addFlashcardBtn").addEventListener("click", addFlashcard);

    document.getElementById("hideFlashcardBtn").addEventListener("click", hideFlashcard);
});