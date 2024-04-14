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

//Scrollbar function for units pages
function search() {
  console.log("Search function called");
  var input = document.getElementById('searchInput').value.toLowerCase();
  console.log("Input:", input);
  var sections = document.getElementsByTagName('section');
  console.log("Sections:", sections);
  for (var i = 0; i < sections.length; i++) {
      var sectionText = sections[i].textContent.toLowerCase();
      if (sectionText.includes(input)) {
          console.log("Input found in section:", sections[i]);
          var textNodes = getTextNodes(sections[i]);
          console.log("Text nodes:", textNodes);
          var wordPosition = findWordPosition(textNodes, input);
          console.log("Word position:", wordPosition);
          if (wordPosition !== -1) {
              var wordNode = textNodes[wordPosition.nodeIndex].parentNode; // Get the parent node of the text node
              var windowHeight = window.innerHeight;
              var wordNodeRect = wordNode.getBoundingClientRect();
              var scrollPosition = wordNodeRect.top - (windowHeight / 2) + (wordNodeRect.height / 2); // Calculate the scroll position to center the word
              wordNode.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll the word node into view
              console.log("Scrolled to word position:", scrollPosition);
              break; // Stop searching once found
          }
      }
  }
}

function getTextNodes(element) {
  var textNodes = [];
  var treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  while (treeWalker.nextNode()) {
      textNodes.push(treeWalker.currentNode);
  }
  return textNodes;
}

function findWordPosition(textNodes, word) {
  var found = false;
  var nodeIndex = 0;
  for (var i = 0; i < textNodes.length; i++) {
      var node = textNodes[i];
      var nodeText = node.nodeValue.toLowerCase();
      var index = nodeText.indexOf(word);
      if (index !== -1) {
          found = true;
          nodeIndex = i;
          break;
      }
  }
  return found ? { found: true, nodeIndex: nodeIndex } : { found: false }; // Adjusted here
}

// Event listener for pressing Enter key
document.getElementById("searchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      search();
  }
});