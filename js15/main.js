const emoji = ["Banana", "Orange", "Apple", "Mango"]
document.getElementById("array").innerHTML = "["+emoji+"]";
if($("#ie").click()){ 
    emoji.push()
}
$("#is").click(() => $("p").show({duration:'fast', easing:'linear'}));
$("#ia").click(() => $("p").show({duration:'fast', easing:'linear'}));
if($("#re").click()){
    emoji.pop()
}
$("#rs").click(() => $("p").hide({duration:'fast', easing:'linear'}));
$("#ra").click(() => $("p").hide({duration:'fast', easing:'linear'}));