import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import { cn } from '../../lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products-services', label: 'Products & Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
]

export function SiteLayout() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isHomePage ? (
        <div className="w-full bg-[#184f3d] text-white">
          <div className="container flex h-11 items-center gap-6">
            <p className="text-sm font-medium leading-none">Meet the Invibragen team at ACS Spring 2026.</p>
            <Link
              to="/contact"
              className="inline-flex h-8 items-center rounded-md bg-white px-3 text-xs font-semibold uppercase tracking-[0.06em] text-[#184f3d] transition-colors hover:bg-white/90"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      ) : null}

      <header className="pt-6 sm:pt-8">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <Link to="/" className="inline-flex flex-col gap-1">
            <span className="font-display text-2xl font-normal leading-none tracking-[0.02em] sm:text-3xl">
              INVIBRAGEN
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-brand-charcoal/90">
              Molecular Research Technology
            </span>
          </Link>

          <nav className="flex flex-wrap gap-2 sm:justify-end" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-md border border-border/85 bg-white/82 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors',
                    isActive
                      ? 'border-[#184f3d]/35 bg-[#184f3d] text-white shadow-[0_4px_12px_-9px_rgba(24,79,61,0.85)]'
                      : 'text-foreground hover:bg-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container pb-20 pt-8 sm:pb-24 sm:pt-12">
        <Outlet />
      </main>

      <footer className="container pb-8 sm:pb-10">
        <div className="section-divider mb-5" />
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.08em] text-brand-charcoal">
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/about" className="hover:text-[#184f3d]">
                About
              </Link>
              <Link to="/contact" className="hover:text-[#184f3d]">
                Contact Us
              </Link>
            </div>
            <a
              href="https://www.linkedin.com/company/example"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#184f3d]"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-brand-charcoal/85">
            Copyright &copy; 2026 Invibragen, Inc. - All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
