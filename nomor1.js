// 1. Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata didalam sebuah kalimat.

function changeWord(selectedText, changedText, text) {
  // membuat regex (regular expression ) untuk men-cek parameter selected text yang dimasukkan apakah sesuai dengan data
  // pada object RegExp terdapat method "gi" yang dibagi dua :
  // 1. 'g' yaitu global match yang berarti semua kata pada text(kalimat) akan terganti sesuai dengan parameter yang dimasukkan
  // 2. 'i' yaitu case-insenitive match yang berarti tidak menghiraukan huruf besar maupun kecil pada parameter
  const regex = new RegExp(selectedText, "gi");

  // membuat method replace untuk mengganti selectedText yang sudah disimpan dalam regex sebelumnya menjadi changedText
  const replace = text.replace(regex, changedText);

  // Mengembalikan text yang diubah pada replace
  return replace;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("menCintai", "membenci", kalimat1));
console.log(changeWord("bromO", "semeru", kalimat2));
