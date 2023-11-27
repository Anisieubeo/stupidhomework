let submit = document.getElementById("submit")

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    const Productname = document.getElementById("productname").value
    const Price = document.getElementById("price").value
    const Image = document.getElementById("image").value
    var info =  [
        {
            PRODUCTNAME: Productname,
            PRICE: Price,
            IMAGE: Image,
        }
    ]
    localStorage.setItem("productinfo",JSON.stringify(info))
    var listing = document.getElementById('listing')
    for (let key of info){
        var item_div = document.createElement("div")    
        item_div.innerHTML = `
        <li class="product">
        <a class="img-wrapper" href="#">
          <img src="${key.IMAGE}" alt="" />
        </a>
        
        <div class="info">
          <div class="title">${key.PRODUCTNAME}</div>
          <div class="price">${"$" + key.PRICE}</div>
        </div>
      </li>
    </ul>`
        listing.appendChild(item_div)
    }
    
})

