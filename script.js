$('#slider-hero').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  mouseDrag: false,
  margin: 0,
  items: 1,
  navText: [
    "<i class='bi bi-caret-left-fill'></i>",
    "<i class='bi bi-caret-right-fill'></i>",
  ],
  navContainer: '#slider-hero-nav',
});

function initializeSliders(itemsCount, itemsCount2) {
  $('#tenaga-pendidik-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: itemsCount,
    navText: [
      "<i class='bi bi-caret-left-fill'></i>",
      "<i class='bi bi-caret-right-fill'></i>",
    ],
    navContainer: '#slider-tools-1',
  });

  $('#alumni-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: itemsCount2,
    navText: [
      "<i class='bi bi-caret-left-fill'></i>",
      "<i class='bi bi-caret-right-fill'></i>",
    ],
    navContainer: '#slider-tools-2',
  });

  $('#galeri-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: itemsCount,
    navText: [
      "<i class='bi bi-caret-left-fill'></i>",
      "<i class='bi bi-caret-right-fill'></i>",
    ],
    navContainer: '#slider-tools-3',
  });
}

function destroySliders() {
  $('#tenaga-pendidik-slider').owlCarousel('destroy');
  $('#alumni-slider').owlCarousel('destroy');
  $('#galeri-slider').owlCarousel('destroy');
}

function checkScreenSize() {
  let ukuranLayar = window.innerWidth;
  const topbar = document.querySelector('.topbar');
  destroySliders();

  if (ukuranLayar >= 992) {
    initializeSliders(3, 2);
    topbar.classList.add('container');
  } else if (ukuranLayar >= 480 && ukuranLayar < 992) {
    topbar.classList.remove('container');
    initializeSliders(2, 2);
  } else {
    initializeSliders(1, 1);
  }

  console.log(`ukuranLayar: ${ukuranLayar}px`);
}

// Memanggil fungsi untuk pertama kali
checkScreenSize();

// Menambahkan event listener untuk menangani resize
window.addEventListener('resize', checkScreenSize);

// Icon Music
const audioIconWrapper = document.querySelector('.icon-music-wrapper');
const audioIcon = document.querySelector('.icon-music-wrapper i');
let isPlaying = false;
const song = document.querySelector('#song');
let hasScrolled = false;
const boxQuest = document.querySelector('.quest');
const questActive = document.querySelector('.button-start');

questActive.addEventListener('click', function () {
  enableMusic();
  hasScrolled = true;
  boxQuest.classList.add('animate');

  // Menunggu animasi selesai (durasi 1 detik)
  boxQuest.addEventListener(
    'animationend',
    function () {
      boxQuest.style.display = 'none';
      audioIconWrapper.classList.add('musicOn');
    },
    { once: true }
  );
});

function enableMusic() {
  playAudio();
}

function playAudio() {
  song.volume = 0.6;
  audioIconWrapper.style.display = 'flex';
  song.play().catch(function (error) {
    // Handle play error
    alert(
      'Jika Audio Pada Icon Music Di Bawah Tidak Aktif, Klik Ikon Dua Kali 🙏🙏🙏',
      error
    );
  });
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIconWrapper.classList.remove('musicOn');
    audioIcon.classList.remove('bi-music-note-beamed');
    audioIcon.classList.add('bi-pause-fill');
  } else {
    audioIconWrapper.classList.add('musicOn');
    song.play().catch(function (error) {
      // Handle play error
      console.log('Audio play was prevented:', error);
    });
    audioIcon.classList.add('bi-music-note-beamed');
    audioIcon.classList.remove('bi-pause-fill');
  }

  isPlaying = !isPlaying;
};

// script.js

// Ambil semua elemen dengan kelas 'clickable'
const elements = document.querySelectorAll('#maaf');

// Fungsi yang akan dijalankan ketika elemen diklik
function showAlert(event) {
  event.preventDefault();
  alert('Maaf Layanan Ini Belum Tersedia 🙏🙏🙏');
}

// Tambahkan event listener 'click' ke setiap elemen
elements.forEach((element) => {
  element.addEventListener('click', showAlert);
});
