const glitch = document.getElementById("orcus-glitch");
glitch.style.display = "";
document.getElementById("orcus-page-1").style.display = "none";
document.getElementById("orcus-page-2").style.display = "none";
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
}, 5000)
