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
       // se l evento ha successo fai quello che cè dentro le parentesi graffe
       // riga 20 è standard e data corrisponde alla risposta del server
       // e stato mi dice se ha successo o no
       "success": function (data, stato) {
         // possiamo dire che data è  l'oggetto(risposta) che contiene tutte le informazioni
         // che il server ci ha dato come risposta.
         // invece data.response è l informazione specifica che ci interessa e che prendiamo
         // dall'oggetto del server
         var rispostaServer = data.response;
         // in consol comparira in questo caso il numero random richiesto
         console.log(data.response);
         // sto cambiando il testo dell'elemento selezionato accedo alla proprieta testo
         // e inserisco il numero al'interno in quesot caso del quadratino
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


//  ajax è sempre un evento asincrono
//a un evento click mettiamo funzioni e if ed else allinterno dell evento
