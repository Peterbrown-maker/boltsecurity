import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight, Instagram, MessageCircle, Shirt, Briefcase, HardHat, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import hoodie from "@/assets/hoodie.jpg";
import cap from "@/assets/cap.jpg";
import stitching from "@/assets/stitching.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BxByStepsClothing — Premium Embroidery & Clothing Branding" },
      { name: "description", content: "Custom embroidery for businesses, uniforms, fashion brands, and personal apparel. Precision stitching that elevates your identity." },
      { property: "og:title", content: "BxByStepsClothing — Premium Embroidery" },
      { property: "og:description", content: "Premium embroidery & clothing branding studio." },
      { property: "og:image", content: stitching },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Poppins:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Shirt, title: "Automation Solutions T", price: "R649", desc: "Professional embroidery of company logos, brand names, and custom designs on clothing, uniforms, caps, and promotional apparel. High-quality stitching ensures a durable and premium finish.", cta: "Order Design" },
  { icon: Briefcase, title: "Automation Solutions C", price: "R649", desc: "Specialized embroidery services for business uniforms, workwear, school uniforms, and hospitality apparel. Designed to enhance brand visibility while maintaining a professional appearance.", cta: "Customize" },
  { icon: HardHat, title: "Automation Solution E", price: "R649", desc: "Custom embroidery on caps, beanies, bucket hats, and other headwear. Ideal for businesses, events, sports teams, and fashion brands seeking a premium branded look.", cta: "View Styles" },
  { icon: Sparkles, title: "Automation EMC", price: "R649", desc: "Custom names, initials, monograms, and unique artwork embroidered onto garments and accessories. Perfect for gifts, special occasions, fashion brands, and personal customization projects.", cta: "Create Yours" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animation = "fade-up 0.9s ease-out both";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between glass-card rounded-full px-5 py-3">
          <a href="#top" className="font-display font-extrabold tracking-tight text-sm sm:text-base">
            BxBy<span className="text-accent">Steps</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_55%)] opacity-[0.08]" />
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              <span className="h-px w-8 bg-accent" /> Embroidery Studio
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
              BxBySteps<br />
              <span className="text-gradient">Clothing</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-3">
              Premium Embroidery & Clothing Branding
            </p>
            <p className="text-muted-foreground max-w-md mb-10">
              Custom embroidery for businesses, uniforms, fashion brands, and personal apparel.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium transition-all hover:scale-[1.03] hover:shadow-[0_10px_40px_-10px_var(--accent)]">
                View Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass-card px-7 py-3.5 font-medium transition-transform hover:scale-[1.03]">
                Get Started
              </a>
            </div>
          </div>

          {/* Floating mockups */}
          <div className="relative h-[480px] lg:h-[560px]">
            <div className="absolute top-0 right-0 w-[70%] aspect-square rounded-3xl overflow-hidden glass-card animate-float">
              <img src={hoodie} alt="Embroidered hoodie" className="w-full h-full object-cover" width={1024} height={1280} />
            </div>
            <div className="absolute bottom-8 left-0 w-[55%] aspect-square rounded-3xl overflow-hidden glass-card animate-float-delayed">
              <img src={cap} alt="Embroidered cap" className="w-full h-full object-cover" width={1024} height={1024} loading="lazy" />
            </div>
            <div className="absolute bottom-0 right-4 w-[40%] aspect-[4/3] rounded-2xl overflow-hidden glass-card animate-float" style={{ animationDelay: "1.5s" }}>
              <img src={stitching} alt="Stitching close-up" className="w-full h-full object-cover" width={1920} height={1080} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16" data-reveal>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">What we craft</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">
              Embroidery <span className="text-gradient">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                style={{ animationDelay: `${i * 80}ms` }}
                className="glass-card rounded-3xl p-8 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_var(--accent)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 grid place-items-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-accent">{s.price}</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/20 hover:border-accent hover:text-accent transition-colors pb-1"
                >
                  {s.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={stitching} alt="" className="w-full h-full object-cover scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        </div>
        <div className="mx-auto max-w-4xl text-center" data-reveal>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            Every Stitch<br />Represents <span className="text-gradient">Quality.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Precision embroidery designed to elevate your brand identity and fashion vision.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-border py-14 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="font-display font-extrabold text-lg">
            BxBy<span className="text-accent">Steps</span>Clothing
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="glass-card h-11 w-11 rounded-full grid place-items-center hover:text-accent transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="WhatsApp" className="glass-card h-11 w-11 rounded-full grid place-items-center hover:text-accent transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">Made with precision stitching.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-[0_10px_40px_-5px_var(--accent)] animate-pulse-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
