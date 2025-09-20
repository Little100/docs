// 字体切换器和语言修复
(function() {
  console.log('🔤 Font switcher and language fixer loaded');
  
  const fontOptions = {
    minecraft: {
      name: 'Minecraft AE',
      family: 'Minecraft, monospace'
    },
    system: {
      name: '系统默认',
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    sans: {
      name: '无衬线字体',
      family: '"Helvetica Neue", Arial, "Noto Sans", sans-serif'
    },
    serif: {
      name: '衬线字体',
      family: 'Georgia, Cambria, "Times New Roman", Times, serif'
    },
    mono: {
      name: '等宽字体',
      family: '"SF Mono", Monaco, "Roboto Mono", monospace'
    },
    comfort: {
      name: '护眼字体',
      family: '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif'
    }
  };

  // 应用字体
  function applyFont(fontKey) {
    const font = fontOptions[fontKey];
    if (font) {
      console.log(`🔤 Applying font: ${font.name}`);
      
      // 设置CSS变量
      document.documentElement.style.setProperty('--docs-font-family', font.family);
      
      // 直接设置body字体
      document.body.style.fontFamily = font.family + ' !important';
      
      // 设置所有主要元素的字体
      const elements = document.querySelectorAll('body, h1, h2, h3, h4, h5, h6, p, div, span, button, input, select, textarea, .vp-doc');
      elements.forEach(el => {
        el.style.fontFamily = font.family + ' !important';
      });
      
      // 清除之前的字体类
      Object.keys(fontOptions).forEach(key => {
        document.body.classList.remove(`font-${key}`);
      });
      
      // 添加新的字体类
      document.body.classList.add(`font-${fontKey}`);
      
      // 保存到localStorage
      localStorage.setItem('docs-font', fontKey);
      
      console.log(`✅ Font successfully changed to: ${font.name}`);
      return true;
    }
    console.error(`❌ Font not found: ${fontKey}`);
    return false;
  }

  // 初始化字体
  function initFont() {
    const savedFont = localStorage.getItem('docs-font') || 'minecraft';
    applyFont(savedFont);
  }

  // 完全重建语言选择器
  function fixLanguageSelector() {
    // 检查是否已经修复过了
    if (window._languageSelectorFixed) {
      return;
    }
    
    console.log('🌍 Completely rebuilding language selector...');
    
    // 确定当前语言和路径
    const currentPath = window.location.pathname;
    const langMap = {
      '/': { text: '🇨🇳 简体中文', path: '/' },
      '/en/': { text: '🇺🇸 English', path: '/en/' },
      '/lzh/': { text: 'lzh 文言文', path: '/lzh/' },
      '/zh-TW/': { text: '🇹🇼 繁體中文', path: '/zh-TW/' }
    };
    
    const currentLangPath = Object.keys(langMap).find(path => currentPath.startsWith(path)) || '/';
    const currentLang = langMap[currentLangPath];
    console.log(`🌍 Current path: ${currentPath}, Current language: ${currentLang.text}`);
    
    // 查找语言切换器按钮 - 使用更准确的选择器
    const langDropdown = document.querySelector('.vp-dropdown-title[aria-label*="语言"], .vp-dropdown-title[aria-label*="选择语言"]');
    
    if (langDropdown) {
      console.log('🔍 Found language dropdown, fixing...');
      
      // 修复按钮显示的当前语言
      const buttonText = langDropdown.querySelector('span:not(.arrow)');
      if (buttonText && buttonText.textContent !== currentLang.text) {
        console.log(`🔄 Updating button text from "${buttonText.textContent}" to "${currentLang.text}"`);
        buttonText.textContent = currentLang.text;
      }
      
      // 修复下拉菜单中的选项
      const dropdownItems = langDropdown.querySelectorAll('.vp-dropdown-item a');
      dropdownItems.forEach((item, index) => {
        const languages = [
          { text: '🇨🇳 简体中文', href: '/', label: '简体中文' },
          { text: '🇺🇸 English', href: '/en/', label: 'English' },
          { text: 'lzh 文言文', href: '/lzh/', label: '文言文' },
          { text: '🇹🇼 繁體中文', href: '/zh-TW/', label: '繁體中文' }
        ];
        
        if (languages[index]) {
          const lang = languages[index];
          
          // 修复链接
          item.setAttribute('href', lang.href);
          
          // 修复aria-label
          item.setAttribute('aria-label', lang.label);
          
          // 修复显示文本
          const textNode = Array.from(item.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
          if (textNode) {
            textNode.textContent = lang.text;
          } else {
            // 如果没有文本节点，直接设置文本内容
            item.innerHTML = lang.text;
          }
          
          console.log(`✅ Fixed language option ${index}: ${lang.text} -> ${lang.href}`);
        }
      });
      
      console.log('✅ Language selector completely rebuilt');
      
      // 标记为已修复，避免重复处理
      window._languageSelectorFixed = true;
    } else {
      console.log('❌ Language dropdown not found');
    }
  }

  // 处理导航栏点击事件
  function handleNavbarClick(event) {
    const target = event.target.closest('a') || event.target;
    const rel = target.getAttribute('rel');
    const href = target.getAttribute('href');
    
    console.log('🖱️ Navbar click detected:', { href, rel, target });
    
    // 处理字体切换
    if (rel && rel.startsWith('font-')) {
      const fontKey = rel.replace('font-', '');
      console.log('🔤 Font key from rel:', fontKey);
      
      if (fontOptions[fontKey]) {
        // 阻止默认的导航行为
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        
        console.log(`🔤 Applying font: ${fontKey}`);
        if (applyFont(fontKey)) {
          // 显示字体切换反馈
          showFontChangeNotification(fontOptions[fontKey].name);
        }
        
        return false;
      }
    }
    
    // 如果是javascript:void(0)链接，阻止默认行为
    if (href === 'javascript:void(0)') {
      event.preventDefault();
      return false;
    }
  }

  // 显示字体切换通知
  function showFontChangeNotification(fontName) {
    // 移除现有通知
    const existingNotification = document.querySelector('.font-change-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // 创建新通知
    const notification = document.createElement('div');
    notification.className = 'font-change-notification';
    notification.innerHTML = `
      <div class="font-notification-content">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9,4V6H12V18H10V20H14V18H12V6H15V4H9M3,6V8H8V6H3M16,6V8H21V6H16M3,16V18H8V16H3M16,16V18H21V16H16Z"/>
        </svg>
        <span>字体已切换为：${fontName}</span>
      </div>
    `;
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
      .font-change-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--vp-c-brand);
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        pointer-events: none;
      }
      
      .font-notification-content {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // 3秒后移除通知
    setTimeout(() => {
      notification.remove();
      style.remove();
    }, 3000);
  }

  // 强制应用字体样式
  function forceApplyFontStyles() {
    const style = document.createElement('style');
    style.id = 'force-font-styles';
    style.innerHTML = `
      body, h1, h2, h3, h4, h5, h6, p, div, span, button, input, select, textarea,
      .vp-doc, .hope-nav-links, .hope-nav-screen-links, .sidebar,
      .hope-sidebar-links, .hope-page-nav {
        font-family: var(--docs-font-family) !important;
      }
      
      /* 确保代码块在某些字体下仍使用等宽字体 */
      code, pre, .language-*, .highlight {
        font-family: "SF Mono", Monaco, "Roboto Mono", "Source Code Pro", monospace !important;
      }
    `;
    
    // 移除旧样式
    const oldStyle = document.getElementById('force-font-styles');
    if (oldStyle) {
      oldStyle.remove();
    }
    
    document.head.appendChild(style);
  }

  // 主初始化函数
  // 动态设置字体路径
  function setMinecraftFontPath() {
    // 获取正确的字体路径，考虑base路径
    let fontPath;
    const origin = window.location.origin;
    const baseTag = document.querySelector('base');
    
    if (baseTag && baseTag.href && baseTag.href !== `${origin}/`) {
      // 有base标签且不是根路径
      fontPath = `${baseTag.href}MinecraftAE.ttf`;
    } else {
      // 使用根路径
      fontPath = `${origin}/MinecraftAE.ttf`;
    }
    
    // 创建新的字体样式
    const style = document.createElement('style');
    style.id = 'minecraft-font-dynamic';
    style.textContent = `
      @font-face {
        font-family: "Minecraft";
        src: url("${fontPath}") format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `;
    
    // 移除旧的同名样式
    const oldStyle = document.getElementById('minecraft-font-dynamic');
    if (oldStyle) {
      oldStyle.remove();
    }
    
    document.head.appendChild(style);
    console.log(`🎨 Dynamic font path set: ${fontPath}`);
  }

  function initialize() {
    console.log('🚀 Initializing font switcher and language fixer...');
    
    // 设置动态字体路径
    setMinecraftFontPath();
    
    // 初始化字体
    initFont();
    
    // 强制应用字体样式
    forceApplyFontStyles();
    
    // 修复语言选择器
    fixLanguageSelector();
    
    // 添加字体切换点击事件监听 - 使用捕获阶段抢先处理
    document.addEventListener('click', handleNavbarClick, true);
    
    // 额外的事件监听来确保捕获字体切换点击
    document.addEventListener('mousedown', function(event) {
      const target = event.target.closest('a');
      if (target) {
        const rel = target.getAttribute('rel');
        const href = target.getAttribute('href');
        
        // 处理字体切换链接
        if (rel && rel.startsWith('font-')) {
          const fontKey = rel.replace('font-', '');
          if (fontOptions[fontKey]) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
        
        // 处理javascript:void(0)链接
        if (href === 'javascript:void(0)') {
          event.preventDefault();
        }
      }
    }, true);
    
    console.log('✅ Initialization complete');
  }

  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

  // 页面路由变化时重新初始化
  window.addEventListener('popstate', function() {
    setTimeout(() => {
      initialize();
    }, 100);
  });
  
  // 监听VuePress路由变化
  let originalPushState = history.pushState;
  let originalReplaceState = history.replaceState;
  
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    // 路由变化时重置语言选择器标记
    window._languageSelectorFixed = false;
    setTimeout(initialize, 200);
  };
  
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    // 路由变化时重置语言选择器标记
    window._languageSelectorFixed = false;
    setTimeout(initialize, 200);
  };
  
  // 不再需要拦截Vue Router，因为我们改用了javascript:void(0)链接

  // 定期检查和修复
  setInterval(() => {
    const savedFont = localStorage.getItem('docs-font') || 'minecraft';
    const currentFamily = getComputedStyle(document.body).fontFamily;
    const expectedFamily = fontOptions[savedFont]?.family;
    
    if (expectedFamily && !currentFamily.includes(expectedFamily.split(',')[0].replace(/"/g, ''))) {
      console.log('🔄 Font drift detected, reapplying...');
      applyFont(savedFont);
      forceApplyFontStyles();
    }
    
    // 只在页面变化时重新检查语言选择器
    if (!window._languageSelectorFixed) {
      fixLanguageSelector();
    }
  }, 2000);
})();
