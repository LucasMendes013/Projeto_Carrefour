// DOCUMENTO JS
// CARROSSEL CARROSSEL CARROSSEL CARROSSEL CARROSSEL CARROSSEL CARROSSEL CARROSSEL CARROSSEL CARROSSEL CARROSSEL


const imgs = document.getElementById("img"); //estou pegando a imagem via id
const img = document.querySelectorAll("#img img"); //estou pegando as outras imagens

let idx = 0; //a imagem irá começar do 0, como posição base

function carrossel(){
    idx++; //estou adicionando o conteudo abaixo à minha variável

    if(idx > img.length - 1){ 
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 1500}px)`; //pegando a transformação e dizendo que irá ir 1500 px

}

setInterval(carrossel, 1800);//tempo em que carrosel passará para o lado


// modal 1

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//modal2 em css (lista)

function adicionar(){

  let text = document.getElementById('texto').value
  let list = document.getElementById('lista').innerHTML

  list += "<li>" +text+ "<li>"

  document.getElementById("lista").innerHTML = list

  document.getElementById("texto").value = null
}




//SCROOL AO TOPO

var scrollTop = function scrollToTop() {
  window.scrollTo(0, 0); // leva o scrool para topo 0px quando não estiver nele
      };


//MENSAGEM NOTA DE QUALIDADE QUEM SOMOS

      function msg1(){
        alert("Obrigado. Sua opinião é muito importante para nós.");
    }

      function msg2(){
        alert("Muito Contente");
    }

      function msg3(){
        alert("Satisfeito");
    }

      function msg4(){
        alert("Entediado");
    }

      function msg5(){
        alert("Insatisfeito");
    }

      function msg6(){
        alert("Bravo");
    }



//relogio

function relogio(){
  var data=new Date();
  var hor=data.getHours();
  var min=data.getMinutes();
  var seg=data.getSeconds();

  if (hor <10){
      hor="0" +hor;
  }
  if (min <10){
      min="0" +min;
  }
  if (seg <10){
      seg="0" +seg;
  }
  var horas=hor + ":" +min + ":" +seg;
  document.getElementById("rel").value=horas;
}
var timer=setInterval(relogio,1000)



