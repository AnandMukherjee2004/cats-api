let btn = document.querySelector("button");
let joke = document.querySelector("p");
let img = document.querySelector("img");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    joke.innerText = fact;
    let catImg = await getImg();
    img.setAttribute("src", catImg)
    console.log
})

let urlImg = "https://api.thecatapi.com/v1/images/search";
let urlFact = "https://catfact.ninja/fact";

// fetch(urlImg)

async function getImg(){
    try{
        let img = await axios.get(urlImg)
        console.log(img.data[0].url)
        return img.data[0].url;
    }
    catch(e){
        console.log(e)
    }
}

async function getFacts(){
    try{
        let res = await axios.get(urlFact)
        console.log(res);
        return res.data.fact
    }catch(e){
        console.log("error - ",e)
        return "No Fact Found"
    }
}