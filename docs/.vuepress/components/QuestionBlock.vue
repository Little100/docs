<template>
  <details class="question-block" :open="open">
    <summary class="question-title">
      <span class="question-icon">?</span>
      {{ title }}
    </summary>
    <div class="question-content">
      <slot />
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
  margin: 20px 0;
  border: 2px solid #3eaf7c;
  border-radius: 8px;
  background: white;
  overflow: hidden;
  
  &[open] {
    border-color: #2c8e5f;
  }

  .question-title {
    padding: 15px 20px;
    background: #3eaf7c;
    color: white;
    font-weight: 600;
    cursor: pointer;
    margin: 0;
    display: block;
    
    .question-icon {
      margin-right: 8px;
      font-weight: bold;
      font-size: 1.2em;
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }
    
    &:hover {
      background: #2c8e5f;
    }
  }

  .question-content {
    padding: 20px;
    line-height: 1.6;
    
    > *:first-child {
      margin-top: 0;
    }
    
    > *:last-child {
      margin-bottom: 0;
    }
    
    p {
      margin: 0 0 15px 0;
    }
    
    pre, code {
      font-family: Consolas, Monaco, 'Courier New', monospace;
    }
    
    pre {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 4px;
      overflow-x: auto;
      margin: 15px 0;
    }
    
    code:not(pre code) {
      background: #f0f8f0;
      padding: 2px 6px;
      border-radius: 3px;
      color: #2c8e5f;
    }
  }
}

// 深色模式
html.dark .question-block {
  background: #1a1a1a;
  
  .question-content {
    background: #1a1a1a;
    color: #e0e0e0;
    
    pre {
      background: #2d2d2d;
      color: #e0e0e0;
    }
    
    code:not(pre code) {
      background: #2d2d2d;
      color: #4ade80;
    }
  }
}
</style>