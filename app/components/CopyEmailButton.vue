<template>
  <a
    :href="`mailto:${email}`"
    class="icon-btn"
    :aria-label="copied ? t('contact.emailCopied') : t('contact.copyEmail')"
    :title="copied ? t('contact.emailCopied') : t('contact.copyEmail')"
    @click.prevent="copyEmail"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>

    <span class="sr-only">
      {{ copied ? t("contact.emailCopied") : t("contact.copyEmail") }}
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";

const { t } = useI18n();

const copied = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

function buildEmail() {
  const user = ["katharina", ".", "matkevits"].join("");
  const domain = ["gmail", ".", "com"].join("");
  return `${user}@${domain}`;
}

const email = computed(() => buildEmail());

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email.value);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = email.value;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  copied.value = true;

  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    copied.value = false;
  }, 1400);
}

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
