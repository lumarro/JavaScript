document.write("<h1>🏁Que comience el juego🏁</h1>");
let count1=0;
let count2=0;
while (count1<3 && count2<3) {
    let player1=Math.floor(Math.random()*10);
    let Computer=Math.floor(Math.random()*10);
    if (player1==0){
        player1=Math.floor(Math.random()*10);
    }
    if (Computer==0){
        Computer=Math.floor(Math.random()*10);
    }
    if (player1>0 && player1<3) {
        player1="🖐"
    }
    if (player1>0 && Computer<3) {
        Computer="🖐"
    }
    if (player1>2 && player1<6) {
        player1="🥊"
    }
    if (Computer<6 && Computer>2) {
        Computer="🥊"
    }
    if (player1>5) {
        player="✂"
    }
    if (Computer>5) {
        Computer="✂"
    }
    if (player1==Computer) {
        document.write("<h5>       🃏player1"+player1+"</h5>");
        document.write("<h5>       🃏Computer"+Computer+"</h5>")
        document.write("<h4>    "+player1+" VS "+Computer+" empatan</h4>")
        document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
    }
    if (player1 === "🖐" && Computer === "🥊"){
        document.write("<h5>       🃏player1"+player1+"</h5>");
        document.write("<h5>       🃏Computer"+Computer+"</h5>")
        document.write("<h4>    "+player1+" gana a "+Computer+"</h4>")
        count1++
        document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
    }
    if (player1 === "🖐" && Computer === "✂"){
        document.write("<h5>       🃏player1"+player1+"</h5>");
        document.write("<h5>       🃏Computer"+Computer+"</h5>")
        document.write("<h4>    "+player1+" pierde contra "+Computer+"</h4>")
        count2++
        document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
    }
    if (player1 === "🥊" && Computer === "🖐"){
        document.write("<h5>       🃏player1"+player1+"</h5>");
        document.write("<h5>       🃏Computer"+Computer+"</h5>")
        document.write("<h4>    "+player1+" pierde contra "+Computer+"</h4>")
        count2++
        document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
    }
    if (player1 === "🥊" && Computer === "✂"){
        document.write("<h5>       🃏player1"+player1+"</h5>");
        document.write("<h5>       🃏Computer"+Computer+"</h5>")
        document.write("<h4>    "+player1+" gana a "+Computer+"</h4>")
        count1++
        document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
    }
    if (player1 === "✂" && Computer === "🖐"){
        document.write("<h5>       🃏player1"+player1+"</h5>");
        document.write("<h5>       🃏Computer"+Computer+"</h5>")
        document.write("<h4>    "+player1+" gana a "+Computer+"</h4>")
        count1++
        document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
    }
    if (player1 === "✂" && Computer === "🥊"){
        document.write("<h5>       🃏player1"+player1+"</h5>");
        document.write("<h5>       🃏Computer"+Computer+"</h5>")
        document.write("<h4>    "+player1+" pierde contra "+Computer+"</h4>")
        count2++
        document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
    }
    if (count1==3){
        document.write("<h2>Fin del juego gana Player1👾🙌</h2>")
    }
    if (count2==3){
        document.write("<h2>Fin del juego gana Computer👾🙌</h2>")
    }
}