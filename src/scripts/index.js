function musicGenre (array){
    const listUl = document.querySelector(".container__musicGenre--Ul");
    
    array.forEach((button, index) => {
        const listLi = document.createElement("li");
        listLi.classList.add("licard");

        const btn = document.createElement("button");
        btn.classList.add("btnGenreMusic");
        btn.innerText = button;
        btn.dataset.musicGenre = Number(index);
        listLi.appendChild(btn);

        listUl.appendChild(listLi);
    });
}
musicGenre(categories);

function setPrice (){
    let value = 0;
    const range = document.querySelector(".setPrice");
    const price = document.querySelector("#price");

    range.addEventListener("input", (event) =>{
    value = Number(event.target.value);
        
    price.innerHTML  = `${value.toFixed(2)}`
    })
}
setPrice();