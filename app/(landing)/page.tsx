import { LandingContent } from '@/components/landing-content'
import { LandingFooter } from '@/components/landing-footer'
import { LandingHero } from '@/components/landing-hero'
import { LandingNavbar } from '@/components/landing-navbar'
import { LandingAfter } from '@/components/landing-after'

const LandingPage = () => (
  <div className="h-full">
    <LandingNavbar />
    <LandingHero />
    <LandingAfter />
    <LandingContent />
    <LandingFooter />
  </div>
)

export default LandingPage
