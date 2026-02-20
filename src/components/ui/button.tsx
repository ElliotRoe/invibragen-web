import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg border text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-[#184f3d]/30 bg-[#184f3d] px-5 py-2 text-white shadow-[0_4px_12px_-9px_rgba(24,79,61,0.85)] hover:bg-[#144333]',
        outline:
          'border-border bg-white/92 px-5 py-2 text-foreground shadow-[0_3px_10px_-10px_rgba(31,45,60,0.45)] hover:bg-white',
        ghost: 'border-transparent bg-transparent px-3 py-2 text-foreground hover:bg-white/60',
      },
      size: {
        default: 'h-11',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
