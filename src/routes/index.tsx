import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Shield,
  Camera,
  Radio,
  Siren,
  Dog,
  UserRound,
  LockKeyhole,
  Eye,
  CheckCircle2,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

import boltLogo from "@/assets/bsecurity-logo.png";

// Replace these with your actual security images
import securityHero from "@/assets/security-hero.jpg";
import securityGuard from "@/assets/security-guard.jpg";
import boltSecurityGuard from "@/assets/boltsecuritygaurd.jpg";
import cctv from "@/assets/cctv.jpg";
import patrol from "@/assets/patrol.jpg";
import controlRoom from "@/assets/control-room.jpg";
import tactical from "@/assets/tactical.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Bolt Security | Professional Security Services",
      },
      {
        name: "description",
        content:
          "Bolt Security — Protection in motion. Professional security, technology, and rapid response across South Africa.",
      },
      {
        property: "og:title",
        content: "Bolt Security | Protection Without Compromise",
      },
      {
        property: "og:description",
        content:
          "Bolt Security — Protection in motion. Professional security, technology, and rapid response across South Africa.",
      },
      {
        property: "og:image",
        content: boltLogo,
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "icon",
        href: boltLogo,
        type: "image/png",
      },
    ],
  }),

  component: Index,
});

const services = [
  {
    icon: Shield,
    title: "Guarding",
    short: "Professional protection for people, properties and businesses.",
    image: securityGuard,
  },
  {
    icon: Siren,
    title: "Armed Response",
    short: "Rapid response when every second matters.",
    image: patrol,
  },
  {
    icon: Camera,
    title: "CCTV & Monitoring",
    short: "24/7 visibility through modern security technology.",
    image: cctv,
  },
  {
    icon: Radio,
    title: "Tactical Security",
    short: "Specialised protection for high-risk environments.",
    image: tactical,
  },
  {
    icon: Dog,
    title: "K9 Security",
    short: "Specialised canine units for detection and protection.",
    image: boltSecurityGuard,
  },
  {
    icon: UserRound,
    title: "VIP Protection",
    short: "Professional personal protection and secure movement.",
    image: tactical,
  },
];

const technology = [
  {
    icon: Camera,
    title: "CCTV",
    text: "Keep eyes on what matters.",
  },
  {
    icon: Eye,
    title: "Monitoring",
    text: "Continuous security awareness.",
  },
  {
    icon: LockKeyhole,
    title: "Access Control",
    text: "Control who enters your space.",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els =
      ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!els) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            element.style.animation =
              "bolt-fade-up 0.8s cubic-bezier(.22,1,.36,1) both";

            io.unobserve(element);
          }
        });
      },
      {
        threshold: 0.12,
      }
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      ref={ref}
      style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}
      className="min-h-screen overflow-x-hidden selection:bg-[var(--accent)] selection:text-[var(--color-background)]"
    >
      {/* =========================================================
          GLOBAL STYLES
      ========================================================= */}

      <style>{`
        @keyframes bolt-fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bolt-float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes bolt-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
          }

          50% {
            box-shadow: 0 0 0 8px rgba(212, 175, 55, 0.12);
          }
        }

        .bolt-grid {
          background-image:
            linear-gradient(
              var(--color-glass-border) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              var(--color-glass-border) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
        }

        .bolt-noise {
          background-image:
            radial-gradient(
              rgba(212, 175, 55, 0.09) 0.5px,
              transparent 0.5px
            );
          background-size: 6px 6px;
        }
      `}</style>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-4">
        <div
          className="
            mx-auto
            max-w-7xl
            flex
            items-center
            justify-between
            gap-4
            rounded-full
            border
              border-[var(--color-glass-border)]
              bg-[var(--color-glass)]
            backdrop-blur-xl
            px-4
            sm:px-6
            py-3
              shadow-[var(--shadow-soft)]
          "
        >
          {/* LOGO */}

          <a
            href="#top"
            aria-label="Bolt Security Home"
            className="flex items-center min-w-0"
          >
            <img
              src={boltLogo}
              alt="Bolt Security"
              suppressHydrationWarning
              className="
                w-[145px]
                sm:w-[165px]
                sm:max-w-full
                h-auto
                object-contain
                max-w-full
              "
            />
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#services"
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
            >
              Services
            </a>

            <a
              href="#technology"
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
            >
              Technology
            </a>

            <a
              href="#about"
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
            >
              About
            </a>

            <a
              href="#contact"
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Open menu"
              className="md:hidden btn-glass p-2 rounded-full"
            >
              {!mobileOpen ? <Menu className="h-5 w-5 text-[var(--primary)]" /> : <X className="h-5 w-5 text-[var(--primary)]" />}
            </button>

            <ThemeToggle />

            <a
              href="#contact"
              className="
                hidden
                sm:inline-flex
                items-center
                gap-2
                rounded-full
                btn-glass
                px-5
                py-2.5
                text-xs
                font-bold
                uppercase
                tracking-[0.08em]
                transition-all
                hover:brightness-95
                hover:scale-[1.02]
                text-[var(--glass-button-text)]
              "
            >
              Request Security
              <ArrowRight className="h-3.5 w-3.5 text-[var(--glass-button-text)]" />
            </a>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden absolute top-[72px] right-4 z-40 w-full max-w-[220px] rounded-lg btn-glass p-4">
            <nav className="flex flex-col gap-3">
              <a onClick={() => setMobileOpen(false)} href="#services" className="text-[var(--primary)] px-2 py-1 rounded">Services</a>
              <a onClick={() => setMobileOpen(false)} href="#technology" className="text-[var(--primary)] px-2 py-1 rounded">Technology</a>
              <a onClick={() => setMobileOpen(false)} href="#about" className="text-[var(--primary)] px-2 py-1 rounded">About</a>
              <a onClick={() => setMobileOpen(false)} href="#contact" className="text-[var(--primary)] px-2 py-1 rounded">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="top"
        className="
          relative
          min-h-screen
          flex
          items-center
          pt-36
          pb-20
          px-6
          overflow-hidden
        "
      >
        {/* background */}

        <div className="absolute inset-0 -z-20 bg-[var(--color-background)]" />

        <div className="absolute inset-0 -z-10 bolt-grid opacity-40" />

        <div
          className="
            absolute
            top-0
            right-0
            -z-10
            w-[650px]
            max-w-full
            h-[650px]
            rounded-full
            bg-[var(--accent)]/[0.05]
            blur-3xl
          "
        />

        <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
          {/* LEFT */}

          <div className="animate-[bolt-fade-up_0.8s_ease-out_both]">
            <div
              className="
                inline-flex
                items-center
                gap-3
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.28em]
                text-[rgba(43,43,43,0.55)]
                mb-7
              "
            >
              <span className="h-px w-9 bg-[var(--accent)] shadow-[0_0_8px_rgba(212,175,55,0.16)]" />

              <span className="text-[var(--accent)]">Professional Security Services</span>

              <span className="h-px w-9 bg-[var(--accent)] shadow-[0_0_8px_rgba(212,175,55,0.16)]" />
            </div>

            <h1
              className="
                font-display
                font-black
                uppercase
                tracking-[-0.055em]
                text-[2.6rem]
                sm:text-5xl
                lg:text-[4.4rem]
                leading-[0.9]
                text-[var(--foreground)]
              "
            >
              Security
              <br />

                <span className="text-blue-gold">
                Without
              </span>

              <br />

                <span className="text-blue-gold">
                Compromise.
              </span>
            </h1>

            <div className="mt-8 max-w-lg">
              <p
                className="
                  text-base
                  sm:text-lg
                  font-medium
                  text-[var(--muted-foreground)]
                  leading-relaxed
                "
              >
                Professional protection powered by people,
                technology and rapid response.
              </p>

              <p className="mt-3 text-sm text-[var(--muted-foreground)] max-w-md">
                Security solutions for people, properties,
                businesses and high-risk environments.
              </p>
            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  btn-glass
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.06em]
                  transition-all
                  hover:brightness-95
                  hover:scale-[1.03]
                  text-[var(--primary)]
                "
              >
                Request Security

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                    text-[var(--primary)]
                  "
                />
              </a>

              <a
                href="#services"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  btn-glass
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                    text-[var(--glass-button-text)]
                  transition-all
                  hover:brightness-95
                "
              >
                Explore Services
              </a>
            </div>

            {/* small trust line */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                mt-10
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[var(--muted-foreground)]
              "
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                Professional
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                Technology Driven
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                24/7 Protection
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE COMPOSITION */}

          <div className="relative h-[500px] sm:h-[620px]">
            {/* MAIN IMAGE */}

            <div
              className="
                absolute
                top-0
                right-0
                w-[78%]
                h-[76%]
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--color-glass-border)]
                bg-[var(--color-glass)]
                shadow-[var(--shadow-soft)]
                animate-[bolt-float_6s_ease-in-out_infinite]
              "
            >
              <img
                src={securityHero}
                alt="Professional Bolt Security officer"
                suppressHydrationWarning
                              className="w-full h-full object-cover z-0"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/65
                  via-black/10
                  to-transparent
                                z-10
                              "
                            />

                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                              <div className="flex flex-col items-center gap-3 text-center">
                                <div className="h-14 w-14 rounded-full bg-[var(--color-glass)] border border-[var(--color-glass-border)] grid place-items-center shadow-[var(--shadow-soft)]">
                                  <Shield className="h-6 w-6 text-[var(--accent)]" />
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                                  BOLT SECURITY
                                </p>

                                <p className="mt-1 text-lg font-bold overlay-text">
                                  Protection in motion.
                                </p>
                              </div>
                            </div>
            </div>

            {/* SECOND IMAGE */}

            <div
              className="
                absolute
                bottom-5
                left-0
                w-[47%]
                h-[39%]
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[var(--color-glass-border)]
                bg-[var(--color-glass)]
                shadow-[var(--shadow-soft)]
                animate-[bolt-float_7s_ease-in-out_1s_infinite]
              "
            >
              <img
                src={cctv}
                alt="Security CCTV monitoring"
                suppressHydrationWarning
                              className="w-full h-full object-cover z-0"
                loading="lazy"
              />

                            <div className="absolute inset-0 bg-black/35 z-10" />

                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                              <div className="flex flex-col items-center gap-3 text-center">
                                <div className="h-12 w-12 rounded-full bg-[var(--color-glass)] border border-[var(--color-glass-border)] grid place-items-center shadow-[var(--shadow-soft)]">
                                  <Camera className="h-6 w-6 text-[var(--accent)]" />
                                </div>

                                <p className="text-xs font-bold uppercase tracking-[0.16em] overlay-text">
                                  CCTV
                                </p>

                                <p className="text-[10px] overlay-text-60 mt-1">
                                  Continuous monitoring
                                </p>
                              </div>
                            </div>
            </div>

            {/* THIRD IMAGE */}

            <div
              className="
                absolute
                bottom-0
                right-[4%]
                w-[38%]
                h-[29%]
                overflow-hidden
                rounded-[1.25rem]
                border
                border-[var(--color-glass-border)]
                bg-[var(--color-glass)]
                shadow-[var(--shadow-soft)]
              "
            >
              <img
                src={patrol}
                alt="Bolt security patrol"
                suppressHydrationWarning
                className="w-full h-full object-cover z-0"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/40 z-10" />

              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="h-12 w-12 rounded-full bg-[var(--color-glass)] border border-[var(--color-glass-border)] grid place-items-center shadow-[var(--shadow-soft)]">
                    <Siren className="h-6 w-6 text-[var(--accent)]" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.16em] overlay-text">
                    RESPONSE
                  </p>
                </div>
              </div>
            </div>

            {/* STATUS */}

            <div
              className="
                absolute
                top-[20%]
                left-[-1rem]
                sm:left-[-2rem]
                rounded-2xl
                border
                border-[var(--color-glass-border)]
                bg-[var(--color-glass)]
                backdrop-blur-xl
                px-4
                py-3
                shadow-[var(--shadow-soft)]
              "
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-40 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]" />
                </span>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Security
                  </p>

                  <p className="text-xs font-semibold text-[var(--foreground)]">
                    Active Protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="relative py-28 sm:py-32 px-6 border-t border-[var(--color-glass-border)]"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="max-w-3xl mb-14"
            data-reveal
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
              What we protect
            </span>

            <h2
              className="
                mt-4
                font-display
                font-black
                uppercase
                tracking-[-0.045em]
                text-4xl
                sm:text-5xl
                lg:text-6xl
                leading-[0.92]
                text-[var(--foreground)]
              "
            >
              Security
              <br />
              <span className="text-gold-blue">
                That Moves.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  data-reveal
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                  className="
                    group
                    relative
                    min-h-[350px]
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-[var(--color-glass-border)]
                    bg-[var(--color-glass)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[var(--accent)]/40
                    shadow-[var(--shadow-soft)]
                  "
                >
                  {/* image */}

                  <img
                    src={service.image}
                    alt={service.title}
                        suppressHydrationWarning
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                          opacity-55
                          transition-all
                          duration-700
                          group-hover:scale-105
                          group-hover:opacity-70
                        "
                        loading="lazy"
                      />

                  {/* dark overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/90
                      via-black/55
                      to-transparent
                    "
                  />

                  {/* content */}

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div
                      className="
                        h-11
                        w-11
                        rounded-xl
                        border
                        border-white/[0.12]
                        bg-white/[0.06]
                        backdrop-blur-md
                        grid
                        place-items-center
                        mb-5
                      "
                    >
                      <Icon className="h-5 w-5 text-[var(--accent)]" />
                    </div>

                    <h3
                      className="
                        font-display
                        font-bold
                        text-2xl
                        uppercase
                        tracking-tight
                        overlay-text
                      "
                    >
                      {service.title}
                    </h3>

                    <p className="text-sm overlay-text-70 leading-relaxed mt-2 max-w-sm">
                      {service.short}
                    </p>

                    <a
                      href="#contact"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-5
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[var(--accent)]
                        group-hover:brightness-110
                      "
                    >
                      Learn More

                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATEMENT
      ========================================================= */}

      <section className="relative py-32 sm:py-44 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tactical}
            alt=""
            suppressHydrationWarning
            className="w-full h-full object-cover scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/80
              via-black/55
              to-black/85
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-5xl
            text-center
          "
          data-reveal
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]">
            The Bolt Standard
          </span>

          <h2
            className="
              mt-6
              font-display
              font-black
              uppercase
              tracking-[-0.05em]
              text-5xl
              sm:text-6xl
              lg:text-8xl
              leading-[0.86]
          overlay-text
            "
          >
            Protection
            <br />
            Starts Before
            <br />
            <span className="text-gold-blue">
              The Threat.
            </span>
          </h2>

          <p className="mt-8 mx-auto max-w-xl overlay-text-70 text-base sm:text-lg">
            Proactive security built around people, intelligence,
            technology and response.
          </p>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section
        id="technology"
        className="py-28 sm:py-32 px-6 border-t border-[var(--color-glass-border)]"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              lg:grid-cols-2
              gap-14
              items-center
            "
          >
            {/* IMAGE */}

            <div
              data-reveal
              className="
                relative
                h-[450px]
                sm:h-[550px]
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--color-glass-border)]
                shadow-[var(--shadow-soft)]
              "
            >
              <img
                src={controlRoom}
                alt="Bolt Security control room"
                suppressHydrationWarning
                className="w-full h-full object-cover z-0"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-10" />

              <div
                className="
                  absolute
                  left-6
                  right-6
                  bottom-6
                  flex
                  items-end
                  justify-between
                  z-20
                "
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                    Technology
                  </p>

                  <p className="mt-1 text-xl font-bold overlay-text">
                    Security, connected.
                  </p>
                </div>

                <div
                  className="
                    h-11
                    w-11
                    rounded-full
                    bg-white/[0.08]
                    border
                    border-white/[0.12]
                    backdrop-blur-md
                    grid
                    place-items-center
                  "
                >
                  <Camera className="h-5 w-5 text-[var(--accent)]" />
                </div>
              </div>
            </div>

            {/* CONTENT */}

            <div data-reveal>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                Technology
              </span>

              <h2
                className="
                  mt-4
                  font-display
                  font-black
                  uppercase
                  tracking-[-0.045em]
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  leading-[0.9]
                  text-[var(--foreground)]
                "
              >
                Security
                <br />
                <span className="text-gold-blue">
                  Connected.
                </span>
              </h2>

              <p className="mt-6 text-[var(--muted-foreground)] max-w-lg leading-relaxed">
                Modern security technology working alongside
                trained professionals to give you greater
                awareness, control and protection.
              </p>

              <div className="mt-9 space-y-3">
                {technology.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-[var(--color-glass-border)]
                        bg-[var(--color-glass)]
                        backdrop-blur-md
                        p-4
                        transition-colors
                        hover:border-[var(--accent)]/40
                      "
                    >
                      <div
                        className="
                          h-11
                          w-11
                          rounded-xl
                          bg-[var(--color-glass)]
                          border
                          border-[var(--color-glass-border)]
                          grid
                          place-items-center
                          flex-shrink-0
                        "
                      >
                        <Icon className="h-5 w-5 text-[var(--accent)]" />
                      </div>

                      <div>
                        <p className="font-semibold text-[var(--foreground)]">
                          {item.title}
                        </p>

                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW BOLT WORKS
      ========================================================= */}

      <section
        className="
          relative
          py-28
          sm:py-32
          px-6
          border-t
          border-[var(--color-glass-border)]
          bolt-grid
        "
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="text-center mb-16"
            data-reveal
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
              The Bolt approach
            </span>

            <h2
              className="
                mt-4
                font-display
                font-black
                uppercase
                tracking-[-0.045em]
                text-4xl
                sm:text-5xl
                lg:text-6xl
                text-[var(--foreground)]
              "
            >
              Detect.
              <span className="text-gold-blue">
                {" "}Verify.
              </span>
              <br />
              Respond.
              <span className="text-gold-blue">
                {" "}Protect.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                number: "01",
                title: "Detect",
                text: "Identify risks before they escalate.",
              },
              {
                number: "02",
                title: "Verify",
                text: "Assess the situation with intelligence and technology.",
              },
              {
                number: "03",
                title: "Respond",
                text: "Deploy the right security response.",
              },
              {
                number: "04",
                title: "Protect",
                text: "Keep people, property and business secure.",
              },
            ].map((step) => (
              <div
                key={step.number}
                data-reveal
                className="
                  rounded-3xl
                  border
                  border-[var(--color-glass-border)]
                  bg-[var(--color-glass)]
                  backdrop-blur-md
                  p-7
                  min-h-[220px]
                  transition-all
                  hover:border-[var(--accent)]/40
                "
              >
                <span className="text-xs text-[var(--accent)] font-semibold">
                  {step.number}
                </span>

                <h3
                  className="
                    mt-10
                    font-display
                    font-bold
                    uppercase
                    text-xl
                    text-[var(--foreground)]
                  "
                >
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST STATS
      ========================================================= */}

      <section className="py-20 px-6 border-y border-[var(--color-glass-border)]">
        <div className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["2016", "Established"],
            ["24/7", "Protection"],
            ["PSIRA", "Registered"],
            ["Gauteng", "& South Africa"],
          ].map(([value, label]) => (
            <div
              key={value}
              data-reveal
              className="text-center"
            >
              <p
                className="
                  font-display
                  font-black
                  text-3xl
                  sm:text-4xl
                  tracking-tight
                  text-[var(--foreground)]
                "
              >
                {value}
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="py-28 sm:py-32 px-6"
      >
        <div
          className="
            mx-auto
            max-w-7xl
            grid
            lg:grid-cols-2
            gap-14
            items-center
          "
        >
          <div data-reveal>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
              About Bolt
            </span>

            <h2
              className="
                mt-4
                font-display
                font-black
                uppercase
                tracking-[-0.05em]
                text-5xl
                sm:text-6xl
                lg:text-7xl
                leading-[0.86]
                text-[var(--foreground)]
              "
            >
              Built For
              <br />
              The Real
              <br />
              <span className="text-gold-blue">
                World.
              </span>
            </h2>
          </div>

          <div data-reveal>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Bolt Security combines professional security
              personnel, technology and specialised response
              to protect people, properties and businesses.
            </p>

            <p className="mt-5 text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              Our approach is built around proactive
              protection, professional service and security
              solutions tailored to the environment we're
              protecting.
            </p>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-[var(--foreground)]
                border-b
                border-[var(--accent)]/50
                pb-2
                hover:border-[var(--accent)]
                transition-colors
              "
            >
              Talk to Bolt

              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}

      <section
        id="contact"
        className="
          relative
          py-32
          sm:py-44
          px-6
          overflow-hidden
          border-t
          border-[var(--color-glass-border)]
        "
      >
        <div className="absolute inset-0 bolt-grid opacity-40" />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            max-w-full
            h-[500px]
            rounded-full
            bg-[var(--accent)]/[0.06]
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-4xl
            text-center
          "
          data-reveal
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]">
            Get protected
          </span>

          <h2
            className="
              mt-5
              font-display
              font-black
              uppercase
              tracking-[-0.055em]
              text-5xl
              sm:text-6xl
              lg:text-8xl
              leading-[0.86]
              text-[var(--foreground)]
            "
          >
            Your Security
            <br />
            <span className="text-gold-blue">
              Starts Here.
            </span>
          </h2>

          <p className="mt-7 text-[var(--muted-foreground)] max-w-lg mx-auto">
            Tell us what you need protected and we'll help
            you find the right security solution.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <a
              href="tel:0656131895"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[var(--primary)]
                text-[var(--primary-foreground)]
                px-7
                py-3.5
                text-sm
                font-bold
                uppercase
                tracking-[0.06em]
                hover:brightness-90
                transition-all
              "
            >
              <Phone className="h-4 w-4" />
              Call Bolt
            </a>

            <a
              href="mailto:finance@boltsecurity.co.za"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--color-glass-border)]
                bg-[var(--color-glass)]
                backdrop-blur-md
                px-7
                py-3.5
                text-sm
                font-medium
                text-[var(--foreground)]
                hover:border-[var(--accent)]
                transition-all
              "
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-[var(--color-glass-border)] py-12 px-6">
        <div
          className="
            mx-auto
            max-w-7xl
            grid
            md:grid-cols-3
            gap-10
            items-center
          "
        >
          {/* LOGO */}

          <div>
            <img
              src={boltLogo}
              alt="Bolt Security"
              suppressHydrationWarning
              className="w-full max-w-[170px] h-auto"
            />

            <p className="mt-4 text-xs text-[var(--muted-foreground)] max-w-xs leading-relaxed">
              Professional security solutions built around
              protection, technology and response.
            </p>
          </div>

          {/* CONTACT */}

          <div className="space-y-3 text-sm">
            <a
              href="tel:0656131895"
              className="
                flex
                items-center
                gap-3
                text-[var(--muted-foreground)]
                hover:text-[var(--accent)]
                transition-colors
              "
            >
              <Phone className="h-4 w-4" />
              065 613 1895
            </a>

            <a
              href="mailto:finance@boltsecurity.co.za"
              className="
                flex
                items-center
                gap-3
                text-[var(--muted-foreground)]
                hover:text-[var(--accent)]
                transition-colors
              "
            >
              <Mail className="h-4 w-4" />
              finance@boltsecurity.co.za
            </a>

            <div className="flex items-start gap-3 text-[var(--muted-foreground)]">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />

              <span>
                Centurion, Gauteng
                <br />
                South Africa
              </span>
            </div>
          </div>

          {/* SOCIAL */}

          <div className="md:text-right">
            <div className="flex md:justify-end gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  h-11
                  w-11
                  rounded-full
                  border
                  border-[var(--color-glass-border)]
                  bg-[var(--color-glass)]
                  backdrop-blur-md
                  grid
                  place-items-center
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                  transition-colors
                "
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  h-11
                  w-11
                  rounded-full
                  border
                  border-[var(--color-glass-border)]
                  bg-[var(--color-glass)]
                  backdrop-blur-md
                  grid
                  place-items-center
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                  transition-colors
                "
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
              © {new Date().getFullYear()} Bolt Security
            </p>
          </div>
        </div>
      </footer>

      {/* =========================================================
          FLOATING WHATSAPP
      ========================================================= */}

      <a
        href="https://wa.me/27656131895"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Bolt Security on WhatsApp"
        className="
          fixed
          bottom-6
          right-6
          z-50
          h-14
          w-14
          rounded-full
          bg-[var(--primary)]
          text-[var(--primary-foreground)]
          grid
          place-items-center
          shadow-[var(--shadow-soft)]
          transition-all
          hover:scale-110
        "
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}