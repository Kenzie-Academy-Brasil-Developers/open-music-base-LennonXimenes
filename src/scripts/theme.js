function darkMode (){
    const html = document.querySelector("html");
    const darkButton = document.querySelector("mode__controller");

    const modePreference = JSON.parse(localStorage.getItem("dark__mode"))

    if (modePreference){
        darkButton.innerText = "light mode"; /*por a foto img.src*/
        html.classList.add("dark__mode");
    } else {
        darkButton.innerText = "dark mode"; /*por a foto*/
        html.classList.remove("dark__mode");
    }

    darkButton.addEventListener("click", () => {
        html.classList.toggle("dark__mode");
    
        if (html.classList.contains("dark__mode")){
            darkButton.innerText = "light mode"
            localStorage.setItem("dark__mode", true)
        } else {
            darkButton.innerText = "dark mode"
            localStorage.setItem("dark__mode", false)
        }
    })
}

function render (array){
    const seriesUl = document.querySelector("series__list");    
    const animesUl = document.querySelector("series__list");    
    const othersUl = document.querySelector("series__list");    

    seriesUl.innerHTML = " ";
    animesUl.innerHTML = " ";
    othersUl.innerHTML = " ";

    array.forEach(element => {
        const card = createCard(element);
        
        if(element.type === "serie"){
        seriesUl.appendChild(card);
        } else if (CharacterData.type === "anime"){
            animesUl.appendChild(card);
        } else if (CharacterData.type === "other"){
            othersUl.appendChild(card)
        }
    });
}
