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
              strokeWidth="3"
              x1="245"
              x2="755"
              y1="285"
              y2="285"
            />
            <line
              markerEnd="url(#axis-arrow)"
              markerStart="url(#axis-arrow)"
              stroke="#b8bcc2"
              strokeWidth="3"
              x1="500"
              x2="500"
              y1="90"
              y2="500"
            />

            <text fill="#2f343a" fontSize="18" fontWeight="700" textAnchor="middle" x="500" y="34">
              High Data Quality
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="500" y="56">
              Stable, Reproducible Signals
            </text>

            <text fill="#2f343a" fontSize="18" fontWeight="700" textAnchor="middle" x="500" y="536">
              Low Data Quality
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="500" y="558">
              Frequent Signal Loss/Variability
            </text>

            <text fill="#2f343a" fontSize="18" fontWeight="700" textAnchor="middle" x="150" y="272">
              Low Throughput
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="150" y="294">
              10-50 samples
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="150" y="310">
              per instrument
            </text>

            <text fill="#2f343a" fontSize="18" fontWeight="700" textAnchor="middle" x="855" y="272">
              High Throughput
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="855" y="294">
              1-5K samples
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="855" y="310">
              per Instrument
            </text>

            <circle cx="350" cy="178" fill="#c5edc9" r="12" />
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="350" y="216">
              Conventional ESI
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="350" y="235">
              (Nano-flow)
            </text>

            <circle cx="700" cy="186" fill="#52c48b" r="12" />
            <text fill="#52c48b" fontSize="16" fontWeight="700" textAnchor="middle" x="700" y="230">
              INVIBRAGEN
            </text>

            <circle cx="395" cy="380" fill="#7a7e83" r="12" />
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="395" y="416">
              Conventional ESI
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="395" y="435">
              (Micro-flow)
            </text>

            <circle cx="575" cy="310" fill="#c5c7ca" r="12" />
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="575" y="346">
              Other Spray-Based
            </text>
            <text fill="#6b7280" fontSize="14" textAnchor="middle" x="575" y="365">
              Sources
            </text>
      </svg>
    </div>
  )
}

function HeroChart() {
  return (
    <div className="flex h-full flex-col gap-0 lg:pl-4">
      <Card className="h-full overflow-hidden rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="h-full min-h-[340px] p-0">
          <div
            aria-hidden="true"
            className="h-full w-full lg:translate-x-10"
          />
        </CardContent>
      </Card>

    </div>
  )
}

export function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.84fr)] lg:items-stretch lg:gap-24">
        <div className="max-w-[39rem] space-y-6">
          <span className="inline-flex items-center rounded-full border border-[#c7d2cc] bg-white px-6 py-2 text-sm font-semibold tracking-[0.01em] text-[#0f5b44] shadow-[0_2px_8px_rgba(23,44,37,0.14)]">
            Built for Research Labs
          </span>

          <h1 className="max-w-[37rem] font-display text-5xl font-semibold leading-[1.1] tracking-[-0.012em] text-brand-charcoal sm:text-[4.15rem] lg:text-[4.7rem] lg:leading-[1.14]">
            <span className="block">
              <span className="text-[#52525b]">Move</span> <span className="bg-gradient-to-r from-[#1f7a52] via-[#2f8e63] to-[#58ad82] bg-clip-text text-transparent">Faster.</span>
            </span>
            <span className="mt-2 block sm:mt-3">
              <span className="text-[#52525b]">Spend</span> <span className="bg-gradient-to-r from-[#1f7f56] via-[#349568] to-[#63b58a] bg-clip-text text-transparent">Less.</span>
            </span>
            <span className="mt-2 block sm:mt-3">
              <span className="text-[#52525b]">Discover</span> <span className="bg-gradient-to-r from-[#1e7b54] via-[#2f9165] to-[#5aae84] bg-clip-text text-transparent">More.</span>
            </span>
          </h1>

          <p className="max-w-lg text-sm font-light leading-relaxed text-foreground/80 sm:text-base">
            Invibragen partners with research labs to overcome the trade-offs between speed, cost, and
            data quality. By making large-scale molecular analysis practical and reliable, Invibragen
            enables labs to unlock new biological insight at a scale that was previously impractical or
            impossible.
          </p>

          <section className="space-y-3 border-t border-border/70 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2f7a54]">
              Scientific Leadership
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {leadershipStats.map((stat) => (
                <div key={stat.label} className="space-y-1.5 text-center sm:text-left">
                  <div className="inline-flex rounded-md border border-border/70 bg-brand-mint/50 p-1.5">
                    <stat.icon className="h-3.5 w-3.5 text-[#2f7a54]" />
                  </div>
                  <p className="text-3xl font-semibold leading-none text-[#2f7a54] sm:text-[2rem]">{stat.value}</p>
                  <p className="whitespace-pre-line text-[11px] font-light leading-tight text-brand-charcoal/80 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Button
              asChild
              className="border-[#184f3d]/30 bg-[#184f3d] shadow-[0_4px_12px_-9px_rgba(24,79,61,0.85)] hover:bg-[#144333]"
            >
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

      <section className="space-y-6 sm:space-y-8">
        <section className="space-y-10 pt-4">
          <div className="mx-auto w-full max-w-5xl rounded-xl bg-gradient-to-br from-[#0f3f2f] via-[#1f6f4f] to-[#4ea37b] p-[4px] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_24px_-16px_rgba(15,63,47,0.45)]">
            <div className="space-y-5 rounded-[10px] bg-white p-4 text-center sm:p-5">
              <div className="space-y-2">
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#2f8e63] sm:text-4xl">
                  High-Throughput Without Data Quality Trade-offs
                </h3>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#3a9b71] sm:text-lg">
                  Conventional workflows force a choice between speed and sensitivity.
                  <br />
                  <span className="text-[#52c48b]">Invibragen breaks that trade-off.</span>
                </p>
              </div>

              <ComparisonChart />
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
              <Button
                asChild
                className="border-[#184f3d]/30 bg-[#184f3d] shadow-[0_4px_12px_-9px_rgba(24,79,61,0.85)] hover:bg-[#144333]"
              >
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
