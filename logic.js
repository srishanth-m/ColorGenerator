const getColor = () =>{
    const num = Math.floor(Math.random() * 1677215);
    const randomcode = "#" + num.toString(16);
    console.log(num , randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color").innerText = randomcode;
}


document.getElementById("btn").addEventListener('click' , getColor);

getColor();