<template>
  <details class="question-block" :open="open">
    <summary class="question-title">
      <span class="title-content">
        <span class="question-icon">?</span>
        {{ title }}
      </span>
      <span class="arrow" />
    </summary>
    <div class="question-content-wrapper">
      <div class="question-content">
        <slot />
      </div>
    </div>
  </details>
</template>

<script>
export default {
  name: 'QuestionBlock',
  props: {
    title: {
      type: String,
      default: '问题'
    },
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.question-block {
  // --- Theming Variables ---
  --qb-title-bg: #4a90e2;
  --qb-title-text: #ffffff;
  --qb-content-bg: #e9f3fe;
  --qb-content-text: #2c3e50;
  --qb-content-border: #cde2f9;
  --qb-icon-bg: rgba(255, 255, 255, 0.1);
  --qb-icon-border: rgba(255, 255, 255, 0.3);

  margin: 1rem 0;
  border: 1px solid var(--qb-title-bg);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &[open] {
    .question-title .arrow {
      transform: rotate(135deg);
    }
    .question-content-wrapper {
      max-height: 100vh;
      transition: max-height 0.35s ease-in;
    }
  }

  .question-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    list-style: none;
    background-color: var(--qb-title-bg);
    color: var(--qb-title-text);

    &::-webkit-details-marker {
      display: none;
    }

    .title-content {
      display: flex;
      align-items: center;
    }

    .question-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      margin-right: 0.75rem;
      border-radius: 50%;
      font-weight: 600;
      font-size: 0.9em;
      color: var(--qb-title-text);
      background-color: var(--qb-icon-bg);
      border: 1px solid var(--qb-icon-border);
    }

    .arrow {
      display: inline-block;
      width: 0.6em;
      height: 0.6em;
      border-top: 2px solid var(--qb-title-text);
      border-right: 2px solid var(--qb-title-text);
      transform: rotate(45deg);
      transition: transform 0.3s ease-out;
    }
  }

  .question-content-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease-out;
  }

  .question-content {
    padding: 1.5rem;
    line-height: 1.7;
    color: var(--qb-content-text);
    background-color: var(--qb-content-bg);
    border-top: 1px solid var(--qb-content-border);

    ::v-deep > *:first-child {
      margin-top: 0;
    }
    ::v-deep > *:last-child {
      margin-bottom: 0;
    }
  }
}

// --- Dark Mode Override ---
// Use a compound selector to cover common theme implementations
html.dark .question-block,
html[data-theme='dark'] .question-block {
  --qb-content-bg: #1c2a3a;
  --qb-content-text: #e0e0e0;
  --qb-content-border: #2a3f5a;
}
</style>