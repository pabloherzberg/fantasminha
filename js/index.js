 function EseEsconde(){
    document.getElementById("bracoe").style.transform="rotate(120deg)";
    document.getElementById("bracoe").style.marginLeft="-2%";
    document.getElementById("bracoe").style.zIndex=1;
  }
  function DseEsconde(){
    document.getElementById("bracod").style.transform="rotate(-120deg)";
    document.getElementById("bracod").style.marginLeft="45%";
    document.getElementById("bracod").style.zIndex=1;
    document.getElementById("boca").style.animation="fecharboca 1s 1";
    document.getElementById("boca-fundo").style.backgroundColor="antiquewhite";
    document.getElementById("lingua").style.backgroundColor="antiquewhite";
    document.getElementById("fissura-lingua").style.backgroundColor="antiquewhite";
  document.getElementById("corpo").style.animation="tremer .1s infinite";
  }
function revela(){
  document.getElementById("bracoe").style.transform="rotate(20deg)";
  document.getElementById("bracoe").style.marginLeft="-25%";
  document.getElementById("bracoe").style.zIndex=1;
  document.getElementById("bracod").style.transform="rotate(-20deg)";
  document.getElementById("bracod").style.marginLeft="90%";
  document.getElementById("bracod").style.zIndex=1;
  document.getElementById("boca").style.animation="fecharboca 5s infinite";
  document.getElementById("boca-fundo").style.backgroundColor="black";
  document.getElementById("lingua").style.backgroundColor="pink";
  document.getElementById("fissura-lingua").style.backgroundColor="black";
  document.getElementById("corpo").style.animation="tremer 0s infinite";
}
function AlteraTamanho(){
  document.getElementById("corpo").style.width="30vh";
  document.getElementById("corpo").style.width="30vh";
}
function Normal(){
  document.getElementById("corpo").style.width="20vw";
  document.getElementById("corpo").style.height="20vw";
  document.getElementById("bracoe").style.position="absolute";
  document.getElementById("corpo").style.borderRadius="50%";
}
function AlteraForma(){
  document.getElementById("corpo").style.height="40vw";
  document.getElementById("corpo").style.borderRadius="0%";

}
function AlteraPosition(){
  document.getElementById("bracoe").style.position="relative";
}
function animaBraco(){
  document.getElementById("bracoe").style.animation="animaBraco 0.5s infinite";
}