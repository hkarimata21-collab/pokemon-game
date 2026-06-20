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
let catchCount = 0;
let isCatching = false;
let catchResolved = false;
let hintUsed = false;
let currentA = 0;
let currentB = 0;
let activeSticker = null;
let selectedSticker = null;
let currentStickerBackground = "forest";
let stickerDragMoved = false;
let stickerOffsetX = 0;
let stickerOffsetY = 0;
let stickerStartX = 0;
let stickerStartY = 0;
let stickerPendingPosition = null;
let stickerMoveFrame = null;

const soundFiles = [
  "correct.mp3",
  "wrong.mp3",
  "throw.mp3",
  "shake.mp3",
  "get.mp3",
  "escape.mp3"
];

const soundPools = {};
const soundPoolIndex = {};
let crySound = null;
let activeThrowSound = null;
let soundsUnlocked = false;

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
  if (soundsUnlocked) return;
  soundsUnlocked = true;

  soundFiles.forEach(file => {
    const audio = soundPools[file][0];
    audio.muted = true;
    audio.currentTime = 0;
    audio.play()
      .then(() => {
        resetAudio(audio);
        audio.muted = false;
      })
      .catch(() => {
        audio.muted = false;
      });
  });

  resumePendingBgm();
}

window.addEventListener("pointerdown", unlockSoundsOnce, { once: true });
window.addEventListener("touchstart", unlockSoundsOnce, { once: true, passive: true });
window.addEventListener("click", unlockSoundsOnce, { once: true });

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
      { label: "ひらがな", action: "showComingSoon('ひらがな')" },
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


function createBgm(file) {
  const audio = new Audio(file);
  audio.preload = "auto";
  audio.loop = true;
  audio.volume = 0.34;
  audio.load();
  return audio;
}

function resumePendingBgm() {
  if (!pendingBgmFile) return;
  playBgm(pendingBgmFile);
}

function playBgm(file, options = {}) {
  if (!file) return;
  pendingBgmFile = file;

  if (currentBgmFile === file && bgmAudio && !options.restart) {
    bgmAudio.play().catch(() => {});
    return;
  }

  if (bgmAudio) {
    bgmAudio.pause();
    try {
      bgmAudio.currentTime = 0;
    } catch (_) {}
  }

  currentBgmFile = file;
  bgmAudio = createBgm(file);

  if (!soundsUnlocked) return;
  bgmAudio.play().catch(() => {});
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
function hideAllPanels() {
  areaMenu.classList.add("hidden");
  placeholderPanel.classList.add("hidden");
  stickerArea.classList.add("hidden");
  gameScreen.classList.add("hidden");
  dexPanel.classList.add("hidden");
}

function goHome() {
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
  const dex = JSON.parse(localStorage.getItem("dex") || "[]");
  const count = dex.length;
  const reward = count >= 20 ? "金のスター" : count >= 10 ? "銀のスター" : count >= 3 ? "銅のスター" : "はじめてバッジ";
  hideAllPanels();
  areaMenu.classList.remove("hidden");
  placeholderPanel.innerHTML = `
    <h2>🎁 ${reward}</h2>
    <p>いままでに ${count} ひきのポケモンをゲットしたよ。</p>
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
    showRewardNotice(reward?.label || "あたらしいアイテム");
  }

  if (!stickerArea.classList.contains("hidden")) {
    renderStickerChoices();
  }

  return true;
}

function showRewardNotice() {
  // Rewards stay quiet for now so pretend play remains the main focus.
}

function awardNextLearningReward() {
  let progress = Number(localStorage.getItem("learningRewardProgress") || "0");

  while (progress < learningRewardPlan.length) {
    const reward = learningRewardPlan[progress];
    progress++;
    localStorage.setItem("learningRewardProgress", String(progress));

    if (addOwnedReward(reward.category, reward.id)) {
      return true;
    }
  }

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
  areaMenu.classList.add("hidden");
  stickerArea.classList.remove("hidden");
  renderStickerChoices();
  const owned = getOwnedRewards();
  const savedBackground = localStorage.getItem("stickerBackground") || owned.background[0] || "forest";
  setStickerBackground(savedBackground, { saveCurrent: false });
}

function getStickerStorageKey(background = currentStickerBackground) {
  return `stickerScene:${background}`;
}

function renderStickerChoices() {
  renderBackgroundChoices();
  renderPokemonStickerChoices();
  renderItemStickerChoices();
}

function renderItemStickerChoices() {
  const owned = getOwnedRewards();
  const ownedItems = placeableRewardCategories.flatMap(category =>
    (owned[category] || [])
      .map(id => getRewardDefinition(category, id))
      .filter(Boolean)
  );

  if (ownedItems.length === 0) {
    itemStickerTray.innerHTML = `<div class="emptyPaletteMessage">?</div>`;
    return;
  }

  itemStickerTray.innerHTML = ownedItems.map(item => `
    <button class="paletteSticker" type="button" onclick="addItemSticker('${item.category}', '${item.id}')" aria-label="${item.label}">
      ${item.icon}
    </button>
  `).join("");
}

function renderPokemonStickerChoices() {
  const owned = getOwnedRewards();
  const ownedPokemon = (owned.pokemon || [])
    .map(no => pokemonList.find(p => String(p.dexNo) === String(no)))
    .filter(Boolean);

  if (ownedPokemon.length === 0) {
    pokemonStickerTray.innerHTML = `<div class="emptyPaletteMessage">?</div>`;
    return;
  }

  pokemonStickerTray.innerHTML = ownedPokemon.map(p => `
    <button class="paletteSticker pokemonPaletteSticker" type="button" onclick="addPokemonSticker(${p.dexNo})" aria-label="${p.name}">
      <img src="${getPokemonImage(p.pokemonId)}" alt="${p.name}">
    </button>
  `).join("");
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
    button.classList.toggle("isActive", button.getAttribute("onclick").includes(`'${name}'`));
  });

  loadStickerScene();
}

function addSticker(mark) {
  addItemSticker(mark);
}

function addItemSticker(category, itemId) {
  const item = getRewardDefinition(category, itemId);
  if (!item) return;

  createSticker({
    type: "item",
    itemId: item.id,
    category: item.category,
    content: item.icon,
    label: item.label
  });
}

function addPokemonSticker(dexNo) {
  const p = pokemonList.find(x => x.dexNo === dexNo);
  if (!p) return;

  createSticker({
    type: "pokemon",
    dexNo: p.dexNo,
    pokemonId: p.pokemonId,
    content: getPokemonImage(p.pokemonId),
    label: p.name
  });
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
    sticker.style.left = `${22 + Math.random() * 44}%`;
    sticker.style.top = `${20 + Math.random() * 44}%`;
  }

  updateStickerTransform(sticker);
  stickerBoard.appendChild(sticker);
  if (sticker.dataset.type === "pokemon" && sticker.dataset.reaction) {
    applyPokemonReaction(sticker, sticker.dataset.reaction, { quiet: true });
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
}

function updateStickerTransform(sticker) {
  const scale = Number(sticker.dataset.scale || 1);
  const rotation = Number(sticker.dataset.rotation || 0);
  const dragBoost = sticker.classList.contains("isDragging") ? 1.1 : 1;
  const pose = sticker.dataset.reaction || "";
  const poseRotate = pose === "sleep" ? -16 : pose === "sit" ? -4 : 0;
  const poseY = pose === "sit" ? 8 : pose === "eat" ? -2 : 0;
  const poseScaleX = pose === "sleep" ? 1.08 : 1;
  const poseScaleY = pose === "sleep" ? 0.9 : 1;
  const transform = `translateY(${poseY}px) scale(${(scale * dragBoost * poseScaleX).toFixed(3)}, ${(scale * dragBoost * poseScaleY).toFixed(3)}) rotate(${rotation + poseRotate}deg)`;
  sticker.style.transform = transform;
  sticker.style.setProperty("--rest-transform", transform);
}

function clearPokemonReaction(sticker) {
  sticker.classList.remove("isSleeping", "isSitting", "isEating", "isHappy", "isHealing", "isLearning");
  sticker.dataset.reaction = "";
  sticker.dataset.bubble = "";
  updateStickerTransform(sticker);
}

function applyPokemonReaction(sticker, reaction, options = {}) {
  if (!sticker || sticker.dataset.type !== "pokemon") return;

  sticker.classList.remove("isSleeping", "isSitting", "isEating", "isHappy", "isHealing", "isLearning");
  const reactionClass = {
    sleep: "isSleeping",
    sit: "isSitting",
    eat: "isEating",
    happy: "isHappy",
    heal: "isHealing",
    learn: "isLearning"
  }[reaction];

  if (!reactionClass) {
    clearPokemonReaction(sticker);
    return;
  }

  sticker.dataset.reaction = reaction;
  sticker.classList.add(reactionClass);
  sticker.dataset.bubble = {
    sleep: "Zzz",
    sit: "すわった",
    eat: "もぐもぐ",
    happy: "♪",
    heal: "げんき!",
    learn: "できた!"
  }[reaction] || "";
  updateStickerTransform(sticker);

  if (!options.quiet && reaction === "happy") {
    playCry(Number(sticker.dataset.pokemonId || 0));
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

  if (itemId === "bed" || itemId === "sofa") return "sleep";
  if (itemId === "chair" || itemId === "table") return "sit";
  if (category === "food" || itemId === "restaurant") return "eat";
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
    applyPokemonReaction(pokemonSticker, nearest.reaction);
  }
}

function playStickerBounce(sticker) {
  sticker.classList.remove("landed", "tapBounce");
  void sticker.offsetWidth;
  sticker.classList.add("landed");
  window.setTimeout(() => sticker.classList.remove("landed"), 360);
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
    }
    stickerPendingPosition = null;
    stickerMoveFrame = null;
  });
}

function deleteSelectedSticker() {
  if (!selectedSticker) return;
  selectedSticker.remove();
  selectedSticker = null;
  saveStickerScene();
}

function scaleSelectedSticker(multiplier) {
  if (!selectedSticker) return;
  const nextScale = Math.max(0.55, Math.min(2.3, Number(selectedSticker.dataset.scale || 1) * multiplier));
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
      reaction: sticker.dataset.reaction || ""
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
}

stickerBoard.addEventListener("pointerdown", (event) => {
  const sticker = event.target.closest(".sticker");
  if (!sticker) {
    selectSticker(null);
    return;
  }

  activeSticker = sticker;
  stickerDragMoved = false;
  stickerStartX = event.clientX;
  stickerStartY = event.clientY;
  selectSticker(sticker);

  if (sticker.dataset.type === "pokemon") {
    clearPokemonReaction(sticker);
  }

  const rect = sticker.getBoundingClientRect();
  stickerOffsetX = event.clientX - rect.left;
  stickerOffsetY = event.clientY - rect.top;
  sticker.classList.add("isDragging");
  updateStickerTransform(sticker);
  sticker.setPointerCapture(event.pointerId);
});

stickerBoard.addEventListener("pointermove", (event) => {
  if (!activeSticker) return;

  if (Math.hypot(event.clientX - stickerStartX, event.clientY - stickerStartY) > 6) {
    stickerDragMoved = true;
  }

  moveStickerToPointer(event);
});

function finishStickerPointer(event) {
  if (!activeSticker) return;

  const sticker = activeSticker;
  sticker.classList.remove("isDragging");
  updateStickerTransform(sticker);

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
}

stickerBoard.addEventListener("pointerup", finishStickerPointer);
stickerBoard.addEventListener("pointercancel", finishStickerPointer);

function startAdditionGame() {
  hideAllPanels();
  gameScreen.classList.remove("hidden");
  catchCount = 0;
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
  loadPokemon();
  ballImg.style.display = "none";
  ballImg.classList.remove("shake-3", "throw", "shake-once");
  ballImg.style.transform = "";
  catchArea.classList.add("hidden");
  nextArea.classList.add("hidden");
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






















