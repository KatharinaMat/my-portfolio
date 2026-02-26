<template>
  <main class="page" :data-locale="locale">
    <!-- Fixed top-right: language switch -->
    <div class="lang">
      <button
        class="lang-btn"
        :class="{ active: locale.value === 'en' }"
        type="button"
        @click="changeLocaleKeepScroll('en')"
      >
        EN
      </button>
      <button
        class="lang-btn"
        :class="{ active: locale.value === 'et' }"
        type="button"
        @click="changeLocaleKeepScroll('et')"
      >
        ET
      </button>
    </div>

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

      <a class="icon-btn" href="tel:+37255545629" aria-label="Phone" title="Phone">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          />
        </svg>
      </a>
    </div>

    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col left-col">
            <div class="hero-text">
              <Transition name="line" appear>
                <h1 v-if="showTitle" class="hero-title">
                  {{ t("hero.title") }}
                </h1>
              </Transition>

              <Transition name="line" appear>
                <p v-if="showSubtitle" class="hero-subtitle">
                  {{ t("hero.subtitle") }}
                </p>
              </Transition>
            </div>

            <nav
              class="side-nav"
              aria-label="Page sections"
              @mouseleave="activePreview = null"
            >
              <a
                v-for="item in heroNav"
                :key="item.href"
                class="bookmark"
                :href="item.href"
                @mouseenter="onEnter(item.href)"
                @focus="onEnter(item.href)"
                @blur="activePreview = null"
                @click="onClickScroll($event, item.href)"
              >
                {{ t(item.i18nKey) }}
              </a>

              <!-- Desktop-only hover preview panel -->
              <div
                v-if="activePreview && canHover"
                class="nav-preview"
                role="dialog"
                aria-live="polite"
              >
                <h3 class="nav-preview-title">
                  {{ previewFor(activePreview).title }}
                </h3>

                <p class="nav-preview-text">
                  {{ previewFor(activePreview).text }}
                </p>

                <ul v-if="previewFor(activePreview).bullets?.length" class="nav-preview-list">
                  <li v-for="b in previewFor(activePreview).bullets" :key="b">{{ b }}</li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="col right-col">
            <div class="hero-image">
              <img
                src="/images/katharinaM-cropped.webp"
                alt="Katharina portrait"
                class="portrait"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
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

    <section id="contact" class="section">
      <div class="section-inner">
        <h2>{{ t("nav.contact") }}</h2>
        <p>...</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import CopyEmailButton from "@/components/CopyEmailButton.vue";

const { t, setLocale, locale } = useI18n();
const route = useRoute();

const showTitle = ref(false);
const showSubtitle = ref(false);

const heroNav = [
  { href: "#about", i18nKey: "nav.about" },
  { href: "#education", i18nKey: "nav.education" },
  { href: "#work", i18nKey: "nav.work" },
  { href: "#skills", i18nKey: "nav.skills" },
  { href: "#projects", i18nKey: "nav.projects" },
  { href: "#hobbies", i18nKey: "nav.hobbies" },
  { href: "#contact", i18nKey: "nav.contact" },
];

/**
 * Desktop hover preview (disabled on touch / coarse pointers)
 */
const canHover = ref(false);
const activePreview = ref<string | null>(null);

type Preview = { title: string; text: string; bullets?: string[] };

const previews: Record<string, Preview> = {
  "#about": {
    title: "About me",
    text: "Short story + what I’m aiming for in tech.",
    bullets: ["Career switch", "Values & strengths", "What I’m looking for"],
  },
  "#education": {
    title: "Education",
    text: "Relevant degrees + IT courses and certificates.",
    bullets: ["TalTech MSc", "IT upskilling", "Continuous learning"],
  },
  "#work": {
    title: "Work experience",
    text: "The experience I bring into tech: analysis, clients, delivery.",
    bullets: ["Patent Office", "B2B sales", "Cross-team work"],
  },
  "#skills": {
    title: "Skills",
    text: "Tech stack + tools I’m comfortable with.",
    bullets: ["Java / Spring", "Vue / Nuxt", "Testing mindset"],
  },
  "#projects": {
    title: "Projects",
    text: "Flagship projects + what problems they solve.",
    bullets: ["MyStuffLabelled", "Primastella", "Team projects"],
  },
  "#hobbies": {
    title: "Hobbies",
    text: "A bit of personality (yes, swing dance).",
    bullets: ["Teaching & events", "Design work", "Community"],
  },
  "#contact": {
    title: "Contact",
    text: "Fast ways to reach me.",
    bullets: ["Email", "LinkedIn", "GitHub"],
  },
};

// Helper so template stays clean
function previewFor(href: string): Preview {
  return previews[href] ?? { title: "", text: "" };
}

const changeLocaleKeepScroll = async (code: "en" | "et") => {
  const y = window.scrollY;

  if (route.hash) {
    history.replaceState(null, "", route.fullPath.replace(route.hash, ""));
  }

  await setLocale(code);

  await nextTick();
  window.scrollTo({ top: y, left: 0, behavior: "auto" });
};

function setupHoverDetection() {
  const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
  const update = () => (canHover.value = mq.matches);
  update();
  mq.addEventListener?.("change", update);
}

function onEnter(href: string) {
  if (!canHover.value) return;
  activePreview.value = href;
}

/**
 * Click = smooth-scroll to section (and update URL hash)
 * Mobile keeps normal behavior but this works fine there too.
 */
function onClickScroll(e: MouseEvent, href: string) {
  if (!href.startsWith("#")) return;

  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  e.preventDefault();

  // smooth scroll
  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // update hash without jumping
  const url = `${window.location.pathname}${window.location.search}#${id}`;
  history.replaceState(null, "", url);

  // close preview after click
  activePreview.value = null;
}

onMounted(() => {
  setupHoverDetection();

  setTimeout(() => (showTitle.value = true), 180);
  setTimeout(() => (showSubtitle.value = true), 340);
});
</script>