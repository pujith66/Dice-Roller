let x;

document.getElementById("b").onclick = function() {
    let randomno = Math.random() * 6;
    x = Math.ceil(randomno);
    document.getElementById("dice").src = `dice-six-faces-${x}.png`;
};

document.getElementById("reset").onclick = function() {
    document.getElementById("dice").src = `dice-six-faces-1.png`;
};
