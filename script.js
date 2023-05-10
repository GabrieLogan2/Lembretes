// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var lembrete = document.getElementsByClassName("lembrete");

// Get the <span> element that closes the modal
var span = document.getElementById("close-modal");

// When the user clicks on a lembrete, open the modal
for (var i = 0; i < lembrete.length; i++) {
  lembrete[i].onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-title").innerHTML = this.getElementsByTagName("h2")[0].innerHTML;
    document.getElementById("modal-description").innerHTML = this.getElementsByTagName("p")[0].innerHTML;
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
