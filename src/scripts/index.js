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
    
        // const setPriceFilter = array.filter((priceFilter) =>{
    //     return priceFilter.id >= range.value
    // }) 
    })
}
setPrice();

function albumsFound (obj){
    const listUl = document.querySelector(".container__albumsFound--Ul");

    obj.forEach(insertedAlbum => {
        const listLi = document.createElement("li");
        listLi.classList.add("licardAlbums");

         const divAlbum = document.createElement("div");
         divAlbum.classList.add("divAlbum");

         const divImg = document.createElement("div");
         divImg.classList.add("divImg");

         const imgAlbum = document.createElement("img");
         imgAlbum.classList.add("imgAlbum");
         imgAlbum.src = insertedAlbum.img;
         divImg.appendChild(imgAlbum);

        const divBandYear = document.createElement("div");
        divBandYear.classList.add("divBandYear");

         const bandAlbum = document.createElement("small");
         bandAlbum.classList.add("bandAlbum");
         bandAlbum.innerText = insertedAlbum.band;
         divBandYear.appendChild(bandAlbum);

         const yearAlbum = document.createElement("small");
         yearAlbum.classList.add("yearAlbum");
         yearAlbum.innerText = Number(insertedAlbum.year);
         divBandYear.appendChild(yearAlbum);

        const divTitle = document.createElement("div");
        divTitle.classList.add("divTitle");

         const titleAlbum = document.createElement("h3");
         titleAlbum.classList.add("titleAlbum");
         titleAlbum.innerText = insertedAlbum.title;
         divTitle.appendChild(titleAlbum);

         const divPriceBtn = document.createElement("div");
         divPriceBtn.classList.add("divPriceBtn");

         const priceAlbum = document.createElement("p");
         priceAlbum.classList.add("priceAlbum");
         priceAlbum.innerText = `R$ ${insertedAlbum.price.toFixed(2)}`;
         divPriceBtn.appendChild(priceAlbum);

         const btnAlbum = document.createElement("button");
         btnAlbum.classList.add("btnAlbum");
         btnAlbum.innerText = "Comprar";
         divPriceBtn.appendChild(btnAlbum);

         listLi.id = insertedAlbum.id
         
         divAlbum.append(divImg, divBandYear, divTitle, divPriceBtn);
         
         listLi.appendChild(divAlbum);
         listUl.appendChild(listLi)
    });
}
albumsFound(products);