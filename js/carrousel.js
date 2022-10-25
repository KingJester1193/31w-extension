(function(){
    console.log("carrousel");
    let elBtnModal = document.querySelector(".btn_modal");
    let elCarrousel = document.querySelector(".carrousel");
    let elBtnModalFermer = document.querySelector(".btn_fermer--modal")
    let elCarrousel__figure = document.querySelector(".carrousel__figure")
    let elCarrousel__form = document.querySelector(".carrousel__form")
    let elCarrousel__galerie = document.querySelector(".galerie")
    let elGalerie__img = document.querySelectorAll(".galerie figure img")
    let arrowLeft = document.querySelector(".left")
    let arrowRight = document.querySelector(".right")


    let index = 0;
    let pastIndex = -1;
    

    // Etape 1 parcourrire gallery----------------------------------------
        for(const elImg of elGalerie__img){
      
            ajouter_img_carrousel(elImg)
            ajouter_btn_radio();

            elImg.addEventListener("click",function(){//ecouteur sur img galerie

              //  console.log(this.dataset.index);
                elCarrousel.classList.add("carrousel--ouvrir");
                 elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer"); 
                 elCarrousel__form.children[this.dataset.index].checked = true;
                 pastIndex = this.dataset.index; 
                  })



                  
                
         
        }

             arrowLeft.addEventListener("click",function(){
                    console.log("click");
                   
                    let img_activer = document.querySelector(".carrousel__figure__img--activer")
                    console.log("click");
                     imgActivIndex = img_activer.dataset.index
                     console.log(imgActivIndex)
                     console.log(pastIndex);
                     let nextImg;
 
 
                     if(imgActivIndex == 0){
                         nextImg = elGalerie__img.length -1
 
                     }else{
                         nextImg = parseInt(imgActivIndex) -1;
                     }
 
 
                     img_activer.classList.remove("carrousel__figure__img--activer");
                  
                    elCarrousel.querySelector(`[data-index='${nextImg}']`).classList.add("carrousel__figure__img--activer")
                     document.querySelector(`[type="radio"][data-index='${nextImg}']`).checked = true;
            
                
                

        
            
            })

                arrowRight.addEventListener("click",function(){
               let img_activer = document.querySelector(".carrousel__figure__img--activer")
                   console.log("click");
                    imgActivIndex = img_activer.dataset.index
                    console.log(imgActivIndex)
                    console.log(pastIndex);
                    let nextImg;


                    if(imgActivIndex == elGalerie__img.length - 1){
                        nextImg = 0;

                    }else{
                        nextImg = parseInt(imgActivIndex) +1;
                    }


                    img_activer.classList.remove("carrousel__figure__img--activer");
                 
                   elCarrousel.querySelector(`[data-index='${nextImg}']`).classList.add("carrousel__figure__img--activer")
                   

                  
                   document.querySelector(`[type="radio"][data-index='${nextImg}']`).checked = true;
                   if(imgActivIndex   !=  elCarrousel__form__radio.dataset.index.checked){
                    img_activer.classList.remove("carrousel__figure__img--activer");
                 
                   }


                    })
                




        //---------------ajout img a carrousel--------------------------------
        function ajouter_img_carrousel(elImg){
            elImg.dataset.index = index;
            let elCarrousel__figure__img = document.createElement("img")
            elCarrousel__figure__img.setAttribute("src", elImg.getAttribute("src"))
            elCarrousel__figure__img.classList.add("carrousel__figure__img")
            elCarrousel__figure__img.dataset.index = index;
            elCarrousel__figure.appendChild(elCarrousel__figure__img)
      




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

                let img_activer = document.querySelector(".carrousel__figure__img--activer")
                img_activer.classList.remove("carrousel__figure__img--activer")
                elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");

                pastIndex = this.dataset.index;
            })


     

         }


    elBtnModalFermer.addEventListener("mousedown", function(){
        console.log("mousedown");
        elCarrousel.classList.remove("carrousel--ouvrir");
        if(pastIndex != -1){
            elCarrousel__figure.children[pastIndex].classList.remove("carrousel__figure__img--activer")
        }


    })



})()