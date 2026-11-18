(function(){

'use strict';

const root = document.getElementById('ffse');
if(!root || root.dataset.started) return;
root.dataset.started = 'yes';

const $ = id => root.querySelector('#' + id);

/* ==========================================
 1. WEBSITE SETTINGS
========================================== */

const CONFIG = {
  banner:'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/3e940af366395b2b0b82c6fc928e888094c3dcc0/banner.jpg',
  upiId: '8309404413-m0f3-5@ybl',
  payeeName: 'FF SOUND EFFECTS',
  primary: '#a95bff',
  secondary: '#31e7fa'
};

/* ==========================================
 2. CATEGORIES  (PNG ICONS)
========================================== */

const categories = [
  ['AR GUNS', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/AR%20GUNS.png'],
  ['RIFLES', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/RIFLES.png'],
  ['MACHINE GUNS', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/MACHINE%20GUNS.png'],
  ['SMG GUNS', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/SMG%20GUNS.png'],
  ['SHORTGUNS', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/SHORTGUNS.png'],
  ['SNIPERS', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/SNIPERS.png'],
  ['PISTON', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/PISTONS.png'],
  ['MELEE', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/MELEEPARA.png'],
  ['GRENADE', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/GRENADS.png'],
  ['EMOTES', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/EMOTE.png'],
  ['VIHECLES', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/VIHECLES.png'],
  ['CHARACTERS', 'https://placehold.co/80x80/171d32/31e7fa?text=SNP'],
  ['SKILLS', 'https://raw.githubusercontent.com/mp3fileshosting/Images/main/LOBBY%20MUSIC.png'],
  ['LOBBY MUSIC', 'https://placehold.co/80x80/171d32/31e7fa?text=ALT'],
  ['THEMES', 'https://placehold.co/80x80/171d32/31e7fa?text=MEM'],
  ['QUICK MESSAGES', 'https://placehold.co/80x80/171d32/31e7fa?text=MUS'],
  ['PETS', 'https://placehold.co/80x80/171d32/31e7fa?text=UI'],
  ['ANIMATIONS', 'https://placehold.co/80x80/171d32/31e7fa?text=OTH'],
  ['UNKNOWN SOUNDS', 'https://placehold.co/80x80/171d32/31e7fa?text=NVU']
];

/* ==========================================
 3. AUDIO DATABASE
========================================== */

  
const sounds = [
  {
    id: 1,
    title: 'Farafal Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Farafal_Gun_sound_effect___free_fire_farafal_Gun_sound_effect_2025(128k).mp3',
    date: '2026-11-15',
    trending: true,
    downloads: 150
  },
  {
    id: 2,
    title: 'AC80',
    category: 'RIFLES',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_Fire_AC80_Gun_Sound_Effect___AC80_Sound___FF_AC80_SFX___No_Copyright(128k).mp3',
    date: '2026-11-14',
    trending: true,
    downloads: 320
  },
  {
    id: 3,
    title: 'Winchester Gun sound',
    category: 'RIFLES',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_Fire_WINCHESTER_Gun_Sound_Effect_%E2%80%93_High_Quality_SFX___Winchester_gun_sound_effect_2025(128k).mp3',
    date: '2026-11-13',
    trending: true,
    downloads: 450
  },
  {
    id: 4,
    title: 'AN94 Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_fire_AN94_gun_sound_effect___AN94_gun_sound_effect_2025(128k).mp3',
    date: '2026-11-12',
    trending: false,
    downloads: 210
  },
  {
    id: 5,
    title: 'Famas Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_fire_Famas_gun_sound_effect___Famas_gun_sound_effect_2025(128k).mp3',
    date: '2026-11-11',
    trending: true,
    downloads: 520
  },
  {
    id: 6,
    title: 'Groza Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_fire_Groza_Gun_sound_effect___Groza_Gun_sound_effect_2025(128k).mp3',
    date: '2026-11-10',
    trending: true,
    downloads: 600
  },
  {
    id: 7,
    title: 'M4A1',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_fire_M4A1_Gun_sound_effect___M4A1_sound_effect_2025(128k).mp3',
    date: '2026-11-09',
    trending: false,
    downloads: 180
  },
  {
    id: 8,
    title: 'Plasma Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_fire_Plasma_gun_sound_effect___plasma_sound_effect_2025(128k).mp3',
    date: '2026-11-08',
    trending: true,
    downloads: 390
  },
  {
    id: 9,
    title: 'Scar Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_fire_Scar_gun_sound_effect___Scar_gun_sound_effect_2025(128k).mp3',
    date: '2026-11-07',
    trending: true,
    downloads: 710
  },
  {
    id: 10,
    title: 'XM8',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/Free_fire_XM8_Gun_sound_effect___XM8_Gun_sound_effect_2025(128k).mp3',
    date: '2026-11-06',
    trending: false,
    downloads: 95
  },
  {
    id: 11,
    title: 'AK47 Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_AK_47_sound_effect_3_sounds_Available___free_fire_gun_sound_effect_2025(128k).mp3',
    date: '2026-11-05',
    trending: false,
    downloads: 120
  },
  {
    id: 12,
    title: 'AR GUNS',
    category: 'Aug Gun sound',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_Aug_sound_effect___Aug_sound_effect_2025(128k).mp3',
    date: '2026-11-04',
    trending: true,
    downloads: 480
  },
  {
    id: 13,
    title: 'G36',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_G36_gun_sound_effect___G36_One_tap_Headshot_sound_effect_2025(128k).mp3',
    date: '2026-11-03',
    trending: false,
    downloads: 260
  },
  {
    id: 14,
    title: 'Kord Gun sound',
    category: 'FOOTSTEPS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_KORD_gun_sound_effect___KORD_gun_sound_effect_2025(128k).mp3',
    date: '2026-11-02',
    trending: true,
    downloads: 550
  },
  {
    id: 15,
    title: 'Kingfisher Gun sound',
    category: 'AR GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_Kingfisher_gun_sound_effect___Kingfisher_one_tap_Headshot_sound_effect_2025(128k).mp3',
    date: '2026-11-01',
    trending: false,
    downloads: 130
  },
  {
    id: 16,
    title: 'M249 Gun sound',
    category: 'MACHINE GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_M249_gun_sound_effect___M249_gun_sound_effect_2025(128k).mp3',
    date: '2026-10-31',
    trending: true,
    downloads: 340
  },
  {
    id: 17,
    title: 'M60 Gun sound',
    category: 'MACHINE GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_M60_gun_sound_effect___M60_gun_sound_effect_2025(128k).mp3',
    date: '2026-10-30',
    trending: false,
    downloads: 160
  },
  {
    id: 18,
    title: 'MP40 Gun sound',
    category: 'SMG GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_MP40_gun_sound_effect___MP40_gun_sound_effect_2025(128k).mp3',
    date: '2026-10-29',
    trending: true,
    downloads: 430
  },
  {
    id: 19,
    title: 'MP5 Gun sound',
    category: 'SMG GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_MP5_Gun_sound_effect___MP5_Gun_sound_effect_2025(128k).mp3',
    date: '2026-10-28',
    trending: false,
    downloads: 200
  },
  {
    id: 20,
    title: 'Mag10 Gun sound',
    category: 'SMG GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_Mag10_gun_sound_effect___mag10_sound_effect_2025(128k).mp3',
    date: '2026-10-27',
    trending: true,
    downloads: 110
  },
  {
    id: 21,
    title: 'P90 Gun sound',
    category: 'SMG GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_P90_gun_sound_effect___P90_gun_sound_effect_2025(128k).mp3',
    date: '2026-10-26',
    trending: true,
    downloads: 620
  },
  {
    id: 22,
    title: 'SVG/DRAGON Gun sound',
    category: 'RIFLES',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_SVD_gun_sound_effect___SVD_gun_sound_effect_2025(128k).mp3',
    date: '2026-10-25',
    trending: false,
    downloads: 290
  },
  {
    id: 23,
    title: 'Thomspon Gun sound',
    category: 'SMG GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_Thompson_Gun_sound_effect___Thompson_Gun_sound_effect_2025(128k).mp3',
    date: '2026-10-24',
    trending: true,
    downloads: 800
  },
  {
    id: 24,
    title: 'Ump Gun sound',
    category: 'SMG GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_UMP_Gun_sound_effect___UMP_Gun_sound_effect_2025(128k).mp3',
    date: '2026-10-23',
    trending: false,
    downloads: 175
  },
  {
    id: 25,
    title: 'Vss Gun sound',
    category: 'SMG GUNS',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_Vss_gun_sound_effect___Vss_gun_sound_effect_2025(128k).mp3',
    date: '2026-10-22',
    trending: false,
    downloads: 90
  },
  {
    id: 26,
    title: 'Woodpecker Gun sound',
    category: 'RIFLES',
    file: 'https://raw.githubusercontent.com/mp3fileshosting/ffmp3files/88114ce02d1cfe8baa7ce7b8002b9271060cbac8/free_fire_Woodpecker_gun_sound_effect___Woodpecker_gun_sound_2025(128k).mp3',
    date: '2026-10-21',
    trending: true,
    downloads: 370
  },
  {
    id: 27,
    title: 'Enemy Alert',
    category: 'ALERTS',
    file: 'assets/audio/enemy-alert.mp3',
    date: '2026-10-20',
    trending: false,
    downloads: 140
  },
  {
    id: 28,
    title: 'Danger Warning',
    category: 'ALERTS',
    file: 'assets/audio/danger-warning.mp3',
    date: '2026-10-19',
    trending: true,
    downloads: 230
  },
  {
    id: 29,
    title: 'Funny Meme Sound',
    category: 'MEMES',
    file: 'assets/audio/funny-meme.mp3',
    date: '2026-10-18',
    trending: false,
    downloads: 105
  },
  {
    id: 30,
    title: 'Viral Laugh',
    category: 'MEMES',
    file: 'assets/audio/viral-laugh.mp3',
    date: '2026-10-17',
    trending: true,
    downloads: 115
  },
  {
    id: 31,
    title: 'Lobby Music',
    category: 'MUSIC',
    file: 'assets/audio/lobby-music.mp3',
    date: '2026-10-16',
    trending: true,
    downloads: 310
  },
  {
    id: 32,
    title: 'Battle Music',
    category: 'MUSIC',
    file: 'assets/audio/battle-music.mp3',
    date: '2026-10-15',
    trending: false,
    downloads: 190
  },
  {
    id: 33,
    title: 'Game Start',
    category: 'GAME UI',
    file: 'assets/audio/game-start.mp3',
    date: '2026-10-14',
    trending: true,
    downloads: 900
  },
  {
    id: 34,
    title: 'Game Over',
    category: 'GAME UI',
    file: 'assets/audio/game-over.mp3',
    date: '2026-10-13',
    trending: false,
    downloads: 250
  },
  {
    id: 35,
    title: 'Booyah Sound',
    category: 'OTHERS',
    file: 'assets/audio/booyah.mp3',
    date: '2026-10-12',
    trending: true,
    downloads: 410
  },
  {
    id: 36,
    title: 'Victory Sound',
    category: 'OTHERS',
    file: 'assets/audio/victory.mp3',
    date: '2026-10-11',
    trending: false,
    downloads: 220
  },
  {
    id: 37,
    title: 'Nuvvu Funny Sound',
    category: 'Nuvvu',
    file: 'assets/audio/nuvvu-funny.mp3',
    date: '2026-10-10',
    trending: true,
    downloads: 135
  },
  {
    id: 38,
    title: 'Nuvvu Meme',
    category: 'Nuvvu',
    file: 'assets/audio/nuvvu-meme.mp3',
    date: '2026-10-09',
    trending: false,
    downloads: 280
  },
  {
    id: 39,
    title: 'Air Drop Sound',
    category: 'OTHERS',
    file: 'assets/audio/air-drop.mp3',
    date: '2026-10-08',
    trending: false,
    downloads: 155
  },
  {
    id: 40,
    title: 'Knockdown Sound',
    category: 'Ar guns',
    file: 'assets/audio/knockdown.mp3',
    date: '2026-10-07',
    trending: true,
    downloads: 170
  },
  {
    id: 41,
    title: 'Double Kill',
    category: 'Ar guns',
    file: 'assets/audio/double-kill.mp3',
    date: '2026-10-06',
    trending: true,
    downloads: 330
  },
  {
    id: 42,
    title: 'Triple Kill',
    category: 'SMG GUNS',
    file: 'assets/audio/triple-kill.mp3',
    date: '2026-10-05',
    trending: false,
    downloads: 100
  },
  {
    id: 43,
    title: 'Monster Kill',
    category: 'RIFLES',
    file: 'assets/audio/monster-kill.mp3',
    date: '2026-10-04',
    trending: true,
    downloads: 85
  },
  {
    id: 44,
    title: 'First Blood',
    category: 'SHORTGUNS',
    file: 'assets/audio/first-blood.mp3',
    date: '2026-10-03',
    trending: false,
    downloads: 240
  },
  {
    id: 45,
    title: 'Reload Sound',
    category: 'SNIPER GUNS',
    file: 'assets/audio/reload.mp3',
    date: '2026-10-02',
    trending: true,
    downloads: 650
  },
  {
    id: 46,
    title: 'Scope Open',
    category: 'AWM',
    file: 'assets/audio/scope-open.mp3',
    date: '2026-10-01',
    trending: false,
    downloads: 145
  },
  {
    id: 47,
    title: 'Scope Close',
    category: 'SNIPER',
    file: 'assets/audio/scope-close.mp3',
    date: '2026-09-30',
    trending: true,
    downloads: 390
  },
  {
    id: 48,
    title: 'Revive Sound',
    category: 'GAME UI',
    file: 'assets/audio/revive.mp3',
    date: '2026-09-29',
    trending: false,
    downloads: 205
  },
  {
    id: 49,
    title: 'Medkit Sound',
    category: 'OTHERS',
    file: 'assets/audio/medkit.mp3',
    date: '2026-09-28',
    trending: false,
    downloads: 185
  },
  {
    id: 50,
    title: 'Legendary Headshot',
    category: 'Ar guns',
    file: 'assets/audio/legendary-headshot.mp3',
    date: '2026-09-27',
    trending: true,
    downloads: 1000
  }
];


/* ==========================================
 3.1 CATEGORY PROPERTY FIX
========================================== */

// Supports both old "catagory" and correct "category"

sounds.forEach(function(sound){

  sound.category = String(
    sound.category || sound.catagory || 'OTHERS'
  ).trim();

  delete sound.catagory;

  if(!sound.category){
    sound.category = 'OTHERS';
  }

});

// Case-insensitive category comparison

function normalizeCategory(value){
  return String(value || 'OTHERS')
    .trim()
    .toLowerCase();
}

/* ==========================================
 4. THEME
========================================== */

root.style.setProperty('--primary', CONFIG.primary);
root.style.setProperty('--secondary', CONFIG.secondary);
root.style.setProperty('--glow', CONFIG.primary + '55');

$('ffBanner').src = CONFIG.banner;

/* ==========================================
 5. UPI QR GENERATOR
========================================== */

const validUpi = CONFIG.upiId &&
                 !CONFIG.upiId.includes('YOUR-UPI-ID');

if(validUpi){

  const upi = 'upi://pay?pa=' +
    encodeURIComponent(CONFIG.upiId) +
    '&pn=' +
    encodeURIComponent(CONFIG.payeeName) +
    '&cu=INR';

  const qr =
    'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=' +
    encodeURIComponent(upi);

  $('ffQr').src = qr;
  $('ffUpiLink').href = upi;
  $('ffPopupUpi').href = upi;

}

/* ==========================================
 6. HELPER FUNCTIONS
========================================== */

function escapeHTML(value){

  return String(value).replace(/[&<>"']/g, function(c){

    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c];

  });

}

function formatTime(seconds){

  if(!Number.isFinite(seconds) || seconds < 0){
    return '00:00';
  }

  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);

  return String(m).padStart(2, '0') +
         ':' +
         String(s).padStart(2, '0');

}

/* ==========================================
 7. CATEGORY SHOW ALL / SHOW LESS
========================================== */

function shouldShowAllCategories(){

  return window.matchMedia(
    '(min-width: 768px), (orientation: landscape)'
  ).matches;

}

let showAll = shouldShowAllCategories();

function renderCategories(){

  const list = showAll
    ? categories
    : categories.slice(0, 8);

  $('ffCategories').innerHTML = list.map(function(c){

    return '<button class="ff-cat" data-category="' +
      escapeHTML(c[0]) + '">' +

      '<img src="' + escapeHTML(c[1]) + '" alt="' + escapeHTML(c[0]) + '" class="ff-cat-icon">' +

      '<strong>' + escapeHTML(c[0]) + '</strong>' +

      '</button>';

  }).join('');

  $('ffShowAll').textContent =
    showAll ? 'SHOW LESS' : 'SHOW ALL';

  $('ffShowAll').hidden = shouldShowAllCategories();

}

$('ffShowAll').addEventListener('click', function(){

  showAll = !showAll;
  renderCategories();

});

window.addEventListener('resize', function(){

  const automatic = shouldShowAllCategories();

  if(automatic !== showAll){

    showAll = automatic;
    renderCategories();

  }

});

/* ==========================================
 8. AUDIO CARD GENERATOR & DURATION PRELOADER
========================================== */

const durationCache = {};

function preloadDurations(list){

  list.forEach(function(s){

    if(durationCache[s.id] !== undefined) return;
    if(!s.file) return;

    const tempAudio = document.createElement('audio');

    tempAudio.preload = 'metadata';
    tempAudio.src = s.file;

    const cleanup = function(){

      tempAudio.removeAttribute('src');
      tempAudio.load();
      tempAudio.remove();

    };

    tempAudio.addEventListener('loadedmetadata', function(){

      if(
        Number.isFinite(tempAudio.duration) &&
        tempAudio.duration > 0
      ){

        durationCache[s.id] = tempAudio.duration;

        root.querySelectorAll(
          '[data-duration="' + s.id + '"]'
        ).forEach(function(el){

          el.textContent = formatTime(tempAudio.duration);

        });

      }else{

        durationCache[s.id] = 0;

      }

      cleanup();

    }, { once: true });

    tempAudio.addEventListener('error', function(){

      durationCache[s.id] = 0;
      cleanup();

    }, { once: true });

  });

}

function makeCards(list){

  preloadDurations(list);

  return list.map(function(s){

    const cachedDuration =
      durationCache[s.id] > 0
      ? formatTime(durationCache[s.id])
      : '--:--';

    // FIXED CATEGORY BADGE

    const categoryName = escapeHTML(
      s.category || s.catagory || 'OTHERS'
    );

    return '' +

    '<article class="ff-audio" data-id="' + s.id + '">' +

      '<button class="ff-play" data-play="' + s.id + '" aria-label="Play audio">' +
        '<span class="ff-play-icon"></span>' +
      '</button>' +

      '<div class="ff-audio-info">' +

        '<p class="ff-audio-title">' +
          escapeHTML(s.title) +
        '</p>' +

        '<div class="ff-time">' +

          '<span data-current="' + s.id + '">00:00</span>' +

          '<span data-duration="' + s.id + '">' +
            cachedDuration +
          '</span>' +

        '</div>' +

      '</div>' +

      '<div class="ff-audio-center">' +

        '<span class="ff-cat-badge">' +
          categoryName +
        '</span>' +

      '</div>' +

      '<button class="ff-download" data-download="' + s.id + '" aria-label="Download audio">' +
        '<span class="ff-download-icon"></span>' +
      '</button>' +

    '</article>';

  }).join('');

}

/* ==========================================
 9. ONE PERSISTENT GLOBAL AUDIO PLAYER
========================================== */

const globalAudio = document.createElement('audio');

globalAudio.id = 'ffGlobalAudio';
globalAudio.preload = 'metadata';

globalAudio.setAttribute('playsinline', '');
globalAudio.setAttribute('webkit-playsinline', '');

globalAudio.style.display = 'none';

root.appendChild(globalAudio);

let currentSoundId = null;
let playPromise = null;

function updatePlayerUI(){

  root.querySelectorAll('.ff-play').forEach(function(btn){

    const playing =
      Number(btn.dataset.play) === currentSoundId &&
      !globalAudio.paused;

    btn.classList.toggle('is-playing', playing);

    btn.setAttribute(
      'aria-label',
      playing ? 'Pause audio' : 'Play audio'
    );

  });

}

function updateSoundTimes(){

  if(currentSoundId === null) return;

  const current = formatTime(globalAudio.currentTime);

  root.querySelectorAll(
    '[data-current="' + currentSoundId + '"]'
  ).forEach(function(el){

    el.textContent = current;

  });

  if(
    Number.isFinite(globalAudio.duration) &&
    globalAudio.duration > 0
  ){

    durationCache[currentSoundId] = globalAudio.duration;

    root.querySelectorAll(
      '[data-duration="' + currentSoundId + '"]'
    ).forEach(function(el){

      el.textContent = formatTime(globalAudio.duration);

    });

  }

}

[
  'loadedmetadata',
  'durationchange',
  'timeupdate',
  'canplay'
].forEach(function(evt){

  globalAudio.addEventListener(evt, updateSoundTimes);

});

globalAudio.addEventListener('play', updatePlayerUI);
globalAudio.addEventListener('pause', updatePlayerUI);

globalAudio.addEventListener('ended', function(){

  updatePlayerUI();
  updateSoundTimes();

});

globalAudio.addEventListener('error', function(){

  updatePlayerUI();

  console.error(
    'FF SOUND EFFECTS: audio could not load:',
    globalAudio.currentSrc,
    globalAudio.error
  );

});

globalAudio.addEventListener('stalled', function(){

  console.warn('FF SOUND EFFECTS: audio stalled (buffering)...');

});

globalAudio.addEventListener('waiting', function(){

  console.warn('FF SOUND EFFECTS: audio waiting for data...');

});

async function playSound(id){

  const sound = sounds.find(function(item){

    return item.id === id;

  });

  if(!sound || !sound.file) return;

  // Same sound → toggle

  if(currentSoundId === id && globalAudio.src){

    if(globalAudio.paused){

      if(globalAudio.ended){
        globalAudio.currentTime = 0;
      }

      try{

        playPromise = globalAudio.play();
        await playPromise;

      }catch(error){

        console.error(
          'FF SOUND EFFECTS playback error:',
          error
        );

        alert(
          'Audio play avvaledu. MP3 link correct ga undo, internet connection check cheyyandi.'
        );

      }

    }else{

      globalAudio.pause();

    }

    updatePlayerUI();
    return;

  }

  // New sound

  currentSoundId = id;

  globalAudio.pause();

  if(playPromise){
    playPromise.catch(function(){});
  }

  globalAudio.src = sound.file;

  updateSoundTimes();
  updatePlayerUI();

  try{

    playPromise = globalAudio.play();
    await playPromise;

  }catch(error){

    updatePlayerUI();

    console.error(
      'FF SOUND EFFECTS playback error:',
      error,
      'URL:',
      sound.file
    );

    alert(
      'Audio load/play avvaledu. Ee MP3 URL valid ga undo check cheyyandi.'
    );

  }

}

root.addEventListener('click', function(e){

  const playButton = e.target.closest('[data-play]');

  if(!playButton || !root.contains(playButton)) return;

  playSound(Number(playButton.dataset.play));

});

function bindAudio(container){

  updatePlayerUI();
  updateSoundTimes();

}

/* ==========================================
 10. FILTER SYSTEM
========================================== */

let currentFilter = 'trending';
let searchText = '';

function filteredSounds(){

  let list = sounds.slice();

  // SEARCH FILTER

  if(searchText){

    list = list.filter(function(s){

      return (
        String(s.title || '').toLowerCase().includes(searchText) ||
        normalizeCategory(s.category).includes(searchText)
      );

    });

  }

  // TRENDING FILTER

  if(currentFilter === 'trending'){

    list = list.filter(function(s){

      return s.trending === true;

    });

  }

  // LATEST FILTER

  if(currentFilter === 'latest'){

    list.sort(function(a, b){

      return new Date(b.date) - new Date(a.date);

    });

  }

  // POPULAR FILTER

  if(currentFilter === 'popular'){

    list.sort(function(a, b){

      return (b.downloads || 0) - (a.downloads || 0);

    });

  }

  return list;

}

function renderSounds(){

  const list = filteredSounds();

  $('ffAudioList').innerHTML = makeCards(list);

  $('ffSoundCount').textContent =
    list.length + ' SOUNDS';

  $('ffEmpty').hidden = list.length !== 0;

  bindAudio($('ffAudioList'));

}

/* ==========================================
 11. FILTER BUTTON EVENTS
========================================== */

const filterNames = {

  trending: 'TRENDING SOUNDS',
  latest: 'NEW UPLOADS',
  popular: 'MOST DOWNLOADED'

};

root.querySelectorAll('.ff-filter').forEach(function(btn){

  btn.addEventListener('click', function(){

    currentFilter = btn.dataset.filter;

    root.querySelectorAll('.ff-filter').forEach(function(b){

      b.classList.toggle('active', b === btn);

    });

    $('ffListTitle').textContent =
      filterNames[currentFilter] || 'ALL SOUNDS';

    renderSounds();

  });

});

/* ==========================================
 12. SEARCH + CLEAR
========================================== */

$('ffSearch').addEventListener('input', function(e){

  searchText = e.target.value.trim().toLowerCase();

  $('ffClearSearch').classList.toggle(
    'visible',
    searchText.length > 0
  );

  renderSounds();

});

$('ffClearSearch').addEventListener('click', function(){

  $('ffSearch').value = '';

  searchText = '';

  $('ffClearSearch').classList.remove('visible');

  renderSounds();

  $('ffSearch').focus();

});

/* ==========================================
 13. CATEGORY POPUP
========================================== */

$('ffCategories').addEventListener('click', function(e){

  const btn = e.target.closest('[data-category]');

  if(!btn) return;

  const category = btn.dataset.category;

  // CASE-INSENSITIVE MATCHING FIX

  const list = sounds.filter(function(s){

    return normalizeCategory(s.category) ===
           normalizeCategory(category);

  });

  $('ffCategoryTitle').textContent = category;

  $('ffCategorySounds').innerHTML = makeCards(list);

  $('ffCategoryEmpty').hidden = list.length !== 0;

  $('ffCategoryModal').classList.add('show');

  bindAudio($('ffCategorySounds'));

});

/* ==========================================
 14. LATEST UPLOADS
========================================== */

function renderLatest(){

  const list = sounds.slice().sort(function(a, b){

    return new Date(b.date) - new Date(a.date);

  }).slice(0, 6);

  $('ffLatestList').innerHTML = makeCards(list);

  bindAudio($('ffLatestList'));

}

/* ==========================================
 15. DONATION POPUP
========================================== */

const DONATE_KEY = 'ffse_donation_prompt_seen_v1';

let pendingDownload = null;

function downloadSound(id){

  const sound = sounds.find(function(s){

    return s.id === id;

  });

  if(!sound || !sound.file) return;

  const link = document.createElement('a');

  link.href = sound.file;

  link.download =
    sound.title.replace(/[^a-z0-9]/gi, '_') + '.mp3';

  link.target = '_blank';
  link.rel = 'noopener';

  document.body.appendChild(link);

  link.click();

  link.remove();

  sound.downloads++;

}

function requestDownload(id){

  if(localStorage.getItem(DONATE_KEY)){

    downloadSound(id);
    return;

  }

  pendingDownload = id;

  $('ffDonateModal').classList.add('show');

}

function continueDownload(){

  localStorage.setItem(DONATE_KEY, 'yes');

  $('ffDonateModal').classList.remove('show');

  if(pendingDownload !== null){

    downloadSound(pendingDownload);

    pendingDownload = null;

  }

}

$('ffContinue').addEventListener('click', continueDownload);

$('ffDonateClose').addEventListener('click', continueDownload);

$('ffPopupUpi').addEventListener('click', function(){

  localStorage.setItem(DONATE_KEY, 'yes');

});

root.addEventListener('click', function(e){

  const btn = e.target.closest('[data-download]');

  if(!btn) return;

  requestDownload(Number(btn.dataset.download));

});
  

/* ==========================================
 15.5 BACKGROUND SCROLL LOCK
========================================== */

let savedScrollY = 0;
let pageLocked = false;

function lockBackgroundScroll() {

  if (pageLocked) return;

  savedScrollY = window.scrollY;
  pageLocked = true;

  document.body.style.position = 'fixed';
  document.body.style.top = '-' + savedScrollY + 'px';
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
}

function unlockBackgroundScroll() {

  if (!pageLocked) return;

  pageLocked = false;

  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.overflow = '';

  window.scrollTo(0, savedScrollY);
}

function checkModalScrollLock() {

  const isOpen = root.querySelector('.ff-modal.show');

  if (isOpen) {
    lockBackgroundScroll();
  } else {
    unlockBackgroundScroll();
  }
}

const modalObserver = new MutationObserver(
  checkModalScrollLock
);

root.querySelectorAll('.ff-modal').forEach(function(modal) {

  modalObserver.observe(modal, {
    attributes: true,
    attributeFilter: ['class']
  });

});

checkModalScrollLock();

/* ==========================================
 16. MODAL CLOSE
========================================== */

root.querySelectorAll('[data-close]').forEach(function(btn){

  btn.addEventListener('click', function(){

    $(btn.dataset.close).classList.remove('show');

  });

});

root.querySelectorAll('.ff-modal').forEach(function(modal){

  modal.addEventListener('click', function(e){

    if(e.target === modal){

      if(modal.id === 'ffDonateModal'){

        continueDownload();

      }else{

        modal.classList.remove('show');

      }

    }

  });

});

  /* HEADER MENU */

const menuBtn = $('ffMenuBtn');
const menuDropdown = $('ffMenuDropdown');

menuBtn.addEventListener('click', function(e) {

  e.stopPropagation();

  menuDropdown.classList.toggle('open');

});

document.addEventListener('click', function(e) {

  if(!e.target.closest('#ffse .ff-menu')) {
    menuDropdown.classList.remove('open');
  }

});

document.addEventListener('keydown', function(e) {

  if(e.key === 'Escape') {
    menuDropdown.classList.remove('open');
  }

});
/* ==========================================
 17. INITIALIZE WEBSITE
========================================== */

renderCategories();

renderSounds();

renderLatest();

})();
