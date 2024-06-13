// script.js

document.addEventListener("DOMContentLoaded", function() {
    const previewImage = document.getElementById('preview-image');
    const defaultUrl = "https://preview.bitmoji.com/bm-preview/v3/avatar/body?scale=1&gender=1&style=5&rotation=0&beard=-1&body=3&bottom=10001401&breast=0&brow=1538&cheek_details=-1&clothing_type=1&ear=1424&eye=1619&eyelash=-1&eye_size=0&eye_spacing=0&face_proportion=1&footwear=10000504&glasses=8758&hair=2673&hair_tone=3613466&hair_treatment_tone=3353384&hat=&is_tucked=0&jaw=1388&mouth=2337&nose=1436&pupil=2152&pupil_tone=16711680&skin_tone=12434877&sock=1201&top=1219";

    previewImage.src = defaultUrl;
});
