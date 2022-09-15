let btn_sim = document.getElementById("sim");
let naos_list = [];

for (let i = 0; i < 30; i++) {
    naos_list[i] = document.getElementById("nao"+i);
  } 

let btn_nao = naos_list[Math.floor(Math.random() * 30)];

for (let i = 0; i < 30; i++) {
    if (naos_list[i] != btn_nao){
        naos_list[i].style.cssText =
        'color: blue;' +
        'background-color: blue;';
    }
}

btn_nao.onclick = function() {troca()};
btn_sim.onclick = function() {yesFunction()};

function yesFunction() {
    document.getElementById("container").innerHTML = `<h1> Você escolheu a melhor opção!</h1>
    <span style='font-size:100px;'>&#128152;</span>`;

console.log("click")
}

function troca(){
    
    btn_nao.style.cssText =
    'color: black;' +
    'background-color: white;';

    for (let i = 0; i < 30; i++) {
        if (naos_list[i] != btn_nao){
            naos_list[i].style.cssText =
            'color: blue;' +
            'background-color: blue;';
        }    
    }
    let anterior = btn_nao;
    btn_nao = naos_list[Math.floor(Math.random() * 30)];
   
    if (anterior = btn_nao){
        btn_nao = naos_list[Math.floor(Math.random() * 30)];
    }
    btn_nao.onclick = function() {troca()};
    console.log(btn_nao);
}


console.log(naos_list);
console.log(btn_nao);