document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var tiles = document.querySelectorAll('.tile');

    tiles.forEach(function(tile) {
        var subjectName = tile.querySelector('h3').innerText.toLowerCase();
        if (subjectName.includes(searchValue)) {
            tile.style.display = 'block';
        } else {
            tile.style.display = 'none';
        }
    });
});


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

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
