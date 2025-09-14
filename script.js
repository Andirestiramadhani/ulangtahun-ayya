const message = `Selamat ulang tahun, Aya 🤍
sorry bangek kemaren ga ngucapinn yah:((
yaaa betapa cepat waktu berjalan e,tapi semoga di umur yang baru ini,
your days be filled with peace, joy, and strength yah ayya

Andii cuma bisa doa dari jauh,
semoga Aya ketemu teman-teman yang baik, yang sefrekuensi,
yang bisa bikin tertawa dan jadi tempat cerita…
but please remember, no one will ever replace Andii.

Even though UIN and Polbeng keep us apart,
our friendship stays close here in the heart. ✨.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    const audio = document.getElementById("bgm"); // ambil audio
    letterBox.style.display = "block";
    let i = 0;

    // mulai musik dari menit 1:15
    audio.currentTime = 75;
    audio.play();

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
