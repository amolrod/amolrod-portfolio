'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Hablemos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Escríbeme y conversemos
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.form
            variants={staggerItem}
            onSubmit={handleSubmit}
            className="glass-dark p-8 rounded-2xl space-y-6"
          >
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                <FiUser className="inline mr-2" />
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                <FiMail className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                <FiMessageSquare className="inline mr-2" />
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              className={`w-full px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                status === 'loading'
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-neon-purple to-neon-cyan hover:shadow-2xl'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <FiSend />
                  Enviar mensaje
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
              >
                ¡Mensaje enviado con éxito! Te responderé pronto 🎉
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-center"
              >
                Hubo un error al enviar el mensaje. Intenta nuevamente.
              </motion.div>
            )}
          </motion.form>

          {/* Contacto directo */}
          <motion.div
            variants={staggerItem}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">O escríbeme directamente a:</p>
            <a
              href="mailto:angelmolinarodriguez15@gmail.com"
              className="text-neon-cyan hover:text-neon-purple transition-colors text-lg font-semibold"
            >
              angelmolinarodriguez15@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
