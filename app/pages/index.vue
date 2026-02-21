<template>
  <main class="page" :data-locale="locale">
    <!-- Fixed top-right: language switch -->
    <div class="lang">
      <button
        class="lang-btn"
        :class="{ active: locale.value === 'en' }"
        type="button"
        @click="setLocale('en')"
      >
        EN
      </button>
      <button
        class="lang-btn"
        :class="{ active: locale.value === 'et' }"
        type="button"
        @click="setLocale('et')"
      >
        ET
      </button>
    </div>

    <!-- Side bookmarks (desktop/tablet) -->
    <nav class="side-nav" aria-label="Page sections">
      <a class="bookmark" href="#about">{{ t("About me") }}</a>
      <a class="bookmark" href="#education">{{ t("Education") }}</a>
      <a class="bookmark" href="#work">{{ t("Work Experience") }}</a>
      <a class="bookmark" href="#skills">{{ t("Skills") }}</a>
      <a class="bookmark" href="#projects">{{ t("Projects") }}</a>
      <a class="bookmark" href="#hobbies">{{ t("Hobbies") }}</a>
    </nav>

    <!-- Mobile sticky bookmarks -->
    <nav class="mobile-nav" aria-label="Page sections (mobile)">
      <a class="chip" href="#about">{{ t("nav.about") }}</a>
      <a class="chip" href="#education">{{ t("nav.education") }}</a>
      <a class="chip" href="#work">{{ t("nav.work") }}</a>
      <a class="chip" href="#skills">{{ t("nav.skills") }}</a>
      <a class="chip" href="#projects">{{ t("nav.projects") }}</a>
      <a class="chip" href="#hobbies">{{ t("nav.hobbies") }}</a>
    </nav>

    <!-- Fixed right: socials -->
    <div class="social" aria-label="Contact links">
      <a
        class="icon-btn"
        href="https://www.linkedin.com/in/katharina-matkevits/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8 7.98h3.83v2.12h.05c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.78 2.65 4.78 6.09v9.43h-4v-8.37c0-2-.04-4.57-2.78-4.57-2.78 0-3.2 2.17-3.2 4.42v8.52H8V7.98z"
          />
        </svg>
      </a>

      <a
        class="icon-btn"
        href="https://github.com/KatharinaMat"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 .5C5.73.5.75 5.62.75 12c0 5.12 3.29 9.46 7.86 10.99.58.11.79-.25.79-.56v-2.1c-3.2.71-3.87-1.39-3.87-1.39-.52-1.36-1.27-1.72-1.27-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.02 1.78 2.68 1.26 3.33.96.1-.76.4-1.26.73-1.55-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.45-2.34 1.19-3.17-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.21a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.14 2.9.4 2.21-1.52 3.18-1.21 3.18-1.21.63 1.65.23 2.87.11 3.17.74.83 1.19 1.88 1.19 3.17 0 4.52-2.69 5.51-5.25 5.81.41.36.78 1.08.78 2.18v3.24c0 .31.21.67.8.56C20 21.46 23.25 17.12 23.25 12 23.25 5.62 18.27.5 12 .5z"
          />
        </svg>
      </a>

      <CopyEmailButton />

      <a
        class="icon-btn"
        href="tel:+37255545629"
        aria-label="Phone"
        title="Phone"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          />
        </svg>
      </a>
    </div>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-grid">
          <!-- TEXT (animated only) -->
          <div class="hero-text">
            <Transition name="line" appear>
              <h1 v-if="showTitle" class="hero-title">{{ t("hero.title") }}</h1>
            </Transition>

            <Transition name="line" appear>
              <p v-if="showSubtitle" class="hero-subtitle">
                {{ t("hero.subtitle") }}
              </p>
            </Transition>
          </div>

          <!-- IMAGE (static) -->
          <div class="hero-image">
            <img
              src="/images/katharina-cutout.webp"
              alt="Katharina portrait"
              class="portrait"
              width="760"
              height="1040"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIONS -->
    <section id="about" class="section">
      <div class="section-inner">
        <h2>{{ t("nav.about") }}</h2>
        <p>...</p>
      </div>
    </section>

    <section id="education" class="section">
      <div class="section-inner">
        <h2>{{ t("nav.education") }}</h2>
        <p>...</p>
      </div>
    </section>

    <section id="work" class="section">
      <div class="section-inner">
        <h2>{{ t("nav.work") }}</h2>
        <p>...</p>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="section-inner">
        <h2>{{ t("nav.skills") }}</h2>
        <p>...</p>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-inner">
        <h2>{{ t("nav.projects") }}</h2>
        <p>...</p>
      </div>
    </section>

    <section id="hobbies" class="section">
      <div class="section-inner">
        <h2>{{ t("nav.hobbies") }}</h2>
        <p>...</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CopyEmailButton from "@/components/CopyEmailButton.vue";
const { t, setLocale, locale } = useI18n();

const showTitle = ref(false);
const showSubtitle = ref(false);
const showButton = ref(false);

onMounted(() => {
  setTimeout(() => (showTitle.value = true), 180);
  setTimeout(() => (showSubtitle.value = true), 340);
});
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

.page {
  min-height: 100vh;
  background: #f6efe4;
  position: relative;
}

/* fixed language switch */
.lang {
  position: fixed;
  top: 14px;
  right: 14px;
  z-index: 30;
  display: flex;
  gap: 8px;
  background: rgba(248, 246, 242, 0.65);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  padding: 6px;
}

.lang-btn {
  border: 0;
  background: transparent;
  color: #1a1a1a;
  padding: 8px 10px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  opacity: 0.75;
}
.lang-btn.active {
  background: #134f5c;
  color: #f6efe4;
  opacity: 1;
}

/* fixed socials */
.social {
  position: fixed;
  right: 14px;
  top: 72px;
  z-index: 25;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon-btn {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(248, 246, 242, 0.7);
  backdrop-filter: blur(8px);
  display: grid;
  place-items: center;
  transition: transform 160ms ease;
}
.icon-btn:hover {
  transform: translateY(-2px);
}
.icon-btn svg {
  width: 20px;
  height: 20px;
  fill: #134f5c;
}

/* desktop side bookmarks */
.side-nav {
  position: fixed;
  left: 14px;
  top: 92px;
  z-index: 25;
  display: none;
  gap: 10px;
  flex-direction: column;
}

.bookmark {
  position: relative;
  display: inline-block;
  padding: 10px 14px;
  background: #134f5c;
  color: #f6efe4;
  text-decoration: none;
  border-radius: 10px 0 0 10px;
  font-weight: 600;
  transition:
    transform 180ms ease,
    filter 180ms ease;
}
.bookmark::after {
  content: "";
  position: absolute;
  top: 0;
  right: -14px;
  width: 14px;
  height: 100%;
  background: #134f5c;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}
.bookmark:hover {
  transform: translateX(6px);
  filter: brightness(1.06);
}

/* mobile sticky bookmarks (chips) */
.mobile-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 10px;
  z-index: 28;
  display: flex;
  gap: 10px;
  padding: 10px 12px;
  justify-content: flex-start;
  overflow-x: auto;

  background: rgba(248, 246, 242, 0.72);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  margin: 0 12px;
}
.mobile-nav::-webkit-scrollbar {
  height: 0;
}

.chip {
  white-space: nowrap;
  text-decoration: none;
  background: #134f5c;
  color: #f6efe4;
  padding: 10px 12px;
  border-radius: 999px;
  font-weight: 600;
  transition:
    transform 160ms ease,
    filter 160ms ease;
}
.chip:hover {
  transform: translateY(-1px);
  filter: brightness(1.06);
}

/* show desktop bookmarks, hide mobile chips */
@media (min-width: 860px) {
  .side-nav {
    display: flex;
  }
  .mobile-nav {
    display: none;
  }
}

/* HERO */
.hero {
  width: 100%;
  background: linear-gradient(90deg, #dcb77d 0%, #947b54 100%);
  border-radius: 0 0 26px 26px;
  overflow: hidden;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 22px 18px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  align-items: start;
}

.hero-title {
  margin: 0 0 10px;
  font-size: 34px;
  line-height: 1.05;
  color: #1a1a1a;
}
.hero-subtitle {
  margin: 0 0 16px;
  font-size: 18px;
  color: #1a1a1a;
  opacity: 0.85;
}
.cta {
  border: 0;
  background: #134f5c;
  color: #f6efe4;
  padding: 14px 22px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: visible;
}

.portrait {
  display: block;
  height: auto;
  object-fit: contain;
  width: clamp(280px, 88vw, 520px);
  max-height: 46vh;
  transform: translateY(18px);
  filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.22));
}

@media (min-width: 860px) {
  .hero-inner {
    padding: 40px 28px 0;
  }
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 22px;
    align-items: center;
  }
  .hero-image {
    justify-content: flex-end;
  }
  .portrait {
    width: clamp(360px, 38vw, 580px);
    max-height: none;
    transform: translateY(26px);
  }
  .hero-title {
    font-size: 54px;
  }
  .hero-subtitle {
    font-size: 20px;
  }
}

/* text animation only */
.line-enter-active {
  transition:
    opacity 520ms ease,
    filter 520ms ease;
}
.line-enter-from {
  opacity: 0;
  filter: blur(6px);
}
.line-enter-to {
  opacity: 1;
  filter: blur(0);
}

/* sections */
.section {
  padding: 56px 18px;
  padding-bottom: 92px; /* space for mobile sticky bar */
}
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
  color: #1a1a1a;
}
</style>
