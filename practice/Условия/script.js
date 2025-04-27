let select = document.querySelector("select");
let para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather(){
  let choice = select.value;
  
  if (choice === 'sunny') {
    para.textContent = 
    "Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.";
  } else if (choice === 'snowing') {
    para.textContent = 
    "Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
  } else if (choice === "rainy") {
    para.textContent =
      "Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.";
    } else if (choice === 'overcast') {
    para.textContent = 
    "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
  } else {
    para.textContent = '';
  }
}

//-----------------------
let carName = document.getElementById("carshop");
let infoMore = document.getElementById("more");
    
carName.addEventListener("change", autoShop);
    
function autoShop() {
  let choiceAuto = carName.value;
      
  switch (choiceAuto){
    case "mercedes" : infoMore.textContent = 'Mercedes';
      break;
    case "bmw" : infoMore.textContent = 'BMW';
      break;
    case "audi" : infoMore.textContent = 'Audi';
      break;
    case "kia" : infoMore.textContent = 'Kia Motor';
      break;
    default : infoMore.textContent = 'more';
  }
};

// ---------------theme--------------------



