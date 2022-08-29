const arr= ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
console.log(arr.fill("🍺",3));

const piña = (currentValue) => currentValue === "🍍";
const pizza = (currentValue) => currentValue === "🍕";
const arr1=["🍕","🍕","🍍","🍕","🍕"]
console.log(arr1.some(piña));
console.log(arr1.filter(pizza));

const arr2=["🍓","🍋","🍓","🍋","🍓"];
arr2.map(item => {
    switch(item) {
        case "🍓":
            console.log("🍄");
            break;
        case "🍋":
            console.log("🍋");
            break;

        deafult:
            break;
    }
});

const arr3=["🌶️","🥛","🌶️","🥛","🌶️","🥛"];
for (let i=0; i<arr3.length; i++) {
    if (arr3[i] == "🌶️") {
        arr3.splice(i+1, 0, '🥵');
    }
}
console.log(arr3);

const arr4=["🎴","🎴","🎴","🃏","🎴","🎴","🎴"]
for (let x=0; x<arr4.length-1; x++) {
    if (arr4[x] == "🎴") {
        arr4.splice(x+1,0,"🃏");
    } else if (arr4[6]=="🃏") {
        arr4.splice(5,1)
    }
}
console.log(arr4);