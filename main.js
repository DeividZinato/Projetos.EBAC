$(document).ready(function(e) {  
    $('form').on('submit', function(e){
        e.preventDefault();

        const afazer = $('form input[type="text"]').val();

        if (afazer.trim() !== ""){
            const novaLinha = $('<tr><td class = "topicos">' + afazer + '</td></tr>');

            $('table').append(novaLinha);
        
            $('form input[type="text"]').val('');
        } else {
            alert('Por favor adicione uma tarefa!');
        }
    });  

    $('table').on('click','.topicos', function(){
        $(this).toggleClass('riscado');
    });
});


