const nama = "ibnu cino";
let usia = 35;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    } else if (usia >= 30) {
        generasi = "generasi tua 😂";
    } else if (usia > 2 && usia < 10) {
        generasi = "genrasi bocil";
    } else {
        generasi = "generasi bayi 🤣";
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia);

generateBiodata();