const buttonChangeTheme = document.getElementById("theme-button");

const body = document.querySelector("body");

const imageButtonChangeTheme = document.querySelector(".image-button");

buttonChangeTheme.addEventListener("click", () => {
    
    if(body.classList.contains("dark-mode")) {
        /* body.classList.remove("dark-mode"); */
        
        imageButtonChangeTheme.setAttribute("src", "./src/images/sun.png");
    } else {
        /* body.classList.add("dark-mode"); */
        
        imageButtonChangeTheme.setAttribute("src", "./src/images/moon.png");
    }
    
    body.classList.toggle("dark-mode");

});
