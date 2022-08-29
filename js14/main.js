const arr= ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
console.log(arr.fill("🍺",3));

const piña = (currentValue) => currentValue === "🍍";
const pizza = (currentValue) => currentValue === "🍕";
const arr1=["🍕","🍕","🍍","🍕","🍕"]
console.log(arr1.some(piña))
console.log(arr1.filter(pizza))

const arr2=["🍓","🍋","🍓","🍋","🍓"]
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

const arr3=["🌶️","🥛","🌶️","🥛","🌶️","🥛"]
console.log(arr3.)