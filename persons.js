$('a[href *= "person/show_person.aspx"] + a').each( function () {
    var nummerplade = ($(this).attr('onclick') + "").match('TextTo=([\\w-]+)');
    if (nummerplade) {
        $(this).before('<span style="margin-left:0.5em; margin-right:0.5em;">(' + nummerplade[1] + ')</span>');
    }
});
