(function(){
    console.log("carrousel");
    let elBtnModal = document.querySelector(".btn_modal");
    let elCarrousel = document.querySelector(".carrousel");
    let elBtnModalFermer = document.querySelector(".btn_fermer--modal")
    let elCarrousel__figure = document.querySelector(".carrousel__figure")
    let elCarrousel__form = document.querySelector(".carrousel__form")
    let elCarrousel__galerie = document.querySelector(".galerie")
    let elGalerie__img = document.querySelectorAll(".galerie figure img")
    let index = 0;
    let pastIndex = -1;

    // Etape 1 parcourrire gallery----------------------------------------
        for(const elImg of elGalerie__img){
            console.log(elImg.getAttribute("src"));
            ajouter_img_carrousel(elImg)
            ajouter_btn_radio()

        
        }

        //---------------ajout img a carrousel--------------------------------
        function ajouter_img_carrousel(elImg){
            
            let elCarrousel__figure__img = document.createElement("img")
            elCarrousel__figure__img.setAttribute("src", elImg.getAttribute("src"))
            elCarrousel__figure__img.classList.add("carrousel__figure__img")
            elCarrousel__figure__img.dataset.index = index;
            elCarrousel__figure.appendChild(elCarrousel__figure__img)
            console.log();





        }

            //---------------ajout radio btn carrousel--------------------------------
        function ajouter_btn_radio(){
            let elCarrousel__form__radio = document.createElement("input")
            elCarrousel__form__radio.setAttribute("name","carrousel__btn__radio")
            elCarrousel__form__radio.setAttribute("class","carrousel__btn__radio")
            elCarrousel__form__radio.setAttribute("type","radio")
            elCarrousel__form__radio.dataset.index = index;
            index++
            elCarrousel__form.appendChild(elCarrousel__form__radio)

             //---------------listener pour changer image--------------------------------
            elCarrousel__form__radio.addEventListener("click",function(){
                console.log(this.dataset.index)

                //condition a mettre ici
                
                elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer")


            })


        }





        elBtnModal.addEventListener("mousedown", function(){
        console.log("mousedown");
        elCarrousel.classList.add("carrousel--ouvrir");


    })

    elBtnModalFermer.addEventListener("mousedown", function(){
        console.log("mousedown");
        elCarrousel.classList.remove("carrousel--ouvrir");


    })



})()