<template>
  <section id="top" class="hero">
    <div class="hero-topbar">
      <div class="lang" aria-label="Language switch">
        <button
          class="lang-btn"
          :class="{ active: locale === 'en' }"
          type="button"
          @click="$emit('change-locale', 'en')"
        >
          EN
        </button>
        <button
          class="lang-btn"
          :class="{ active: locale === 'et' }"
          type="button"
          @click="$emit('change-locale', 'et')"
        >
          ET
        </button>
      </div>
    </div>

    <div class="container hero-main">
      <div class="hero-text-panel">
        <div class="hero-text">
          <h1 class="hero-title" v-html="t('hero.title')"></h1>
          <p class="hero-subtitle" v-html="t('hero.subtitle')"></p>
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

  <section class="bookmarks-section">
    <div class="container bookmarks-row">
      <nav class="side-nav" aria-label="Page sections">
        <a
          v-for="item in heroNav"
          :key="item.href"
          class="bookmark"
          :href="item.href"
          @click="onHeroLinkClick($event, item.href)"
        >
          {{ t(item.i18nKey) }}
        </a>
      </nav>

      <div class="mobile-utility">
        <div class="socials-mobile">
          <HeroSocialLinks />
        </div>

        <button
          v-if="showMobileSectionButton"
          class="icon-btn section-menu-btn"
          type="button"
          :aria-expanded="mobileMenuOpen"
          aria-label="Open section navigation"
          title="Sections"
          @click="$emit('toggle-mobile-menu')"
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
              v-for="item in sectionNav"
              :key="item.href"
              type="button"
              class="section-menu-link"
              @click="$emit('section-click', item.href)"
            >
              {{ t(item.i18nKey) }}
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

type HeroNavItem = {
  href: string;
  i18nKey: string;
};

defineProps<{
  heroNav: HeroNavItem[];
  sectionNav: HeroNavItem[];
  mobileMenuOpen: boolean;
  showMobileSectionButton: boolean;
}>();

const emit = defineEmits<{
  (e: "change-locale", code: "en" | "et"): void;
  (e: "toggle-mobile-menu"): void;
  (e: "section-click", href: string): void;
  (e: "hero-link-click", event: MouseEvent, href: string): void;
}>();

function onHeroLinkClick(event: MouseEvent, href: string) {
  emit("hero-link-click", event, href);
}
</script>
