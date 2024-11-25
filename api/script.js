function getApi(){
    fetch("https://northwind.vercel.app/api/suppliers")
   .then((response)=> response.json())
   .then((data)=> showData(data))


}

getApi()



function showData(data){
    const carddiv=document.querySelector(".carddiv")
    carddiv.innerHTML=" "

data.forEach(user => {
    
    carddiv.innerHTML+=
    `
   <div class="card">
    <h3> ${user.companyName}</h3>
    <h3> ${user.contactName}</h3>
    <p> ${user.contactTitle}</p>
    <button dataId=${user.id} class="delete-btn"><i class="fa-solid fa-delete-left"></i> </button></div>
    `

const btns=document.querySelectorAll(".delete-btn");

btns.forEach(btn => {
    btn.addEventListener("click",function(){
        const id=btn.getAttribute("dataId")
        fetch('https://northwind.vercel.app/api/suppliers/' + id, {
            method: 'DELETE',
          })
          .then(res => res.text()) // or res.json()
          .then(res => getApi())
    })
});


    // const i=document.createElement("i");
    // i.className="fa fa-remove ";

    // card.appendChild(i)


});


}