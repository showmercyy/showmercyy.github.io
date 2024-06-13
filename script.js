function updatePreviewLink() {
    var baseUrl = 'https://preview.bitmoji.com/bm-preview/v3/avatar/body?scale=1&gender=1&style=5&rotation=0&beard=-1&body=3';
    var params = '';

    // Hat tones
    for (var i = 1; i <= 9; i++) {
        var tone = document.getElementById('hat-tone' + i).value;
        params += '&hat_tone' + i + '=' + tone;
    }

    // Other tones (glasses, outerwear, top, bottom, footwear)
    var items = ['glasses', 'outerwear', 'top', 'bottom', 'footwear'];
    items.forEach(function (item) {
        for (var i = 1; i <= 10; i++) {
            var tone = document.getElementById(item + '-tone' + i).value;
            params += '&' + item + '_tone' + i + '=' + tone;
        }
    });

    var previewLink = baseUrl + params;
    document.getElementById('preview-link-image').innerHTML = '<a href="' + previewLink + '" target="_blank">Preview link image</a>';
}

function showSection(sectionId) {
    var sections = document.getElementsByClassName('item-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    document.getElementById(sectionId).style.display = 'block';
}

function saveItem(item, count) {
    console.log('Saving ' + item);
    // Add logic to save item here
    alert('Saved ' + item + ' with ' + count + ' tones.');
}

// Initially update the preview link
updatePreviewLink();
