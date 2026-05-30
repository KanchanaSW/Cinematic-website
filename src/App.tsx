import { CaseStudiesGrid } from './components/case-studies/CaseStudiesGrid'
import { RolodexHero } from './components/hero/RolodexHero'
import { StickyNav } from './components/layout/StickyNav'
import { PricingSection } from './components/pricing/PricingSection'
import { EditorialFooter } from './components/footer/EditorialFooter'

function App() {
  return (
    <div className="min-h-screen bg-cinematic text-white antialiased">
      <StickyNav />
      <main>
        <RolodexHero />
        <CaseStudiesGrid />
        <PricingSection />
      </main>
      <EditorialFooter />
    </div>
  )
}

export default App
