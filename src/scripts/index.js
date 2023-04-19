function musicGenre (array){
    const listUl = document.querySelector(".container__musicGenre--Ul");
    
    array.forEach((button, index) => {
        const listLi = document.createElement("li");
        listLi.classList.add("licard");

        const btn = document.createElement("button");
        btn.classList.add("btnGenreMusic");
        btn.innerText = button;
        btn.id = Number(index);
        btn.addEventListener("click", (event) =>{
            const btnClickId = Number(event.target.id)
            const btnId = Number(index);
            // console.log([button, btnClickId, btnId])
            if (btnClickId === index){
                // console.log(btnClickId)
                // console.log(btnId)
                let listUlVar = window.listUl
                listUlVar.innerHTML = "";
                // console.log(products)
                let filteredBtn = products.filter(product => product.category == btnClickId)
                filteredBtn = btnClickId == 0 ? products : filteredBtn
                // console.log(filteredBtn)
                createCards(filteredBtn)
            }
        })
        listLi.appendChild(btn);
        listUl.appendChild(listLi);
    });
}
musicGenre(categories);

function setPrice (array){
    let value = 0;
    const range = document.querySelector(".setPrice");
    const price = document.querySelector("#price");
    const listUl = document.querySelector(".container__albumsFound--Ul");
    window.listUl = listUl;
    const listLi = document.querySelector(".licardAlbums")

    range.addEventListener("input", (event) =>{
    value = Number(event.target.value);
        
    price.innerHTML = `${value.toFixed(2)}`;
        
    const setPriceFilter = array.filter((products) =>{
        if (Number(products.price) <= Number(price.innerHTML)){
            return products
        }

        })
        listUl.innerHTML = "";
        createCards(setPriceFilter);
        
    })
}
setPrice(products);

function createCards (obj){
    const listUl = document.querySelector(".container__albumsFound--Ul");

    obj.forEach(insertedAlbum => {
        // console.log(insertedAlbum.price)
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
createCards(products);