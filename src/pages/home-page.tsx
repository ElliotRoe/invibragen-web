import {
  Award,
  ArrowRight,
  BookOpenText,
  CircleDollarSign,
  Clock3,
  FlaskConical,
  Microscope,
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
    icon: Award,
    value: '6',
    label: 'Innovation Awards',
  },
  {
    icon: FlaskConical,
    value: '5-YR',
    label: 'NSF & NIH-Funded\nResearch Programs',
  },
  {
    icon: BookOpenText,
    value: '105K+',
    label: 'Scientific Citations',
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
                markerHeight="6"
                markerWidth="6"
                markerUnits="strokeWidth"
                orient="auto-start-reverse"
                refX="5"
                refY="3"
              >
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#b8bcc2" />
              </marker>
            </defs>

            <line
              markerEnd="url(#axis-arrow)"
              markerStart="url(#axis-arrow)"
              stroke="#b8bcc2"
              strokeWidth="1.5"
              x1="210"
              x2="790"
              y1="285"
              y2="285"
            />
            <line
              markerEnd="url(#axis-arrow)"
              markerStart="url(#axis-arrow)"
              stroke="#b8bcc2"
              strokeWidth="1.5"
              x1="500"
              x2="500"
              y1="90"
              y2="500"
            />

            <text fill="#ffffff" fontSize="24" textAnchor="middle" x="500" y="34">
              High Data Quality
            </text>
            <text fill="#ffffff" fontSize="18" textAnchor="middle" x="500" y="58">
              (Stable, Reproducible Signals)
            </text>

            <text fill="#ffffff" fontSize="24" textAnchor="middle" x="500" y="536">
              Low Data Quality
            </text>
            <text fill="#ffffff" fontSize="18" textAnchor="middle" x="500" y="558">
              (Frequent Signal Loss/Variability)
            </text>

            <text fill="#ffffff" fontSize="18" fontWeight="700" textAnchor="middle" x="130" y="272">
              Low Throughput
            </text>
            <text fill="#ffffff" fontSize="14" textAnchor="middle" x="130" y="294">
              10-50 samples
            </text>
            <text fill="#ffffff" fontSize="14" textAnchor="middle" x="130" y="310">
              per instrument
            </text>

            <text fill="#ffffff" fontSize="24" textAnchor="middle" x="790" y="338">
              High Throughput
            </text>
            <text fill="#ffffff" fontSize="20" textAnchor="middle" x="790" y="368">
              (1-5K Samples per
            </text>
            <text fill="#ffffff" fontSize="20" textAnchor="middle" x="790" y="394">
              Instrument)
            </text>

            <circle cx="350" cy="178" fill="#c5edc9" r="16" />
            <text fill="#ffffff" fontSize="16" textAnchor="middle" x="350" y="232">
              Conventional ESI
            </text>
            <text fill="#ffffff" fontSize="16" textAnchor="middle" x="350" y="255">
              (Nano-flow)
            </text>

            <circle cx="700" cy="186" fill="#4eaea9" r="17" />
            <text fill="#ffffff" fontSize="18" fontWeight="700" textAnchor="middle" x="700" y="238">
              INVIBRAGEN
            </text>

            <circle cx="395" cy="380" fill="#7a7e83" r="16" />
            <text fill="#ffffff" fontSize="16" textAnchor="middle" x="395" y="432">
              Conventional ESI
            </text>
            <text fill="#ffffff" fontSize="16" textAnchor="middle" x="395" y="455">
              (Micro-flow)
            </text>

            <circle cx="565" cy="310" fill="#c5c7ca" r="16" />
            <text fill="#ffffff" fontSize="16" textAnchor="middle" x="565" y="354">
              Other Spray-Based
            </text>
            <text fill="#ffffff" fontSize="16" textAnchor="middle" x="565" y="377">
              Sources
            </text>
      </svg>
    </div>
  )
}

function HeroChart() {
  return (
    <div className="flex flex-col lg:max-w-[520px] lg:justify-self-end lg:pl-6 lg:pt-20">
      <Card className="overflow-hidden border border-border/70 bg-white shadow-none">
        <CardContent className="space-y-2 p-0">
          <img
            alt="Spanda plume technology hardware setup"
            className="block h-auto w-full"
            src="/images/spanda-plume-hero.png"
          />
          <p className="px-3 pb-3 text-[9px] leading-relaxed text-muted-foreground">
            Our vibrating sharp-edge spray ionization (VSSI) plume technology powers the Spanda(TM) product line.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.74fr)] lg:items-stretch lg:gap-20 xl:gap-24">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal">
            Built for Research Labs
          </span>

          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.08] tracking-[-0.014em] text-brand-charcoal sm:text-[4.05rem] lg:text-[4.6rem] lg:leading-[1.1]">
            <span className="block">
              Move <span className="bg-gradient-to-r from-[#1f7f77] via-[#36a79f] to-[#5bbab3] bg-clip-text text-transparent">Faster.</span>
            </span>
            <span className="mt-1 block sm:mt-1.5">
              Spend <span className="bg-gradient-to-r from-[#2a8f7d] via-[#49a890] to-[#6ebca5] bg-clip-text text-transparent">Less.</span>
            </span>
            <span className="mt-1 block sm:mt-1.5">
              Discover <span className="bg-gradient-to-r from-[#248779] via-[#3b9e8d] to-[#63b9ab] bg-clip-text text-transparent">More.</span>
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-foreground/90 sm:text-base">
            Invibragen partners with research labs to overcome the trade-offs between speed, cost, and data quality. By making
            large-scale molecular analysis practical and reliable, Invibragen enables labs to unlock new
            biological insight at a scale that was previously impractical or impossible.
          </p>

          <section className="space-y-3 border-t border-border/70 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
              Scientific Leadership
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {leadershipStats.map((stat) => (
                <div key={stat.label} className="space-y-1.5 text-center sm:text-left">
                  <div className="inline-flex rounded-md border border-border/70 bg-brand-mint/50 p-1.5">
                    <stat.icon className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <p className="text-3xl font-semibold leading-none text-brand sm:text-[2rem]">{stat.value}</p>
                  <p className="whitespace-pre-line text-xs font-medium leading-tight text-brand-charcoal sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Button asChild>
              <Link to="/contact" className="group w-full justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/products-services" className="w-full justify-center">
                Explore Spanda
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about#selected-publications" className="w-full justify-center">
                View Research
              </Link>
            </Button>
          </div>
        </div>

        <HeroChart />
      </section>

      <section className="space-y-6 bg-[radial-gradient(circle_at_center,_#2f4c78_0%,_#1f3559_55%,_#132949_100%)] sm:space-y-8">
        <section className="space-y-10 pt-4">
          <div className="space-y-5 text-center">
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                High-Throughput Without Data Quality Trade-offs
              </h3>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                Conventional workflows force a choice between speed and sensitivity. Invibragen breaks that trade-off.
              </p>
            </div>

            <div className="mx-auto w-full max-w-5xl space-y-3">
              <ComparisonChart />
              <p className="text-[11px] text-white">
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
                  className={`space-y-5 text-center ${
                    index > 0 ? 'border-t border-border/60 pt-8 md:border-t-0 md:pt-0' : ''
                  } ${
                    index < pillars.length - 1
                      ? 'md:border-r md:border-border/70 md:pr-8 lg:pr-10'
                      : ''
                  } ${index > 0 ? 'md:pl-8 lg:pl-10' : ''}`}
                >
                  <div className="mx-auto inline-flex rounded-lg border border-border/80 bg-white p-2.5 shadow-[0_6px_14px_-12px_rgba(31,45,60,0.45)]">
                    <Icon className="h-4 w-4 text-[#1f5d45]" />
                  </div>

                  <div>
                    <p className="font-display text-3xl font-semibold tracking-tight text-white">
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                      {pillar.kicker}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">{pillar.body}</p>

                  <ul className="mx-auto inline-block list-disc space-y-1 pl-4 text-left text-sm leading-relaxed text-foreground/85">
                    {pillar.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <a
                    className="inline-flex text-sm font-semibold text-brand underline-offset-2 hover:text-brand-charcoal hover:underline"
                    href={`#published-results-${index + 1}`}
                  >
                    View Published Results
                  </a>
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
