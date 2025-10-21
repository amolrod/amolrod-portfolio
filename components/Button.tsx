'use client'

import { motion } from 'framer-motion'
import { buttonHover, buttonActive, shouldReduceMotion } from '@/lib/motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button'
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

interface ButtonAsLink extends BaseButtonProps {
  as: 'link'
  href: string
  external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-accent-violet-500 to-accent-pink-500 text-white shadow-glow hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed',
  secondary: 'backdrop-blur-md bg-slate-800/50 text-white border-2 border-slate-700/50 hover:border-accent-violet-500/50 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed',
  ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50 disabled:opacity-50 disabled:cursor-not-allowed',
  outline: 'bg-transparent text-slate-300 border-2 border-slate-700 hover:border-accent-violet-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className,
  } = props

  const reducedMotion = shouldReduceMotion()
  
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-violet-500/60'
  
  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  const motionProps = {
    whileHover: reducedMotion ? undefined : buttonHover,
    whileTap: reducedMotion ? undefined : buttonActive,
  }

  // Si es un link
  if (props.as === 'link') {
    return (
      <motion.a
        href={props.href}
        target={props.external ? '_blank' : undefined}
        rel={props.external ? 'noopener noreferrer' : undefined}
        className={combinedClassName}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  // Si es un botón normal
  const disabled = props.disabled || false
  return (
    <motion.button
      type={props.type || 'button'}
      disabled={disabled}
      onClick={props.onClick}
      className={combinedClassName}
      {...(disabled ? {} : motionProps)}
    >
      {children}
    </motion.button>
  )
}

