import { FlaskConical, Sparkles, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { cn } from '../lib/utils'

const products = [
  {
    name: 'Spanda (TM) Multimodal Ion Source',
    icon: Sparkles,
    description:
      'Designed for broad, flexible molecular profiling where labs need high throughput without narrowing analytical scope. Works well for mixed-study environments and evolving assay needs.',
    visualLabel: 'Multimodal source visualization',
  },
  {
    name: 'Spanda (TM) Micro Ion Source',
    icon: FlaskConical,
    description:
      'Optimized for efficient day-to-day research throughput with strong reproducibility. Suitable for teams scaling sample volume while preserving robust data confidence.',
    visualLabel: 'Micro source visualization',
  },
  {
    name: 'Spanda (TM) Trace Ion Source',
    icon: Wrench,
    description:
      'Built for trace-level signal capture in demanding workflows where low-abundance molecules matter. Supports research questions requiring higher sensitivity at scale.',
    visualLabel: 'Trace source visualization',
  },
]

const socialValidation = [
  'NSF Logo',
  'NIH Logo',
  '105K+ Citations',
  'Peer-Reviewed',
  'Innovation Awards',
]

export function ProductsServicesPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal">
            Spanda Platform
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Powered by <span className="text-brand">Spanda</span> technology
          </h1>

          <p className="text-base leading-relaxed text-foreground/90">
            Spanda is Invibragen&apos;s proprietary vibrating sharp-edge spray ionization (VSSI) technology, designed to enhance ionization efficiency while supporting high-throughput, multimodal mass spectrometry workflows.
          </p>

          <Button asChild>
            <Link to="/contact">Find Out More</Link>
          </Button>
        </div>

        <Card className="">
          <CardContent>
            <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-dashed border-border/80 bg-gradient-to-br from-white to-brand-mint/45 p-8 text-center text-base font-medium text-muted-foreground">
              Spanda platform visualization placeholder
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="section-divider" />
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Product Line</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-charcoal sm:text-4xl">
            Three source options, each tuned to a different workflow profile
          </h2>
        </div>

        <div className="space-y-5">
          {products.map((product, index) => {
            const Icon = product.icon
            const reverse = index % 2 === 1

            return (
              <article
                key={product.name}
                className="grid gap-5 rounded-2xl border border-border/70 bg-white/72 p-5 md:grid-cols-2 md:items-center md:p-6"
              >
                <div className={cn('space-y-3', reverse ? 'md:order-2' : '')}>
                  <div className="inline-flex rounded-lg bg-brand-mint p-2">
                    <Icon className="h-4 w-4 text-brand-charcoal" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-brand-charcoal">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {product.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dummy supporting copy can go here for product-specific details, specs, and use-case notes.
                  </p>
                </div>

                <div className={cn(reverse ? 'md:order-1' : '')}>
                  <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-border/80 bg-gradient-to-br from-white to-brand-mint/35 p-6 text-center text-sm font-medium text-muted-foreground sm:min-h-[260px]">
                    {product.visualLabel}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="space-y-7">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Services</p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-[0.05em] text-brand-charcoal sm:text-5xl">
            Work With Us
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Card>
            <CardContent className="space-y-3">
              <div className="flex min-h-[240px] items-center justify-center rounded-xl border border-dashed border-border/80 bg-gradient-to-br from-white to-brand-mint/35 text-center text-sm font-medium text-muted-foreground">
                Team photo placeholder
              </div>
              <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">
                Team / facility visual
              </p>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <p className="text-base leading-relaxed text-foreground/90">
              Invibragen partners with research labs across academia, biotechnology, pharmaceutical R&amp;D, and government to deliver high-throughput molecular analysis at scale. Services are designed to integrate with existing infrastructure and create immediate impact without added operational complexity.
            </p>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Social Validation (Placeholder)
              </p>
              <div className="flex flex-wrap gap-2">
                {socialValidation.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-md border border-border/85 bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-brand-charcoal"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button asChild>
                <Link to="/contact">Request A Pilot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
