<template>
  <main class="page" :data-locale="locale">
    <HeroNav
      :hero-nav="heroNav"
      :section-nav="sectionNav"
      :mobile-menu-open="mobileMenuOpen"
      :show-mobile-section-button="showMobileSectionButton"
      @change-locale="changeLocaleKeepScroll"
      @toggle-mobile-menu="toggleMobileMenu"
      @section-click="onSectionMenuClick"
      @hero-link-click="onClickScroll"
    />
    <Sections
      :hero-nav="heroNav"
      :section-nav="sectionNav"
      :education-items="educationItems"
      :work-items="workItems"
      :skill-groups="skillGroups"
      :project-items="projectItems"
      :show-publications="showPublications"
      @update:show-publications="showPublications = $event"
      @nav-click="onClickScroll"
    />
  </main>
  <footer class="footer">
    <p>© 2026 Katharina Matkevits</p>
    <p>Tallinn, Estonia</p>
    <p>
      <a href="mailto:katharina.matkevits@gmail.com"
        >katharina.matkevits@gmail.com</a
      >
    </p>
  </footer>
</template>

<script setup lang="ts">
import HeroNav from "@/components/HeroNav.vue";
import Sections from "@/components/Sections.vue";
import { onMounted, onBeforeUnmount, ref, nextTick, computed } from "vue";

const { tm, setLocale, locale } = useI18n();

const educationItems = computed(
  () => tm("education.items") as { period: string; text: string }[],
);

const workItems = computed(
  () => tm("work.items") as { period: string; title: string; text: string[] }[],
);

const skillGroups = computed(
  () => tm("skills.groups") as { title: string; items: string[] }[],
);

const projectItems = computed(() => tm("projects.items") as any[]);

const showPublications = ref(false);

const route = useRoute();

const mobileMenuOpen = ref(false);
const showMobileSectionButton = ref(false);

const heroNav = computed(() => [
  { href: "#about", i18nKey: "nav.about" },
  { href: "#education", i18nKey: "nav.education" },
  { href: "#work", i18nKey: "nav.work" },
  { href: "#skills", i18nKey: "nav.skills" },
  { href: "#projects", i18nKey: "nav.projects" },
  { href: "#hobbies", i18nKey: "nav.hobbies" },
]);

const sectionNav = computed(() => [
  { href: "#top", i18nKey: "nav.start" },
  { href: "#about", i18nKey: "nav.about" },
  { href: "#education", i18nKey: "nav.education" },
  { href: "#work", i18nKey: "nav.work" },
  { href: "#skills", i18nKey: "nav.skills" },
  { href: "#projects", i18nKey: "nav.projects" },
  { href: "#hobbies", i18nKey: "nav.hobbies" },
]);

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

const changeLocaleKeepScroll = async (code: "en" | "et") => {
  const y = window.scrollY;

  if (route.hash) {
    history.replaceState(null, "", route.fullPath.replace(route.hash, ""));
  }

  await setLocale(code);
  await nextTick();

  window.scrollTo({ top: y, left: 0, behavior: "auto" });
};

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
  window.addEventListener("scroll", updateMobileSectionButtonVisibility);
  updateMobileSectionButtonVisibility();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateMobileSectionButtonVisibility);
});
</script>
