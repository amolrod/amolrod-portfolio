import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import GitHubStats from '@/components/GitHubStats'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <GitHubStats />
      <FeaturedProjects />
      <Contact />
    </>
  )
}
