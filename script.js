// Default Bitmoji preview link
var defaultPreviewLink = 'https://preview.bitmoji.com/bm-preview/v3/avatar/body?scale=1&gender=1&style=5&rotation=0&beard=-1&body=3&bottom=10001401&breast=0&brow=1538&cheek_details=2697&clothing_type=1&ear=1424&eye=1610&eyelash=-1&eye_size=0&eye_spacing=0&face_proportion=1&footwear=354&glasses=8758&hair=2673&hair_tone=16777215&hair_treatment_tone=9163730&hat=-1&is_tucked=0&jaw=1389&mouth=2344&nose=1436&pupil=2152&pupil_tone=9163730&skin_tone=14737632&sock=1201&top=10000380&lipstick_tone=9671571&hat_tone1=7984103&hat_tone2=7984103&hat_tone3=7984103&hat_tone4=7984103&hat_tone5=7984103&hat_tone6=7984103&hat_tone7=7984103&hat_tone8=7984103&hat_tone9=7984103&brow_tone=3615014&beard_tone=3615014&bottom_tone1=2500134&bottom_tone2=2500134&bottom_tone3=2500134&bottom_tone4=2500134&bottom_tone5=2500134&bottom_tone6=2500134&bottom_tone7=2500134&bottom_tone8=2500134&bottom_tone9=2500134&bottom_tone10=2500134&footwear_tone1=2500134&footwear_tone2=9163730&footwear_tone3=9163730&footwear_tone4=9163730&footwear_tone5=9163730&footwear_tone6=9163730&footwear_tone7=9163730&footwear_tone8=9163730&footwear_tone9=9163730&footwear_tone10=9163730&sock_tone1=9163730&sock_tone2=9163730&sock_tone3=9163730&sock_tone4=9163730&top_tone1=9163730&top_tone2=9163730&top_tone3=9163730&top_tone4=9163730&top_tone5=9163730&top_tone6=9163730&top_tone7=9163730&top_tone8=9163730&top_tone9=9163730&top_tone10=9163730';

function updatePreviewImage() {
    var previewLink = defaultPreviewLink;
    
    // Update the preview link with the user's selected tones
    for (var i = 1; i <= 9; i++) {
        var hatTone = document.getElementById('hat-tone' + i).value;
        previewLink = updateUrlParameter(previewLink, 'hat_tone' + i, hatTone);
    }

    var items = ['glasses', 'outerwear', 'top', 'bottom', 'footwear'];
    items.forEach(function (item) {
        for (var i = 1; i <= 10; i++) {
            var tone = document.getElementById(item + '-tone' + i).value;
            previewLink = updateUrlParameter(previewLink, item + '_tone' + i, tone);
        }
    });

    // Set the updated preview link as the image source
    document.getElementById('preview-image').src = previewLink;
}

// Function to update a URL parameter
function updateUrlParameter(url, param, value) {
    var re = new RegExp('([?&])' + param + '=.*?(&|$)', 'i');
    var separator = url.indexOf('?') !== -1 ? '&' : '?';
    if (url.match(re)) {
        return url.replace(re, '$1' + param + '=' + value + '$2');
    } else {
        return url + separator + param + '=' + value;
    }
}

// Bind the updatePreviewImage function to the blur event of the tone input fields
document.querySelectorAll('.item-input').forEach(input => {
    input.addEventListener('blur', updatePreviewImage);
});

// Initially update the preview image
updatePreviewImage();
