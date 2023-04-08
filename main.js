function generateImg(){
   
   
    const images = [ 
    innerHTML= ' <img src="./image/1.jpeg" alt=""> <h1 class = "h1">Nike Force</h1>',
    
    innerHTML= ' <img class = "image" src="./image/2.jpeg" alt=""> <h1 class = "h1">Nike Blazer Low</h1>',
    innerHTML= ' <img class = "image" src="./image/3.jpeg" alt=""> <h1 class = "h1">Nike Air Max</h1>' ,
    innerHTML= ' <img class = "image" src="./image/4.jpeg" alt=""> <h1 class = "h1">Nike Air Jordan 1 Mid</h1>',
    innerHTML= ' <img class = "image"  src="./image/5.jpeg" alt=""> <h1 class = "h1">Nike Revolution 5</h1>',
    innerHTML= ' <img class = "image" src="./image/6.jpeg" alt=""> <h1 class = "h1">Nike SB Dunk</h1>',
    innerHTML= ' <img class = "image" src="./image/7.jpeg" alt=""> <h1 class = "h1">Nike Air Force 1`07</h1>',
    innerHTML= ' <img class = "image" src="./image/8.jpeg" alt=""> <h1 class = "h1">Nike Force</h1>',
    innerHTML= ' <img class = "image" src="./image/9.jpeg" alt=""> <h1 class = "h1">Nike Air Force 1`07</h1>',
    innerHTML= ' <img class = "image" src="./image/10.jpeg" alt=""> <h1 class = "h1">Nike Reat Vision</h1>',
]


    
    const randomIndex = Math.floor(Math.random() * images.length)
    const img = images[randomIndex]
    document.getElementById('img').innerHTML = img
    

    function saveImg(){
        const img = document.getElementById('img').innerHTML
        localStorage.setItem('img', img)
    }
    }
    




    function loadImg() {
        const img = localStorage.getItem('img')
        if (img) {
            document.getElementById('img').innerHTML = img
        }else {
            generateImg()
        } 
    }

    

    
    document.getElementById('new-img').addEventListener('click', function() {
        generateImg()
        saveImg()
    })
    


    
    
    window.addEventListener('load', function(){
        loadImg
    })







