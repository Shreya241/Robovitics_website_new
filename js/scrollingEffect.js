const element1 = document.getElementById('qwerty')
const element2 = document.getElementById('asdfgh')
const element3 = document.getElementById('zxcvbn')
const element4 = document.getElementById('poiuyt')
const element5 = document.getElementById('lkjhgf')
const element6 = document.getElementById('mnbvcx')
const element7 = document.getElementById('rtyuio')
const element8 = document.getElementById('dfghjk')
const element9 = document.getElementById('cvbnxc')

// orcus glitch
const glitch = document.getElementById("orcus-glitch");
glitch.style.display = "";
document.getElementById("orcus-page-1").style.display = "none";
document.getElementById("orcus-page-2").style.display = "none";

document.body.addEventListener("scroll", (t) => {
    if(document.body.scrollTop / window.innerHeight > -7 && document.body.scrollTop / window.innerHeight < 0.8){
        element1.classList.add("active")
        element2.classList.remove("active")
        element3.classList.remove("active")
        element4.classList.remove("active")
        element5.classList.remove("active")
        element6.classList.remove("active")
        element7.classList.remove("active")
        element8.classList.remove("active")
        element9.classList.remove("active")
        document.getElementById("navie").style.display = "none";
    }
    if((document.body.scrollTop / window.innerHeight > 0.95) && (document.body.scrollTop / window.innerHeight < 2) && window.innerWidth > 1200){
        element1.classList.remove("active")
        element2.classList.add("active")
        element3.classList.remove("active")
        element4.classList.remove("active")
        element5.classList.remove("active")
        element6.classList.remove("active")
        element7.classList.remove("active")
        element8.classList.remove("active")
        element9.classList.remove("active")
        document.getElementById("navie").setAttribute('style', 'display: block !important')
    }
    if((document.body.scrollTop / window.innerHeight > 2) && (document.body.scrollTop / window.innerHeight < 3)){
        element1.classList.remove("active")
        element2.classList.remove("active")
        element3.classList.add("active")
        element4.classList.remove("active")
        element5.classList.remove("active")
        element6.classList.remove("active")
        element7.classList.remove("active")
        element8.classList.remove("active")
        element9.classList.remove("active")
    }
    if((document.body.scrollTop / window.innerHeight > 3) && (document.body.scrollTop / window.innerHeight < 4)){
        element1.classList.remove("active")
        element2.classList.remove("active")
        element3.classList.remove("active")
        element4.classList.add("active")
        element5.classList.remove("active")
        element6.classList.remove("active")
        element7.classList.remove("active")
        element8.classList.remove("active")
        element9.classList.remove("active")
    }
    if((document.body.scrollTop / window.innerHeight > 4) && (document.body.scrollTop / window.innerHeight < 5)){
        element1.classList.remove("active")
        element2.classList.remove("active")
        element3.classList.remove("active")
        element4.classList.remove("active")
        element5.classList.add("active")
        element6.classList.remove("active")
        element7.classList.remove("active")
        element8.classList.remove("active")
        element9.classList.remove("active")

        // orcus glitch
        setTimeout(() => {
            glitch.style.display = "none";
        
            const orcusbutton = document.getElementById('orcus-button');
            document.getElementById("orcus-page-1").style.display = "flex";
            document.getElementById('orcus-button-1').style.display = "none";
            document.getElementById("orcus-page-2").style.display = "none";
            orcusbutton.addEventListener('click', () => {
                // console.log("hehe")
                document.getElementById("orcus-page-1").style.display = "none";
                document.getElementById("orcus-page-2").style.display = "block";
                document.getElementById('orcus-button-1').style.display = "block"
            })
        
            const orcus1button = document.getElementById('orcus-button-1');
            orcus1button.addEventListener('click', () => {
                // console.log("hehe")
                document.getElementById("orcus-page-2").style.display = "none";
                document.getElementById("orcus-page-1").style.display = "block";
                document.getElementById("orcus-page-1").style.display = "flex";
                document.getElementById('orcus-button-1').style.display = "none"
            })
        }, 4000)
    }
    if((document.body.scrollTop / window.innerHeight > 5) && (document.body.scrollTop / window.innerHeight < 6)){
        element1.classList.remove("active")
        element2.classList.remove("active")
        element3.classList.remove("active")
        element4.classList.remove("active")
        element5.classList.remove("active")
        element6.classList.add("active")
        element7.classList.remove("active")
        element8.classList.remove("active")
        element9.classList.remove("active")
    }
    if((document.body.scrollTop / window.innerHeight > 6) && (document.body.scrollTop / window.innerHeight < 7)){
        element1.classList.remove("active")
        element2.classList.remove("active")
        element3.classList.remove("active")
        element4.classList.remove("active")
        element5.classList.remove("active")
        element6.classList.remove("active")
        element7.classList.add("active")
        element8.classList.remove("active")
        element9.classList.remove("active")
    }
    if((document.body.scrollTop / window.innerHeight > 7) && (document.body.scrollTop / window.innerHeight < 8)){
        element1.classList.remove("active")
        element2.classList.remove("active")
        element3.classList.remove("active")
        element4.classList.remove("active")
        element5.classList.remove("active")
        element6.classList.remove("active")
        element7.classList.remove("active")
        element8.classList.add("active")
        element9.classList.remove("active")
    }
    if((document.body.scrollTop / window.innerHeight > 7.5) && (document.body.scrollTop / window.innerHeight < 8.1)){
        element1.classList.remove("active")
        element2.classList.remove("active")
        element3.classList.remove("active")
        element4.classList.remove("active")
        element5.classList.remove("active")
        element6.classList.remove("active")
        element7.classList.remove("active")
        element8.classList.remove("active")
        element9.classList.add("active")
    }

})