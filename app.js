// Categorias e Lista de Áudios - Mulher Conectada
const CATEGORIES = [
  {
    id: "todos",
    name: "Todos os Áudios",
    icon: "✦"
  },
  {
    id: "despertar",
    name: "Despertar Matinal",
    icon: "☀️"
  },
  {
    id: "corpo",
    name: "Corpo & Psicossomática",
    icon: "🌿"
  },
  {
    id: "sono",
    name: "Noite & Sono",
    icon: "🌙"
  }
];

const AUDIOS_DATA = [
  {
    id: 1,
    title: "Despertar Matinal",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Ativação vibracional & clareza para o novo dia",
    src: "áudios/Bom dia, Ativação Vibracional.m4a",
    duration: "02:51",
    defaultLoop: false,
    available: true,
    lyrics: [
      { time: 0, text: "Bom dia!" },
      { time: 2, text: "Antes de começar, reserve estes próximos minutos para você." },
      { time: 7, text: "Sente-se confortavelmente, apoie os pés no chão e perceba o contato do seu corpo com o ambiente." },
      { time: 14, text: "Enquanto você escuta a minha voz, permita que sua atenção desperte para o momento presente." },
      { time: 20, text: "Observe os sons ao seu redor, sinta seu corpo, reconheça:" },
      { time: 26, text: "Um novo dia começou e você está aqui." },
      { time: 30, text: "Diga mentalmente: Eu estou presente. Eu posso escolher como quero conduzir o meu dia." },
      { time: 37, text: "Agora, alongue suavemente a coluna, relaxe os ombros e abra espaço no peito." },
      { time: 45, text: "Perceba seu corpo e como sua postura participa da maneira como você experimenta o ambiente." },
      { time: 54, text: "Inspire tranquilamente pelo nariz e solte o ar devagar." },
      { time: 61, text: "Agora, vamos despertar a sua atenção por meio de algumas perguntas." },
      { time: 65, text: "Não precisa encontrar respostas imediatamente. Apenas permita-se explorar novas possibilidades." },
      { time: 73, text: "O que está disponível para mim hoje que ainda não percebi?" },
      { time: 78, text: "Que novas escolhas posso fazer quando não ajo automaticamente pelos padrões de ontem?" },
      { time: 86, text: "Qual atitude consciente pode aproximar a minha vida daquilo que desejo construir?" },
      { time: 92, text: "Como posso viver este dia com mais presença, confiança e abertura?" },
      { time: 100, text: "Perceba: aquilo para o qual direcionamos nossa atenção influencia o que notamos, reconhecemos e escolhemos." },
      { time: 109, text: "E cada nova experiência pode se tornar uma oportunidade de aprendizagem." },
      { time: 115, text: "Coloque uma das mãos sobre o peito, sinta sua respiração, reconheça a vida acontecendo em você." },
      { time: 124, text: "E dê este comando: corpo, mente e consciência, vamos caminhar em integração." },
      { time: 133, text: "Eu me permito aprender, mudar, escolher e construir." },
      { time: 139, text: "Não preciso controlar tudo. Posso participar ativamente da minha própria história." },
      { time: 147, text: "Agora, respire mais uma vez, suavize o rosto, sorria e prepare-se para levantar." },
      { time: 157, text: "Eu ativo minha vida. Hoje é um novo dia. E eu estou aqui para vivê-lo." },
      { time: 165, text: "Bom dia! ✨" }
    ]
  },
  {
    id: 2,
    title: "Eu Sou Capaz",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Autoconfiança & poder interior",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 3,
    title: "Eu Me Permito Receber",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Merecimento e receptividade",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 4,
    title: "Eu Escolho a Abundância",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Mentalidade e escolhas conscientes",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 5,
    title: "Eu Libero o Controle",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Flexibilidade emocional & fluidez",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 6,
    title: "Eu Reconheço Meu Valor",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Autoestima, presença e amor-próprio",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 7,
    title: "Eu Ativo Minha Coragem",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Iniciativa, foco e ação",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 8,
    title: "Eu Acolho Minhas Emoções",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Autorregulação e harmonia interna",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 9,
    title: "Eu Reprogramo Meus Hábitos",
    category: "despertar",
    categoryLabel: "Despertar Matinal",
    subtitle: "Aprendizagem e neuroplasticidade",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  },
  {
    id: 11,
    title: "Alívio de Dores de Cabeça & Tensão",
    category: "corpo",
    categoryLabel: "Corpo & Psicossomática",
    subtitle: "Liberação de estresse e sobrecarga mental",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    isPremium: true,
    buyUrl: "https://pay.hotmart.com/seu-link-aqui", // Link de checkout / compra
    lyrics: []
  },
  {
    id: 12,
    title: "Relaxamento Físico & Escuta Corporal",
    category: "corpo",
    categoryLabel: "Corpo & Psicossomática",
    subtitle: "Desbloqueio de nós musculares e somatização",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    isPremium: true,
    buyUrl: "https://pay.hotmart.com/seu-link-aqui",
    lyrics: []
  },
  {
    id: 13,
    title: "Descompressão Cervical & Ombros",
    category: "corpo",
    categoryLabel: "Corpo & Psicossomática",
    subtitle: "Alívio do peso do dia e da rigidez emocional",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    isPremium: true,
    buyUrl: "https://pay.hotmart.com/seu-link-aqui",
    lyrics: []
  },
  {
    id: 10,
    title: "Eu Encerro Meu Dia",
    category: "sono",
    categoryLabel: "Noite & Sono",
    subtitle: "Desaceleração e preparação para o sono reparador",
    src: "",
    duration: "--:--",
    defaultLoop: true,
    available: false,
    lyrics: []
  }
];

// Elementos do DOM
const audioElement = document.getElementById('audioElement');
const categoriesNav = document.getElementById('categoriesNav');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const currentCategoryPill = document.getElementById('currentCategoryPill');
const audiosGrid = document.getElementById('audiosGrid');
const bottomPlayer = document.getElementById('bottomPlayer');
const playerThumb = document.getElementById('playerThumb');
const playerTitle = document.getElementById('playerTitle');
const playerSubtitle = document.getElementById('playerSubtitle');
const btnMainPlay = document.getElementById('btnMainPlay');
const mainPlayIcon = document.getElementById('mainPlayIcon');
const btnLoop = document.getElementById('btnLoop');
const btnLyrics = document.getElementById('btnLyrics');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const totalDurationEl = document.getElementById('totalDuration');

// Modal de Letras
const lyricsModal = document.getElementById('lyricsModal');
const lyricsBackdrop = document.getElementById('lyricsBackdrop');
const btnCloseLyrics = document.getElementById('btnCloseLyrics');
const lyricsTrackTitle = document.getElementById('lyricsTrackTitle');
const lyricsScrollArea = document.getElementById('lyricsScrollArea');

// Estado
let selectedCategory = "todos";
let currentTrackIndex = -1;
let isPlaying = false;
let isLoop = false;
let currentLyricElements = [];
let activeLyricIndex = -1;

// Renderizar Menu de Categorias
function renderCategories() {
  categoriesNav.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `category-pill ${cat.id === selectedCategory ? 'active' : ''}`;
    btn.innerHTML = `<span class="cat-icon">${cat.icon}</span> ${cat.name}`;
    btn.addEventListener('click', () => {
      selectedCategory = cat.id;
      if (currentCategoryPill) {
        currentCategoryPill.textContent = cat.name;
      }
      // Fecha a gaveta no celular após escolher o tema
      if (categoriesNav.classList.contains('open')) {
        categoriesNav.classList.remove('open');
        menuToggleBtn.classList.remove('active');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      }
      renderCategories();
      renderGrid();
    });
    categoriesNav.appendChild(btn);
  });
}

// Controle do Menu Hambúrguer (Mobile)
if (menuToggleBtn) {
  menuToggleBtn.addEventListener('click', () => {
    const isOpen = categoriesNav.classList.toggle('open');
    menuToggleBtn.classList.toggle('active', isOpen);
    menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Renderizar Grade de Cards
function renderGrid() {
  audiosGrid.innerHTML = '';

  const filtered = AUDIOS_DATA.filter(item => {
    if (selectedCategory === "todos") return true;
    return item.category === selectedCategory;
  });

  filtered.forEach((item) => {
    const realIndex = AUDIOS_DATA.findIndex(a => a.id === item.id);
    const card = document.createElement('div');
    const isCurrentActive = currentTrackIndex === realIndex && isPlaying;
    
    card.className = `audio-card ${item.available ? '' : 'is-coming-soon'} ${isCurrentActive ? 'active' : ''}`;
    card.id = `card-${realIndex}`;

    // Status / Badges no topo do Card
    let topBadgeHtml = '';
    if (item.isPremium) {
      topBadgeHtml = `<span class="card-status-badge badge-premium">🔒 Exclusivo</span>`;
    } else if (!item.available) {
      topBadgeHtml = `<span class="card-status-badge badge-soon">✨ Em breve</span>`;
    } else if (item.defaultLoop) {
      topBadgeHtml = `<span class="card-status-badge badge-loop">🔁 Repetição</span>`;
    } else {
      topBadgeHtml = `<span class="card-status-badge badge-ready">Ativo</span>`;
    }

    const playBtnIcon = item.isPremium
      ? `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
      : (isCurrentActive 
          ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
          : '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>');

    card.innerHTML = `
      ${topBadgeHtml}
      <button class="card-play-btn ${item.isPremium ? 'card-lock-btn' : ''}" aria-label="${item.isPremium ? 'Desbloquear' : 'Tocar'} ${item.title}">
        ${playBtnIcon}
      </button>
      <div class="card-meta-tag">${item.categoryLabel}</div>
      <div class="card-title">${item.title}</div>
      <div class="card-subtitle">${item.subtitle}</div>
      <div class="card-duration">${item.isPremium ? 'Áudio em produção • Desbloquear' : (item.available ? item.duration : 'Áudio em produção')}</div>
    `;

    card.addEventListener('click', () => {
      if (item.isPremium) {
        showPremiumModal(item);
        return;
      }
      if (!item.available || !item.src) {
        showComingSoonToast(item.title);
        return;
      }
      playTrack(realIndex);
    });

    audiosGrid.appendChild(card);
  });
}

// Toast suave para "Em Breve"
function showComingSoonToast(title) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `🌸 O áudio <strong>"${title}"</strong> estará disponível em breve!`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// Modal Informativo para Áudios Exclusivos / Psicossomáticos
function showPremiumModal(item) {
  const modal = document.createElement('div');
  modal.className = 'premium-modal';
  modal.innerHTML = `
    <div class="premium-backdrop"></div>
    <div class="premium-card">
      <div class="premium-icon">🌿</div>
      <span class="premium-tag">EXCLUSIVO • PSICOSSOMÁTICA & CORPO</span>
      <h3>${item.title}</h3>
      <p class="premium-desc">${item.subtitle}</p>
      
      <div class="premium-note">
        <strong>💡 Lembrete Importante de Cuidado:</strong><br>
        Práticas integrativas auxiliam muito em dores decorrentes de estresse, tensão acumulada e estados emocionais. Lembre-se sempre de investigar a causa física (como hidratação, postura e consulta médica).
      </div>

      <div class="premium-status-box">
        🛠️ <em>Este áudio está em gravação & produção final.</em>
      </div>

      <div class="premium-actions">
        <button class="btn-buy" onclick="window.open('${item.buyUrl}', '_blank')">
          Garantir Acesso / Desbloquear ✨
        </button>
        <button class="btn-close-premium">Voltar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('open'), 10);

  const closeFn = () => {
    modal.classList.remove('open');
    setTimeout(() => modal.remove(), 300);
  };

  modal.querySelector('.premium-backdrop').addEventListener('click', closeFn);
  modal.querySelector('.btn-close-premium').addEventListener('click', closeFn);
}

// Tocar faixa selecionada
function playTrack(index) {
  if (currentTrackIndex === index) {
    togglePlayPause();
    return;
  }

  currentTrackIndex = index;
  const track = AUDIOS_DATA[index];

  audioElement.src = track.src;
  audioElement.loop = track.defaultLoop;
  isLoop = track.defaultLoop;
  updateLoopUI();

  playerTitle.textContent = track.title;
  playerSubtitle.textContent = track.subtitle;
  lyricsTrackTitle.textContent = track.title;

  audioElement.play().then(() => {
    setPlayState(true);
  }).catch(err => {
    console.error("Erro ao reproduzir áudio:", err);
  });

  renderLyrics(track.lyrics);
  updateActiveCards();
}

// Alternar Play / Pause
function togglePlayPause() {
  if (currentTrackIndex === -1) {
    const firstAvailable = AUDIOS_DATA.findIndex(a => a.available && a.src);
    if (firstAvailable !== -1) playTrack(firstAvailable);
    return;
  }

  if (audioElement.paused) {
    audioElement.play();
    setPlayState(true);
  } else {
    audioElement.pause();
    setPlayState(false);
  }
}

function setPlayState(playing) {
  isPlaying = playing;
  if (playing) {
    mainPlayIcon.innerHTML = `
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    `;
    playerThumb.classList.add('playing');
  } else {
    mainPlayIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    playerThumb.classList.remove('playing');
  }
  updateActiveCards();
}

function updateActiveCards() {
  AUDIOS_DATA.forEach((item, idx) => {
    const card = document.getElementById(`card-${idx}`);
    if (!card) return;
    const playBtnSvg = card.querySelector('.card-play-btn svg');
    if (idx === currentTrackIndex && isPlaying) {
      card.classList.add('active');
      playBtnSvg.innerHTML = `
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      `;
    } else {
      card.classList.remove('active');
      playBtnSvg.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    }
  });
}

// Alternar Repetição (Loop)
btnLoop.addEventListener('click', () => {
  isLoop = !isLoop;
  audioElement.loop = isLoop;
  updateLoopUI();
});

function updateLoopUI() {
  if (isLoop) {
    btnLoop.classList.add('active');
  } else {
    btnLoop.classList.remove('active');
  }
}

// Atualização de Progresso e Tempo
audioElement.addEventListener('timeupdate', () => {
  if (!audioElement.duration) return;
  const curr = audioElement.currentTime;
  const dur = audioElement.duration;
  
  const pct = (curr / dur) * 100;
  progressFill.style.width = `${pct}%`;
  currentTimeEl.textContent = formatTime(curr);
  totalDurationEl.textContent = formatTime(dur);

  syncLyrics(curr);
});

audioElement.addEventListener('loadedmetadata', () => {
  totalDurationEl.textContent = formatTime(audioElement.duration);
});

audioElement.addEventListener('ended', () => {
  if (!isLoop) {
    setPlayState(false);
  }
});

// Clique na barra de progresso
progressBar.addEventListener('click', (e) => {
  if (!audioElement.duration) return;
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = clickX / rect.width;
  audioElement.currentTime = pct * audioElement.duration;
});

function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// =========================================
// Sincronização de Letras Estilo Spotify
// =========================================
function renderLyrics(lyrics) {
  lyricsScrollArea.innerHTML = '';
  currentLyricElements = [];
  activeLyricIndex = -1;

  if (!lyrics || lyrics.length === 0) {
    lyricsScrollArea.innerHTML = `
      <div style="text-align: center; color: var(--text-secondary); margin-top: 60px; font-size: 1.1rem; line-height: 1.8;">
        🌸 Em breve a letra sincronizada deste áudio estará disponível aqui!
      </div>
    `;
    return;
  }

  lyrics.forEach((line) => {
    const el = document.createElement('div');
    el.className = 'lyric-line';
    el.textContent = line.text;
    el.dataset.time = line.time;

    // Clicar na frase pula o áudio direto para ela (estilo Spotify)
    el.addEventListener('click', () => {
      audioElement.currentTime = line.time;
      if (audioElement.paused) audioElement.play();
    });

    lyricsScrollArea.appendChild(el);
    currentLyricElements.push({ el, time: line.time });
  });
}

function syncLyrics(currentTime) {
  if (currentLyricElements.length === 0) return;

  let indexToHighlight = -1;
  for (let i = 0; i < currentLyricElements.length; i++) {
    if (currentTime >= currentLyricElements[i].time) {
      indexToHighlight = i;
    } else {
      break;
    }
  }

  if (indexToHighlight !== activeLyricIndex && indexToHighlight !== -1) {
    if (activeLyricIndex !== -1 && currentLyricElements[activeLyricIndex]) {
      currentLyricElements[activeLyricIndex].el.classList.remove('active');
    }

    activeLyricIndex = indexToHighlight;
    const activeEl = currentLyricElements[activeLyricIndex].el;
    activeEl.classList.add('active');

    // Rolar suavemente para manter a frase em foco
    activeEl.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}

// Abrir e Fechar Modal de Letra
function openLyrics() {
  lyricsModal.classList.add('open');
}

function closeLyrics() {
  lyricsModal.classList.remove('open');
}

btnLyrics.addEventListener('click', openLyrics);
btnCloseLyrics.addEventListener('click', closeLyrics);
lyricsBackdrop.addEventListener('click', closeLyrics);
btnMainPlay.addEventListener('click', togglePlayPause);

// Inicia aplicação
renderCategories();
renderGrid();
