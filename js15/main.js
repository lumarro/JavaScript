const emoji = []
const array = ["📇", "🎨", "👾", "👆", "🍫", "🌁", "👇"]
document.getElementById("arr").innerHTML = "["+emoji+"]";
const ie = document.getElementById("ie");
const is = document.getElementById("is");
const ia = document.getElementById("ia");
const re = document.getElementById("re");
const rs = document.getElementById("rs");
const ra = document.getElementById("ra");
ie.onclick = () => {
    if (emoji.length<array.length) {
        emoji.push(array[emoji.length]);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
}

is.onclick = () => {
    if (emoji.length<array.length) {
        emoji.unshift(array[emoji.length]);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
};
ia.onclick =() => {
    if (emoji.length<array.length) {
        const num1 = document.getElementById("num1").value;
        emoji.splice(num1,0,array[emoji.length]);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
};
re.onclick = () => {
    emoji.pop();
    document.getElementById("arr").innerHTML = "["+emoji+"]";
};
rs.onclick = () => {
    emoji.shift();
    document.getElementById("arr").innerHTML = "["+emoji+"]";
};
ra.onclick = () => {
    if (emoji.length<=array.length) {
        const num2 = document.getElementById("num2").value;
        emoji.splice(num2,1);
        document.getElementById("arr").innerHTML = "["+emoji+"]";
    }
};