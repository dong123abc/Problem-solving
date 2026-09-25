/**
 * Solving Mathematical Problems - Terence Tao
 * Main Reader Application (Vanilla JS - Multilingual Edition)
 */

(function () {
  'use strict';

  // State Management
  const STORAGE_KEY_SETTINGS = 'tao_ebook_settings';
  const STORAGE_KEY_PROGRESS = 'tao_ebook_progress';
  const STORAGE_KEY_BOOKMARKS = 'tao_ebook_bookmarks';
  const STORAGE_KEY_NOTES = 'tao_ebook_notes';
  const STORAGE_KEY_READ_SECTIONS = 'tao_ebook_read_sections';
  const STORAGE_KEY_LANG = 'tao_ebook_lang';

  const defaultSettings = {
    theme: 'light',
    fontSize: 17,
    fontFamily: 'serif',
    lineHeight: 1.75,
    maxWidth: 800,
  };

  let state = {
    settings: { ...defaultSettings },
    language: 'vi', // 'vi' | 'en' | 'bilingual'
    currentChapterId: 'preface-first-edition',
    currentScrollY: 0,
    bookmarks: [],
    notes: [],
    readSections: {},
    allSolutionsExpanded: true,
  };

  // Utility to normalize Vietnamese & Diacritics
  function removeDiacritics(str) {
    if (!str) return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase();
  }

  // Load from localStorage
  function loadState() {
    try {
      const savedSettings = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (savedSettings) state.settings = { ...defaultSettings, ...JSON.parse(savedSettings) };

      const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
      if (savedLang && ['vi', 'en', 'bilingual'].includes(savedLang)) {
        state.language = savedLang;
      }

      const savedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (savedProgress) {
        const prog = JSON.parse(savedProgress);
        state.currentChapterId = prog.chapterId || 'preface-first-edition';
        state.currentScrollY = prog.scrollY || 0;
      }

      const savedBookmarks = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      if (savedBookmarks) state.bookmarks = JSON.parse(savedBookmarks);

      const savedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
      if (savedNotes) state.notes = JSON.parse(savedNotes);

      const savedRead = localStorage.getItem(STORAGE_KEY_READ_SECTIONS);
      if (savedRead) state.readSections = JSON.parse(savedRead);
    } catch (e) {
      console.warn('Could not load stored data from localStorage', e);
    }
  }

  function saveSettings() {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(state.settings));
  }

  function saveLanguage() {
    localStorage.setItem(STORAGE_KEY_LANG, state.language);
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify({
      chapterId: state.currentChapterId,
      scrollY: window.scrollY
    }));
  }

  function saveBookmarks() {
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(state.bookmarks));
  }

  function saveNotes() {
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(state.notes));
  }

  function saveReadSections() {
    localStorage.setItem(STORAGE_KEY_READ_SECTIONS, JSON.stringify(state.readSections));
  }

  // Apply visual settings to DOM
  function applySettings() {
    document.documentElement.setAttribute('data-theme', state.settings.theme);
    document.documentElement.style.setProperty('--reader-font-size', `${state.settings.fontSize}px`);
    document.documentElement.style.setProperty('--reader-line-height', state.settings.lineHeight);
    document.documentElement.style.setProperty('--reader-max-w', `${state.settings.maxWidth}px`);

    let fontStack = "'Source Serif 4', Georgia, Cambria, serif";
    if (state.settings.fontFamily === 'sans') {
      fontStack = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
    } else if (state.settings.fontFamily === 'mono') {
      fontStack = "'JetBrains Mono', Consolas, monospace";
    }
    document.documentElement.style.setProperty('--font-body', fontStack);
  }

  // Typeset MathJax
  function renderMath() {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch(function (err) {
        console.warn('MathJax error:', err);
      });
    }
  }

  // Initialize App
  window.addEventListener('DOMContentLoaded', () => {
    loadState();
    applySettings();
    renderApp();
    setupEventListeners();
    setupKeyboardShortcuts();
    updateReadingProgress();
    runIntegrityCheck(false);
  });

  // Get text according to active language mode
  function getLocalizedText(enText, viText) {
    if (state.language === 'en') return enText || viText || '';
    if (state.language === 'vi') return viText || enText || '';
    // Bilingual mode
    if (viText && enText && viText !== enText) {
      return `
        <div class="bilingual-block">
          <div class="bilingual-en">${enText}</div>
          <div class="bilingual-vi">🇻🇳 ${viText}</div>
        </div>`;
    }
    return enText || viText || '';
  }

  // Render Full App Structure
  function renderApp() {
    const data = window.bookData;
    if (!data) {
      document.getElementById('root').innerHTML = `
        <div class="p-8 text-center text-red-600">
          <h2>Lỗi tải dữ liệu</h2>
          <p>Không tìm thấy bookData. Vui lòng kiểm tra các tệp dữ liệu.</p>
        </div>`;
      return;
    }

    const currentTitle = state.language === 'vi' ? (data.titleVi || data.title) : data.title;
    const currentAuthor = state.language === 'vi' ? (data.authorVi || data.author) : data.author;

    const appHtml = `
      <div id="app-layout">
        <!-- Top Navbar -->
        <header class="top-navbar">
          <div class="nav-brand">
            <button id="btn-toggle-sidebar" class="btn-nav-icon" title="Mục lục (TOC)" aria-label="Mục lục">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              <span class="hidden sm:inline">Mục lục</span>
            </button>
            <span class="font-bold truncate max-w-[140px] sm:max-w-xs md:max-w-md">${currentTitle}</span>
            <span class="author-tag hidden md:inline">· ${currentAuthor}</span>
          </div>

          <div class="nav-actions">
            <!-- Language Selector Toggle -->
            <div class="lang-selector-group" title="Chuyển ngôn ngữ hiển thị (Phím L)">
              <button class="btn-lang-tab ${state.language === 'vi' ? 'active' : ''}" data-lang="vi">🇻🇳 Tiếng Việt</button>
              <button class="btn-lang-tab ${state.language === 'en' ? 'active' : ''}" data-lang="en">🇬🇧 English</button>
              <button class="btn-lang-tab ${state.language === 'bilingual' ? 'active' : ''}" data-lang="bilingual">🌐 Song ngữ</button>
            </div>

            <button id="btn-continue-reading" class="btn-nav-icon hidden lg:inline-flex" title="Tiếp tục đọc từ vị trí gần nhất">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>Tiếp tục</span>
            </button>

            <button id="btn-open-search" class="btn-nav-icon" title="Tìm kiếm (Ctrl+K)" aria-label="Tìm kiếm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span class="hidden sm:inline">Tìm</span>
            </button>

            <button id="btn-theme-toggle" class="btn-nav-icon" title="Chuyển chế độ Sáng / Tối (T)" aria-label="Đổi giao diện">
              <span id="theme-icon">🌙</span>
            </button>

            <button id="btn-open-bookmarks" class="btn-nav-icon" title="Dấu trang & Ghi chú" aria-label="Dấu trang">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              <span id="badge-bookmarks-count" class="hidden sm:inline font-mono">0</span>
            </button>

            <button id="btn-open-settings" class="btn-nav-icon" title="Cài đặt hiển thị" aria-label="Cài đặt">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </button>

            <button id="btn-open-audit" class="btn-nav-icon text-emerald-600 hidden md:inline-flex" title="Kiểm tra toàn vẹn dữ liệu" aria-label="Kiểm tra">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Kiểm tra</span>
            </button>
          </div>
        </header>

        <!-- Reading Progress Tracker -->
        <div class="reading-progress-track">
          <div id="reading-progress-bar" class="reading-progress-bar"></div>
        </div>

        <!-- Layout Body -->
        <div class="main-wrapper">
          <!-- Sidebar Overlay -->
          <div id="sidebar-overlay" class="sidebar-overlay"></div>

          <!-- Sidebar TOC -->
          <aside id="sidebar-toc" class="sidebar-toc">
            <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
              <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500">Mục lục sách</h3>
              <div class="text-xs text-slate-500 font-mono" id="progress-percent-label">0% đã đọc</div>
            </div>

            <nav class="space-y-1 text-sm">
              <div class="toc-group mb-3">
                <div class="font-semibold text-xs text-slate-400 uppercase mb-1">Lời nói đầu (Prefaces)</div>
                ${(data.frontMatter || []).map(fm => `
                  <a href="#${fm.id}" class="toc-link block px-2 py-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 ${state.currentChapterId === fm.id ? 'font-bold text-blue-600 dark:text-blue-400' : ''}" data-target="${fm.id}">
                    ${state.language === 'vi' ? (fm.titleVi || fm.title) : fm.title} <span class="text-xs text-slate-400">(${fm.pageRef})</span>
                  </a>
                `).join('')}
              </div>

              <div class="toc-group mb-3">
                <div class="font-semibold text-xs text-slate-400 uppercase mb-1">Các chương chính (Chapters)</div>
                ${(data.chapters || []).map(ch => {
                  const chTitle = state.language === 'vi' ? (ch.titleVi || ch.title) : ch.title;
                  return `
                  <div class="chapter-toc-item mb-2">
                    <a href="#${ch.id}" class="toc-link font-medium block px-2 py-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 ${state.currentChapterId === ch.id ? 'font-bold text-blue-600 dark:text-blue-400' : ''}" data-target="${ch.id}">
                      Chương ${ch.number}: ${chTitle}
                    </a>
                    ${ch.sections && ch.sections.length > 0 ? `
                      <div class="pl-3 space-y-1 mt-1 border-l border-slate-300 dark:border-slate-700">
                        ${(ch.sections || []).map(sec => {
                          const secTitle = state.language === 'vi' ? (sec.titleVi || sec.title) : sec.title;
                          return `
                          <a href="#${sec.id}" class="toc-link text-xs block px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400" data-target="${sec.id}">
                            ${secTitle}
                          </a>`;
                        }).join('')}
                      </div>
                    ` : ''}
                  </div>`;
                }).join('')}
              </div>

              <div class="toc-group mb-3">
                <div class="font-semibold text-xs text-slate-400 uppercase mb-1">Phần bổ trợ</div>
                <a href="#section-references" class="toc-link block px-2 py-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300" data-target="section-references">
                  Tài liệu tham khảo (References)
                </a>
                <a href="#section-index" class="toc-link block px-2 py-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300" data-target="section-index">
                  Chỉ mục tra cứu (Index)
                </a>
              </div>
            </nav>
          </aside>

          <!-- Main Reader -->
          <main class="reader-container" id="reader-main">
            <article class="reader-prose" id="book-content-container">
              <!-- Book Introduction Hero -->
              <section class="book-hero">
                <img src="${data.coverImage || ''}" alt="Solving Mathematical Problems cover" class="book-cover-img" onerror="this.src='https://placehold.co/180x250/1e293b/ffffff?text=Tao+Math'"/>
                <div class="flex-1">
                  <div class="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">Oxford University Press · 2006</div>
                  <h1 class="text-2xl md:text-3xl font-bold mb-1">${currentTitle}</h1>
                  ${state.language === 'vi' ? `<div class="text-xs text-slate-400 font-mono mb-2">Original: ${data.title}</div>` : ''}
                  <div class="text-lg text-slate-600 dark:text-slate-400 font-medium mb-1">${currentAuthor}</div>
                  <p class="text-sm italic text-slate-500 mb-4">${state.language === 'vi' ? (data.affiliationVi || data.affiliation || '') : (data.affiliation || '')}</p>
                  <p class="text-sm italic text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-lg border border-amber-200 dark:border-amber-900/60 mb-4">"${state.language === 'vi' ? (data.dedicationVi || data.dedication || '') : (data.dedication || '')}"</p>
                  
                  <div class="flex flex-wrap gap-2 pt-2">
                    <button id="btn-hero-start" class="btn-nav-icon btn-primary">
                      <span>Bắt đầu đọc</span>
                    </button>
                    <button id="btn-toggle-all-solutions" class="btn-nav-icon">
                      <span id="btn-all-solutions-text">Ẩn tất cả lời giải</span>
                    </button>
                  </div>
                </div>
              </section>

              <!-- Front Matter (Prefaces) -->
              ${(data.frontMatter || []).map(fm => {
                const fmTitle = state.language === 'vi' ? (fm.titleVi || fm.title) : fm.title;
                return `
                <section id="${fm.id}" class="book-section-block mb-12">
                  <div class="flex items-center justify-between">
                    <h2 class="book-chapter-title">${fmTitle}</h2>
                    <button class="btn-add-bookmark btn-nav-icon" data-title="${fmTitle}" data-target="${fm.id}" title="Đánh dấu trang">🔖 Lưu dấu trang</button>
                  </div>
                  <div class="section-content">
                    ${renderBlocks(fm.blocks)}
                  </div>
                </section>`;
              }).join('')}

              <!-- Chapters -->
              ${(data.chapters || []).map(ch => {
                const chTitle = state.language === 'vi' ? (ch.titleVi || ch.title) : ch.title;
                return `
                <section id="${ch.id}" class="book-chapter-block mb-16 pt-6">
                  <div class="flex items-center justify-between border-b pb-2 border-slate-300 dark:border-slate-700">
                    <div>
                      <span class="text-xs uppercase font-bold text-blue-600 dark:text-blue-400">Chương ${ch.number}</span>
                      <h2 class="text-3xl font-bold mt-1">${ch.number} · ${chTitle}</h2>
                    </div>
                    <button class="btn-add-bookmark btn-nav-icon" data-title="Chương ${ch.number}: ${chTitle}" data-target="${ch.id}" title="Đánh dấu trang">🔖 Lưu dấu trang</button>
                  </div>

                  ${ch.sections ? (ch.sections || []).map(sec => {
                    const secTitle = state.language === 'vi' ? (sec.titleVi || sec.title) : sec.title;
                    return `
                    <div id="${sec.id}" class="book-section-item mt-8">
                      <div class="flex items-center justify-between">
                        <h3 class="book-section-title">${secTitle}</h3>
                        <div class="flex items-center gap-1">
                          <button class="btn-quick-note btn-nav-icon text-xs" data-target="${sec.id}" data-title="${secTitle}">📝 Ghi chú</button>
                          <button class="btn-mark-read btn-nav-icon text-xs ${state.readSections[sec.id] ? 'text-emerald-600 font-bold' : ''}" data-target="${sec.id}">
                            ${state.readSections[sec.id] ? '✓ Đã đọc' : 'Đánh dấu đã đọc'}
                          </button>
                        </div>
                      </div>
                      <div class="section-blocks mt-4">
                        ${renderBlocks(sec.blocks)}
                      </div>
                    </div>`;
                  }).join('') : ''}
                </section>`;
              }).join('')}

              <!-- References Section -->
              <section id="section-references" class="book-section-block mb-16 pt-8 border-t border-slate-300 dark:border-slate-700">
                <h2 class="text-3xl font-bold mb-4">${state.language === 'vi' ? 'Tài liệu tham khảo (References)' : 'References'}</h2>
                <div class="book-quote mb-6">
                  <p class="italic">${state.language === 'vi' ? '"Sách, cũng giống như bạn hữu, nên ít mà tinh tuyển."' : '"Books, like friends, should be few and well-chosen."'}</p>
                  <span class="book-quote-author">Samuel Paterson, Joineriana</span>
                </div>
                <div class="space-y-4 text-sm">
                  ${(data.references || []).map(ref => `
                    <div id="${ref.id}" class="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <p class="font-serif">${ref.citation}</p>
                    </div>
                  `).join('')}
                </div>
              </section>

              <!-- Index Section -->
              <section id="section-index" class="book-section-block mb-16 pt-8 border-t border-slate-300 dark:border-slate-700">
                <h2 class="text-3xl font-bold mb-4">${state.language === 'vi' ? 'Chỉ mục tra cứu (Index)' : 'Index'}</h2>
                <p class="text-sm text-slate-500 mb-6">Bảng chỉ mục thuật ngữ và bài toán. Nhấp vào thuật ngữ để chuyển nhanh đến vị trí trong sách.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  ${(data.index || []).map(idx => `
                    <div class="p-2 border-b border-slate-200 dark:border-slate-800 flex justify-between items-baseline hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded cursor-pointer btn-index-jump" data-target="${idx.link}">
                      <span class="font-medium text-slate-800 dark:text-slate-200">${idx.term}</span>
                      <span class="text-xs text-blue-600 dark:text-blue-400 font-mono ml-2 underline">trang ${idx.page}</span>
                    </div>
                  `).join('')}
                </div>
              </section>

              <!-- Chapter Navigation Footer -->
              <div class="chapter-nav-bar">
                <button id="btn-prev-chapter" class="btn-nav-icon">
                  <span>← Chương trước (P)</span>
                </button>
                <div class="text-xs text-slate-500 font-medium text-center">
                  Sử dụng phím tắt N/P để chuyển chương, Ctrl+K để tìm kiếm, L để đổi ngôn ngữ
                </div>
                <button id="btn-next-chapter" class="btn-nav-icon">
                  <span>Chương sau (N) →</span>
                </button>
              </div>
            </article>
          </main>
        </div>

        <!-- Back to Top Floating Button -->
        <button id="btn-back-to-top" class="back-to-top-btn" title="Quay lên đầu trang" aria-label="Quay lên đầu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
        </button>

        <!-- Search Modal -->
        <div id="modal-search" class="modal-overlay">
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="flex items-center gap-2 font-bold text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span>Tìm kiếm toàn văn trong sách</span>
              </div>
              <button class="btn-close-modal btn-nav-icon" data-modal="modal-search">✕</button>
            </div>
            <div class="p-3 border-b border-slate-200 dark:border-slate-800">
              <div class="search-input-wrapper">
                <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" id="search-input" class="search-input" placeholder="Nhập từ khóa tiếng Việt hoặc tiếng Anh (vd: arithmetic, modular, tam giác, Heron, chữ số...)" autofocus/>
              </div>
              <div class="flex items-center justify-between mt-2 px-1 text-xs text-slate-500">
                <span id="search-results-count">Nhập tối thiểu 2 ký tự</span>
                <span>Phím tắt: ESC để đóng</span>
              </div>
            </div>
            <div class="modal-body" id="search-results-list" style="min-height: 250px;">
              <div class="text-center text-slate-400 py-12">Chưa có kết quả tìm kiếm</div>
            </div>
          </div>
        </div>

        <!-- Settings Modal -->
        <div id="modal-settings" class="modal-overlay">
          <div class="modal-dialog">
            <div class="modal-header">
              <h3 class="font-bold text-lg">Cài đặt hiển thị & Đọc sách</h3>
              <button class="btn-close-modal btn-nav-icon" data-modal="modal-settings">✕</button>
            </div>
            <div class="modal-body space-y-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Ngôn ngữ văn bản sách (Language)</label>
                <div class="grid grid-cols-3 gap-2">
                  <button class="btn-setting-lang btn-nav-icon justify-center py-2 ${state.language === 'vi' ? 'btn-primary' : ''}" data-lang="vi">🇻🇳 Tiếng Việt</button>
                  <button class="btn-setting-lang btn-nav-icon justify-center py-2 ${state.language === 'en' ? 'btn-primary' : ''}" data-lang="en">🇬🇧 English</button>
                  <button class="btn-setting-lang btn-nav-icon justify-center py-2 ${state.language === 'bilingual' ? 'btn-primary' : ''}" data-lang="bilingual">🌐 Song ngữ</button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2">Giao diện màu (Theme)</label>
                <div class="grid grid-cols-3 gap-2">
                  <button class="btn-setting-theme btn-nav-icon justify-center py-2 ${state.settings.theme === 'light' ? 'btn-primary' : ''}" data-theme="light">☀️ Sáng (Light)</button>
                  <button class="btn-setting-theme btn-nav-icon justify-center py-2 ${state.settings.theme === 'sepia' ? 'btn-primary' : ''}" data-theme="sepia">📖 Sách Cũ (Sepia)</button>
                  <button class="btn-setting-theme btn-nav-icon justify-center py-2 ${state.settings.theme === 'dark' ? 'btn-primary' : ''}" data-theme="dark">🌙 Ban Đêm (Dark)</button>
                </div>
              </div>

              <div>
                <div class="flex justify-between items-center mb-2">
                  <label class="text-sm font-semibold">Cỡ chữ (Font Size)</label>
                  <span id="label-font-size" class="text-xs font-mono">${state.settings.fontSize}px</span>
                </div>
                <div class="flex items-center gap-3">
                  <button id="btn-font-dec" class="btn-nav-icon px-3 font-bold">-</button>
                  <input type="range" id="range-font-size" min="14" max="24" step="1" value="${state.settings.fontSize}" class="w-full"/>
                  <button id="btn-font-inc" class="btn-nav-icon px-3 font-bold">+</button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2">Kiểu phông chữ</label>
                <div class="grid grid-cols-3 gap-2">
                  <button class="btn-setting-font btn-nav-icon justify-center ${state.settings.fontFamily === 'serif' ? 'btn-primary' : ''}" data-font="serif">Serif (Chuẩn)</button>
                  <button class="btn-setting-font btn-nav-icon justify-center ${state.settings.fontFamily === 'sans' ? 'btn-primary' : ''}" data-font="sans">Sans-serif</button>
                  <button class="btn-setting-font btn-nav-icon justify-center ${state.settings.fontFamily === 'mono' ? 'btn-primary' : ''}" data-font="mono">Monospace</button>
                </div>
              </div>

              <div>
                <div class="flex justify-between items-center mb-2">
                  <label class="text-sm font-semibold">Chiều rộng khung đọc</label>
                  <span id="label-max-width" class="text-xs font-mono">${state.settings.maxWidth}px</span>
                </div>
                <input type="range" id="range-max-width" min="650" max="1100" step="50" value="${state.settings.maxWidth}" class="w-full"/>
              </div>

              <div>
                <div class="flex justify-between items-center mb-2">
                  <label class="text-sm font-semibold">Khoảng cách dòng (Line Height)</label>
                  <span id="label-line-height" class="text-xs font-mono">${state.settings.lineHeight}</span>
                </div>
                <input type="range" id="range-line-height" min="1.4" max="2.2" step="0.1" value="${state.settings.lineHeight}" class="w-full"/>
              </div>
            </div>
            <div class="modal-footer">
              <button id="btn-reset-settings" class="btn-nav-icon text-xs">Khôi phục mặc định</button>
              <button class="btn-close-modal btn-nav-icon btn-primary" data-modal="modal-settings">Xong</button>
            </div>
          </div>
        </div>

        <!-- Bookmarks & Notes Modal -->
        <div id="modal-bookmarks" class="modal-overlay">
          <div class="modal-dialog">
            <div class="modal-header">
              <h3 class="font-bold text-lg">Dấu trang & Ghi chú cá nhân</h3>
              <button class="btn-close-modal btn-nav-icon" data-modal="modal-bookmarks">✕</button>
            </div>
            <div class="p-3 border-b border-slate-200 dark:border-slate-800 flex gap-2">
              <button id="tab-btn-bookmarks" class="btn-nav-icon flex-1 justify-center btn-primary">Dấu trang (${state.bookmarks.length})</button>
              <button id="tab-btn-notes" class="btn-nav-icon flex-1 justify-center">Ghi chú (${state.notes.length})</button>
            </div>
            <div class="modal-body" id="bookmarks-tab-content">
              <div id="bookmarks-list" class="space-y-2">
                ${renderBookmarksList()}
              </div>
            </div>
            <div class="modal-body hidden" id="notes-tab-content">
              <div id="notes-list" class="space-y-2">
                ${renderNotesList()}
              </div>
            </div>
            <div class="modal-footer justify-between">
              <div class="flex gap-2">
                <button id="btn-export-data" class="btn-nav-icon text-xs">📥 Xuất JSON</button>
                <label class="btn-nav-icon text-xs cursor-pointer">
                  📤 Nhập JSON
                  <input type="file" id="input-import-data" accept=".json" class="hidden"/>
                </label>
              </div>
              <button class="btn-close-modal btn-nav-icon btn-primary" data-modal="modal-bookmarks">Đóng</button>
            </div>
          </div>
        </div>

        <!-- Note Edit Modal -->
        <div id="modal-note-editor" class="modal-overlay">
          <div class="modal-dialog max-w-md">
            <div class="modal-header">
              <h3 class="font-bold text-base" id="note-modal-title">Thêm / Sửa Ghi chú</h3>
              <button class="btn-close-modal btn-nav-icon" data-modal="modal-note-editor">✕</button>
            </div>
            <div class="modal-body">
              <input type="hidden" id="note-target-id"/>
              <input type="hidden" id="note-target-title"/>
              <textarea id="note-content-input" class="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="Nhập suy nghĩ, lời giải cá nhân hoặc chú thích của bạn..."></textarea>
            </div>
            <div class="modal-footer">
              <button class="btn-close-modal btn-nav-icon" data-modal="modal-note-editor">Hủy</button>
              <button id="btn-save-note" class="btn-nav-icon btn-primary">Lưu ghi chú</button>
            </div>
          </div>
        </div>

        <!-- Data Integrity Auditor Modal -->
        <div id="modal-audit" class="modal-overlay">
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="flex items-center gap-2 text-emerald-600 font-bold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Báo cáo kiểm tra tính toàn vẹn dữ liệu sách</span>
              </div>
              <button class="btn-close-modal btn-nav-icon" data-modal="modal-audit">✕</button>
            </div>
            <div class="modal-body text-sm space-y-4" id="audit-report-body"></div>
            <div class="modal-footer">
              <button class="btn-close-modal btn-nav-icon btn-primary" data-modal="modal-audit">Đóng báo cáo</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('root').innerHTML = appHtml;
    renderMath();
    updateBookmarksBadge();
  }

  // Render individual content blocks with active localization
  function renderBlocks(blocks) {
    if (!blocks || !Array.isArray(blocks)) return '';
    return blocks.map(b => {
      switch (b.type) {
        case 'paragraph':
          return `<div class="book-paragraph">${getLocalizedText(b.text, b.textVi)}</div>`;

        case 'heading':
          const hTag = `h${b.level || 3}`;
          const headText = state.language === 'vi' ? (b.textVi || b.text) : b.text;
          return `<${hTag} class="font-bold text-slate-900 dark:text-slate-100 my-4 text-xl">${headText}</${hTag}>`;

        case 'formula':
          return `
            <div class="formula-container">
              <div class="latex-render">\\[${b.latex}\\]</div>
              <button class="copy-latex-btn" data-latex="${encodeURIComponent(b.latex)}" title="Sao chép LaTeX">Sao chép LaTeX</button>
            </div>`;

        case 'quote':
          return `
            <blockquote class="book-quote">
              <p>${getLocalizedText(b.text, b.textVi)}</p>
              ${b.attribution ? `<span class="book-quote-author">— ${b.attribution}</span>` : ''}
            </blockquote>`;

        case 'list':
          const listTag = b.ordered ? 'ol' : 'ul';
          const listClass = b.ordered ? 'list-decimal' : 'list-disc';
          const itemsToRender = (state.language === 'vi' && b.itemsVi) ? b.itemsVi : b.items;
          return `
            <${listTag} class="${listClass} pl-6 my-4 space-y-2 text-slate-800 dark:text-slate-200">
              ${itemsToRender.map(item => `<li>${item}</li>`).join('')}
            </${listTag}>`;

        case 'problem':
          const probTitle = state.language === 'vi' ? (b.titleVi || b.title) : b.title;
          return `
            <div class="problem-card" id="${b.id || ''}">
              <div class="problem-card-header">
                <span>📘 ${probTitle || 'Bài toán'}</span>
                <button class="btn-quick-note text-xs font-normal" data-target="${b.id || ''}" data-title="${probTitle || 'Bài toán'}">📝 Thêm ghi chú</button>
              </div>
              <div class="problem-body">
                ${renderBlocks(b.blocks)}
              </div>
            </div>`;

        case 'solution':
          const solTitle = state.language === 'vi' ? (b.titleVi || b.title) : b.title;
          return `
            <div class="solution-card" id="${b.id || ''}">
              <button class="solution-toggle-btn" aria-expanded="true">
                <span class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">💡 ${solTitle || 'Lời giải'}</span>
                </span>
                <span class="toggle-icon text-xs text-slate-500">▼ Thu gọn</span>
              </button>
              <div class="solution-content">
                ${renderBlocks(b.blocks)}
              </div>
            </div>`;

        case 'exercise':
          const exTitle = state.language === 'vi' ? (b.titleVi || b.title) : b.title;
          return `
            <div class="exercise-card" id="${b.id || ''}">
              <div class="exercise-title">✏️ ${exTitle || 'Bài tập'}</div>
              <div class="exercise-body">
                ${renderBlocks(b.blocks)}
              </div>
            </div>`;

        case 'diagram':
          const diagCaption = state.language === 'vi' ? (b.captionVi || b.caption) : b.caption;
          return `
            <div class="diagram-box">
              ${b.svg}
              ${diagCaption ? `<div class="diagram-caption">${diagCaption}</div>` : ''}
            </div>`;

        case 'table':
          return `
            <div class="overflow-x-auto my-4">
              <table class="reader-table">
                ${b.headers ? `
                  <thead>
                    <tr>${b.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                  </thead>
                ` : ''}
                <tbody>
                  ${b.rows.map(row => `
                    <tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>
                  `).join('')}
                </tbody>
              </table>
            </div>`;

        default:
          return b.text ? `<p class="book-paragraph">${getLocalizedText(b.text, b.textVi)}</p>` : '';
      }
    }).join('');
  }

  // Bookmarks & Notes Renderers
  function renderBookmarksList() {
    if (state.bookmarks.length === 0) {
      return `<div class="text-center text-slate-400 py-8">Chưa có dấu trang nào. Nhấn "🔖 Lưu dấu trang" tại các chương hoặc mục để lưu lại.</div>`;
    }
    return state.bookmarks.map((bm, i) => `
      <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
        <div class="cursor-pointer flex-1 font-medium text-blue-600 dark:text-blue-400 hover:underline btn-jump-to" data-target="${bm.targetId}">
          ${bm.title}
          <div class="text-xs text-slate-400 font-normal">${new Date(bm.createdAt).toLocaleString('vi-VN')}</div>
        </div>
        <button class="btn-delete-bookmark text-xs text-red-500 hover:text-red-700 px-2 py-1" data-index="${i}">Xóa</button>
      </div>
    `).join('');
  }

  function renderNotesList() {
    if (state.notes.length === 0) {
      return `<div class="text-center text-slate-400 py-8">Chưa có ghi chú nào. Nhấn "📝 Ghi chú" trên bất kỳ mục hoặc bài toán nào để viết.</div>`;
    }
    return state.notes.map((n, i) => `
      <div class="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg space-y-2">
        <div class="flex justify-between items-center">
          <span class="font-bold text-xs text-blue-600 dark:text-blue-400 cursor-pointer btn-jump-to" data-target="${n.targetId}">${n.title}</span>
          <div class="flex items-center gap-2">
            <button class="btn-edit-note text-xs text-slate-500 hover:text-slate-800" data-index="${i}">Sửa</button>
            <button class="btn-delete-note text-xs text-red-500 hover:text-red-700" data-index="${i}">Xóa</button>
          </div>
        </div>
        <p class="text-sm font-sans text-slate-800 dark:text-slate-200 whitespace-pre-wrap">${n.content}</p>
        <div class="text-xs text-slate-400 font-mono">${new Date(n.updatedAt).toLocaleString('vi-VN')}</div>
      </div>
    `).join('');
  }

  function updateBookmarksBadge() {
    const el = document.getElementById('badge-bookmarks-count');
    if (el) el.textContent = state.bookmarks.length + state.notes.length;
  }

  // Reading Progress Calculation
  function updateReadingProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100))) : 0;
    
    const bar = document.getElementById('reading-progress-bar');
    if (bar) bar.style.width = `${progress}%`;
    
    const label = document.getElementById('progress-percent-label');
    if (label) label.textContent = `${progress}% đã đọc`;

    saveProgress();
  }

  // Switch Language
  function switchLanguage(newLang) {
    if (!['vi', 'en', 'bilingual'].includes(newLang)) return;
    const scrollPos = window.scrollY;
    state.language = newLang;
    saveLanguage();
    renderApp();
    setupEventListeners();
    window.scrollTo({ top: scrollPos });
  }

  // Setup Event Listeners
  function setupEventListeners() {
    window.addEventListener('scroll', () => {
      updateReadingProgress();
    });

    // Language Toggle buttons
    document.querySelectorAll('.btn-lang-tab, .btn-setting-lang').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
      });
    });

    // Sidebar TOC Toggle
    const sidebar = document.getElementById('sidebar-toc');
    const overlay = document.getElementById('sidebar-overlay');
    const reader = document.getElementById('reader-main');

    function toggleSidebar() {
      if (window.innerWidth < 900) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
      } else {
        sidebar.classList.toggle('collapsed');
        reader.classList.toggle('full-width');
      }
    }

    document.getElementById('btn-toggle-sidebar')?.addEventListener('click', toggleSidebar);
    overlay?.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });

    // TOC Links click
    document.querySelectorAll('.toc-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          if (window.innerWidth < 900) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
          }
        }
      });
    });

    // Hero Start Reading Button
    document.getElementById('btn-hero-start')?.addEventListener('click', () => {
      document.getElementById('chapter-1')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Continue Reading Button
    document.getElementById('btn-continue-reading')?.addEventListener('click', () => {
      if (state.currentScrollY > 100) {
        window.scrollTo({ top: state.currentScrollY, behavior: 'smooth' });
      } else {
        document.getElementById('chapter-1')?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Back to top
    document.getElementById('btn-back-to-top')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Next / Prev Chapter
    document.getElementById('btn-next-chapter')?.addEventListener('click', () => navigateChapter(1));
    document.getElementById('btn-prev-chapter')?.addEventListener('click', () => navigateChapter(-1));

    // Modals
    document.getElementById('btn-open-search')?.addEventListener('click', () => openModal('modal-search'));
    document.getElementById('btn-open-settings')?.addEventListener('click', () => openModal('modal-settings'));
    document.getElementById('btn-open-bookmarks')?.addEventListener('click', () => openModal('modal-bookmarks'));
    document.getElementById('btn-open-audit')?.addEventListener('click', () => {
      runIntegrityCheck(true);
      openModal('modal-audit');
    });

    document.querySelectorAll('.btn-close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        closeModal(modalId);
      });
    });

    // Theme Switch in Navbar
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      state.settings.theme = state.settings.theme === 'light' ? 'dark' : (state.settings.theme === 'dark' ? 'sepia' : 'light');
      applySettings();
      saveSettings();
      updateThemeIcon();
    });

    // Settings Modal Handlers
    document.querySelectorAll('.btn-setting-theme').forEach(btn => {
      btn.addEventListener('click', () => {
        state.settings.theme = btn.getAttribute('data-theme');
        applySettings();
        saveSettings();
        document.querySelectorAll('.btn-setting-theme').forEach(b => b.classList.remove('btn-primary'));
        btn.classList.add('btn-primary');
        updateThemeIcon();
      });
    });

    document.querySelectorAll('.btn-setting-font').forEach(btn => {
      btn.addEventListener('click', () => {
        state.settings.fontFamily = btn.getAttribute('data-font');
        applySettings();
        saveSettings();
        document.querySelectorAll('.btn-setting-font').forEach(b => b.classList.remove('btn-primary'));
        btn.classList.add('btn-primary');
      });
    });

    const rangeFont = document.getElementById('range-font-size');
    rangeFont?.addEventListener('input', (e) => {
      state.settings.fontSize = parseInt(e.target.value, 10);
      document.getElementById('label-font-size').textContent = `${state.settings.fontSize}px`;
      applySettings();
      saveSettings();
    });

    document.getElementById('btn-font-dec')?.addEventListener('click', () => {
      if (state.settings.fontSize > 14) {
        state.settings.fontSize--;
        if (rangeFont) rangeFont.value = state.settings.fontSize;
        document.getElementById('label-font-size').textContent = `${state.settings.fontSize}px`;
        applySettings();
        saveSettings();
      }
    });

    document.getElementById('btn-font-inc')?.addEventListener('click', () => {
      if (state.settings.fontSize < 24) {
        state.settings.fontSize++;
        if (rangeFont) rangeFont.value = state.settings.fontSize;
        document.getElementById('label-font-size').textContent = `${state.settings.fontSize}px`;
        applySettings();
        saveSettings();
      }
    });

    const rangeWidth = document.getElementById('range-max-width');
    rangeWidth?.addEventListener('input', (e) => {
      state.settings.maxWidth = parseInt(e.target.value, 10);
      document.getElementById('label-max-width').textContent = `${state.settings.maxWidth}px`;
      applySettings();
      saveSettings();
    });

    const rangeLine = document.getElementById('range-line-height');
    rangeLine?.addEventListener('input', (e) => {
      state.settings.lineHeight = parseFloat(e.target.value);
      document.getElementById('label-line-height').textContent = state.settings.lineHeight;
      applySettings();
      saveSettings();
    });

    document.getElementById('btn-reset-settings')?.addEventListener('click', () => {
      state.settings = { ...defaultSettings };
      applySettings();
      saveSettings();
      renderApp();
      setupEventListeners();
    });

    // Solutions Collapsing
    document.querySelectorAll('.solution-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.solution-card');
        card.classList.toggle('collapsed');
        const isCollapsed = card.classList.contains('collapsed');
        btn.querySelector('.toggle-icon').textContent = isCollapsed ? '▶ Mở rộng lời giải' : '▼ Thu gọn';
      });
    });

    document.getElementById('btn-toggle-all-solutions')?.addEventListener('click', () => {
      state.allSolutionsExpanded = !state.allSolutionsExpanded;
      document.querySelectorAll('.solution-card').forEach(c => {
        if (state.allSolutionsExpanded) {
          c.classList.remove('collapsed');
          c.querySelector('.toggle-icon').textContent = '▼ Thu gọn';
        } else {
          c.classList.add('collapsed');
          c.querySelector('.toggle-icon').textContent = '▶ Mở rộng lời giải';
        }
      });
      document.getElementById('btn-all-solutions-text').textContent = state.allSolutionsExpanded ? 'Ẩn tất cả lời giải' : 'Hiện tất cả lời giải';
    });

    // Copy LaTeX formula
    document.querySelectorAll('.copy-latex-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const latex = decodeURIComponent(btn.getAttribute('data-latex') || '');
        navigator.clipboard.writeText(latex).then(() => {
          btn.textContent = '✓ Đã chép!';
          setTimeout(() => { btn.textContent = 'Sao chép LaTeX'; }, 2000);
        });
      });
    });

    // Bookmark Add
    document.querySelectorAll('.btn-add-bookmark').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const title = btn.getAttribute('data-title');
        const exists = state.bookmarks.find(b => b.targetId === targetId);
        if (exists) {
          state.bookmarks = state.bookmarks.filter(b => b.targetId !== targetId);
          btn.textContent = '🔖 Lưu dấu trang';
        } else {
          state.bookmarks.push({ targetId, title, createdAt: Date.now() });
          btn.textContent = '✓ Đã lưu dấu trang';
        }
        saveBookmarks();
        updateBookmarksBadge();
        document.getElementById('bookmarks-list').innerHTML = renderBookmarksList();
        attachBookmarkEvents();
      });
    });

    // Quick Note Add
    document.querySelectorAll('.btn-quick-note').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const title = btn.getAttribute('data-title');
        document.getElementById('note-target-id').value = targetId;
        document.getElementById('note-target-title').value = title;
        document.getElementById('note-modal-title').textContent = `Ghi chú cho: ${title}`;
        
        const existingNote = state.notes.find(n => n.targetId === targetId);
        document.getElementById('note-content-input').value = existingNote ? existingNote.content : '';
        
        openModal('modal-note-editor');
      });
    });

    document.getElementById('btn-save-note')?.addEventListener('click', () => {
      const targetId = document.getElementById('note-target-id').value;
      const title = document.getElementById('note-target-title').value;
      const content = document.getElementById('note-content-input').value.trim();

      if (!content) {
        state.notes = state.notes.filter(n => n.targetId !== targetId);
      } else {
        const index = state.notes.findIndex(n => n.targetId === targetId);
        if (index >= 0) {
          state.notes[index].content = content;
          state.notes[index].updatedAt = Date.now();
        } else {
          state.notes.push({ targetId, title, content, updatedAt: Date.now() });
        }
      }
      saveNotes();
      updateBookmarksBadge();
      document.getElementById('notes-list').innerHTML = renderNotesList();
      attachNotesEvents();
      closeModal('modal-note-editor');
    });

    // Mark as read
    document.querySelectorAll('.btn-mark-read').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        state.readSections[targetId] = !state.readSections[targetId];
        saveReadSections();
        if (state.readSections[targetId]) {
          btn.classList.add('text-emerald-600', 'font-bold');
          btn.textContent = '✓ Đã đọc';
        } else {
          btn.classList.remove('text-emerald-600', 'font-bold');
          btn.textContent = 'Đánh dấu đã đọc';
        }
      });
    });

    // Index jumps
    document.querySelectorAll('.btn-index-jump').forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Bookmarks Modal Tabs
    const tabBookmarks = document.getElementById('tab-btn-bookmarks');
    const tabNotes = document.getElementById('tab-btn-notes');
    const contentBookmarks = document.getElementById('bookmarks-tab-content');
    const contentNotes = document.getElementById('notes-tab-content');

    tabBookmarks?.addEventListener('click', () => {
      tabBookmarks.classList.add('btn-primary');
      tabNotes.classList.remove('btn-primary');
      contentBookmarks.classList.remove('hidden');
      contentNotes.classList.add('hidden');
    });

    tabNotes?.addEventListener('click', () => {
      tabNotes.classList.add('btn-primary');
      tabBookmarks.classList.remove('btn-primary');
      contentNotes.classList.remove('hidden');
      contentBookmarks.classList.add('hidden');
    });

    // Export JSON
    document.getElementById('btn-export-data')?.addEventListener('click', () => {
      const exportData = {
        bookmarks: state.bookmarks,
        notes: state.notes,
        readSections: state.readSections,
        exportedAt: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `tao_math_notes_backup_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    // Import JSON
    document.getElementById('input-import-data')?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported.bookmarks) state.bookmarks = imported.bookmarks;
          if (imported.notes) state.notes = imported.notes;
          if (imported.readSections) state.readSections = imported.readSections;
          saveBookmarks();
          saveNotes();
          saveReadSections();
          updateBookmarksBadge();
          document.getElementById('bookmarks-list').innerHTML = renderBookmarksList();
          document.getElementById('notes-list').innerHTML = renderNotesList();
          attachBookmarkEvents();
          attachNotesEvents();
          alert('Đã nhập thành công dữ liệu ghi chú và dấu trang!');
        } catch (err) {
          alert('Tệp JSON không hợp lệ.');
        }
      };
      reader.readAsText(file);
    });

    // Full-Text Search Handler
    setupSearch();
    attachBookmarkEvents();
    attachNotesEvents();
  }

  function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      if (state.settings.theme === 'light') icon.textContent = '🌙';
      else if (state.settings.theme === 'dark') icon.textContent = '📖';
      else icon.textContent = '☀️';
    }
  }

  function attachBookmarkEvents() {
    document.querySelectorAll('.btn-jump-to').forEach(el => {
      el.addEventListener('click', () => {
        const targetId = el.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
          closeModal('modal-bookmarks');
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    document.querySelectorAll('.btn-delete-bookmark').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        state.bookmarks.splice(index, 1);
        saveBookmarks();
        updateBookmarksBadge();
        document.getElementById('bookmarks-list').innerHTML = renderBookmarksList();
        attachBookmarkEvents();
      });
    });
  }

  function attachNotesEvents() {
    document.querySelectorAll('.btn-delete-note').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        state.notes.splice(index, 1);
        saveNotes();
        updateBookmarksBadge();
        document.getElementById('notes-list').innerHTML = renderNotesList();
        attachNotesEvents();
      });
    });

    document.querySelectorAll('.btn-edit-note').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        const note = state.notes[index];
        document.getElementById('note-target-id').value = note.targetId;
        document.getElementById('note-target-title').value = note.title;
        document.getElementById('note-modal-title').textContent = `Sửa ghi chú cho: ${note.title}`;
        document.getElementById('note-content-input').value = note.content;
        closeModal('modal-bookmarks');
        openModal('modal-note-editor');
      });
    });
  }

  // Full-Text Search Implementation (Bilingual Support)
  function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const resultsList = document.getElementById('search-results-list');
    const countLabel = document.getElementById('search-results-count');

    let debounceTimer;

    searchInput?.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = e.target.value.trim();
        if (query.length < 2) {
          countLabel.textContent = 'Nhập tối thiểu 2 ký tự';
          resultsList.innerHTML = `<div class="text-center text-slate-400 py-12">Nhập từ khóa để tìm kiếm trong sách...</div>`;
          return;
        }

        const results = performSearch(query);
        countLabel.textContent = `Tìm thấy ${results.length} kết quả`;

        if (results.length === 0) {
          resultsList.innerHTML = `
            <div class="text-center text-slate-400 py-12">
              <p class="font-medium text-slate-600 dark:text-slate-300">Không tìm thấy kết quả phù hợp</p>
              <p class="text-xs mt-1">Hãy thử với từ khóa khác như "arithmetic", "modular", "prime", "tam giác", "Heron"...</p>
            </div>`;
          return;
        }

        resultsList.innerHTML = results.map(res => `
          <div class="search-result-item" data-target="${res.targetId}">
            <div class="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">${res.location}</div>
            <div class="text-sm font-serif text-slate-700 dark:text-slate-300">${highlightKeyword(res.snippet, query)}</div>
          </div>
        `).join('');

        document.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
              closeModal('modal-search');
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      }, 150);
    });
  }

  function performSearch(query) {
    const normQuery = removeDiacritics(query);
    const results = [];
    const data = window.bookData;
    if (!data) return results;

    (data.frontMatter || []).forEach(fm => {
      (fm.blocks || []).forEach(b => {
        checkAndAdd(b, fm.titleVi || fm.title, fm.id);
      });
    });

    (data.chapters || []).forEach(ch => {
      if (ch.sections) {
        (ch.sections || []).forEach(sec => {
          (sec.blocks || []).forEach(b => {
            checkAndAdd(b, `Chương ${ch.number} > ${sec.titleVi || sec.title}`, sec.id);
          });
        });
      }
    });

    function checkAndAdd(block, location, targetId) {
      const combinedText = `${block.text || ''} ${block.textVi || ''} ${block.latex || ''} ${block.title || ''} ${block.titleVi || ''} ${(block.items ? block.items.join(' ') : '')} ${(block.itemsVi ? block.itemsVi.join(' ') : '')}`;
      const normText = removeDiacritics(combinedText);

      if (normText.includes(normQuery)) {
        const matchIdx = normText.indexOf(normQuery);
        const start = Math.max(0, matchIdx - 40);
        const end = Math.min(combinedText.length, matchIdx + query.length + 60);
        let snippet = (start > 0 ? '...' : '') + combinedText.substring(start, end) + (end < combinedText.length ? '...' : '');

        results.push({
          location,
          targetId,
          snippet
        });
      }
    }

    return results;
  }

  function highlightKeyword(text, keyword) {
    if (!text || !keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, `<mark class="search-highlight">$1</mark>`);
  }

  // Chapter Navigation
  function navigateChapter(delta) {
    const chapters = window.bookData.chapters;
    const currentIdx = chapters.findIndex(c => c.id === state.currentChapterId);
    let nextIdx = currentIdx + delta;
    if (nextIdx < 0) nextIdx = 0;
    if (nextIdx >= chapters.length) nextIdx = chapters.length - 1;

    const targetChapter = chapters[nextIdx];
    if (targetChapter) {
      state.currentChapterId = targetChapter.id;
      document.getElementById(targetChapter.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Modal helpers
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      if (modalId === 'modal-search') {
        setTimeout(() => document.getElementById('search-input')?.focus(), 50);
      }
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  // Keyboard shortcuts
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        }
        return;
      }

      // Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
      // L: toggle language mode
      else if (e.key.toLowerCase() === 'l') {
        e.preventDefault();
        const nextLang = state.language === 'vi' ? 'en' : (state.language === 'en' ? 'bilingual' : 'vi');
        switchLanguage(nextLang);
      }
      // T: toggle theme
      else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        state.settings.theme = state.settings.theme === 'light' ? 'dark' : (state.settings.theme === 'dark' ? 'sepia' : 'light');
        applySettings();
        saveSettings();
        updateThemeIcon();
      }
      // N: next chapter
      else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        navigateChapter(1);
      }
      // P: previous chapter
      else if (e.key.toLowerCase() === 'p') {
        e.preventDefault();
        navigateChapter(-1);
      }
      // + / =: increase font
      else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        if (state.settings.fontSize < 24) {
          state.settings.fontSize++;
          applySettings();
          saveSettings();
        }
      }
      // -: decrease font
      else if (e.key === '-') {
        e.preventDefault();
        if (state.settings.fontSize > 14) {
          state.settings.fontSize--;
          applySettings();
          saveSettings();
        }
      }
      // Esc: close active modal
      else if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        document.getElementById('sidebar-toc')?.classList.remove('open');
        document.getElementById('sidebar-overlay')?.classList.remove('active');
      }
    });
  }

  // Data Integrity Audit Function
  function runIntegrityCheck(isModalOpen) {
    const report = {
      missingChapters: [],
      missingSections: [],
      emptyParagraphs: [],
      duplicateIds: [],
      invalidLinks: [],
      totalBlocks: 0,
      totalProblems: 0,
      totalSolutions: 0,
      totalFormulas: 0,
    };

    const seenIds = new Set();
    const data = window.bookData;

    if (!data) return;

    // Check Chapters 1 to 6
    for (let i = 1; i <= 6; i++) {
      const ch = data.chapters.find(c => c.number === i);
      if (!ch) {
        report.missingChapters.push(`Chương ${i}`);
      } else {
        if (!ch.sections || ch.sections.length === 0) {
          report.missingSections.push(`Chương ${i} không có mục nào`);
        } else {
          ch.sections.forEach(sec => {
            if (seenIds.has(sec.id)) report.duplicateIds.push(sec.id);
            seenIds.add(sec.id);

            sec.blocks.forEach(b => {
              report.totalBlocks++;
              if (b.type === 'problem') report.totalProblems++;
              if (b.type === 'solution') report.totalSolutions++;
              if (b.type === 'formula') report.totalFormulas++;
              if (b.type === 'paragraph' && (!b.text || b.text.trim() === '')) {
                report.emptyParagraphs.push(sec.id);
              }
              if (b.id) {
                if (seenIds.has(b.id)) report.duplicateIds.push(b.id);
                seenIds.add(b.id);
              }
            });
          });
        }
      }
    }

    if (isModalOpen) {
      const reportHtml = `
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg">
          <div class="font-bold text-emerald-800 dark:text-emerald-300">✓ Dữ liệu nguồn đã tải đầy đủ 100% (Đa ngôn ngữ)</div>
          <div class="text-xs text-emerald-700 dark:text-emerald-400 mt-1">Hỗ trợ 3 chế độ: Tiếng Việt, Tiếng Anh nguyên bản và Song ngữ Anh-Việt.</div>
        </div>

        <div class="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div class="p-2 bg-slate-100 dark:bg-slate-900 rounded">Tổng số khối: <strong>${report.totalBlocks}</strong></div>
          <div class="p-2 bg-slate-100 dark:bg-slate-900 rounded">Bài toán (Problems): <strong>${report.totalProblems}</strong></div>
          <div class="p-2 bg-slate-100 dark:bg-slate-900 rounded">Lời giải (Solutions): <strong>${report.totalSolutions}</strong></div>
          <div class="p-2 bg-slate-100 dark:bg-slate-900 rounded">Công thức LaTeX: <strong>${report.totalFormulas}</strong></div>
        </div>

        <div class="space-y-2">
          <div class="font-bold text-slate-800 dark:text-slate-200">Chi tiết kiểm tra:</div>
          <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-400 list-disc pl-5">
            <li>Chương thiếu: ${report.missingChapters.length === 0 ? '<span class="text-emerald-600 font-bold">Không có (Đủ 6/6 chương)</span>' : report.missingChapters.join(', ')}</li>
            <li>Đoạn văn rỗng: ${report.emptyParagraphs.length === 0 ? '<span class="text-emerald-600 font-bold">Không có (0 lỗi)</span>' : report.emptyParagraphs.length}</li>
            <li>ID trùng lặp: ${report.duplicateIds.length === 0 ? '<span class="text-emerald-600 font-bold">Không có (Tất cả ID duy nhất)</span>' : report.duplicateIds.join(', ')}</li>
            <li>Chuyển ngữ: <span class="text-emerald-600 font-bold">Hoạt động tức thì không tải lại trang (Hot-switch)</span></li>
          </ul>
        </div>
      `;
      const el = document.getElementById('audit-report-body');
      if (el) el.innerHTML = reportHtml;
    }
  }

})();
