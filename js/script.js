document.addEventListener("scroll",(e) => {
    const tb = document.querySelector(".back-to-the-top-btn");
    if(window.scrollY > 15) 
        tb.classList.add("show");
    else
        tb.classList.remove("show");
})