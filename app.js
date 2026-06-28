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
{ dexNo: 120, pokemonId: 962, name: "オトシドリ" },

{ dexNo: 121, pokemonId: 966, name: "ブロロローム" },
{ dexNo: 122, pokemonId: 967, name: "モトトカゲ" },
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
{ dexNo: 159, pokemonId: 1017, name: "オーガポン" },
{ dexNo: 160, pokemonId: 1014, name: "イイネイヌ" },

{ dexNo: 161, pokemonId: 1015, name: "マシマシラ" },
{ dexNo: 162, pokemonId: 1016, name: "キチキギス" },
{ dexNo: 163, pokemonId: 1025, name: "モモワロウ" },
{ dexNo: 164, pokemonId: 1020, name: "ウガツホムラ" },
{ dexNo: 165, pokemonId: 1021, name: "タケルライコ" },
{ dexNo: 166, pokemonId: 1022, name: "テツノイワオ" },
{ dexNo: 167, pokemonId: 1023, name: "テツノカシラ" },

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
      { label: "たし算", action: "startAdditionGame()" },
      { label: "ひき算", action: "startSubtractionGame()" }
    ]
  },
  word: {
    kicker: "📚 ことば広場",
    title: "ことば広場",
    items: [
      { label: "ひらがな", action: "startHiraganaPractice()" },
      { label: "カタカナ", action: "startKatakanaPractice()" },
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

function getPokemonImage(id, variant = "sprite") {
  const numericId = Number(id);
  if (!Number.isFinite(numericId) || numericId <= 0) return "ball.png";

  if (variant === "artwork") {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numericId}.png`;
  }

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numericId}.png`;
}

function handlePokemonImageError(image, id) {
  if (!image || image.dataset.fallbackTried === "true") return;
  image.dataset.fallbackTried = "true";
  image.src = getPokemonImage(id, "artwork");
}

function pokemonImageAttrs(id, alt = "") {
  return `src="${getPokemonImage(id)}" onerror="handlePokemonImageError(this, ${Number(id) || 0})" alt="${alt}"`;
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
    { id: "baseball", icon: "⚾️", label: "やきゅうボール", category: "decoration" },
    { id: "soccerball", icon: "⚽️", label: "サッカーボール", category: "decoration" },
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
  decoration: ["ball", "baseball", "soccerball"],
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
    return pokemon ? `<img ${pokemonImageAttrs(pokemon.pokemonId)}>` : "⚡";
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
  const hud = document.getElementById("learningRewardHud");
  if (!hud) return;
  hud.classList.add("hidden");
  hud.innerHTML = "";
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


function getRandomKanaRewardCandidate() {
  const categories = ["furniture", "food", "decoration", "background", "building"];
  const owned = getOwnedRewards();
  const allRewards = categories.flatMap(category =>
    (rewards[category] || []).map(reward => ({ ...reward, category }))
  );
  const unownedRewards = allRewards.filter(reward =>
    !(owned[reward.category] || []).includes(normalizeRewardId(reward.id))
  );
  const candidates = unownedRewards.length ? unownedRewards : allRewards;

  if (!candidates.length) return null;
  return {
    ...candidates[Math.floor(Math.random() * candidates.length)],
    isAlreadyOwned: !unownedRewards.length
  };
}

function awardRandomLearningToolReward() {
  const reward = getRandomKanaRewardCandidate();
  if (!reward) return null;

  const added = addOwnedReward(reward.category, reward.id, { silent: reward.isAlreadyOwned });
  if (!added && reward.isAlreadyOwned) {
    showRewardNotice(reward.label || "ごほうび", { category: reward.category, id: reward.id });
  }

  return { ...reward, isNew: added };
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
        html: `<img ${pokemonImageAttrs(p.pokemonId, p.name)}>`
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
    sticker.innerHTML = `<img src="${stickerData.content}" onerror="handlePokemonImageError(this, ${Number(stickerData.pokemonId) || 0})" alt="${stickerData.label || "ポケモン"}">`;
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
  sticker.classList.remove("isSleeping", "isSitting", "isEating", "isHappy", "isHealing", "isLearning", "isPlaying", "isWalking", "isHungry", "isSleepy", "isLooking", "isThrowing", "isKicking");
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

  sticker.classList.remove("isSleeping", "isSitting", "isEating", "isHappy", "isHealing", "isLearning", "isPlaying", "isHungry", "isSleepy", "isThrowing", "isKicking");
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
    sit: "🪑✨",
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
  if (["ball", "baseball", "soccerball", "tree", "flower"].includes(itemId)) return "playing";
  if (itemId === "center") return "heal";
  if (itemId === "school" || itemId === "bookshelf") return "learn";
  return "";
}

function getToyAction(item) {
  const itemId = item?.dataset.itemId || "";
  return {
    baseball: { pokemonClass: "isThrowing", itemClass: "isThrownToy", bubble: "⚾️", sparkle: "✨" },
    ball: { pokemonClass: "isThrowing", itemClass: "isThrownToy", bubble: "🔴", sparkle: "✨" },
    soccerball: { pokemonClass: "isKicking", itemClass: "isKickedToy", bubble: "⚽️", sparkle: "💫" }
  }[itemId] || null;
}

function findNearestPokemonForItem(itemSticker) {
  if (!itemSticker || itemSticker.dataset.type !== "item") return null;

  const itemCenter = getStickerCenter(itemSticker);
  let nearestPokemon = null;
  let nearestDistance = Infinity;

  stickerBoard.querySelectorAll(".pokemonSticker").forEach(pokemonSticker => {
    const distance = getDistance(itemCenter, getStickerCenter(pokemonSticker));
    if (distance < nearestDistance) {
      nearestPokemon = pokemonSticker;
      nearestDistance = distance;
    }
  });

  const boardRect = stickerBoard.getBoundingClientRect();
  const snapDistance = Math.max(88, Math.min(boardRect.width, boardRect.height) * 0.16);
  return nearestPokemon && nearestDistance <= snapDistance ? nearestPokemon : null;
}

function feedPokemonWithItem(pokemonSticker, foodItem) {
  if (!pokemonSticker || !foodItem || foodItem.dataset.isBeingEaten === "true") return false;
  if (foodItem.dataset.category !== "food") return false;

  foodItem.dataset.isBeingEaten = "true";
  foodItem.classList.add("isBeingEaten");
  foodItem.style.pointerEvents = "none";
  applyPokemonReaction(pokemonSticker, "eating", { quiet: true });
  pokemonSticker.dataset.bubble = "😋";
  showPretendSparkle(foodItem, "🍽️");
  showPretendSparkle(pokemonSticker, "❤️");

  [520, 1180, 1840].forEach((delay, index) => {
    window.setTimeout(() => {
      if (!foodItem.isConnected) return;
      foodItem.dataset.biteStep = String(index + 1);
      showPretendSparkle(foodItem, index === 2 ? "✨" : "😋");
    }, delay);
  });

  window.setTimeout(() => {
    if (!foodItem.isConnected) return;
    foodItem.remove();
    pokemonSticker.dataset.bubble = "❤️";
    showPretendSparkle(pokemonSticker, "✨");
    playCry(Number(pokemonSticker.dataset.pokemonId || 0));
    saveStickerScene();
  }, 2500);

  return true;
}

function setStickerPercentPosition(sticker, x, y) {
  const safeX = Math.max(4, Math.min(94, x));
  const safeY = Math.max(8, Math.min(92, y));
  sticker.style.left = `${safeX}%`;
  sticker.style.top = `${safeY}%`;
  updateStickerTransform(sticker);
}

function findPokemonNearToyLanding(toyItem, sourcePokemon, radius = 150) {
  const landingCenter = getStickerCenter(toyItem);
  let nearestPokemon = null;
  let nearestDistance = Infinity;

  stickerBoard.querySelectorAll(".pokemonSticker").forEach(pokemonSticker => {
    if (pokemonSticker === sourcePokemon) return;
    const distance = getDistance(landingCenter, getStickerCenter(pokemonSticker));
    if (distance < nearestDistance) {
      nearestPokemon = pokemonSticker;
      nearestDistance = distance;
    }
  });

  return nearestPokemon && nearestDistance <= radius ? nearestPokemon : null;
}

function animateToyArc(toyItem, sourcePokemon, action, options = {}) {
  const boardRect = stickerBoard.getBoundingClientRect();
  const start = getStickerPercentPosition(toyItem);
  const direction = options.direction || Number(sourcePokemon.dataset.facing || 1) || 1;
  const flightPercent = action.itemClass === "isKickedToy" ? 19 : 16;
  const liftPx = action.itemClass === "isKickedToy" ? -28 : -54;
  const endX = Math.max(5, Math.min(92, start.x + direction * flightPercent));
  const endY = Math.max(9, Math.min(90, start.y + (options.returned ? -2 : 2)));
  const dx = (endX - start.x) / 100 * boardRect.width;
  const dy = (endY - start.y) / 100 * boardRect.height;
  const baseTransform = toyItem.style.getPropertyValue("--rest-transform") || toyItem.style.transform || "translateY(0)";
  const spin = action.itemClass === "isKickedToy" ? 480 : 320;

  toyItem.classList.add("isFlyingToy");
  const animation = toyItem.animate([
    { transform: baseTransform, offset: 0, easing: "ease-out" },
    { transform: `${baseTransform} translate(${dx * 0.52}px, ${dy * 0.52 + liftPx}px) rotate(${spin * 0.45 * direction}deg) scale(1.08)`, offset: 0.52, easing: "ease-in-out" },
    { transform: `${baseTransform} translate(${dx}px, ${dy}px) rotate(${spin * direction}deg) scale(0.98)`, offset: 1 }
  ], {
    duration: options.returned ? 820 : 980,
    easing: "cubic-bezier(0.16, 0.78, 0.24, 1)",
    fill: "forwards"
  });

  animation.onfinish = () => {
    animation.cancel();
    setStickerPercentPosition(toyItem, endX, endY);
    showPretendSparkle(toyItem, action.bubble);

    const receiver = findPokemonNearToyLanding(toyItem, sourcePokemon);
    if (receiver && !options.returned) {
      applyPokemonReaction(receiver, "playing", { quiet: true });
      receiver.dataset.bubble = "↩️";
      receiver.classList.add(action.pokemonClass);
      showPretendSparkle(receiver, action.bubble);
      pausePokemonAutonomy(receiver, 4800);
      window.setTimeout(() => playCry(Number(receiver.dataset.pokemonId || 0)), 260);
      sourcePokemon.classList.remove(action.pokemonClass);
      window.setTimeout(() => {
        receiver.classList.remove(action.pokemonClass);
        animateToyArc(toyItem, receiver, action, { returned: true, direction: -direction });
      }, 520);
      return;
    }

    toyItem.classList.remove("isFlyingToy", action.itemClass);
    toyItem.dataset.isToyActing = "";
    sourcePokemon.classList.remove(action.pokemonClass);
    saveStickerScene();
  };
}

function playToyActionWithPokemon(pokemonSticker, toyItem) {
  const action = getToyAction(toyItem);
  if (!pokemonSticker || !toyItem || !action || toyItem.dataset.isToyActing === "true") return false;

  toyItem.dataset.isToyActing = "true";
  applyPokemonReaction(pokemonSticker, "playing", { quiet: true });
  pokemonSticker.dataset.bubble = action.bubble;
  pokemonSticker.classList.add(action.pokemonClass);
  toyItem.classList.add(action.itemClass);
  showPretendSparkle(pokemonSticker, action.sparkle);
  showPretendSparkle(toyItem, action.bubble);
  pausePokemonAutonomy(pokemonSticker, 5600);

  window.setTimeout(() => playCry(Number(pokemonSticker.dataset.pokemonId || 0)), 640);
  animateToyArc(toyItem, pokemonSticker, action);

  return true;
}

function applyPretendInteraction(pokemonSticker, item, reaction) {
  if (feedPokemonWithItem(pokemonSticker, item)) return true;
  if (playToyActionWithPokemon(pokemonSticker, item)) return true;

  const state = pokemonSticker.dataset.pokeState || "normal";
  const matchesNeed = (state === "hungry" && reaction === "eating")
    || (state === "sleepy" && reaction === "sleeping")
    || (state === "playing" && reaction === "playing")
    || state === "normal"
    || state === "happy";

  if (!matchesNeed) return false;

  applyPokemonReaction(pokemonSticker, reaction, { keep: reaction === "sleeping" });
  const sparkleMark = reaction === "sleeping" ? "💤" : reaction === "eating" ? "❤️" : reaction === "playing" ? "✨" : reaction === "sit" ? "🪑" : "⭐";
  showPretendSparkle(pokemonSticker, sparkleMark);
  return true;
}

function reactToNearbyToy(pokemonSticker) {
  if (!pokemonSticker || pokemonSticker.dataset.type !== "pokemon") return false;

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
    return applyPretendInteraction(pokemonSticker, nearest.item, nearest.reaction);
  }

  return false;
}

function reactItemWithNearbyPokemon(itemSticker) {
  if (!itemSticker || itemSticker.dataset.type !== "item") return false;

  const reaction = getItemReaction(itemSticker);
  if (!reaction) return false;

  const pokemonSticker = findNearestPokemonForItem(itemSticker);
  if (!pokemonSticker) return false;

  return applyPretendInteraction(pokemonSticker, itemSticker, reaction);
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
    if (sticker.dataset.type === "pokemon") {
      reactToNearbyToy(sticker);
    } else {
      reactItemWithNearbyPokemon(sticker);
    }
    playStickerBounce(sticker);
    saveStickerScene();
  } else if (sticker.dataset.type === "pokemon") {
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
  "version": 6,
  "kind": "strokesvg-hiragana",
  "viewBox": "0 0 100 100",
  "source": "https://github.com/zhengkyl/strokesvg",
  "groups": {
    "basicVowels": [
      {
        "char": "あ",
        "word": "あめ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/あ.svg",
        "shadowPaths": [
          "M 40.527 26.465 a 214.746 214.746 0 0 1 -15.234 1.465 h -2.148 l -0.977 -0.195 q -1.074 -0.391 -1.855 -0.391 -1.172 0 -1.172 0.977 0 0.488 0.293 0.977 l 0.586 1.172 q 0.586 0.977 1.66 2.148 1.074 0.977 2.832 0.977 h 0.977 a 131.641 131.641 0 0 0 14.16 -1.27 l 6.152 -0.977 a 215.332 215.332 0 0 0 23.145 -5.469 q 3.32 -0.977 3.32 -2.344 l -0.098 -0.293 v -0.195 q -0.098 -0.684 -1.562 -1.855 -1.465 -1.074 -3.223 -1.074 h -0.586 q -0.781 0.098 -1.172 0.488 l -0.977 0.586 q -2.832 0.977 -7.52 2.246 l -10.352 2.051 z",
          "M 42.48 9.473 q -0.977 0 -1.172 0.488 v 0.195 q 0 0.488 0.391 1.074 a 4.492 4.492 0 0 1 0.684 2.051 l 0.098 0.586 v 0.488 l -1.953 12.109 -0.879 5.859 -1.953 13.672 -0.684 6.348 -0.195 2.148 v 2.344 a 100.977 100.977 0 0 0 0.879 12.012 l 1.27 6.543 1.465 5.664 q 0.586 1.758 1.953 1.758 l 0.977 -0.195 q 1.074 -0.293 1.953 -1.074 0.977 -0.977 0.977 -2.832 l -0.098 -0.781 -1.074 -3.125 q -0.586 -1.758 -1.074 -4.102 l -1.074 -7.031 -0.293 -3.418 a 72.656 72.656 0 0 1 0.293 -10.84 l 0.684 -5.566 2.148 -12.5 0.977 -5.859 2.539 -12.207 q 0 -1.172 -0.977 -1.855 -1.074 -0.684 -2.344 -1.172 l -2.441 -0.586 z",
          "m 59.961 32.227 -0.488 0.098 q -0.391 0.293 -0.391 0.781 l 0.098 0.781 0.195 0.684 0.098 0.781 0.098 0.684 -0.098 0.488 v 0.391 l -0.684 3.32 -2.051 5.273 q -2.344 4.688 -6.055 9.375 -3.516 4.688 -7.715 8.789 l -3.906 3.809 3.613 4.492 1.367 -1.27 q 6.152 -5.859 11.328 -12.5 5.273 -6.738 8.008 -12.891 l 1.953 -5.176 0.391 -1.855 0.195 -1.562 v -0.586 l -0.195 -0.781 q -0.195 -0.586 -1.367 -1.27 -0.977 -0.781 -2.344 -1.27 -1.172 -0.586 -2.051 -0.586",
          "m 65.332 40.137 -6.543 0.098 a 50 50 0 0 0 -15.137 3.613 l -5.957 2.148 q -2.832 1.367 -6.055 4.004 -3.32 2.637 -6.641 5.762 -3.223 3.223 -5.566 6.445 -2.441 3.125 -3.418 5.566 -0.684 1.758 -0.684 4.004 0 1.172 0.391 3.32 0.391 2.246 1.27 4.59 t 2.344 4.004 3.516 1.562 q 1.66 0.098 4.102 -1.367 2.734 -1.465 5.957 -3.809 3.223 -2.246 6.055 -4.688 l 3.711 -3.418 -3.613 -4.492 -1.367 1.367 a 114.062 114.062 0 0 1 -12.207 9.57 q -0.586 0.488 -1.172 0.488 l -0.391 -0.195 -0.293 -0.293 q -0.879 -1.562 -1.66 -3.516 -0.586 -2.051 -0.586 -3.809 v -0.781 l 0.195 -0.781 q 0.879 -2.734 3.516 -5.957 a 62.793 62.793 0 0 1 11.914 -11.23 l 5.957 -2.93 a 39.941 39.941 0 0 1 13.77 -3.906 l 6.641 -0.195 q 1.66 0.098 4.297 0.684 2.637 0.391 5.078 2.051 2.637 1.465 4.395 4.59 a 16.504 16.504 0 0 1 1.66 9.766 l -0.098 1.562 q -0.488 4.102 -3.125 7.812 -2.539 3.711 -6.348 7.129 a 68.945 68.945 0 0 1 -16.895 11.133 q -4.199 2.148 -7.422 3.32 -2.539 0.977 -2.539 2.246 0 0.879 1.66 0.879 l 3.418 -0.781 a 81.445 81.445 0 0 0 16.895 -6.641 q 5.078 -2.441 9.57 -5.859 4.492 -3.516 7.715 -7.91 a 22.656 22.656 0 0 0 4.297 -14.258 q 0 -3.223 -0.977 -6.543 -0.781 -3.516 -3.027 -6.445 -2.246 -3.125 -6.348 -5.273 -4.004 -2.148 -10.254 -2.637"
        ],
        "strokes": [
          {
            "id": "あ-1",
            "centerPath": "m 11.133 32.031 56.055 -8.008",
            "source": "strokesvg"
          },
          {
            "id": "あ-2",
            "centerPath": "M 47.168 3.613 c -4.199 24.512 -12.012 55.859 -4.297 74.023",
            "source": "strokesvg"
          },
          {
            "id": "あ-3",
            "centerPath": "M 67.383 27.051 50.488 59.863 s -2.637 6.348 -13.574 15.137 c -1.562 1.172 -12.305 10.352 -18.164 3.027 -8.496 -10.742 14.941 -38.477 43.75 -35.352 24.316 2.637 19.727 18.75 15.039 30.469 -4.883 12.207 -13.965 15.918 -31.738 19.727",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "い",
        "word": "いす",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/い.svg",
        "shadowPaths": [
          "M 14.355 25.391 v 0.195 q 0 0.684 0.977 1.855 0.977 0.977 1.074 2.539 l 0.586 10.449 q 0.488 5.859 1.367 12.305 1.074 6.348 2.637 12.305 1.66 5.859 4.297 10.449 2.734 4.492 6.738 6.641 l 1.66 0.684 q 0.879 0.293 1.562 0.293 0.977 0 2.051 -0.781 t 1.367 -4.004 q 0.293 -1.855 1.074 -4.59 l 1.66 -5.957 1.66 -5.371 1.172 -3.223 0.391 -1.172 0.098 -0.977 q 0 -1.465 -0.879 -1.465 -1.074 0 -2.051 2.051 l -2.051 3.711 q -1.66 2.734 -3.516 6.25 -1.953 3.418 -3.223 6.152 -2.637 -2.148 -4.395 -6.445 -1.855 -4.297 -3.027 -9.57 -1.074 -5.371 -1.66 -10.84 t -0.781 -9.961 q -0.293 -4.59 -0.293 -7.227 0 -0.977 -0.293 -1.953 -0.195 -1.074 -1.66 -1.758 -0.977 -0.488 -2.441 -0.879 -1.367 -0.488 -2.441 -0.488 -1.27 0 -1.66 0.781",
          "M 89.453 62.012 v -0.293 q -0.098 -2.246 -1.66 -5.957 -1.465 -3.613 -3.906 -7.715 -2.344 -4.199 -5.078 -7.91 -2.734 -3.809 -5.176 -6.152 -2.539 -2.344 -4.297 -2.344 -1.172 0 -1.953 0.781 -0.684 0.684 -0.684 1.758 0 1.367 1.172 2.441 2.148 1.758 4.492 5.273 2.441 3.418 4.492 7.52 2.246 4.004 3.711 7.91 1.66 3.906 2.051 6.641 0.195 1.172 0.977 1.758 0.781 0.488 1.758 0.488 1.465 0 2.734 -1.074 1.367 -1.172 1.367 -3.125"
        ],
        "strokes": [
          {
            "id": "い-1",
            "centerPath": "M 18.066 16.992 c -0.098 25.098 8.008 68.066 14.453 65.137 l 9.668 -22.07",
            "source": "strokesvg"
          },
          {
            "id": "い-2",
            "centerPath": "m 64.062 25.293 21.289 35.547",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "う",
        "word": "うみ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/う.svg",
        "shadowPaths": [
          "M 39.355 12.695 h -0.586 q -1.465 0 -2.051 1.27 -0.586 1.367 -0.586 1.758 0 1.367 2.051 1.855 5.762 1.074 11.621 3.418 5.859 2.246 9.766 4.004 l 0.586 0.195 h 0.586 q 1.66 0 2.441 -1.367 0.879 -1.562 0.879 -2.441 0 -1.562 -2.344 -2.539 -2.93 -1.367 -6.934 -2.539 -3.906 -1.27 -8.008 -2.246 -4.004 -0.977 -7.422 -1.367",
          "M 37.109 94.043 q 6.445 -2.441 12.695 -5.859 6.152 -3.418 11.328 -8.203 5.078 -4.785 8.105 -11.133 2.93 -6.543 2.93 -15.039 0 -6.348 -1.367 -10.352 -1.27 -4.004 -3.418 -6.152 -2.051 -2.344 -4.492 -3.32 -2.246 -0.977 -4.297 -1.172 l -3.125 -0.195 -1.562 0.098 -1.465 0.098 q -6.738 0.684 -11.914 2.93 -5.273 2.051 -10.84 3.613 l -0.781 0.293 h -2.148 l -1.074 -0.195 q -0.586 0 -0.977 0.293 t -0.391 0.781 1.172 1.953 2.832 2.637 2.734 1.172 q 0.781 0 1.367 -0.293 l 1.172 -0.586 q 9.082 -4.98 14.551 -6.152 5.371 -1.074 7.031 -1.074 l 2.344 0.293 q 1.562 0.293 3.418 1.758 1.758 1.367 2.93 4.785 1.367 3.32 1.367 9.277 0 7.324 -2.734 13.086 t -7.227 10.156 q -4.395 4.395 -9.57 7.715 -5.176 3.418 -10.352 6.152 -2.344 1.27 -2.344 2.246 t 1.562 0.977 q 1.074 0 2.539 -0.586"
        ],
        "strokes": [
          {
            "id": "う-1",
            "centerPath": "m 29.688 12.402 29.297 8.984",
            "source": "strokesvg"
          },
          {
            "id": "う-2",
            "centerPath": "M 18.555 48.047 s 40.039 -25.879 48.145 -4.59 c 9.473 25 -11.035 35.547 -29.102 48.145",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "え",
        "word": "えき",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/え.svg",
        "shadowPaths": [
          "M 59.766 28.027 q 1.27 0 1.758 -0.781 0.586 -0.977 0.684 -1.953 l 0.195 -1.562 q 0 -0.879 -0.391 -1.465 -0.293 -0.586 -1.367 -1.074 -1.074 -0.586 -3.418 -1.465 l -5.273 -1.953 -5.664 -1.855 -4.883 -1.465 q -2.051 -0.586 -2.637 -0.586 -0.879 0 -1.66 1.367 -0.781 1.172 -0.781 1.953 0 1.367 2.148 2.148 2.344 0.684 5.176 1.855 2.93 1.074 5.859 2.441 l 5.176 2.246 q 2.441 1.074 3.516 1.758 0.781 0.391 1.562 0.391",
          "M 85.059 87.402 v -0.098 q 0 -1.172 -1.27 -2.539 -1.172 -1.27 -3.32 -1.66 l -0.781 -0.098 q -0.879 0 -1.562 0.293 l -1.562 0.391 -7.324 0.977 q -4.102 0.586 -7.324 0.586 h -0.781 l -0.781 -0.098 q -1.855 -0.195 -3.32 -1.367 -1.562 -1.27 -2.051 -2.441 -1.172 -2.734 -1.953 -5.762 t -1.367 -4.297 q -1.074 -3.32 -2.637 -5.078 -1.66 -1.855 -4.297 -1.855 -1.367 0 -2.539 0.488 l -2.344 0.977 6.445 -7.52 6.445 -7.227 q 3.027 -3.516 5.469 -6.055 l 3.711 -3.906 q 2.148 -2.051 2.148 -3.711 0 -1.172 -1.562 -2.344 -1.562 -1.074 -3.32 -1.074 l -0.781 0.098 -2.93 0.781 -6.25 1.66 -7.715 1.953 -7.324 1.855 -4.688 0.977 -1.66 0.195 h -2.93 l -0.977 -0.098 q -1.074 0 -1.074 0.586 0 0.977 1.074 2.441 0.977 1.27 2.344 2.246 1.465 0.977 2.637 0.977 l 1.172 -0.195 1.367 -0.391 7.715 -2.051 7.91 -2.344 6.836 -1.758 -4.883 5.664 -6.934 8.203 -7.715 9.18 -7.52 8.789 -6.055 7.227 -3.516 4.004 q -1.074 1.172 -1.074 2.441 0 1.562 1.465 2.539 1.562 1.074 2.539 1.074 1.758 0 3.613 -2.344 1.367 -1.66 2.051 -3.125 0.684 -1.367 2.344 -3.027 l 2.051 -2.344 3.906 -4.102 q 2.344 -2.344 4.59 -3.906 2.441 -1.562 4.199 -1.562 1.855 0 2.539 1.465 1.074 2.344 1.855 5.469 l 1.66 5.664 q 1.66 4.492 4.199 6.348 2.441 1.953 4.98 2.344 2.637 0.391 4.59 0.391 4.395 0 9.277 -0.488 l 8.691 -0.879 q 2.344 -0.195 3.223 -0.879 0.977 -0.586 1.074 -1.66"
        ],
        "strokes": [
          {
            "id": "え-1",
            "centerPath": "m 30.469 13.184 27.148 10.84",
            "source": "strokesvg"
          },
          {
            "id": "え-2",
            "centerPath": "M 16.211 48.047 c 15.625 -5.078 48.145 -19.727 45.605 -13.867 -4.98 11.035 -21.875 20.801 -26.66 27.539 -12.109 15.82 -19.043 28.711 -19.043 28.711 s 16.602 -26.855 28.906 -22.852 c 11.035 3.613 -2.637 28.125 34.961 19.531",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "お",
        "word": "おにぎり",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/お.svg",
        "shadowPaths": [
          "M 33.398 36.328 a 197.754 197.754 0 0 1 -13.867 2.344 l -2.93 -0.293 q -0.488 0 -0.977 0.293 -0.293 0.195 -0.293 0.488 0 0.684 0.781 2.051 0.781 1.27 2.051 2.148 1.367 1.074 2.637 1.074 l 3.809 -0.391 8.789 -1.758 5.762 -1.367 a 242.09 242.09 0 0 0 16.699 -4.883 q 1.758 -0.879 2.148 -1.367 0.391 -0.586 0.391 -0.977 0 -0.586 -0.488 -1.27 -0.684 -0.781 -2.051 -1.465 -1.172 -0.684 -2.441 -0.684 l -0.684 0.098 -1.074 0.391 -0.977 0.586 q -4.688 1.855 -11.426 3.516 z",
          "M 34.082 13.379 q -1.66 0 -2.148 0.879 v 0.195 l 0.293 1.074 0.488 0.781 q 0.586 0.684 0.586 2.148 v 8.789 l 0.098 9.082 v 5.957 l 0.098 5.957 v 11.23 l -0.098 5.371 -0.098 6.348 -0.488 12.012 q -0.195 0.684 -0.684 0.684 h -0.195 l -5.273 -1.27 c -1.562 -0.586 -3.027 4.297 -0.977 5.273 a 63.281 63.281 0 0 0 7.715 2.734 h 0.488 q 1.367 -0.098 2.539 -0.684 1.172 -0.684 1.855 -2.734 0.391 -0.879 0.391 -3.809 a 171.094 171.094 0 0 0 0.391 -15.234 v -6.152 l 0.098 -10.547 V 40.918 l 0.098 -6.055 V 17.285 q 0 -0.391 -0.195 -1.27 -0.098 -0.879 -1.27 -1.758 -1.074 -0.879 -3.711 -0.879",
          "M 33.398 64.844 q -7.422 4.785 -11.133 7.715 -3.711 3.027 -4.883 4.883 -1.074 1.758 -1.074 3.027 0 2.246 2.246 3.906 l 2.93 1.66 4.199 1.855 c 1.855 0.781 4.102 -4.395 0.977 -5.273 l -2.734 -1.172 q -1.172 -0.684 -1.27 -1.27 l 0.098 -0.293 q 0.977 -1.074 3.906 -3.613 3.223 -2.539 6.641 -5.078 l 5.762 -3.027 q 5.371 -2.832 10.938 -5.078 5.566 -2.148 10.156 -2.441 h 1.27 l 1.074 -0.098 q 6.738 0 10.742 2.246 t 4.004 7.52 v 0.488 q -0.098 2.637 -1.855 4.98 -1.758 2.441 -4.102 4.004 a 10.059 10.059 0 0 1 -5.664 1.953 h -0.977 a 55.371 55.371 0 0 1 -17.773 -2.93 q -1.367 0 -1.367 0.879 0 0.977 2.051 2.441 2.148 1.27 5.371 2.539 3.223 1.367 6.738 2.246 t 6.25 0.879 h 1.074 q 4.297 -0.195 8.105 -2.637 3.906 -2.441 6.543 -6.348 2.539 -4.004 2.734 -8.496 v -0.781 q 0 -6.25 -5.273 -10.449 -5.273 -4.297 -15.527 -4.297 l -1.172 0.098 h -1.172 q -5.273 0.293 -11.133 2.441 -5.664 1.953 -11.035 4.688 z",
          "M 83.301 41.211 q 1.367 0 2.441 -1.27 1.074 -1.367 1.074 -2.539 0 -0.684 -0.293 -1.367 -0.195 -0.684 -1.953 -1.855 -1.562 -1.172 -4.004 -2.539 -2.344 -1.562 -4.98 -2.832 l -4.688 -2.344 q -2.051 -0.977 -3.223 -1.172 l -0.879 -0.098 q -1.27 0 -2.734 1.66 -0.293 0.488 -0.293 0.977 0 1.172 1.367 1.855 4.492 2.246 8.496 4.98 t 7.324 5.664 q 1.172 0.879 2.344 0.879"
        ],
        "strokes": [
          {
            "id": "お-1",
            "centerPath": "m 8.301 43.359 44.531 -9.473",
            "source": "strokesvg"
          },
          {
            "id": "お-2",
            "centerPath": "m 35.254 5.566 1.074 83.203 -19.238 -8.594 s 31.445 -30.176 51.758 -23.926 c 16.992 5.273 14.648 18.75 7.227 24.512 -14.746 11.23 -26.074 1.27 -26.074 1.27",
            "source": "strokesvg"
          },
          {
            "id": "お-3",
            "centerPath": "m 57.715 21.777 23.828 14.746",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "か",
        "word": "かさ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/か.svg",
        "shadowPaths": [
          "M 57.324 42.871 v -0.586 q 0 -3.027 -1.66 -4.785 a 8.496 8.496 0 0 0 -3.809 -2.637 12.305 12.305 0 0 0 -6.445 -0.684 l -5.957 1.074 -7.129 1.758 q -5.078 1.27 -9.473 2.734 l -6.738 2.051 -0.781 0.195 h -1.758 l -0.879 -0.098 h -0.586 l -0.586 -0.098 q -0.977 0 -0.977 0.586 v 0.195 q 0 0.391 0.684 1.758 0.781 1.172 1.953 2.246 1.27 1.074 2.93 1.074 1.465 0.098 2.93 -0.781 l 3.418 -1.27 7.227 -2.246 7.324 -1.855 a 72.168 72.168 0 0 1 10.059 -1.855 q 2.246 0 3.027 1.172 0.781 1.27 0.781 2.734 -0.098 5.859 -1.465 12.305 a 100.488 100.488 0 0 1 -7.031 22.363 q -1.953 4.102 -3.711 5.176 l -0.586 0.098 h -0.488 l -2.637 -2.051 -8.984 -7.031 q -0.781 0 -0.781 0.977 0 0.684 0.586 2.148 l 1.367 2.148 5.371 7.715 2.441 2.93 q 1.855 1.758 4.004 1.758 t 4.98 -3.516 q 2.832 -3.418 5.566 -9.863 2.832 -6.445 4.883 -15.527 2.246 -9.082 2.93 -20.312",
          "M 39.453 35.254 a 136.621 136.621 0 0 0 5.957 -18.555 l -0.098 -0.977 q -0.098 -0.977 -1.27 -1.758 a 11.328 11.328 0 0 0 -4.688 -1.465 q -0.879 0 -1.172 0.488 l -0.195 0.488 q 0 0.488 0.293 0.781 0.293 0.391 0.391 0.977 0.293 0.391 0.293 1.27 0 0.781 -0.586 3.027 a 117.285 117.285 0 0 1 -3.418 10.156 l -2.637 7.324 -2.637 6.348 a 189.648 189.648 0 0 1 -11.816 23.633 q -0.586 1.172 -0.684 2.441 0 1.66 1.367 2.734 0.977 0.586 1.855 0.586 2.051 0 3.125 -2.051 a 563.77 563.77 0 0 0 13.477 -29.199 z",
          "M 93.359 62.598 q 0 -1.562 -1.465 -4.395 -1.367 -2.832 -3.809 -6.25 -2.344 -3.32 -5.176 -6.738 -2.734 -3.418 -5.371 -6.348 -2.734 -2.832 -4.883 -4.59 -1.953 -1.758 -2.832 -1.758 -0.781 0 -1.855 0.781 -0.879 0.879 -0.879 1.855 0 1.367 1.367 2.637 2.441 2.148 5.371 5.664 2.832 3.516 5.566 7.52 2.832 3.906 4.785 7.52 2.051 3.516 2.637 5.566 0.586 1.953 2.832 1.953 1.367 0 2.539 -0.879 1.172 -1.074 1.172 -2.539"
        ],
        "strokes": [
          {
            "id": "か-1",
            "centerPath": "M 4.883 47.949 s 45.801 -21.094 49.023 -6.152 c 3.32 14.844 -8.398 53.906 -17.871 46.777 -5.371 -4.102 -7.52 -9.863 -7.52 -9.863",
            "source": "strokesvg"
          },
          {
            "id": "か-2",
            "centerPath": "M 45.703 7.129 21.973 68.066",
            "source": "strokesvg"
          },
          {
            "id": "か-3",
            "centerPath": "m 63.672 27.734 24.609 33.398",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "き",
        "word": "きのこ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/き.svg",
        "shadowPaths": [
          "M 65.43 22.461 h -0.391 q -1.074 0.098 -1.66 0.781 -0.391 0.391 -1.27 0.684 l -11.816 2.637 -5.566 1.465 q -8.789 2.051 -17.09 4.785 a 11.914 11.914 0 0 1 -5.176 0.488 l -0.879 -0.098 -0.879 0.098 q -0.684 0.098 -0.684 0.781 l 0.781 1.562 q 0.879 1.074 2.441 2.148 a 5.664 5.664 0 0 0 4.98 0.684 l 3.125 -1.074 a 280.176 280.176 0 0 1 15.918 -4.492 l 5.859 -1.367 15.918 -3.125 q 3.027 -0.586 3.027 -1.953 0 -1.27 -1.172 -2.148 -1.074 -0.977 -2.734 -1.27 -1.465 -0.586 -2.734 -0.586",
          "M 54.199 44.922 q -6.738 1.66 -11.426 2.246 -4.395 0.684 -7.91 0.684 h -1.172 l -0.977 -0.098 q -1.367 0.098 -1.953 0.684 -0.391 0.488 -0.391 1.074 0 1.367 2.148 2.246 2.051 1.074 7.91 1.074 a 45.312 45.312 0 0 0 12.891 -1.758 l 4.102 -0.977 5.762 -1.367 q 7.324 -1.953 10.449 -3.223 3.027 -1.367 3.027 -2.344 0 -0.879 -1.367 -2.148 -1.27 -1.367 -3.906 -1.367 l -1.074 0.098 q -1.074 0 -1.465 0.586 l -1.367 0.977 -2.344 0.684 -5.176 1.367 z",
          "m 50.293 26.562 -8.008 -13.672 q -0.684 -0.488 -3.027 -0.488 l -2.637 0.195 q -1.465 0.195 -1.465 1.172 0 0.781 0.684 1.074 t 1.27 0.781 q 1.27 1.074 2.051 2.246 l 5.566 10.156 2.539 4.883 3.418 6.055 3.516 5.957 3.223 5.176 6.348 10.156 q -4.98 0.293 -7.227 0.684 -2.344 0.293 -2.344 1.367 t 2.441 1.562 l 4.492 1.172 7.129 1.367 h 0.977 q 1.074 -0.195 1.953 -0.977 0.879 -0.879 0.879 -2.148 0 -0.684 -0.391 -1.465 l -0.781 -1.465 a 134.57 134.57 0 0 1 -7.715 -11.621 l -3.223 -5.371 -3.418 -5.859 -3.418 -5.957 z",
          "m 57.031 92.188 0.977 0.098 0.879 0.098 q 1.367 0 2.246 -0.586 0.879 -0.488 0.879 -1.562 l -0.488 -1.758 q -0.391 -1.465 -1.855 -2.832 -1.27 -1.562 -4.004 -1.562 -3.809 -0.098 -8.594 -1.562 -4.688 -1.66 -9.18 -4.102 -4.395 -2.539 -7.617 -5.273 -1.074 -1.074 -1.66 -2.246 -0.586 -1.27 -0.684 -2.441 -0.195 -3.223 -1.855 -3.223 -0.195 0 -1.172 0.879 -0.879 0.879 -0.879 3.516 0 1.953 1.074 4.98 1.074 2.93 4.395 5.273 6.641 4.59 13.086 7.52 6.543 2.832 14.453 4.785"
        ],
        "strokes": [
          {
            "id": "き-1",
            "centerPath": "m 13.867 38.477 52.539 -11.816",
            "source": "strokesvg"
          },
          {
            "id": "き-2",
            "centerPath": "m 24.121 52.832 46.68 -9.668",
            "source": "strokesvg"
          },
          {
            "id": "き-3",
            "centerPath": "M 33.887 6.348 c 21.973 45.508 49.805 57.129 32.812 57.812 l -7.715 0.293",
            "source": "strokesvg"
          },
          {
            "id": "き-4",
            "centerPath": "M 25.195 58.887 s -2.246 19.336 16.309 25.977 c 5.273 1.855 15.234 3.906 15.234 3.906",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "く",
        "word": "くつ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/く.svg",
        "shadowPaths": [
          "m 63.477 21.094 0.977 -1.562 q 0.586 -0.879 0.586 -1.855 0 -1.465 -1.172 -2.637 -1.074 -1.367 -2.441 -2.051 t -2.246 -0.684 l -0.488 0.098 q -0.586 0.195 -0.586 0.879 v 0.391 l 0.098 0.488 q 0 1.758 -2.637 5.176 -2.441 3.32 -8.594 9.57 -5.957 6.055 -16.602 16.211 l -1.855 1.562 q -1.172 0.879 -1.172 2.832 0 1.367 0.586 2.344 0.684 0.977 1.367 1.562 2.344 1.855 5.762 5.469 3.516 3.516 7.422 7.91 4.004 4.395 7.715 8.984 3.711 4.492 6.445 8.496 t 3.711 6.836 q 0.391 0.977 1.074 1.758 0.781 0.977 1.758 0.977 0.293 0 1.27 -0.488 1.074 -0.293 1.953 -1.172 t 0.879 -2.344 q 0 -2.051 -1.953 -5.371 -2.051 -3.418 -5.371 -7.52 -3.223 -4.199 -7.031 -8.398 -3.809 -4.297 -7.52 -8.008 -3.613 -3.809 -6.445 -6.543 -2.637 -2.832 -3.906 -3.809 -0.293 -0.293 -0.293 -0.684 l 0.098 -0.195 14.844 -13.672 q 7.422 -6.934 13.77 -14.551"
        ],
        "strokes": [
          {
            "id": "く-1",
            "centerPath": "M 68.262 10.156 26.855 49.219 l 36.719 38.672",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "け",
        "word": "けむり",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/け.svg",
        "shadowPaths": [
          "M 33.789 59.863 h -0.293 q -0.684 0 -1.172 1.367 l -1.27 2.539 -2.051 4.297 q -1.172 2.441 -2.344 4.395 l -0.293 -4.199 -0.098 -4.883 q 0 -6.055 0.391 -13.184 0.488 -7.227 1.172 -14.16 l 1.367 -12.695 0.098 -0.977 0.098 -0.781 q 0 -0.977 -0.391 -1.465 -0.391 -0.879 -1.562 -1.27 -1.172 -0.586 -2.246 -0.684 l -1.465 -0.098 q -1.465 0 -1.66 0.586 v 0.391 l 0.195 0.781 0.488 0.879 q 0.488 0.781 0.488 1.465 v 0.488 q -0.391 2.832 -0.781 7.715 l -0.879 10.645 -0.684 10.84 -0.391 9.082 v 2.637 l 0.293 5.957 0.781 6.836 q 0.488 3.516 1.27 6.152 0.879 2.441 2.148 3.027 l 0.781 0.293 0.977 0.098 q 0.879 0 1.66 -0.391 0.781 -0.586 1.172 -1.855 l 0.781 -3.516 1.367 -5.566 1.367 -6.25 1.074 -5.078 0.391 -2.441 q 0 -0.684 -0.781 -0.977",
          "M 88.672 34.57 z q 0 -0.684 -0.879 -1.465 -0.879 -0.879 -2.051 -1.562 -1.172 -0.879 -2.148 -0.879 h -0.195 q -0.977 0.098 -1.562 0.391 l -1.562 0.488 -8.008 0.879 -6.152 0.879 -22.852 4.004 h -1.27 l -1.27 -0.098 -0.977 -0.195 -0.586 0.098 q -0.488 0.098 -0.488 0.586 0 0.879 1.172 2.734 1.172 1.66 2.637 2.148 0.684 0.391 1.562 0.391 0.684 0.098 1.27 -0.195 l 1.367 -0.293 8.984 -1.758 10.547 -1.855 6.25 -0.781 a 115.137 115.137 0 0 1 12.5 -1.172 q 1.758 -0.098 2.734 -0.586 0.977 -0.586 0.977 -1.66",
          "m 72.266 32.324 -0.391 -16.113 q 0 -2.051 -0.781 -2.637 -0.586 -0.684 -2.637 -1.172 -1.172 -0.391 -2.832 -0.391 -1.758 0 -1.855 0.488 v 0.195 q 0 0.488 0.293 0.781 l 0.586 0.781 0.586 1.27 q 0.391 0.586 0.391 1.367 a 233.008 233.008 0 0 1 0.488 16.309 l 0.098 5.566 v 5.859 q 0 8.691 -0.293 15.723 -0.293 5.762 -2.246 11.426 a 48.34 48.34 0 0 1 -11.23 19.043 q -1.855 1.953 -1.855 2.539 0 0.684 0.293 0.879 l 0.586 0.098 q 0.586 0 1.172 -0.391 l 1.66 -0.977 q 5.469 -3.809 9.277 -9.082 4.102 -5.371 6.348 -11.426 t 2.441 -11.816 a 252.246 252.246 0 0 0 0.098 -18.164 v -4.492 z"
        ],
        "strokes": [
          {
            "id": "け-1",
            "centerPath": "M 26.074 11.719 s -13.965 69.824 0.879 74.707 l 5.273 -21.289",
            "source": "strokesvg"
          },
          {
            "id": "け-2",
            "centerPath": "m 32.422 41.504 50.977 -7.324",
            "source": "strokesvg"
          },
          {
            "id": "け-3",
            "centerPath": "M 66.016 5.078 c 4.688 29.98 7.812 70.312 -11.621 85.84",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "こ",
        "word": "こま",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/こ.svg",
        "shadowPaths": [
          "M 29.785 29.004 h 0.488 l 3.125 -0.098 h 3.223 q 6.738 0 12.891 0.586 t 11.23 1.855 l -3.906 3.32 -4.102 3.418 q -3.223 2.539 -3.223 3.516 0 0.488 0.781 0.488 t 2.441 -0.586 l 2.051 -0.977 4.395 -2.148 5.469 -2.637 4.98 -2.637 q 1.562 -0.781 1.66 -2.246 l 0.098 -0.684 q 0 -1.758 -0.977 -2.441 -0.977 -0.781 -1.855 -0.977 -4.59 -1.66 -11.133 -2.441 t -13.77 -0.781 l -6.543 0.195 q -3.223 0.098 -6.445 0.488 -2.051 0.195 -2.734 0.781 -0.586 0.586 -0.684 1.953 v 0.293 q 0 1.758 2.539 1.758",
          "M 74.609 78.613 h -0.195 q -0.684 0 -1.367 0.293 -0.781 0.293 -1.562 0.293 l -3.906 0.195 -4.883 0.098 q -11.523 0 -18.652 -1.562 -7.227 -1.758 -11.23 -4.785 -3.906 -3.125 -5.859 -7.227 -0.781 -2.148 -1.758 -2.148 h -0.391 q -2.051 0.098 -2.051 2.344 0 0.879 0.781 3.613 0.781 2.539 3.125 5.664 2.441 3.125 7.52 5.566 4.297 2.148 10.059 3.32 5.762 1.27 11.719 1.758 6.152 0.488 11.23 0.488 5.664 0 8.496 -0.293 2.93 -0.391 3.809 -1.27 0.977 -0.781 0.977 -1.953 l -0.098 -0.293 v -0.293 q -0.098 -1.074 -1.27 -1.953 -1.074 -0.879 -2.441 -1.367 -1.27 -0.488 -2.051 -0.488"
        ],
        "strokes": [
          {
            "id": "こ-1",
            "centerPath": "M 20.703 26.172 c 17.969 -0.488 33.105 -4.98 51.367 1.758 L 54.004 38.086",
            "source": "strokesvg"
          },
          {
            "id": "こ-2",
            "centerPath": "M 21.191 58.105 s 4.199 30.176 53.516 24.707",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "さ",
        "word": "さかな",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/さ.svg",
        "shadowPaths": [
          "M 59.082 37.402 a 373.145 373.145 0 0 0 19.531 -4.98 q 2.051 -0.781 2.344 -1.465 0.488 -0.586 0.488 -1.172 0 -1.66 -1.465 -2.246 -1.27 -0.684 -2.734 -0.977 l -1.953 -0.293 h -0.684 q -0.879 0.098 -1.465 0.684 -0.684 0.586 -1.562 0.879 -1.953 0.781 -6.152 1.855 -4.199 1.172 -9.473 2.246 l -6.055 1.27 a 506.445 506.445 0 0 1 -20.41 3.711 q -4.395 0.586 -7.129 0.781 h -2.734 l -1.367 -0.293 -1.855 -0.293 -0.293 0.098 h -0.195 q -0.488 0.098 -0.488 0.781 0 0.879 0.781 2.246 0.781 1.27 2.051 2.246 1.465 0.977 3.027 0.977 2.441 0.098 6.543 -0.488 a 188.965 188.965 0 0 0 17.871 -2.832 l 7.129 -1.465 z",
          "m 61.816 53.711 -8.008 1.27 q -2.93 0.488 -2.93 1.465 0.098 0.586 0.977 1.074 0.977 0.488 2.344 0.684 l 4.785 0.879 7.129 1.66 h 0.781 q 1.855 -0.098 2.734 -0.977 a 6.055 6.055 0 0 0 1.758 -3.125 q 0 -0.781 -0.391 -1.367 l -1.074 -1.367 q -1.953 -2.051 -4.785 -6.543 l -6.055 -9.961 -3.125 -5.469 a 291.992 291.992 0 0 1 -8.398 -16.309 q -0.586 -1.367 -1.367 -2.246 -0.684 -0.781 -3.027 -0.781 l -2.734 0.195 q -1.562 0.098 -1.66 0.684 v 0.195 q 0 0.684 0.879 1.27 0.684 0.488 1.27 1.172 l 0.684 0.879 0.781 1.27 q 2.148 4.102 3.906 7.91 l 3.613 7.031 2.93 5.469 a 203.32 203.32 0 0 0 8.984 15.039",
          "M 66.016 89.941 v -0.293 q 0 -1.758 -1.27 -3.418 -1.367 -1.855 -3.027 -2.246 -0.684 -0.195 -1.855 -0.195 l -1.953 -0.195 q -5.273 -0.977 -10.254 -2.832 -4.785 -1.758 -8.203 -3.223 -3.809 -2.051 -6.152 -3.906 -2.246 -1.953 -3.711 -4.395 -0.586 -1.074 -0.781 -2.344 l -0.293 -2.539 q -0.098 -1.074 -0.781 -1.172 h -0.195 q -1.074 0 -1.66 1.953 -0.586 1.758 -0.586 3.711 0 3.32 2.344 6.445 t 6.055 5.664 q 3.809 2.637 8.203 4.785 4.395 2.051 8.594 3.418 4.297 1.562 7.52 2.344 3.32 0.781 4.59 0.781 1.758 0 2.539 -0.684 t 0.879 -1.66"
        ],
        "strokes": [
          {
            "id": "さ-1",
            "centerPath": "m 9.277 41.016 66.504 -10.742",
            "source": "strokesvg"
          },
          {
            "id": "さ-2",
            "centerPath": "m 37.402 6.543 32.812 48.633 -13.379 0.684",
            "source": "strokesvg"
          },
          {
            "id": "さ-3",
            "centerPath": "M 27.441 56.641 s -3.711 28.125 32.91 31.934",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "し",
        "word": "しま",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/し.svg",
        "shadowPaths": [
          "M 48.828 83.984 h -1.074 q -4.59 0 -7.91 -1.66 -3.418 -1.758 -5.371 -5.957 -1.758 -4.199 -1.758 -11.621 v -0.488 q 0 -6.25 0.684 -16.797 l 1.66 -25.391 0.098 -1.074 0.098 -1.074 q 0 -2.051 -1.562 -2.832 t -3.32 -0.879 l -1.855 -0.195 q -1.562 0 -1.953 0.488 l -0.098 0.293 q 0 0.684 0.977 1.758 0.977 1.172 0.977 3.613 v 0.586 l -0.977 16.016 -0.781 14.648 -0.391 11.328 q 0 5.078 0.879 9.766 0.879 4.59 3.125 8.203 2.344 3.613 6.543 5.664 4.199 2.148 10.84 2.148 6.348 0 11.816 -1.758 5.566 -1.562 9.961 -4.199 4.492 -2.539 7.715 -5.273 3.125 -2.832 4.883 -4.98 1.66 -2.344 1.66 -3.32 0 -0.879 -0.781 -0.879 -1.172 0 -3.809 2.148 -3.418 3.027 -8.496 5.664 -5.078 2.539 -10.84 4.297 -5.664 1.562 -10.938 1.758"
        ],
        "strokes": [
          {
            "id": "し-1",
            "centerPath": "M 21.777 12.109 c 16.699 -1.27 4.688 41.113 8.789 63.281 3.32 18.457 32.227 13.77 50.488 -0.977",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "す",
        "word": "すいか",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/す.svg",
        "shadowPaths": [
          "M 54.004 27.246 a 485.938 485.938 0 0 0 -37.207 5.371 h -1.27 l -2.832 -0.488 -0.586 0.098 q -0.879 0.293 -0.879 1.27 l 0.391 1.562 q 0.488 1.367 1.66 2.637 1.27 1.172 3.613 1.172 0.977 0 1.758 -0.293 l 1.562 -0.293 q 7.617 -1.66 16.309 -3.027 l 17.48 -2.246 6.152 -0.586 a 315.527 315.527 0 0 1 25.586 -1.855 q 2.344 0 3.223 -0.586 1.074 -0.488 1.074 -1.27 -0.098 -1.367 -1.562 -2.832 a 6.738 6.738 0 0 0 -3.613 -1.855 h -0.586 q -1.074 -0.098 -1.855 0.488 -0.684 0.488 -1.758 0.586 l -6.25 0.293 -14.258 1.172 z",
          "M 53.711 10.547 q -1.465 0 -1.758 0.684 l -0.098 0.195 v 0.293 q 0 0.391 0.293 0.684 l 0.684 0.879 q 0.879 1.074 0.977 2.246 0.195 1.074 0.195 4.395 v 13.086 l 0.195 8.691 1.074 14.16 c 0.293 3.516 -1.367 7.324 -4.102 7.324 q -2.148 0 -4.297 -2.148 a 8.496 8.496 0 0 1 -2.148 -5.762 v -0.293 q -0.098 -3.223 0.781 -5.078 t 1.855 -2.734 l 1.562 -0.781 c 3.125 -0.586 2.832 -5.762 0 -5.762 -1.27 0 -3.027 0.293 -4.98 1.855 q -2.344 1.758 -3.809 4.883 -1.562 3.125 -1.562 7.031 0 5.371 2.051 8.594 t 5.078 4.688 5.859 1.465 h 0.879 l 0.781 -0.098 c 2.441 -0.977 5.957 -2.832 6.934 -6.445 0.586 -2.051 0.977 -3.516 1.074 -5.566 v -4.785 l -0.684 -5.566 c -0.098 -1.367 -0.293 -2.246 -0.391 -5.078 V 15.43 q 0 -2.344 -0.586 -3.027 -0.586 -0.781 -2.832 -1.367 a 8.887 8.887 0 0 0 -3.027 -0.488",
          "M 48.926 46.387 c 2.148 -0.293 3.906 0.879 4.883 2.734 2.051 4.297 2.832 10.254 1.27 14.648 l -1.855 5.273 q -2.441 7.227 -7.031 13.086 a 90.527 90.527 0 0 1 -10.059 10.938 q -0.879 0.879 -0.879 1.562 l 0.293 0.488 q 0.293 0.391 0.879 0.391 0.977 0 3.906 -2.051 2.93 -1.855 6.641 -5.469 a 61.133 61.133 0 0 0 13.184 -18.945 q 2.344 -5.859 2.344 -12.109 a 20.215 20.215 0 0 0 -2.148 -9.082 q -2.344 -3.516 -6.152 -6.152 -2.441 -1.172 -5.273 -1.074 c -1.758 0 -1.562 6.25 0 5.762"
        ],
        "strokes": [
          {
            "id": "す-1",
            "centerPath": "m 4.492 37.305 80.371 -9.57",
            "source": "strokesvg"
          },
          {
            "id": "す-2",
            "centerPath": "M 54.688 2.93 s 5.859 50.293 3.906 54.883 c -2.734 6.445 -7.227 7.52 -13.184 5.957 -3.516 -1.758 -3.516 -10.254 -3.516 -10.254 s 2.246 -10.938 11.426 -8.203 c 9.18 2.832 5.957 17.383 0.586 27.344 -5.762 10.547 -14.453 18.848 -14.453 18.848",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "せ",
        "word": "せみ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/せ.svg",
        "shadowPaths": [
          "M 38.965 47.461 a 506.445 506.445 0 0 1 21.973 -4.102 l 6.055 -0.977 a 277.832 277.832 0 0 1 20.996 -2.539 l 2.734 -0.586 q 1.27 -0.293 1.465 -1.562 v -0.195 q 0 -1.465 -1.758 -2.734 a 6.543 6.543 0 0 0 -4.102 -1.367 h -0.195 q -0.879 0 -1.855 0.586 -0.879 0.586 -1.367 0.586 l -15.234 2.051 -6.055 1.074 a 351.562 351.562 0 0 0 -22.754 4.102 l -6.055 1.172 -17.871 3.906 -3.027 0.488 h -0.684 l -0.684 -0.098 -2.148 -0.391 -0.879 0.293 q -0.293 0.195 -0.293 0.586 0 0.879 0.977 2.148 0.977 1.367 2.441 2.344 1.465 0.879 2.637 0.977 l 0.586 -0.098 2.148 -0.391 16.992 -3.906 z",
          "M 60.938 43.359 q -0.684 5.273 -1.562 9.766 -0.781 4.492 -1.855 7.031 l -7.031 -4.492 -1.367 -0.879 q -0.684 -0.391 -1.27 -0.391 l -0.488 0.293 q -0.293 0.195 -0.293 0.586 0 0.586 1.074 2.246 l 2.637 3.613 3.223 3.809 2.832 2.734 q 0.781 0.586 1.66 0.586 1.172 0 2.246 -0.684 0.879 -0.781 1.953 -3.32 1.172 -2.441 2.148 -7.617 0.879 -5.176 2.148 -14.258 l 0.684 -5.762 1.562 -17.48 v -1.367 q 0 -1.66 -0.879 -2.637 -0.684 -1.172 -4.199 -1.562 h -0.977 l -1.074 0.195 q -0.586 0.195 -0.586 0.586 0 0.586 0.391 1.172 l 0.684 0.977 0.195 0.488 0.195 0.684 0.098 0.879 -0.293 5.469 -1.172 13.672 z",
          "M 69.141 85.156 h 4.59 q 1.27 0.098 2.637 -0.488 1.562 -0.391 1.562 -2.051 0 -0.977 -0.977 -1.953 -0.879 -0.879 -2.051 -1.562 t -1.855 -0.684 l -1.562 0.098 -2.148 0.293 -2.734 0.098 q -8.984 0 -14.16 -1.367 -5.273 -1.465 -7.91 -3.906 -2.637 -2.637 -3.613 -6.152 a 52.832 52.832 0 0 1 -1.66 -12.891 l -0.293 -7.129 -0.098 -5.664 -0.195 -7.715 v -7.91 l -0.293 -1.66 q -0.195 -1.074 -1.367 -1.953 -1.074 -0.781 -4.004 -0.781 -2.051 0.098 -2.148 0.977 v 0.293 l 0.293 0.781 q 0.391 0.391 0.684 0.879 l 0.391 0.879 0.293 0.977 v 3.223 l 0.098 5.957 0.195 7.227 0.195 5.859 0.488 10.645 q 0.684 8.496 3.32 13.672 2.637 5.078 7.227 7.617 4.395 2.637 10.742 3.516 6.25 0.879 14.355 0.879"
        ],
        "strokes": [
          {
            "id": "せ-1",
            "centerPath": "m 0.781 49.316 85.645 -11.719",
            "source": "strokesvg"
          },
          {
            "id": "せ-2",
            "centerPath": "M 58.691 8.203 c 10.645 3.418 9.375 41.699 3.613 58.203 l -9.863 -9.375",
            "source": "strokesvg"
          },
          {
            "id": "せ-3",
            "centerPath": "M 26.562 17.48 c 19.141 1.562 -10.645 73.828 45.41 64.844",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "そ",
        "word": "そら",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/そ.svg",
        "shadowPaths": [
          "M 76.66 40.918 h -0.293 l -3.125 0.488 -7.715 1.465 -10.645 2.246 q -5.664 1.172 -11.719 2.734 -5.859 1.562 -11.035 3.223 6.738 -6.152 12.402 -12.012 l 10.059 -10.547 q 4.492 -4.785 7.617 -7.715 l 1.465 -1.66 q 0.781 -0.977 0.781 -1.953 0 -0.879 -0.879 -1.562 l -1.562 -0.879 q -0.586 -0.488 -1.367 -0.488 -0.684 0 -1.758 0.391 l -1.172 0.293 q -7.715 2.051 -13.574 3.125 -5.957 1.074 -9.375 1.465 l -3.418 0.293 h -0.879 l -1.27 -0.293 -1.172 -0.195 -0.488 0.098 q -0.293 0 -0.293 0.488 0 0.391 0.684 1.855 t 1.855 2.734 2.93 1.172 l 3.516 -0.488 7.812 -1.562 9.668 -2.539 -12.012 13.477 q -5.762 6.348 -10.84 11.133 -4.883 4.785 -8.496 7.422 -0.586 0.391 -1.66 0.684 l -1.562 0.488 q -1.758 0.488 -2.441 1.074 t -0.684 1.465 q 0 0.391 0.488 1.465 0.488 0.977 1.465 1.855 1.172 0.977 2.734 0.977 0.977 0 1.855 -0.391 l 13.77 -5.273 q 7.812 -2.832 15.137 -4.688 -3.809 2.637 -6.836 6.055 -3.027 3.32 -4.785 6.836 -1.855 3.516 -1.953 6.641 v 0.488 q 0 4.59 1.953 8.008 1.953 3.32 4.98 5.566 3.027 2.344 6.445 3.711 3.516 1.367 6.641 2.148 t 5.176 0.977 l 2.344 0.293 q 2.539 0 3.027 -0.879 0.586 -0.879 0.586 -1.66 0 -1.074 -0.781 -2.148 -0.684 -1.172 -1.953 -1.953 -0.781 -0.391 -1.562 -0.293 -0.879 0.098 -1.953 -0.195 l -6.445 -1.66 q -3.32 -0.879 -6.152 -2.344 -2.832 -1.367 -4.59 -3.613 -1.66 -2.246 -1.66 -5.762 v -0.781 q 0.293 -5.273 3.418 -9.375 3.32 -4.199 8.203 -7.227 4.98 -3.027 10.059 -4.59 1.27 -0.488 3.809 -0.684 l 5.273 -0.586 4.199 -0.586 q 3.125 -0.684 3.125 -2.051 0 -0.586 -0.293 -1.172 -0.391 -1.172 -1.758 -2.051 -1.27 -0.879 -3.32 -0.977"
        ],
        "strokes": [
          {
            "id": "そ-1",
            "centerPath": "M 20.703 19.141 c 15.137 3.809 40.527 -7.715 40.527 -7.715 -11.914 22.266 -33.887 30.371 -42.578 46.875 28.027 -15.43 37.598 -15.918 58.203 -15.625 -1.953 2.148 -68.652 25.488 -13.477 44.727",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "た",
        "word": "たこ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/た.svg",
        "shadowPaths": [
          "M 59.473 28.613 v -0.293 q -0.195 -1.172 -1.66 -2.148 -1.465 -1.074 -3.32 -1.074 l -0.586 0.098 -0.586 0.098 -1.465 0.684 q -0.879 0.488 -4.102 1.465 l -7.129 1.562 -6.543 1.27 -16.406 2.734 h -0.586 l -0.684 -0.098 -2.832 -0.293 q -0.488 0.098 -0.488 0.781 0 1.172 1.562 3.027 1.465 1.758 3.418 1.953 h 0.488 q 0.781 0.098 2.246 -0.195 l 4.297 -0.684 7.812 -1.367 6.445 -1.27 16.016 -3.418 2.832 -1.172 q 1.27 -0.684 1.27 -1.66",
          "m 40.625 29.004 1.855 -9.863 q 0.586 -3.516 0.586 -5.176 v -0.391 q -0.098 -0.977 -1.465 -1.562 -1.27 -0.586 -2.93 -0.879 -1.465 -0.391 -2.344 -0.391 -1.172 0 -1.27 0.781 0 0.488 0.488 1.172 a 4.59 4.59 0 0 1 0.781 3.613 v 0.684 l -0.781 5.859 -1.465 7.422 -1.172 5.859 a 313.184 313.184 0 0 1 -10.938 37.5 q -1.953 4.883 -3.809 7.52 a 9.277 9.277 0 0 0 -1.367 4.98 q 0 1.66 0.684 2.832 0.879 1.27 2.441 1.27 1.465 0 2.246 -1.074 0.879 -0.879 1.855 -2.93 2.93 -6.836 5.762 -15.527 2.832 -8.789 5.176 -18.066 2.539 -9.277 4.395 -17.773 z",
          "M 80.273 38.965 h -0.586 q -1.465 0 -4.785 0.391 l -7.227 1.172 q -4.004 0.586 -7.617 1.562 -3.516 0.977 -5.664 2.246 -1.855 0.977 -2.734 1.66 -0.684 0.586 -0.684 1.074 0 0.586 1.953 0.586 h 1.367 l 1.367 -0.195 q 5.566 -0.781 12.207 -1.074 6.738 -0.293 12.793 -0.293 1.758 0 2.344 -0.977 0.684 -1.074 0.684 -2.246 0 -2.051 -1.172 -2.832 -1.074 -0.977 -2.246 -1.074",
          "M 84.375 85.547 v -0.293 q 0 -1.367 -1.562 -2.734 -1.465 -1.562 -2.539 -1.66 h -2.637 q -1.367 0 -4.785 -0.391 -3.223 -0.391 -7.324 -1.367 -4.004 -0.977 -7.715 -2.832 -3.711 -1.758 -5.664 -4.59 l -1.074 -1.074 q -0.586 -0.684 -1.27 -0.684 t -0.977 0.488 l -0.195 0.977 q 0 2.734 1.953 5.176 2.051 2.539 5.273 4.785 3.418 2.051 7.324 3.613 4.004 1.562 7.91 2.441 t 7.129 0.879 l 0.684 -0.098 h 0.684 q 2.637 -0.195 3.613 -0.781 1.074 -0.586 1.172 -1.855"
        ],
        "strokes": [
          {
            "id": "た-1",
            "centerPath": "m 6.641 33.301 47.656 -2.637",
            "source": "strokesvg"
          },
          {
            "id": "た-2",
            "centerPath": "M 34.375 4.395 c 11.328 19.922 -3.418 53.32 -13.379 79.98",
            "source": "strokesvg"
          },
          {
            "id": "た-3",
            "centerPath": "m 44.727 48.73 33.203 -5.469",
            "source": "strokesvg"
          },
          {
            "id": "た-4",
            "centerPath": "M 46.875 63.965 c 3.125 13.281 12.5 19.727 31.836 21.094",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ち",
        "word": "ちず",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ち.svg",
        "shadowPaths": [
          "M 64.16 31.055 z q 0 -1.367 -2.051 -2.344 -1.855 -0.977 -3.516 -0.977 l -0.293 0.098 h -0.293 a 5.273 5.273 0 0 0 -2.148 0.781 q -1.172 0.781 -5.664 1.758 -4.395 1.074 -9.668 1.953 l -6.25 0.977 -12.988 1.758 h -0.977 l -2.148 -0.391 -0.977 -0.195 -0.781 0.195 -0.098 0.391 q 0 0.684 0.879 2.051 0.879 1.27 2.344 2.344 1.367 1.172 2.734 1.172 h 1.27 l 2.734 -0.488 7.324 -1.27 6.152 -0.977 13.379 -2.539 q 4.98 -0.879 7.227 -1.562 2.441 -0.684 3.125 -1.27 t 0.684 -1.367",
          "M 40.527 32.227 a 239.16 239.16 0 0 1 2.93 -16.992 q 0 -1.758 -1.465 -2.539 -1.27 -0.879 -2.93 -1.172 l -1.855 -0.293 q -0.977 0 -1.27 0.488 l -0.098 0.195 v 0.098 q 0 0.488 0.391 0.879 l 0.586 0.879 q 0.293 0.684 0.293 1.562 v 0.391 l -2.832 17.48 -0.684 5.566 -2.539 20.215 -0.781 8.984 q 0 2.539 1.66 3.32 1.562 0.684 2.246 0.684 0.977 0 2.344 -0.879 l 5.664 -4.492 q 3.223 -2.539 7.617 -4.59 a 31.25 31.25 0 0 1 13.477 -3.125 q 4.492 0 7.715 1.758 3.32 1.66 3.613 5.078 v 0.586 l 0.098 0.488 q 0 4.492 -3.223 8.203 -3.125 3.613 -8.105 6.348 -4.98 2.637 -10.449 4.688 -5.566 1.953 -10.352 3.32 -2.637 0.977 -2.637 1.855 v 0.195 l 0.098 0.195 q 0.098 0.586 1.27 0.586 l 3.711 -0.488 q 3.223 -0.391 7.812 -1.465 t 9.57 -2.832 q 4.98 -1.855 9.277 -4.492 4.395 -2.734 7.129 -6.445 2.832 -3.809 2.832 -8.789 l -0.293 -3.32 q -1.172 -5.273 -5.957 -7.91 -4.688 -2.93 -11.328 -2.832 -6.934 0 -13.965 2.734 t -13.574 7.422 l 0.684 -6.934 1.074 -9.277 1.465 -9.766 z"
        ],
        "strokes": [
          {
            "id": "ち-1",
            "centerPath": "m 9.863 34.863 49.219 -1.367",
            "source": "strokesvg"
          },
          {
            "id": "ち-2",
            "centerPath": "M 31.25 6.738 c 17.48 9.375 -1.758 45.703 -1.758 62.695 38.574 -22.949 48.926 -10.84 47.949 -0.293 S 62.793 87.891 45.801 90.43",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "つ",
        "word": "つき",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/つ.svg",
        "shadowPaths": [
          "M 86.621 50.195 v -0.879 q -0.391 -10.938 -7.715 -16.016 -7.227 -5.176 -18.945 -5.176 -8.984 0 -19.922 2.832 -10.938 2.93 -22.754 8.398 -0.781 0.488 -1.66 0.586 l -1.758 0.098 h -1.27 l -1.074 -0.098 q -0.684 0 -0.879 0.195 -0.293 0.098 -0.293 0.488 0 0.781 1.172 2.148 1.074 1.367 2.539 2.441 1.562 1.074 2.734 1.074 0.977 0 1.855 -0.488 l 2.344 -1.172 q 10.742 -4.98 20.703 -7.715 9.961 -2.832 17.871 -2.832 8.887 0 14.355 3.809 5.469 3.711 5.469 11.719 0 4.688 -2.832 8.594 -2.637 3.809 -7.129 6.934 -4.395 3.027 -9.668 5.469 -5.176 2.246 -10.254 4.004 l -8.887 2.637 q -3.711 0.977 -3.711 2.246 0 1.074 2.832 1.074 l 3.125 -0.293 q 2.832 -0.391 7.031 -1.27 t 9.082 -2.441 9.863 -3.906 q 4.883 -2.246 8.887 -5.371 4.004 -3.223 6.348 -7.422 2.539 -4.297 2.539 -9.668"
        ],
        "strokes": [
          {
            "id": "つ-1",
            "centerPath": "M 4.004 39.062 c 16.797 10.156 62.891 -24.512 76.758 1.66 15.527 29.492 -38.574 40.332 -38.574 40.332",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "て",
        "word": "てがみ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/て.svg",
        "shadowPaths": [
          "M 76.66 86.816 v -0.195 q -0.098 -2.344 -1.562 -3.613 -1.367 -1.367 -4.004 -1.367 h -0.977 l -0.977 -0.195 q -5.762 -1.465 -10.645 -4.004 -4.785 -2.734 -7.812 -7.129 t -3.027 -11.035 q 0 -4.688 2.051 -9.473 t 5.371 -9.082 q 3.32 -4.395 7.227 -7.91 t 7.617 -5.469 q 1.172 -0.879 2.344 -0.781 1.27 0 3.32 -0.293 l 3.027 -0.391 q 1.074 -0.293 1.074 -1.758 v -0.488 q -0.098 -1.074 -1.172 -2.051 -0.977 -0.977 -2.441 -1.562 -1.27 -0.684 -2.148 -0.684 h -0.391 q -0.977 0.098 -1.855 0.488 -0.781 0.391 -1.758 0.586 -8.887 1.172 -22.461 4.297 -13.379 3.027 -30.371 7.617 l -0.781 0.195 h -0.684 l -1.953 -0.195 q -0.879 -0.293 -1.562 -0.293 -1.172 0 -1.172 1.074 0 1.172 1.367 2.832 1.367 1.562 2.734 2.441 1.172 0.586 2.148 0.586 l 1.367 -0.195 1.758 -0.488 q 6.445 -2.344 13.672 -4.395 l 14.062 -3.613 q 6.738 -1.562 11.621 -2.441 -2.832 2.344 -6.055 6.055 t -6.055 8.105 -4.492 8.984 q -1.66 4.59 -1.66 8.691 0 7.324 2.734 12.598 t 7.129 8.691 q 4.395 3.516 9.473 5.566 4.98 1.855 9.57 2.441 1.953 0.293 3.32 0.293 1.465 0 2.246 -0.586 0.781 -0.488 0.781 -1.855"
        ],
        "strokes": [
          {
            "id": "て-1",
            "centerPath": "M 5.371 29.297 c 15.43 13.086 37.207 -10.84 71.191 -8.887 -36.426 21.777 -41.406 54.98 -5.957 66.113",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "と",
        "word": "とけい",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/と.svg",
        "shadowPaths": [
          "M 49.902 45.898 q -1.758 -3.32 -3.418 -8.105 a 351.758 351.758 0 0 1 -6.055 -19.238 q -0.488 -1.855 -1.66 -2.148 a 12.207 12.207 0 0 0 -5.762 -0.098 q -1.27 0.195 -1.562 0.977 l -0.098 0.195 v 0.098 q 0 0.586 0.684 0.879 0.586 0.293 1.074 0.879 l 1.367 2.051 2.93 9.082 q 1.465 4.98 3.223 9.766 1.66 4.688 3.711 8.887 c 1.367 2.93 7.227 0.488 5.566 -3.223",
          "m 74.414 78.711 -1.367 0.293 q -2.246 0.879 -6.348 1.465 a 106.934 106.934 0 0 1 -15.918 0.977 h -1.855 l -1.465 -0.098 q -7.129 -0.586 -11.719 -2.637 t -4.883 -6.543 v -0.195 q 0 -3.516 2.832 -6.934 2.832 -3.711 7.52 -6.934 a 85.352 85.352 0 0 1 20.41 -11.035 95.703 95.703 0 0 1 12.891 -4.492 q 0.879 -0.586 0.879 -2.051 0 -0.977 -0.488 -2.637 -0.391 -1.562 -1.172 -2.93 -0.684 -1.27 -1.562 -1.27 h -0.195 q -0.781 0.391 -1.172 1.562 -0.293 1.27 -1.367 1.758 l -10.059 4.199 q -4.395 1.953 -9.473 4.688 l -5.566 3.223 q -5.371 3.027 -9.863 6.836 -4.395 3.906 -7.227 8.008 -2.734 4.102 -2.734 8.398 v 0.293 q 0.195 5.664 3.809 9.082 3.613 3.223 9.961 4.785 6.445 1.465 15.039 1.465 a 185.254 185.254 0 0 0 16.797 -0.977 q 4.004 -0.586 6.25 -1.074 3.516 -0.977 3.516 -2.93 0 -1.758 -1.562 -3.027 t -3.906 -1.27"
        ],
        "strokes": [
          {
            "id": "と-1",
            "centerPath": "M 27.539 11.914 c 9.863 6.738 19.629 32.422 19.629 32.422",
            "source": "strokesvg"
          },
          {
            "id": "と-2",
            "centerPath": "M 74.023 27.441 c 1.758 25 -42.285 22.266 -44.629 42.578 -2.051 18.359 44.824 14.355 44.824 14.355",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "な",
        "word": "なす",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/な.svg",
        "shadowPaths": [
          "M 36.719 27.93 a 182.227 182.227 0 0 1 -17.285 2.637 h -1.855 l -0.977 -0.195 -1.074 -0.293 -1.074 -0.195 q -0.879 0 -0.977 0.586 0 0.879 0.879 2.246 0.977 1.367 2.441 2.344 1.465 1.074 2.832 1.074 l 4.98 -0.586 9.961 -1.855 6.934 -1.27 q 9.082 -1.855 13.379 -3.125 4.395 -1.367 4.297 -2.93 0 -0.879 -1.074 -2.051 -1.172 -1.27 -4.395 -1.27 -0.586 0 -1.172 0.391 l -1.27 0.586 a 42.09 42.09 0 0 1 -7.715 2.246 z",
          "M 40.43 13.965 v 0.781 l -0.293 1.367 -1.074 4.004 q -0.684 2.832 -2.344 7.812 l -2.148 5.762 a 114.453 114.453 0 0 1 -14.648 27.734 l -1.27 1.465 q -0.586 1.172 -0.684 2.539 0 1.66 0.977 2.832 0.977 1.27 2.344 1.27 0.781 0 1.758 -0.586 0.879 -0.684 1.758 -1.953 5.566 -8.887 9.57 -17.48 4.102 -8.594 7.129 -17.09 l 2.051 -6.152 3.516 -11.426 q 0 -1.562 -1.367 -2.344 t -2.93 -1.074 l -1.855 -0.293 q -0.879 0 -1.074 0.488 l -0.098 0.391 0.293 0.879 z",
          "M 79.199 40.43 q -0.879 0.293 -2.246 0.488 l -1.953 0.391 q -0.977 0.098 -1.855 0.586 -0.977 0.391 -0.977 0.879 0 0.781 1.66 1.465 1.66 0.488 4.004 0.781 l 4.59 0.195 q 2.051 0 3.516 -0.488 t 1.465 -2.637 q 0 -1.855 -2.734 -4.688 -2.637 -2.832 -6.738 -5.664 -4.004 -3.027 -8.203 -5.176 l -0.684 -0.293 -0.781 -0.098 q -0.977 0 -1.953 1.074 -0.684 0.879 -0.684 1.465 0 0.879 1.074 1.562 3.809 2.246 6.738 4.492 2.93 2.344 5.762 5.664",
          "M 60.059 45.605 q -0.781 0 -1.367 1.562 -0.391 1.562 -0.586 4.004 l -0.098 5.176 v 9.082 l 0.098 4.688 v 2.246 l -0.586 5.762 q -1.172 3.32 -4.297 5.078 a 14.062 14.062 0 0 1 -10.742 1.172 q -1.855 -0.391 -3.516 -1.27 -1.465 -0.977 -1.465 -2.832 c 0.098 -1.367 -5.664 -1.66 -5.664 -0.195 v 0.391 q 0 2.246 1.562 4.59 t 4.785 3.906 q 3.223 1.758 8.203 1.953 h 1.074 q 4.883 0 8.105 -1.758 a 15.625 15.625 0 0 0 7.812 -8.789 q 0.684 -2.637 0.586 -6.152 0 -4.395 -0.391 -10.059 -0.293 -5.762 -1.27 -15.039 -0.098 -1.465 -0.781 -2.539 -0.586 -0.977 -1.465 -0.977",
          "M 46.094 70.996 q -6.543 0 -10.352 2.637 -3.906 2.441 -3.906 6.445 c 0 2.344 5.664 1.855 5.664 0.195 q 0 -1.66 1.465 -2.539 1.562 -0.879 3.711 -1.27 l 4.297 -0.293 q 2.734 0.098 5.566 0.684 a 39.453 39.453 0 0 1 21.973 11.816 q 1.27 1.465 2.637 1.465 t 2.148 -1.367 0.879 -2.734 -0.977 -2.637 l -3.906 -3.027 a 50.293 50.293 0 0 0 -11.328 -6.152 49.609 49.609 0 0 0 -16.602 -3.223 z"
        ],
        "strokes": [
          {
            "id": "な-1",
            "centerPath": "m 7.031 30.469 46.973 -1.855",
            "source": "strokesvg"
          },
          {
            "id": "な-2",
            "centerPath": "M 37.695 5.273 c 15.527 6.934 -14.062 59.863 -14.062 59.863",
            "source": "strokesvg"
          },
          {
            "id": "な-3",
            "centerPath": "m 62.109 21.875 24.512 15.82 -8.594 4.102",
            "source": "strokesvg"
          },
          {
            "id": "な-4",
            "centerPath": "M 60.156 38.965 c 11.133 48.633 -10.84 49.121 -10.84 49.121 s -6.25 0.488 -10.449 -1.172 c -8.398 -3.32 -2.344 -28.418 38.477 -2.734",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "に",
        "word": "にじ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/に.svg",
        "shadowPaths": [
          "M 23.73 22.168 v 0.586 l -1.172 9.082 -1.465 11.719 q -0.684 6.445 -1.172 13.086 -0.488 6.445 -0.488 12.402 0 6.934 0.586 10.84 0.586 3.809 1.465 5.469 0.977 1.66 2.051 2.051 0.977 0.293 1.66 0.293 0.879 0 1.66 -0.391 0.879 -0.488 1.27 -1.562 l 0.684 -2.734 1.172 -4.883 1.367 -5.859 1.172 -4.98 0.684 -2.93 q 0.391 -1.172 0.391 -2.246 0 -1.465 -0.781 -1.465 -0.879 0 -1.953 2.148 l -1.367 2.637 -2.148 4.004 q -1.172 2.051 -2.051 4.004 l -0.098 -1.953 v -2.148 q 0 -4.883 0.391 -10.84 l 1.172 -12.305 1.66 -12.109 1.562 -10.156 0.195 -1.172 0.098 -1.172 q 0 -1.465 -1.27 -2.148 -1.172 -0.781 -2.734 -0.977 l -1.953 -0.293 q -1.465 0 -1.66 0.684 v 0.195 q 0 0.391 0.391 0.879 0.391 0.391 0.488 0.879 l 0.098 0.781 z",
          "M 75.781 24.902 h -0.293 q -1.172 0 -4.004 0.391 l -6.152 0.879 q -3.516 0.488 -7.129 1.367 -3.613 0.781 -6.641 1.66 -2.93 0.781 -4.688 1.66 -4.297 2.344 -4.297 3.418 0 0.684 1.953 0.684 l 1.758 -0.098 2.441 -0.391 q 2.441 -0.488 6.348 -0.977 l 8.301 -0.879 8.203 -0.586 q 3.809 -0.293 6.055 -0.293 1.074 0 1.562 -0.879 0.586 -0.781 0.586 -1.758 0 -1.367 -0.977 -2.734 t -3.027 -1.465",
          "M 78.516 81.836 h 1.367 q 2.832 -0.195 3.613 -0.488 0.879 -0.488 1.172 -1.953 v -0.293 l 0.098 -0.293 q 0 -1.172 -0.879 -2.148 t -1.855 -1.562 -1.562 -0.781 h -0.391 l -1.27 0.195 -1.27 0.098 h -0.293 q -2.148 -0.098 -6.152 -0.684 -3.906 -0.586 -8.496 -1.855 -4.59 -1.172 -8.594 -2.93 -3.906 -1.953 -5.859 -4.688 -1.562 -1.855 -2.734 -1.855 -0.879 0 -0.879 1.27 0 1.172 0.684 2.832 1.367 3.711 5.176 6.641 3.906 2.734 8.887 4.688 5.078 1.855 10.254 2.832 5.078 0.977 8.984 0.977"
        ],
        "strokes": [
          {
            "id": "に-1",
            "centerPath": "M 19.043 13.086 c 17.969 8.691 -7.812 50.684 2.539 72.559 l 9.473 -19.727",
            "source": "strokesvg"
          },
          {
            "id": "に-2",
            "centerPath": "m 36.23 35.742 37.891 -6.641",
            "source": "strokesvg"
          },
          {
            "id": "に-3",
            "centerPath": "M 42.773 56.641 c 2.148 22.949 36.426 23.242 36.426 23.242",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ぬ",
        "word": "ぬりえ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ぬ.svg",
        "shadowPaths": [
          "M 23.047 23.828 q -1.855 0 -1.953 0.684 v 0.195 q 0 0.391 0.391 0.781 l 0.879 0.781 q 1.172 1.27 1.27 2.637 a 340.332 340.332 0 0 0 2.734 16.699 l 1.465 6.543 q 1.953 8.496 4.199 15.137 l 2.246 6.25 q 1.855 4.59 2.93 6.348 1.172 1.758 2.734 1.758 1.27 0 2.051 -1.465 0.879 -1.465 0.781 -2.637 0.098 -0.977 -0.488 -1.855 l -1.172 -1.855 -2.734 -5.176 -2.148 -6.445 -1.953 -7.031 -1.562 -7.422 -1.172 -5.957 -2.344 -13.672 -0.293 -1.855 q -0.098 -0.977 -0.684 -1.367 -0.293 -0.488 -1.562 -0.586 z",
          "M 54.785 13.379 q -1.074 0 -1.367 0.488 l -0.098 0.293 q 0 0.488 0.391 1.074 a 4.395 4.395 0 0 1 0.684 2.246 l 0.098 0.586 q 0 0.977 -0.586 3.613 a 124.512 124.512 0 0 1 -3.125 11.23 l -2.148 6.152 q -1.855 5.371 -5.078 11.426 -3.027 6.152 -7.324 11.719 l -4.199 5.078 a 58.984 58.984 0 0 1 -11.035 9.082 q -0.586 0 -1.465 -1.27 t -1.66 -3.125 q -0.586 -1.758 -0.586 -3.418 c 0 -1.66 -6.055 -1.855 -6.055 0.293 q -0.098 3.711 1.367 6.934 1.562 3.32 3.613 5.273 2.246 2.051 4.102 2.051 1.465 0 3.906 -1.367 2.539 -1.465 5.176 -3.613 a 46.289 46.289 0 0 0 8.984 -9.473 q 5.859 -7.031 10.254 -15.43 4.492 -8.496 7.129 -16.016 l 1.855 -5.762 a 92.676 92.676 0 0 0 2.637 -10.645 q 0.684 -2.637 0.684 -3.613 l -0.098 -0.684 q -0.293 -1.172 -1.562 -1.758 -1.172 -0.781 -2.441 -1.074 z",
          "M 64.844 30.762 a 46.289 46.289 0 0 0 -14.062 2.148 61.133 61.133 0 0 0 -19.238 8.887 l -5.176 3.809 q -3.613 3.125 -7.129 6.934 t -5.859 7.812 -2.148 8.496 c 0 1.953 6.152 1.758 6.055 -0.293 q 0 -3.418 2.441 -7.324 2.441 -4.102 8.105 -9.082 l 4.883 -4.395 a 58.105 58.105 0 0 1 23.047 -10.547 49.805 49.805 0 0 1 13.379 -0.586 q 3.027 0.293 5.957 2.344 3.027 1.953 4.883 5.762 2.051 3.613 2.051 9.18 v 1.562 q -0.391 5.273 -2.051 9.375 a 27.441 27.441 0 0 1 -8.105 11.133 q -4.785 4.102 -9.766 4.199 l -3.613 -0.293 q -1.758 -0.391 -3.125 -1.172 -1.172 -0.879 -1.172 -2.539 c 0 -1.465 -5.469 -1.562 -5.566 0 v 0.488 q 0 3.516 3.027 6.348 3.223 2.637 9.766 2.734 h 0.879 a 22.852 22.852 0 0 0 14.941 -6.055 29.297 29.297 0 0 0 9.277 -14.844 q 1.855 -6.055 1.855 -12.109 a 28.32 28.32 0 0 0 -1.953 -9.766 18.555 18.555 0 0 0 -10.742 -10.352 q -4.199 -1.855 -10.84 -1.855",
          "M 61.426 67.188 q -5.859 0 -9.18 2.734 a 8.301 8.301 0 0 0 -3.613 6.25 c -0.195 2.441 5.566 2.051 5.566 0 q 0 -1.66 1.855 -2.539 2.051 -0.977 5.176 -0.977 h 0.488 q 2.441 0.195 5.078 1.074 t 5.078 2.246 l 5.371 3.711 a 45.605 45.605 0 0 1 7.422 8.008 q 0.879 0.977 2.051 0.977 1.562 0 2.344 -1.367 0.879 -1.465 0.879 -2.441 0 -0.586 -0.684 -1.66 -0.586 -1.172 -2.344 -3.027 -1.758 -1.953 -5.469 -4.98 l -5.371 -3.516 q -3.027 -1.66 -6.25 -2.832 -3.32 -1.27 -6.836 -1.562 h -0.781 z"
        ],
        "strokes": [
          {
            "id": "ぬ-1",
            "centerPath": "m 19.336 17.871 22.168 58.008",
            "source": "strokesvg"
          },
          {
            "id": "ぬ-2",
            "centerPath": "M 50.098 8.105 c 19.922 17.48 -14.941 62.207 -14.941 62.207 s -11.621 12.695 -17.285 7.227 C 4.688 64.746 26.562 44.727 52.539 35.938 c 22.266 -7.617 39.258 8.691 31.934 29.492 -6.543 18.555 -19.238 18.359 -19.238 18.359 s -12.305 0.977 -12.988 -6.152 c -1.172 -13.965 18.555 -7.715 32.715 5.664",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ね",
        "word": "ねこ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ね.svg",
        "shadowPaths": [
          "M 31.934 13.086 q -1.27 0 -1.562 0.586 l -0.098 0.195 v 0.098 q 0.098 0.488 0.391 0.879 0.586 0.293 0.781 0.879 0.488 0.684 0.488 1.758 l -1.465 16.992 -0.391 6.348 -0.195 4.004 -0.781 16.504 -0.293 14.844 v 3.809 l 0.195 3.125 v 0.195 l -0.195 1.367 -0.195 1.562 v 0.195 q 0 1.758 1.074 3.516 1.172 1.758 2.637 1.758 1.562 0 2.148 -1.074 0.781 -1.074 0.781 -2.539 v -0.684 q 0.098 -1.172 -0.195 -2.637 l -0.195 -2.051 q -0.293 -5.273 -0.293 -12.598 l 0.293 -15.332 0.293 -7.812 0.098 -1.66 0.879 -12.598 a 213.379 213.379 0 0 1 1.953 -16.016 q 0 -1.758 -1.465 -2.441 t -2.93 -0.977 z",
          "M 66.016 27.148 a 20.508 20.508 0 0 0 -8.984 2.539 q -3.809 1.855 -9.277 5.957 -5.273 4.102 -12.598 11.328 l 0.098 -1.66 a 79.004 79.004 0 0 1 3.711 -7.422 q 0.781 -1.074 0.781 -2.148 -0.098 -1.27 -0.977 -1.855 -0.879 -0.684 -1.758 -0.879 l -0.879 -0.293 -5.664 1.758 -4.59 2.051 -9.863 3.906 -1.074 0.293 h -1.367 l -0.684 -0.098 -0.586 0.195 -0.098 0.293 0.781 1.562 q 0.879 1.367 2.148 2.539 1.367 1.172 3.027 1.172 0.781 0 1.367 -0.293 l 1.367 -0.684 4.492 -2.539 4.688 -2.051 -0.195 4.004 q -1.758 4.785 -4.59 10.059 a 178.809 178.809 0 0 1 -14.062 22.461 q -0.586 0.586 -0.488 1.562 0 1.367 1.172 2.637 1.172 1.172 2.539 1.172 1.66 0 2.344 -1.66 a 95.117 95.117 0 0 1 8.008 -13.379 l 4.297 -6.348 5.762 -6.543 q 2.734 -3.516 6.641 -7.324 4.004 -3.809 8.398 -7.227 t 8.398 -5.566 q 4.004 -2.148 6.836 -2.148 5.078 0 8.301 5.859 3.125 5.762 3.516 16.309 v 1.758 a 49.512 49.512 0 0 1 -2.441 14.941 l -2.441 4.883 q -1.66 2.734 -4.199 4.492 -2.441 1.855 -5.957 2.051 h -1.074 q -3.223 0 -5.957 -1.074 -2.734 -1.172 -2.734 -3.027 c 0 -1.66 -5.664 -2.148 -5.664 -0.195 v 0.781 q 0.293 2.051 1.953 4.297 1.66 2.148 4.688 3.613 2.93 1.367 7.031 1.367 5.078 0 8.398 -1.367 3.516 -1.562 5.762 -3.613 2.344 -2.051 3.613 -4.004 l 2.637 -5.273 q 1.66 -4.199 2.246 -9.082 0.684 -4.98 0.684 -9.668 v -1.074 a 43.359 43.359 0 0 0 -4.297 -17.773 q -2.051 -4.199 -5.371 -6.934 -3.223 -2.637 -7.812 -2.637",
          "M 62.207 68.848 q -4.102 0 -7.715 1.172 -3.516 1.172 -5.762 3.418 a 6.836 6.836 0 0 0 -2.246 5.078 c 0 1.855 5.664 1.66 5.664 0.195 q 0 -1.855 1.562 -2.93 1.66 -0.977 4.004 -1.367 t 4.395 -0.391 q 2.344 0 4.883 0.586 2.637 0.586 5.078 1.66 l 5.859 3.32 a 37.109 37.109 0 0 1 7.91 7.52 q 0.781 1.074 1.953 1.074 t 2.148 -0.684 1.367 -1.66 l 0.098 -0.586 0.098 -0.586 q 0 -1.367 -1.66 -3.223 -1.758 -1.855 -4.199 -3.809 -2.637 -1.953 -5.078 -3.32 l -6.055 -2.93 q -5.957 -2.344 -11.719 -2.539 z"
        ],
        "strokes": [
          {
            "id": "ね-1",
            "centerPath": "m 34.277 5.371 -1.953 80.566",
            "source": "strokesvg"
          },
          {
            "id": "ね-2",
            "centerPath": "M 7.031 48.633 c 14.648 -10.352 22.461 -11.133 30.469 -16.602 -13.574 12.988 -10.352 26.465 -25.781 52.246 0 0 42.285 -64.941 58.594 -52.734 20.215 15.137 6.055 48.535 -0.488 52.93 -1.953 1.367 -9.375 1.367 -9.375 1.367 s -16.406 0.098 -9.082 -11.23 c 4.297 -6.348 28.223 -4.199 36.328 8.594",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "の",
        "word": "のり",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/の.svg",
        "shadowPaths": [
          "M 45.215 27.246 q 0.195 0.586 0.293 1.27 v 0.781 q -0.195 2.832 -1.27 6.934 a 103.711 103.711 0 0 1 -6.152 18.066 q -1.855 4.492 -3.809 8.301 -1.758 3.809 -3.516 6.055 -1.562 2.246 -2.637 2.246 -0.391 0 -1.855 -1.074 -1.27 -1.172 -2.93 -3.32 t -2.832 -4.785 -1.074 -5.957 c -0.098 -1.66 -6.152 -2.148 -6.152 0 q 0 5.371 2.441 10.742 2.441 5.273 7.91 10.156 a 7.129 7.129 0 0 0 7.227 1.367 q 1.367 -0.488 2.344 -1.758 3.223 -3.906 6.055 -9.18 2.93 -5.273 5.078 -11.035 a 139.844 139.844 0 0 0 7.812 -26.855 q 0 -1.172 -0.684 -1.66 -0.586 -0.586 -1.562 -1.27 c -3.223 -1.367 -5.371 -0.684 -4.688 0.977",
          "M 53.711 20.508 q -7.812 0.098 -15.137 3.32 a 47.168 47.168 0 0 0 -21.973 19.434 q -3.32 6.25 -3.32 12.5 c 0.098 2.93 6.25 2.148 6.152 0 q 0 -2.832 1.465 -6.934 a 36.328 36.328 0 0 1 12.793 -16.309 q 4.98 -3.613 11.523 -5.273 2.539 -0.586 4.688 -0.977 l 1.953 -0.098 2.246 -0.098 h 0.391 q 9.18 0 14.551 3.418 t 7.617 8.887 2.344 11.621 v 1.562 l -0.098 1.66 q -0.488 5.469 -3.418 10.449 -2.832 4.98 -7.227 9.082 a 65.527 65.527 0 0 1 -17.676 12.402 q -3.223 1.758 -3.223 2.637 l 0.195 0.488 q 0.195 0.293 1.074 0.195 1.562 0 4.883 -0.879 3.223 -0.977 7.52 -3.027 4.297 -1.855 8.691 -4.98 4.297 -3.027 8.105 -7.324 3.809 -4.199 6.055 -9.668 2.344 -5.566 2.344 -12.305 0 -7.91 -3.418 -14.648 -3.32 -6.836 -10.254 -10.938 -6.836 -4.199 -17.773 -4.199 z"
        ],
        "strokes": [
          {
            "id": "の-1",
            "centerPath": "M 44.531 19.434 c 6.055 9.766 3.516 19.434 3.516 19.434 S 36.523 97.07 18.164 67.48 C 2.246 41.895 59.375 2.246 79.688 38.086 c 18.066 31.641 -27.051 48.438 -27.051 48.438",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "は",
        "word": "はな",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/は.svg",
        "shadowPaths": [
          "m 23.73 75.195 -0.195 -2.539 v -2.734 q 0 -4.98 0.391 -11.133 0.391 -6.055 1.074 -12.5 l 1.465 -12.598 1.855 -11.035 0.098 -1.172 0.098 -0.879 -0.098 -0.781 q -0.195 -0.684 -1.465 -1.367 -1.172 -0.684 -2.539 -1.074 -1.367 -0.488 -2.539 -0.488 -0.977 0 -1.172 0.488 l -0.098 0.195 v 0.098 q 0 0.391 0.391 0.781 l 0.586 0.781 q 0.391 0.781 0.391 1.465 l -0.488 3.906 -0.977 8.691 -1.074 10.84 -1.074 10.742 -0.586 8.301 -0.098 1.758 v 3.711 q 0 7.91 0.684 12.695 0.781 4.59 1.953 6.543 1.172 2.051 2.832 2.051 0.879 0 1.66 -0.684 0.879 -0.488 1.172 -1.758 l 1.465 -5.078 1.953 -7.227 1.953 -6.836 1.074 -3.906 0.293 -1.953 q 0 -0.977 -0.586 -0.977 -0.391 0 -0.977 0.488 -0.488 0.391 -0.977 1.074 l -1.367 2.637 -2.539 4.59 z",
          "M 64.648 31.348 a 281.543 281.543 0 0 0 -22.363 3.32 l -0.977 0.098 q -0.488 0 -1.074 -0.195 l -1.367 -0.293 -0.488 0.098 q -0.488 0.293 -0.488 0.684 l 0.488 1.465 q 0.488 1.367 1.758 2.539 1.172 1.27 3.027 1.27 a 9.863 9.863 0 0 0 2.93 -0.391 q 4.102 -0.977 8.789 -1.66 l 9.863 -1.367 5.957 -0.684 12.5 -0.879 q 3.613 0 3.613 -1.562 v -0.391 q -0.195 -1.66 -1.758 -2.93 -1.465 -1.172 -2.539 -1.27 h -0.293 l -0.293 -0.098 -1.758 0.293 -1.66 0.488 -7.91 0.684 z",
          "M 64.258 12.793 q -1.758 0 -1.855 0.684 v 0.098 q 0 0.684 0.781 1.27 0.879 0.293 0.977 1.758 0.195 0.391 0.195 4.59 l 0.293 10.156 0.098 5.566 0.488 20.801 0.195 6.641 v 1.367 l -0.293 4.102 q -0.879 3.516 -1.758 5.273 -0.586 1.172 -1.953 2.734 -1.465 1.465 -3.809 2.637 -2.441 1.172 -6.25 1.172 -2.734 0 -5.078 -0.879 -2.246 -0.781 -2.246 -2.441 c 0 -0.977 -5.664 -1.562 -5.664 -0.098 q 0.098 3.711 3.906 6.348 3.906 2.734 10.547 2.734 h 1.465 q 4.883 -0.195 8.789 -2.832 3.906 -2.734 6.25 -7.129 a 21.777 21.777 0 0 0 2.344 -10.938 v -1.172 l -0.098 -1.367 -0.293 -6.543 -0.586 -21.094 -0.098 -5.664 -0.195 -8.984 v -4.395 l -0.293 -1.758 q -0.293 -1.172 -1.562 -1.855 -1.172 -0.781 -4.297 -0.781",
          "M 65.137 69.824 q -2.832 -0.879 -5.566 -1.27 -2.637 -0.391 -5.469 -0.391 h -1.172 q -2.832 0 -6.25 1.074 -3.223 0.879 -5.762 3.125 a 7.52 7.52 0 0 0 -2.539 5.762 v 0.098 c 0 2.051 5.762 1.562 5.664 0.098 v -0.195 q 0.098 -2.441 2.734 -3.418 2.734 -1.172 6.348 -1.074 a 40.332 40.332 0 0 1 10.254 1.465 c 1.758 0.586 3.418 1.074 5.957 2.246 q 3.516 1.562 6.445 3.613 3.027 2.148 4.883 4.688 1.27 1.562 2.441 1.562 l 0.977 -0.391 q 0.879 -0.391 1.758 -1.27 0.781 -0.977 0.781 -2.246 0 -2.051 -2.637 -4.199 -2.539 -2.148 -6.055 -4.102 a 63.965 63.965 0 0 0 -12.793 -5.176"
        ],
        "strokes": [
          {
            "id": "は-1",
            "centerPath": "M 16.992 12.012 c 20.117 -1.758 -9.57 59.766 3.906 72.754 l 9.082 -17.969",
            "source": "strokesvg"
          },
          {
            "id": "は-2",
            "centerPath": "m 31.445 35.84 50.098 -0.879",
            "source": "strokesvg"
          },
          {
            "id": "は-3",
            "centerPath": "M 56.641 10.449 c 19.141 -0.781 13.867 71.777 3.809 73.535 0 0 -9.766 2.832 -15.234 0.781 -8.301 -3.125 -3.906 -31.445 37.109 -3.027",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ひ",
        "word": "ひこうき",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ひ.svg",
        "shadowPaths": [
          "M 70.312 42.383 q 2.539 12.207 5.957 19.238 3.516 6.934 6.348 6.934 1.367 0 2.246 -1.465 0.977 -1.465 0.977 -3.125 0 -1.367 -0.781 -2.246 -0.586 -0.879 -1.27 -1.465 -2.148 -1.855 -3.809 -5.273 -1.562 -3.516 -2.734 -7.715 -1.27 -4.199 -2.051 -8.398 l -1.074 -7.422 -0.586 -5.176 q -0.098 -1.465 -1.172 -1.953 -0.879 -0.586 -1.953 -0.586 -2.539 0 -3.027 1.172 -0.488 1.074 -0.488 1.855 v 1.27 l 0.098 1.367 q 0 0.781 -0.586 4.102 t -1.953 8.105 q -1.172 4.785 -3.027 10.254 -1.855 5.566 -4.297 10.938 -2.539 5.371 -5.762 9.863 -3.125 4.492 -7.031 7.129 -3.809 2.734 -8.301 2.734 -0.977 0 -2.441 -0.781 -1.465 -0.879 -3.027 -2.734 -1.367 -2.051 -2.441 -5.469 -0.977 -3.613 -0.977 -9.18 0 -5.371 1.562 -11.133 1.562 -5.859 4.492 -11.426 t 6.934 -10.449 q 4.102 -4.98 8.984 -8.301 1.27 -1.074 1.27 -2.148 0 -1.172 -1.367 -2.441 -1.465 -1.27 -2.832 -1.27 -0.781 0 -1.562 0.586 -0.781 0.684 -3.32 1.66 l -5.957 1.855 -6.934 1.855 -6.543 1.367 -0.293 0.098 h -0.391 l -1.758 -0.195 q -0.977 -0.293 -1.66 -0.293 l -0.684 0.195 q -0.293 0.293 -0.293 0.781 0 0.879 0.781 2.051 0.781 0.977 1.758 1.855 l 1.367 1.074 q 0.781 0.293 1.465 0.293 1.074 0 3.516 -0.586 l 5.859 -1.465 q 3.125 -0.879 5.859 -1.953 -4.785 5.273 -8.594 11.523 t -6.055 12.988 q -2.051 6.738 -2.051 13.574 t 1.758 12.305 q 1.953 5.566 5.469 8.789 3.516 3.125 8.301 3.125 5.371 0 9.863 -2.637 4.59 -2.832 8.301 -7.52 3.809 -4.785 6.836 -10.84 2.93 -5.957 5.176 -12.5 t 3.906 -12.793"
        ],
        "strokes": [
          {
            "id": "ひ-1",
            "centerPath": "M 10.645 27.93 c 15.43 -4.395 22.363 -6.25 36.035 -12.012 3.809 4.199 -44.336 49.512 -14.453 68.945 18.457 12.012 32.617 -38.086 34.961 -59.766 l 14.258 38.086",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ふ",
        "word": "ふね",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ふ.svg",
        "shadowPaths": [
          "m 57.422 32.91 -3.32 2.637 -2.93 1.953 q -1.855 1.27 -1.855 2.246 0 0.879 1.562 0.879 0.781 0 2.832 -0.488 t 4.395 -1.27 l 4.004 -1.367 q 1.758 -0.684 2.051 -1.172 0.488 -0.586 0.781 -1.367 t 0.293 -1.465 -0.391 -1.367 q -1.172 -2.051 -3.516 -4.688 -2.441 -2.734 -5.273 -5.273 -2.734 -2.441 -5.273 -4.102 -2.344 -1.66 -3.613 -1.66 -1.074 0 -1.953 0.977 -0.781 0.977 -0.781 1.562 0 0.879 1.27 1.758 2.148 1.367 4.492 3.613 2.344 2.051 4.199 4.395 1.953 2.246 3.027 4.199",
          "M 50.879 88.477 q 2.93 0 5.762 -1.465 t 4.785 -4.492 q 1.953 -3.125 1.953 -7.617 0 -3.613 -1.66 -7.031 -1.758 -3.418 -4.297 -6.348 -2.637 -3.125 -5.469 -5.664 l -4.98 -4.59 q -2.148 -1.953 -2.93 -3.223 -1.465 -2.148 -2.832 -2.148 -0.781 0 -1.27 0.684 -0.586 0.586 -0.586 1.66 0 0.879 0.488 1.66 0.879 2.246 3.516 4.98 l 5.859 5.957 q 3.125 3.125 5.273 6.738 2.344 3.516 2.344 7.422 0 3.027 -2.148 5.176 -1.953 2.246 -4.59 2.246 -2.539 0 -5.371 -0.391 -2.93 -0.488 -5.469 -1.27 -2.344 -0.684 -3.613 -1.465 -1.172 -0.684 -2.051 -0.684 -1.074 0 -1.074 0.879 0 1.172 1.855 2.832 2.051 1.465 4.883 2.93 3.027 1.465 6.152 2.344 t 5.469 0.879",
          "M 10.84 69.824 v 0.781 q 0.098 1.953 1.172 5.078 1.172 3.027 2.93 6.055 1.758 2.93 3.613 5.078 2.051 1.953 3.711 1.953 1.27 0 2.93 -1.855 1.758 -2.051 3.418 -4.688 l 2.832 -4.98 q 1.074 -2.344 1.074 -3.027 0 -0.977 -0.977 -0.977 -1.367 0 -2.148 0.977 -0.977 1.074 -3.32 3.027 -2.148 1.758 -3.906 2.832 -2.441 -2.051 -4.492 -5.176 -1.953 -3.223 -2.832 -5.273 -1.172 -2.539 -2.637 -2.539 -1.367 0 -1.367 2.734",
          "M 91.113 76.855 q 0 -0.977 -1.27 -3.516 -1.367 -2.734 -4.297 -6.543 -3.027 -3.906 -8.008 -8.301 -0.391 -0.391 -1.27 -0.391 -1.172 0 -2.441 0.879 -1.367 0.781 -1.367 1.953 0 0.977 1.172 1.758 2.246 1.758 4.492 4.785 t 4.004 6.152 2.441 5.371 q 0.684 1.855 2.148 1.855 0.391 0 1.367 -0.391 1.074 -0.391 2.051 -1.172 0.977 -0.879 0.977 -2.441"
        ],
        "strokes": [
          {
            "id": "ふ-1",
            "centerPath": "m 40.039 12.988 25.684 18.262 -10.84 6.445",
            "source": "strokesvg"
          },
          {
            "id": "ふ-2",
            "centerPath": "M 35.352 41.992 s 40.918 33.887 14.16 43.75 c -5.859 2.148 -12.598 -2.832 -12.598 -2.832",
            "source": "strokesvg"
          },
          {
            "id": "ふ-3",
            "centerPath": "m 8.887 61.426 9.961 27.344 9.57 -10.742",
            "source": "strokesvg"
          },
          {
            "id": "ふ-4",
            "centerPath": "m 69.434 54.199 16.406 20.801",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "へ",
        "word": "へび",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/へ.svg",
        "shadowPaths": [
          "m 32.91 39.355 -8.789 8.008 q -4.59 4.199 -9.375 7.129 -1.66 0.977 -3.125 0.781 -1.562 -0.293 -2.148 0.488 l -0.098 0.391 q 0 0.488 0.879 1.758 0.977 1.27 2.344 2.344 1.367 1.172 2.93 1.172 0.781 0 1.367 -0.293 l 1.465 -0.781 q 3.223 -1.855 6.543 -4.785 3.418 -2.832 6.738 -6.152 t 6.543 -6.25 q 2.051 -1.758 3.125 -1.758 t 3.223 1.758 l 6.055 5.371 9.473 8.301 q 5.469 4.688 11.914 9.668 6.543 4.98 13.574 9.57 l 1.562 0.781 q 0.879 0.391 1.758 0.391 2.637 0 2.637 -2.734 0 -1.367 -0.488 -2.832 -0.391 -1.465 -0.879 -1.953 -0.781 -0.684 -1.855 -0.781 -0.977 -0.293 -2.441 -1.172 -8.105 -5.078 -17.383 -12.5 -9.082 -7.422 -19.727 -16.797 -1.953 -1.66 -3.711 -2.637 -1.758 -1.074 -3.613 -1.074 -1.66 0 -3.809 1.172 -2.051 0.977 -4.688 3.418"
        ],
        "strokes": [
          {
            "id": "へ-1",
            "centerPath": "M 2.93 56.152 c 22.461 6.934 28.516 -19.434 38.086 -18.652 l 45.801 34.863",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ほ",
        "word": "ほし",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ほ.svg",
        "shadowPaths": [
          "M 30.762 62.109 h -0.391 q -0.879 0 -1.465 1.27 l -1.27 2.637 -2.344 4.492 -2.539 4.688 -0.098 -1.758 v -2.051 q 0 -4.688 0.488 -10.742 l 0.977 -12.793 1.465 -12.891 q 0.781 -6.348 1.758 -11.426 l 0.098 -0.879 0.098 -0.879 q 0 -1.367 -1.074 -2.148 -0.879 -0.781 -2.148 -1.172 t -2.344 -0.488 l -0.977 -0.195 q -0.781 0 -0.879 0.391 v 0.098 q 0 0.391 0.488 1.27 0.488 0.781 0.586 1.562 l 0.098 1.074 -0.098 0.879 -0.488 3.516 -0.977 8.008 -1.172 10.059 -0.977 10.059 -0.488 7.812 v 3.32 q 0 8.496 0.488 13.281 0.488 4.688 1.367 6.738 0.781 1.953 1.66 2.344 0.977 0.488 1.953 0.488 t 1.758 -0.391 q 0.781 -0.391 1.074 -1.66 l 0.684 -2.637 1.66 -5.469 1.66 -6.543 1.465 -5.566 0.684 -2.832 q 0 -1.367 -0.781 -1.465",
          "M 66.309 24.512 q 3.223 -0.586 6.445 -0.684 3.516 -0.293 7.031 -0.391 1.66 -0.098 2.539 -0.684 0.977 -0.391 0.977 -1.465 l -0.098 -0.195 v -0.293 q -0.391 -1.074 -1.465 -1.953 -1.172 -1.074 -2.734 -1.367 h -0.293 l -0.293 -0.098 q -0.879 0.098 -1.758 0.391 -0.586 0.391 -1.66 0.391 a 128.516 128.516 0 0 0 -18.652 2.637 l -13.77 2.344 h -0.195 q -0.684 0 -1.465 -0.391 l -1.172 -0.293 -0.293 0.098 h -0.195 q -0.488 0.293 -0.488 0.781 0.098 0.781 0.684 1.953 0.879 1.172 2.051 2.246 a 4.004 4.004 0 0 0 3.809 0.684 q 0.781 -0.293 1.562 -0.293 a 237.012 237.012 0 0 0 14.648 -2.734 z",
          "M 63.574 41.016 a 106.641 106.641 0 0 1 -12.695 1.074 q -4.004 0 -5.176 -0.586 -0.781 -0.391 -2.441 -0.391 -0.781 0 -1.074 0.293 -0.293 0.391 -0.293 0.977 t 0.879 1.953 q 0.879 1.172 3.613 2.148 2.832 0.977 8.301 0.977 a 46.191 46.191 0 0 0 9.082 -0.781 l 5.762 -0.879 q 6.934 -1.172 10.059 -2.148 3.223 -0.879 4.004 -1.562 0.879 -0.781 0.879 -1.367 l -0.098 -0.293 v -0.293 q -0.293 -1.172 -1.855 -2.148 -1.465 -1.074 -3.32 -1.074 h -0.391 q -0.879 0.098 -1.27 0.586 -0.488 0.391 -1.367 0.781 a 51.074 51.074 0 0 1 -6.836 1.758 z",
          "M 63.965 24.609 c -1.465 0 -2.539 0.098 -2.441 0.684 q 0.098 0.781 0.879 1.465 0.684 0.879 0.781 1.562 0.293 1.66 0.195 5.078 l 0.195 7.617 0.195 5.664 0.293 18.164 v 2.637 a 17.09 17.09 0 0 1 -1.758 7.812 9.375 9.375 0 0 1 -4.688 4.883 q -3.223 1.465 -6.445 1.562 h -0.293 q -2.93 -0.098 -5.273 -1.27 -2.344 -1.074 -2.344 -2.539 c 0.098 -1.27 -5.566 -1.465 -5.566 0.293 q 0 3.32 3.516 6.152 t 10.742 2.832 h 0.977 q 5.371 -0.195 9.18 -2.637 3.809 -2.539 5.859 -6.934 c 0.195 -0.488 1.074 -2.148 1.855 -5.566 a 24.023 24.023 0 0 0 0.293 -6.152 v -1.562 l -0.586 -18.555 -0.195 -5.762 a 232.812 232.812 0 0 0 -0.879 -14.453 q -0.293 -0.586 -1.758 -0.977 z",
          "M 51.465 68.457 q -6.641 0.098 -10.156 3.027 -3.516 3.027 -3.613 6.641 v 0.098 c 0.098 2.246 5.859 1.367 5.566 -0.293 q 0 -2.051 2.344 -3.125 2.344 -1.172 5.762 -1.074 h 0.391 q 2.637 0 5.176 0.293 t 5.371 1.27 l 5.664 2.344 a 49.316 49.316 0 0 1 12.402 8.594 q 1.562 1.562 2.637 1.562 0.879 0 1.465 -0.586 l 1.074 -1.27 q 0.586 -1.465 0.586 -2.441 0 -1.465 -2.246 -3.32 -2.051 -1.855 -5.078 -3.613 a 76.367 76.367 0 0 0 -14.941 -6.445 q -2.832 -0.781 -5.957 -1.074 l -5.957 -0.586 z"
        ],
        "strokes": [
          {
            "id": "ほ-1",
            "centerPath": "M 16.016 12.793 c 19.531 6.348 -8.398 58.789 3.516 74.707 l 8.984 -20.312",
            "source": "strokesvg"
          },
          {
            "id": "ほ-2",
            "centerPath": "m 32.324 22.656 45.117 -0.293",
            "source": "strokesvg"
          },
          {
            "id": "ほ-3",
            "centerPath": "m 35.352 42.773 43.555 -0.781",
            "source": "strokesvg"
          },
          {
            "id": "ほ-4",
            "centerPath": "M 56.543 20.703 c 17.48 9.18 11.035 63.574 -1.855 63.574 0 0 -17.773 1.953 -12.793 -6.348 4.883 -8.301 16.016 -10.059 38.672 5.469",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ま",
        "word": "まめ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ま.svg",
        "shadowPaths": [
          "M 51.172 26.855 a 289.551 289.551 0 0 0 -24.512 4.199 l -0.781 0.293 h -0.781 l -1.27 -0.195 -1.465 -0.195 -0.684 0.098 q -0.391 0.391 -0.391 0.781 0 0.586 0.781 1.855 0.879 1.172 2.051 2.246 a 4.004 4.004 0 0 0 3.809 0.684 q 0.586 -0.293 1.367 -0.391 4.395 -1.172 10.156 -2.148 5.859 -0.977 11.914 -1.758 l 6.055 -0.684 a 114.551 114.551 0 0 1 15.234 -0.977 q 1.758 0 2.734 -0.391 1.172 -0.391 1.074 -1.465 v -0.391 q -0.293 -1.27 -1.855 -2.441 -1.465 -1.172 -2.734 -1.27 h -0.488 q -0.977 0 -1.758 0.293 l -2.93 0.391 h -1.27 l -8.203 0.781 z",
          "m 51.758 46.973 -11.523 1.367 h -2.93 q -4.004 0 -6.543 -0.586 l -2.148 -0.195 q -1.172 0 -1.465 0.293 -0.488 0.391 -0.488 1.172 0 1.562 1.66 2.441 1.66 0.977 4.102 1.465 a 60.449 60.449 0 0 0 8.496 0.684 h 2.734 l 0.879 -0.098 q 1.367 -0.293 3.223 -0.293 l 4.199 -0.488 6.055 -0.977 q 6.543 -0.879 10.352 -1.66 t 5.566 -1.367 2.051 -1.172 q 0.586 -0.391 0.488 -0.879 l -0.098 -0.293 v -0.293 q -0.391 -1.074 -2.051 -2.051 -1.66 -1.172 -3.711 -1.172 h -0.391 q -0.977 0.195 -1.562 0.488 -0.293 0.391 -1.465 0.977 l -3.223 0.684 -6.152 0.977 z",
          "M 50.391 11.426 q -1.465 0 -1.562 0.879 v 0.098 q -0.098 0.586 0.488 1.074 l 0.879 0.977 q 0.391 0.391 0.488 1.465 0.293 0.977 0.293 3.613 l 0.195 7.324 0.195 5.469 0.391 14.648 0.195 5.762 0.684 14.551 v 1.27 a 20.703 20.703 0 0 1 -2.148 9.082 q -1.66 3.027 -4.59 5.078 a 14.551 14.551 0 0 1 -7.129 2.344 h -0.684 q -1.953 0.098 -4.395 -0.488 -2.441 -0.391 -4.199 -1.465 -1.66 -1.172 -1.66 -2.734 c 0 -1.758 -6.152 -1.953 -6.25 0 v 0.293 q 0 2.93 2.344 5.273 2.344 2.246 6.152 3.418 3.906 1.367 8.203 1.367 h 1.562 q 5.566 -0.293 9.961 -3.125 4.492 -2.93 6.934 -8.008 a 22.168 22.168 0 0 0 1.855 -7.617 v -3.516 l -0.098 -1.465 -0.195 -6.055 -0.293 -9.18 -0.195 -5.762 -0.391 -14.355 -0.195 -5.469 -0.195 -6.836 v -3.906 q 0 -1.367 -0.586 -2.246 -0.684 -0.781 -3.711 -1.465 z",
          "M 38.379 70.41 q -2.051 0 -4.883 0.586 -2.832 0.488 -5.469 1.66 -2.734 1.172 -4.492 3.125 a 6.836 6.836 0 0 0 -1.953 4.59 c 0.098 2.246 6.055 1.953 6.25 0 q 0 -1.66 1.758 -2.637 t 4.297 -1.465 q 2.539 -0.488 4.59 -0.488 h 0.879 q 2.734 0 5.371 0.488 2.637 0.391 5.762 1.367 l 6.25 1.953 q 4.395 1.66 8.594 4.004 4.102 2.344 6.348 4.98 0.879 1.074 1.562 1.367 0.586 0.391 1.27 0.391 1.562 0 2.441 -1.562 1.074 -1.465 1.074 -2.93 0 -1.562 -1.66 -3.027 -1.562 -1.562 -4.102 -3.027 a 43.848 43.848 0 0 0 -10.352 -4.688 79.199 79.199 0 0 0 -9.57 -2.93 78.711 78.711 0 0 0 -13.965 -1.758"
        ],
        "strokes": [
          {
            "id": "ま-1",
            "centerPath": "m 14.746 31.543 56.25 -1.27",
            "source": "strokesvg"
          },
          {
            "id": "ま-2",
            "centerPath": "m 20.117 49.316 50.977 -0.977",
            "source": "strokesvg"
          },
          {
            "id": "ま-3",
            "centerPath": "M 44.531 7.031 c 17.578 6.543 13.574 77.441 1.953 79.492 0 0 -18.75 5.957 -20.508 -7.617 -1.172 -8.789 27.734 -5.664 46.68 6.445",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "み",
        "word": "みかん",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/み.svg",
        "shadowPaths": [
          "M 51.172 17.09 q -0.781 0 -1.27 0.293 l -12.305 3.516 -8.301 1.66 -2.734 -0.293 -0.781 0.195 -0.098 0.391 q 0.098 0.684 0.977 2.148 1.074 1.27 2.539 2.441 1.465 1.074 2.441 1.074 1.074 0 2.832 -0.684 l 13.672 -4.102 -14.551 31.348 -2.637 5.664 -3.809 6.836 q -2.051 3.32 -4.492 5.859 a 7.617 7.617 0 0 1 -4.883 2.539 q -0.293 0 -1.074 -0.684 -0.684 -0.684 -0.684 -2.148 c 0.098 -1.66 -5.371 -2.051 -5.469 -0.293 q 0 1.953 0.684 3.809 0.684 1.953 2.148 3.418 t 4.004 1.758 h 0.781 q 1.367 0 3.223 -0.684 2.051 -0.488 4.492 -2.539 2.637 -2.051 5.664 -6.445 t 6.25 -11.816 l 2.441 -5.371 1.953 -4.395 7.812 -16.699 a 200.781 200.781 0 0 1 6.641 -13.184 q 0 -1.758 -1.953 -2.637 -1.758 -0.879 -3.516 -0.977",
          "M 33.594 55.078 q -7.91 0.781 -12.988 3.809 t -7.617 6.934 -2.441 7.031 c -0.098 3.125 5.469 2.441 5.469 0.293 v -0.488 l 0.098 -0.488 q 0.391 -2.344 2.441 -4.883 2.148 -2.539 5.469 -4.297 3.223 -1.953 6.934 -2.246 4.004 -0.488 6.836 -0.391 7.812 0.195 14.844 1.66 a 109.082 109.082 0 0 1 18.848 5.371 c 6.445 2.148 7.422 3.027 16.016 6.152 q 0.879 0.391 1.758 0.391 1.27 0 1.66 -0.781 0.488 -0.977 0.488 -2.051 -0.098 -1.074 -0.586 -2.148 -0.391 -1.27 -1.562 -2.051 -0.586 -0.391 -1.367 -0.586 l -1.172 -0.293 -3.809 -1.562 q -3.418 -1.367 -8.984 -3.027 l -6.055 -1.953 q -6.055 -1.66 -13.184 -2.93 t -14.453 -1.562 c -2.051 0 -3.32 -0.098 -6.641 0.098",
          "M 66.016 65.527 q -2.344 6.348 -5.762 12.5 -3.223 6.055 -6.738 9.863 -1.953 2.148 -1.953 3.613 l 0.195 0.781 q 0.293 0.293 0.781 0.293 1.562 0 4.785 -3.125 3.223 -3.027 6.934 -8.789 4.004 -5.664 7.227 -13.281 l 2.441 -5.957 a 47.852 47.852 0 0 0 2.734 -12.988 q 0 -1.465 -0.586 -2.051 -0.586 -0.684 -1.953 -1.074 -2.539 -0.977 -4.492 -0.977 -1.172 0 -1.465 0.586 l -0.098 0.195 v 0.195 q 0 0.879 0.879 2.051 0.781 1.074 0.781 2.246 v 0.098 l -0.391 3.125 q -0.293 2.637 -1.465 6.641 c -0.586 2.441 -1.27 4.102 -1.855 6.055"
        ],
        "strokes": [
          {
            "id": "み-1",
            "centerPath": "M 19.434 21.191 c 11.914 7.422 23.828 -5.078 33.594 -4.98 -5.371 11.719 -14.258 40.234 -22.168 53.711 0 0 -13.867 20.996 -16.016 2.637 -1.465 -13.379 23.926 -20.703 71.191 -2.148",
            "source": "strokesvg"
          },
          {
            "id": "み-2",
            "centerPath": "M 64.062 39.648 c 22.754 11.133 -8.301 50.293 -8.301 50.293",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "む",
        "word": "むし",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/む.svg",
        "shadowPaths": [
          "m 32.422 35.254 -7.617 1.855 -4.492 1.074 -2.637 0.391 h -0.781 l -0.879 -0.098 -2.148 -0.391 -0.879 0.293 q -0.293 0.293 -0.293 0.684 0 0.781 0.977 2.051 1.074 1.367 2.344 2.344 1.367 1.172 2.441 1.172 l 2.246 -0.391 9.473 -2.246 2.148 -0.488 6.055 -1.367 a 274.121 274.121 0 0 1 16.797 -3.32 q 1.172 -0.586 1.172 -1.562 l -0.195 -0.586 q -0.293 -1.074 -1.855 -2.246 -1.465 -1.27 -2.734 -1.465 h -0.293 l -0.195 -0.098 q -0.977 0 -1.855 0.586 l -1.855 0.684 q -1.562 0.098 -3.906 0.684 l -4.883 1.074 z",
          "M 31.934 12.109 q -1.27 0 -1.66 0.781 l -0.098 0.195 v 0.098 q 0 0.586 0.586 1.172 l 1.172 1.367 q 0.195 0.391 0.488 1.27 l 0.195 1.367 -0.098 5.469 -0.098 11.426 -0.098 6.25 -0.195 19.629 -0.488 11.719 v 2.539 q -0.098 1.367 -0.781 2.637 -0.488 1.172 -1.66 1.465 h -0.293 q -2.148 0 -3.906 -3.027 -1.465 -2.832 -1.562 -6.641 c 0 -1.367 -5.664 -1.855 -5.664 0 v 0.684 q 0 4.59 1.758 8.008 t 4.492 5.273 q 2.637 1.758 5.566 1.855 1.172 0 1.953 -0.488 0.879 -0.293 1.66 -1.074 c 2.148 -2.246 4.004 -4.785 4.492 -10.352 l 0.098 -1.172 0.098 -0.977 0.098 -6.25 0.391 -25.195 0.195 -6.25 0.488 -15.723 v -0.977 q 0 -2.051 -0.684 -2.93 -0.586 -0.879 -2.832 -1.465 z",
          "M 75.098 52.734 q -0.684 0 -1.27 1.172 t -0.781 3.613 q -0.488 6.738 -1.367 12.207 -0.781 5.469 -2.441 8.594 -1.27 1.953 -3.906 3.223 -2.637 1.172 -5.957 1.758 a 55.957 55.957 0 0 1 -17.773 0.391 q -2.051 -0.684 -2.637 -1.855 -0.488 -1.27 -0.781 -2.734 l -0.488 -5.371 0.098 -1.172 c 0 -0.098 0.098 -6.152 -5.664 -11.426 a 9.57 9.57 0 0 0 -6.25 -2.344 h -0.684 q -2.93 0.195 -4.492 2.051 t -2.344 4.492 q -0.488 2.246 -0.586 4.492 c 0 1.855 5.664 1.465 5.664 0 v -0.488 q 0 -1.758 0.488 -3.223 0.586 -1.465 1.953 -1.758 h 0.293 q 1.465 0 2.637 1.465 1.172 1.27 1.953 3.32 0.879 1.953 0.879 3.711 v 2.539 c -0.195 3.125 0.586 5.957 1.562 8.691 q 0.977 2.93 3.711 4.297 2.832 1.465 6.641 1.855 4.004 0.488 8.203 0.488 a 40.332 40.332 0 0 0 17.676 -3.906 q 3.809 -1.953 5.176 -4.395 1.074 -1.758 1.562 -4.883 a 69.043 69.043 0 0 0 0.977 -14.258 l -0.195 -3.027 v -2.441 q 0 -5.078 -1.855 -5.078",
          "M 89.16 45.703 q 1.465 -0.879 1.465 -3.027 0 -1.172 -1.855 -3.711 -1.66 -2.441 -4.199 -5.371 -2.344 -3.027 -4.785 -5.371 -2.344 -2.539 -3.809 -3.516 -0.488 -0.391 -1.367 -0.391 -1.172 0 -2.344 0.879 -0.977 0.879 -0.977 2.051 0 0.879 0.879 1.66 1.465 1.074 3.223 3.223 1.953 2.051 3.711 4.59 1.855 2.344 3.32 4.688 1.367 2.148 1.953 3.613 0.684 1.66 2.246 1.66 0.781 0 1.465 -0.293 t 1.074 -0.684"
        ],
        "strokes": [
          {
            "id": "む-1",
            "centerPath": "m 5.371 44.727 45.312 -9.668",
            "source": "strokesvg"
          },
          {
            "id": "む-2",
            "centerPath": "m 34.766 4.492 0.684 69.824 s -2.051 7.91 -8.301 7.715 c -4.688 -0.098 -5.566 -4.59 -5.566 -4.59 s -2.637 -16.699 6.25 -14.844 c 15.82 3.32 0.684 21.582 12.402 23.34 11.816 1.758 29.883 3.613 32.227 -9.57 s 2.539 -18.164 2.539 -18.164",
            "source": "strokesvg"
          },
          {
            "id": "む-3",
            "centerPath": "m 68.164 19.727 17.383 21.973",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "め",
        "word": "めがね",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/め.svg",
        "shadowPaths": [
          "M 26.27 21.973 q -1.27 0 -1.562 0.684 v 0.195 q 0 0.586 0.684 1.172 a 4.199 4.199 0 0 1 1.367 2.441 l 0.195 1.074 2.148 15.039 a 180.762 180.762 0 0 0 2.93 15.332 l 1.953 8.691 q 0.684 2.832 1.758 5.762 1.074 4.102 1.855 5.371 0.879 1.172 2.051 1.172 1.367 0 2.246 -1.367 0.879 -1.562 0.879 -3.32 0.098 -0.684 -0.195 -1.367 l -0.977 -2.637 -0.977 -2.832 a 220.312 220.312 0 0 1 -5.176 -22.559 l -0.977 -5.664 -0.879 -6.348 -0.684 -6.25 q -0.098 -1.367 -0.488 -2.246 -0.391 -0.977 -2.344 -1.562 l -1.855 -0.488 z",
          "M 59.082 13.672 q -0.684 0.098 -0.781 0.391 l -0.098 0.391 0.293 0.977 q 0.293 0.293 0.488 0.879 0.195 0.488 0.195 1.172 l 0.098 1.074 q -0.293 3.32 -1.562 6.836 -1.172 3.418 -2.539 6.836 a 63.477 63.477 0 0 1 -4.883 11.133 113.965 113.965 0 0 1 -11.523 17.578 51.27 51.27 0 0 1 -9.277 9.961 l -3.516 2.734 q -1.758 1.074 -2.93 1.074 -0.977 0 -1.855 -1.562 a 23.047 23.047 0 0 1 -2.051 -6.055 c -0.098 -1.562 -5.957 -1.758 -5.957 0 v 0.195 q 0 1.074 0.586 3.418 0.781 2.344 1.953 4.785 t 2.637 4.199 3.516 1.758 q 1.758 0 4.199 -1.562 a 45.02 45.02 0 0 0 9.668 -7.52 c 1.465 -1.367 2.93 -2.539 4.883 -4.98 q 5.078 -5.664 10.059 -13.379 t 9.277 -17.285 l 2.246 -5.273 a 61.035 61.035 0 0 0 3.809 -13.086 q 0 -1.172 -0.977 -2.148 -0.977 -0.879 -2.441 -1.367 -1.27 -0.684 -2.441 -0.879 z",
          "M 55.176 32.227 a 72.754 72.754 0 0 0 -20.703 6.934 c -1.66 1.074 -3.125 1.758 -5.371 3.418 q -5.664 4.297 -9.18 8.691 -3.418 4.395 -4.98 8.496 t -1.758 7.324 c 0.098 2.734 6.152 2.637 5.957 0 q 0 -4.492 3.027 -9.57 a 35.254 35.254 0 0 1 13.184 -12.695 q 3.809 -2.246 8.203 -4.004 4.59 -1.953 9.57 -3.223 c 2.441 -0.488 4.004 -0.781 6.836 -0.879 l 2.051 -0.098 q 7.91 0 13.086 4.492 5.273 4.492 5.176 13.281 v 0.488 q -0.098 5.078 -2.637 10.156 -2.637 4.883 -6.836 9.277 -4.199 4.297 -9.18 7.812 c -6.836 4.785 -10.156 5.469 -11.523 6.641 q -0.586 0.684 -0.586 1.27 v 0.293 q 0.293 0.879 1.562 0.879 l 3.125 -0.879 a 55.273 55.273 0 0 0 15.234 -7.422 q 4.395 -2.93 8.398 -6.934 4.004 -3.906 6.543 -9.18 2.637 -5.273 2.93 -11.816 v -1.27 a 21.191 21.191 0 0 0 -11.816 -19.531 q -5.371 -2.734 -12.109 -2.734 h -1.172 c -2.441 0.098 -3.613 0.098 -7.031 0.781"
        ],
        "strokes": [
          {
            "id": "め-1",
            "centerPath": "m 24.023 15.43 17.48 58.105",
            "source": "strokesvg"
          },
          {
            "id": "め-2",
            "centerPath": "M 56.055 7.617 c 14.258 16.602 -3.223 38.184 -19.141 61.816 0 0 -20.215 19.531 -19.922 -1.855 0.293 -21.875 44.434 -41.211 56.934 -30.762 32.324 27.148 -20.312 51.367 -20.312 51.367",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "も",
        "word": "もも",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/も.svg",
        "shadowPaths": [
          "M 75.098 72.559 v -0.195 q -0.098 -6.152 -2.441 -11.328 a 52.93 52.93 0 0 0 -9.668 -13.867 q -1.367 -1.172 -2.148 -1.172 h -0.098 q -0.586 0 -0.586 0.781 0 1.66 2.051 4.688 3.516 5.273 4.98 9.961 a 28.613 28.613 0 0 1 1.367 9.766 v 0.879 q -0.098 2.93 -2.344 6.445 -2.051 3.516 -5.664 5.957 -3.516 2.441 -8.105 2.441 -2.246 0 -4.199 -0.879 -3.613 -1.855 -6.25 -5.273 -2.637 -3.32 -2.637 -10.352 0 -2.051 0.391 -4.492 l 0.488 -4.395 0.781 -5.664 a 275.098 275.098 0 0 1 2.539 -14.648 l 1.27 -5.566 a 164.453 164.453 0 0 0 3.516 -19.531 v -0.391 l 0.098 -0.488 q 0 -1.367 -0.781 -1.953 -0.586 -0.391 -1.953 -0.879 a 16.211 16.211 0 0 0 -4.688 -0.879 q -0.977 0 -1.27 0.293 -0.391 0.391 -0.391 0.781 0 0.684 0.684 1.27 l 0.879 1.074 q 0.391 0.391 0.488 1.27 l 0.098 1.367 q -0.098 3.516 -0.879 7.91 l -1.855 9.766 -0.977 5.469 -1.27 6.934 -1.27 7.91 -0.781 5.566 -0.781 5.957 -0.195 4.102 q 0 6.445 2.051 10.742 a 19.824 19.824 0 0 0 10.938 10.449 q 3.125 1.074 5.273 1.074 5.078 0 9.277 -2.051 4.297 -2.051 7.324 -5.371 3.223 -3.32 4.98 -6.934 t 1.758 -6.543",
          "M 43.555 41.211 a 55.469 55.469 0 0 1 7.812 1.562 l 1.172 0.195 q 2.148 0 2.734 -2.734 v -0.293 l 0.098 -0.293 q 0 -0.879 -0.586 -1.562 -0.488 -0.781 -1.367 -0.977 -1.367 -0.586 -3.711 -0.879 -2.246 -0.391 -4.883 -0.586 l -6.055 -0.391 h -2.148 q -5.273 0 -8.105 0.293 -2.832 0.098 -4.004 0.684 -1.172 0.293 -1.465 1.074 -0.293 0.684 -0.293 1.562 0.098 1.758 2.441 1.758 h 3.223 a 42.285 42.285 0 0 1 6.348 0 l 3.027 0.098 z",
          "m 40.234 61.523 8.887 0.293 q 3.516 0 4.98 -0.293 1.562 -0.293 1.855 -0.879 0.488 -0.684 0.488 -1.465 0 -1.074 -1.758 -2.344 a 6.152 6.152 0 0 0 -3.32 -1.66 h -0.391 l -1.367 0.195 -1.27 0.391 -1.562 0.098 h -5.762 c -2.148 0 -3.711 -0.098 -5.762 -0.293 a 38.77 38.77 0 0 1 -10.938 -2.246 q -0.293 -0.293 -0.977 -0.391 l -1.27 -0.293 -0.488 0.098 q -0.586 0.293 -0.586 1.465 0 2.051 1.758 3.32 1.855 1.367 4.395 2.051 a 28.418 28.418 0 0 0 7.324 1.562 c 1.172 0.098 2.148 0.293 5.762 0.391"
        ],
        "strokes": [
          {
            "id": "も-1",
            "centerPath": "M 36.719 6.055 c 22.07 18.848 -13.77 66.406 4.297 80.273 20.605 15.723 39.551 -8.887 22.852 -36.328",
            "source": "strokesvg"
          },
          {
            "id": "も-2",
            "centerPath": "m 16.113 38.574 33.301 1.172",
            "source": "strokesvg"
          },
          {
            "id": "も-3",
            "centerPath": "m 14.453 53.223 36.035 5.957",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "や",
        "word": "やま",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/や.svg",
        "shadowPaths": [
          "M 81.641 42.188 v 0.781 q 0 3.613 -3.32 6.641 a 18.164 18.164 0 0 1 -11.133 4.492 90.918 90.918 0 0 1 -15.039 -0.488 h -0.879 q -2.051 0 -2.051 1.074 0 0.781 1.758 1.758 1.855 0.781 4.59 1.465 2.93 0.684 6.055 1.172 3.223 0.391 5.957 0.391 3.32 0 7.031 -0.977 3.613 -0.977 6.836 -3.223 3.125 -2.051 5.078 -5.176 t 1.953 -7.227 l -0.098 -0.586 v -0.781 q -0.586 -5.859 -5.273 -8.789 -4.492 -3.027 -12.305 -3.027 a 40.039 40.039 0 0 0 -11.035 1.465 q -3.809 1.074 -9.863 3.125 -5.957 2.051 -15.039 5.664 l -5.469 2.148 q -8.496 3.516 -14.551 6.348 -0.684 0.391 -2.148 0.391 h -0.586 l -0.488 -0.098 h -0.879 l -0.977 -0.098 q -0.879 0 -1.074 0.488 l -0.098 0.391 0.781 1.562 q 0.879 1.367 2.246 2.539 t 3.223 1.172 q 1.465 0 3.613 -1.074 2.637 -1.367 5.957 -2.832 l 7.031 -3.125 5.566 -2.344 q 8.105 -3.223 13.574 -5.176 5.566 -2.051 9.18 -3.027 a 44.336 44.336 0 0 1 11.23 -1.66 q 4.395 0 7.324 1.465 t 3.32 5.176",
          "M 47.07 26.465 h -0.781 q -1.758 0 -2.148 1.074 v 0.293 q 0 0.879 1.855 1.562 t 4.395 1.172 l 4.492 0.781 2.148 0.195 q 1.953 0 2.637 -1.465 t 0.684 -2.734 q 0 -1.172 -0.391 -1.66 -1.465 -1.66 -3.613 -3.711 t -4.59 -3.906 -4.297 -2.93 q -1.953 -1.27 -3.027 -1.27 -0.977 0 -1.465 0.488 -1.172 0.977 -1.172 2.051 0 1.172 1.758 2.148 1.855 1.074 4.492 3.418 2.637 2.441 4.297 4.395 l -1.855 0.195 h -2.637 z",
          "m 34.863 39.941 -3.125 -9.277 q -1.562 -4.297 -2.637 -8.105 -0.488 -2.148 -1.367 -2.637 -0.781 -0.586 -3.125 -0.586 -4.785 -0.098 -4.785 1.367 0 0.586 0.879 1.27 l 2.148 1.855 0.684 0.879 5.859 17.383 2.051 5.664 7.617 20.41 q 3.809 9.18 6.25 14.453 0.488 1.074 0.488 1.758 t 0.391 1.855 q 0.488 0.977 1.367 2.246 1.074 1.27 2.344 2.344 1.27 0.977 2.539 0.977 l 0.391 -0.098 0.391 -0.098 q 1.465 -0.781 1.465 -2.832 0 -1.27 -0.293 -2.148 l -1.66 -3.809 q -2.051 -3.711 -4.688 -9.668 a 552.832 552.832 0 0 1 -11.035 -27.734 z"
        ],
        "strokes": [
          {
            "id": "や-1",
            "centerPath": "M 2.246 49.707 c 22.168 6.543 72.852 -32.52 80.762 -11.328 9.082 24.316 -29.102 16.895 -29.102 16.895",
            "source": "strokesvg"
          },
          {
            "id": "や-2",
            "centerPath": "m 38.672 9.18 22.07 15.527 -10.84 2.148",
            "source": "strokesvg"
          },
          {
            "id": "や-3",
            "centerPath": "m 18.75 13.379 33.887 72.656",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ゆ",
        "word": "ゆき",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ゆ.svg",
        "shadowPaths": [
          "M 55.273 28.711 a 56.25 56.25 0 0 0 -17.285 9.375 q -3.516 2.734 -6.055 5.176 -2.441 2.539 -4.59 5.859 t -4.102 6.738 l -0.195 -13.477 -0.195 -5.566 v -2.93 q 0 -2.637 -0.781 -3.711 -1.172 -0.977 -3.027 -1.465 l -1.172 -0.098 -0.977 -0.098 q -1.953 0 -2.051 0.488 l -0.098 0.195 v 0.098 q 0 0.586 0.684 1.172 0.684 0.488 0.977 1.367 l 0.391 1.367 0.098 1.367 v 3.32 a 327.148 327.148 0 0 0 0.977 22.656 q 0.488 5.859 1.172 10.938 0.586 5.078 1.367 8.008 0.293 1.172 0.977 1.855 0.781 0.488 1.758 0.488 1.367 0 2.441 -1.172 1.172 -0.977 1.172 -2.93 0 -0.391 -0.195 -0.879 l -0.293 -0.781 a 38.086 38.086 0 0 1 -1.367 -7.422 v -0.488 q 0 -2.539 1.855 -6.836 1.953 -4.395 5.762 -9.473 a 53.32 53.32 0 0 1 22.852 -16.895 34.082 34.082 0 0 1 12.598 -2.539 h 0.195 q 3.223 0 5.957 1.562 2.734 1.465 4.492 4.395 1.758 2.832 1.758 6.836 v 0.195 q 0 4.59 -1.953 8.789 a 34.961 34.961 0 0 1 -11.426 13.867 q -3.418 2.734 -6.348 4.199 -3.613 1.953 -6.445 1.855 -1.953 -0.195 -2.93 -2.051 -0.977 -1.758 -1.465 -4.004 -0.391 -1.27 -0.977 -2.637 t -1.562 -1.367 l -0.391 0.098 q -0.684 0.293 -0.977 1.562 -0.293 1.172 -0.293 2.441 v 0.879 l 0.098 0.586 q 0.195 1.855 0.781 4.199 0.684 2.148 2.246 4.004 1.465 1.66 4.102 2.148 3.125 0.391 5.859 -0.391 4.102 -1.074 8.984 -4.199 4.883 -3.223 9.277 -7.812 4.492 -4.688 7.227 -10.449 2.93 -5.957 2.93 -12.402 0 -4.688 -2.051 -8.594 -1.855 -4.102 -6.055 -6.738 t -10.84 -3.027 h -1.074 l -2.734 0.195 -2.637 0.293 q -3.223 0.586 -6.445 1.855",
          "M 54.102 12.988 q -1.27 0 -1.562 0.391 l -0.195 0.488 q 0 0.684 0.781 1.562 0.781 0.586 1.074 1.367 l 0.293 1.27 0.391 3.32 q 0.293 2.441 0.391 7.324 l 0.098 6.25 0.098 5.957 v 5.957 l -0.391 20.117 -0.879 7.129 a 50.781 50.781 0 0 1 -6.641 17.48 q -0.684 1.562 -0.684 2.441 l 0.195 0.586 0.684 0.195 q 0.977 0 2.832 -1.66 1.953 -1.465 4.102 -4.883 2.344 -3.223 4.004 -8.691 a 54.785 54.785 0 0 0 2.93 -17.871 q 0.391 -6.641 0.391 -17.773 v -5.566 l -0.098 -5.273 -0.195 -6.25 q -0.098 -5.371 -0.391 -7.91 -0.293 -2.637 -0.684 -3.516 -0.586 -0.977 -1.758 -1.562 l -2.246 -0.586 z"
        ],
        "strokes": [
          {
            "id": "ゆ-1",
            "centerPath": "M 13.477 22.461 c 11.719 8.496 -4.199 30.566 9.18 59.277 0 0 0 -42.578 37.598 -51.367 32.031 -7.422 25.488 29.59 9.57 40.625 -17.09 11.719 -21.68 -1.562 -21.68 -1.562",
            "source": "strokesvg"
          },
          {
            "id": "ゆ-2",
            "centerPath": "M 48.145 8.398 c 21.387 8.398 3.613 82.617 3.613 82.617",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "よ",
        "word": "よる",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/よ.svg",
        "shadowPaths": [
          "m 55.859 41.992 0.684 0.098 h 0.684 l 3.516 -0.293 12.695 -2.051 q 3.027 -0.684 4.59 -1.172 1.66 -0.586 1.66 -2.344 v -0.391 q -0.098 -1.27 -1.758 -1.953 -1.758 -0.781 -3.223 -0.781 l -0.586 0.098 -2.832 0.879 a 57.52 57.52 0 0 1 -10.449 2.148 l -4.199 0.391 h -0.977 c -2.637 -0.098 -4.883 3.711 0.195 5.371",
          "M 48.242 14.062 q -1.562 0 -1.855 0.781 l -0.098 0.195 v 0.098 q 0 0.684 0.781 1.27 0.879 0.488 1.367 1.465 l 0.293 1.074 0.195 1.074 0.391 12.598 0.293 11.23 0.781 26.758 c -0.098 2.344 -0.586 3.809 -1.172 5.371 q -1.562 3.809 -5.664 5.762 -4.004 1.758 -7.812 1.758 h -0.391 q -4.297 -0.098 -7.227 -1.27 -2.93 -1.27 -2.93 -3.516 c 0 -1.758 -5.859 -1.855 -5.859 0 q 0 2.344 1.66 4.785 1.758 2.344 4.98 4.102 3.418 1.562 8.496 1.562 h 0.488 q 7.422 -0.195 12.695 -2.734 5.371 -2.734 7.52 -8.203 a 25.098 25.098 0 0 0 1.465 -7.422 v -1.562 l -0.781 -27.246 -0.195 -5.371 -0.391 -16.895 q 0 -2.734 -0.586 -3.516 -0.586 -0.879 -2.93 -1.465 -2.051 -0.684 -3.516 -0.684",
          "M 50.391 70.605 a 68.555 68.555 0 0 0 -14.551 -1.953 q -8.203 0 -12.305 3.027 t -4.199 6.738 v 0.293 c -0.098 2.051 5.957 2.148 5.859 0 q 0.098 -1.855 1.562 -2.93 1.562 -0.977 3.711 -1.367 2.246 -0.391 4.297 -0.391 h 0.781 a 57.617 57.617 0 0 1 27.734 8.105 105.469 105.469 0 0 1 11.035 6.738 q 1.074 0.781 2.148 0.781 2.051 0 3.027 -2.246 l 0.195 -1.172 q 0 -1.855 -1.074 -2.637 a 71.777 71.777 0 0 0 -12.598 -7.324 72.461 72.461 0 0 0 -15.625 -5.664"
        ],
        "strokes": [
          {
            "id": "よ-1",
            "centerPath": "m 46.484 40.137 27.246 -2.93",
            "source": "strokesvg"
          },
          {
            "id": "よ-2",
            "centerPath": "M 44.727 8.008 c 7.129 5.664 21.289 76.27 -4.102 79.297 0 0 -20.215 1.855 -18.848 -9.961 2.051 -18.164 52.539 7.617 52.539 7.617",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ら",
        "word": "らっぱ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ら.svg",
        "shadowPaths": [
          "M 43.457 30.566 h 0.879 l 5.762 -0.391 q 3.516 -0.195 5.371 -0.586 1.465 -0.293 2.148 -1.66 0.684 -1.562 0.684 -2.832 0 -1.074 -0.488 -1.562 -1.953 -1.855 -5.664 -3.809 -3.809 -2.148 -8.008 -3.809 -4.199 -1.758 -7.422 -2.637 h -0.293 q -0.879 0 -2.051 0.879 -0.977 0.879 -0.977 1.855 0 1.074 1.367 1.66 l 7.324 3.711 q 3.711 1.953 6.543 3.906 l -6.152 2.734 q -1.562 0.684 -1.562 1.465 0 1.074 2.539 1.074",
          "M 70.703 66.699 v 0.098 q 0 3.711 -2.832 7.031 -2.734 3.32 -7.324 6.055 t -10.059 4.785 -10.742 3.32 q -4.492 0.977 -4.492 2.246 0 1.074 3.711 1.074 h 1.465 q 6.543 -0.586 13.184 -2.539 6.641 -1.758 12.207 -4.883 t 8.984 -7.422 q 3.418 -4.395 3.418 -10.059 0 -3.809 -2.539 -6.738 -2.344 -2.93 -6.543 -4.688 -4.102 -1.66 -9.277 -1.66 -7.031 0 -14.551 2.441 -7.422 2.539 -13.867 6.445 v -1.66 l 0.195 -8.301 q 0.293 -4.98 0.977 -9.863 0.781 -4.883 2.051 -8.203 0.293 -0.781 0.293 -1.465 0 -0.781 -0.391 -1.562 -0.391 -0.684 -1.562 -0.684 -1.562 0 -2.93 2.344 -1.27 2.246 -2.246 5.957 t -1.66 8.008 -0.879 8.496 -0.293 7.324 q 0 3.516 0.391 5.078 0.391 1.66 1.27 2.148 1.074 0.391 2.441 0.391 2.051 0 3.125 -0.879 2.344 -2.148 6.445 -4.395 4.199 -2.441 9.473 -4.102 5.273 -1.855 10.84 -1.953 h 0.293 q 4.883 0 8.105 2.148 3.32 2.051 3.32 5.664"
        ],
        "strokes": [
          {
            "id": "ら-1",
            "centerPath": "M 27.441 11.914 s 24.414 5.762 29.883 11.621 l -10.938 4.395",
            "source": "strokesvg"
          },
          {
            "id": "ら-2",
            "centerPath": "M 35.449 24.512 S 22.852 49.609 25.488 68.457 c 0 0 42.09 -28.809 48.535 -2.344 4.004 16.699 -33.203 24.414 -33.203 24.414",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "り",
        "word": "りす",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/り.svg",
        "shadowPaths": [
          "M 32.227 19.238 v 0.195 l -0.781 6.934 -0.879 9.668 q -0.391 5.176 -0.391 10.254 0 8.789 1.465 13.477 1.367 4.688 4.395 4.688 1.074 0 1.953 -0.586 0.977 -0.586 1.074 -1.562 l 0.781 -3.613 1.074 -4.785 1.27 -4.59 0.879 -2.93 q 0.586 -1.465 0.586 -2.344 0 -1.172 -0.781 -1.172 -0.488 0 -1.074 0.684 l -1.758 2.539 -3.613 5.664 -0.098 -2.051 v -2.441 q 0 -5.664 0.586 -12.891 0.684 -7.129 1.66 -14.062 l 0.098 -0.781 0.098 -0.879 q 0 -1.66 -1.66 -2.441 -1.562 -0.781 -3.32 -1.074 l -1.855 -0.293 q -1.172 0 -1.367 0.586 v 0.195 q 0 0.586 0.879 1.562 0.781 0.879 0.781 2.051",
          "M 58.301 14.355 v 0.293 q 0 0.684 0.977 1.465 t 1.27 2.051 l 0.781 11.621 q 0.293 5.371 0.293 10.449 0 4.297 -0.195 8.496 l -0.488 8.203 q -0.391 4.883 -2.441 9.766 -1.953 4.785 -4.98 9.082 -2.93 4.297 -6.348 7.715 -3.223 3.418 -6.348 5.371 -3.418 2.148 -3.418 3.223 0 0.391 0.684 0.391 1.562 0 4.688 -1.367 3.223 -1.367 7.227 -4.199 t 7.812 -7.031 6.348 -9.668 q 2.734 -5.566 3.32 -12.5 0.488 -4.688 0.586 -8.496 l 0.195 -7.52 q 0 -5.469 -0.391 -11.133 l -0.977 -13.281 q 0 -1.367 -0.977 -2.539 -0.879 -1.27 -5.273 -1.27 -2.051 0 -2.344 0.879"
        ],
        "strokes": [
          {
            "id": "り-1",
            "centerPath": "M 26.367 10.254 c 16.699 10.449 -2.539 37.012 6.055 51.758 l 8.887 -13.77",
            "source": "strokesvg"
          },
          {
            "id": "り-2",
            "centerPath": "M 54.297 9.277 c 23.73 16.895 7.227 77.637 -11.914 80.176",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "る",
        "word": "るすばん",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/る.svg",
        "shadowPaths": [
          "M 59.18 17.285 q -0.879 0.098 -1.758 0.391 -0.781 0.391 -1.953 0.586 l -2.93 0.684 -21.387 4.688 h -0.684 l -1.953 -0.098 -1.758 -0.098 -0.781 0.098 q -0.488 0.098 -0.488 0.684 0 0.879 0.879 2.148 0.977 1.27 2.148 2.246 1.367 0.977 2.344 0.977 0.879 0 1.66 -0.293 l 1.66 -0.488 a 203.906 203.906 0 0 0 13.281 -3.32 l 6.055 -1.465 -4.395 5.273 a 1712.598 1712.598 0 0 1 -26.465 31.055 q -2.441 2.734 -3.613 3.613 -1.367 1.27 -1.367 2.637 0 1.562 1.27 3.027 1.27 1.367 2.637 1.367 1.27 0 2.148 -1.172 4.688 -6.348 10.449 -10.156 a 42.48 42.48 0 0 1 21.777 -7.324 q 4.199 0 7.715 1.465 3.711 1.367 5.859 4.004 t 2.441 6.152 v 0.781 l 0.098 0.586 q 0 4.688 -2.539 8.105 -2.637 3.223 -6.543 5.371 -3.711 2.051 -7.52 3.027 c -2.344 0.586 -4.004 0.684 -6.641 1.074 l -1.953 0.195 h -1.66 q -5.469 0 -8.398 -1.172 -2.93 -1.367 -2.93 -2.539 c 0.098 -1.27 -5.957 -1.855 -5.957 -0.098 q 0 3.516 4.395 6.641 4.492 2.93 13.867 2.93 h 2.246 q 8.496 -0.293 15.332 -3.613 6.934 -3.223 11.035 -8.496 t 4.102 -11.426 l -0.098 -0.586 v -0.879 q -0.293 -5.176 -3.418 -8.887 -2.93 -3.809 -7.91 -5.762 -4.785 -2.148 -10.645 -2.148 a 41.602 41.602 0 0 0 -20.02 5.566 l 13.281 -15.332 12.695 -14.746 q 0.879 -0.781 0.781 -1.758 0 -0.879 -1.367 -2.246 -1.465 -1.172 -3.027 -1.27",
          "M 55.469 81.836 q -1.172 -4.004 -4.004 -6.445 -2.637 -2.637 -6.152 -3.809 -3.418 -1.27 -6.934 -1.27 -4.883 0 -7.715 2.93 a 8.691 8.691 0 0 0 -2.734 6.055 c 0 2.441 6.055 1.465 5.957 0.098 q 0 -1.367 1.074 -2.246 1.172 -1.074 3.223 -1.074 1.465 0 3.613 0.684 2.148 0.781 4.199 2.246 2.051 1.562 2.832 3.906 c 1.172 3.32 7.324 2.246 6.641 -1.074"
        ],
        "strokes": [
          {
            "id": "る-1",
            "centerPath": "M 19.141 25.488 c 20.312 2.441 25.488 -10.449 41.504 -7.422 -2.148 7.422 -32.617 29.004 -41.797 48.828 0 0 53.223 -36.035 56.152 -0.586 1.465 17.48 -19.629 20.605 -35.156 19.531 0 0 -13.281 -0.684 -8.008 -9.961 4.297 -7.52 18.75 3.906 18.75 3.906",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "れ",
        "word": "れもん",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/れ.svg",
        "shadowPaths": [
          "m 35.156 48.047 0.098 -1.172 1.172 -14.062 0.781 -7.227 a 78.711 78.711 0 0 1 1.562 -8.594 v -0.293 q 0.098 -1.367 -1.367 -2.246 -1.367 -0.684 -2.93 -1.172 -1.465 -0.391 -2.148 -0.391 -1.172 0 -1.562 0.781 l -0.098 0.195 q 0 0.586 0.488 1.172 0.586 0.586 0.781 1.172 0.293 0.684 0.293 1.66 v 0.684 q -0.488 2.344 -0.781 6.738 l -0.977 9.766 -0.488 6.25 -0.293 4.395 -0.977 17.285 -0.391 8.008 -0.098 7.031 v 2.148 l 0.098 1.953 v 0.586 l -0.195 2.148 -0.293 2.344 v 0.293 q 0 1.66 1.074 3.516 1.172 1.953 2.734 1.953 1.66 0 2.246 -1.27 0.586 -1.172 0.586 -2.637 l -0.195 -4.59 -0.098 -2.832 v -3.223 a 597.07 597.07 0 0 1 0.586 -21.973 z",
          "M 64.453 70.117 v 0.391 q 0 3.516 1.074 6.836 1.074 3.125 3.418 5.176 2.344 1.953 6.152 1.953 3.418 0 6.934 -1.562 a 32.52 32.52 0 0 0 11.328 -8.398 q 1.953 -2.246 1.953 -3.418 0 -0.391 -0.293 -0.684 l -0.879 -0.293 q -0.781 0 -1.465 0.391 l -1.27 0.781 -5.176 3.027 q -2.832 1.465 -5.664 2.539 -2.637 1.074 -4.883 1.074 l -1.953 -0.391 q -1.27 -0.391 -2.148 -2.051 -0.781 -1.66 -0.781 -5.176 0 -5.469 0.781 -11.035 l 1.66 -11.035 q 0.684 -5.664 0.879 -11.23 v -0.293 q 0 -4.492 -2.148 -7.422 a 7.031 7.031 0 0 0 -6.055 -2.93 q -5.078 0 -12.402 5.371 -7.227 5.273 -18.359 16.309 l -0.391 0.391 0.488 -1.562 a 53.809 53.809 0 0 1 4.492 -8.691 l 0.488 -0.977 0.195 -0.879 q 0 -0.977 -1.562 -2.148 -1.367 -1.172 -2.441 -1.367 l -5.957 2.246 a 119.922 119.922 0 0 1 -13.184 5.762 l -2.051 0.293 -1.367 -0.195 q -0.586 -0.195 -1.074 -0.195 -0.586 -0.098 -0.879 0.195 -0.195 0.195 -0.195 0.488 0 0.781 0.879 2.148 0.879 1.465 2.344 2.539 1.465 0.977 2.93 0.977 l 1.367 -0.293 3.027 -1.465 7.715 -4.004 1.758 -0.977 -2.051 5.371 a 85.938 85.938 0 0 1 -9.375 19.336 q -2.832 4.688 -5.664 8.691 l -4.688 7.031 -0.098 1.074 q 0 0.977 1.074 2.344 t 2.637 1.367 q 0.879 0 1.367 -0.684 l 0.977 -1.367 3.516 -5.859 4.688 -7.422 4.59 -7.227 6.055 -6.543 q 3.613 -4.785 8.008 -9.18 a 100.684 100.684 0 0 1 16.602 -13.281 q 3.516 -1.953 5.273 -1.953 1.66 0 2.344 1.27 0.879 1.172 0.781 3.418 0.098 2.148 -0.488 6.25 -0.391 4.102 -1.074 8.887 z"
        ],
        "strokes": [
          {
            "id": "れ-1",
            "centerPath": "m 32.715 6.348 0.781 81.25",
            "source": "strokesvg"
          },
          {
            "id": "れ-2",
            "centerPath": "M 5.273 41.699 c 18.262 3.125 19.434 -9.277 30.176 -8.008 -9.375 15.332 -9.18 23.047 -24.121 51.66 0 0 58.008 -79.688 58.105 -48.34 S 57.715 94.434 91.797 74.902",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ろ",
        "word": "ろうそく",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ろ.svg",
        "shadowPaths": [
          "M 37.598 90.918 h 1.172 q 4.004 -0.195 9.473 -1.172 5.371 -0.977 11.035 -2.832 5.762 -2.051 10.645 -5.176 4.883 -3.223 7.91 -7.91 t 3.027 -11.133 q 0 -5.762 -3.125 -9.375 -3.223 -3.613 -8.203 -5.273 -4.883 -1.758 -10.254 -1.758 -5.664 0 -11.426 1.953 -5.566 1.855 -10.84 5.176 l 12.305 -16.113 11.035 -14.648 1.465 -1.855 q 0.684 -0.879 0.684 -1.562 0 -1.367 -1.758 -2.344 t -2.832 -0.977 q -0.781 0 -2.246 0.586 -0.977 0.391 -3.711 1.074 l -6.152 1.562 -6.836 1.465 -5.762 1.172 -3.125 0.391 q -1.27 0 -2.246 -0.195 l -1.562 -0.195 h -0.195 q -0.488 0.195 -0.488 0.879 0 0.977 0.781 2.344 0.879 1.27 2.246 2.441 1.367 0.977 3.027 0.977 0.879 0 2.051 -0.293 l 10.449 -2.637 8.008 -2.148 q -6.738 9.57 -11.426 15.918 -4.688 6.445 -7.91 10.547 l -5.273 6.738 -4.004 4.492 -3.613 4.102 q -0.977 1.074 -0.977 2.734 0 1.953 0.684 2.832 0.781 0.781 1.562 0.977 l 0.977 0.195 q 1.66 0 2.734 -1.27 3.125 -4.004 7.227 -7.812 t 9.082 -6.641 10.742 -4.004 q 3.223 -0.684 6.348 -0.684 4.102 0 7.52 1.172 3.516 1.074 5.566 3.418 2.246 2.441 2.246 6.348 0 5.176 -2.832 9.18 -2.832 3.906 -7.227 6.738 -4.395 2.734 -9.277 4.688 -4.785 1.855 -9.082 3.125 l -6.738 1.562 q -4.688 0.977 -4.688 2.246 0 0.977 3.809 0.977"
        ],
        "strokes": [
          {
            "id": "ろ-1",
            "centerPath": "M 19.141 23.926 c 18.262 2.734 31.641 -11.23 41.504 -6.836 -10.254 17.188 -30.957 28.809 -41.309 52.344 0 0 42.578 -36.23 54.102 -14.062 14.551 27.832 -33.789 33.984 -33.789 33.984",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "わ",
        "word": "わに",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/わ.svg",
        "shadowPaths": [
          "M 34.082 49.414 v -0.879 l 1.172 -15.625 a 97.852 97.852 0 0 1 2.344 -15.82 v -0.391 q 0 -1.27 -1.27 -2.246 -1.27 -0.879 -3.027 -1.465 -1.562 -0.488 -2.734 -0.488 -1.27 0 -1.465 0.586 l -0.098 0.488 q 0 0.586 0.391 1.172 l 0.781 1.074 0.391 1.074 q 0.293 0.488 0.195 1.172 v 0.391 a 300.098 300.098 0 0 0 -1.367 17.188 l -0.391 6.25 -0.391 7.422 -0.684 15.332 -0.195 6.543 v 10.156 l 0.195 3.223 v 0.293 l -0.195 1.27 -0.098 1.27 v 0.293 q 0.195 2.246 1.465 4.004 1.465 1.855 2.734 1.855 1.66 0 2.051 -1.27 0.488 -1.367 0.488 -2.539 v -0.684 q 0.098 -1.27 -0.195 -2.344 l -0.195 -1.66 a 110.938 110.938 0 0 1 -0.488 -14.941 v -5.859 l 0.195 -6.055 z",
          "M 50 89.941 v 0.293 q 0.098 0.586 1.27 0.684 a 60.742 60.742 0 0 0 9.57 -2.93 q 4.102 -1.562 8.691 -4.102 4.59 -2.637 8.691 -6.25 4.102 -3.809 6.543 -8.789 2.637 -5.176 2.637 -11.719 0 -7.812 -3.223 -12.598 -3.125 -4.98 -8.398 -7.324 -5.176 -2.539 -11.523 -2.637 h -0.586 q -4.98 0 -10.449 2.148 a 51.953 51.953 0 0 0 -19.141 12.695 v -0.879 a 88.77 88.77 0 0 1 6.055 -11.426 v -0.488 q 0 -1.465 -1.66 -2.539 -1.465 -1.172 -2.832 -1.172 h -0.391 l -5.859 2.734 a 126.27 126.27 0 0 1 -13.281 5.176 l -1.172 0.195 h -1.27 l -0.977 -0.098 h -0.684 q -1.172 0 -1.172 0.977 v 0.293 q 0 0.586 0.879 1.855 0.781 1.172 2.051 2.148 a 5.078 5.078 0 0 0 4.395 0.781 l 3.418 -1.367 7.422 -3.711 3.32 -1.562 -3.711 8.984 q -1.172 2.93 -4.98 10.547 -4.004 7.617 -12.793 19.238 -0.586 0.781 -0.586 1.562 0 1.562 1.172 3.027 t 2.539 1.367 q 1.367 0 2.539 -1.758 a 346.484 346.484 0 0 1 11.426 -18.652 l 5.762 -6.445 q 5.859 -7.715 12.891 -12.402 7.227 -4.883 15.625 -5.469 h 0.879 l 0.781 -0.098 q 4.199 0 7.91 1.562 3.711 1.465 6.055 5.078 2.246 3.613 2.246 9.863 t -2.832 11.133 q -2.93 4.883 -7.227 8.691 -4.395 3.809 -8.984 6.543 l -10.156 5.566 q -0.879 0.586 -0.879 1.27"
        ],
        "strokes": [
          {
            "id": "わ-1",
            "centerPath": "m 32.129 5.762 0.977 82.227",
            "source": "strokesvg"
          },
          {
            "id": "わ-2",
            "centerPath": "M 4.297 42.871 c 12.988 1.855 22.461 -8.789 31.738 -10.352 -13.672 20.41 -12.012 32.031 -24.414 51.855 0 0 40.625 -64.355 65.137 -40.82 24.512 23.438 -21.289 44.629 -21.289 44.629",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "を",
        "word": "を",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/を.svg",
        "shadowPaths": [
          "m 43.652 29.199 10.84 -1.367 q 4.102 -0.586 6.055 -1.172 1.953 -0.488 2.539 -1.074 t 0.586 -1.465 q -0.098 -1.172 -2.051 -2.148 t -3.418 -0.977 l -0.781 0.098 -1.562 0.586 -1.172 0.391 q -0.879 0.195 -3.32 0.488 l -5.273 0.879 -6.641 0.879 -10.059 1.172 q -4.395 0.586 -7.812 0.488 -0.781 0 -1.66 -0.391 t -1.562 -0.391 l -0.684 0.195 q -0.293 0.293 -0.293 0.684 0 1.66 2.441 4.297 0.781 0.879 1.465 1.074 l 1.758 0.098 6.055 -0.586 7.91 -0.879 z",
          "M 54.883 53.809 c 0 -3.906 -1.562 -6.543 -3.809 -8.105 q -3.223 -2.344 -7.031 -2.441 h -0.391 q -2.441 0 -5.078 1.27 -2.441 1.074 -5.078 2.734 a 126.465 126.465 0 0 0 10.156 -18.066 c 1.074 -2.148 1.562 -3.711 2.441 -5.762 a 36.719 36.719 0 0 0 1.953 -5.859 q 0.488 -1.562 0.488 -2.441 0 -1.465 -1.367 -2.246 -1.172 -0.879 -2.637 -1.27 t -2.246 -0.391 q -0.781 0 -0.977 0.195 l -0.098 0.586 0.293 0.879 0.391 0.879 0.195 1.172 -0.098 0.293 v 0.293 q -0.391 2.051 -1.074 4.297 l -1.465 4.492 q -0.977 2.637 -2.441 5.762 a 99.902 99.902 0 0 1 -15.43 23.535 q -1.172 1.367 -1.172 3.223 l 0.293 1.367 q 0.391 0.879 1.074 1.66 0.684 0.879 1.66 0.879 0.586 0 1.367 -0.586 0.684 -0.391 1.074 -1.172 1.367 -1.953 4.297 -4.297 3.125 -2.344 6.836 -4.102 t 6.641 -1.855 h 0.195 q 2.246 0 3.613 2.246 1.465 2.246 1.465 5.469 v 0.586 l -0.195 6.641 -0.098 3.613 v 2.148 l -0.195 1.562 q -0.195 0.879 -0.195 1.465 0 0.684 0.391 1.855 0.488 1.172 1.27 2.148 0.879 1.074 1.953 1.074 h 0.293 q 2.93 -0.293 2.93 -3.711 l -0.098 -4.883 v -8.984 Z",
          "m 78.809 49.316 3.711 -1.465 q 1.66 -0.684 1.66 -2.441 t -1.074 -3.516 q -0.977 -1.758 -2.051 -1.758 l -0.391 0.098 q -0.293 0 -0.684 0.586 l -0.391 0.684 q -0.586 0.684 -1.465 1.172 l -11.719 5.469 a 261.621 261.621 0 0 0 -17.48 8.887 q -4.688 2.539 -8.594 5.957 t -6.348 7.129 -2.344 7.129 q 0 4.59 2.246 7.031 2.246 2.539 5.762 3.711 a 54.59 54.59 0 0 0 11.621 2.539 67.773 67.773 0 0 0 14.16 -0.293 q 4.395 -0.391 7.715 -1.172 1.172 -0.098 2.051 -0.977 0.879 -0.684 0.879 -1.66 l -0.098 -0.586 q -0.391 -1.758 -2.051 -2.539 t -2.539 -0.781 l -0.586 0.098 -0.586 0.195 q -2.246 0.977 -6.152 1.367 -3.809 0.293 -7.715 0.293 h -2.051 l -1.758 -0.098 q -3.809 -0.195 -7.227 -0.879 -3.418 -0.781 -5.566 -2.344 a 5.078 5.078 0 0 1 -2.148 -4.199 q 0.195 -3.125 3.32 -6.543 a 46.484 46.484 0 0 1 14.062 -10.449 171.191 171.191 0 0 1 14.551 -6.738 z"
        ],
        "strokes": [
          {
            "id": "を-1",
            "centerPath": "m 10.938 25.586 47.168 0.391",
            "source": "strokesvg"
          },
          {
            "id": "を-2",
            "centerPath": "M 38.086 4.395 c 18.066 12.012 -11.914 37.695 -17.676 52.344 26.27 -16.992 34.961 -12.793 33.301 15.43",
            "source": "strokesvg"
          },
          {
            "id": "を-3",
            "centerPath": "M 82.324 33.789 c 0.781 23.926 -46.68 23.047 -47.461 42.48 -0.488 11.719 11.719 13.574 35.547 10.84",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ん",
        "word": "ん",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/hiragana/ん.svg",
        "shadowPaths": [
          "M 41.309 57.91 q 0 3.125 0.488 7.031 0.488 3.711 1.562 7.715 1.27 3.906 3.223 7.227 2.148 3.32 5.273 5.371 3.32 2.051 7.91 2.051 5.762 0 10.547 -2.832 t 8.594 -7.324 6.348 -9.473 q 2.637 -4.98 4.004 -9.277 1.465 -4.297 1.465 -6.836 0 -1.27 -0.488 -1.27 -0.977 0 -2.93 4.199 -0.781 1.855 -2.637 4.98 -1.758 3.223 -4.395 6.934 -2.539 3.711 -5.859 7.031 -3.223 3.223 -6.934 5.469 -3.711 2.051 -7.715 2.051 -3.711 0 -6.055 -2.051 -2.441 -2.246 -3.809 -5.469 -1.367 -3.418 -2.051 -7.129 -0.488 -3.711 -0.488 -6.836 v -2.051 l 0.195 -1.855 0.098 -0.586 0.391 -0.586 0.098 -0.391 0.098 -0.391 q 0 -1.27 -1.562 -2.539 -1.465 -1.27 -3.223 -1.27 l -1.27 0.195 q -0.586 0.195 -1.074 0.684 l -3.516 3.711 -4.785 5.078 -4.395 4.492 4.297 -9.277 q 2.344 -5.176 4.98 -10.449 l 4.785 -9.961 3.809 -7.812 1.953 -3.906 q 0.488 -0.781 0.684 -1.562 0.293 -0.781 0.293 -1.465 0 -1.562 -1.465 -2.539 -1.367 -0.977 -2.93 -1.465 t -2.246 -0.488 q -0.781 0 -1.172 0.488 -0.195 0.195 -0.195 0.488 0 0.586 0.488 1.367 t 0.488 1.758 q 0 0.293 -1.367 3.613 l -3.809 8.887 -5.078 11.621 -5.664 12.598 -5.176 11.523 -3.809 8.398 -1.367 3.32 -0.781 1.27 q -0.391 0.391 -0.781 1.27 -0.293 0.684 -0.293 1.562 0 1.465 0.879 3.32 0.879 1.758 1.953 1.758 t 2.246 -0.879 1.367 -2.051 l 0.879 -2.344 1.465 -3.418 1.758 -2.832 q 2.246 -3.223 5.469 -6.934 l 6.348 -7.031 q 3.027 -3.223 4.883 -4.883"
        ],
        "strokes": [
          {
            "id": "ん-1",
            "centerPath": "M 41.406 8.496 c 12.207 19.531 -23.242 43.75 -26.367 77.637 16.406 -19.434 15.625 -33.887 30.469 -36.816 0 0 -4.883 30.859 9.961 34.473 17.285 4.199 33.301 -28.223 33.301 -28.223",
            "source": "strokesvg"
          }
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
    path: stroke.centerPath || stroke.path
  }))
}));


// Kana practice data
const katakanaData = {
  "version": 1,
  "kind": "strokesvg-katakana",
  "viewBox": "0 0 100 100",
  "source": "https://github.com/zhengkyl/strokesvg",
  "groups": {
    "basicKatakana": [
      {
        "char": "ア",
        "word": "アイス",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ア.svg",
        "shadowPaths": [
          "M 79.59 19.824 h -0.488 l -30.664 3.32 a 880.176 880.176 0 0 0 -26.367 3.32 h -1.074 l -0.586 -0.195 -1.367 -0.391 q -0.781 -0.293 -1.66 -0.293 l -0.684 0.098 q -0.391 0.098 -0.391 0.684 l 0.684 2.051 q 0.879 1.562 2.148 3.125 1.172 1.465 2.832 1.465 l 2.344 -0.293 q 8.398 -1.465 16.895 -2.637 l 16.602 -2.051 14.453 -1.855 a 214.062 214.062 0 0 1 -18.75 16.016 c -5.469 4.102 -8.008 9.57 -1.66 6.25 l 7.617 -4.98 a 294.824 294.824 0 0 0 21.094 -15.625 l 1.172 -0.684 0.977 -0.684 q 1.66 -0.879 1.66 -2.246 0 -0.586 -0.586 -1.66 t -1.66 -1.855 -2.539 -0.879",
          "m 53.516 42.188 0.293 -1.855 q 0 -1.562 -1.465 -2.344 -1.562 -0.879 -3.418 -1.172 -1.855 -0.391 -2.93 -0.391 -0.684 0 -1.27 0.195 t -0.488 0.781 q 0 0.684 0.488 1.27 0.586 0.586 0.977 1.758 l 0.195 0.977 0.098 1.074 v 0.391 q -1.465 7.617 -4.785 14.941 t -7.324 13.477 a 116.602 116.602 0 0 1 -14.453 18.652 q -0.488 0.684 -0.488 1.562 l 0.098 0.684 q 0.098 0.391 0.977 0.391 1.074 0 4.004 -2.148 t 6.641 -6.25 a 104.98 104.98 0 0 0 15.332 -21.68 q 3.711 -6.738 5.859 -14.062 z"
        ],
        "strokes": [
          {
            "id": "ア-1",
            "centerPath": "M 10.059 23.926 c 14.258 10.449 42.09 -3.027 72.363 -5.371 6.055 -0.391 -7.324 10.156 -29.785 26.758",
            "source": "strokesvg"
          },
          {
            "id": "ア-2",
            "centerPath": "M 41.797 30.762 c 17.676 11.719 -4.883 39.746 -18.262 57.617",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "イ",
        "word": "イス",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/イ.svg",
        "shadowPaths": [
          "M 56.641 43.164 a 135.742 135.742 0 0 0 19.531 -18.75 q 1.855 -2.344 1.855 -3.613 0 -1.367 -1.758 -2.637 -1.562 -1.172 -3.516 -1.855 -1.855 -0.781 -2.637 -0.781 -0.879 0 -1.172 0.488 -0.293 0.195 -0.293 0.586 0.098 0.488 0.391 0.977 0.293 0.586 0.293 1.367 v 0.293 q -0.293 1.66 -2.93 5.566 -2.637 3.809 -8.789 9.473 -6.152 5.762 -16.699 12.988 -10.547 7.324 -26.465 15.625 -2.832 1.465 -2.832 2.832 l 0.098 0.391 q 0.293 0.391 1.27 0.391 1.172 0 4.98 -1.367 a 117.871 117.871 0 0 0 21.289 -10.449 q 6.543 -3.613 13.086 -8.301 z",
          "M 51.66 87.305 v 0.293 l 0.488 1.758 q 0.391 1.66 1.27 3.027 0.879 1.562 2.344 1.562 l 0.781 -0.098 q 1.074 -0.293 1.66 -2.051 0.684 -1.758 0.684 -3.418 V 77.93 a 387.695 387.695 0 0 0 0.195 -18.066 l 0.098 -7.227 v -3.711 q 0 -2.637 -0.293 -3.613 t -2.246 -2.148 c -4.688 -2.539 -5.078 1.074 -4.297 3.223 l 0.195 0.879 v 3.906 l -0.098 6.641 -0.195 16.699 v 9.961 q 0 0.488 -0.391 1.172 z"
        ],
        "strokes": [
          {
            "id": "イ-1",
            "centerPath": "M 70.41 8.887 c 14.648 26.367 -53.516 55.176 -53.516 55.176",
            "source": "strokesvg"
          },
          {
            "id": "イ-2",
            "centerPath": "m 52.734 35.84 3.125 52.539",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ウ",
        "word": "ウサギ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ウ.svg",
        "shadowPaths": [
          "m 47.559 17.48 0.098 15.332 c 0.293 3.32 6.445 3.32 6.445 -0.586 v -5.078 l 0.098 -4.297 v -6.445 l -0.293 -1.758 q -0.293 -1.074 -1.66 -1.66 -1.465 -0.684 -4.785 -0.684 -1.758 0 -1.953 0.488 v 0.195 q 0 0.586 0.586 1.074 0.684 0.586 0.977 1.465 0.293 0.391 0.293 0.879 0.195 0.391 0.195 1.074",
          "M 27.832 34.57 q -0.879 -2.441 -2.051 -4.883 -1.074 -2.344 -2.246 -2.344 -0.586 0 -1.562 0.586 -0.293 0.098 -0.488 0.684 l -0.098 0.977 0.293 2.148 0.391 1.66 1.172 4.98 0.781 6.055 0.781 8.496 v 0.293 l -0.098 1.074 -0.098 1.074 v 0.293 l 0.098 0.391 q 0.293 1.66 1.562 3.223 1.367 1.562 2.832 1.562 h 0.293 l 0.195 -0.098 q 1.172 -0.293 1.562 -1.367 0.586 -1.074 0.586 -3.418 l -0.293 -2.93 a 79.883 79.883 0 0 0 -2.051 -12.402 z",
          "m 47.656 32.812 -19.824 1.758 c -4.004 0.195 -1.953 6.25 1.562 6.055 l 4.199 -0.293 a 502.148 502.148 0 0 1 19.727 -2.051 l 20.996 -1.855 q -3.613 11.035 -9.082 19.922 a 103.516 103.516 0 0 1 -23.535 26.66 q -5.566 4.492 -9.473 7.324 -2.832 1.855 -2.832 2.637 l 0.293 0.586 q 0.293 0.586 1.172 0.586 1.27 0 4.785 -1.758 3.418 -1.562 8.203 -4.785 a 88.77 88.77 0 0 0 21.094 -19.336 92.773 92.773 0 0 0 17.969 -33.398 l 0.293 -0.488 0.098 -0.586 q 0 -0.977 -1.367 -2.344 a 4.688 4.688 0 0 0 -3.613 -1.562 184.57 184.57 0 0 0 -12.793 1.172 l -11.426 1.172 z"
        ],
        "strokes": [
          {
            "id": "ウ-1",
            "centerPath": "m 46.094 5.762 4.395 23.438",
            "source": "strokesvg"
          },
          {
            "id": "ウ-2",
            "centerPath": "m 21.289 21.094 7.617 33.789",
            "source": "strokesvg"
          },
          {
            "id": "ウ-3",
            "centerPath": "m 19.238 38.379 62.598 -9.473 C 64.16 77.441 34.766 91.504 34.766 91.504",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "エ",
        "word": "エビ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/エ.svg",
        "shadowPaths": [
          "m 52.832 37.012 19.629 -3.027 q 2.441 -0.586 3.125 -1.172 0.781 -0.586 0.781 -1.465 0 -1.074 -1.562 -2.441 a 5.762 5.762 0 0 0 -4.102 -1.367 q -1.172 0 -1.66 0.391 l -1.074 0.488 q -0.977 0.391 -4.102 0.977 l -7.324 1.172 a 779.395 779.395 0 0 1 -27.637 3.223 h -0.684 l -0.781 -0.098 -3.418 -0.684 -0.586 0.098 q -0.586 0.293 -0.586 0.879 0 0.488 0.781 2.051 0.781 1.367 2.148 2.637 1.465 1.367 3.125 1.367 l 2.637 -0.195 14.258 -1.855 z",
          "m 53.125 69.043 0.293 -22.656 v -2.539 l 0.098 -3.711 v -1.074 l -0.098 -0.977 -0.586 -1.074 c -4.199 -4.102 -8.887 -0.195 -7.031 0.977 q 0.879 0.684 0.879 2.148 v 3.516 l 0.098 2.539 v 10.645 l 0.098 12.695 c 0 3.809 6.152 5.371 6.25 -0.488",
          "M 89.453 71.875 v -0.391 q 0 -0.684 -0.977 -1.758 -0.977 -1.172 -2.246 -1.953 t -2.051 -0.781 h -0.488 l -1.465 0.195 -1.465 0.293 -8.984 0.293 -18.652 1.27 -6.25 0.488 a 865.527 865.527 0 0 0 -28.711 3.027 h -0.391 a 11.426 11.426 0 0 1 -3.711 -0.586 l -0.879 -0.195 -0.684 0.098 q -0.293 0.195 -0.293 0.879 0 0.879 0.684 2.246 0.684 1.465 1.855 2.734 1.074 1.172 2.246 1.367 l 0.586 0.098 1.367 -0.098 1.66 -0.293 q 5.469 -0.879 12.891 -1.562 a 417.48 417.48 0 0 1 34.18 -2.734 q 9.18 -0.586 18.262 -0.586 1.66 0 2.539 -0.293 0.977 -0.391 0.977 -1.758"
        ],
        "strokes": [
          {
            "id": "エ-1",
            "centerPath": "m 16.406 34.18 54.395 -0.879",
            "source": "strokesvg"
          },
          {
            "id": "エ-2",
            "centerPath": "m 46.973 28.906 3.125 37.988",
            "source": "strokesvg"
          },
          {
            "id": "エ-3",
            "centerPath": "m 5.762 73.242 12.207 -0.098 65.625 -0.488",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "オ",
        "word": "オレンジ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/オ.svg",
        "shadowPaths": [
          "M 65.43 40.43 q 4.102 -0.488 8.496 -0.781 l 9.18 -0.879 q 1.758 -0.098 2.734 -0.684 0.879 -0.488 0.977 -1.855 v -0.195 q 0 -0.977 -0.977 -1.758 -1.074 -0.879 -2.344 -1.465 -1.172 -0.684 -1.953 -0.684 -1.074 0 -1.953 0.488 -0.879 0.391 -1.758 0.391 l -12.598 1.27 -6.445 0.781 q -8.594 1.074 -16.699 2.344 l -17.48 2.93 h -0.488 l -2.539 -0.195 -1.758 -0.293 -0.586 0.098 q -0.391 0.293 -0.391 0.684 0 0.684 0.684 1.758 l 1.367 2.051 q 0.977 1.172 1.758 1.562 0.977 0.391 1.953 0.391 l 1.465 -0.098 1.758 -0.293 a 867.773 867.773 0 0 1 27.441 -4.395 z",
          "m 59.18 47.754 1.172 36.328 -7.129 -3.125 -7.617 -3.711 -0.684 -0.098 q -1.367 0 -1.367 1.27 0 0.977 1.074 1.855 l 7.129 5.957 6.836 4.785 q 3.125 1.855 4.492 1.855 1.66 0 2.832 -1.562 1.074 -1.465 1.074 -3.223 l -1.562 -47.656 -0.195 -6.152 -0.488 -13.281 v -2.539 q 0 -1.465 -1.66 -2.148 -1.465 -0.879 -3.223 -0.977 l -2.148 -0.195 q -1.465 0 -1.66 0.684 v 0.098 q 0 0.586 0.488 1.172 l 0.684 0.879 q 0.586 0.684 0.781 1.562 0.293 0.586 0.293 1.367 l 0.195 4.297 0.293 9.863 z",
          "M 59.18 47.754 c 6.836 -9.277 1.465 -14.062 -3.906 -6.152 q -4.59 7.52 -10.938 14.453 a 153.613 153.613 0 0 1 -26.953 23.633 l -1.562 1.465 q -0.879 0.879 -0.879 1.465 l 0.098 0.391 q 0.293 0.391 0.977 0.391 1.66 0 6.348 -2.637 a 113.77 113.77 0 0 0 24.023 -18.652 q 6.836 -6.445 12.793 -14.355"
        ],
        "strokes": [
          {
            "id": "オ-1",
            "centerPath": "m 12.305 41.016 68.75 -3.32",
            "source": "strokesvg"
          },
          {
            "id": "オ-2",
            "centerPath": "M 51.855 10.742 c 15.82 3.223 13.379 70.801 15.527 81.445 -15.332 -8.887 -18.75 -11.523 -18.75 -11.523",
            "source": "strokesvg"
          },
          {
            "id": "オ-3",
            "centerPath": "M 66.309 33.496 20.41 80.566",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "カ",
        "word": "カメラ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/カ.svg",
        "shadowPaths": [
          "M 75.879 33.008 h -0.391 l -9.277 1.27 -12.988 1.855 -7.422 0.977 -19.824 2.637 -2.93 -0.293 -2.734 -0.586 h -0.391 q -0.879 0.098 -0.781 1.074 l 0.391 1.562 q 0.391 1.465 1.758 3.125 1.27 1.465 3.613 1.465 h 0.879 l 2.246 -0.293 5.273 -0.781 10.254 -1.562 7.422 -1.074 21.68 -3.027 a 277.148 277.148 0 0 1 -6.152 27.344 q -1.855 6.152 -3.906 10.742 -2.051 4.395 -4.199 6.055 l -7.129 -3.027 q -3.711 -1.66 -7.422 -3.613 -1.465 -0.684 -2.539 -0.684 -0.684 0 -0.977 0.391 l -0.195 0.391 v 0.488 q 0 0.293 1.465 1.953 a 160.938 160.938 0 0 0 8.984 7.52 l 4.785 3.223 q 2.246 1.27 3.223 1.27 1.074 0 2.051 -0.684 l 1.855 -1.66 q 2.93 -2.637 5.469 -7.617 2.539 -5.078 4.492 -11.621 2.246 -6.738 3.809 -14.453 1.758 -7.617 3.125 -15.625 0.195 -0.879 0.586 -1.562 0.586 -0.781 0.586 -1.562 0.098 -1.172 -1.66 -2.344 -1.562 -1.27 -3.027 -1.27",
          "M 53.223 36.133 a 129.492 129.492 0 0 0 4.98 -19.238 q 0 -1.758 -1.66 -2.637 -1.66 -0.781 -3.418 -1.074 l -2.344 -0.293 q -1.172 0 -1.465 0.488 l -0.098 0.293 q 0 0.586 0.488 1.27 a 4.98 4.98 0 0 1 0.977 2.832 l -1.172 5.859 q -1.172 5.469 -3.711 13.477 l -2.246 6.348 q -4.492 12.598 -11.426 24.023 a 129.785 129.785 0 0 1 -18.359 24.023 q -0.488 1.074 -0.488 1.66 0.098 0.781 0.684 0.781 1.367 0 5.469 -3.32 t 9.668 -9.863 q 5.566 -6.445 11.426 -16.016 5.762 -9.766 10.449 -22.363 z"
        ],
        "strokes": [
          {
            "id": "カ-1",
            "centerPath": "M 12.695 38.867 c 13.77 6.738 36.816 -2.832 67.578 -6.934 0 0 -8.691 57.812 -21.875 58.008 -2.734 0.098 -13.77 -9.375 -13.77 -9.375",
            "source": "strokesvg"
          },
          {
            "id": "カ-2",
            "centerPath": "M 43.848 9.375 c 26.172 7.52 -7.91 66.113 -26.172 80.273",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "キ",
        "word": "キウイ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/キ.svg",
        "shadowPaths": [
          "m 52.734 40.527 19.043 -4.395 q 2.246 -0.781 2.832 -1.367 t 0.586 -1.367 v -0.195 q -0.098 -1.074 -1.172 -1.66 -0.977 -0.781 -2.441 -1.074 -1.367 -0.293 -2.246 -0.391 l -0.293 0.098 h -0.391 a 81.445 81.445 0 0 1 -17.188 4.59 l -6.25 1.367 -20.41 4.004 -2.344 0.293 -1.465 -0.195 q -0.781 -0.293 -1.172 -0.195 l -0.586 0.098 q -0.586 0 -0.586 0.879 0 0.586 0.879 1.758 0.781 1.172 2.051 2.246 1.27 0.977 2.734 0.977 l 3.027 -0.391 a 294.141 294.141 0 0 0 19.043 -3.809 z",
          "m 50.586 60.84 6.25 -1.367 a 365.137 365.137 0 0 1 27.148 -4.492 l 1.367 -0.293 q 1.855 -0.586 1.855 -2.148 v -0.586 q -0.293 -1.074 -2.246 -2.148 -1.758 -1.172 -3.125 -1.172 -0.977 0 -1.855 0.488 l -1.562 0.488 a 318.066 318.066 0 0 0 -22.852 4.199 l -6.25 1.27 a 969.727 969.727 0 0 0 -29.004 6.641 7.52 7.52 0 0 1 -2.832 0.098 q -0.684 -0.195 -1.27 -0.195 l -0.684 0.098 q -0.488 0.293 -0.488 0.684 0 0.781 0.977 1.953 1.074 1.367 2.246 2.441 1.465 1.074 2.637 1.074 1.465 0 3.32 -0.586 a 857.617 857.617 0 0 1 26.367 -6.445",
          "m 50.586 60.84 5.762 26.465 0.098 1.758 q 0 0.879 0.293 1.66 l 0.586 1.074 q 0.586 0.977 1.465 1.758 0.879 0.879 2.051 0.879 l 1.367 -0.781 q 1.074 -0.586 1.074 -3.32 l -0.098 -0.586 -0.293 -1.855 -2.93 -13.574 -3.125 -14.844 -1.27 -5.664 -2.832 -13.281 -1.27 -5.762 q -0.586 -3.516 -1.66 -7.617 l -1.562 -7.715 q -0.488 -1.66 -1.66 -2.539 t -4.492 -0.879 q -1.172 0 -2.051 0.293 t -0.977 0.781 v 0.195 q 0 0.781 0.684 1.074 0.586 0.391 1.367 1.562 t 1.074 2.246 l 3.027 13.965 1.172 5.664 2.93 13.281 z"
        ],
        "strokes": [
          {
            "id": "キ-1",
            "centerPath": "m 12.109 41.211 57.91 -5.371",
            "source": "strokesvg"
          },
          {
            "id": "キ-2",
            "centerPath": "m 8.691 63.867 73.145 -9.57",
            "source": "strokesvg"
          },
          {
            "id": "キ-3",
            "centerPath": "m 39.16 9.57 22.852 79.297",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ク",
        "word": "クッキー",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ク.svg",
        "shadowPaths": [
          "M 52.148 24.219 c 1.758 -2.148 3.418 -4.98 3.418 -5.859 q -0.098 -0.781 -1.465 -1.953 a 12.891 12.891 0 0 0 -4.98 -2.93 l -1.27 -0.293 q -0.586 -0.098 -0.781 0.195 -0.488 0.391 -0.488 0.977 t 0.391 1.367 q 0.488 0.684 0.488 1.562 v 0.098 a 7.422 7.422 0 0 1 -0.781 2.637 121.582 121.582 0 0 1 -24.902 28.418 l -1.27 1.27 q -0.586 0.684 -0.586 1.27 0 0.488 0.293 0.781 0.293 0.391 1.172 0.391 0.977 0 2.344 -0.879 l 6.543 -4.883 q 4.59 -3.613 10.449 -9.082 5.859 -5.664 11.426 -13.086",
          "M 46.973 32.812 c 4.883 -0.391 6.934 -0.781 11.133 -1.27 q 4.785 -0.586 11.719 -1.27 c -7.422 15.234 -15.527 28.125 -30.469 40.918 -4.297 3.613 -12.695 9.961 -15.625 11.719 q -3.027 1.562 -3.027 2.832 l 0.098 0.391 0.195 0.293 q 0.293 0.293 0.977 0.293 2.148 0 7.422 -2.832 5.371 -2.539 12.402 -8.105 a 113.184 113.184 0 0 0 35.938 -45.41 l 0.879 -0.977 q 0.879 -0.586 0.879 -1.66 0 -1.465 -1.953 -2.637 -1.758 -1.074 -3.125 -1.074 a 56.055 56.055 0 0 0 -6.934 0.781 l -11.719 1.367 -4.102 0.488 c -1.953 0.098 -2.246 -0.195 -4.004 0 -4.102 0.586 -5.566 6.543 -0.684 6.152"
        ],
        "strokes": [
          {
            "id": "ク-1",
            "centerPath": "M 48.047 6.836 c 13.184 13.281 -23.535 41.309 -23.535 41.309",
            "source": "strokesvg"
          },
          {
            "id": "ク-2",
            "centerPath": "m 36.816 29.297 37.695 -6.152 c 7.91 16.699 -48.73 61.426 -48.73 61.426",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ケ",
        "word": "ケーキ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ケ.svg",
        "shadowPaths": [
          "M 34.082 36.621 a 62.109 62.109 0 0 0 8.496 -17.578 q 0 -1.367 -1.465 -2.246 t -3.223 -1.367 -2.734 -0.488 -1.172 0.391 l -0.098 0.488 0.293 1.172 q 0.684 1.074 0.586 2.344 0 1.758 -2.148 7.031 t -6.641 12.305 q -4.395 7.227 -11.621 14.648 -1.953 1.953 -1.953 3.418 0 0.586 0.684 0.684 1.66 0 4.688 -2.441 a 69.727 69.727 0 0 0 13.379 -14.258 z",
          "m 63.867 38.77 13.281 -1.367 6.738 -0.977 q 2.051 -0.488 2.637 -1.074 0.488 -0.391 0.488 -1.27 0 -1.367 -1.953 -2.637 -1.855 -1.367 -3.516 -1.367 -0.977 0 -1.465 0.293 l -1.074 0.391 -5.566 1.074 -18.555 2.441 -20.801 2.344 c -3.613 0.195 -3.809 2.93 -2.93 4.102 l 1.66 1.27 q 0.781 0.391 1.758 0.391 h 0.586 l 0.781 -0.098 20.41 -2.441 z",
          "M 56.543 41.211 v 0.684 q -1.855 8.496 -5.273 16.113 a 98.633 98.633 0 0 1 -21.582 30.859 q -2.148 1.953 -2.148 2.734 l 0.293 0.684 q 0.293 0.391 0.879 0.391 1.27 0 4.688 -2.344 3.418 -2.441 7.715 -6.836 a 91.602 91.602 0 0 0 23.047 -43.164 q 0 -0.977 -0.293 -1.562 c -0.977 -1.953 -8.008 -3.613 -7.52 1.074 l 0.098 0.586 z"
        ],
        "strokes": [
          {
            "id": "ケ-1",
            "centerPath": "M 34.961 8.203 c 10.449 21.777 -18.457 44.727 -18.457 44.727",
            "source": "strokesvg"
          },
          {
            "id": "ケ-2",
            "centerPath": "m 24.219 39.746 56.934 -5.762",
            "source": "strokesvg"
          },
          {
            "id": "ケ-3",
            "centerPath": "M 59.961 30.371 c 5.566 23.34 -27.832 58.496 -27.832 58.496",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "コ",
        "word": "コップ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/コ.svg",
        "shadowPaths": [
          "m 73.535 70.898 4.98 -35.059 q 0.195 -1.27 0.488 -1.855 0.391 -0.586 0.391 -1.27 l -0.293 -1.172 q -0.684 -1.27 -2.344 -2.051 -1.465 -0.781 -2.832 -0.781 h -0.391 l -16.406 1.66 -27.539 2.637 h -0.488 q -1.953 0 -3.418 -0.488 t -2.246 -0.488 l -0.586 0.098 q -0.293 0.293 -0.391 0.879 0 0.488 0.781 2.051 0.781 1.66 2.051 2.93 1.465 1.27 3.125 1.27 l 1.367 -0.098 1.367 -0.195 40.137 -3.809 a 1510.352 1510.352 0 0 1 -4.883 35.742 c -0.293 2.246 6.055 6.348 7.129 0",
          "M 75.488 74.121 v -0.391 q -0.098 -0.879 -0.684 -1.562 l -1.27 -1.27 c -0.879 -0.781 -4.785 -0.195 -7.129 0 a 457.91 457.91 0 0 1 -25.195 2.148 l -15.039 1.074 h -0.977 q -2.246 0 -3.711 -0.586 -1.367 -0.586 -2.051 -0.684 -0.293 0 -0.586 0.391 -0.488 0.293 -0.488 0.879 l 0.586 1.758 q 0.586 1.562 1.953 3.027 1.367 1.367 3.711 1.367 h 1.074 l 1.172 -0.098 16.992 -1.172 27.344 -2.246 q 2.051 -0.293 3.223 -0.684 1.074 -0.488 1.074 -1.953"
        ],
        "strokes": [
          {
            "id": "コ-1",
            "centerPath": "M 16.699 30.078 c 14.16 8.398 42.578 0.098 59.863 -1.855 l -5.566 40.234",
            "source": "strokesvg"
          },
          {
            "id": "コ-2",
            "centerPath": "m 11.816 74.121 58.105 1.562",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "サ",
        "word": "サッカー",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/サ.svg",
        "shadowPaths": [
          "M 91.602 38.867 v -0.391 q -0.195 -1.367 -2.148 -2.637 -1.758 -1.367 -2.832 -1.465 h -0.195 q -0.879 0 -1.855 0.293 -0.781 0.293 -1.562 0.293 l -7.91 0.586 -8.594 0.684 -6.445 0.586 -18.555 1.855 -6.152 0.684 -20.41 2.539 h -2.344 l -1.27 -0.098 -1.758 -0.195 -0.781 0.098 q -0.293 0 -0.293 0.488 0 0.684 0.879 2.148 0.879 1.367 2.344 2.539 1.367 1.172 2.637 1.172 t 2.539 -0.391 l 18.75 -2.539 6.055 -0.684 18.262 -1.953 6.348 -0.488 a 351.953 351.953 0 0 1 21.973 -1.172 q 3.32 0 3.32 -1.953",
          "m 41.504 38.672 -0.293 -8.008 -0.391 -8.203 q -0.098 -1.465 -0.586 -2.441 -0.488 -1.172 -2.246 -1.562 l -3.516 -0.391 q -1.562 0 -1.855 0.781 v 0.195 l 0.488 1.074 a 8.984 8.984 0 0 1 1.367 2.344 q 0.293 0.488 0.293 1.074 l 0.098 1.66 a 219.141 219.141 0 0 1 0.488 14.16 l 0.293 5.762 0.586 13.086 0.098 2.734 -0.195 1.27 -0.098 1.27 q 0.098 0.977 0.391 1.953 0.391 1.172 1.172 2.246 0.781 1.172 2.148 1.172 t 1.855 -1.074 q 0.586 -1.074 0.684 -2.148 l 0.098 -1.465 v -0.391 l -0.684 -19.336 z",
          "m 66.504 36.23 0.195 -8.887 0.098 -6.738 v -1.66 q -0.195 -1.758 -0.586 -2.539 -0.391 -0.879 -2.051 -1.172 -1.27 -0.488 -2.344 -0.488 l -1.855 -0.293 q -1.66 0 -1.758 0.684 l -0.098 0.195 v 0.195 q 0 0.586 0.488 1.172 0.684 0.586 0.977 1.367 l 0.488 1.172 q 0.293 0.488 0.195 1.074 l 0.098 1.562 v 2.051 l -0.098 6.055 -0.195 6.836 -0.098 5.664 -0.195 4.59 a 50.098 50.098 0 0 1 -8.887 27.441 49.707 49.707 0 0 1 -16.309 14.355 q -2.734 1.562 -2.734 2.734 l 0.098 0.488 q 0.488 0.586 1.074 0.586 1.074 0 3.32 -1.074 4.688 -2.148 9.668 -5.566 5.078 -3.516 9.473 -8.594 4.395 -5.273 7.324 -12.5 2.93 -7.422 3.32 -17.48 l 0.195 -5.469 z"
        ],
        "strokes": [
          {
            "id": "サ-1",
            "centerPath": "m 2.051 42.383 83.984 -2.148",
            "source": "strokesvg"
          },
          {
            "id": "サ-2",
            "centerPath": "m 33.105 11.719 8.398 51.562",
            "source": "strokesvg"
          },
          {
            "id": "サ-3",
            "centerPath": "M 56.152 8.594 s 14.941 21.973 5.859 47.852 c -7.324 20.898 -25 36.035 -25 36.035",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "シ",
        "word": "シャツ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/シ.svg",
        "shadowPaths": [
          "M 46.484 36.914 q 1.562 0 2.441 -1.66 0.977 -1.562 0.977 -2.637 0 -1.562 -1.465 -2.539 -1.562 -1.074 -4.59 -2.441 -3.125 -1.465 -6.641 -2.637 l -6.152 -2.148 q -2.539 -0.879 -3.32 -0.879 -1.27 0 -1.953 0.781 -0.586 0.781 -0.879 1.562 l -0.293 0.977 q 0 1.562 2.051 2.344 2.539 0.781 5.957 2.246 3.516 1.465 6.738 3.125 3.32 1.562 5.371 3.223 0.977 0.684 1.758 0.684",
          "M 38.965 47.852 q -1.953 -1.074 -5.371 -2.246 l -6.934 -2.246 q -3.418 -1.074 -5.957 -1.66 l -2.832 -0.684 q -0.879 0 -1.953 1.172 -0.977 1.172 -0.977 2.441 0 0.879 0.684 1.367 l 1.758 0.684 q 5.469 1.66 9.961 3.516 4.492 1.758 8.496 3.906 1.172 0.488 1.758 0.488 1.367 0 2.148 -0.879 0.684 -0.977 0.879 -2.051 l 0.195 -0.977 q 0 -1.562 -1.855 -2.832",
          "m 24.902 84.668 1.27 1.074 q 0.684 0.293 1.465 0.293 t 1.465 -0.195 1.758 -0.684 q 10.742 -4.297 19.922 -10.059 9.277 -5.762 16.699 -12.109 7.52 -6.25 12.793 -12.012 5.371 -5.664 8.105 -9.766 2.93 -4.199 2.93 -5.566 0 -1.074 -0.781 -1.074 -1.465 0 -3.906 2.93 -1.758 1.953 -5.957 6.055 -4.102 4.004 -9.961 9.082 -5.859 4.98 -12.891 9.961 -6.934 4.98 -14.355 9.082 -7.324 4.102 -14.551 6.348 -1.562 0.586 -3.809 0.586 h -0.684 l -0.586 -0.098 -0.684 -0.098 h -0.684 q -1.172 0 -1.172 0.684 0 0.488 1.074 2.441 1.27 1.855 2.539 3.125"
        ],
        "strokes": [
          {
            "id": "シ-1",
            "centerPath": "m 19.141 21.289 24.805 11.133",
            "source": "strokesvg"
          },
          {
            "id": "シ-2",
            "centerPath": "m 9.18 41.016 25.684 9.375",
            "source": "strokesvg"
          },
          {
            "id": "シ-3",
            "centerPath": "M 14.746 79.102 c 24.512 14.16 75.391 -38.867 75.391 -38.867",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ス",
        "word": "スイカ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ス.svg",
        "shadowPaths": [
          "m 70.703 28.906 0.586 -1.27 q 0.586 -0.586 0.586 -1.465 0 -1.465 -1.758 -2.637 -1.758 -1.367 -3.223 -1.367 l -0.195 0.098 h -0.293 l -1.367 0.391 q -0.293 0.195 -1.855 0.488 l -31.055 4.688 -2.246 0.293 h -1.562 l -1.66 -0.391 -1.562 -0.293 h -0.098 q -1.074 0 -1.074 1.074 0 0.781 0.684 2.148 0.684 1.465 1.855 2.637 1.27 1.172 2.734 1.074 h 0.977 l 1.172 -0.195 4.004 -0.684 27.539 -4.492 q -4.785 9.668 -11.133 18.262 a 160.449 160.449 0 0 1 -25.879 28.125 185.742 185.742 0 0 1 -13.086 10.645 q -0.781 0.781 -0.781 1.27 l 0.098 0.488 q 0.195 0.293 0.781 0.293 1.172 0 4.883 -1.855 3.809 -1.953 9.082 -5.762 5.566 -3.711 11.914 -9.57 6.641 -5.859 13.184 -13.477 l 3.516 -4.395 a 132.031 132.031 0 0 0 15.234 -24.121",
          "M 51.953 57.422 a 186.816 186.816 0 0 1 12.695 12.598 190.234 190.234 0 0 1 13.184 14.844 q 1.074 1.465 1.66 1.953 l 0.781 0.488 0.684 0.098 q 1.562 0 2.832 -1.465 1.27 -1.66 1.27 -3.125 0.098 -0.488 -0.488 -1.367 -0.391 -0.977 -2.051 -2.832 -1.66 -1.953 -4.883 -5.078 -3.223 -3.32 -8.594 -8.301 T 55.469 53.027 c -3.711 -2.832 -6.934 1.172 -3.516 4.395"
        ],
        "strokes": [
          {
            "id": "ス-1",
            "centerPath": "M 17.676 27.441 c 28.418 5.762 43.066 -7.812 52.344 -5.176 -12.598 33.594 -53.711 62.402 -53.711 62.402",
            "source": "strokesvg"
          },
          {
            "id": "ス-2",
            "centerPath": "m 46.777 47.852 32.715 33.984",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "セ",
        "word": "セミ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/セ.svg",
        "shadowPaths": [
          "M 42.383 51.855 a 562.891 562.891 0 0 1 29.785 -10.742 192.676 192.676 0 0 1 -12.598 17.578 q -0.977 0.977 -0.977 2.246 0 1.172 1.074 1.172 0.879 0 2.441 -1.172 3.516 -3.223 7.031 -6.836 a 163.184 163.184 0 0 0 13.574 -15.625 q 0.586 -0.879 0.586 -1.66 0 -1.758 -1.758 -2.637 -1.855 -0.977 -3.027 -0.977 h -0.195 l -2.832 0.684 q -1.66 0.391 -5.273 1.66 a 626.66 626.66 0 0 0 -27.734 10.059 l -6.152 2.441 -20.02 7.324 -1.66 0.195 h -1.367 q -0.684 0 -1.172 0.293 -0.293 0.293 -0.293 0.781 0 0.879 0.977 2.051 1.172 1.172 2.539 2.148 1.465 0.781 2.539 0.781 0.879 0 1.855 -0.391 l 8.203 -3.516 q 3.906 -1.66 8.301 -3.418 z",
          "M 76.855 78.027 h -0.293 q -0.586 -0.098 -1.27 0.195 l -0.977 0.195 q -3.32 0.098 -6.738 0.391 a 73.926 73.926 0 0 1 -11.621 0 q -4.98 -0.586 -7.715 -1.855 -2.93 -1.172 -4.102 -3.711 -1.27 -2.734 -1.562 -7.812 l -0.195 -13.574 0.098 -6.25 0.488 -22.363 v -0.781 q 0 -1.66 -1.172 -2.441 -1.074 -0.879 -2.734 -1.074 -1.562 -0.391 -3.027 -0.391 -1.172 0 -1.465 0.488 l -0.195 0.684 q 0.098 0.684 0.684 1.27 0.879 0.586 0.977 1.367 0.586 1.953 0.586 8.203 a 377.93 377.93 0 0 1 -0.293 17.48 l -0.098 6.25 -0.098 3.711 v 3.125 q 0 8.203 1.758 13.086 1.855 4.883 5.371 7.324 3.613 2.344 8.887 3.125 a 78.223 78.223 0 0 0 18.457 0.684 l 6.738 -0.293 q 2.539 0 3.613 -0.977 1.27 -1.074 1.27 -2.344 0 -0.977 -1.172 -1.855 -0.879 -0.781 -2.148 -1.27 -1.172 -0.586 -2.051 -0.586"
        ],
        "strokes": [
          {
            "id": "セ-1",
            "centerPath": "M 5.371 56.934 c 21.582 2.246 54.59 -20.312 74.219 -24.707 L 63.867 58.691",
            "source": "strokesvg"
          },
          {
            "id": "セ-2",
            "centerPath": "M 32.422 12.793 s 10.156 7.617 7.422 52.734 c -1.367 23.438 36.719 17.48 36.719 17.48",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ソ",
        "word": "ソファ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ソ.svg",
        "shadowPaths": [
          "m 42.285 45.312 -0.195 -0.879 q -1.074 -2.441 -3.027 -5.273 -1.855 -2.734 -4.102 -5.566 -2.148 -2.832 -4.199 -5.078 l -3.125 -3.906 q -0.684 -0.781 -1.953 -0.781 t -2.539 0.879 q -1.367 0.781 -1.367 2.051 0 0.781 0.586 1.562 3.809 4.59 7.129 9.668 3.418 4.98 6.152 10.059 0.586 1.074 1.953 1.074 1.562 0 3.125 -1.27 1.562 -1.172 1.562 -2.539",
          "M 27.93 89.648 q 1.953 0 6.543 -2.539 4.688 -2.539 10.84 -7.422 6.055 -4.98 12.598 -12.402 6.543 -7.52 12.5 -17.383 5.957 -9.961 10.156 -22.363 0.488 -1.758 0.488 -2.441 0 -1.27 -1.367 -2.441 -1.367 -1.074 -3.223 -1.66 -1.66 -0.684 -2.637 -0.684 -1.465 0 -1.465 1.172 0 0.684 0.391 1.66 0.488 0.781 0.488 1.953 0 0.488 -1.465 4.688 -1.27 4.102 -4.297 10.645 -3.027 6.445 -8.105 14.258 -4.98 7.812 -12.402 15.918 -7.227 8.105 -17.383 15.234 -2.93 1.953 -2.93 3.027 0 0.781 1.27 0.781"
        ],
        "strokes": [
          {
            "id": "ソ-1",
            "centerPath": "m 19.434 19.336 17.383 24.414",
            "source": "strokesvg"
          },
          {
            "id": "ソ-2",
            "centerPath": "M 72.266 13.867 c 14.844 19.238 -19.531 64.551 -40.234 75.488",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "タ",
        "word": "タオル",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/タ.svg",
        "shadowPaths": [
          "M 45.898 18.848 q -0.293 0 -0.684 0.195 -0.391 0.293 -0.391 1.27 v 1.855 l -0.488 2.344 a 108.301 108.301 0 0 1 -15.039 18.457 191.992 191.992 0 0 1 -12.305 11.719 q -0.586 0.879 -0.586 1.367 l 0.098 0.586 q 0.488 0.586 1.172 0.586 1.172 0 4.102 -1.953 2.93 -1.855 6.543 -4.785 3.711 -2.93 6.934 -5.957 l 4.395 -4.199 a 127.539 127.539 0 0 0 9.668 -11.328 c 1.172 -1.66 3.418 -4.492 2.832 -5.566 q -1.172 -1.855 -3.125 -3.223 t -3.125 -1.367",
          "M 49.316 29.004 q 0.781 0.293 1.562 0.293 h 0.684 a 385.254 385.254 0 0 0 20.02 -2.148 q -2.832 6.738 -6.641 13.086 -3.809 6.25 -8.008 11.914 l -4.297 5.371 a 155.273 155.273 0 0 1 -24.023 23.145 q -5.566 4.395 -9.961 6.934 -1.758 1.074 -2.441 1.758 -0.684 0.977 -0.684 1.465 v 0.293 q 0.195 0.488 1.367 0.488 1.465 0 3.613 -0.879 5.859 -2.637 12.5 -7.129 a 121.68 121.68 0 0 0 26.172 -24.121 q 6.25 -7.324 11.523 -15.527 a 102.246 102.246 0 0 0 9.18 -17.773 l 0.488 -0.684 0.293 -0.684 0.098 -0.586 q 0 -1.172 -1.562 -2.344 -1.465 -1.172 -3.125 -1.172 l -2.441 0.293 -5.469 0.586 a 317.383 317.383 0 0 0 -16.016 1.855 c -7.91 0.781 -4.297 4.883 -2.832 5.566",
          "M 35.254 44.531 q 2.637 1.27 5.664 3.613 a 194.336 194.336 0 0 1 11.719 9.375 c 2.539 2.344 7.52 -2.441 4.297 -5.371 q -1.953 -1.758 -5.176 -3.809 a 115.625 115.625 0 0 0 -12.109 -8.008 c -4.785 -2.539 -6.348 3.223 -4.395 4.199"
        ],
        "strokes": [
          {
            "id": "タ-1",
            "centerPath": "M 47.754 12.5 c 2.539 20.508 -25.586 43.555 -25.586 43.555",
            "source": "strokesvg"
          },
          {
            "id": "タ-2",
            "centerPath": "M 40.82 26.953 c 13.672 1.172 30.273 -9.473 37.305 -5.371 a 143.75 143.75 0 0 1 -57.129 68.066",
            "source": "strokesvg"
          },
          {
            "id": "タ-3",
            "centerPath": "m 29.492 37.402 22.754 16.016",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "チ",
        "word": "チーズ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/チ.svg",
        "shadowPaths": [
          "m 56.738 28.32 7.91 -3.027 4.199 -2.051 q 1.27 -0.977 1.562 -1.465 l 0.293 -0.781 q 0 -0.977 -1.074 -2.441 t -2.539 -2.637 q -1.465 -1.172 -2.734 -1.172 l -0.488 0.098 q -0.293 0 -0.391 1.074 v 0.488 q 0.098 0.684 -0.195 1.172 -0.098 0.586 -0.879 0.879 -3.613 2.344 -8.789 4.688 a 185.254 185.254 0 0 1 -27.148 9.473 q -3.32 0.781 -3.32 2.148 0 0.977 2.051 0.977 1.172 0 3.809 -0.488 a 183.887 183.887 0 0 0 13.867 -2.93 l 7.324 -1.953 z",
          "M 89.453 46.973 v -0.488 q 0 -1.367 -1.953 -2.441 -1.953 -1.27 -3.125 -1.367 h -0.391 q -0.781 0 -1.562 0.391 -0.781 0.293 -1.66 0.293 a 222.656 222.656 0 0 0 -22.852 1.465 l -6.934 0.684 a 1113.672 1113.672 0 0 0 -33.008 3.516 h -1.465 l -1.562 -0.293 q -0.977 -0.391 -1.66 -0.391 h -0.293 q -0.781 0 -0.781 0.977 0 0.488 0.586 1.855 0.684 1.465 1.953 2.734 1.172 1.172 2.832 1.172 l 1.074 -0.098 1.367 -0.195 13.379 -1.66 q 8.008 -0.977 17.09 -1.855 l 7.031 -0.586 a 563.184 563.184 0 0 1 28.809 -1.367 q 3.223 0 3.125 -2.344",
          "m 58.008 40.43 -0.293 -8.398 q -0.098 -2.93 -0.977 -3.711 c -3.125 -2.441 -9.18 0 -6.543 2.051 q 0.293 0.293 0.391 0.977 l 0.195 1.465 a 126.758 126.758 0 0 1 -0.293 18.457 q -1.562 14.355 -7.91 23.438 -6.152 9.082 -16.406 15.527 -2.344 1.562 -2.344 2.246 0 0.195 0.195 0.488 0.488 0.586 1.172 0.488 l 1.367 -0.293 q 0.879 -0.195 1.66 -0.586 13.672 -6.543 20.703 -16.797 7.129 -10.254 8.594 -25.098 0.586 -5.078 0.488 -10.254"
        ],
        "strokes": [
          {
            "id": "チ-1",
            "centerPath": "M 66.797 8.691 c 7.324 20.117 -37.891 25.684 -37.891 25.684",
            "source": "strokesvg"
          },
          {
            "id": "チ-2",
            "centerPath": "m 5.762 49.316 78.32 -0.684",
            "source": "strokesvg"
          },
          {
            "id": "チ-3",
            "centerPath": "M 51.562 20.996 c 8.203 37.012 -2.051 57.422 -22.363 70.312",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ツ",
        "word": "ツリー",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ツ.svg",
        "shadowPaths": [
          "m 28.516 52.832 0.879 1.367 q 0.586 0.586 1.465 0.586 0.977 0 2.539 -0.781 1.66 -0.879 1.66 -2.734 0 -0.977 -1.172 -3.809 -1.172 -2.734 -3.027 -6.152 -1.66 -3.418 -3.516 -6.543 l -3.125 -4.98 q -0.684 -1.074 -1.953 -1.074 -0.684 0 -2.148 0.586 t -1.465 2.051 q 0 0.391 0.293 0.879 l 0.488 0.977 q 1.465 2.539 3.125 6.055 1.855 3.516 3.32 7.227 1.66 3.613 2.637 6.348",
          "M 39.941 27.246 q 1.367 2.734 2.832 6.445 1.562 3.613 2.832 7.227 1.367 3.613 2.148 6.348 0.586 1.953 2.539 1.953 0.781 0 2.539 -0.684 1.758 -0.781 1.758 -2.441 v -0.586 l -0.195 -0.781 q -0.586 -1.953 -1.855 -4.883 l -2.734 -6.25 q -1.465 -3.32 -2.832 -5.762 -1.27 -2.637 -1.855 -3.516 -0.781 -1.465 -2.246 -1.465 l -0.977 0.293 q -0.781 0.098 -1.562 0.684 -0.879 0.488 -0.879 1.66 l 0.195 0.781 z",
          "M 28.418 89.16 q 1.66 0 6.152 -1.953 4.492 -2.148 10.645 -6.445 6.152 -4.395 12.891 -11.23 6.836 -6.934 13.086 -16.504 6.445 -9.668 11.328 -22.266 0.488 -1.27 0.488 -2.051 0 -1.465 -1.465 -2.734 -1.562 -1.27 -3.223 -1.953 -1.758 -0.684 -2.246 -0.684 -0.879 0 -1.074 0.391 l -0.195 0.684 0.195 1.562 q 0.293 0.879 0.293 2.051 0 0.586 -1.465 4.688 -1.465 4.004 -4.688 10.254 -3.223 6.348 -8.398 13.77 -5.273 7.324 -12.598 14.844 -7.422 7.52 -17.383 13.77 -3.32 2.344 -3.32 3.32 0 0.488 0.977 0.488"
        ],
        "strokes": [
          {
            "id": "ツ-1",
            "centerPath": "m 17.578 23.438 12.793 25.488",
            "source": "strokesvg"
          },
          {
            "id": "ツ-2",
            "centerPath": "m 38.477 17.383 11.621 25.879",
            "source": "strokesvg"
          },
          {
            "id": "ツ-3",
            "centerPath": "M 72.559 17.578 c 24.316 20.898 -40.625 70.215 -40.625 70.215",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "テ",
        "word": "テレビ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/テ.svg",
        "shadowPaths": [
          "M 66.309 17.48 h -0.293 l -0.781 0.195 -0.879 0.195 q -0.879 0.488 -4.102 1.172 l -7.422 1.172 -8.594 1.074 -7.422 0.879 -3.906 0.391 -0.488 0.098 h -1.562 l -0.781 -0.195 -1.465 -0.293 q -0.879 -0.293 -1.758 -0.293 l -0.586 0.098 q -0.391 0.098 -0.391 0.781 t 0.586 2.148 q 0.781 1.367 2.051 2.734 1.27 1.172 3.027 1.172 l 3.125 -0.293 6.543 -0.684 8.203 -1.172 8.594 -1.172 7.422 -1.074 4.688 -0.781 1.562 -0.586 q 0.781 -0.488 0.781 -1.758 t -1.172 -2.051 -2.734 -1.27 q -1.367 -0.488 -2.246 -0.488",
          "M 87.988 40.234 v -0.195 q 0 -0.781 -0.977 -1.66 -0.879 -0.879 -2.148 -1.562 -1.172 -0.684 -2.148 -0.684 h -0.293 q -0.781 0 -1.66 0.293 l -1.562 0.293 q -9.57 0.488 -19.824 1.465 a 912.207 912.207 0 0 0 -38.574 4.785 l -0.781 0.098 h -1.953 l -0.977 -0.195 -0.879 -0.195 -1.074 -0.195 -0.879 0.098 q -0.488 0.293 -0.488 0.879 0 0.977 0.977 2.344 0.879 1.367 2.148 2.539 1.465 1.074 2.734 1.074 l 2.539 -0.293 27.344 -3.809 7.617 -0.781 a 286.621 286.621 0 0 1 26.855 -1.758 q 1.66 0 2.832 -0.586 1.172 -0.488 1.172 -1.953",
          "m 49.512 45.312 0.684 0.977 q 0.293 0.488 0.293 1.074 v 0.195 q -0.879 8.008 -3.809 14.648 a 56.934 56.934 0 0 1 -14.551 20.508 69.727 69.727 0 0 1 -9.57 7.715 q -0.781 0.781 -0.781 1.367 l 0.098 0.391 q 0.293 0.391 1.172 0.391 t 4.297 -1.562 a 53.027 53.027 0 0 0 17.285 -13.574 55.469 55.469 0 0 0 12.988 -30.176 v -0.684 q 0 -1.27 -0.488 -2.051 c -1.465 -1.953 -9.668 -1.172 -7.617 0.781"
        ],
        "strokes": [
          {
            "id": "テ-1",
            "centerPath": "m 19.238 23.047 48.047 0.195",
            "source": "strokesvg"
          },
          {
            "id": "テ-2",
            "centerPath": "m 7.422 43.945 74.902 -2.051",
            "source": "strokesvg"
          },
          {
            "id": "テ-3",
            "centerPath": "M 49.609 37.402 c 16.211 23.926 -22.559 52.148 -22.559 52.148",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ト",
        "word": "トマト",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ト.svg",
        "shadowPaths": [
          "M 36.816 22.07 v 62.793 q 0 0.684 -0.391 1.465 a 3.32 3.32 0 0 0 -0.195 2.148 q 0.098 0.879 0.684 2.148 0.488 1.27 1.367 2.344 0.879 1.172 2.246 1.172 l 0.586 -0.098 q 1.367 -0.391 1.758 -1.855 0.586 -1.367 0.488 -3.125 V 20.703 q 0 -1.758 -0.391 -2.734 t -2.148 -1.758 q -0.879 -0.293 -2.148 -0.488 l -2.246 -0.293 q -1.367 0 -1.66 0.488 l -0.098 0.488 q 0 0.684 0.488 1.367 0.684 0.684 1.074 1.562 0.586 1.172 0.586 2.734",
          "M 43.359 49.512 q 4.785 1.27 9.766 3.32 a 218.75 218.75 0 0 1 18.75 8.398 l 1.465 0.293 q 1.367 0 2.148 -1.367 0.879 -1.172 0.781 -2.734 0 -0.684 -0.293 -1.367 -0.195 -0.586 -0.977 -1.172 -1.27 -0.977 -4.98 -2.441 -3.613 -1.66 -8.496 -3.32 a 166.016 166.016 0 0 0 -18.164 -5.762 c -3.516 -1.074 -4.883 4.688 0 6.152"
        ],
        "strokes": [
          {
            "id": "ト-1",
            "centerPath": "m 36.816 8.984 4.785 79.395",
            "source": "strokesvg"
          },
          {
            "id": "ト-2",
            "centerPath": "m 34.473 42.285 36.035 14.844",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ナ",
        "word": "ナス",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ナ.svg",
        "shadowPaths": [
          "M 88.867 41.406 v -0.391 q 0 -0.684 -1.074 -1.66 -0.879 -0.879 -2.051 -1.562 t -2.051 -0.684 h -0.293 l -1.562 0.195 -1.66 0.293 q -5.762 0.195 -11.914 0.684 a 1395.801 1395.801 0 0 0 -48.34 5.078 h -1.465 a 6.25 6.25 0 0 1 -2.246 -0.488 l -1.367 -0.293 q -1.074 0.098 -1.074 0.684 l 0.488 1.562 q 0.684 1.367 1.758 2.832 a 4.395 4.395 0 0 0 3.711 1.855 h 1.074 l 1.27 -0.195 a 519.531 519.531 0 0 1 63.477 -5.664 q 3.32 0 3.32 -2.246",
          "M 56.445 34.766 v -4.688 l -0.098 -8.301 q -0.098 -2.637 -0.879 -3.516 -0.586 -0.879 -2.051 -1.172 -2.441 -0.586 -4.199 -0.586 -1.855 0 -2.148 0.879 v 0.195 q 0 0.781 0.586 1.465 0.684 0.391 1.27 1.562 l 0.391 3.613 q 0.293 3.223 0.293 7.617 c 0 9.473 -1.074 21.484 -5.078 31.348 q -3.125 7.52 -8.301 13.477 -5.176 6.055 -12.5 11.426 -2.441 1.562 -2.441 2.734 l 0.195 0.488 q 0.293 0.488 1.172 0.488 1.27 0 3.223 -1.074 9.668 -5.566 15.82 -12.109 6.25 -6.641 9.473 -14.844 c 5.078 -12.109 5.273 -27.051 5.273 -29.004"
        ],
        "strokes": [
          {
            "id": "ナ-1",
            "centerPath": "m 7.324 43.652 75.977 -0.684",
            "source": "strokesvg"
          },
          {
            "id": "ナ-2",
            "centerPath": "M 47.461 10.254 c 20.996 53.125 -20.996 78.32 -20.996 78.32",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ニ",
        "word": "ニンジン",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ニ.svg",
        "shadowPaths": [
          "M 73.438 35.645 v -0.293 q -0.098 -1.66 -2.344 -2.832 -2.051 -1.367 -4.004 -1.367 -0.586 0 -1.172 0.391 -0.488 0.293 -1.758 0.586 l -5.078 0.977 -7.812 1.074 -8.301 0.977 -7.031 0.879 -3.711 0.391 h -1.367 q -2.051 0 -3.223 -0.293 t -1.855 -0.293 l -0.684 0.195 q -0.391 0.391 -0.391 0.781 0 1.074 1.074 2.539 t 1.953 2.246 q 0.586 0.684 1.27 0.879 l 1.367 0.195 h 0.684 l 0.781 -0.098 11.719 -1.172 13.477 -1.562 12.012 -1.855 q 2.246 -0.391 3.223 -0.879 1.172 -0.488 1.172 -1.465",
          "M 87.109 68.555 v -0.293 q -0.098 -0.977 -1.855 -2.441 -1.66 -1.66 -3.613 -1.855 h -0.293 q -0.977 0 -1.758 0.293 -0.781 0.391 -1.562 0.391 -15.234 0.098 -30.566 1.562 l -28.906 2.93 h -0.781 q -1.27 0 -2.344 -0.195 -1.074 -0.391 -1.855 -0.391 -0.586 0 -0.879 0.391 -0.293 0.293 -0.293 0.879 0 0.293 0.684 1.758 0.781 1.465 2.148 2.734 1.27 1.27 3.027 1.27 h 1.172 l 1.367 -0.195 q 7.422 -1.074 17.48 -1.953 10.156 -1.074 21.68 -1.66 11.719 -0.586 23.633 -0.586 3.516 0 3.516 -2.637"
        ],
        "strokes": [
          {
            "id": "ニ-1",
            "centerPath": "m 18.164 36.816 49.609 0.098",
            "source": "strokesvg"
          },
          {
            "id": "ニ-2",
            "centerPath": "m 5.957 69.824 75.488 -0.098",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ヌ",
        "word": "ヌイグルミ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ヌ.svg",
        "shadowPaths": [
          "M 71.68 20.801 h -0.586 l -2.832 0.293 -22.949 2.93 -10.645 1.27 h -1.66 l -0.684 -0.098 -3.516 -0.781 h -0.098 q -0.586 0.195 -0.586 0.879 l 0.586 1.953 q 0.586 1.465 1.758 2.93 1.27 1.465 3.027 1.465 h 0.586 l 4.004 -0.488 28.906 -3.809 a 144.824 144.824 0 0 1 -32.227 46.387 q -8.691 8.105 -15.137 12.5 -1.562 0.977 -2.148 1.758 -0.586 0.879 -0.586 1.367 t 0.293 0.781 l 0.684 0.195 q 1.758 0 5.664 -2.148 3.809 -1.953 9.277 -6.055 5.371 -4.102 11.621 -10.352 a 148.926 148.926 0 0 0 30.957 -45.312 q 0.684 -0.684 0.684 -1.758 0 -1.367 -1.465 -2.637 t -2.93 -1.27",
          "m 39.941 40.527 -1.27 -0.293 q -1.465 0 -2.637 1.758 -0.586 0.977 -0.684 1.562 0 1.172 1.562 2.051 l 6.934 3.711 a 181.738 181.738 0 0 1 24.609 16.602 q 0.684 0.488 1.465 0.488 1.367 0 2.344 -1.66 1.172 -1.758 1.172 -3.32 0 -1.172 -0.684 -1.66 -2.344 -1.953 -5.371 -4.004 c -6.543 -4.492 -18.164 -10.84 -27.441 -15.234"
        ],
        "strokes": [
          {
            "id": "ヌ-1",
            "centerPath": "M 21.68 26.172 c 27.246 2.051 41.406 -6.348 51.953 -5.762 -3.223 22.949 -51.758 66.211 -51.758 66.211",
            "source": "strokesvg"
          },
          {
            "id": "ヌ-2",
            "centerPath": "m 30.469 38.574 37.109 22.949",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ネ",
        "word": "ネクタイ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ネ.svg",
        "shadowPaths": [
          "M 58.398 28.809 q 1.172 0 2.637 -1.172 1.367 -1.367 1.367 -2.93 l -0.098 -0.684 -0.293 -0.684 -1.953 -1.465 -4.297 -2.734 q -2.539 -1.66 -5.273 -3.125 -2.637 -1.66 -4.59 -2.637 -1.953 -1.074 -2.539 -1.074 -1.074 0 -2.148 1.172 -1.074 1.27 -1.074 2.051 0 0.977 1.66 1.953 2.246 1.172 4.688 3.027 2.637 1.758 5.078 3.711 l 4.395 3.418 q 1.27 0.977 2.051 1.074 l 0.195 0.098 z",
          "M 60.254 47.852 a 78.906 78.906 0 0 0 9.082 -12.305 q 0 -1.66 -1.855 -2.539 -1.758 -0.879 -2.734 -0.879 h -0.293 l -36.426 5.273 h -1.074 l -1.465 -0.195 -1.27 -0.293 q -0.879 0 -0.879 0.977 0 0.586 0.879 2.051 0.879 1.27 2.246 2.441 1.465 1.172 2.93 1.074 h 0.586 l 0.684 -0.098 11.133 -1.758 17.48 -3.125 q -4.98 6.934 -11.133 13.184 a 177.539 177.539 0 0 1 -33.887 26.562 q -2.441 1.465 -2.441 2.344 l 0.293 0.977 q 0.488 0.586 1.172 0.586 0.781 0 4.004 -1.562 a 132.422 132.422 0 0 0 19.531 -11.621 c 9.473 -6.738 18.359 -15.137 23.438 -21.094",
          "M 48.535 89.355 v 0.391 l 0.488 1.562 q 0.391 1.27 1.172 2.344 0.879 1.27 2.246 1.27 l 0.684 -0.098 q 1.367 -0.391 1.855 -1.855 0.586 -1.367 0.488 -2.93 V 79.59 l 0.195 -14.746 v -3.906 q 0 -2.832 -0.293 -3.906 -0.293 -1.27 -1.953 -1.953 c -3.906 -1.562 -4.688 1.562 -4.297 4.883 l 0.098 1.953 -0.195 14.062 -0.098 6.836 v 3.418 l -0.195 1.367 q -0.293 0.977 -0.195 1.758",
          "M 83.496 71.68 q 0 -0.977 -1.758 -3.027 -1.855 -1.953 -4.59 -4.297 t -5.762 -4.59 -5.273 -3.711 -3.516 -1.367 q -1.562 0 -2.344 1.27 l -0.586 1.465 q 0 0.684 0.586 1.172 l 1.367 0.977 3.613 2.93 4.297 3.906 4.102 4.102 q 1.953 1.953 3.125 3.516 l 0.977 0.977 q 0.391 0.293 1.074 0.488 l 0.684 0.098 q 1.367 0 2.734 -1.172 1.27 -1.27 1.27 -2.734"
        ],
        "strokes": [
          {
            "id": "ネ-1",
            "centerPath": "m 35.059 10.547 21.582 12.793",
            "source": "strokesvg"
          },
          {
            "id": "ネ-2",
            "centerPath": "M 16.992 36.816 c 25.195 8.105 29.688 -5.957 50.586 -5.176 -8.594 19.141 -50.098 47.363 -50.098 47.363",
            "source": "strokesvg"
          },
          {
            "id": "ネ-3",
            "centerPath": "m 51.953 48.242 0.586 40.625",
            "source": "strokesvg"
          },
          {
            "id": "ネ-4",
            "centerPath": "m 55.566 51.465 22.363 18.75",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ノ",
        "word": "ノート",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ノ.svg",
        "shadowPaths": [
          "M 19.141 89.941 q 1.465 0 5.176 -1.953 3.809 -1.758 8.984 -5.371 t 11.133 -8.691 q 5.957 -5.273 11.914 -11.816 5.957 -6.738 11.23 -14.746 5.469 -8.105 9.277 -17.285 0.684 -1.66 0.684 -2.539 0 -1.367 -1.465 -2.441 -1.27 -1.074 -3.027 -1.758 -1.758 -0.781 -3.027 -0.781 -0.781 0 -0.977 0.195 -0.586 0.488 -0.586 0.977 0 0.586 0.391 1.367 0.293 0.684 0.293 1.758 0 1.66 -2.148 6.348 -1.953 4.59 -5.957 11.23 -4.004 6.445 -9.863 13.867 -5.762 7.422 -13.281 14.551 T 21.387 85.84 q -1.855 1.172 -2.734 2.051 -0.684 0.781 -0.684 1.27 0 0.781 1.172 0.781"
        ],
        "strokes": [
          {
            "id": "ノ-1",
            "centerPath": "M 72.461 16.309 c 5.469 33.203 -49.023 72.949 -49.023 72.949",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ハ",
        "word": "ハート",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ハ.svg",
        "shadowPaths": [
          "M 10.156 81.934 q 1.074 0 3.613 -2.051 2.734 -2.051 6.25 -5.762 3.613 -3.809 7.422 -8.984 3.906 -5.273 7.227 -11.523 3.516 -6.348 5.957 -13.379 0.586 -1.855 0.586 -2.832 0 -1.367 -1.465 -2.344 t -3.223 -1.465 -2.637 -0.488 q -0.781 0 -1.074 0.391 l -0.098 0.488 q 0 0.488 0.293 1.172 0.391 0.781 0.391 1.953 0 1.367 -1.465 5.664 -1.562 4.199 -4.395 10.156 -2.832 5.859 -6.836 12.305 -4.004 6.348 -9.082 12.207 -2.148 2.344 -2.148 3.711 0 0.781 0.684 0.781",
          "M 88.965 73.926 q 0 -1.27 -2.148 -5.273 t -5.859 -9.863 q -3.613 -5.762 -8.496 -12.5 -4.688 -6.836 -9.961 -13.379 -0.879 -1.172 -2.246 -1.172 -0.586 0 -2.051 0.586 -1.367 0.488 -1.367 2.051 0 0.977 0.781 2.148 4.98 6.348 8.984 12.695 4.102 6.152 7.812 12.891 3.809 6.543 7.91 14.355 0.684 1.465 2.246 1.465 1.27 0 2.832 -1.172 1.562 -1.074 1.562 -2.832"
        ],
        "strokes": [
          {
            "id": "ハ-1",
            "centerPath": "M 37.402 27.148 c 0.391 20.996 -23.34 51.074 -23.34 51.074",
            "source": "strokesvg"
          },
          {
            "id": "ハ-2",
            "centerPath": "m 54.297 26.855 29.297 45.312",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ヒ",
        "word": "ヒマワリ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ヒ.svg",
        "shadowPaths": [
          "M 68.555 31.934 h -0.293 q -0.586 0.098 -0.684 0.977 l -0.293 1.66 q -0.098 0.879 -1.172 1.465 a 179.395 179.395 0 0 1 -22.754 10.938 q -5.859 2.539 -10.742 4.297 c -6.543 2.344 -2.148 5.273 -0.098 4.688 q 3.809 -0.977 9.18 -2.637 a 353.027 353.027 0 0 0 21.484 -7.812 q 5.078 -2.148 8.594 -4.102 2.637 -1.465 2.637 -2.93 0 -0.781 -1.074 -2.246 -0.977 -1.66 -2.441 -2.93 -1.367 -1.367 -2.344 -1.367",
          "m 32.91 39.844 0.488 -14.16 v -1.074 q 0 -0.977 -0.391 -1.855 -0.391 -0.781 -1.953 -1.172 l -4.688 -0.879 q -1.074 0 -1.367 0.488 l -0.098 0.391 q 0 0.586 0.488 1.27 l 0.879 1.367 q 0.293 0.391 0.293 1.172 l 0.098 1.465 -0.293 11.035 -0.488 27.246 q 0 6.934 1.465 11.328 1.27 4.395 4.492 6.738 3.027 2.344 8.496 3.223 5.371 0.781 13.184 0.781 a 187.891 187.891 0 0 0 23.34 -1.562 l 1.758 -0.684 q 0.977 -0.293 0.977 -1.66 0 -1.172 -0.977 -2.344 -0.879 -1.074 -2.246 -1.855 -1.27 -0.781 -2.344 -0.781 l -1.367 0.195 -1.074 0.195 a 106.543 106.543 0 0 1 -20.801 1.758 q -6.738 0 -10.547 -0.879 -3.711 -0.977 -5.469 -3.027 -1.562 -1.953 -1.953 -5.176 t -0.391 -7.91 v -3.613 z"
        ],
        "strokes": [
          {
            "id": "ヒ-1",
            "centerPath": "m 23.242 57.031 45.215 -19.238",
            "source": "strokesvg"
          },
          {
            "id": "ヒ-2",
            "centerPath": "M 26.465 14.355 C 38.477 80.566 8.301 83.984 73.828 84.18",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "フ",
        "word": "フネ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/フ.svg",
        "shadowPaths": [
          "M 25.391 27.344 h -0.781 q -1.562 0 -2.93 -0.488 -1.27 -0.391 -2.148 -0.391 h -0.293 q -0.977 0.098 -0.977 1.074 0 0.391 0.684 1.953 t 1.953 3.027 3.418 1.367 h 0.586 l 0.781 -0.098 10.84 -1.465 12.207 -1.758 q 6.25 -0.879 12.012 -1.465 5.762 -0.684 10.156 -0.879 -3.125 8.789 -7.617 16.602 -4.395 7.812 -9.473 14.453 -4.98 6.738 -10.156 12.109 -4.98 5.371 -9.375 9.18 t -7.52 5.957 q -1.855 1.27 -2.734 2.246 -0.879 1.172 -0.879 1.66 0 0.586 0.781 0.586 1.953 0 6.738 -2.734 4.98 -2.637 11.426 -8.008 6.543 -5.273 13.379 -12.891 6.934 -7.715 13.086 -17.578 6.25 -9.863 10.449 -21.777 l 0.684 -1.66 q 0.391 -0.684 0.391 -1.367 t -0.879 -1.562 -2.051 -1.367 -1.953 -0.488 q -4.785 0.293 -11.23 0.977 l -13.379 1.66 -13.574 1.66 z"
        ],
        "strokes": [
          {
            "id": "フ-1",
            "centerPath": "M 11.816 27.246 c 51.855 9.961 35.449 -6.934 67.285 -5.371 -16.699 44.727 -51.172 65.625 -51.172 65.625",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ヘ",
        "word": "ヘリ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ヘ.svg",
        "shadowPaths": [
          "M 12.402 55.176 h -0.684 l -1.074 0.098 q -0.586 0.098 -0.977 0.586 l -0.098 0.488 q 0 0.684 0.977 1.855 t 2.344 2.148 2.832 0.977 q 1.074 0 2.637 -1.074 3.711 -2.637 7.324 -5.957 l 6.738 -6.543 q 3.223 -3.027 5.566 -4.98 1.953 -1.562 3.516 -1.562 1.758 0 4.297 2.051 l 6.445 5.566 9.277 8.008 q 5.273 4.492 11.328 9.375 6.152 4.883 12.695 9.668 l 1.465 0.977 q 0.879 0.488 1.66 0.488 2.539 0 2.539 -2.637 0 -1.465 -0.586 -3.32 -0.586 -1.758 -1.27 -2.246 -0.586 -0.586 -1.465 -0.879 l -1.562 -0.879 q -6.641 -4.492 -12.5 -9.082 l -10.742 -8.594 -8.398 -7.031 -5.273 -4.395 q -4.492 -3.516 -7.812 -3.516 -2.246 0 -4.199 1.27 -2.051 1.172 -4.492 3.125 -4.492 3.711 -8.789 7.812 -4.297 4.004 -9.277 7.52 -1.172 0.684 -2.441 0.684"
        ],
        "strokes": [
          {
            "id": "ヘ-1",
            "centerPath": "M 4.492 60.84 c 19.824 -1.758 28.809 -29.102 38.672 -23.926 9.863 5.078 43.066 35.84 43.066 35.84",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ホ",
        "word": "ホシ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ホ.svg",
        "shadowPaths": [
          "m 65.43 40.039 13.184 -0.977 q 1.855 0 2.441 -0.586 0.781 -0.586 0.781 -1.562 v -0.293 q 0 -0.684 -1.074 -1.562 -0.879 -0.879 -1.953 -1.465 -1.172 -0.684 -1.953 -0.684 h -0.293 l -1.758 0.293 -1.562 0.293 -10.449 0.879 a 524.805 524.805 0 0 0 -41.504 5.566 h -0.781 l -1.66 -0.195 q -1.074 -0.391 -1.953 -0.391 l -0.488 0.098 q -0.488 0.391 -0.488 0.879 l 0.781 1.562 q 0.781 1.27 2.148 2.539 1.367 1.074 2.832 1.074 l 1.465 -0.098 1.27 -0.195 10.938 -1.758 c 7.617 -1.172 22.363 -2.832 30.078 -3.418",
          "m 47.266 81.445 -4.199 -2.051 -4.59 -2.246 -2.93 -1.758 q -1.074 -0.684 -1.953 -0.684 -0.586 0 -0.879 0.488 -0.195 0.488 -0.195 0.879 0 0.488 0.195 1.172 0.293 0.586 1.465 1.758 a 184.18 184.18 0 0 0 13.867 11.23 q 0.684 0.293 1.562 0.391 1.465 0 2.832 -1.562 1.27 -1.465 1.27 -3.32 v -3.418 l -0.098 -7.715 V 64.16 l -0.098 -11.523 V 22.754 q -0.098 -3.418 -0.391 -4.59 -0.293 -0.977 -2.539 -1.465 l -3.809 -0.586 q -1.465 0 -1.562 0.684 v 0.098 q 0 0.586 0.391 1.27 l 0.781 1.27 q 0.488 0.488 0.586 1.074 0.293 0.488 0.293 1.27 z",
          "M 17.285 80.566 q 1.367 0 3.711 -2.148 2.441 -2.246 4.98 -5.566 2.637 -3.32 4.883 -6.738 2.344 -3.516 3.809 -6.152 1.562 -2.539 1.562 -3.223 0 -1.367 -1.367 -2.148 -1.27 -0.879 -2.344 -0.879 -1.465 0 -2.246 1.465 -1.855 3.711 -4.688 7.422 -2.734 3.711 -5.566 6.836 -2.93 2.93 -5.176 4.785 l -1.074 0.781 q -0.781 0.684 -0.781 1.855 0 1.66 1.465 2.734 1.562 0.977 2.832 0.977",
          "m 84.668 77.148 1.074 -1.27 q 0.488 -0.684 0.488 -1.367 l -0.098 -0.391 -0.098 -0.391 q -0.488 -1.27 -2.344 -3.418 -1.66 -2.344 -4.102 -4.98 -2.344 -2.832 -4.883 -5.566 l -4.395 -4.688 -3.027 -2.93 q -0.488 -0.488 -1.367 -0.488 -1.172 0 -2.441 0.879 -1.172 0.781 -1.172 1.953 0 0.977 1.27 2.246 2.539 2.246 5.566 5.957 t 5.859 7.617 4.59 6.641 q 0.781 1.27 2.441 1.27 1.562 0 2.637 -1.074"
        ],
        "strokes": [
          {
            "id": "ホ-1",
            "centerPath": "m 9.57 39.941 66.797 -1.465",
            "source": "strokesvg"
          },
          {
            "id": "ホ-2",
            "centerPath": "m 46.777 9.766 7.422 79.199 -16.406 -10.742",
            "source": "strokesvg"
          },
          {
            "id": "ホ-3",
            "centerPath": "M 38.086 49.023 18.359 75.098",
            "source": "strokesvg"
          },
          {
            "id": "ホ-4",
            "centerPath": "m 59.375 47.559 21.191 25.293",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "マ",
        "word": "マグカップ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/マ.svg",
        "shadowPaths": [
          "M 80.078 30.371 h -0.293 a 586.523 586.523 0 0 0 -21.387 2.246 l -13.965 1.562 -25.586 3.027 h -0.488 q -1.172 0 -2.246 -0.293 l -1.465 -0.391 -1.562 -0.293 h -0.293 q -0.684 0.293 -0.684 0.977 0 0.781 0.879 2.246 0.879 1.66 2.344 3.027 1.367 1.367 2.832 1.367 h 0.879 l 0.879 -0.293 a 1314.551 1314.551 0 0 1 52.344 -6.348 q -3.516 4.199 -8.008 8.594 a 307.812 307.812 0 0 1 -15.137 14.16 c -2.148 1.855 -0.684 5.762 3.223 3.125 q 2.344 -1.66 5.859 -4.492 l 20.703 -17.285 4.004 -3.613 0.781 -0.586 q 1.465 -1.074 1.465 -2.344 l -0.293 -0.879 -1.953 -2.246 q -1.074 -1.27 -2.832 -1.27",
          "m 49.121 59.961 -10.059 -9.18 q -1.172 -1.074 -1.66 -1.172 l -0.879 -0.293 -0.879 0.098 q -0.781 0.098 -1.66 0.684 -0.781 0.488 -0.781 1.758 0 1.367 1.074 2.246 2.148 1.66 5.176 4.688 a 187.109 187.109 0 0 1 20.02 23.633 q 1.074 1.27 2.246 1.27 1.367 0 2.637 -1.27 1.465 -1.172 1.465 -2.734 0 -0.879 -0.586 -1.758 -2.344 -3.516 -5.762 -7.227 -3.418 -3.906 -7.129 -7.617 z"
        ],
        "strokes": [
          {
            "id": "マ-1",
            "centerPath": "M 5.566 37.891 c 49.902 5.566 57.715 -10.645 75.293 -6.348 L 53.027 59.375",
            "source": "strokesvg"
          },
          {
            "id": "マ-2",
            "centerPath": "m 29.59 45.41 30.762 32.715",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ミ",
        "word": "ミカン",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ミ.svg",
        "shadowPaths": [
          "M 33.203 27.148 a 225.879 225.879 0 0 1 22.754 5.566 q 5.859 1.66 10.645 3.906 0.684 0.293 1.27 0.293 0.879 0 1.855 -0.684 0.977 -0.879 0.977 -3.32 0 -1.758 -1.562 -2.637 -6.055 -2.93 -15.43 -4.98 t -19.531 -3.711 q -1.465 -0.391 -2.539 0.781 -0.586 0.879 -0.781 1.758 l -0.098 1.172 q 0 0.977 0.684 1.27 z",
          "M 62.988 57.617 q 1.465 0 2.051 -0.781 0.586 -0.977 0.684 -1.953 l 0.195 -1.172 q 0 -1.66 -1.562 -2.539 -2.93 -1.66 -7.227 -2.93 -4.297 -1.465 -8.691 -2.539 a 157.52 157.52 0 0 0 -14.648 -3.223 c -0.586 0 -2.637 0.293 -2.637 3.516 q 0.098 1.074 0.684 1.367 0.586 0.391 1.66 0.684 a 165.234 165.234 0 0 1 28.125 9.277 z",
          "m 26.27 66.602 -0.195 0.684 v 0.586 q 0 1.66 2.051 2.246 3.906 1.172 9.375 3.223 5.469 1.953 11.523 4.492 6.055 2.344 11.621 5.078 5.566 2.637 9.668 5.078 0.586 0.293 1.074 0.293 1.074 0 2.148 -0.977 t 1.074 -3.32 q 0 -0.879 -0.293 -1.66 -0.293 -0.879 -1.074 -1.367 -4.395 -2.637 -10.156 -5.078 -5.664 -2.441 -11.621 -4.59 -5.859 -2.148 -10.938 -3.711 l -8.203 -2.441 -3.418 -0.977 q -1.66 0 -2.637 2.441"
        ],
        "strokes": [
          {
            "id": "ミ-1",
            "centerPath": "m 24.805 22.168 39.941 10.84",
            "source": "strokesvg"
          },
          {
            "id": "ミ-2",
            "centerPath": "m 25.195 42.773 34.766 10.84",
            "source": "strokesvg"
          },
          {
            "id": "ミ-3",
            "centerPath": "m 20.508 63.77 48.242 20.02",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ム",
        "word": "ムシ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ム.svg",
        "shadowPaths": [
          "M 69.336 71.777 c 3.613 -1.66 0.781 -4.199 -2.441 -3.516 l -22.656 5.664 c -4.688 1.074 -14.258 4.199 -14.062 2.441 0.195 -1.66 10.84 -19.043 17.188 -35.156 q 2.441 -5.859 3.809 -10.059 1.367 -3.906 1.367 -5.273 0 -1.465 -1.758 -2.344 -1.66 -0.977 -3.516 -1.27 l -2.344 -0.391 q -1.465 0 -1.465 1.27 0 0.488 0.391 1.074 l 0.684 0.977 0.195 1.27 c 0 2.637 -2.734 9.766 -3.418 11.523 -4.59 11.816 -7.129 19.531 -15.918 34.961 -1.855 3.125 -4.004 4.395 -5.957 6.445 q -2.734 2.93 0.195 6.543 c 1.66 2.246 8.691 -1.27 8.691 -1.27 l 12.109 -3.32 a 458.789 458.789 0 0 0 28.906 -9.57",
          "M 74.219 79.102 q 2.344 3.613 4.004 6.543 0.391 0.684 1.758 0.684 1.758 0 3.125 -1.27 1.465 -1.172 1.367 -2.637 0 -0.684 -1.465 -3.027 l -3.809 -5.469 a 300.977 300.977 0 0 0 -17.285 -21.289 q -0.684 -0.586 -1.562 -0.684 l -0.879 0.293 -0.879 0.391 q -1.465 0.879 -1.465 1.953 0 1.172 1.074 2.246 l 3.809 4.785 c 3.906 4.883 11.328 16.016 12.207 17.48"
        ],
        "strokes": [
          {
            "id": "ム-1",
            "centerPath": "M 46.582 15.625 c 5.371 23.73 -25 55.371 -25.195 66.992 l 43.848 -10.742",
            "source": "strokesvg"
          },
          {
            "id": "ム-2",
            "centerPath": "m 54.492 47.656 24.609 33.008",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "メ",
        "word": "メロン",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/メ.svg",
        "shadowPaths": [
          "M 66.895 39.453 q 3.418 -5.957 5.176 -10.254 1.953 -4.199 1.953 -5.273 0 -1.172 -1.367 -2.246 -1.172 -1.074 -2.832 -1.758 -1.562 -0.684 -2.93 -0.684 -0.879 0 -1.172 0.488 l -0.098 0.293 q -0.098 0.391 0.195 0.977 l 0.391 0.879 0.098 0.684 0.098 0.879 q 0 0.977 -1.66 4.785 t -4.59 9.18 a 152.051 152.051 0 0 1 -41.016 48.145 q -1.66 1.172 -2.344 2.148 -0.684 0.879 -0.684 1.27 0 0.684 0.879 0.684 1.27 0 5.078 -2.051 t 9.277 -6.055 11.426 -10.059 c 12.5 -12.207 21.387 -27.246 24.121 -32.031",
          "m 61.23 62.305 6.934 5.469 q 0.781 0.586 1.367 0.488 1.367 0 2.539 -1.562 1.367 -1.562 1.367 -3.223 0 -0.488 -0.391 -1.074 -0.391 -0.781 -1.758 -1.758 -1.367 -1.27 -4.297 -3.223 a 234.863 234.863 0 0 0 -27.93 -16.406 q -0.391 -0.195 -0.684 -0.195 -1.172 0 -2.246 1.172 -1.074 1.074 -1.074 2.051 0 1.074 1.855 2.051 a 157.422 157.422 0 0 1 24.316 16.211"
        ],
        "strokes": [
          {
            "id": "メ-1",
            "centerPath": "M 69.336 13.086 c 4.785 32.812 -48.926 72.754 -48.926 72.754",
            "source": "strokesvg"
          },
          {
            "id": "メ-2",
            "centerPath": "m 30.176 39.16 37.402 23.926",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "モ",
        "word": "モモ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/モ.svg",
        "shadowPaths": [
          "m 60.938 29.688 6.641 -1.172 q 2.051 -0.586 2.441 -1.074 0.488 -0.586 0.488 -1.27 0 -1.074 -1.172 -1.855 a 9.863 9.863 0 0 0 -4.688 -1.855 h -0.488 l -1.465 0.586 q -0.879 0.293 -4.199 0.977 l -7.715 1.172 -8.789 1.172 -12.891 1.66 h -1.66 l -2.637 -0.488 q -0.684 -0.195 -1.27 -0.195 t -1.074 0.391 l -0.293 0.586 0.684 1.465 q 0.684 1.465 2.148 2.734 t 3.32 1.27 h 0.586 l 0.781 -0.098 q 15.625 -1.855 31.25 -4.004",
          "M 63.77 53.32 q 8.398 -0.781 16.406 -1.074 3.418 -0.293 3.418 -2.148 l -0.098 -0.781 q -0.293 -1.27 -2.148 -2.441 -1.953 -0.977 -3.125 -1.172 h -0.293 q -0.879 0 -1.855 0.293 -0.781 0.293 -1.562 0.293 a 697.266 697.266 0 0 0 -56.543 6.348 h -0.684 l -1.66 -0.195 q -0.879 -0.195 -1.758 -0.195 -0.293 0 -0.781 0.195 -0.293 0.293 -0.293 0.684 0 0.879 0.879 2.148 t 2.246 2.441 q 1.27 0.977 2.441 0.977 t 2.832 -0.391 q 3.809 -0.781 8.887 -1.367 c 13.281 -1.855 27.246 -3.125 33.691 -3.613",
          "M 79.199 78.711 h -0.586 l -1.27 0.195 -1.074 0.293 -3.027 0.391 -10.352 0.586 q -6.543 0 -9.766 -1.562 a 8.496 8.496 0 0 1 -4.395 -5.371 q -1.172 -3.809 -1.172 -9.961 v -4.004 c 0.586 -12.012 0.391 -12.695 0.977 -20.508 l 0.391 -5.078 v -0.391 q 0 -1.172 -1.074 -1.855 c -4.688 -3.32 -7.324 -0.977 -6.445 0.879 l 0.391 0.879 0.195 0.879 -0.195 5.371 c -0.781 16.504 -0.098 3.223 -0.781 21.094 v 4.199 q 0 8.887 2.344 13.77 2.539 4.785 7.617 6.543 5.273 1.758 13.672 1.758 a 142.773 142.773 0 0 0 14.844 -0.781 q 1.562 -0.195 3.223 -0.781 1.562 -0.586 1.562 -2.148 0 -1.758 -1.562 -2.93 -1.465 -1.367 -3.516 -1.465"
        ],
        "strokes": [
          {
            "id": "モ-1",
            "centerPath": "m 15.918 29.883 48.535 -3.613",
            "source": "strokesvg"
          },
          {
            "id": "モ-2",
            "centerPath": "m 6.445 54.883 71.094 -4.883",
            "source": "strokesvg"
          },
          {
            "id": "モ-3",
            "centerPath": "M 41.699 23.633 c 15.039 22.559 -22.266 67.383 36.719 59.57",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ヤ",
        "word": "ヤマ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ヤ.svg",
        "shadowPaths": [
          "M 73.633 36.914 a 200.586 200.586 0 0 1 -12.891 18.848 q -1.758 2.051 -1.758 3.223 0 0.879 0.781 0.781 0.977 0 3.027 -1.465 1.953 -1.562 4.59 -4.199 a 226.172 226.172 0 0 0 10.742 -11.816 l 5.078 -6.348 0.781 -0.879 0.391 -0.781 q 0.293 -0.488 0.293 -0.977 0 -1.074 -1.66 -2.637 a 5.273 5.273 0 0 0 -3.516 -1.465 l -0.879 0.098 -23.73 7.031 c -14.062 4.102 -18.457 5.078 -27.441 7.812 l -5.566 1.465 -2.637 0.586 -1.758 0.293 h -0.195 l -1.367 -0.098 -1.27 -0.195 q -0.684 0 -0.879 0.195 -0.488 0.293 -0.488 0.977 0 0.879 0.879 2.148 0.977 1.367 2.344 2.246 1.465 0.977 2.734 0.977 l 1.27 -0.098 1.27 -0.391 6.25 -1.953 z",
          "m 50.098 86.816 0.195 1.758 0.195 1.465 0.781 1.367 q 0.586 1.074 1.66 2.051 0.977 1.074 2.246 1.074 0.879 -0.098 1.758 -0.684 0.977 -0.684 0.977 -3.418 l -0.098 -0.781 -0.098 -0.879 -0.879 -3.223 -4.883 -17.383 -3.125 -11.426 -7.812 -28.906 -1.562 -5.859 q -0.293 -1.27 -1.172 -2.344 -0.977 -1.172 -2.734 -1.27 l -3.027 -0.098 -2.051 0.195 q -0.781 0.293 -0.977 0.977 l -0.098 0.391 q 0 0.586 0.684 1.074 l 1.66 1.27 q 0.977 0.879 1.465 2.441 l 1.367 5.078 z"
        ],
        "strokes": [
          {
            "id": "ヤ-1",
            "centerPath": "M 7.031 48.828 c 50.488 -2.539 56.348 -20.801 75.391 -19.043 L 63.086 54.883",
            "source": "strokesvg"
          },
          {
            "id": "ヤ-2",
            "centerPath": "m 31.055 11.719 23.438 76.855",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ユ",
        "word": "ユキ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ユ.svg",
        "shadowPaths": [
          "m 65.137 69.043 3.125 -20.41 2.148 -11.816 0.391 -1.465 q 0 -1.66 -1.855 -2.832 -1.953 -1.367 -3.613 -1.367 h -0.391 l -14.746 1.855 -16.797 1.758 -4.102 0.293 h -0.879 l -0.879 -0.098 -1.465 -0.391 q -0.781 -0.293 -1.562 -0.293 l -0.781 0.195 q -0.293 0.293 -0.293 0.781 t 0.684 1.953 2.051 2.93 q 1.465 1.27 3.32 1.27 h 0.586 l 0.586 -0.098 32.129 -3.613 -4.492 31.836 c -0.391 2.832 5.957 5.859 6.836 -0.488",
          "M 87.891 72.461 z q 0 -1.367 -1.953 -2.93 a 6.738 6.738 0 0 0 -4.297 -1.66 l -1.465 0.293 q -0.586 0.293 -1.27 0.293 l -4.492 0.098 a 1058.984 1058.984 0 0 0 -55.859 4.395 h -1.465 l -0.977 -0.195 -3.125 -0.684 -0.684 0.195 -0.195 0.488 q 0 0.781 0.684 2.051 l 1.855 2.637 q 0.977 0.879 1.855 1.367 0.977 0.293 2.148 0.293 h 0.977 a 855.371 855.371 0 0 1 63.77 -4.297 q 2.637 -0.098 3.516 -0.488 0.977 -0.488 0.977 -1.758"
        ],
        "strokes": [
          {
            "id": "ユ-1",
            "centerPath": "m 17.188 37.891 51.27 -7.324 -6.348 36.035",
            "source": "strokesvg"
          },
          {
            "id": "ユ-2",
            "centerPath": "m 5.859 75.391 76.074 -3.223",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ヨ",
        "word": "ヨット",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ヨ.svg",
        "shadowPaths": [
          "m 69.141 72.168 2.734 -17.383 3.516 -22.461 q 0.098 -0.684 0.488 -1.465 0.391 -0.684 0.391 -1.465 0.098 -1.172 -1.66 -2.246 -1.66 -1.27 -3.125 -1.27 h -0.488 l -0.586 0.098 -15.82 1.758 -26.66 2.246 h -1.27 l -0.781 -0.195 -3.418 -0.684 -0.781 0.098 q -0.293 0.195 -0.293 0.879 0 0.781 0.684 2.246 0.879 1.367 2.148 2.637 t 3.125 1.27 h 0.977 a 56.836 56.836 0 0 1 9.277 -1.074 l 21.68 -1.855 8.984 -0.879 -4.688 32.324 -1.074 7.031 c -0.391 2.441 5.957 6.055 6.641 0.391",
          "M 66.309 46.484 q -0.977 0.195 -4.199 0.488 l -32.617 2.93 h -1.758 l -3.906 -0.684 -0.781 0.098 q -0.586 0.098 -0.586 0.879 0 0.879 0.684 2.148 l 1.27 2.148 q 0.684 0.977 1.562 1.27 t 1.953 0.195 h 1.074 l 1.172 -0.098 7.715 -0.586 18.945 -1.66 8.496 -0.684 c 4.395 -0.391 5.859 -7.422 0.977 -6.445",
          "M 71.484 75.586 z q 0 -1.074 -0.684 -1.855 -0.781 -0.879 -1.66 -1.465 -1.367 -0.879 -6.641 -0.391 l -19.141 1.758 -19.824 1.465 h -0.684 l -1.758 -0.293 -3.418 -0.586 -0.391 0.098 q -0.488 0.293 -0.488 0.977 l 0.586 2.051 q 0.781 1.27 2.051 2.637 1.367 1.172 3.418 1.172 h 1.074 l 1.074 -0.098 20.508 -1.562 24.414 -1.953 q 1.562 -0.293 1.562 -1.855"
        ],
        "strokes": [
          {
            "id": "ヨ-1",
            "centerPath": "M 15.039 30.762 c 37.402 3.516 47.363 -6.934 59.277 -4.297 l -7.129 42.773",
            "source": "strokesvg"
          },
          {
            "id": "ヨ-2",
            "centerPath": "m 16.016 52.051 47.363 -2.539",
            "source": "strokesvg"
          },
          {
            "id": "ヨ-3",
            "centerPath": "m 10.449 77.539 54.98 -2.051",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ラ",
        "word": "ラッパ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ラ.svg",
        "shadowPaths": [
          "M 35.156 21.289 h -0.684 q -1.562 0 -3.027 -0.293 -1.562 -0.293 -2.441 -0.293 l -0.684 0.098 q -0.488 0.293 -0.488 0.879 0 1.074 0.879 2.539 0.879 1.27 2.148 2.246 1.367 1.074 2.637 1.074 h 0.586 l 0.586 -0.098 7.422 -0.586 8.984 -0.879 8.887 -1.074 7.031 -0.977 q 4.297 -0.586 4.297 -2.734 0 -1.953 -1.66 -3.027 t -2.93 -1.074 l -0.684 0.098 -2.637 0.684 -4.59 0.977 -6.836 0.879 -7.227 0.781 -6.152 0.488 z",
          "M 24.902 39.453 h -0.684 q -2.246 0 -3.613 -0.391 -1.27 -0.488 -2.148 -0.488 h -0.195 q -0.684 0.098 -0.684 0.879 0 0.879 0.781 2.441 0.879 1.465 2.148 2.832 1.367 1.172 2.832 1.172 h 0.879 l 1.074 -0.098 4.297 -0.488 9.082 -1.074 11.621 -1.465 11.914 -1.367 9.863 -1.074 q -5.469 12.598 -12.402 21.289 -6.836 8.691 -14.551 14.746 T 29.199 87.305 q -5.566 3.516 -5.566 4.59 0 0.391 0.781 0.391 1.66 0 6.348 -1.758 4.883 -1.855 11.328 -5.664 6.641 -3.906 13.574 -9.961 7.129 -6.25 13.574 -14.844 t 10.938 -19.922 l 0.684 -1.758 q 0.488 -0.684 0.488 -1.367 0 -1.172 -1.758 -2.344 -1.66 -1.074 -3.223 -1.074 l -2.93 0.293 -7.227 0.879 -9.766 1.172 -10.742 1.27 -9.863 1.074 -7.52 0.879 z"
        ],
        "strokes": [
          {
            "id": "ラ-1",
            "centerPath": "m 21.387 23.633 43.848 -2.344",
            "source": "strokesvg"
          },
          {
            "id": "ラ-2",
            "centerPath": "M 11.035 39.941 c 34.961 5.078 55.957 -8.008 67.969 -6.152 -10.254 35.449 -50.098 55.664 -50.098 55.664",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "リ",
        "word": "リンゴ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/リ.svg",
        "shadowPaths": [
          "M 36.426 62.598 h 0.488 q 1.27 -0.195 1.953 -1.66 0.781 -1.562 0.781 -3.125 V 45.996 l 0.098 -8.984 0.098 -8.008 v -6.152 q 0 -1.074 -0.391 -2.148 -0.293 -1.074 -1.562 -1.758 -1.27 -0.879 -4.395 -0.879 -2.148 0 -2.539 0.879 v 0.195 q 0 0.781 1.074 1.953 1.074 1.074 1.074 3.027 v 2.637 l -0.098 5.566 v 6.934 l -0.098 7.031 v 8.301 l -0.195 1.27 -0.098 1.367 v 0.391 l 0.488 1.758 q 0.391 1.27 1.172 2.246 0.879 0.977 2.148 0.977",
          "M 68.652 39.844 v -3.125 l -0.098 -7.812 q 0 -4.102 -0.195 -8.008 v -0.781 q 0 -1.562 -0.488 -2.441 -0.391 -0.879 -2.344 -1.562 -2.148 -0.684 -4.199 -0.684 l -1.367 0.195 q -0.586 0.098 -0.684 0.488 v 0.195 q 0 0.781 0.879 1.855 1.074 1.172 1.172 3.516 0.195 3.418 0.195 7.031 l 0.098 6.836 q 0 12.012 -1.66 20.605 -1.562 8.594 -4.785 14.746 -3.027 6.055 -7.91 11.035 -4.688 4.785 -10.938 9.473 -3.418 2.734 -3.418 3.809 0 0.488 0.781 0.488 1.367 0 4.199 -1.465 8.105 -4.199 13.867 -9.18 5.859 -4.98 9.473 -11.23 3.711 -6.348 5.469 -14.648 1.758 -8.398 1.953 -19.336"
        ],
        "strokes": [
          {
            "id": "リ-1",
            "centerPath": "m 33.398 11.719 2.734 44.824",
            "source": "strokesvg"
          },
          {
            "id": "リ-2",
            "centerPath": "M 60.352 8.984 c 18.359 61.816 -22.07 83.691 -22.07 83.691",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ル",
        "word": "ルビー",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ル.svg",
        "shadowPaths": [
          "M 42.09 35.449 v -0.684 q 0 -1.465 -0.586 -1.953 -0.586 -0.586 -1.953 -0.977 l -1.953 -0.488 q -1.172 -0.293 -2.246 -0.293 -1.172 0 -1.27 0.391 l -0.098 0.684 q 0 0.879 0.586 1.758 0.586 0.781 0.586 2.539 v 0.391 q -0.684 8.789 -2.832 16.016 -2.148 7.129 -5.078 12.891 -2.734 5.566 -5.762 9.57 -3.027 3.906 -5.371 6.348 -2.148 1.855 -2.148 3.223 0 0.879 0.781 0.879 1.172 0 3.125 -1.66 3.32 -2.637 7.129 -6.445 3.906 -4.004 7.52 -9.863 3.516 -5.762 6.152 -13.672 2.734 -8.008 3.418 -18.652",
          "M 50.879 77.637 v 0.391 l 0.488 1.465 q 0.586 1.172 1.367 2.344 0.977 1.074 2.148 1.074 0.488 0 3.027 -1.66 t 6.152 -4.59 a 80.762 80.762 0 0 0 20.605 -25 q 0.977 -1.855 0.977 -3.418 0 -1.074 -0.684 -1.074 -0.879 0 -3.125 2.637 C 69.434 66.797 63.281 69.043 57.91 72.461 V 51.953 l 0.195 -20.801 v -6.543 q 0 -1.465 -0.488 -2.441 -0.391 -0.977 -2.148 -1.66 -2.344 -0.879 -4.492 -0.879 -1.465 0 -1.465 0.586 v 0.098 q 0 0.879 0.879 2.148 t 0.879 3.32 v 19.922 l -0.098 14.551 v 14.844 l -0.195 1.27 z"
        ],
        "strokes": [
          {
            "id": "ル-1",
            "centerPath": "M 36.035 24.707 c 9.863 30.371 -17.48 56.738 -17.48 56.738",
            "source": "strokesvg"
          },
          {
            "id": "ル-2",
            "centerPath": "M 50 13.086 c 8.594 25.195 -0.195 48.535 1.953 68.164 l 30.762 -28.613",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "レ",
        "word": "レモン",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/レ.svg",
        "shadowPaths": [
          "M 27.637 80.664 v 0.488 l 0.391 1.367 q 0.293 1.074 1.172 2.148 a 2.832 2.832 0 0 0 3.516 0.879 q 8.594 -3.711 16.797 -8.984 c 15.625 -10.059 28.125 -22.949 29.492 -24.805 q 3.223 -4.297 3.125 -6.445 0 -1.172 -0.781 -1.172 -1.172 0 -3.027 2.148 a 135.352 135.352 0 0 1 -43.652 30.176 v -8.594 l 0.098 -10.938 V 25.293 q 0 -1.465 -0.391 -2.344 -0.488 -1.074 -2.051 -1.66 -2.734 -1.074 -4.395 -1.074 -1.953 0 -1.953 0.977 v 0.098 q 0 0.879 0.879 1.953 1.074 1.074 1.074 2.93 v 52.051 l -0.195 1.27 z"
        ],
        "strokes": [
          {
            "id": "レ-1",
            "centerPath": "M 26.562 14.062 c 14.16 24.121 -2.832 59.375 3.223 68.555 17.188 -4.102 47.852 -33.887 47.852 -33.887",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ロ",
        "word": "ロボット",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ロ.svg",
        "shadowPaths": [
          "M 21.484 31.445 q -1.66 0 -1.66 0.781 0 0.684 0.781 1.562 a 9.961 9.961 0 0 1 1.855 3.027 l 1.66 14.453 2.441 23.73 v 1.758 l 0.391 2.148 1.465 2.637 q 1.074 1.172 2.539 1.172 0.781 0 1.66 -0.488 0.879 -0.586 0.977 -3.32 l -0.488 -5.762 -0.977 -8.789 -1.953 -18.066 c -0.293 -4.102 -1.074 -11.328 -1.66 -12.305 q -0.684 -1.074 -2.246 -1.562 -1.367 -0.586 -2.734 -0.781 -1.465 -0.293 -2.051 -0.195",
          "M 71.777 29.785 a 197.656 197.656 0 0 1 -16.309 1.855 l -26.953 2.344 c -4.59 0.391 -2.148 6.152 0.977 5.957 l 26.465 -2.539 13.77 -1.27 -4.59 34.375 c -0.488 3.516 6.055 2.734 6.348 0.391 a 1523.242 1523.242 0 0 1 5.469 -35.352 l 0.293 -0.586 0.293 -1.172 q 0 -1.66 -1.855 -2.832 -1.758 -1.172 -3.516 -1.172 z",
          "m 65.137 70.508 -32.031 2.637 c -4.102 0.293 -2.93 5.957 0.488 5.762 l 35.449 -2.539 q 1.953 -0.195 3.125 -0.488 1.27 -0.391 1.27 -1.66 v -0.293 q -0.098 -0.977 -0.684 -1.758 -0.391 -0.781 -1.27 -1.27 c -0.879 -0.488 -4.297 -0.586 -6.348 -0.391"
        ],
        "strokes": [
          {
            "id": "ロ-1",
            "centerPath": "m 21.289 25.098 9.18 51.465",
            "source": "strokesvg"
          },
          {
            "id": "ロ-2",
            "centerPath": "M 19.531 36.816 c 33.984 3.809 42.871 -10.352 57.324 -6.348 l -8.594 36.328",
            "source": "strokesvg"
          },
          {
            "id": "ロ-3",
            "centerPath": "m 24.121 76.465 43.164 -2.051",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ワ",
        "word": "ワゴン",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ワ.svg",
        "shadowPaths": [
          "M 24.512 46.484 v 0.391 l -0.098 1.172 -0.098 1.074 v 0.293 l 0.098 0.391 q 0.195 1.074 1.367 2.832 1.27 1.66 3.027 1.66 l 0.684 -0.098 q 0.879 -0.293 1.27 -1.27 0.684 -0.977 0.684 -3.223 a 59.18 59.18 0 0 0 -0.977 -9.473 c -0.684 -5.469 -3.32 -16.113 -4.98 -18.262 q -0.879 -1.367 -1.562 -1.66 l -0.879 -0.293 q -1.367 0 -1.66 0.977 l -0.293 1.172 0.293 2.148 0.488 1.465 1.172 5.078 a 93.164 93.164 0 0 1 1.27 12.305 z",
          "m 29.102 32.91 8.789 -0.879 23.828 -2.441 10.547 -0.977 a 100.098 100.098 0 0 1 -19.141 36.914 131.543 131.543 0 0 1 -20.508 20.508 l -2.832 2.051 q -0.977 0.879 -0.977 1.562 l 0.098 0.488 q 0.195 0.195 1.074 0.195 2.93 0 7.812 -3.027 4.98 -3.125 10.938 -8.496 a 122.949 122.949 0 0 0 23.145 -29.883 95.312 95.312 0 0 0 8.789 -20.703 l 0.488 -0.586 0.488 -0.879 0.195 -0.781 q 0 -0.977 -1.172 -1.855 -1.074 -1.074 -2.441 -1.758 -1.27 -0.586 -2.148 -0.684 l -1.367 0.195 a 624.805 624.805 0 0 1 -35.059 3.711 l -10.645 0.977 h -1.562 c -4.395 0 -1.66 6.641 1.66 6.348"
        ],
        "strokes": [
          {
            "id": "ワ-1",
            "centerPath": "m 21.484 13.77 6.543 34.57",
            "source": "strokesvg"
          },
          {
            "id": "ワ-2",
            "centerPath": "M 18.75 29.004 c 40.625 1.758 42.48 -8.789 61.328 -6.445 -18.457 52.344 -46.191 64.16 -46.191 64.16",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ヲ",
        "word": "ヲ",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ヲ.svg",
        "shadowPaths": [
          "m 72.266 20.605 -6.641 0.684 -37.793 4.199 h -1.66 l -0.586 -0.098 -1.465 -0.293 q -0.684 -0.293 -1.367 -0.293 -0.293 0 -0.684 0.293 l -0.195 0.684 q 0 1.66 1.465 3.516 t 2.539 2.441 l 1.27 0.098 h 0.977 l 6.445 -0.977 8.203 -0.977 a 341.602 341.602 0 0 1 19.141 -2.051 q 4.688 -0.586 8.203 -0.684 c 4.883 -0.391 7.129 -6.934 2.148 -6.543",
          "M 66.504 38.184 h -0.391 l -1.465 0.195 -2.148 0.293 a 1018.359 1018.359 0 0 1 -31.543 3.906 h -2.832 l -2.637 -0.391 q -0.977 0 -0.977 0.879 0 0.586 0.684 2.051 0.684 1.367 1.953 2.539 1.172 1.27 2.539 1.27 l 3.125 -0.293 6.445 -0.781 17.09 -2.148 7.129 -0.879 c 4.59 -0.684 8.301 -6.641 3.027 -6.641",
          "M 54.98 59.082 a 107.52 107.52 0 0 1 -25.977 26.27 l -1.855 1.562 q -0.879 0.684 -0.879 1.367 v 0.098 l 0.098 0.195 q 0.195 0.391 0.879 0.391 1.562 0.098 5.664 -1.953 t 9.668 -6.445 q 5.664 -4.297 11.816 -10.84 a 103.906 103.906 0 0 0 22.949 -40.918 q 0.586 -2.344 1.172 -3.32 0.391 -0.684 0.391 -1.465 0 -1.27 -1.66 -2.441 -1.758 -1.074 -3.125 -1.074 c -4.395 0 -3.418 4.395 -4.004 6.641 -1.855 7.031 -6.152 19.531 -15.137 31.934"
        ],
        "strokes": [
          {
            "id": "ヲ-1",
            "centerPath": "m 15.723 28.125 53.32 -4.492",
            "source": "strokesvg"
          },
          {
            "id": "ヲ-2",
            "centerPath": "m 18.066 45.996 45.312 -4.199",
            "source": "strokesvg"
          },
          {
            "id": "ヲ-3",
            "centerPath": "M 78.223 15.039 C 64.062 68.848 31.348 85.254 31.348 85.254",
            "source": "strokesvg"
          }
        ]
      },
      {
        "char": "ン",
        "word": "ン",
        "viewBox": "0 0 100 100",
        "source": "strokesvg/katakana/ン.svg",
        "shadowPaths": [
          "M 18.848 28.223 q -0.488 0.586 -0.586 1.562 0 1.562 2.051 2.441 2.051 0.684 4.688 2.051 2.832 1.27 5.664 3.027 a 80.469 80.469 0 0 1 9.473 5.859 q 0.781 0.684 1.66 0.684 1.953 -0.098 2.832 -1.855 0.977 -1.855 0.977 -2.93 0 -1.27 -1.562 -2.344 -2.148 -1.465 -5.859 -3.32 a 104.492 104.492 0 0 0 -16.797 -7.227 q -1.367 0 -2.539 2.051",
          "M 29.492 83.789 q 10.742 -4.199 19.922 -9.766 9.18 -5.664 16.602 -11.621 t 12.695 -11.426 8.105 -9.473 2.832 -5.371 q 0 -0.977 -0.879 -0.977 -1.562 0 -4.102 3.125 -1.562 2.051 -5.859 5.957 -4.199 3.809 -10.352 8.594 -6.055 4.688 -13.184 9.375 -7.031 4.688 -14.355 8.496 t -13.965 5.566 l -1.758 0.391 -1.27 0.098 -1.367 -0.098 -0.879 -0.098 q -0.391 0 -0.879 0.293 -0.391 0.391 -0.391 0.977 0 0.977 0.879 2.637 0.977 1.66 2.441 2.93 1.367 1.27 2.539 1.27 1.367 0 3.223 -0.879"
        ],
        "strokes": [
          {
            "id": "ン-1",
            "centerPath": "m 13.379 24.902 26.074 13.77",
            "source": "strokesvg"
          },
          {
            "id": "ン-2",
            "centerPath": "M 14.258 80.078 c 33.301 3.711 70.801 -40.332 70.801 -40.332",
            "source": "strokesvg"
          }
        ]
      }
    ]
  }
};

const katakanaLetters = katakanaData.groups.basicKatakana.map(letter => ({
  ...letter,
  viewBox: letter.viewBox || katakanaData.viewBox,
  strokes: letter.strokes.map(stroke => ({
    ...stroke,
    path: stroke.centerPath || stroke.path
  }))
}));

const kanaPracticeConfigs = {
  hiragana: {
    mode: "hiragana",
    icon: "📚",
    title: "ひらがな広場",
    label: "ひらがな",
    letters: hiraganaLetters,
    completedKey: "hiraganaCompleted"
  },
  katakana: {
    mode: "katakana",
    icon: "📘",
    title: "カタカナ広場",
    label: "カタカナ",
    letters: katakanaLetters,
    completedKey: "katakanaCompleted"
  }
};

let currentKanaMode = "hiragana";

function getActiveKanaConfig() {
  return kanaPracticeConfigs[currentKanaMode] || kanaPracticeConfigs.hiragana;
}

function getActiveKanaLetters() {
  return getActiveKanaConfig().letters;
}
// End kana practice data

let currentHiraganaIndex = 0;
let currentHiraganaStroke = 0;
let hiraganaTraceActive = false;
let hiraganaTracePoints = [];
let hiraganaCompletedTraceLines = [];
let hiraganaGuideFrame = 0;
let hiraganaGuideStartedAt = 0;
let hiraganaSparkleTimer = 0;

function startHiraganaPractice(index = 0) {
  startKanaPractice("hiragana", index);
}

function startKatakanaPractice(index = 0) {
  startKanaPractice("katakana", index);
}

function startKanaPractice(mode = "hiragana", index = 0) {
  const config = kanaPracticeConfigs[mode] || kanaPracticeConfigs.hiragana;
  currentKanaMode = config.mode;
  currentLearningMode = config.mode;
  hideAllPanels();
  areaMenu.classList.add("hidden");
  placeholderPanel.classList.add("hiraganaPanel");
  placeholderPanel.classList.remove("hidden");
  currentHiraganaIndex = Math.max(0, Math.min(config.letters.length - 1, index));
  currentHiraganaStroke = 0;
  hiraganaCompletedTraceLines = [];
  renderHiraganaPractice();
}

function renderHiraganaPractice() {
  stopHiraganaGuide();
  const config = getActiveKanaConfig();
  const letters = config.letters;
  const letter = letters[currentHiraganaIndex];
  placeholderPanel.innerHTML = `
    <div class="hiraganaShell">
      <div class="hiraganaHeader">
        <div>
          <p class="eyebrow">${config.icon} ${config.title}</p>
          <h2>「${letter.char}」を なぞろう</h2>
        </div>
        <div class="hiraganaWord">${letter.word}</div>
      </div>

      <div class="hiraganaLetterTabs">
        ${letters.map((item, index) => `
          <button type="button" class="hiraganaTab ${index === currentHiraganaIndex ? "isActive" : ""}" onclick="selectHiraganaLetter(${index})">${item.char}</button>
        `).join("")}
      </div>

      <div class="hiraganaBoardWrap">
        <svg id="hiraganaBoard" class="hiraganaBoard" viewBox="${letter.viewBox}" aria-label="${config.label}のなぞり書き">
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
            ${(letter.shadowPaths || []).map((path, index) => `<path class="hiraganaShadowShape" data-shadow-id="${index}" d="${path}" />`).join("")}${letter.shadowPaths ? "" : letter.strokes.map(stroke => `<path class="hiraganaGhostPath" data-stroke-id="${stroke.id}" d="${stroke.centerPath || stroke.path}" fill="none" stroke-linecap="round" stroke-linejoin="round" />`).join("")}
          </g>
          <g id="hiraganaStrokeLayer">
            ${letter.strokes.map((stroke, index) => `
              <path id="hiraganaStroke${index}" data-guide-source="${index === currentHiraganaStroke ? "true" : "false"}" data-stroke-id="${stroke.id}" class="hiraganaStroke ${index < currentHiraganaStroke ? "isDone" : index === currentHiraganaStroke ? "isCurrent" : "isWaiting"}" d="${stroke.centerPath || stroke.path}" fill="none" stroke-linecap="round" stroke-linejoin="round" visibility="hidden" style="stroke: transparent !important; opacity: 0 !important;" />
            `).join("")}
          </g>
          <g id="hiraganaTraceLayer">
            ${hiraganaCompletedTraceLines.map(points => `<polyline class="hiraganaTraceLine isDone" points="${points}" fill="none" stroke-linecap="round" stroke-linejoin="round" />`).join("")}
            <polyline id="hiraganaTraceLine" class="hiraganaTraceLine" points="" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </g>
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
        <button type="button" onclick="selectHiraganaLetter(${(currentHiraganaIndex + 1) % letters.length})">つぎのもじ</button>
      </div>
    </div>
  `;

  setupHiraganaBoard();
}

function selectHiraganaLetter(index) {
  const letters = getActiveKanaLetters();
  currentHiraganaIndex = Math.max(0, Math.min(letters.length - 1, index));
  currentHiraganaStroke = 0;
  hiraganaCompletedTraceLines = [];
  renderHiraganaPractice();
}

function resetHiraganaLetter() {
  currentHiraganaStroke = 0;
  hiraganaCompletedTraceLines = [];
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
  return getActiveKanaLetters()[currentHiraganaIndex]?.strokes[currentHiraganaStroke] || null;
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

function getHiraganaTracePointString(points) {
  return points.map(point => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}

function getTraceTravelDistance(points) {
  return points.slice(1).reduce((total, point, index) => total + getPointDistance(points[index], point), 0);
}

function getTracePathFit(points, path) {
  if (!points.length) {
    return { averageDistance: Infinity, farRatio: 1 };
  }

  const sampledPoints = points.filter((_, index) => index % 2 === 0).slice(-26);
  const distances = sampledPoints.map(point => getPathProgress(point, path, 72).distance);
  const averageDistance = distances.reduce((total, distance) => total + distance, 0) / distances.length;
  const farCount = distances.filter(distance => distance > 18).length;
  return {
    averageDistance,
    farRatio: farCount / distances.length
  };
}

function isHiraganaStrokeComplete(point) {
  const path = getCurrentHiraganaPathElement();
  if (!path) return false;

  const length = path.getTotalLength();
  const goal = path.getPointAtLength(length);
  const progress = getPathProgress(point, path, 86);
  const traceDistance = getTraceTravelDistance(hiraganaTracePoints);
  const fit = getTracePathFit(hiraganaTracePoints, path);
  const enoughMovement = hiraganaTracePoints.length >= 9;
  const reachedGoal = getPointDistance(point, goal) <= 13;
  const tracedMostOfPath = progress.ratio >= 0.95 && traceDistance >= length * 0.78;
  const stayedNearPath = progress.distance <= 14 && fit.averageDistance <= 13 && fit.farRatio <= 0.28;
  return enoughMovement && reachedGoal && tracedMostOfPath && stayedNearPath;
}

function completeHiraganaStroke() {
  if (!hiraganaTraceActive) return;

  hiraganaTraceActive = false;
  const traceLine = getHiraganaTracePointString(hiraganaTracePoints);
  if (traceLine) {
    hiraganaCompletedTraceLines[currentHiraganaStroke] = traceLine;
  }
  playSound("correct.mp3");
  showHiraganaSparkle();
  currentHiraganaStroke++;

  const letter = getActiveKanaLetters()[currentHiraganaIndex];
  if (currentHiraganaStroke >= letter.strokes.length) {
    completeHiraganaLetter();
    return;
  }

  window.setTimeout(renderHiraganaPractice, 520);
}

function completeHiraganaLetter() {
  stopHiraganaGuide();
  const config = getActiveKanaConfig();
  const letters = config.letters;
  const letter = letters[currentHiraganaIndex];
  const completed = JSON.parse(localStorage.getItem(config.completedKey) || "[]");
  const isFirstClear = !completed.includes(letter.char);

  if (isFirstClear) {
    completed.push(letter.char);
    localStorage.setItem(config.completedKey, JSON.stringify(completed));
  }

  pendingHiraganaNextIndex = (currentHiraganaIndex + 1) % letters.length;
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
  }, 2000);
}

function startHiraganaPokemonEncounter(letter) {
  const config = getActiveKanaConfig();
  currentLearningMode = config.mode;
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
  const toolReward = awardRandomLearningToolReward();
  const toolRewardText = toolReward ? ` ${getRewardLabel(toolReward.category, toolReward.id)}も ゲット！` : "";
  pokemonName.textContent = currentPokemon.name;
  pokemonImage.dataset.fallbackTried = "false";
  pokemonImage.onerror = () => handlePokemonImageError(pokemonImage, currentPokemon.pokemonId);
  pokemonImage.src = getPokemonImage(currentPokemon.pokemonId);
  questionArea.classList.add("hidden");
  catchArea.classList.remove("hidden");
  nextArea.classList.add("hidden");
  nextButton.textContent = "つぎのもじ";
  message.textContent = `「${letter.char}」が かけた！ ${currentPokemon.name}が あらわれた！${toolRewardText}`;

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
  wrap.innerHTML = ["🌟", "✨", "⭐", "✨"].map((text, index) => `
    <span style="--x:${22 + index * 18}%;--delay:${index * 80}ms">${text}</span>
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

function getHiraganaGuideDuration(path) {
  const length = path?.getTotalLength?.() || 0;
  const duration = length * 52;
  return Math.max(1800, Math.min(7600, duration));
}

function startHiraganaGuide() {
  stopHiraganaGuide();
  const guide = document.getElementById("hiraganaGuidePoint");
  const path = getCurrentHiraganaPathElement();
  if (!guide || !path) return;

  const guideDuration = getHiraganaGuideDuration(path);
  hiraganaGuideStartedAt = performance.now();
  moveHiraganaGuideOnPath(path, guide, 0);

  const animate = (now) => {
    const elapsed = (now - hiraganaGuideStartedAt) % guideDuration;
    const progress = elapsed / guideDuration;
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
function startMathGame(mode = "addition") {
  currentLearningMode = mode;
  if (window.nextButton) {
    nextButton.textContent = "つぎのもんだい";
  }
  hideAllPanels();
  gameScreen.classList.remove("hidden");
  catchCount = 0;
  renderLearningHud();
  loadPokemon();
}

function startAdditionGame() {
  startMathGame("addition");
}

function startSubtractionGame() {
  startMathGame("subtraction");
}

function getRandomPokemon() {
  return pokemonList[Math.floor(Math.random() * pokemonList.length)];
}

function createQuestion() {
  const isSubtraction = currentLearningMode === "subtraction";
  if (!hintUsed) {
    if (isSubtraction) {
      currentA = Math.floor(Math.random() * 9) + 2;
      currentB = Math.floor(Math.random() * currentA) + 1;
    } else {
      currentA = Math.floor(Math.random() * 10) + 1;
      currentB = Math.floor(Math.random() * 10) + 1;
    }
  }

  const a = currentA;
  const b = currentB;
  currentAnswer = isSubtraction ? a - b : a + b;
  question.textContent = isSubtraction ? `${a} - ${b} = ?` : `${a} + ${b} = ?`;

  const maxCount = Math.max(a, b);
  const availableWidth = Math.min(window.innerWidth * 0.42, 260);
  let pokemonSize = Math.floor(availableWidth / Math.min(maxCount, 5));
  pokemonSize = Math.max(24, Math.min(60, pokemonSize));
  const img = getPokemonImage(currentPokemon.pokemonId);

  function makeGroup(count, extraClass = "") {
    let html = `<div class="numberGroup ${extraClass}">`;
    for (let row = 0; row < Math.ceil(count / 5); row++) {
      html += '<div class="numberRow">';
      const start = row * 5;
      const end = Math.min(start + 5, count);
      for (let i = start; i < end; i++) {
        html += `<img src="${img}" onerror="handlePokemonImageError(this, ${currentPokemon.pokemonId})" alt="" style="width:${pokemonSize}px;height:${pokemonSize}px;">`;
      }
      html += "</div>";
    }
    html += "</div>";
    return html;
  }

  if (!hintUsed) {
    visualQuestion.innerHTML = "";
  } else if (isSubtraction) {
    visualQuestion.innerHTML = `${makeGroup(a)}<div class="plusSign minusSign">－</div>${makeGroup(b, "isTaken")}`;
  } else {
    visualQuestion.innerHTML = `${makeGroup(a)}<div class="plusSign">＋</div>${makeGroup(b)}`;
  }

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
  pokemonImage.dataset.fallbackTried = "false";
  pokemonImage.onerror = () => handlePokemonImageError(pokemonImage, currentPokemon.pokemonId);
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

  if (currentLearningMode === "hiragana" || currentLearningMode === "katakana") {
    nextButton.textContent = "つぎのもんだい";
    startKanaPractice(currentLearningMode, pendingHiraganaNextIndex);
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
      ? `<button class="homeDexSlot" onclick="openArea('dex'); showPokemon(${p.dexNo})"><img ${pokemonImageAttrs(p.pokemonId, p.name)}></button>`
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
    <img ${pokemonImageAttrs(p.pokemonId, p.name)} width="180">
    <br><br>
    <button onclick="playCry(${p.pokemonId})">🔊 なきごえ</button>
  `;
}




































































