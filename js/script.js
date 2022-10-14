const output = document.getElementById('output');
const lista = document.querySelector('ul');

const nomi = ["Manuel", "Ugo", "Lorenzo", "Carmelo"];
const userAdd = prompt('Aggiungi un nome:');

let isLorenzo = false;
let index;

nomi.push(userAdd);
nomi.push("Giuseppe");


console.log(nomi);

for(let i = 0; i < nomi.length; i++){
  const li = document.createElement('li');
  li.innerHTML = nomi[i];
  lista.append(li);
  
  if(nomi[i] === "Lorenzo"){
    index = i;
    isLorenzo = true;
  }
  console.log(nomi[i]);
}
if(isLorenzo){
  output.innerHTML = `Lorenzo c'è... trovato al posto ${index}`;
}else{
  output.innerHTML = "Lorenzo non c'è...";
}