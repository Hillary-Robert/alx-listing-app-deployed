interface FooterSectionProps {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterLogo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">alx</h2>
      <p className="text-gray-300 leading-relaxed max-w-sm">
        ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options
        worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects
        you with the perfect place to stay for any trip.
      </p>
    </div>
  )
}

function FooterBottom() {
  const legalLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Policy service", href: "/privacy" },
    { label: "Cookies Policy", href: "/cookies" },
    { label: "Partners", href: "/partners" },
  ]

  return (
    <div className="border-t border-gray-700 pt-6 mt-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <p className="text-gray-400 text-sm">
          Some hotel requires you to cancel more than 24 hours before check-in. Details{" "}
          <a href="/cancellation-policy" className="text-emerald-400 hover:text-emerald-300">
            here
          </a>
        </p>

        <div className="flex flex-wrap gap-6">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const exploreLinks = [
  { label: "Apartments in Dubai", href: "/explore/dubai-apartments" },
  { label: "Hotels in New York", href: "/explore/new-york-hotels" },
  { label: "Villa in Spain", href: "/explore/spain-villas" },
  { label: "Mansion in Indonesia", href: "/explore/indonesia-mansions" },
]

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/careers" },
  { label: "Customers", href: "/customers" },
  { label: "Brand", href: "/brand" },
]

const helpLinks = [
  { label: "Support", href: "/support" },
  { label: "Cancel booking", href: "/cancel-booking" },
  { label: "Refunds Process", href: "/refunds" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="px-10 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <FooterLogo />
          </div>

          {/* Explore Section */}
          <div>
            <FooterSection title="Explore" links={exploreLinks} />
          </div>

          {/* Company Section */}
          <div>
            <FooterSection title="Company" links={companyLinks} />
          </div>

          {/* Help Section */}
          <div>
            <FooterSection title="Help" links={helpLinks} />
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  )
}
