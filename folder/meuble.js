// See Photos
let imgBigWidth = document.querySelectorAll(".size-big-width img");
let imgBigHeight = document.querySelectorAll(".size-big-height img");
let x = document.querySelectorAll(".seephoto .x");
imgBigWidth.forEach(img =>{
    img.onclick = ()=>{
        document.querySelector(".seephoto-width").style.display = 'block';
        document.querySelector(".seephoto-width img").src = img.getAttribute("src");
    }
})
imgBigHeight.forEach(img =>{
    img.onclick = ()=>{
        document.querySelector(".seephoto-height").style.display = 'block';
        document.querySelector(".seephoto-height img").src = img.getAttribute("src");
    }
})
x.forEach((x)=>{
    x.onclick = ()=>{
        // document.querySelectorAll(".seephoto").forEach(()=>{

        // })
        x.parentElement.style.display = "none";
    }
})

