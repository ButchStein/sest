var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");
 
closeButton.addEventListner("click", function(){
   modal.classList.toggle("closed");
   modalOverlay.classList.toggle("closed");
});
 
openButton.addEventListner("click", function(){
   modal.classList.toggle("closed");
   modalOverlay.classList.toggle("closed");
});