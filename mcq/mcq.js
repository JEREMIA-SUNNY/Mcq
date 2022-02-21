const ready = document.querySelector(".readyBtn");
const qstn = document.querySelector(".question");
const par = document.querySelector("#parent")
const readyBtn = document.querySelector(".ready");
const sub = document.querySelector(".btn");
const tim=document.querySelector(".timer")
let count=0;

function result() {
    var score = 0;

    if (document.getElementById('correct1').checked) {

        score++;

    }
    if (document.getElementById('correct2').checked) {

        score++;

    }
    if (document.getElementById('correct3').checked) {

        score++;

    }
    if (document.getElementById('correct4').checked) {

        score++;

    } if (document.getElementById('correct5').checked) {

        score++;

    }
    document.write("Your score is:" + score);
}
ready.addEventListener("click", () => {
    console.log(par)
    par.style.display = "grid";
    readyBtn.remove(ready);
    console.log(sub)
    sub.style.display = "block";
    console.log(tim)
    const tm=setInterval(()=>{
        count++; 
        tim.innerHTML=count;
        if(count===300){

          result();
            clearInterval(tm);
        
        }
    },1000)

});
