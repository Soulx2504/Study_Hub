const flashcards = document.getElementsByClassName ("flashcards")[0];
const createFlashcard = document.getElementsByClassName ("create-Flashcard")[0];
const question = document.getElementsById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker)
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className= 'flashcards';
    h2_question.setAttribute('style',"border-top:1px solid red; padding: 15px; margin-top:30px");
    h2_question.innerHTML = text.my_question;
    
    h2_answer.setAttribute("style","text-align:center; display:none; color:red");

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display =="none")
        h2_answer.style.display = "block"
        else
        h2_answer.style.display
    });

    flashcards.appendChild(div);
}
function addFlashcard(){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer'   : answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}
function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateFlashcard(){
    createFlashcard.style.display = "block";
}
function hideCreateFlashcard(){
    createFlashcard.style.display = "none";
}





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

let button = document.getElementById('btn');

button.addEventListener('click', ()=> {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' ||  isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHtml = '';
        height_status=true;
    }

    if(weight === ''  || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHtml = '';
        weight_status=true;
    } 
    
    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML ='Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over wieght : ' + bmi;
        }
    }else{
      alert('The form has errors');
      result.innerHTML = '';  
    }
});
