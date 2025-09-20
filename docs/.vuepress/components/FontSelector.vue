<template>
  <Teleport to="body">
    <div class="font-selector-widget">
      <button 
        class="font-selector-fab" 
        @click="toggleDropdown"
        :title="getTooltipText()"
        :class="{ active: showDropdown }"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9,4V6H12V18H10V20H14V18H12V6H15V4H9M3,6V8H8V6H3M16,6V8H21V6H16M3,16V18H8V16H3M16,16V18H21V16H16Z"/>
        </svg>
      </button>
      
      <Transition name="dropdown">
        <div v-if="showDropdown" class="font-dropdown">
          <div class="dropdown-header">
            <span>选择字体</span>
            <button class="close-btn" @click="showDropdown = false">×</button>
          </div>
          <div 
            v-for="font in fontOptions" 
            :key="font.value"
            class="font-option"
            :class="{ active: currentFont === font.value }"
            @click="selectFont(font.value)"
            :style="{ fontFamily: font.family }"
          >
            <div class="font-info">
              <span class="font-name">{{ font.name }}</span>
              <span class="font-preview">{{ font.preview }}</span>
            </div>
            <div v-if="currentFont === font.value" class="check-icon">✓</div>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showDropdown = ref(false)
const currentFont = ref('minecraft')

const fontOptions = [
  {
    value: 'minecraft',
    name: 'Minecraft AE',
    family: 'Minecraft, monospace',
    preview: 'AaBbCc 我的世界'
  },
  {
    value: 'system',
    name: '系统默认',
    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    preview: 'AaBbCc 系统字体'
  },
  {
    value: 'sans',
    name: '无衬线字体',
    family: '"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    preview: 'AaBbCc 无衬线'
  },
  {
    value: 'serif',
    name: '衬线字体',
    family: 'Georgia, Cambria, "Times New Roman", Times, serif',
    preview: 'AaBbCc 衬线字体'
  },
  {
    value: 'mono',
    name: '等宽字体',
    family: '"SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace',
    preview: 'AaBbCc 等宽字体'
  },
  {
    value: 'comfort',
    name: '护眼字体',
    family: '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif',
    preview: 'AaBbCc 护眼阅读'
  }
]

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const selectFont = (fontValue) => {
  currentFont.value = fontValue
  localStorage.setItem('docs-font', fontValue)
  applyFont(fontValue)
  showDropdown.value = false
}

const getTooltipText = () => {
  const font = fontOptions.find(f => f.value === currentFont.value)
  return `当前字体: ${font ? font.name : 'Minecraft AE'} - 点击切换字体`
}

const applyFont = (fontValue) => {
  const font = fontOptions.find(f => f.value === fontValue)
  if (font) {
    document.documentElement.style.setProperty('--docs-font-family', font.family)
    document.body.classList.remove(...fontOptions.map(f => `font-${f.value}`))
    document.body.classList.add(`font-${fontValue}`)
  }
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.font-selector')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  // 从localStorage读取用户的字体选择
  const savedFont = localStorage.getItem('docs-font') || 'minecraft'
  currentFont.value = savedFont
  applyFont(savedFont)
  
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.font-selector-widget {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 1001;
}

.font-selector-fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.font-selector-fab:hover {
  transform: scale(1.1);
  background: var(--vp-c-brand-dark);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.font-selector-fab.active {
  background: var(--vp-c-brand-dark);
  transform: scale(1.05);
}

.font-dropdown {
  position: absolute;
  bottom: 70px;
  right: 0;
  min-width: 280px;
  max-width: 320px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  font-weight: 600;
  font-size: 14px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
}

.close-btn:hover {
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
}

.font-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--vp-c-divider-light);
  transition: all 0.2s;
  position: relative;
}

.font-option:last-child {
  border-bottom: none;
}

.font-option:hover {
  background: var(--vp-c-bg-soft);
}

.font-option.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.font-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.font-name {
  font-size: 14px;
  font-weight: 500;
}

.font-preview {
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.3;
}

.check-icon {
  color: var(--vp-c-brand);
  font-weight: bold;
  font-size: 16px;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

html.dark .font-dropdown {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-divider);
}

html.dark .font-selector-fab {
  background: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .font-selector-widget {
    bottom: 60px;
    right: 16px;
  }
  
  .font-selector-fab {
    width: 48px;
    height: 48px;
  }
  
  .font-dropdown {
    min-width: 260px;
    bottom: 60px;
    right: 0;
  }
  
  .font-option {
    padding: 10px 12px;
  }
  
  .dropdown-header {
    padding: 10px 12px;
  }
}

@media print {
  .font-selector-widget {
    display: none;
  }
}
</style>
