// Variantes de animación reutilizables para Framer Motion
// Con easing natural y soporte para prefers-reduced-motion

const smoothEasing = [0.22, 1, 0.36, 1] // cubic-bezier natural
const springConfig = { type: 'spring', stiffness: 300, damping: 30 }

// ========================================
// FADE ANIMATIONS
// ========================================

export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: smoothEasing },
}

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.25, ease: smoothEasing },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.25, ease: smoothEasing },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.25, ease: smoothEasing },
}

// ========================================
// SLIDE ANIMATIONS
// ========================================

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.25, ease: smoothEasing },
}

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.25, ease: smoothEasing },
}

// ========================================
// SCALE ANIMATIONS
// ========================================

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.2, ease: smoothEasing },
}

export const scaleInBounce = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { type: 'spring', stiffness: 260, damping: 20 },
}

// ========================================
// STAGGER ANIMATIONS (para listas/grids)
// ========================================

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2, ease: smoothEasing },
}

// ========================================
// HOVER & TAP INTERACTIONS
// ========================================

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.15, ease: smoothEasing },
}

export const hoverScaleLarge = {
  scale: 1.05,
  transition: springConfig,
}

export const tapScale = {
  scale: 0.97,
  transition: { duration: 0.1 },
}

export const hoverLift = {
  y: -4,
  transition: { duration: 0.2, ease: smoothEasing },
}

// ========================================
// FOCUS INTERACTIONS (accesibilidad)
// ========================================

export const focusRing = {
  boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.6)',
  transition: { duration: 0.15 },
}

// ========================================
// AMBIENT ANIMATIONS (sutiles, no distractivas)
// ========================================

export const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export const pulseGlow = {
  scale: [1, 1.02, 1],
  opacity: [1, 0.9, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// ========================================
// PAGE TRANSITIONS
// ========================================

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: smoothEasing },
}

export const pageSlide = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.25, ease: smoothEasing },
}

// ========================================
// ROTATE ANIMATIONS
// ========================================

export const rotateIn = {
  initial: { opacity: 0, rotate: -5 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 5 },
  transition: { duration: 0.25, ease: smoothEasing },
}

// ========================================
// REDUCED MOTION (accesibilidad)
// ========================================

export const prefersReducedMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
}

// ========================================
// HELPER: Detectar preferencia de motion
// ========================================

export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ========================================
// HELPER: Obtener variante según preferencias
// ========================================

export const getMotionVariant = (normalVariant: any, reducedVariant = prefersReducedMotion) => {
  return shouldReduceMotion() ? reducedVariant : normalVariant
}

// ========================================
// PRESETS COMBINADOS (uso común)
// ========================================

export const cardHover = {
  scale: 1.02,
  y: -4,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
  transition: { duration: 0.2, ease: smoothEasing },
}

export const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.15, ease: smoothEasing },
}

export const buttonActive = {
  scale: 0.97,
  transition: { duration: 0.1 },
}

