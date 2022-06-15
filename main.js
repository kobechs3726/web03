window.onload = function(){

    var luck = ["大凶","凶","末吉","小吉","中吉","吉","大吉"];
    var colors = ["赤","青","黄","緑","白","黒","金","銀","茶","紫"];
    var message,random_luck,random_color;
    var btn=document.getElementById("btn");
    var output=document.getElementById("output")

    btn.onclick = function(){
        random_luck = luck[Math.floor(Math.random() * luck.length)];
        random_colors = colors[Math.floor(Math.random() * colors.length)];

        message = "<h2>" + random_luck + "</h2>";
        message += "<p>ラッキーカラーは " + random_colors + "</p>";
        output.innerHTML = message;
    }
}