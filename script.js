let medals = ['🥇' , '🥈' , '🥉']


let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let country = document.querySelector(".country");
let score = document.querySelector(".score");
let addBtn = document.querySelector(".add");

//main div
let mainName = document.querySelector("#name");
let mainCountry = document.querySelector("#country")
let mainScore = document.querySelector("#score")
let del = document.querySelector(".del")
let minus5 = document.querySelector(".btn1")
let add5 = document.querySelector(".btn2")
let main = document.querySelector("main");

let arr = [];

addBtn.addEventListener("click" , () =>{
    let obj = {};

   obj.fname = fname.value;
   obj.lname = lname.value;
   obj.country = country.value;
   obj.score = score.value;
   
   arr.push(obj);
   
   updateOnUI();

   fname.value = ""
    score.value = ""
    lname.value = ""
    country.value = "";
})

function updateOnUI(){
    arr.sort ((a,b) =>{
        return b.score - a.score;
    })

    // console.log(arr);

    let data = "";

    arr.forEach((value, index) =>{
        let place = ""
if (index == 0){
    place = medals[index];
}else if (index == 1){
    place = medals[index];
}else if (index == 2){
    place = medals[index];
}else {
    place = index + 1;
}

        data += `
        <div class="core-box">
         <div class="main-box">
           <div class="data1">
                 <h1 class = "place">${place} </h1>
             </div>
             <div class="data1">
                 <p id = "name" class="name"><span class = "name1">${value.fname} ${value.lname}</span><br><span id="date">${new Date().getDate()}-${new Date().getMonth()  + 1}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span></p>
             </div>
             <div id = "country" class="data1">
                ${value.country}
             </div>
             <div id="score" class="data1">
                 ${value.score}
             </div> 
             <div class="data1">
                <div class="buttons">
                 <button class="del">
                     <span class="material-symbols-outlined">
                         delete
                         </span>
                 </button>
                 <button class="btn1">-5</button>
                 <button class="btn2">+5</button>
                </div>
             </div>
         </div>
        </div>
     `
    console.log(data);


     main.innerHTML = data;

     initializeBtns();
    })

   
}


function initializeBtns(){
    let  mainBox = document.querySelectorAll(".main-box");
    console.log(mainBox)
    mainBox.forEach((value,index) =>{
        value.addEventListener("click",(event) =>{
           if(event.target.classList.contains("btn2")){
            let value = parseInt(arr[index].score);
            value += 5;
            arr[index].score = value ;
           console.log( index)

            updateOnUI();
           }else if (event.target.classList.contains("btn1")){
            let value = parseInt(arr[index].score);
           value -= 5;
            arr[index].score = value 
            console.log( "index : " + index)
        //    console.log( arr[index])
          updateOnUI();
           }else if (event.target.innerText == "delete"){
            arr.splice(index , 1);
            event.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            updateOnUI();
            
           }
        })
    })
    
}

