$(document).ready (function() {


  // Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
  // Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
  // Il numero ottenuto appare al centro del quadrato.

  var endpoint = "https://flynn.boolean.careers/exercises/api/random/int";


  $(".container").click(function() {
    var elemento = $(this);
    $.ajax(

     {
       "url": endpoint,
       "method": "GET",
       "success": function (data, stato) {
         var rispostaServer = data.response;
         console.log(data.response);
         elemento.text(rispostaServer);

         if (rispostaServer <= 5) {
          elemento.addClass("yellow");
          elemento.removeClass("green");

         } else  {
          elemento.addClass("green");
          elemento.removeClass("yellow");
         }

       },
       "error": function (richiesta, stato, errori){
         alert("errore");
       }
     }

   );
  });

});
