import {
  ArrowRight,
  Beaker,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clock3,
  Microscope,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

type Pillar = {
  title: string
  kicker: string
  body: string
  icon: typeof Clock3
  visual: 'stack' | 'metrics' | 'network'
  details: string[]
}

const pillars: Pillar[] = [
  {
    title: 'Move Faster',
    kicker: 'Ultra High-Throughput Analysis',
    body: 'Up to 10x faster turnaround from sample to insight without sacrificing data quality.',
    icon: Clock3,
    visual: 'stack',
    details: [
      'Speed: Up to 10x faster turnaround from sample to insight.',
      'Sensitivity and fidelity: Maintains signal quality at high speed.',
      'Flexibility: Applicable across blood, saliva, and other matrices.',
    ],
  },
  {
    title: 'Spend Less',
    kicker: 'Lower Cost per Result',
    body: 'Higher throughput improves lab economics with more output and less operational waste.',
    icon: CircleDollarSign,
    visual: 'metrics',
    details: [
      'Greater output from existing instruments and teams.',
      'Fewer reruns and failed analyses.',
      'Lower cost per meaningful result through better utilization.',
    ],
  },
  {
    title: 'Discover More',
    kicker: 'Scale Discovery with Confidence',
    body: 'Analyze larger cohorts across broad molecular ranges to separate true biological signals from noise.',
    icon: Microscope,
    visual: 'network',
    details: [
      'Analyze orders of magnitude more samples across proteins or metabolites.',
      'Improve statistical confidence across population-level studies.',
      'Unlock discoveries that are difficult with conventional workflows.',
    ],
  },
]

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

function ComparisonChart() {
  return (
    <div className="w-full">
      <svg
        aria-label="Throughput and data quality comparison"
        className="h-auto w-full"
        role="img"
        viewBox="0 0 1000 560"
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

            <line
              markerEnd="url(#axis-arrow)"
              markerStart="url(#axis-arrow)"
              stroke="#adb3b7"
              strokeWidth="2"
              x1="70"
              x2="930"
              y1="285"
              y2="285"
            />
            <line
              markerEnd="url(#axis-arrow)"
              markerStart="url(#axis-arrow)"
              stroke="#adb3b7"
              strokeWidth="2"
              x1="500"
              x2="500"
              y1="90"
              y2="500"
            />

            <text fill="#202428" fontSize="24" textAnchor="middle" x="500" y="34">
              High Data Quality
            </text>
            <text fill="#525a60" fontSize="18" textAnchor="middle" x="500" y="58">
              (Stable, Reproducible Signals)
            </text>

            <text fill="#202428" fontSize="24" textAnchor="middle" x="500" y="536">
              Low Data Quality
            </text>
            <text fill="#525a60" fontSize="18" textAnchor="middle" x="500" y="558">
              (Frequent Signal Loss/Variability)
            </text>

            <text fill="#202428" fontSize="24" textAnchor="middle" x="210" y="338">
              Low Throughput
            </text>
            <text fill="#202428" fontSize="20" textAnchor="middle" x="210" y="368">
              (10-50 Samples per
            </text>
            <text fill="#202428" fontSize="20" textAnchor="middle" x="210" y="394">
              Instrument)
            </text>

            <text fill="#202428" fontSize="24" textAnchor="middle" x="790" y="338">
              High Throughput
            </text>
            <text fill="#202428" fontSize="20" textAnchor="middle" x="790" y="368">
              (1-5K Samples per
            </text>
            <text fill="#202428" fontSize="20" textAnchor="middle" x="790" y="394">
              Instrument)
            </text>

            <circle cx="350" cy="178" fill="#c5edc9" r="16" />
            <text fill="#5f656b" fontSize="16" textAnchor="middle" x="350" y="232">
              Conventional ESI
            </text>
            <text fill="#5f656b" fontSize="16" textAnchor="middle" x="350" y="255">
              (Nano-flow)
            </text>

            <circle cx="700" cy="186" fill="#4eaea9" r="17" />
            <text fill="#4eaea9" fontSize="18" fontWeight="700" textAnchor="middle" x="700" y="238">
              INVIBRAGEN
            </text>

            <circle cx="395" cy="380" fill="#7a7e83" r="16" />
            <text fill="#666b70" fontSize="16" textAnchor="middle" x="395" y="432">
              Conventional ESI
            </text>
            <text fill="#666b70" fontSize="16" textAnchor="middle" x="395" y="455">
              (Micro-flow)
            </text>

            <circle cx="565" cy="310" fill="#c5c7ca" r="16" />
            <text fill="#6d7277" fontSize="16" textAnchor="middle" x="565" y="354">
              Other Spray-Based
            </text>
            <text fill="#6d7277" fontSize="16" textAnchor="middle" x="565" y="377">
              Sources
            </text>
      </svg>
    </div>
  )
}

function HeroChart() {
  return (
    <div className="space-y-3 lg:flex lg:h-full lg:flex-col">
      <Card className="overflow-hidden bg-white shadow-[0_10px_28px_-24px_rgba(31,45,60,0.6)] lg:flex-1">
        <CardContent className="aspect-[4/3] p-0">
          <img
            alt="Spanda plume technology hardware setup"
            className="block h-full w-full object-cover"
            src="/images/spanda-plume-hero.png"
          />
        </CardContent>
      </Card>

      <p className="text-[11px] text-muted-foreground sm:px-1">
        Our vibrating sharp-edge spray ionization (VSSI) plume technology powers the Spanda(TM) product line.
      </p>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.96fr] lg:items-stretch">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal">
            Built for Research Labs
          </span>

          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.08] tracking-[-0.01em] text-brand-charcoal sm:text-6xl lg:text-[4.25rem]">
            Move Faster.
            <br />
            Spend Less.
            <br />
            Discover More.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            Invibragen helps overcome the trade-offs between speed, cost, and data quality. By making
            large-scale molecular analysis practical and reliable, Invibragen enables labs to unlock new
            biological insight at a scale that was previously impractical or impossible.
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
          <div className="-mx-4 border-b border-border/75 bg-[#e8f6ee] px-4 py-10 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f5d45]">
                  Scientific Leadership
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-charcoal sm:text-4xl">
                  Built on rigor, publications, and funded research
                </h2>
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

        <section className="space-y-10 pt-4">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start lg:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">End-to-End Outcomes</p>
              <h3 className="font-display text-4xl font-semibold leading-tight tracking-tight text-brand-charcoal sm:text-5xl">
                Everything you need to move faster, spend less, and discover more.
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                Structured as a practical workflow: accelerate throughput, improve economics, and expand discovery confidence at scale.
              </p>
            </div>
            <div className="space-y-4">
              <ComparisonChart />
              <p className="text-[11px] text-muted-foreground">
                Illustrative comparison based on peer-reviewed studies and representative workflows.
              </p>
            </div>
          </div>

          <div className="grid gap-8 border-t border-border/70 bg-[#e8f6ee] px-4 pb-8 pt-10 sm:px-6 md:grid-cols-3 md:gap-0 lg:px-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <article
                  key={pillar.title}
                  className={`space-y-5 ${
                    index > 0 ? 'border-t border-border/60 pt-8 md:border-t-0 md:pt-0' : ''
                  } ${
                    index < pillars.length - 1
                      ? 'md:border-r md:border-border/70 md:pr-8 lg:pr-10'
                      : ''
                  } ${index > 0 ? 'md:pl-8 lg:pl-10' : ''}`}
                >
                  <div className="inline-flex rounded-lg border border-border/80 bg-white p-2.5 shadow-[0_6px_14px_-12px_rgba(31,45,60,0.45)]">
                    <Icon className="h-4 w-4 text-[#1f5d45]" />
                  </div>

                  <div>
                    <p className="font-display text-3xl font-semibold tracking-tight text-brand-charcoal">
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                      {pillar.kicker}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">{pillar.body}</p>

                  <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-foreground/85">
                    {pillar.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>
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
            <div className="relative flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products-services">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
