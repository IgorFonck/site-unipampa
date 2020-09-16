jQuery(document).ready(function ($) {

    $('.close-tab').on('click', function () {
        // Ocultar aba
        $(this).parent().removeClass('active show');
        
        // Desmarcar botão
        var tabId = $(this).parent().attr('id');
        var buttonId = '#' + tabId + '-tab';
        $(buttonId).removeClass('active show');
    });

});