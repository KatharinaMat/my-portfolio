<template>
  <main class="page" :data-locale="locale">
    <section class="hero">
      <div class="hero-topbar">
        <div class="lang" aria-label="Language switch">
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
      </div>

      <div class="container hero-main">
        <div class="hero-text-panel">
          <div class="hero-text">
            <Transition name="line" appear>
              <h1
                v-if="showTitle"
                class="hero-title"
                v-html="t('hero.title')"
              ></h1>
            </Transition>

            <Transition name="line" appear>
              <p
                v-if="showSubtitle"
                class="hero-subtitle"
                v-html="t('hero.subtitle')"
              ></p>
            </Transition>
          </div>
        </div>

        <div class="hero-media-panel">
          <div class="portrait-wrapper">
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

            <div class="hero-socials">
              <HeroSocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-nav-section">
      <div class="container hero-nav-row">
        <Transition name="line" appear>
          <nav v-if="showNav" class="side-nav" aria-label="Page sections">
            <a
              v-for="item in heroNav"
              :key="item.href"
              class="bookmark"
              :href="item.href"
              @click="onClickScroll($event, item.href)"
            >
              {{ t(item.i18nKey) }}
            </a>
          </nav>
        </Transition>

        <div class="socials-mobile">
          <HeroSocialLinks />

          <button
            v-if="showMobileSectionButton"
            class="icon-btn section-menu-btn"
            type="button"
            :aria-expanded="mobileMenuOpen"
            aria-label="Open section navigation"
            title="Sections"
            @click="toggleMobileMenu"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <Transition name="section-panel">
            <div
              v-if="mobileMenuOpen && showMobileSectionButton"
              class="section-menu-panel"
              aria-label="Section navigation"
            >
              <button
                v-for="item in heroNav"
                :key="item.href"
                type="button"
                class="section-menu-link"
                @click="onSectionMenuClick(item.href)"
              >
                {{ t(item.i18nKey) }}
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- SECTIONS -->

    <section id="about" class="section about-section">
      <div class="about-layout">
        <div class="about-sidebar-spacer" aria-hidden="true"></div>

        <div class="about-main">
          <div class="section-inner">
            <h2>{{ t("nav.about") }}</h2>

            <div class="about-text">
              <p
                v-for="(paragraph, index) in tm('about.text')"
                :key="index"
                v-html="rt(paragraph)"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="sections-with-sidebar">
      <nav class="sticky-navigation">
        <a href="#about" class="bookmark">{{ t("nav.about") }}</a>
        <a href="#education" class="bookmark">{{ t("nav.education") }}</a>
        <a href="#work" class="bookmark">{{ t("nav.work") }}</a>
        <a href="#skills" class="bookmark">{{ t("nav.skills") }}</a>
        <a href="#projects" class="bookmark">{{ t("nav.projects") }}</a>
        <a href="#hobbies" class="bookmark">{{ t("nav.hobbies") }}</a>
      </nav>

      <div class="sections-main">
        <section id="education" class="section">
          <div class="section-inner">
            <h2>{{ t("nav.education") }}</h2>

            <div class="education-list">
              <div
                v-for="(item, index) in educationItems"
                :key="index"
                class="education-row"
              >
                <div class="education-period">{{ rt(item.period) }}</div>
                <div class="education-text" v-html="rt(item.text)"></div>
              </div>
            </div>

            <div class="education-extra">
              <button
                type="button"
                class="publications-toggle"
                @click="showPublications = !showPublications"
              >
                {{
                  showPublications
                    ? t("education.hidePublications")
                    : t("education.showPublications")
                }}
                {{ showPublications ? "▴" : "▾" }}
              </button>

              <div v-if="showPublications" class="publications-list">
                <div
                  v-for="(publication, index) in tm('education.publications')"
                  :key="index"
                  class="publication-item"
                  v-html="rt(publication)"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" class="section">
          <div class="section-inner">
            <h2>{{ t("nav.work") }}</h2>

            <div class="work-list">
              <div
                v-for="(item, index) in workItems"
                :key="index"
                class="work-item"
              >
                <div class="work-period">
                  {{ rt(item.period) }}
                </div>

                <div class="work-title" v-html="rt(item.title)"></div>

                <div class="work-text">
                  <ul>
                    <li v-for="(line, lineIndex) in item.text" :key="lineIndex">
                      {{ rt(line) }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" class="section">
          <div class="section-inner">
            <h2>{{ t("nav.skills") }}</h2>

            <div class="skills-grid">
              <article
                v-for="(group, index) in skillGroups"
                :key="index"
                class="skill-card"
              >
                <h3>{{ rt(group.title) }}</h3>

                <ul>
                  <li v-for="(item, itemIndex) in group.items" :key="itemIndex">
                    {{ rt(item) }}
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" class="section">
          <div class="section-inner">
            <h2>{{ t("nav.projects") }}</h2>

            <div class="projects-list">
              <div
                v-for="(project, index) in projectItems"
                :key="index"
                class="project-item"
              >
                <div class="project-title-block">
                  <div class="project-title" v-html="rt(project.title)"></div>
                </div>

                <div class="project-content">
                  <p
                    v-for="(paragraph, paragraphIndex) in project.description"
                    :key="paragraphIndex"
                    class="project-description"
                    v-html="rt(paragraph)"
                  ></p>

                  <div
                    v-if="project.highlights && project.highlights.length"
                    class="project-subtitle"
                  >
                    {{ t("projects.highlightsLabel") }}
                  </div>

                  <ul
                    v-if="project.highlights && project.highlights.length"
                    class="project-highlights"
                  >
                    <li
                      v-for="(highlight, highlightIndex) in project.highlights"
                      :key="highlightIndex"
                      v-html="rt(highlight)"
                    ></li>
                  </ul>

                  <p class="project-tech" v-html="rt(project.techStack)"></p>

                  <p
                    v-if="project.website"
                    class="project-link"
                    v-html="rt(project.website)"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hobbies" class="section">
          <div class="section-inner">
            <h2>{{ t("nav.hobbies") }}</h2>

            <div class="hobbies-text">
              <p
                v-for="(paragraph, index) in tm('hobbies.text')"
                :key="index"
                v-html="rt(paragraph)"
              ></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick, computed } from "vue";
import CopyEmailButton from "@/components/CopyEmailButton.vue";

const { t, tm, rt, setLocale, locale } = useI18n();
const educationItems = computed(
  () => tm("education.items") as { period: string; text: string }[],
);
const workItems = computed(
  () => tm("work.items") as { period: string; title: string; text: string[] }[],
);
const showPublications = ref(false);
const skillGroups = computed(() => tm("skills.groups"));
const projectItems = computed(() => tm("projects.items") as any[]);

const route = useRoute();

const showTitle = ref(false);
const showSubtitle = ref(false);
const showNav = ref(false);

const mobileMenuOpen = ref(false);
const showMobileSectionButton = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const updateMobileSectionButtonVisibility = () => {
  const educationSection = document.getElementById("education");

  if (!educationSection) {
    showMobileSectionButton.value = false;
    return;
  }

  const educationTop = educationSection.getBoundingClientRect().top;
  showMobileSectionButton.value = educationTop <= 120;
};

const onSectionMenuClick = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);

  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  const url = `${window.location.pathname}${window.location.search}#${id}`;
  history.replaceState(null, "", url);

  mobileMenuOpen.value = false;
};

const heroNav = [
  { href: "#about", i18nKey: "nav.about" },
  { href: "#education", i18nKey: "nav.education" },
  { href: "#work", i18nKey: "nav.work" },
  { href: "#skills", i18nKey: "nav.skills" },
  { href: "#projects", i18nKey: "nav.projects" },
  { href: "#hobbies", i18nKey: "nav.hobbies" },
];

const changeLocaleKeepScroll = async (code: "en" | "et") => {
  const y = window.scrollY;

  if (route.hash) {
    history.replaceState(null, "", route.fullPath.replace(route.hash, ""));
  }

  await setLocale(code);

  await nextTick();
  window.scrollTo({ top: y, left: 0, behavior: "auto" });
};

/**
 * Click = smooth-scroll to section (and update URL hash)
 */
function onClickScroll(e: MouseEvent, href: string) {
  if (!href.startsWith("#")) return;

  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  e.preventDefault();

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  const url = `${window.location.pathname}${window.location.search}#${id}`;
  history.replaceState(null, "", url);

  if (id === "education") {
    showMobileSectionButton.value = true;
  }
}

onMounted(() => {
  showTitle.value = true;

  window.setTimeout(() => {
    showSubtitle.value = true;
  }, 160);

  window.setTimeout(() => {
    showNav.value = true;
  }, 320);

  window.addEventListener("scroll", updateMobileSectionButtonVisibility);
  updateMobileSectionButtonVisibility();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateMobileSectionButtonVisibility);
});
</script>
