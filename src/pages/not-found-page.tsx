import { Link } from 'react-router-dom'

import { Button } from '../components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-start justify-center gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#184f3d]">404</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Page Not Found
      </h1>
      <p className="max-w-lg text-base text-foreground/90">
        The page you requested is not available. Use the navigation above or return to the homepage.
      </p>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  )
}
