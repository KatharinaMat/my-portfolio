<template>
  <section id="about" class="section about-section">
    <div class="about-layout">
      <div class="about-sidebar-spacer" aria-hidden="true"></div>

      <div class="about-main">
        <div class="section-inner">
          <h2>{{ t("nav.about") }}</h2>

          <div class="about-text">
            <p
              v-for="(paragraph, index) in aboutParagraphs"
              :key="index"
              v-html="rt(paragraph)"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="sections-with-sidebar">
    <nav class="sticky-navigation" aria-label="Section navigation">
      <a
        v-for="item in sectionNav"
        :key="item.href"
        class="bookmark"
        :href="item.href"
        @click="$emit('nav-click', $event, item.href)"
      >
        {{ t(item.i18nKey) }}
      </a>
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
              @click="togglePublications"
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
                v-for="(publication, index) in publications"
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
              v-for="(paragraph, index) in hobbyParagraphs"
              :key="index"
              v-html="rt(paragraph)"
            ></p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { t, tm, rt } = useI18n();

const aboutParagraphs = computed(() => tm("about.text") as string[]);
const publications = computed(() => tm("education.publications") as string[]);
const hobbyParagraphs = computed(() => tm("hobbies.text") as string[]);

type HeroNavItem = {
  href: string;
  i18nKey: string;
};

type EducationItem = {
  period: string;
  text: string;
};

type WorkItem = {
  period: string;
  title: string;
  text: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type ProjectItem = {
  title: string;
  description: string[];
  highlights?: string[];
  techStack: string;
  website?: string;
};

const props = defineProps<{
  heroNav: HeroNavItem[];
  sectionNav: HeroNavItem[];
  educationItems: EducationItem[];
  workItems: WorkItem[];
  skillGroups: SkillGroup[];
  projectItems: ProjectItem[];
  showPublications: boolean;
}>();

const emit = defineEmits<{
  (e: "update:showPublications", value: boolean): void;
  (e: "nav-click", event: MouseEvent, href: string): void;
}>();

function togglePublications() {
  emit("update:showPublications", !props.showPublications);
}

function onNavClick(event: MouseEvent, href: string) {
  emit("nav-click", event, href);
}
</script>
