document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const proximoPasso = button.getAttribute("data-proximo");
        document.querySelectorAll("div").forEach(div => div.classList.remove("ativo"));
        document.getElementById(proximoPasso).classList.add("ativo");
    });
});
