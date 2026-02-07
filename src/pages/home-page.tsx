import {
  ArrowRight,
  Beaker,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clock3,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

const leadershipStats = [
  {
    value: '105K+',
    label: 'Scientific Citations',
    icon: ChartNoAxesCombined,
  },
  {
    value: '5-YR',
    label: 'NSF & NIH-Funded Research Programs',
    icon: Beaker,
  },
  {
    value: '6',
    label: 'Peer-Reviewed Innovation Awards',
    icon: Sparkles,
  },
]

const pillars = [
  {
    title: 'Move Faster',
    kicker: 'Ultra High-Throughput Analysis',
    body: 'Up to 10x faster turnaround from sample to insight while maintaining sensitivity and fidelity across blood, saliva, and other matrices.',
    icon: Clock3,
  },
  {
    title: 'Spend Less',
    kicker: 'Lower Cost per Result',
    body: 'Greater output from existing instruments, fewer reruns, and more efficient workflows that reduce waste across time, samples, and reagents.',
    icon: CircleDollarSign,
  },
  {
    title: 'Discover More',
    kicker: 'Scale Discovery with Confidence',
    body: 'Analyze orders of magnitude more samples across broad molecular ranges to separate real biological signal from noise with higher statistical confidence.',
    icon: Sparkles,
  },
]

function HeroChart() {
  return (
    <Card className="">
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            High-Throughput Without Data Quality Trade-offs
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Conventional workflows force a choice between speed and sensitivity. Invibragen breaks that trade-off.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/80 bg-[#f6f6f3] p-2 sm:p-3">
          <svg
            aria-label="Throughput and data quality comparison"
            className="h-auto w-full"
            role="img"
            viewBox="0 0 1000 620"
          >
            <defs>
              <marker
                id="axis-arrow"
                markerHeight="8"
                markerWidth="8"
                orient="auto-start-reverse"
                refX="4"
                refY="4"
              >
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#adb3b7" />
              </marker>
            </defs>

            <rect
              fill="none"
              height="520"
              stroke="#d6d9dc"
              strokeWidth="2"
              width="860"
              x="70"
              y="40"
            />

            <line
              markerEnd="url(#axis-arrow)"
              markerStart="url(#axis-arrow)"
              stroke="#adb3b7"
              strokeWidth="2"
              x1="250"
              x2="750"
              y1="300"
              y2="300"
            />
            <line
              markerEnd="url(#axis-arrow)"
              markerStart="url(#axis-arrow)"
              stroke="#adb3b7"
              strokeWidth="2"
              x1="500"
              x2="500"
              y1="140"
              y2="520"
            />

            <text
              fill="#202428"
              fontSize="24"
              textAnchor="middle"
              x="500"
              y="78"
            >
              High Data Quality
            </text>
            <text
              fill="#525a60"
              fontSize="18"
              textAnchor="middle"
              x="500"
              y="104"
            >
              (Stable, Reproducible Signals)
            </text>

            <text
              fill="#202428"
              fontSize="24"
              textAnchor="middle"
              x="500"
              y="578"
            >
              Low Data Quality
            </text>
            <text
              fill="#525a60"
              fontSize="18"
              textAnchor="middle"
              x="500"
              y="604"
            >
              (Frequent Signal Loss/Variability)
            </text>

            <text
              fill="#202428"
              fontSize="24"
              textAnchor="middle"
              x="175"
              y="296"
            >
              Low Throughput
            </text>
            <text
              fill="#202428"
              fontSize="20"
              textAnchor="middle"
              x="175"
              y="326"
            >
              (10-50 Samples per
            </text>
            <text
              fill="#202428"
              fontSize="20"
              textAnchor="middle"
              x="175"
              y="352"
            >
              Instrument)
            </text>

            <text
              fill="#202428"
              fontSize="24"
              textAnchor="middle"
              x="825"
              y="296"
            >
              High Throughput
            </text>
            <text
              fill="#202428"
              fontSize="20"
              textAnchor="middle"
              x="825"
              y="326"
            >
              (1-5K Samples per
            </text>
            <text
              fill="#202428"
              fontSize="20"
              textAnchor="middle"
              x="825"
              y="352"
            >
              Instrument)
            </text>

            <circle cx="365" cy="185" fill="#c5edc9" r="16" />
            <text
              fill="#5f656b"
              fontSize="16"
              textAnchor="middle"
              x="365"
              y="240"
            >
              Conventional ESI
            </text>
            <text
              fill="#5f656b"
              fontSize="16"
              textAnchor="middle"
              x="365"
              y="263"
            >
              (Nano-flow)
            </text>

            <circle cx="695" cy="192" fill="#4eaea9" r="17" />
            <text
              fill="#4eaea9"
              fontSize="18"
              fontWeight="700"
              textAnchor="middle"
              x="695"
              y="248"
            >
              INVIBRAGEN
            </text>

            <circle cx="405" cy="402" fill="#7a7e83" r="16" />
            <text
              fill="#666b70"
              fontSize="16"
              textAnchor="middle"
              x="405"
              y="452"
            >
              Conventional ESI
            </text>
            <text
              fill="#666b70"
              fontSize="16"
              textAnchor="middle"
              x="405"
              y="475"
            >
              (Micro-flow)
            </text>

            <circle cx="565" cy="322" fill="#c5c7ca" r="16" />
            <text
              fill="#6d7277"
              fontSize="16"
              textAnchor="middle"
              x="565"
              y="367"
            >
              Other Spray-Based
            </text>
            <text
              fill="#6d7277"
              fontSize="16"
              textAnchor="middle"
              x="565"
              y="390"
            >
              Sources
            </text>
          </svg>
        </div>

        <p className="text-[11px] text-muted-foreground">
          Illustrative comparison based on peer-reviewed studies and representative workflows.
        </p>
      </CardContent>
    </Card>
  )
}

export function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.96fr] lg:items-start">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal">
            Built for Research Labs
          </span>

          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Move Faster.
            <br />
            Spend Less.
            <br />
            Discover More.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            Invibragen helps labs overcome the trade-offs between speed, cost, and data quality. Large-scale molecular analysis becomes practical, reliable, and easier to operationalize with existing infrastructure.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/products-services">Explore Spanda</Link>
            </Button>
          </div>
        </div>

        <HeroChart />
      </section>

      <section className="space-y-6 sm:space-y-8">
        <section className="">
          <div className="section-divider" />
          <div className="-mx-4 border-b border-border/75 bg-gradient-to-b from-brand-mint/10 to-brand-mint/42 px-4 py-10 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Scientific Leadership</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-charcoal sm:text-4xl">
                  Built on rigor, publications, and funded research
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/90 sm:text-base">
                  Trusted by scientific teams that need transparent evidence, strong reproducibility, and high-throughput execution without sacrificing data quality.
                </p>
              </div>

              <div className="overflow-x-auto pb-1">
                <div className="grid min-w-[760px] grid-cols-3 gap-7 sm:min-w-0 sm:gap-6">
                  {leadershipStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className="relative">
                        {index < leadershipStats.length - 1 ? (
                          <span className="absolute right-0 top-1 hidden h-16 w-px bg-border/85 sm:block" />
                        ) : null}
                        <Icon className="h-4 w-4 text-brand" />
                        <p className="mt-3 text-4xl font-semibold leading-none text-brand-charcoal">{stat.value}</p>
                        <p className="mt-2 max-w-[18ch] text-xs font-semibold uppercase tracking-[0.06em] text-brand-charcoal/80">
                          {stat.label}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-0 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className={`space-y-4 py-5 ${
                  index < pillars.length - 1
                    ? 'border-b border-border/70 md:border-b-0 md:border-r md:border-border/80'
                    : ''
                } ${index > 0 ? 'md:pl-6' : ''} ${index < pillars.length - 1 ? 'md:pr-6' : ''}`}
              >
                <div className="inline-flex rounded-lg bg-brand-mint p-2.5">
                  <Icon className="h-4 w-4 text-brand-charcoal" />
                </div>

                <div>
                  <p className="font-display text-2xl font-bold tracking-tight">{pillar.title}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                    {pillar.kicker}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/90">{pillar.body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="">
        <Card className="overflow-hidden">
          <CardContent className="relative space-y-5">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-mint/70 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Powered by Spanda Technology
            </p>
            <h2 className="relative max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Proprietary VSSI-based ionization built for high-throughput multimodal mass spectrometry workflows.
            </h2>
            <p className="relative max-w-3xl text-base leading-relaxed text-foreground/90">
              Spanda technology improves ionization efficiency while supporting broad applicability across analytes, matrices, and experimental designs.
            </p>
            <Button asChild>
              <Link to="/products-services">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
