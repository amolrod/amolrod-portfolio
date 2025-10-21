import { Metadata } from 'next'

const siteConfig = {
  name: 'Ángel Molina',
  description: 'Full Stack Developer in training · Frontend + Backend + UI/UX. Web Application Development Student (DAW) based in Madrid, Spain.',
  url: 'https://angel-molina-portfolio.vercel.app',
  ogImage: '/og.png',
  links: {
    github: 'https://github.com/amolrod',
    linkedin: 'https://www.linkedin.com/in/angel-molina-rodriguez-78714b252/',
    email: 'mailto:angelmolinarodriguez15@gmail.com',
  },
}

export function generateSEO({
  title,
  description,
  image,
  url,
}: {
  title?: string
  description?: string
  image?: string
  url?: string
}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    keywords: [
      'Ángel Molina',
      'Full Stack Developer',
      'Frontend Developer',
      'Backend Developer',
      'Web Developer',
      'Angular',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Madrid',
      'Spain',
      'Portfolio',
    ],
    authors: [{ name: 'Ángel Molina' }],
    creator: 'Ángel Molina',
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: url || siteConfig.url,
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: '@amolrod',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  }
}

export { siteConfig }
