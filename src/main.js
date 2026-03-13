import './styles.css'

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
  menuBtn.focus()
}

function openMenu() {
  mobileNav.hidden = false
  menuBtn.setAttribute('aria-expanded', 'true')
  const firstLink = mobileNav.querySelector('a')
  if (firstLink) firstLink.focus()
}

menuBtn.addEventListener('click', () => {
  if (mobileNav.hidden === false) closeMenu()
  else openMenu()
})

mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu))

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileNav.hidden) closeMenu()
})

// Trap focus within mobile nav when open
mobileNav.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return
  const focusable = mobileNav.querySelectorAll('a')
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
})

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

  let i = 1
  let direction = 'type' // 'type' | 'erase'
  let timer
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
