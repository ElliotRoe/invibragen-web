import * as React from 'react'

import { cn } from '../../lib/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-border/70 bg-white/90 text-foreground shadow-[0_10px_28px_-24px_rgba(31,45,60,0.55)]',
        className,
      )}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-7', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export { Card, CardContent }
