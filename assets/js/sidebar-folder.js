function spread(count){
    document.getElementById('folder-checkbox-' + count).checked =
        !document.getElementById('folder-checkbox-' + count).checked
    document.getElementById('spread-icon-' + count).innerHTML =
        document.getElementById('spread-icon-' + count).innerHTML == 'more_horiz' ?
            'expand_more' : 'more_horiz'
}
