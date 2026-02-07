import { Card, CardContent } from '../components/ui/card'

export function AboutPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal">
            About
          </span>

          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
            About Invibragen
          </h1>

          <div className="space-y-6 text-base leading-relaxed text-foreground/90 sm:text-lg">
            <p>
              Invibragen focuses on enabling high-throughput molecular analysis and advancing cutting-edge research in ionization sensitivity, ion source utility, and emerging analytical applications. The company&apos;s Spanda platform is backed by peer-reviewed research and supported by federal research funding, including multiple awards from the U.S. National Science Foundation and National Institutes of Health.
            </p>

            <p>
              Invibragen is led by <span className="font-semibold">Professor Stephen Valentine</span> and{' '}
              <span className="font-semibold">Professor Peng Li</span>, experts in bioanalytical chemistry and instrumentation, together with a multidisciplinary team working at the intersection of analytical chemistry, mass spectrometry, and applied research.
            </p>
          </div>
        </div>

        <Card>
          <CardContent>
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-border/80 bg-gradient-to-br from-white to-brand-mint/45 p-8 text-center text-base font-medium text-muted-foreground sm:min-h-[360px]">
              Team visual placeholder
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
