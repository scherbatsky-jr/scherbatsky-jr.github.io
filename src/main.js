import './styles.css'

/**
 * Update these with your real profiles.
 * (Your resume had icons/labels but not the full URLs.)
 */
const LINKS = {
  github: 'https://github.com/scherbatsky-jr',
  linkedin: 'https://www.linkedin.com/in/scherbatsky-jr/',
}

function setLink(id, href) {
  const el = document.getElementById(id)
  if (el) el.href = href
}

setLink('githubLink', LINKS.github)
setLink('linkedinLink', LINKS.linkedin)

const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal')
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add('is-visible')
    }
  },
  { threshold: 0.12 }
)
revealEls.forEach((el) => io.observe(el))

// Mobile menu
const menuBtn = document.getElementById('menuBtn')
const mobileNav = document.getElementById('mobileNav')

function closeMenu() {
  mobileNav.hidden = true
  menuBtn.setAttribute('aria-expanded', 'false')
}

menuBtn.addEventListener('click', () => {
  const open = mobileNav.hidden === false
  if (open) closeMenu()
  else {
    mobileNav.hidden = false
    menuBtn.setAttribute('aria-expanded', 'true')
  }
})

mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu))

// Typewriter headline (loop)
const typeEl = document.getElementById('headlineType')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (typeEl && !prefersReducedMotion) {
  const fullText = typeEl.dataset.text || typeEl.textContent || ''
  const text = fullText.replace(/\s+/g, ' ').trim()

  // Tunables
  const TYPE_MS = 60
  const ERASE_MS = 32
  const HOLD_FULL_MS = 1200
  const HOLD_EMPTY_MS = 350

  let i = 0
  let direction = 'type' // 'type' | 'erase'
  let timer

  // Never erase below first character; keep at least 1 char visible to avoid collapse
  i = 1
  typeEl.textContent = text.slice(0, 1)

  const tick = () => {
    if (direction === 'type') {
      i += 1
      typeEl.textContent = text.slice(0, i)

      if (i >= text.length) {
        direction = 'erase'
        timer = window.setTimeout(tick, HOLD_FULL_MS)
        return
      }

      timer = window.setTimeout(tick, TYPE_MS)
      return
    }

    // erase
    i -= 1
    typeEl.textContent = text.slice(0, Math.max(0, i))

    // Never fully erase: stop at first character (e.g., 'C')
    if (i <= 1) {
      i = 1
      typeEl.textContent = text.slice(0, 1)
      direction = 'type'
      timer = window.setTimeout(tick, HOLD_EMPTY_MS)
      return
    }

    timer = window.setTimeout(tick, ERASE_MS)
  }

  // Kick it off
  tick()

  // Cleanup on hot reload/unload
  window.addEventListener('beforeunload', () => {
    if (timer) window.clearTimeout(timer)
  })
}

// Tiny toast (no deps)
let toastTimer
function toast(msg) {
  clearTimeout(toastTimer)
  let el = document.getElementById('toast')
  if (!el) {
    el = document.createElement('div')
    el.id = 'toast'
    Object.assign(el.style, {
      position: 'fixed',
      left: '50%',
      bottom: '18px',
      transform: 'translateX(-50%)',
      padding: '10px 12px',
      borderRadius: '14px',
      border: '1px solid rgba(255,255,255,.14)',
      background: 'rgba(11,12,16,.72)',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 18px 50px rgba(0,0,0,.55)',
      color: 'rgba(233,236,241,.92)',
      fontSize: '13px',
      zIndex: '1000',
      opacity: '0',
      transition: 'opacity .2s ease',
    })
    document.body.appendChild(el)
  }
  el.textContent = msg
  el.style.opacity = '1'
  toastTimer = setTimeout(() => (el.style.opacity = '0'), 1800)
}
