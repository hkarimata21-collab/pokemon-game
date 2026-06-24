// ====================
// ポケモンデータ
// ====================

const pokemonList = [
  // ===== 初代（超人気）=====
{ dexNo: 1, pokemonId: 25, name: "ピカチュウ" },
{ dexNo: 2, pokemonId: 133, name: "イーブイ" },
{ dexNo: 3, pokemonId: 6, name: "リザードン" },
{ dexNo: 4, pokemonId: 3, name: "フシギバナ" },
{ dexNo: 5, pokemonId: 9, name: "カメックス" },
{ dexNo: 6, pokemonId: 150, name: "ミュウツー" },
{ dexNo: 7, pokemonId: 151, name: "ミュウ" },
{ dexNo: 8, pokemonId: 94, name: "ゲンガー" },
{ dexNo: 9, pokemonId: 130, name: "ギャラドス" },
{ dexNo: 10, pokemonId: 143, name: "カビゴン" },

{ dexNo: 11, pokemonId: 131, name: "ラプラス" },
{ dexNo: 12, pokemonId: 149, name: "カイリュー" },
{ dexNo: 13, pokemonId: 65, name: "フーディン" },
{ dexNo: 14, pokemonId: 68, name: "カイリキー" },
{ dexNo: 15, pokemonId: 76, name: "ゴローニャ" },
{ dexNo: 16, pokemonId: 59, name: "ウインディ" },
{ dexNo: 17, pokemonId: 52, name: "ニャース" },
{ dexNo: 18, pokemonId: 54, name: "コダック" },
{ dexNo: 19, pokemonId: 39, name: "プリン" },
{ dexNo: 20, pokemonId: 35, name: "ピッピ" },

{ dexNo: 21, pokemonId: 249, name: "ルギア" },
{ dexNo: 22, pokemonId: 250, name: "ホウオウ" },
{ dexNo: 23, pokemonId: 251, name: "セレビィ" },
{ dexNo: 24, pokemonId: 248, name: "バンギラス" },
{ dexNo: 25, pokemonId: 212, name: "ハッサム" },
{ dexNo: 26, pokemonId: 214, name: "ヘラクロス" },
{ dexNo: 27, pokemonId: 181, name: "デンリュウ" },
{ dexNo: 28, pokemonId: 196, name: "エーフィ" },
{ dexNo: 29, pokemonId: 197, name: "ブラッキー" },
{ dexNo: 30, pokemonId: 169, name: "クロバット" },

{ dexNo: 31, pokemonId: 257, name: "バシャーモ" },
{ dexNo: 32, pokemonId: 260, name: "ラグラージ" },
{ dexNo: 33, pokemonId: 254, name: "ジュカイン" },
{ dexNo: 34, pokemonId: 282, name: "サーナイト" },
{ dexNo: 35, pokemonId: 376, name: "メタグロス" },
{ dexNo: 36, pokemonId: 359, name: "アブソル" },
{ dexNo: 37, pokemonId: 384, name: "レックウザ" },
{ dexNo: 38, pokemonId: 382, name: "カイオーガ" },
{ dexNo: 39, pokemonId: 383, name: "グラードン" },
{ dexNo: 40, pokemonId: 385, name: "ジラーチ" },

{ dexNo: 41, pokemonId: 380, name: "ラティアス" },
{ dexNo: 42, pokemonId: 381, name: "ラティオス" },
{ dexNo: 43, pokemonId: 445, name: "ガブリアス" },
{ dexNo: 44, pokemonId: 448, name: "ルカリオ" },
{ dexNo: 45, pokemonId: 389, name: "ドダイトス" },
{ dexNo: 46, pokemonId: 392, name: "ゴウカザル" },
{ dexNo: 47, pokemonId: 395, name: "エンペルト" },
{ dexNo: 48, pokemonId: 470, name: "リーフィア" },
{ dexNo: 49, pokemonId: 471, name: "グレイシア" },
{ dexNo: 50, pokemonId: 483, name: "ディアルガ" },

{ dexNo: 51, pokemonId: 484, name: "パルキア" },
{ dexNo: 52, pokemonId: 487, name: "ギラティナ" },
{ dexNo: 53, pokemonId: 491, name: "ダークライ" },
{ dexNo: 54, pokemonId: 492, name: "シェイミ" },
{ dexNo: 55, pokemonId: 493, name: "アルセウス" },
{ dexNo: 56, pokemonId: 494, name: "ビクティニ" },
{ dexNo: 57, pokemonId: 570, name: "ゾロア" },
{ dexNo: 58, pokemonId: 571, name: "ゾロアーク" },
{ dexNo: 59, pokemonId: 635, name: "サザンドラ" },
{ dexNo: 60, pokemonId: 643, name: "レシラム" },

{ dexNo: 61, pokemonId: 644, name: "ゼクロム" },
{ dexNo: 62, pokemonId: 646, name: "キュレム" },
{ dexNo: 63, pokemonId: 501, name: "ミジュマル" },
{ dexNo: 64, pokemonId: 653, name: "フォッコ" },
{ dexNo: 65, pokemonId: 656, name: "ケロマツ" },
{ dexNo: 66, pokemonId: 658, name: "ゲッコウガ" },
{ dexNo: 67, pokemonId: 700, name: "ニンフィア" },
{ dexNo: 68, pokemonId: 716, name: "ゼルネアス" },
{ dexNo: 69, pokemonId: 717, name: "イベルタル" },
{ dexNo: 70, pokemonId: 718, name: "ジガルデ" },

{ dexNo: 71, pokemonId: 719, name: "ディアンシー" },
{ dexNo: 72, pokemonId: 722, name: "モクロー" },
{ dexNo: 73, pokemonId: 725, name: "ニャビー" },
{ dexNo: 74, pokemonId: 728, name: "アシマリ" },
{ dexNo: 75, pokemonId: 778, name: "ミミッキュ" },
{ dexNo: 76, pokemonId: 791, name: "ソルガレオ" },
{ dexNo: 77, pokemonId: 792, name: "ルナアーラ" },
{ dexNo: 78, pokemonId: 800, name: "ネクロズマ" },
{ dexNo: 79, pokemonId: 807, name: "ゼラオラ" },
{ dexNo: 80, pokemonId: 808, name: "メルタン" },

{ dexNo: 81, pokemonId: 809, name: "メルメタル" },
{ dexNo: 82, pokemonId: 810, name: "サルノリ" },
{ dexNo: 83, pokemonId: 813, name: "ヒバニー" },
{ dexNo: 84, pokemonId: 816, name: "メッソン" },
{ dexNo: 85, pokemonId: 835, name: "ワンパチ" },
{ dexNo: 86, pokemonId: 849, name: "ストリンダー" },
{ dexNo: 87, pokemonId: 877, name: "モルペコ" },
{ dexNo: 88, pokemonId: 887, name: "ドラパルト" },
{ dexNo: 89, pokemonId: 888, name: "ザシアン" },
{ dexNo: 90, pokemonId: 889, name: "ザマゼンタ" },

{ dexNo: 91, pokemonId: 890, name: "ムゲンダイナ" },
{ dexNo: 92, pokemonId: 898, name: "バドレックス" },
{ dexNo: 93, pokemonId: 172, name: "ピチュー" },
{ dexNo: 94, pokemonId: 175, name: "トゲピー" },
{ dexNo: 95, pokemonId: 298, name: "ルリリ" },
{ dexNo: 96, pokemonId: 280, name: "ラルトス" },
{ dexNo: 97, pokemonId: 174, name: "ププリン" },
{ dexNo: 98, pokemonId: 300, name: "エネコ" },
{ dexNo: 99, pokemonId: 427, name: "ミミロル" },
{ dexNo: 100, pokemonId: 446, name: "ゴンベ" },

{ dexNo: 101, pokemonId: 702, name: "デデンネ" },
{ dexNo: 102, pokemonId: 906, name: "ニャオハ" },
{ dexNo: 103, pokemonId: 907, name: "ニャローテ" },
{ dexNo: 104, pokemonId: 908, name: "マスカーニャ" },
{ dexNo: 105, pokemonId: 909, name: "ホゲータ" },
{ dexNo: 106, pokemonId: 910, name: "アチゲータ" },
{ dexNo: 107, pokemonId: 911, name: "ラウドボーン" },
{ dexNo: 108, pokemonId: 912, name: "クワッス" },
{ dexNo: 109, pokemonId: 913, name: "ウェルカモ" },
{ dexNo: 110, pokemonId: 914, name: "ウェーニバル" },

{ dexNo: 111, pokemonId: 921, name: "パモ" },
{ dexNo: 112, pokemonId: 922, name: "パモット" },
{ dexNo: 113, pokemonId: 923, name: "パーモット" },
{ dexNo: 114, pokemonId: 926, name: "パピモッチ" },
{ dexNo: 115, pokemonId: 927, name: "バウッツェル" },
{ dexNo: 116, pokemonId: 938, name: "ズピカ" },
{ dexNo: 117, pokemonId: 939, name: "ハラバリー" },
{ dexNo: 118, pokemonId: 953, name: "シガロコ" },
{ dexNo: 119, pokemonId: 954, name: "ベラカス" },
{ dexNo: 120, pokemonId: 959, name: "オトシドリ" },

{ dexNo: 121, pokemonId: 965, name: "ブロロローム" },
{ dexNo: 122, pokemonId: 966, name: "モトトカゲ" },
{ dexNo: 123, pokemonId: 968, name: "ミミズズ" },
{ dexNo: 124, pokemonId: 970, name: "キラフロル" },
{ dexNo: 125, pokemonId: 971, name: "ボチ" },
{ dexNo: 126, pokemonId: 972, name: "ハカドッグ" },
{ dexNo: 127, pokemonId: 974, name: "アルクジラ" },
{ dexNo: 128, pokemonId: 975, name: "ハルクジラ" },
{ dexNo: 129, pokemonId: 977, name: "ヘイラッシャ" },
{ dexNo: 130, pokemonId: 978, name: "シャリタツ" },

{ dexNo: 131, pokemonId: 979, name: "コノヨザル" },
{ dexNo: 132, pokemonId: 980, name: "ドオー" },
{ dexNo: 133, pokemonId: 982, name: "ノココッチ" },
{ dexNo: 134, pokemonId: 983, name: "ドドゲザン" },
{ dexNo: 135, pokemonId: 984, name: "イダイナキバ" },
{ dexNo: 136, pokemonId: 985, name: "サケブシッポ" },
{ dexNo: 137, pokemonId: 986, name: "アラブルタケ" },
{ dexNo: 138, pokemonId: 987, name: "ハバタクカミ" },
{ dexNo: 139, pokemonId: 988, name: "チヲハウハネ" },
{ dexNo: 140, pokemonId: 989, name: "スナノケガワ" },

{ dexNo: 141, pokemonId: 990, name: "テツノワダチ" },
{ dexNo: 142, pokemonId: 991, name: "テツノツツミ" },
{ dexNo: 143, pokemonId: 992, name: "テツノカイナ" },
{ dexNo: 144, pokemonId: 993, name: "テツノコウベ" },
{ dexNo: 145, pokemonId: 994, name: "テツノドクガ" },
{ dexNo: 146, pokemonId: 995, name: "テツノイバラ" },
{ dexNo: 147, pokemonId: 996, name: "セビエ" },
{ dexNo: 148, pokemonId: 997, name: "セゴール" },
{ dexNo: 149, pokemonId: 998, name: "セグレイブ" },
{ dexNo: 150, pokemonId: 1000, name: "サーフゴー" },

{ dexNo: 151, pokemonId: 1007, name: "コライドン" },
{ dexNo: 152, pokemonId: 1008, name: "ミライドン" },
{ dexNo: 153, pokemonId: 1001, name: "チオンジェン" },
{ dexNo: 154, pokemonId: 1002, name: "パオジアン" },
{ dexNo: 155, pokemonId: 1003, name: "ディンルー" },
{ dexNo: 156, pokemonId: 1004, name: "イーユイ" },
{ dexNo: 157, pokemonId: 1009, name: "ウネルミナモ" },
{ dexNo: 158, pokemonId: 1010, name: "テツノイサハ" },
{ dexNo: 159, pokemonId: 1014, name: "オーガポン" },
{ dexNo: 160, pokemonId: 1015, name: "イイネイヌ" },

{ dexNo: 161, pokemonId: 1016, name: "マシマシラ" },
{ dexNo: 162, pokemonId: 1017, name: "キチキギス" },
{ dexNo: 163, pokemonId: 1018, name: "モモワロウ" },
{ dexNo: 164, pokemonId: 1044, name: "ウガツホムラ" },
{ dexNo: 165, pokemonId: 1045, name: "タケルライコ" },
{ dexNo: 166, pokemonId: 1046, name: "テツノイワオ" },
{ dexNo: 167, pokemonId: 1047, name: "テツノカシラ" },

{ dexNo: 168, pokemonId: 58, name: "ガーディ" },
{ dexNo: 169, pokemonId: 63, name: "ケーシィ" },
{ dexNo: 170, pokemonId: 92, name: "ゴース" },
{ dexNo: 171, pokemonId: 93, name: "ゴースト" },
{ dexNo: 172, pokemonId: 104, name: "カラカラ" },
{ dexNo: 173, pokemonId: 179, name: "メリープ" },
{ dexNo: 174, pokemonId: 115, name: "ガルーラ" },
{ dexNo: 175, pokemonId: 122, name: "バリヤード" },
{ dexNo: 176, pokemonId: 123, name: "ストライク" },
{ dexNo: 177, pokemonId: 127, name: "カイロス" },

{ dexNo: 178, pokemonId: 132, name: "メタモン" },
{ dexNo: 179, pokemonId: 137, name: "ポリゴン" },
{ dexNo: 180, pokemonId: 142, name: "プテラ" },
{ dexNo: 181, pokemonId: 144, name: "フリーザー" },
{ dexNo: 182, pokemonId: 145, name: "サンダー" },
{ dexNo: 183, pokemonId: 146, name: "ファイヤー" },
{ dexNo: 184, pokemonId: 243, name: "ライコウ" },
{ dexNo: 185, pokemonId: 244, name: "エンテイ" },
{ dexNo: 186, pokemonId: 245, name: "スイクン" },
{ dexNo: 187, pokemonId: 287, name: "ナマケロ" },
{ dexNo: 188, pokemonId: 333, name: "チルット" },
{ dexNo: 189, pokemonId: 371, name: "タツベイ" },
{ dexNo: 190, pokemonId: 372, name: "コモルー" },

{ dexNo: 191, pokemonId: 374, name: "ダンバル" },
{ dexNo: 192, pokemonId: 659, name: "ホルビー" },
{ dexNo: 193, pokemonId: 406, name: "スボミー" },
{ dexNo: 194, pokemonId: 610, name: "キバゴ" },
{ dexNo: 195, pokemonId: 443, name: "フカマル" },
{ dexNo: 196, pokemonId: 447, name: "リオル" },
{ dexNo: 197, pokemonId: 495, name: "ツタージャ" },
{ dexNo: 198, pokemonId: 498, name: "ポカブ" },
{ dexNo: 199, pokemonId: 633, name: "モノズ" },
{ dexNo: 200, pokemonId: 636, name: "メラルバ" },
];

// ====================
// 状態管理
// ====================

let currentPokemon = null;
let currentAnswer = 0;
let currentLearningMode = "addition";
let pendingHiraganaNextIndex = 0;
let catchCount = 0;
let isCatching = false;
let catchResolved = false;
let hintUsed = false;
let currentA = 0;
let currentB = 0;
let activeSticker = null;
let selectedSticker = null;
let currentStickerBackground = "forest";
let activeStickerShelfCategory = "";
let isStickerToolboxOpen = false;
let shelfDragCandidate = null;
let shelfDragJustPlaced = false;
let stickerDragMoved = false;
let stickerOffsetX = 0;
let stickerOffsetY = 0;
let stickerStartX = 0;
let stickerStartY = 0;
let stickerPendingPosition = null;
let stickerMoveFrame = null;
const stickerPointers = new Map();
let pinchSticker = null;
let pinchStartDistance = 0;
let pinchStartScale = 1;
let isPinchingSticker = false;
let pretendAutonomyTimer = null;
let lastPretendInteractionAt = 0;

const soundFiles = [
  "correct.mp3",
  "wrong.mp3",
  "throw.mp3",
  "shake.mp3",
  "get.mp3",
  "escape.mp3"
];

const bgmHomeFile = "bgm-home.mp3";
const bgmFacilityFiles = [
  "bgm-facility-01.mp3",
  "bgm-facility-02.mp3",
  "bgm-facility-03.mp3",
  "bgm-facility-04.mp3",
  "bgm-facility-05.mp3",
  "bgm-facility-06.mp3"
];

const soundPools = {};
const soundPoolIndex = {};
let crySound = null;
let activeThrowSound = null;
let soundsUnlocked = false;
let bgmAudio = null;
let currentBgmFile = "";
let pendingBgmFile = "";
let lastFacilityBgmFile = "";

soundFiles.forEach(file => {
  soundPoolIndex[file] = 0;
  soundPools[file] = [createSound(file)];
});

function createSound(file) {
  const audio = new Audio(file);
  audio.preload = "auto";
  audio.volume = 1.0;
  audio.load();
  return audio;
}

function unlockSoundsOnce() {
  soundsUnlocked = true;
  resumePendingBgm();
}

function retryBgmFromGesture() {
  if (!soundsUnlocked) {
    unlockSoundsOnce();
    return;
  }

  resumePendingBgm();
}

window.addEventListener("pointerdown", retryBgmFromGesture);
window.addEventListener("touchstart", retryBgmFromGesture, { passive: true });
window.addEventListener("touchend", retryBgmFromGesture, { passive: true });
window.addEventListener("click", retryBgmFromGesture);

const areaData = {
  math: {
    kicker: "🏠 さんすう広場",
    title: "さんすう広場",
    items: [
      { label: "足し算", action: "startAdditionGame()" },
      { label: "引き算", action: "showComingSoon('引き算')" }
    ]
  },
  word: {
    kicker: "📚 ことば広場",
    title: "ことば広場",
    items: [
      { label: "ひらがな", action: "startHiraganaPractice()" },
      { label: "カタカナ", action: "showComingSoon('カタカナ')" },
      { label: "漢字", action: "showComingSoon('漢字')" }
    ]
  },
  pretend: {
    kicker: "🎨 おままごと広場",
    title: "ステッカー遊び",
    items: [
      { label: "ステッカー遊び", action: "openStickerPlay()" }
    ]
  },
  dex: {
    kicker: "📖 ポケモン図鑑",
    title: "ポケモン図鑑",
    items: []
  },
  gift: {
    kicker: "🎁 プレゼント広場",
    title: "プレゼント広場",
    items: [
      { label: "ごほうびを見る", action: "showRewards()" }
    ]
  }
};

window.addEventListener("load", () => {
  syncDexWithOwnedRewards();
  goHome();
});

function getPokemonImage(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function playCry(id) {
  if (!crySound) {
    crySound = new Audio();
    crySound.volume = 1.0;
    crySound.preload = "auto";
  }

  crySound.pause();
  crySound.src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
  crySound.currentTime = 0;
  crySound.play().catch(() => {});
}

function resetAudio(sound) {
  if (!sound) return;

  sound.pause();
  try {
    sound.currentTime = 0;
  } catch (_) {}
}

function stopSound(file) {
  const pool = soundPools[file];
  if (!pool) return;

  pool.forEach(resetAudio);
}

function stopThrowSound() {
  resetAudio(activeThrowSound);
  activeThrowSound = null;
  stopSound("throw.mp3");
}

function playSound(file, speed = 1) {
  if (!soundPools[file]) {
    soundPoolIndex[file] = 0;
    soundPools[file] = [createSound(file)];
  }

  const pool = soundPools[file];
  const index = soundPoolIndex[file] % pool.length;
  const sound = pool[index];
  soundPoolIndex[file] = index + 1;

  sound.pause();
  sound.currentTime = 0;
  sound.volume = 1.0;
  sound.playbackRate = speed;
  sound.muted = false;
  sound.play().catch(() => {});
  return sound;
}


function getBgmAudio() {
  if (bgmAudio) return bgmAudio;

  bgmAudio = new Audio();
  bgmAudio.preload = "auto";
  bgmAudio.loop = true;
  bgmAudio.volume = 0.36;
  bgmAudio.setAttribute("playsinline", "");
  bgmAudio.addEventListener("ended", () => {
    try {
      bgmAudio.currentTime = 0;
      bgmAudio.play().catch(() => {});
    } catch (_) {}
  });

  return bgmAudio;
}

function resumePendingBgm() {
  if (!pendingBgmFile) return;

  const audio = getBgmAudio();
  if (audio.paused) {
    audio.play().catch(() => {
      window.setTimeout(() => audio.play().catch(() => {}), 250);
    });
  }
}

function playBgm(file, options = {}) {
  if (!file) return;

  pendingBgmFile = file;
  const audio = getBgmAudio();
  const shouldChangeTrack = currentBgmFile !== file;

  if (shouldChangeTrack) {
    audio.pause();
    currentBgmFile = file;
    audio.src = file;
    audio.load();
  }

  if (shouldChangeTrack || options.restart) {
    try {
      audio.currentTime = 0;
    } catch (_) {}
  }

  audio.loop = true;
  audio.volume = 0.36;
  audio.muted = false;

  if (!soundsUnlocked) return;
  audio.play().catch(() => {
    window.setTimeout(() => audio.play().catch(() => {}), 250);
  });
}

function playHomeBgm() {
  playBgm(bgmHomeFile);
}

function playRandomFacilityBgm() {
  const candidates = bgmFacilityFiles.filter(file => file !== lastFacilityBgmFile);
  const pool = candidates.length > 0 ? candidates : bgmFacilityFiles;
  const file = pool[Math.floor(Math.random() * pool.length)];
  lastFacilityBgmFile = file;
  playBgm(file, { restart: true });
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    getBgmAudio().pause();
  } else {
    resumePendingBgm();
  }
});

async function enterPretendLandscapeMode() {
  document.body.classList.add("pretendLandscapeOnly");

  try {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    }
  } catch (_) {}

  try {
    if (screen.orientation?.lock) {
      await screen.orientation.lock("landscape");
    }
  } catch (_) {}
}

function exitPretendLandscapeMode() {
  document.body.classList.remove("pretendLandscapeOnly");
  document.body.classList.remove("showLandscapeWarning");

  try {
    if (screen.orientation?.unlock) {
      screen.orientation.unlock();
    }
  } catch (_) {}

  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  } catch (_) {}
}
function updateLandscapeWarning() {
  const shouldShow = document.body.classList.contains("pretendLandscapeOnly")
    && window.matchMedia("(orientation: portrait)").matches
    && window.innerWidth <= 900;
  document.body.classList.toggle("showLandscapeWarning", shouldShow);
}

window.addEventListener("resize", updateLandscapeWarning);
window.addEventListener("orientationchange", () => window.setTimeout(updateLandscapeWarning, 150));

function hideAllPanels() {
  stopHiraganaGuide();
  stopPretendAutonomy();
  exitPretendLandscapeMode();
  areaMenu.classList.add("hidden");
  placeholderPanel.classList.add("hidden");
  placeholderPanel.classList.remove("hiraganaPanel");
  stickerArea.classList.add("hidden");
  gameScreen.classList.add("hidden");
  dexPanel.classList.add("hidden");
}

function goHome() {
  exitPretendLandscapeMode();
  playHomeBgm();
  townScreen.classList.remove("hidden");
  areaScreen.classList.add("hidden");
  catchEffect.classList.remove("catch-show");
  renderHomeDex();
}

function openArea(areaName) {
  playRandomFacilityBgm();
  const area = areaData[areaName];
  townScreen.classList.add("hidden");
  areaScreen.classList.remove("hidden");
  areaKicker.textContent = area.kicker;
  areaTitle.textContent = area.title;
  hideAllPanels();

  if (areaName === "dex") {
    openDexPanel();
    return;
  }

  areaMenu.innerHTML = area.items.map(item => `
    <button class="menuCard" onclick="${item.action}">
      ${item.label}
    </button>
  `).join("");

  areaMenu.classList.remove("hidden");

  if (areaName === "pretend") {
    openStickerPlay();
  }
}

function showComingSoon(name) {
  hideAllPanels();
  areaMenu.classList.remove("hidden");
  placeholderPanel.innerHTML = `
    <h2>${name}</h2>
    <p>ここには、あとで ${name} のクイズを入れられます。</p>
  `;
  placeholderPanel.classList.remove("hidden");
}

function showRewards() {
  const dex = getUnifiedDex();
  const count = dex.length;
  const reward = count >= 20 ? "金のスター" : count >= 10 ? "銀のスター" : count >= 3 ? "銅のスター" : "はじめてバッジ";
  const owned = getOwnedRewards();
  const nextReward = getNextLearningReward();
  const ownedCounts = [
    ["ポケモン", owned.pokemon.length],
    ["家具", owned.furniture.length],
    ["食べ物", owned.food.length],
    ["かざり", owned.decoration.length],
    ["背景", owned.background.length],
    ["建物", owned.building.length]
  ];

  hideAllPanels();
  areaMenu.classList.remove("hidden");
  placeholderPanel.innerHTML = `
    <h2>🎁 ${reward}</h2>
    <p>いままでに ${count} ひきのポケモンをゲットしたよ。</p>
    <div class="rewardSummaryGrid">
      ${ownedCounts.map(([label, value]) => `<div class="rewardSummaryCard"><strong>${value}</strong><span>${label}</span></div>`).join("")}
    </div>
    ${nextReward ? `
      <div class="nextRewardPreview">
        <span class="nextRewardIcon">${getRewardIconHtml(nextReward.category, nextReward.id)}</span>
        <div>
          <span>つぎのごほうび</span>
          <strong>${getRewardLabel(nextReward.category, nextReward.id)}</strong>
        </div>
      </div>
    ` : `<p class="rewardCompleteText">いまあるごほうびはぜんぶ使えるよ。</p>`}
  `;
  placeholderPanel.classList.remove("hidden");
}

const rewards = {
  pokemon: pokemonList.map(p => ({
    id: String(p.dexNo),
    dexNo: p.dexNo,
    pokemonId: p.pokemonId,
    label: p.name,
    category: "pokemon"
  })),
  furniture: [
    { id: "chair", icon: "🪑", label: "いす", category: "furniture" },
    { id: "table", icon: "🟫", label: "テーブル", category: "furniture" },
    { id: "bed", icon: "🛏️", label: "ベッド", category: "furniture" },
    { id: "sofa", icon: "🛋️", label: "ソファ", category: "furniture" },
    { id: "bookshelf", icon: "📚", label: "本だな", category: "furniture" },
    { id: "plant", icon: "🪴", label: "植物", category: "furniture" }
  ],
  food: [
    { id: "apple", icon: "🍎", label: "りんご", category: "food" },
    { id: "cake", icon: "🍰", label: "ケーキ", category: "food" },
    { id: "donut", icon: "🍩", label: "ドーナツ", category: "food" },
    { id: "juice", icon: "🧃", label: "ジュース", category: "food" }
  ],
  decoration: [
    { id: "tree", icon: "🌳", label: "木", category: "decoration" },
    { id: "flower", icon: "🌸", label: "花", category: "decoration" },
    { id: "rock", icon: "🪨", label: "岩", category: "decoration" },
    { id: "ball", icon: "🔴", label: "モンスターボール", category: "decoration" },
    { id: "ribbon", icon: "🎀", label: "リボン", category: "decoration" },
    { id: "sign", icon: "🪧", label: "看板", category: "decoration" }
  ],
  background: [
    { id: "forest", icon: "🌲", label: "森", category: "background" },
    { id: "sea", icon: "🏖️", label: "海", category: "background" },
    { id: "park", icon: "🌳", label: "公園", category: "background" },
    { id: "town", icon: "🏙️", label: "街", category: "background" },
    { id: "home", icon: "🏠", label: "おうち", category: "background" }
  ],
  building: [
    { id: "house", icon: "🏠", label: "おうち", category: "building" },
    { id: "shop", icon: "🏪", label: "ショップ", category: "building" },
    { id: "school", icon: "🏫", label: "学校", category: "building" },
    { id: "restaurant", icon: "🍽️", label: "レストラン", category: "building" },
    { id: "center", icon: "🏥", label: "ポケモンセンター", category: "building" }
  ]
};

const rewardCategories = ["pokemon", "furniture", "food", "decoration", "background", "building"];
const placeableRewardCategories = ["furniture", "food", "decoration", "building"];
const starterRewards = {
  pokemon: [],
  furniture: ["chair"],
  food: ["apple"],
  decoration: ["ball"],
  background: ["forest"],
  building: []
};

const learningRewardPlan = [
  { category: "furniture", id: "table" },
  { category: "decoration", id: "flower" },
  { category: "food", id: "cake" },
  { category: "background", id: "home" },
  { category: "furniture", id: "bed" },
  { category: "decoration", id: "tree" },
  { category: "building", id: "house" },
  { category: "food", id: "juice" },
  { category: "background", id: "park" },
  { category: "furniture", id: "sofa" },
  { category: "building", id: "shop" },
  { category: "background", id: "sea" },
  { category: "decoration", id: "sign" },
  { category: "building", id: "school" },
  { category: "background", id: "town" }
];

const stickerItems = placeableRewardCategories.flatMap(category =>
  rewards[category].map(item => ({ ...item }))
);

const stickerBackgrounds = rewards.background.map(background => background.id);


function normalizeRewardId(id) {
  return String(id);
}

function createEmptyOwnedRewards() {
  return rewardCategories.reduce((owned, category) => {
    owned[category] = [];
    return owned;
  }, {});
}

function getOwnedRewards() {
  const owned = {
    ...createEmptyOwnedRewards(),
    ...JSON.parse(localStorage.getItem("ownedRewards") || "{}")
  };

  rewardCategories.forEach(category => {
    const starter = starterRewards[category] || [];
    owned[category] = [...new Set([
      ...starter.map(normalizeRewardId),
      ...(owned[category] || []).map(normalizeRewardId)
    ])];
  });

  const dex = JSON.parse(localStorage.getItem("dex") || "[]");
  if (dex.length > 0) {
    owned.pokemon = [...new Set([
      ...owned.pokemon,
      ...dex.map(normalizeRewardId)
    ])];
  }

  localStorage.setItem("ownedRewards", JSON.stringify(owned));
  return owned;
}

function saveOwnedRewards(owned) {
  localStorage.setItem("ownedRewards", JSON.stringify(owned));
}

function getRewardDefinition(category, id) {
  const normalizedId = normalizeRewardId(id);
  return (rewards[category] || []).find(reward => normalizeRewardId(reward.id) === normalizedId);
}

function getRewardLabel(category, id) {
  return getRewardDefinition(category, id)?.label || "あたらしいごほうび";
}

function getRewardIconHtml(category, id) {
  const reward = getRewardDefinition(category, id);

  if (category === "pokemon") {
    const pokemon = pokemonList.find(p => normalizeRewardId(p.dexNo) === normalizeRewardId(id));
    return pokemon ? `<img src="${getPokemonImage(pokemon.pokemonId)}" alt="">` : "⚡";
  }

  return reward?.icon || "🎁";
}

function getNextLearningReward() {
  const owned = getOwnedRewards();
  let progress = Number(localStorage.getItem("learningRewardProgress") || "0");

  while (progress < learningRewardPlan.length) {
    const reward = learningRewardPlan[progress];
    const categoryOwned = owned[reward.category] || [];
    if (!categoryOwned.includes(normalizeRewardId(reward.id))) {
      return { ...reward, step: progress + 1 };
    }
    progress++;
  }

  return null;
}

function ensureLearningHud() {
  if (!window.gameScreen) return null;

  let hud = document.getElementById("learningRewardHud");
  if (hud) return hud;

  hud = document.createElement("div");
  hud.id = "learningRewardHud";
  hud.className = "learningRewardHud";
  const battle = document.getElementById("battleArea");
  gameScreen.insertBefore(hud, battle || gameScreen.firstChild);
  return hud;
}

function renderLearningHud() {
  const hud = ensureLearningHud();
  if (!hud) return;
  hud.classList.remove("hidden");

  const nextReward = getNextLearningReward();
  if (!nextReward) {
    hud.innerHTML = `
      <div class="learningHudIcon">🎁</div>
      <div class="learningHudText">
        <span>ごほうび</span>
        <strong>ぜんぶ あつまったよ</strong>
      </div>
    `;
    return;
  }

  hud.innerHTML = `
    <div class="learningHudIcon">${getRewardIconHtml(nextReward.category, nextReward.id)}</div>
    <div class="learningHudText">
      <span>このもんだいのごほうび</span>
      <strong>${getRewardLabel(nextReward.category, nextReward.id)}</strong>
    </div>
  `;
}

function addOwnedReward(category, id, options = {}) {
  const normalizedId = normalizeRewardId(id);
  const owned = getOwnedRewards();

  if (!owned[category]) {
    owned[category] = [];
  }

  if (owned[category].includes(normalizedId)) {
    return false;
  }

  owned[category].push(normalizedId);
  saveOwnedRewards(owned);

  if (!options.silent) {
    const reward = getRewardDefinition(category, normalizedId);
    showRewardNotice(reward?.label || "あたらしいアイテム", { category, id: normalizedId });
  }

  renderLearningHud();

  if (!stickerArea.classList.contains("hidden")) {
    renderStickerChoices();
  }

  return true;
}

function showRewardNotice(label, reward = null) {
  let toast = document.getElementById("rewardToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "rewardToast";
    toast.className = "rewardToast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="rewardToastIcon">${reward ? getRewardIconHtml(reward.category, reward.id) : "🎁"}</span>
    <span class="rewardToastText">
      <strong>${label}をゲット！</strong>
      <small>おままごとで使えるようになったよ</small>
    </span>
  `;
  toast.classList.remove("isVisible");
  void toast.offsetWidth;
  toast.classList.add("isVisible");
  clearTimeout(window.rewardToastTimer);
  window.rewardToastTimer = window.setTimeout(() => {
    toast.classList.remove("isVisible");
  }, 2600);
}

function awardNextLearningReward() {
  let progress = Number(localStorage.getItem("learningRewardProgress") || "0");

  while (progress < learningRewardPlan.length) {
    const reward = learningRewardPlan[progress];
    progress++;
    localStorage.setItem("learningRewardProgress", String(progress));

    if (addOwnedReward(reward.category, reward.id)) {
      renderLearningHud();
      return true;
    }
  }

  renderLearningHud();
  return false;
}

function getStoredDex() {
  return JSON.parse(localStorage.getItem("dex") || "[]")
    .map(Number)
    .filter(Boolean);
}

function getOwnedPokemonDexNumbers() {
  const owned = JSON.parse(localStorage.getItem("ownedRewards") || "{}");
  return (owned.pokemon || [])
    .map(Number)
    .filter(Boolean);
}

function getUnifiedDex() {
  return [...new Set([
    ...getStoredDex(),
    ...getOwnedPokemonDexNumbers()
  ])];
}

function syncDexWithOwnedRewards() {
  const dex = getUnifiedDex();
  localStorage.setItem("dex", JSON.stringify(dex));

  const owned = {
    ...createEmptyOwnedRewards(),
    ...JSON.parse(localStorage.getItem("ownedRewards") || "{}")
  };
  owned.pokemon = [...new Set([
    ...(owned.pokemon || []).map(normalizeRewardId),
    ...dex.map(normalizeRewardId)
  ])];
  localStorage.setItem("ownedRewards", JSON.stringify(owned));
  return dex;
}
function openStickerPlay() {
  hideAllPanels();
  enterPretendLandscapeMode();
  updateLandscapeWarning();
  areaMenu.classList.add("hidden");
  stickerArea.classList.remove("hidden");
  renderStickerChoices();
  startPretendAutonomy();
  const owned = getOwnedRewards();
  const savedBackground = localStorage.getItem("stickerBackground") || owned.background[0] || "forest";
  setStickerBackground(savedBackground, { saveCurrent: false });
}

function getStickerStorageKey(background = currentStickerBackground) {
  return `stickerScene:${background}`;
}

const stickerShelfCategories = {
  pokemon: { title: "ポケモン", icon: "⚡" },
  furniture: { title: "家具", icon: "🛌" },
  food: { title: "食べ物", icon: "🍔" },
  play: { title: "遊び道具", icon: "⚾" },
  decoration: { title: "装飾", icon: "🌸" },
  background: { title: "背景", icon: "🖼️" }
};

function renderStickerChoices() {
  renderBackgroundChoices();
  renderActiveStickerShelf();
}

function getShelfItems(category) {
  const owned = getOwnedRewards();

  if (category === "pokemon") {
    return (owned.pokemon || [])
      .map(no => pokemonList.find(p => String(p.dexNo) === String(no)))
      .filter(Boolean)
      .map(p => ({
        kind: "pokemon",
        category: "pokemon",
        id: String(p.dexNo),
        label: p.name,
        html: `<img src="${getPokemonImage(p.pokemonId)}" alt="${p.name}">`
      }));
  }

  if (category === "background") {
    return (owned.background || [])
      .map(id => getRewardDefinition("background", id))
      .filter(Boolean)
      .map(item => ({
        kind: "background",
        category: "background",
        id: item.id,
        label: item.label,
        html: item.icon
      }));
  }

  if (category === "play") {
    const playItems = [
      ...(owned.decoration || [])
        .filter(id => id === "ball")
        .map(id => getRewardDefinition("decoration", id)),
      ...(owned.building || [])
        .map(id => getRewardDefinition("building", id))
    ].filter(Boolean);

    return playItems.map(item => ({
      kind: "item",
      category: item.category,
      id: item.id,
      label: item.label,
      html: item.icon
    }));
  }

  const sourceCategory = category;
  let ids = owned[sourceCategory] || [];
  if (category === "decoration") {
    ids = ids.filter(id => id !== "ball");
  }

  return ids
    .map(id => getRewardDefinition(sourceCategory, id))
    .filter(Boolean)
    .map(item => ({
      kind: "item",
      category: item.category,
      id: item.id,
      label: item.label,
      html: item.icon
    }));
}

function openStickerToolbox() {
  isStickerToolboxOpen = true;
  stickerBoard.classList.add("isToolboxOpen");
  stickerToolboxButton?.classList.add("isOpen");
  stickerToolboxButton?.setAttribute("aria-expanded", "true");
}

function toggleStickerToolbox() {
  if (isStickerToolboxOpen || stickerShelf.classList.contains("isOpen")) {
    closeStickerShelf();
    return;
  }

  openStickerToolbox();
}

function promoteStickerShelfCategory(category) {
  if (!window.stickerShelfControls) return;

  const button = [...stickerShelfControls.querySelectorAll(".shelfCategoryButton")]
    .find(item => item.getAttribute("onclick")?.includes(`'${category}'`));
  if (button) {
    stickerShelfControls.prepend(button);
  }
}

function openStickerShelf(category) {
  activeStickerShelfCategory = stickerShelfCategories[category] ? category : "pokemon";
  promoteStickerShelfCategory(activeStickerShelfCategory);
  openStickerToolbox();
  stickerShelf.classList.add("isOpen");
  stickerShelf.setAttribute("aria-hidden", "false");
  renderActiveStickerShelf();
}

function closeStickerShelf() {
  activeStickerShelfCategory = "";
  isStickerToolboxOpen = false;
  stickerBoard.classList.remove("isToolboxOpen");
  stickerShelf.classList.remove("isOpen");
  stickerShelf.setAttribute("aria-hidden", "true");
  stickerToolboxButton?.classList.remove("isOpen");
  stickerToolboxButton?.setAttribute("aria-expanded", "false");
  document.querySelectorAll(".shelfCategoryButton").forEach(button => button.classList.remove("isActive"));
}

function renderActiveStickerShelf() {
  if (!window.stickerShelfItems) return;

  const category = activeStickerShelfCategory || "pokemon";
  const meta = stickerShelfCategories[category] || stickerShelfCategories.pokemon;
  stickerShelfTitle.textContent = `${meta.icon} ${meta.title}`;

  document.querySelectorAll(".shelfCategoryButton").forEach(button => {
    const match = button.getAttribute("onclick")?.match(/'([^']+)'/);
    button.classList.toggle("isActive", match?.[1] === activeStickerShelfCategory);
  });

  const items = getShelfItems(category);
  if (items.length === 0) {
    stickerShelfItems.innerHTML = `<div class="emptyPaletteMessage">?</div>`;
    return;
  }

  stickerShelfItems.innerHTML = items.map(item => `
    <button
      class="paletteSticker shelfStickerChoice ${item.kind === "pokemon" ? "pokemonPaletteSticker" : ""} ${item.kind === "background" && item.id === currentStickerBackground ? "isActive" : ""}"
      type="button"
      onclick="chooseStickerShelfItem('${item.kind}', '${item.category}', '${item.id}')"
      onpointerdown="beginStickerShelfDrag(event, '${item.kind}', '${item.category}', '${item.id}')"
      aria-label="${item.label}"
    >
      ${item.html}
    </button>
  `).join("");
}

function getBoardPlacementFromClient(clientX, clientY) {
  const rect = stickerBoard.getBoundingClientRect();
  return {
    x: Math.max(4, Math.min(92, ((clientX - rect.left) / rect.width) * 100)),
    y: Math.max(4, Math.min(86, ((clientY - rect.top) / rect.height) * 100))
  };
}

function beginStickerShelfDrag(event, kind, category, id) {
  if (kind === "background") return;

  shelfDragCandidate = {
    kind,
    category,
    id,
    startX: event.clientX,
    startY: event.clientY
  };
  shelfDragJustPlaced = false;
}

function placeShelfDragItem(event) {
  if (!shelfDragCandidate) return;

  const dx = event.clientX - shelfDragCandidate.startX;
  const dy = event.clientY - shelfDragCandidate.startY;
  if (Math.hypot(dx, dy) < 18 || dy > -8) return;

  const placement = getBoardPlacementFromClient(event.clientX, event.clientY);
  if (shelfDragCandidate.kind === "pokemon") {
    addPokemonSticker(Number(shelfDragCandidate.id), placement);
  } else {
    addItemSticker(shelfDragCandidate.category, shelfDragCandidate.id, placement);
  }

  shelfDragCandidate = null;
  shelfDragJustPlaced = true;
  closeStickerShelf();
}

function chooseStickerShelfItem(kind, category, id) {
  if (shelfDragJustPlaced) {
    shelfDragJustPlaced = false;
    return;
  }

  if (kind === "pokemon") {
    addPokemonSticker(Number(id));
  } else if (kind === "background") {
    setStickerBackground(id);
  } else {
    addItemSticker(category, id);
  }

  closeStickerShelf();
}

function renderBackgroundChoices() {
  const owned = getOwnedRewards();
  document.querySelectorAll(".bgButton").forEach(button => {
    const match = button.getAttribute("onclick")?.match(/'([^']+)'/);
    const backgroundId = match?.[1];
    const isOwned = owned.background.includes(backgroundId);
    button.hidden = !isOwned;
    button.disabled = !isOwned;
  });
  renderActiveStickerShelf();
}

function setStickerBackground(name, options = {}) {
  const shouldSaveCurrent = options.saveCurrent !== false;
  const owned = getOwnedRewards();

  if (!stickerBackgrounds.includes(name) || !owned.background.includes(name)) {
    name = owned.background[0] || "forest";
  }

  if (shouldSaveCurrent) {
    saveStickerScene();
  }
  currentStickerBackground = name;
  localStorage.setItem("stickerBackground", name);
  selectedSticker = null;

  stickerBoard.classList.remove(
    "boardForest",
    "boardSea",
    "boardPark",
    "boardTown",
    "boardHome"
  );
  stickerBoard.classList.add(`board${name.charAt(0).toUpperCase()}${name.slice(1)}`);

  document.querySelectorAll(".bgButton").forEach(button => {
    button.classList.toggle("isActive", button.getAttribute("onclick")?.includes(`'${name}'`));
  });
  renderActiveStickerShelf();

  loadStickerScene();
}

function addSticker(mark) {
  addItemSticker(mark);
}

function addItemSticker(category, itemId, placement = null) {
  const item = getRewardDefinition(category, itemId);
  if (!item) return;

  createSticker({
    type: "item",
    itemId: item.id,
    category: item.category,
    content: item.icon,
    label: item.label
  }, placement);
}

function addPokemonSticker(dexNo, placement = null) {
  const p = pokemonList.find(x => x.dexNo === dexNo);
  if (!p) return;

  createSticker({
    type: "pokemon",
    dexNo: p.dexNo,
    pokemonId: p.pokemonId,
    content: getPokemonImage(p.pokemonId),
    label: p.name
  }, placement);
}

function createSticker(stickerData, savedState = null, shouldSave = true) {
  const sticker = document.createElement("button");
  sticker.className = `sticker ${stickerData.type === "item" ? "itemSticker" : "pokemonSticker"}`;
  sticker.type = "button";
  sticker.dataset.type = stickerData.type;
  sticker.dataset.scale = savedState?.scale || "1";
  sticker.dataset.rotation = savedState?.rotation || "0";

  if (stickerData.type === "pokemon") {
    sticker.dataset.dexNo = stickerData.dexNo;
    sticker.dataset.pokemonId = stickerData.pokemonId;
    sticker.dataset.label = stickerData.label || "";
    sticker.dataset.reaction = savedState?.reaction || "";
    sticker.dataset.pokeState = savedState?.pokeState || savedState?.reaction || "normal";
    sticker.dataset.facing = savedState?.facing || "1";
    sticker.innerHTML = `<img src="${stickerData.content}" alt="${stickerData.label || "ポケモン"}">`;
  } else {
    sticker.dataset.itemId = stickerData.itemId || stickerData.content;
    sticker.dataset.category = stickerData.category || "";
    sticker.dataset.content = stickerData.content;
    sticker.dataset.label = stickerData.label || "";
    sticker.textContent = stickerData.content;
  }

  if (savedState) {
    sticker.style.left = `${savedState.x}%`;
    sticker.style.top = `${savedState.y}%`;
  } else {
    sticker.style.left = "50%";
    sticker.style.top = "50%";
  }

  updateStickerTransform(sticker);
  stickerBoard.appendChild(sticker);
  if (sticker.dataset.type === "pokemon" && sticker.dataset.pokeState && sticker.dataset.pokeState !== "normal") {
    applyPokemonReaction(sticker, sticker.dataset.pokeState, { quiet: true });
  }

  if (shouldSave) {
    selectSticker(sticker);
    saveStickerScene();
  }
}

function selectSticker(sticker) {
  if (selectedSticker) {
    selectedSticker.classList.remove("isSelected");
  }

  selectedSticker = sticker;

  if (selectedSticker) {
    selectedSticker.classList.add("isSelected");
  }

  updateStickerDeleteButton();
}

function updateStickerTransform(sticker) {
  const scale = Number(sticker.dataset.scale || 1);
  const rotation = Number(sticker.dataset.rotation || 0);
  const dragBoost = sticker.classList.contains("isDragging") ? 1.1 : 1;
  const pose = sticker.dataset.reaction || sticker.dataset.pokeState || "";
  const facing = sticker.dataset.type === "pokemon" ? Number(sticker.dataset.facing || 1) : 1;
  const lookTilt = sticker.dataset.type === "pokemon" ? Number(sticker.dataset.lookTilt || 0) : 0;
  const poseRotate = pose === "sleeping" || pose === "sleep" ? -58 : pose === "sit" ? -7 : 0;
  const poseY = pose === "sleeping" || pose === "sleep" ? 28 : pose === "sit" ? 13 : pose === "eating" || pose === "eat" ? -2 : 0;
  const poseScaleX = pose === "sleeping" || pose === "sleep" ? 1.25 : 1;
  const poseScaleY = pose === "sleeping" || pose === "sleep" ? 0.74 : 1;
  const scaleX = (scale * dragBoost * poseScaleX * facing).toFixed(3);
  const scaleY = (scale * dragBoost * poseScaleY).toFixed(3);
  const transform = `translateY(${poseY}px) scale(${scaleX}, ${scaleY}) rotate(${rotation + poseRotate + lookTilt}deg)`;
  sticker.style.transform = transform;
  sticker.style.setProperty("--rest-transform", transform);

  if (sticker === selectedSticker) {
    updateStickerDeleteButton();
  }
}

function clearPokemonReaction(sticker) {
  sticker.classList.remove("isSleeping", "isSitting", "isEating", "isHappy", "isHealing", "isLearning", "isPlaying", "isWalking", "isHungry", "isSleepy", "isLooking");
  sticker.dataset.reaction = "";
  sticker.dataset.pokeState = "normal";
  sticker.dataset.bubble = "";
  sticker.dataset.lookTilt = "0";
  updateStickerTransform(sticker);
}

function pausePokemonAutonomy(sticker, duration = 5000) {
  if (!sticker || sticker.dataset.type !== "pokemon") return;
  sticker.dataset.restUntil = String(Date.now() + duration);
}

function applyPokemonReaction(sticker, reaction, options = {}) {
  if (!sticker || sticker.dataset.type !== "pokemon") return;

  const normalizedReaction = {
    sleep: "sleeping",
    eat: "eating",
    play: "playing"
  }[reaction] || reaction;

  sticker.classList.remove("isSleeping", "isSitting", "isEating", "isHappy", "isHealing", "isLearning", "isPlaying", "isHungry", "isSleepy");
  const reactionClass = {
    sleeping: "isSleeping",
    sit: "isSitting",
    eating: "isEating",
    hungry: "isHungry",
    sleepy: "isSleepy",
    happy: "isHappy",
    playing: "isPlaying",
    heal: "isHealing",
    learn: "isLearning"
  }[normalizedReaction];

  if (!reactionClass) {
    clearPokemonReaction(sticker);
    return;
  }

  sticker.dataset.reaction = normalizedReaction;
  sticker.dataset.pokeState = normalizedReaction;
  sticker.classList.add(reactionClass);

  const restDurations = {
    sleeping: 18000,
    sit: 10000,
    eating: 7800,
    playing: 6200,
    heal: 5200,
    learn: 5200
  };
  if (restDurations[normalizedReaction]) {
    pausePokemonAutonomy(sticker, restDurations[normalizedReaction]);
  }
  if (["sleeping", "sit"].includes(normalizedReaction)) {
    window.setTimeout(() => {
      if (sticker.dataset.pokeState === normalizedReaction && !sticker.classList.contains("isDragging")) {
        clearPokemonReaction(sticker);
        saveStickerScene();
      }
    }, restDurations[normalizedReaction]);
  }
  sticker.dataset.bubble = {
    hungry: "🍔",
    sleepy: "💤",
    sleeping: "Zzz",
    sit: "すわった",
    eating: "❤️",
    happy: "❤️",
    playing: "🎾",
    heal: "げんき!",
    learn: "できた!"
  }[normalizedReaction] || "";
  updateStickerTransform(sticker);

  if (!options.quiet && (normalizedReaction === "happy" || normalizedReaction === "playing" || normalizedReaction === "eating")) {
    playCry(Number(sticker.dataset.pokemonId || 0));
  }

  if (!options.keep && ["happy", "eating", "playing", "heal", "learn"].includes(normalizedReaction)) {
    window.setTimeout(() => {
      if (sticker.dataset.pokeState === normalizedReaction && !sticker.classList.contains("isDragging")) {
        clearPokemonReaction(sticker);
        saveStickerScene();
      }
    }, normalizedReaction === "happy" ? 2200 : 3200);
  }
}

function getStickerCenter(sticker) {
  const boardRect = stickerBoard.getBoundingClientRect();
  const rect = sticker.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - boardRect.left,
    y: rect.top + rect.height / 2 - boardRect.top
  };
}

function getDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function getItemReaction(item) {
  const itemId = item.dataset.itemId;
  const category = item.dataset.category;

  if (itemId === "bed" || itemId === "sofa") return "sleeping";
  if (itemId === "chair" || itemId === "table") return "sit";
  if (category === "food" || itemId === "restaurant") return "eating";
  if (itemId === "ball" || itemId === "tree" || itemId === "flower") return "playing";
  if (itemId === "center") return "heal";
  if (itemId === "school" || itemId === "bookshelf") return "learn";
  return "";
}

function reactToNearbyToy(pokemonSticker) {
  if (!pokemonSticker || pokemonSticker.dataset.type !== "pokemon") return;

  const pokemonCenter = getStickerCenter(pokemonSticker);
  let nearest = null;
  let nearestDistance = Infinity;

  stickerBoard.querySelectorAll(".itemSticker").forEach(item => {
    const reaction = getItemReaction(item);
    if (!reaction) return;

    const distance = getDistance(pokemonCenter, getStickerCenter(item));
    if (distance < nearestDistance) {
      nearest = { item, reaction };
      nearestDistance = distance;
    }
  });

  const boardRect = stickerBoard.getBoundingClientRect();
  const snapDistance = Math.max(82, Math.min(boardRect.width, boardRect.height) * 0.15);
  if (nearest && nearestDistance <= snapDistance) {
    const state = pokemonSticker.dataset.pokeState || "normal";
    const reaction = nearest.reaction;
    const matchesNeed = (state === "hungry" && reaction === "eating")
      || (state === "sleepy" && reaction === "sleeping")
      || (state === "playing" && reaction === "playing")
      || state === "normal"
      || state === "happy";

    if (matchesNeed) {
      applyPokemonReaction(pokemonSticker, reaction, { keep: reaction === "sleeping" });
      const sparkleMark = reaction === "sleeping" ? "💤" : reaction === "eating" ? "❤️" : reaction === "playing" ? "✨" : "⭐";
      showPretendSparkle(pokemonSticker, sparkleMark);
    }
  }
}

function playStickerBounce(sticker) {
  sticker.classList.remove("landed", "tapBounce");
  void sticker.offsetWidth;
  sticker.classList.add("landed");
  window.setTimeout(() => sticker.classList.remove("landed"), 360);
}

function showPretendSparkle(sticker, mark = "✨") {
  if (!sticker || !window.stickerBoard) return;

  const boardRect = stickerBoard.getBoundingClientRect();
  const stickerRect = sticker.getBoundingClientRect();
  const sparkle = document.createElement("div");
  sparkle.className = "pretendSparkle";
  sparkle.textContent = mark;
  sparkle.style.left = `${stickerRect.left - boardRect.left + stickerRect.width * 0.54}px`;
  sparkle.style.top = `${stickerRect.top - boardRect.top - 8}px`;
  stickerBoard.appendChild(sparkle);
  window.setTimeout(() => sparkle.remove(), 980);
}

function playPokemonTap(sticker) {
  if (!sticker || sticker.dataset.type !== "pokemon") return;
  applyPokemonReaction(sticker, "happy");
  sticker.classList.remove("tapBounce");
  void sticker.offsetWidth;
  sticker.classList.add("tapBounce");
  window.setTimeout(() => {
    sticker.classList.remove("tapBounce");
    if (sticker.dataset.reaction === "happy") {
      clearPokemonReaction(sticker);
    }
  }, 700);
}

function moveStickerToPointer(event) {
  const boardRect = stickerBoard.getBoundingClientRect();
  const x = event.clientX - boardRect.left - stickerOffsetX;
  const y = event.clientY - boardRect.top - stickerOffsetY;
  const maxX = boardRect.width - activeSticker.offsetWidth;
  const maxY = boardRect.height - activeSticker.offsetHeight;
  const clampedX = Math.max(0, Math.min(x, maxX));
  const clampedY = Math.max(0, Math.min(y, maxY));

  stickerPendingPosition = {
    left: `${(clampedX / boardRect.width) * 100}%`,
    top: `${(clampedY / boardRect.height) * 100}%`
  };

  if (stickerMoveFrame) return;
  stickerMoveFrame = requestAnimationFrame(() => {
    if (activeSticker && stickerPendingPosition) {
      activeSticker.style.left = stickerPendingPosition.left;
      activeSticker.style.top = stickerPendingPosition.top;
      updateStickerDeleteButton();
    }
    stickerPendingPosition = null;
    stickerMoveFrame = null;
  });
}


function startPretendAutonomy() {
  stopPretendAutonomy();
  lastPretendInteractionAt = Date.now();
  pretendAutonomyTimer = window.setInterval(runPretendAutonomyTick, 2800);
}

function stopPretendAutonomy() {
  if (!pretendAutonomyTimer) return;
  window.clearInterval(pretendAutonomyTimer);
  pretendAutonomyTimer = null;
}

function getStickerPercentPosition(sticker) {
  return {
    x: parseFloat(sticker.style.left) || 0,
    y: parseFloat(sticker.style.top) || 0
  };
}

function isPokemonBusy(sticker) {
  return !sticker
    || sticker === activeSticker
    || sticker.classList.contains("isDragging")
    || Number(sticker.dataset.restUntil || 0) > Date.now();
}

function runPretendAutonomyTick() {
  if (stickerArea.classList.contains("hidden")) return;
  if (Date.now() - lastPretendInteractionAt < 2500) return;

  const pokemonStickers = [...stickerBoard.querySelectorAll(".pokemonSticker")];
  if (pokemonStickers.length === 0) return;

  pokemonStickers.forEach(sticker => {
    if (isPokemonBusy(sticker)) return;

    const roll = Math.random();
    if (roll < 0.38) {
      walkPokemonRandomly(sticker);
    } else if (roll < 0.66) {
      showRandomPokemonMood(sticker);
    }
  });
}

function walkPokemonRandomly(sticker) {
  const current = getStickerPercentPosition(sticker);
  const deltaX = -5 + Math.random() * 10;
  const deltaY = -3 + Math.random() * 6;
  const nextX = Math.max(4, Math.min(88, current.x + deltaX));
  const nextY = Math.max(8, Math.min(82, current.y + deltaY));

  sticker.dataset.facing = nextX >= current.x ? "1" : "-1";
  sticker.dataset.lookTilt = "0";
  sticker.classList.add("isWalking");
  updateStickerTransform(sticker);
  sticker.style.left = `${nextX}%`;
  sticker.style.top = `${nextY}%`;

  window.setTimeout(() => {
    sticker.classList.remove("isWalking");
    updateStickerTransform(sticker);
    saveStickerScene();
  }, 2400);
}

function findNearestItemForNeed(sticker, needState) {
  const wantedReaction = {
    hungry: "eating",
    sleepy: "sleeping",
    playing: "playing"
  }[needState];
  if (!wantedReaction) return null;

  const center = getStickerCenter(sticker);
  let nearest = null;
  let nearestDistance = Infinity;
  stickerBoard.querySelectorAll(".itemSticker").forEach(item => {
    if (getItemReaction(item) !== wantedReaction) return;
    const distance = getDistance(center, getStickerCenter(item));
    if (distance < nearestDistance) {
      nearest = item;
      nearestDistance = distance;
    }
  });
  return nearest;
}

function lookAtNeedTarget(sticker, needState) {
  const target = findNearestItemForNeed(sticker, needState);
  if (!target) return;

  const from = getStickerCenter(sticker);
  const to = getStickerCenter(target);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  sticker.dataset.facing = dx >= 0 ? "1" : "-1";
  sticker.dataset.lookTilt = String(Math.max(-9, Math.min(9, dy / 18)) * (dx >= 0 ? 1 : -1));
  sticker.classList.add("isLooking");
  updateStickerTransform(sticker);
}

function showRandomPokemonMood(sticker) {
  if (isPokemonBusy(sticker)) return;

  const moods = [
    { state: "hungry", bubble: "🍔" },
    { state: "sleepy", bubble: "💤" },
    { state: "happy", bubble: "❤️" },
    { state: "playing", bubble: "🎾" }
  ];
  const mood = moods[Math.floor(Math.random() * moods.length)];

  applyPokemonReaction(sticker, mood.state, { quiet: true, keep: true });
  sticker.dataset.bubble = mood.bubble;

  if (["hungry", "sleepy", "playing"].includes(mood.state)) {
    lookAtNeedTarget(sticker, mood.state);
    pausePokemonAutonomy(sticker, 5200);
  }

  if (mood.state === "happy") {
    window.setTimeout(() => {
      if (sticker.dataset.pokeState === "happy" && !sticker.classList.contains("isDragging")) {
        clearPokemonReaction(sticker);
        saveStickerScene();
      }
    }, 3000);
  } else {
    window.setTimeout(() => {
      if (sticker.dataset.pokeState === mood.state && !sticker.classList.contains("isDragging")) {
        sticker.dataset.bubble = "";
        sticker.dataset.lookTilt = "0";
        sticker.classList.remove("isLooking");
        updateStickerTransform(sticker);
      }
    }, 3600);
  }

  saveStickerScene();
}
function getStickerDeleteButton() {
  if (!window.stickerBoard) return null;

  let button = stickerBoard.querySelector(".stickerDeleteButton");
  if (button) return button;

  button = document.createElement("button");
  button.type = "button";
  button.className = "stickerDeleteButton";
  button.setAttribute("aria-label", "このステッカーを消す");
  button.textContent = "🗑️";
  button.addEventListener("pointerdown", event => {
    event.preventDefault();
    event.stopPropagation();
  });
  button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    deleteStickerElement(selectedSticker);
  });
  stickerBoard.appendChild(button);
  return button;
}

function hideStickerDeleteButton() {
  const button = stickerBoard?.querySelector(".stickerDeleteButton");
  if (button) {
    button.classList.remove("isVisible");
  }
}

function updateStickerDeleteButton() {
  if (!window.stickerBoard) return;

  const button = getStickerDeleteButton();
  if (!button) return;

  if (!selectedSticker || !stickerBoard.contains(selectedSticker)) {
    button.classList.remove("isVisible");
    return;
  }

  const boardRect = stickerBoard.getBoundingClientRect();
  const stickerRect = selectedSticker.getBoundingClientRect();
  const left = Math.max(8, Math.min(boardRect.width - 56, stickerRect.right - boardRect.left - 22));
  const top = Math.max(8, Math.min(boardRect.height - 56, stickerRect.top - boardRect.top - 22));
  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
  button.classList.add("isVisible");
}

function deleteStickerElement(sticker) {
  if (!sticker || !stickerBoard.contains(sticker)) return;

  if (sticker === activeSticker) {
    activeSticker = null;
  }

  sticker.remove();

  if (sticker === selectedSticker) {
    selectedSticker = null;
  }

  hideStickerDeleteButton();
  saveStickerScene();
}

function deleteSelectedSticker() {
  deleteStickerElement(selectedSticker);
}

function scaleSelectedSticker(multiplier) {
  if (!selectedSticker) return;
  const nextScale = Math.max(0.55, Math.min(3.5, Number(selectedSticker.dataset.scale || 1) * multiplier));
  selectedSticker.dataset.scale = nextScale.toFixed(2);
  updateStickerTransform(selectedSticker);
  saveStickerScene();
}

function rotateSelectedSticker() {
  if (!selectedSticker) return;
  selectedSticker.dataset.rotation = String((Number(selectedSticker.dataset.rotation || 0) + 15) % 360);
  updateStickerTransform(selectedSticker);
  saveStickerScene();
}

function clearStickers() {
  stickerBoard.querySelectorAll(".sticker").forEach(sticker => sticker.remove());
  selectedSticker = null;
  hideStickerDeleteButton();
  saveStickerScene();
}

function saveStickerScene() {
  if (!window.stickerBoard || !currentStickerBackground) return;

  const boardRect = stickerBoard.getBoundingClientRect();
  const stickers = [...stickerBoard.querySelectorAll(".sticker")].map(sticker => {
    const left = parseFloat(sticker.style.left) || 0;
    const top = parseFloat(sticker.style.top) || 0;
    return {
      type: sticker.dataset.type,
      itemId: sticker.dataset.itemId || "",
      category: sticker.dataset.category || "",
      content: sticker.dataset.content || "",
      dexNo: Number(sticker.dataset.dexNo || 0),
      pokemonId: Number(sticker.dataset.pokemonId || 0),
      label: sticker.dataset.label || "",
      x: Math.max(0, Math.min(100, left)),
      y: Math.max(0, Math.min(100, top)),
      scale: Number(sticker.dataset.scale || 1),
      rotation: Number(sticker.dataset.rotation || 0),
      reaction: sticker.dataset.reaction || "",
      pokeState: sticker.dataset.pokeState || "normal",
      facing: sticker.dataset.facing || "1"
    };
  });

  localStorage.setItem(getStickerStorageKey(), JSON.stringify(stickers));
}

function loadStickerScene() {
  stickerBoard.querySelectorAll(".sticker").forEach(sticker => sticker.remove());
  selectedSticker = null;

  const saved = JSON.parse(localStorage.getItem(getStickerStorageKey()) || "[]");
  saved.forEach(sticker => {
    if (sticker.type === "pokemon") {
      createSticker({
        type: "pokemon",
        dexNo: sticker.dexNo,
        pokemonId: sticker.pokemonId,
        content: getPokemonImage(sticker.pokemonId),
        label: sticker.label
      }, sticker, false);
    } else {
      const item = getRewardDefinition(sticker.category, sticker.itemId)
        || stickerItems.find(x => x.id === sticker.itemId);
      createSticker({
        type: "item",
        itemId: sticker.itemId,
        category: sticker.category || item?.category || "",
        content: sticker.content || item?.icon || "⭐",
        label: sticker.label || item?.label || ""
      }, sticker, false);
    }
  });

  selectedSticker = null;
  stickerBoard.querySelectorAll(".sticker").forEach(sticker => sticker.classList.remove("isSelected"));
  hideStickerDeleteButton();
}

function getStickerPointerPair(sticker) {
  const matches = [...stickerPointers.values()].filter(pointer => pointer.sticker === sticker);
  return matches.length >= 2 ? matches.slice(0, 2) : null;
}

function getPointerDistance(pointerA, pointerB) {
  return Math.hypot(pointerA.x - pointerB.x, pointerA.y - pointerB.y);
}

function startStickerPinch(sticker, pair) {
  if (!sticker || !pair) return;

  pinchSticker = sticker;
  pinchStartDistance = Math.max(1, getPointerDistance(pair[0], pair[1]));
  pinchStartScale = Number(sticker.dataset.scale || 1);
  isPinchingSticker = true;
  stickerDragMoved = true;
  activeSticker = sticker;
  sticker.classList.add("isDragging");
  updateStickerTransform(sticker);
}

function handleStickerPinch() {
  if (!isPinchingSticker || !pinchSticker) return false;

  const pair = getStickerPointerPair(pinchSticker);
  if (!pair) return false;

  const distance = getPointerDistance(pair[0], pair[1]);
  const nextScale = Math.max(0.55, Math.min(3.5, pinchStartScale * (distance / pinchStartDistance)));
  pinchSticker.dataset.scale = nextScale.toFixed(2);
  updateStickerTransform(pinchSticker);
  lastPretendInteractionAt = Date.now();
  return true;
}

function finishStickerPinchIfNeeded() {
  if (!isPinchingSticker || !pinchSticker || getStickerPointerPair(pinchSticker)) return false;

  const sticker = pinchSticker;
  isPinchingSticker = false;
  pinchSticker = null;
  pinchStartDistance = 0;
  pinchStartScale = 1;
  sticker.classList.remove("isDragging");
  updateStickerTransform(sticker);
  playStickerBounce(sticker);
  saveStickerScene();
  activeSticker = null;
  stickerDragMoved = false;
  return true;
}

stickerBoard.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".stickerDeleteButton")) return;

  lastPretendInteractionAt = Date.now();
  const sticker = event.target.closest(".sticker");
  if (!sticker) {
    selectSticker(null);
    closeStickerShelf();
    return;
  }

  event.preventDefault();

  stickerPointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY,
    sticker
  });

  stickerStartX = event.clientX;
  stickerStartY = event.clientY;
  selectSticker(sticker);

  try {
    sticker.setPointerCapture(event.pointerId);
  } catch (_) {}

  const pinchPair = getStickerPointerPair(sticker);
  if (pinchPair) {
    startStickerPinch(sticker, pinchPair);
    return;
  }

  activeSticker = sticker;
  stickerDragMoved = false;

  if (sticker.dataset.type === "pokemon") {
    clearPokemonReaction(sticker);
  }

  const rect = sticker.getBoundingClientRect();
  stickerOffsetX = event.clientX - rect.left;
  stickerOffsetY = event.clientY - rect.top;
  sticker.classList.add("isDragging");
  updateStickerTransform(sticker);
});

stickerBoard.addEventListener("pointermove", (event) => {
  if (stickerPointers.has(event.pointerId)) {
    const pointer = stickerPointers.get(event.pointerId);
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }

  if (handleStickerPinch()) {
    stickerDragMoved = true;
    return;
  }

  if (!activeSticker) return;

  if (Math.hypot(event.clientX - stickerStartX, event.clientY - stickerStartY) > 14) {
    stickerDragMoved = true;
  }

  moveStickerToPointer(event);
});

function finishStickerPointer(event) {
  const pointerSticker = stickerPointers.get(event.pointerId)?.sticker || null;
  stickerPointers.delete(event.pointerId);

  if (isPinchingSticker) {
    finishStickerPinchIfNeeded();
    return;
  }

  if (!activeSticker) {
    if (pointerSticker && selectedSticker === pointerSticker) {
      updateStickerDeleteButton();
    }
    return;
  }

  const sticker = activeSticker;
  sticker.classList.remove("isDragging");
  updateStickerTransform(sticker);

  lastPretendInteractionAt = Date.now();

  if (stickerDragMoved) {
    reactToNearbyToy(sticker);
    playStickerBounce(sticker);
    saveStickerScene();
  } else {
    playPokemonTap(sticker);
  }

  try {
    sticker.releasePointerCapture(event.pointerId);
  } catch (_) {}

  activeSticker = null;
  stickerDragMoved = false;
  updateStickerDeleteButton();
}

stickerBoard.addEventListener("pointerup", finishStickerPointer);
stickerBoard.addEventListener("pointercancel", finishStickerPointer);

[window.stickerToolboxButton, window.stickerShelfControls, window.stickerShelf].forEach(element => {
  if (!element) return;
  element.addEventListener("pointerdown", event => event.stopPropagation());
  element.addEventListener("click", event => event.stopPropagation());
});

document.addEventListener("pointermove", placeShelfDragItem);
document.addEventListener("pointerup", () => {
  shelfDragCandidate = null;
});
document.addEventListener("pointercancel", () => {
  shelfDragCandidate = null;
});


const hiraganaData = {
  version: 3,
  kind: "centerline-svg",
  viewBox: "0 0 100 100",
  groups: {
    basicVowels: [
      {
        char: "あ",
        word: "あめ",
        strokes: [
          { id: "a-1", centerPath: "M24 31 C39 30 56 27 75 23" },
          { id: "a-2", centerPath: "M53 15 C50 32 49 52 51 80" },
          { id: "a-3", centerPath: "M69 39 C58 48 47 57 36 66 C30 72 32 79 42 82 C58 87 78 80 82 68 C86 56 73 51 58 54 C45 57 36 64 34 72 C32 81 44 87 60 84 C72 82 81 77 84 72" }
        ]
      },
      {
        char: "い",
        word: "いす",
        strokes: [
          { id: "i-1", centerPath: "M33 25 C28 42 29 64 40 78" },
          { id: "i-2", centerPath: "M62 32 C73 44 77 62 73 76" }
        ]
      },
      {
        char: "う",
        word: "うみ",
        strokes: [
          { id: "u-1", centerPath: "M39 20 C48 16 58 17 67 23" },
          { id: "u-2", centerPath: "M27 43 C42 36 67 35 76 48 C87 65 67 82 42 82" }
        ]
      },
      {
        char: "え",
        word: "えき",
        strokes: [
          { id: "e-1", centerPath: "M39 20 C48 15 58 17 67 23" },
          { id: "e-2", centerPath: "M29 43 C43 38 62 36 73 42 C64 51 55 61 43 74 C51 68 58 66 64 72 C69 79 76 82 84 77" }
        ]
      },
      {
        char: "お",
        word: "おにぎり",
        strokes: [
          { id: "o-1", centerPath: "M25 30 C39 29 55 26 70 22" },
          { id: "o-2", centerPath: "M50 15 C47 33 46 53 46 78" },
          { id: "o-3", centerPath: "M39 52 C31 55 25 62 25 71 C25 82 38 88 52 84 C66 80 72 68 68 58 C64 49 52 46 42 50 C33 54 29 63 31 71 C33 78 42 80 50 76" },
          { id: "o-4", centerPath: "M68 39 C80 44 87 54 89 66" }
        ]
      }
    ]
  }
};

const hiraganaLetters = hiraganaData.groups.basicVowels.map(letter => ({
  ...letter,
  viewBox: letter.viewBox || hiraganaData.viewBox,
  strokes: letter.strokes.map(stroke => ({
    ...stroke,
    path: stroke.centerPath
  }))
}));

let currentHiraganaIndex = 0;
let currentHiraganaStroke = 0;
let hiraganaTraceActive = false;
let hiraganaTracePoints = [];
let hiraganaGuideFrame = 0;
let hiraganaGuideStartedAt = 0;
let hiraganaSparkleTimer = 0;

function startHiraganaPractice(index = 0) {
  currentLearningMode = "hiragana";
  hideAllPanels();
  areaMenu.classList.add("hidden");
  placeholderPanel.classList.add("hiraganaPanel");
  placeholderPanel.classList.remove("hidden");
  currentHiraganaIndex = Math.max(0, Math.min(hiraganaLetters.length - 1, index));
  currentHiraganaStroke = 0;
  renderHiraganaPractice();
}

function renderHiraganaPractice() {
  stopHiraganaGuide();
  const letter = hiraganaLetters[currentHiraganaIndex];
  placeholderPanel.innerHTML = `
    <div class="hiraganaShell">
      <div class="hiraganaHeader">
        <div>
          <p class="eyebrow">📚 ひらがな広場</p>
          <h2>「${letter.char}」を なぞろう</h2>
        </div>
        <div class="hiraganaWord">${letter.word}</div>
      </div>

      <div class="hiraganaLetterTabs">
        ${hiraganaLetters.map((item, index) => `
          <button type="button" class="hiraganaTab ${index === currentHiraganaIndex ? "isActive" : ""}" onclick="selectHiraganaLetter(${index})">${item.char}</button>
        `).join("")}
      </div>

      <div class="hiraganaBoardWrap">
        <svg id="hiraganaBoard" class="hiraganaBoard" viewBox="${letter.viewBox}" aria-label="ひらがなのなぞり書き">
          <defs>
            <filter id="hiraganaGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="blur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g class="hiraganaGhostPaths" aria-hidden="true">
            ${letter.strokes.map(stroke => `<path class="hiraganaGhostPath" data-stroke-id="${stroke.id}" d="${stroke.centerPath}" fill="none" stroke-linecap="round" stroke-linejoin="round" />`).join("")}
          </g>
          <g id="hiraganaStrokeLayer">
            ${letter.strokes.map((stroke, index) => `
              <path id="hiraganaStroke${index}" data-guide-source="${index === currentHiraganaStroke ? "true" : "false"}" data-stroke-id="${stroke.id}" class="hiraganaStroke ${index < currentHiraganaStroke ? "isDone" : index === currentHiraganaStroke ? "isCurrent" : "isWaiting"}" d="${stroke.centerPath}" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            `).join("")}
          </g>
          <polyline id="hiraganaTraceLine" class="hiraganaTraceLine" points="" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <circle id="hiraganaStartPoint" class="hiraganaStartPoint" r="3.9" />
          <circle id="hiraganaGoalPoint" class="hiraganaGoalPoint" r="3.7" />
          <circle id="hiraganaGuidePoint" class="hiraganaGuidePoint" r="3.5" />
        </svg>
        <div id="hiraganaSparkles" class="hiraganaSparkles"></div>
      </div>

      <div class="hiraganaStatus">
        <strong>${currentHiraganaStroke + 1}かくめ</strong>
        <span>ひかる まるを ゆっくり おいかけよう</span>
      </div>
      <div class="hiraganaActions">
        <button type="button" onclick="resetHiraganaLetter()">もういちど</button>
        <button type="button" onclick="selectHiraganaLetter(${(currentHiraganaIndex + 1) % hiraganaLetters.length})">つぎのもじ</button>
      </div>
    </div>
  `;

  setupHiraganaBoard();
}

function selectHiraganaLetter(index) {
  currentHiraganaIndex = Math.max(0, Math.min(hiraganaLetters.length - 1, index));
  currentHiraganaStroke = 0;
  renderHiraganaPractice();
}

function resetHiraganaLetter() {
  currentHiraganaStroke = 0;
  renderHiraganaPractice();
}

function setupHiraganaBoard() {
  const board = document.getElementById("hiraganaBoard");
  if (!board) return;

  positionHiraganaPoints();
  board.addEventListener("pointerdown", startHiraganaTrace);
  board.addEventListener("pointermove", moveHiraganaTrace);
  board.addEventListener("pointerup", finishHiraganaTrace);
  board.addEventListener("pointercancel", finishHiraganaTrace);
  startHiraganaGuide();
}

function getCurrentHiraganaStroke() {
  return hiraganaLetters[currentHiraganaIndex]?.strokes[currentHiraganaStroke] || null;
}

function getCurrentHiraganaPathElement() {
  return document.querySelector(`#hiraganaStrokeLayer .hiraganaStroke[data-guide-source="true"]`)
    || document.getElementById(`hiraganaStroke${currentHiraganaStroke}`);
}

function positionHiraganaPoints() {
  const path = getCurrentHiraganaPathElement();
  const start = document.getElementById("hiraganaStartPoint");
  const goal = document.getElementById("hiraganaGoalPoint");
  if (!path || !start || !goal) return;

  const length = path.getTotalLength();
  const startPoint = path.getPointAtLength(0);
  const goalPoint = path.getPointAtLength(length);
  start.setAttribute("cx", startPoint.x);
  start.setAttribute("cy", startPoint.y);
  goal.setAttribute("cx", goalPoint.x);
  goal.setAttribute("cy", goalPoint.y);
}

function getHiraganaSvgPoint(event) {
  const board = document.getElementById("hiraganaBoard");
  const rect = board.getBoundingClientRect();
  const viewBox = board.viewBox.baseVal;
  return {
    x: viewBox.x + ((event.clientX - rect.left) / rect.width) * viewBox.width,
    y: viewBox.y + ((event.clientY - rect.top) / rect.height) * viewBox.height
  };
}

function getPointDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function getPathProgress(point, path, samples = 46) {
  const length = path.getTotalLength();
  let bestLength = 0;
  let bestDistance = Infinity;

  for (let i = 0; i <= samples; i++) {
    const sampleLength = length * (i / samples);
    const sample = path.getPointAtLength(sampleLength);
    const distance = getPointDistance(point, sample);
    if (distance <= bestDistance) {
      bestDistance = distance;
      bestLength = sampleLength;
    }
  }

  return {
    ratio: length <= 0 ? 1 : bestLength / length,
    distance: bestDistance
  };
}

function startHiraganaTrace(event) {
  const path = getCurrentHiraganaPathElement();
  if (!path) return;

  const point = getHiraganaSvgPoint(event);
  const start = path.getPointAtLength(0);
  if (getPointDistance(point, start) > 22) {
    pulseHiraganaPoint("hiraganaStartPoint");
    return;
  }

  event.preventDefault();
  hiraganaTraceActive = true;
  hiraganaTracePoints = [point];
  updateHiraganaTraceLine();
}

function moveHiraganaTrace(event) {
  if (!hiraganaTraceActive) return;

  event.preventDefault();
  const point = getHiraganaSvgPoint(event);
  hiraganaTracePoints.push(point);
  updateHiraganaTraceLine();

  if (isHiraganaStrokeComplete(point)) {
    completeHiraganaStroke();
  }
}

function finishHiraganaTrace() {
  hiraganaTraceActive = false;
}

function updateHiraganaTraceLine() {
  const line = document.getElementById("hiraganaTraceLine");
  if (!line) return;

  line.setAttribute("points", hiraganaTracePoints.map(point => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" "));
}

function isHiraganaStrokeComplete(point) {
  const path = getCurrentHiraganaPathElement();
  if (!path) return false;

  const length = path.getTotalLength();
  const goal = path.getPointAtLength(length);
  const progress = getPathProgress(point, path);
  const enoughMovement = hiraganaTracePoints.length >= 5;
  return enoughMovement && getPointDistance(point, goal) <= 24 && progress.ratio >= 0.5 && progress.distance <= 24;
}

function completeHiraganaStroke() {
  if (!hiraganaTraceActive) return;

  hiraganaTraceActive = false;
  playSound("correct.mp3");
  showHiraganaSparkle();
  currentHiraganaStroke++;

  const letter = hiraganaLetters[currentHiraganaIndex];
  if (currentHiraganaStroke >= letter.strokes.length) {
    completeHiraganaLetter();
    return;
  }

  window.setTimeout(renderHiraganaPractice, 520);
}

function completeHiraganaLetter() {
  stopHiraganaGuide();
  const letter = hiraganaLetters[currentHiraganaIndex];
  const completed = JSON.parse(localStorage.getItem("hiraganaCompleted") || "[]");
  const isFirstClear = !completed.includes(letter.char);

  if (isFirstClear) {
    completed.push(letter.char);
    localStorage.setItem("hiraganaCompleted", JSON.stringify(completed));
  }

  pendingHiraganaNextIndex = (currentHiraganaIndex + 1) % hiraganaLetters.length;
  window.setTimeout(() => {
    placeholderPanel.innerHTML = `
      <div class="hiraganaClear">
        <p class="eyebrow">できたね</p>
        <div class="hiraganaClearLetter">${letter.char}</div>
        <h2>「${letter.char}」が かけたよ</h2>
        <p>ポケモンが あらわれたよ。</p>
      </div>
    `;
    window.setTimeout(() => startHiraganaPokemonEncounter(letter), 760);
  }, 620);
}

function startHiraganaPokemonEncounter(letter) {
  currentLearningMode = "hiragana";
  hideAllPanels();
  gameScreen.classList.remove("hidden");
  placeholderPanel.classList.add("hidden");
  placeholderPanel.classList.remove("hiraganaPanel");
  resetCatchLock();
  catchCount = 0;

  ballImg.classList.remove("throw", "shake-3", "shake-once");
  ballImg.style.transform = "";
  ballImg.style.display = "none";
  pokemonImage.style.display = "block";
  catchEffect.classList.remove("catch-show");
  catchEffect.style.display = "none";

  currentPokemon = getRandomPokemon();
  pokemonName.textContent = currentPokemon.name;
  pokemonImage.src = getPokemonImage(currentPokemon.pokemonId);
  questionArea.classList.add("hidden");
  catchArea.classList.remove("hidden");
  nextArea.classList.add("hidden");
  nextButton.textContent = "つぎのもじ";
  message.textContent = `「${letter.char}」が かけた！ ${currentPokemon.name}が あらわれた！`;

  const hud = document.getElementById("learningRewardHud");
  if (hud) hud.classList.add("hidden");
  window.setTimeout(() => playCry(currentPokemon.pokemonId), 300);
}

function pulseHiraganaPoint(id) {
  const point = document.getElementById(id);
  if (!point) return;
  point.classList.remove("isPulse");
  void point.getBoundingClientRect();
  point.classList.add("isPulse");
  window.setTimeout(() => point.classList.remove("isPulse"), 520);
}

function showHiraganaSparkle() {
  const wrap = document.getElementById("hiraganaSparkles");
  if (!wrap) return;

  clearTimeout(hiraganaSparkleTimer);
  wrap.innerHTML = ["きら", "ぴか", "できた"].map((text, index) => `
    <span style="--x:${24 + index * 24}%;--delay:${index * 70}ms">${text}</span>
  `).join("");
  hiraganaSparkleTimer = window.setTimeout(() => {
    if (wrap) wrap.innerHTML = "";
  }, 900);
}

function moveHiraganaGuideOnPath(path, guide, progress) {
  if (!path || !guide) return;

  const length = path.getTotalLength();
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const point = path.getPointAtLength(length * clampedProgress);
  guide.setAttributeNS(null, "cx", String(point.x));
  guide.setAttributeNS(null, "cy", String(point.y));
  guide.dataset.pathProgress = clampedProgress.toFixed(3);
  guide.dataset.sourceStroke = path.dataset.strokeId || "";
}

function startHiraganaGuide() {
  stopHiraganaGuide();
  const guide = document.getElementById("hiraganaGuidePoint");
  const path = getCurrentHiraganaPathElement();
  if (!guide || !path) return;

  hiraganaGuideStartedAt = performance.now();
  moveHiraganaGuideOnPath(path, guide, 0);

  const animate = (now) => {
    const elapsed = (now - hiraganaGuideStartedAt) % 3600;
    const progress = elapsed / 3600;
    moveHiraganaGuideOnPath(path, guide, progress);
    hiraganaGuideFrame = requestAnimationFrame(animate);
  };

  hiraganaGuideFrame = requestAnimationFrame(animate);
}

function stopHiraganaGuide() {
  if (hiraganaGuideFrame) {
    cancelAnimationFrame(hiraganaGuideFrame);
    hiraganaGuideFrame = 0;
  }
}
function startAdditionGame() {
  currentLearningMode = "addition";
  if (window.nextButton) {
    nextButton.textContent = "つぎのもんだい";
  }
  hideAllPanels();
  gameScreen.classList.remove("hidden");
  catchCount = 0;
  renderLearningHud();
  loadPokemon();
}

function getRandomPokemon() {
  return pokemonList[Math.floor(Math.random() * pokemonList.length)];
}

function createQuestion() {
  if (!hintUsed) {
    currentA = Math.floor(Math.random() * 10) + 1;
    currentB = Math.floor(Math.random() * 10) + 1;
  }

  const a = currentA;
  const b = currentB;
  currentAnswer = a + b;
  question.textContent = `${a} + ${b} = ?`;

  const maxCount = Math.max(a, b);
  const availableWidth = Math.min(window.innerWidth * 0.42, 260);
  let pokemonSize = Math.floor(availableWidth / Math.min(maxCount, 5));
  pokemonSize = Math.max(24, Math.min(60, pokemonSize));
  const img = getPokemonImage(currentPokemon.pokemonId);

  function makeGroup(count) {
    let html = '<div class="numberGroup">';
    for (let row = 0; row < Math.ceil(count / 5); row++) {
      html += '<div class="numberRow">';
      const start = row * 5;
      const end = Math.min(start + 5, count);
      for (let i = start; i < end; i++) {
        html += `<img src="${img}" alt="" style="width:${pokemonSize}px;height:${pokemonSize}px;">`;
      }
      html += "</div>";
    }
    html += "</div>";
    return html;
  }

  visualQuestion.innerHTML = hintUsed ? `${makeGroup(a)}<div class="plusSign">＋</div>${makeGroup(b)}` : "";
  renderLearningHud();
}

function showHint() {
  hintUsed = true;
  hintButton.style.display = "none";
  createQuestion();
}

function resetCatchLock() {
  isCatching = false;
  catchResolved = false;
  if (window.throwButton) {
    throwButton.disabled = false;
  }
}

function lockCatchThrow() {
  isCatching = true;
  catchResolved = false;
  if (window.throwButton) {
    throwButton.disabled = true;
  }
}

function loadPokemon() {
  resetCatchLock();
  ballImg.classList.remove("throw", "shake-3", "shake-once");
  ballImg.style.transform = "";
  ballImg.style.display = "none";
  pokemonImage.style.display = "block";
  catchEffect.classList.remove("catch-show");
  catchEffect.style.display = "none";

  currentPokemon = getRandomPokemon();
  pokemonName.textContent = currentPokemon.name;
  pokemonImage.src = getPokemonImage(currentPokemon.pokemonId);
  setTimeout(() => playCry(currentPokemon.pokemonId), 300);

  answerInput.value = "";
  questionArea.classList.remove("hidden");
  catchArea.classList.add("hidden");
  nextArea.classList.add("hidden");
  message.textContent = `${currentPokemon.name}が あらわれた！`;
  hintUsed = false;
  hintButton.style.display = "inline-block";
  createQuestion();
}

function changePokemon() {
  catchCount = 0;
  loadPokemon();
}

function checkAnswer() {
  const value = answerInput.value.trim();
  if (value === "") return;

  if (Number(value) === currentAnswer) {
    playSound("correct.mp3");
    resetCatchLock();
    questionArea.classList.add("hidden");
    catchArea.classList.remove("hidden");
    message.textContent = "せいかい！";
    awardNextLearningReward();
  } else {
    playSound("wrong.mp3");
    catchArea.classList.add("hidden");
    nextArea.classList.add("hidden");
    message.textContent = "おしい！もういちどがんばれ！";
  }
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function playBallShakeOnce() {
  stopThrowSound();
  stopSound("shake.mp3");
  playSound("shake.mp3");
  ballImg.classList.remove("shake-once");
  ballImg.style.transform = "translate(-50%, -100px) rotate(0deg) scale(1)";
  void ballImg.offsetWidth;
  ballImg.classList.add("shake-once");
  await wait(500);
  ballImg.classList.remove("shake-once");
  ballImg.style.transform = "translate(-50%, -100px) rotate(0deg) scale(1)";
  await wait(200);
}

async function throwBall() {
  if (isCatching || catchResolved) return;

  lockCatchThrow();
  message.textContent = "";
  stopThrowSound();
  activeThrowSound = playSound("throw.mp3");
  ballImg.style.display = "block";
  ballImg.classList.remove("throw", "shake-3", "shake-once");
  void ballImg.offsetWidth;
  ballImg.classList.add("throw");

  await wait(1350);
  pokemonImage.style.display = "none";

  await wait(650);
  ballImg.classList.remove("throw");
  ballImg.style.transform = "translate(-50%, -100px) rotate(0deg) scale(1)";
  for (let i = 0; i < 3; i++) {
    await playBallShakeOnce();
  }

  catchPokemon();
}

function nextPokemon() {
  resetCatchLock();
  ballImg.style.display = "none";
  ballImg.classList.remove("shake-3", "throw", "shake-once");
  ballImg.style.transform = "";
  catchArea.classList.add("hidden");
  nextArea.classList.add("hidden");

  if (currentLearningMode === "hiragana") {
    nextButton.textContent = "つぎのもんだい";
    startHiraganaPractice(pendingHiraganaNextIndex);
    return;
  }

  loadPokemon();
}

function catchPokemon() {
  if (!isCatching || catchResolved) return;

  catchResolved = true;
  isCatching = false;

  catchCount++;
  const success = catchCount >= 3 || Math.random() * 100 < catchCount * 33.3333;

  if (success) {
    if (window.throwButton) {
      throwButton.disabled = true;
    }
    playSound("get.mp3");
    savePokemon();
    const gotNewPokemonReward = addOwnedReward("pokemon", currentPokemon.dexNo);
    catchCount = 0;
    catchEffect.classList.remove("catch-show");
    void catchEffect.offsetWidth;
    catchEffect.classList.add("catch-show");

    if (!gotNewPokemonReward) {
      message.textContent = "";
    }
    questionArea.classList.add("hidden");
    catchArea.classList.add("hidden");
    nextArea.classList.remove("hidden");
  } else {
    if (window.throwButton) {
      throwButton.disabled = false;
    }
    catchResolved = false;
    playSound("escape.mp3");
    ballImg.style.display = "none";
    pokemonImage.style.display = "block";
    message.textContent = "おしい！もういちどがんばれ！";
    catchArea.classList.remove("hidden");
    nextArea.classList.add("hidden");
  }
}

function savePokemon() {
  const dex = getUnifiedDex();
  if (!dex.includes(currentPokemon.dexNo)) {
    dex.push(currentPokemon.dexNo);
  }
  localStorage.setItem("dex", JSON.stringify(dex));
  renderHomeDex();
  if (!stickerArea.classList.contains("hidden")) {
    renderStickerChoices();
  }
}

function renderHomeDex() {
  const dex = syncDexWithOwnedRewards();
  if (!window.homeDexCount || !window.homeDexPreview) return;

  homeDexCount.textContent = `${dex.length} / ${pokemonList.length}`;

  const ownedPokemon = dex
    .slice(-8)
    .reverse()
    .map(no => pokemonList.find(p => p.dexNo === no))
    .filter(Boolean);

  const slots = [];
  for (let i = 0; i < 8; i++) {
    const p = ownedPokemon[i];
    slots.push(p
      ? `<button class="homeDexSlot" onclick="openArea('dex'); showPokemon(${p.dexNo})"><img src="${getPokemonImage(p.pokemonId)}" alt="${p.name}"></button>`
      : `<div class="homeDexSlot">?</div>`
    );
  }

  homeDexPreview.innerHTML = slots.join("");
}

function openDexPanel() {
  hideAllPanels();
  dexPanel.classList.remove("hidden");
  renderDex();
}

function renderDex() {
  const dex = syncDexWithOwnedRewards();
  dexCount.textContent = `${dex.length} / ${pokemonList.length}`;
  dexContent.innerHTML = pokemonList.map(p => {
    const owned = dex.includes(p.dexNo);
    return `
      <div class="dexItem" onclick="showPokemon(${p.dexNo})">
        ${owned ? `${p.dexNo}. ${p.name}` : `${p.dexNo}. ？？？`}
      </div>
    `;
  }).join("");
}

function showPokemon(no) {
  const dexNo = Number(no);
  const dex = syncDexWithOwnedRewards();
  if (!dex.includes(dexNo)) return;

  const p = pokemonList.find(x => x.dexNo === dexNo);
  dexContent.innerHTML = `
    <button onclick="renderDex()">← もどる</button>
    <h3>${p.dexNo}. ${p.name}</h3>
    <img src="${getPokemonImage(p.pokemonId)}" width="180" alt="${p.name}">
    <br><br>
    <button onclick="playCry(${p.pokemonId})">🔊 なきごえ</button>
  `;
}

























































