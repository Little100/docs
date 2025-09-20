<template>
  <div class="navbar-font-selector">
    <div class="font-selector-dropdown">
      <button 
        class="font-selector-btn"
        @click="toggleDropdown"
        :title="getTooltipText()"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9,4V6H12V18H10V20H14V18H12V6H15V4H9M3,6V8H8V6H3M16,6V8H21V6H16M3,16V18H8V16H3M16,16V18H21V16H16Z"/>
        </svg>
        <span class="font-label">字体</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="dropdown-arrow" :class="{ 'rotated': showDropdown }">
          <path d="M7,10L12,15L17,10H7Z"/>
        </svg>
      </button>
      
      <Transition name="dropdown">
        <div v-if="showDropdown" class="font-dropdown-menu" ref="dropdown">
          <div 
            v-for="font in fontOptions" 
            :key="font.value"
            class="font-menu-item"
            :class="{ active: currentFont === font.value }"
            @click="selectFont(font.value)"
          >
            <span class="font-name" :style="{ fontFamily: font.family }">{{ font.name }}</span>
            <span class="font-preview" :style="{ fontFamily: font.family }">{{ font.preview }}</span>
            <div v-if="currentFont === font.value" class="check-mark">✓</div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const showDropdown = ref(false)
const currentFont = ref('minecraft')
const dropdown = ref(null)

const fontOptions = [
  {
    value: 'minecraft',
    name: 'Minecraft AE',
    family: 'Minecraft, monospace',
    preview: 'AaBb我的世界'
  },
  {
    value: 'system',
    name: '系统默认',
    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    preview: 'AaBb系统字体'
  },
  {
    value: 'sans',
    name: '无衬线字体',
    family: '"Helvetica Neue", Arial, "Noto Sans", sans-serif',
    preview: 'AaBb无衬线'
  },
  {
    value: 'serif',
    name: '衬线字体',  
    family: 'Georgia, Cambria, "Times New Roman", Times, serif',
    preview: 'AaBb衬线字体'
  },
  {
    value: 'mono',
    name: '等宽字体',
    family: '"SF Mono", Monaco, "Roboto Mono", monospace',
    preview: 'AaBb等宽字体'
  },
  {
    value: 'comfort',
    name: '护眼字体',
    family: '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif',
    preview: 'AaBb护眼阅读'
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
  return `当前字体: ${font ? font.name : 'Minecraft AE'}`
}

const applyFont = (fontValue) => {
  const font = fontOptions.find(f => f.value === fontValue)
  if (font) {
    // 使用CSS变量方式应用字体
    document.documentElement.style.setProperty('--docs-font-family', font.family)
    
    // 清除之前的字体类
    document.body.classList.remove(...fontOptions.map(f => `font-${f.value}`))
    
    // 添加新的字体类
    document.body.classList.add(`font-${fontValue}`)
    
    console.log(`Font changed to: ${font.name}`)
  }
}

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target) && !event.target.closest('.font-selector-btn')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  // 从localStorage读取用户的字体选择
  const savedFont = localStorage.getItem('docs-font') || 'minecraft'
  currentFont.value = savedFont
  
  // 等待DOM渲染完成后应用字体
  nextTick(() => {
    applyFont(savedFont)
  })
  
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar-font-selector {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.font-selector-dropdown {
  position: relative;
}

.font-selector-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  color: var(--vp-c-text-1);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  height: 32px;
}

.font-selector-btn:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.font-label {
  font-size: 14px;
  white-space: nowrap;
}

.dropdown-arrow {
  transition: transform 0.2s;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.font-dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  min-width: 220px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  z-index: 1000;
  overflow: hidden;
}

.font-menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--vp-c-divider-light);
  transition: background-color 0.2s;
  position: relative;
}

.font-menu-item:last-child {
  border-bottom: none;
}

.font-menu-item:hover {
  background: var(--vp-c-bg-soft);
}

.font-menu-item.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.font-name {
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
}

.font-preview {
  font-size: 12px;
  opacity: 0.7;
  flex: 1;
  text-align: center;
}

.check-mark {
  color: var(--vp-c-brand);
  font-weight: bold;
  font-size: 14px;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .font-label {
    display: none;
  }
  
  .font-selector-btn {
    padding: 6px;
  }
  
  .font-dropdown-menu {
    right: -8px;
    min-width: 200px;
  }
}
</style>
