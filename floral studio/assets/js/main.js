import { BASE_URL } from "./constant.js";



const cards = document.querySelector(".flower-cards");
async function getData() {
    const res = await axios.get(BASE_URL);
    console.log(res.data)
    drawCard(res.data)

}

getData()

function drawCard(products) {
    cards.innerHTML= " "
    products.forEach(products => {

        cards.innerHTML += `
        <div class="flower-card col-3">
                <div class="flower-img">
<img src="${products.image}" alt="">
</div>
<p>${products.title}</p>
<p>${products.price}</p>
            </div>
        `
    });
}