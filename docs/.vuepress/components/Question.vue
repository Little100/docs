<template>
  <div class="custom-container question">
    <p class="custom-container-title">
      {{ title || '问题' }}
    </p>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    title: {
      type: String,
      required: false,
      default: '问题'
    }
  }
}
</script>

<style>
.custom-container.question {
  background-color: #e0f2fe;
  border-color: #7dd3fc;
  color: #0c5460;
  border-radius: 8px;
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  
  .custom-container-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    
    .question-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #38bdf8;
      color: white;
      font-weight: bold;
      margin-right: 8px;
      font-size: 14px;
    }
  }
  
  p {
    line-height: 1.7;
  }
}

html.dark .custom-container.question {
  background-color: #0c2e42;
  border-color: #1e638f;
  color: #a6d8ff;
  
  .question-icon {
    background-color: #1e638f;
    color: #ffffff;
  }
}
</style>