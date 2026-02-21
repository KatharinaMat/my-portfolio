<template>
  <button
    type="button"
    class="icon-btn"
    :aria-label="copied ? 'Email copied' : 'Copy email'"
    :title="copied ? 'Copied!' : 'Copy email'"
    @click="copyEmail"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <!-- envelope icon (same as yours) -->
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>

    <span class="sr-only">Copy email</span>
  </button>

  <span v-if="copied" class="copied">Copied!</span>
</template>

<script setup lang="ts">
import { ref } from "vue";

const copied = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

function buildEmail() {
  // Keeps the full email out of HTML and avoids a single "katharina...@gmail.com" string in source.
  const user = ["katharina", ".", "matkevits"].join("");
  const domain = ["gmail", ".", "com"].join("");
  return `${user}@${domain}`;
}

async function copyEmail() {
  const email = buildEmail();

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    // Fallback
    const ta = document.createElement("textarea");
    ta.value = email;
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
  timer = setTimeout(() => (copied.value = false), 1400);
}
</script>

<style scoped>
/* screen-reader only */
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

/* little label next to the button */
.copied {
  position: fixed;
  right: 68px; /* sits left of your fixed right icon column */
  top: 72px;
  z-index: 26;
  background: rgba(248, 246, 242, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 12px;
  color: #1a1a1a;
}
</style>
