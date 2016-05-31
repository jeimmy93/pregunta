$(function()
{
<<<<<<< HEAD
    var pregunta = [] //guarda pregunta
=======
    var pregunta = [];//guarda pregunta
>>>>>>> origin/master
    numPregunta   =  0;
    var tiempo    = 0 ;
    var contadort = 0;
    var score     = 10;
    //var suma =0;
<<<<<<< HEAD
    var A = 0;
    var B = 0;
    var C = 0;
    var D = 0;
    var E = 0;
    var F = 0;



=======
>>>>>>> origin/master
  /*  var audios = [
                    {
                        sonido  :   "aplauce.mp3",
                        label   :   "aplauce"
                    },
                    {
                        sonido  :   "coin.mp3",
                        label   :   "coin"
                    },
                    {
                        sonido  :   "ping.mp3",
                        label   :   "ping"
                    }
                ];*/

    //Para cargar los audios del juego...
  /*  for(var audio = 0; audio < audios.length; audio++)
    {
        createjs.Sound.registerSound("sonidos/" + audios[audio].sonido, audios[audio].label);
    }
*/
    var cargarJson = function()
    {
        var txtOpciones = "";
      $.getJSON( "preguntas.json", function(data)
        {
            pregunta = data;
<<<<<<< HEAD
          cargarPregunta(pregunta);

            console.log(pregunta);
=======
            cargarPregunta();
            console.log(preguntas);
>>>>>>> origin/master
        });
    }();



    //Para cargar la pregunta...
    var cargarPregunta = function()
    {
        //debugger;
<<<<<<< HEAD
        //console.log("pregunta:  "+numPregunta);
        $("#pregunta").html(pregunta[numPregunta].preguntas)
=======
        console.log("pregunta:  "+numPregunta);
        $("#pregunta").html(pregunta[numPregunta].preguntas);
>>>>>>> origin/master
        console.log("pregunta"+ pregunta[numPregunta].preguntas)
        //contadort = 20;
      /*  tiempo = setInterval(function()
        {
            contadort--;
            $("#tiempo").html(" tiempo: " + contadort);
            if(contadort <= 0)
            {
                valrespuesta(0);
                 clearInterval(tiempo);
                console.log("perdiste");
            }
        }, 1000);*/
        //Para cargar las opciones de respuesta...

        for(var i = 0; i <= pregunta[numPregunta].opciones.length; i++)
        {
            $("#opcion_" + i).html(pregunta[numPregunta].opciones[i-1]).click(function(event) {
                var ind = Number(this.id.split("_")[1]);
                console.log(ind);
                valrespuesta(ind);

            });

        }
    };

    var valrespuesta=function(ind)
    {
<<<<<<< HEAD
while (pregunta[numPregunta]  < 11) {

      if (pregunta[numPregunta].Art == ind) {
           A = A+1;
         }
         else if (pregunta[numPregunta].Fin == ind) {
           B= B+1;
         }
         else if (pregunta[numPregunta].Com == ind) {
           C = C+1;
         }
         else if (pregunta[numPregunta].Bio == ind) {
           D= C+1;
         }
         else if (pregunta[numPregunta].Tec == ind) {
           E= E+1;
         }
         else if  (pregunta[numPregunta].Cien == ind){
           F=F+1;
         }
           }
           if (A>B && A>C && A>D && A>E && A>F) {
             swal({title: "Tu carrera ideal está enfocada en el arte y la arquitectura",   type: "success",imageUrl:"img/cara.jpeg"})
           }
           else if (B>A && B>C && B>D && B>E && B>F) {
             swal({title: "Tu carrera ideal está enfocada en el área financiera",   type: "success",imageUrl:"img/cara.jpeg"})
          }
          else if (C>A && C>B && C>D && C>E && C>F) {
             swal({title: "Tu carrera ideal está enfocada en el área de la comunicación",   type: "success",imageUrl:"img/cara.jpeg"})
          }
          else if (D>A && D>B && D>C && D>E && D>F) {
            swal({title: "Tu carrera ideal está enfocada en el área de la biología",   type: "success",imageUrl:"img/cara.jpeg"})
          }
          else if (E>A && E>B && E>C && E>D && E>F) {
              swal({title: "Tu carrera ideal está enfocada en el área de la TECNOLOGÍA",   type: "success",imageUrl:"img/cara.jpeg"})
          }
          else if (F>A && F>B && F>C && F>D && F>E) {
              swal({title: "Tu carrera ideal está enfocada en el área de la medicina",   type: "success",imageUrl:"img/cara.jpeg"})
          }



=======
>>>>>>> origin/master

        //clearInterval(tiempo);
      // if (pregunta[numPregunta].correctas == ind)
      //  {
            //swal({title: "!Bien Hecho!",   type: "success",imageUrl:"img/cara.jpeg"}, function ()
            //{
            // createjs.Sound.play("aplauce");
            //contadort = 5;
            //console.log("bien");
            //$("#score").html(" score: " + score);
            //score += 10;
<<<<<<< HEAD
          numPregunta++;
=======
           numPregunta++;
>>>>>>> origin/master
           cargarPregunta();


          //  });
      //  }
      //  else
        //{
          //  swal({title: "Ooops",
          //  text: "La respuesta correcta era: " + pregunta[numPregunta].opciones[(pregunta[numPregunta].correctas )-1] ,
            //type: "error",imageUrl:"img/error.gif"}, function ()
            //{
            //  createjs.Sound.play("ping");
        //     cargarPregunta();
      //      });
      //  }
<<<<<<< HEAD
        $("#titulo").html("Pregunta N°(" + numPregunta + ")");
    }
=======
      //  $("#titulo").html("Pregunta N°(" + numPregunta + ")");
    }


>>>>>>> origin/master
});
