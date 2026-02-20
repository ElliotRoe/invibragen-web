import type { FormEvent } from 'react'

import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

export function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-5">
          <span className="inline-flex rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-charcoal">
            Contact
          </span>

          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
            Start a conversation
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            Interested in exploring high-throughput discovery workflows or initiating a pilot study? We look forward to connecting.
          </p>

          <p className="text-lg">
            <span className="font-semibold">Email: </span>
            <a className="text-[#184f3d] underline" href="mailto:contact@invibragen.net">
              contact@invibragen.net
            </a>
          </p>
        </div>

        <Card className="bg-white/95 lg:justify-self-end">
          <CardContent className="space-y-3 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#184f3d]">Team</p>
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

      <Card className="">
        <CardContent className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            Contact Form
          </h2>

          <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              First Name
              <Input placeholder="First name" autoComplete="given-name" required />
            </label>

            <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Last Name
              <Input placeholder="Last name" autoComplete="family-name" required />
            </label>

            <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:col-span-2">
              Work Email
              <Input placeholder="name@institution.edu" type="email" autoComplete="email" required />
            </label>

            <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:col-span-2">
              Organization
              <Input placeholder="Lab or institution" autoComplete="organization" />
            </label>

            <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:col-span-2">
              Message
              <Textarea placeholder="Tell us more about your goals." required />
            </label>

            <div className="flex flex-col items-start gap-2 sm:col-span-2">
              <Button type="submit">Send Inquiry</Button>
              <p className="text-xs text-muted-foreground">
                Placeholder form: submission handling will be connected once your preferred backend is chosen.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
