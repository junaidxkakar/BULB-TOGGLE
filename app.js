

let body = document.querySelector("body")
let h1 = document.querySelector("h1")

function btn(){
    const image = document.getElementById('on')
    if(image.src.match("offbulb")){
        image.src ="https://th.bing.com/th/id/OIP.oMW1unUixM5sGRqcZyeb_gHaMF?w=115&h=180&c=7&r=0&o=5&pid=1.7"
       let styl = body.style.background = "white"
        h1.style.color="black"
    } else {
       
        image.src = "offbulb.jfif"
        body.style.background ="black"
        h1.style.color = 'white'
    }
}