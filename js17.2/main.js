document.write("<h1>🏁Que comience el juego🏁</h1>");
let count1=0;
let count2=0;
    let papel= document.getElementById("pap")
    papel.onclick = function papel() {
        let player1="🖐";
        let Computer=Math.floor(Math.random()*10);
        if (Computer==0){
            Computer=Math.floor(Math.random()*10);
        }
        if (Computer>0 && Computer<4) {
            Computer="🖐"
        }
        if (Computer<7 && Computer>3) {
            Computer="🥊"
        }
        if (Computer>6) {
            Computer="✂"
        }

        if (player1==Computer) {
            document.write("<h5>       🃏player1"+player1+"</h5>");
            document.write("<h5>       🃏Computer"+Computer+"</h5>")
            document.write("<h4>    "+player1+" VS "+Computer+" empatan</h4>")
            document.write("<h3>🚩player1: ["+count1+"] Computer: ["+count2+"]🚩</h3>")
            document.write('<button id="pap">🖐</button>','<button id="pie">🥊</button>','<button id="tij">✂</button>')
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