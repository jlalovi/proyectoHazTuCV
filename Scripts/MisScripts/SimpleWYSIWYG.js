jQuery(document).ready(function ($) {
    $('.editControls a').click(function (e) {
        e.preventDefault();
        switch ($(this).data('role')) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'p':
                document.execCommand('formatBlock', false, $(this).data('role'));
                break;
            default:
                document.execCommand($(this).data('role'), false, null);
                break;
        }
    });
});