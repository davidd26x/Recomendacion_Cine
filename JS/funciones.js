function recomendar(genero){
    let elementoEdad = document.getElementById("edad").value;
    let elementoRecomendacion = document.getElementById("recomendacion");

    if(elementoEdad == ""){
        elementoRecomendacion.textContent = "Debe seleccionar una opción válida."
    }
    switch(genero){
        case 'drama':
            if(elementoEdad >0 && elementoEdad <= 12){
                elementoRecomendacion.textContent = "En Busca de la Felicidad";
            } else if(elementoEdad >= 13 && elementoEdad <= 18){
                elementoRecomendacion.textContent = "Bajo la Misma Estrella";
            } if(elementoEdad > 18){
                elementoRecomendacion.textContent = "La Lista de Schindler"
            }
        break;
        case 'comedia':
            if(elementoEdad>0 && elementoEdad <= 12){
                elementoRecomendacion.textContent = "Shrek";
            } else if(elementoEdad >= 13 && elementoEdad <= 18){
                elementoRecomendacion.textContent = "Son Como Niños";
            } if(elementoEdad > 18){
                elementoRecomendacion.textContent = "Y dónde están las rubias?"
            }
        break;
        case 'musical':
            if(elementoEdad>0 && elementoEdad <= 12){
                elementoRecomendacion.textContent = "Encanto";
            } else if(elementoEdad >= 13 && elementoEdad <= 18){ 
                elementoRecomendacion.textContent = "High School Musical";
            } if(elementoEdad > 18){
                elementoRecomendacion.textContent = "Bohemian Rhapsody"
            }
        break;
        case 'crimen':
            if(elementoEdad > 0 && elementoEdad <= 12){
                elementoRecomendacion.textContent = "Género no disponible para esta edad.";
            } else if(elementoEdad >= 13 && elementoEdad <= 18){
                elementoRecomendacion.textContent = "Sherlock Holmes / Robert Downey Jr.";
            } if(elementoEdad > 18){
                elementoRecomendacion.textContent = "Memento/Amnesia"
            }
        break;

        default:
            break;
    }
}