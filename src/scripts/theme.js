function darkMode (array){
    const html = document.querySelector("html");
    const darkButton = document.querySelector(".button__ilumination--mode");
    darkButton.classList.add("darkButton");


    darkButton.addEventListener("click", () => {
        html.classList.toggle("dark__mode");
    
        if (html.classList.contains("dark__mode")){
            darkButton.src = "src/assets/img/moon.png"
            localStorage.setItem("dark__mode", true)
        } else {
            darkButton.src = "src/assets/img/sun.png"
            localStorage.setItem("dark__mode", false)
        }
    })

    const modePreference = JSON.parse(localStorage.getItem("dark__mode"))

    if (modePreference){
        darkButton.src = "src/assets/img/moon.png"
        html.classList.add("dark__mode");
    } else {
        darkButton.src = "src/assets/img/sun.png"
        html.classList.remove("dark__mode");
    }
}
darkMode()