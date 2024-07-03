const url ="https://cat-fact.herokuapp.com/facts";
const ext= document.querySelector("#id");
const btn = document.querySelector("#btn");
const getFact= async() =>{
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    ext.innerText=(data[Math.floor(Math.random()*4)].text);



}
btn.addEventListener("click",getFact);
