const toggleBar = document.getElementsByClassName("toggle-bar")[0];
const postIt = document.getElementsByClassName("post-it-contents")[0];
let on = true

toggleBar.addEventListener("click", function() {
    postIt.classList.toggle("select");
});
