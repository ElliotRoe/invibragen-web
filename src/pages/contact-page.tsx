import { Mail } from 'lucide-react'

import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export function ContactPage() {
  const contactUsHref =
    'mailto:contact@invibragen.net,invibragen@gmail.com?subject=Contact%20Us'

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-5 pt-2">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-[#339966] sm:text-5xl">
            Start a conversation
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            Interested in exploring high-throughput discovery workflows
            <br />
            or initiating a pilot study? We look forward to connecting.
          </p>

          <Button asChild>
            <a href={contactUsHref}>Email Our Team</a>
          </Button>

          <p className="flex items-center gap-2 text-lg">
            <Mail aria-hidden="true" className="h-5 w-5 text-[#339966]" />
            <a className="text-[#339966] underline" href="mailto:contact@invibragen.net">
              contact@invibragen.net
            </a>
          </p>
        </div>

        <Card className="bg-white/95 lg:justify-self-end">
          <CardContent className="space-y-3 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#339966]">
              Leadership Team
            </p>
            <div className="space-y-3">
              <article className="flex items-center gap-3 rounded-xl border border-border/75 bg-white p-3">
                <img
                  alt="Professor Stephen Valentine headshot"
                  className="h-14 w-14 rounded-lg object-cover"
                  src="/images/stephen-valentine.jpg"
                />
                <div>
                  <p className="text-sm font-semibold leading-tight text-brand-charcoal">
                    Professor Stephen Valentine
                  </p>
                  <p className="text-xs text-foreground/80">
                    Expertise: Bioanalytical Chemistry and Instrumentation
                  </p>
                </div>
              </article>

              <article className="flex items-center gap-3 rounded-xl border border-border/75 bg-white p-3">
                <img
                  alt="Professor Peng Li headshot"
                  className="h-14 w-14 rounded-lg object-cover"
                  src="/images/peng-li.jpg"
                />
                <div>
                  <p className="text-sm font-semibold leading-tight text-brand-charcoal">Professor Peng Li</p>
                  <p className="text-xs text-foreground/80">
                    Expertise: Bioanalytical Chemistry and Instrumentation
                  </p>
                </div>
              </article>
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}
