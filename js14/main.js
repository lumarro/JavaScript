const arr= ["ð","ð¯","ð£","ð","ð","ð±","ð","ð","ð¥©"];
console.log(arr.fill("ðº",3));

const piÃ±a = (currentValue) => currentValue === "ð";
const pizza = (currentValue) => currentValue === "ð";
const arr1=["ð","ð","ð","ð","ð"]
console.log(arr1.some(piÃ±a));
console.log(arr1.filter(pizza));

const arr2=["ð","ð","ð","ð","ð"];
for (let y=0; y<arr2.length; y=y+2) {
    arr2.splice(y,1,"ð");
}
console.log(arr2);

const arr3=["ð¶ï¸","ð¥","ð¶ï¸","ð¥","ð¶ï¸","ð¥"];
for (let i=0; i<arr3.length; i++) {
    if (arr3[i] == "ð¶ï¸") {
        arr3.splice(i+1, 0, 'ð¥µ');
    }
}
console.log(arr3);

const arr4=["ð´","ð´","ð´","ð","ð´","ð´","ð´"]
for (let x=0; x<arr4.length-1; x++) {
    if (arr4[x] == "ð´") {
        arr4.splice(x+1,0,"ð");
    } else if (arr4[6]=="ð") {
        arr4.splice(5,1)
    }
}
console.log(arr4);