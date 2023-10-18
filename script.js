const selectBox = document.querySelector(".select-box"),
    selectBtnX = selectBox.querySelector(".options .playerX"),
    selectBtnO = selectBox.querySelector(".options .playerO");


window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

selectBtnX.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}