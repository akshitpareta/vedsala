import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/press">Press</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/community">Community</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/services">Services</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/legal/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/legal/cookie-policy">Cookie Policy</Link></li>
            <li><Link href="/legal/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/contact">Support</Link></li>
            <li><Link href="/contact">Sales</Link></li>
            <li><Link href="/contact">Partners</Link></li>
            <li><Link href="/feedback">Feedback</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Vedsala. All rights reserved.</p>
      </div>
    </footer>
  )
}

