(function(){
    console.log("carrousel");
    let elBtnModal = document.querySelector(".btn_modal");
    let elCarrousel = document.querySelector(".carrousel");
    let elBtnModalFermer = document.querySelector(".btn_fermer--modal")


        elBtnModal.addEventListener("mousedown", function(){
        console.log("mousedown");
        elCarrousel.classList.add("carrousel--ouvrir");


    })

    elBtnModalFermer.addEventListener("mousedown", function(){
        console.log("mousedown");
        elCarrousel.classList.remove("carrousel--ouvrir");


    })



})()