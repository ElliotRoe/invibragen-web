import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

type Publication = {
  title: string
  outlet: string
  year: string
  summary: string
  href: string
}

const publications: Publication[] = [
  {
    title: 'High-throughput ionization workflows for multimodal molecular analysis',
    outlet: 'Analytical Chemistry',
    year: '2024',
    summary:
      'Representative workflow study showing how plume-stabilized ionization can increase throughput while retaining signal quality.',
    href: 'https://example.com/publication-1',
  },
  {
    title: 'Robust spray-source configurations for high-sensitivity mass spectrometry',
    outlet: 'Journal of Mass Spectrometry',
    year: '2023',
    summary:
      'Evaluates instrumentation setup choices and demonstrates reproducibility improvements across matrix conditions.',
    href: 'https://example.com/publication-2',
  },
  {
    title: 'Scaling translational studies with efficient molecular sampling pipelines',
    outlet: 'Nature Communications',
    year: '2022',
    summary:
      'Bench-to-study application note on reducing reruns and increasing sample coverage for larger biological cohorts.',
    href: 'https://example.com/publication-3',
  },
  {
    title: 'Comparative performance of advanced ion sources in research-lab workflows',
    outlet: 'Rapid Communications in Mass Spectrometry',
    year: '2021',
    summary:
      'Compares throughput and data quality trade-offs across source classes using representative lab instruments.',
    href: 'https://example.com/publication-4',
  },
]

export function AboutPage() {
  const [activePublication, setActivePublication] = useState(0)

  const publication = publications[activePublication]

  const showPreviousPublication = () => {
    setActivePublication((current) => (current - 1 + publications.length) % publications.length)
  }

  const showNextPublication = () => {
    setActivePublication((current) => (current + 1) % publications.length)
  }

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

        <Card className="bg-white">
          <CardContent className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Leadership Team</p>
            <div className="space-y-4">
              <article className="flex items-start gap-4 rounded-xl border border-border/80 bg-white p-4">
                <img
                  alt="Professor Stephen Valentine headshot"
                  className="h-20 w-20 rounded-xl object-cover"
                  src="/images/stephen-valentine.jpg"
                />
                <div className="space-y-1">
                  <p className="font-display text-xl font-semibold leading-tight text-brand-charcoal">
                    Professor Stephen Valentine
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/85">
                    Expertise: Bioanalytical Chemistry and Instrumentation
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-4 rounded-xl border border-border/80 bg-white p-4">
                <img
                  alt="Professor Peng Li headshot"
                  className="h-20 w-20 rounded-xl object-cover"
                  src="/images/peng-li.jpg"
                />
                <div className="space-y-1">
                  <p className="font-display text-xl font-semibold leading-tight text-brand-charcoal">
                    Professor Peng Li
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/85">
                    Expertise: Bioanalytical Chemistry and Instrumentation
                  </p>
                </div>
              </article>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-5" id="selected-publications">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Selected Publications</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-4xl">
              Peer-reviewed research highlights
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
              Browse representative publications below. Replace these links with finalized references from your publication list.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              aria-label="Previous publication"
              className="w-9 px-0"
              onClick={showPreviousPublication}
              size="sm"
              type="button"
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Next publication"
              className="w-9 px-0"
              onClick={showNextPublication}
              size="sm"
              type="button"
              variant="outline"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="bg-white">
          <CardContent className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {publication.outlet} • {publication.year}
            </p>
            <a
              className="group inline-flex items-center gap-2 text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-brand-charcoal hover:text-brand sm:text-3xl"
              href={publication.href}
              rel="noreferrer"
              target="_blank"
            >
              <span>{publication.title}</span>
              <ExternalLink className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/85 sm:text-base">
              {publication.summary}
            </p>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-charcoal"
              href={publication.href}
              rel="noreferrer"
              target="_blank"
            >
              Open publication
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </CardContent>
        </Card>

        <div className="flex flex-wrap items-center gap-2">
          {publications.map((item, index) => (
            <button
              key={item.title}
              aria-label={`Show publication ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activePublication ? 'w-8 bg-brand' : 'w-2.5 bg-border'
              }`}
              onClick={() => setActivePublication(index)}
              type="button"
            />
          ))}
        </div>
      </section>
    </div>
  )
}
