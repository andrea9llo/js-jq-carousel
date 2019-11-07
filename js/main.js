// fare un carousel

$( document ).ready(function() {

  // al click della freccia devo scorrere le img e le palline in fondo
  $(".next").click(function(){

    var posizioneImg = $(".immagini ul li.active");
    var posizionePallina = $(".carousel i.active");

    posizioneImg.removeClass("active");
    posizionePallina.removeClass("active");

    if (posizioneImg.hasClass("last")) {
      $(".immagini ul li.first").addClass("active");
      $(".carousel i.first").addClass("active");
    } else {
      posizioneImg.next("li").addClass("active");
      posizionePallina.next("i").addClass("active");
    }
  })

  $(".prev").click(function(){

    var posizioneImg = $(".immagini ul li.active");
    var posizionePallina = $(".carousel i.active");

    posizioneImg.removeClass("active");
    posizionePallina.removeClass("active");

    if (posizioneImg.hasClass("first")) {
      $(".immagini ul li.last").addClass("active");
      $(".carousel i.last").addClass("active");
    } else {
      posizioneImg.prev("li").addClass("active");
      posizionePallina.prev("i").addClass("active");
    }

  })

})
// se scriviamo troppa roba dentro una funzione è possibile crearsi un'altra funzione
// per poi andarla a sostituire a quella anonima
