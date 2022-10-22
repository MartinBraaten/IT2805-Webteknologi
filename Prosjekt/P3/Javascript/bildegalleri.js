//lager en liste med alle bildene 
let imageList= [
    "img/Greskmat1.jpg","img/Greskmat2.jpg", "img/Greskmat3.jpg", "img/Greskmat4.jpg"
]

//kaller på id fra html
let image = document.getElementById("bildeGalleri")

let x = 0
//function som bytter bilde
setInterval(function() {
    image.setAttribute ("src", imageList [x % imageList.length])
    x++
}, 2000)
