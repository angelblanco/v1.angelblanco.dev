import prism from 'prismjs';
import 'prismjs/plugins/custom-class/prism-custom-class.js';
import loadLanguages from 'prismjs/components/index.js';
import chalk from 'chalk';
import escapeHtml from 'escape-html';

prism.plugins.customClass.prefix('hl--');

// required to make embedded highlighting work...
loadLanguages(['markup', 'css', 'markup-templating', 'javascript', 'js-extras', 'php', 'phpdoc', 'clike'])

function terminalWrap(wrapper, lang) {
  return `<pre class="terminal">
  <div class="bar bar-language-${lang}">
    <div class="btn"></div>
    <div class="bar-title">${lang}</div>
    <div><button class="button copy is-small is-pulled-right">Copy</button></div>  
  </div>
  <div class="body">${wrapper}</div>
  </pre>`;
}

function wrap(code, lang) {
  if (lang === 'text') {
    code = escapeHtml(code)
  }

  return terminalWrap(`<pre class="language-${lang}"><code>${code}</code></pre>`, lang);
}

function getLangCodeFromExtension(extension) {
  const extensionMap = {
    vue: 'markup',
    html: 'markup',
    svelte: 'markup',
    md: 'markdown',
    rb: 'ruby',
    ts: 'typescript',
    py: 'python',
    sh: 'bash',
    yml: 'yaml',
    styl: 'stylus',
    kt: 'kotlin',
    rs: 'rust'
  }

  return extensionMap[extension] || extension
}

export default (str, lang) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang

  lang = getLangCodeFromExtension(lang)

  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang])
    } catch (e) {
      console.warn(chalk.yellow(`[rollup-plugin-blog-md] Syntax highlight for language "${lang}" is not supported.`))
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}