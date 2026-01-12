import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <span className="font-display text-2xl font-bold tracking-widest cursor-pointer">
                VANTAGE<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
              Crafting premium athletic wear for those who demand excellence. 
              Performance meets luxury in every stitch.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">Collection</span></Link></li>
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">Philosophy</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Returns</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Vantage Athletics. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
