const emoji = []
const array = ["📇", "🎨", "👾", "👆", "🍫", "🌁", "👇"]
document.getElementById("arr").innerHTML = "["+emoji+"]";
const ie = document.getElementById("ie");
const is = document.getElementById("is");
const ia = document.getElementById("ia");
const re = document.getElementById("re");
const rs = document.getElementById("rs");
const ra = document.getElementById("ra");
const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
ie.onclick = function() {
    if (emoji.length<array.length) {
        emoji.push(array[emoji.length]);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
}

is.onclick = function() {
    if (emoji.length<array.length) {
        emoji.unshift(array[emoji.length]);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
};
ia.onclick = function() {
    if (emoji.length<array.length) {
        emoji.splice(num1,0,array[emoji.length]);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
};
re.onclick = function() {
    emoji.pop();
    document.getElementById("arr").innerHTML = "["+emoji+"]";
};
rs.onclick = function() {
    emoji.shift();
    document.getElementById("arr").innerHTML = "["+emoji+"]";
};
ra.onclick = function() {
    if (emoji.length<=array.length) {
        emoji.splice(num2,1);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
};