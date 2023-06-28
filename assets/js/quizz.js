let reponse,
    numQuizz = 0;


$('#envoyer').click(function () {
    $.ajax({
        url: './assets/json/quizz_enigme.json',
        datatype: 'json',
        success: (quizz) => {
            let reponse = $('#input').val();
            
            if (reponse) {
                if (reponse == quizz[numQuizz].reponse) {
                    
                    if(numQuizz < 3) {
                        $('.titrepopup').text("BRAVO !");
                        $('p').text("Tu as trouvé la réponse. Es tu prêt pour l’énigme suivante ?");
                        $('.popup').css("display", "flex");
                        $('.btnpopup').click(function () {
                            
                            $('.popup').css("display", "none");
                            $('#alphabet').slideUp(1000).slideDown(1000);
                            setTimeout(() => {
                                $('#enonce').empty();
                                $('#enonce').text(quizz[numQuizz+1].enonce);
                                $('#textQuizz').text(quizz[numQuizz+1].enigme);
                                $('.enigme-wakanda').remove();
                                $('#input').empty();
                                $('.p1').empty();
                                $('.p1').text('Le savais tu ?');
                                $('.paragraphe-forever').empty();
                                $('.p2').text(quizz[numQuizz+1].saisTu);
                                
                            }, 250);
                        });
                        numQuizz++;
                    } else {

                        // Tu es reussit
                        $('#titre').text("");
                        $('#msg-result').text("");
                        $('#popup-result').css("display", "flex");
                    }                    
                }else {
                    // Oops! c'est faux
                    $('#titre').text("");
                    $('#msg-result').text("");
                    $('#popup-result').css("display", "flex");
                }
            }else {
                $('.transcription').append("<span id='error-message'></span>");
                console.log('Choisit une reponses')
            }
        },
        error: function (quizz) {
            console.log(quizz);
        }
    });
});