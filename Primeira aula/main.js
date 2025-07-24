$(document).ready(function(){
    $('header button').click(function() { //forma de adicionar um evento no jQuerry
        $('form').slideDown(); //animação
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //animação
    })

    $('form').on('submit', function(e) {  //segunda forma
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
            <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real" >
                Ver imagem em tamanho real
            </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('endereço-imagem-nova').val('');
        })
})
