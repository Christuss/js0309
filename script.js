window.addEventListener("load", init);

function init() {
    const ARTICLE = document.querySelectorAll("article");
    ARTICLE[0].innerHTML += '<div><img src="https://th.bing.com/th/id/OIP.qSmj7gSgl66DKAKvlw-FbwHaE8?pid=ImgDet&rs=1" alt="kep"></div>';
    const DIV = document.querySelectorAll("article div");
    ARTICLE[0].innerHTML += '<button>ASD</button>';
    const BUTTON = document.querySelectorAll("article button");
    const KEP = document.querySelectorAll("article img");
    KEP[0].addEventListener("mouseenter", function(event) {
        const DIV = document.querySelectorAll("article div");
        DIV[0].classList.add("formazas");
        event.target.style.border = "5px solid green";
    });
    KEP[0].addEventListener("mouseleave", function(event) {
        const DIV = document.querySelectorAll("article div");;
        event.target.style.border = "0px";
    }); 

}

