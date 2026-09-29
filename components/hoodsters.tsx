"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Fingerprint,
  Globe2,
  Menu,
  Play,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { characters, characterImage, type Character } from "@/lib/collection";
import { cn } from "@/lib/utils";
import {
  EcosystemSections,
  MintSection,
  ProjectSection,
} from "@/components/project-sections";
import { project, faqs } from "@/lib/project";

const links = [
  { href: "#home", label: "Home" },
  { href: "#collection", label: "The collection" },
  { href: "#vision", label: "The vision" },
  { href: "#project", label: "The project" },
  { href: "#faq", label: "FAQ" },
];
const filters = [
  "All characters",
  "Originals",
  "Streetwear",
  "Alter egos",
] as const;

function Brand({ small = false }: { small?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="The Hoodsters home"
      className="inline-flex items-center gap-2.5"
    >
      <Image
        src="/assets/sharehoodlers-logo.png"
        alt=""
        width={44}
        height={44}
        sizes={small ? "36px" : "44px"}
        className={cn("brand-mark", small && "brand-mark-small")}
      />
      <span className={cn("brand-word", small && "text-lg!")}>
        The <strong>Hoodsters</strong><span className="text-primary">.</span>
      </span>
    </a>
  );
}

export default function Hoodsters() {
  const characterTrigger = useRef<HTMLButtonElement>(null);
  const filmTrigger = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);
  const [selected, setSelected] = useState<Character | null>(null);
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All characters");
  const [showAll, setShowAll] = useState(false);
  const filtered = characters.filter(
    (character) => filter === "All characters" || character.category === filter,
  );
  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell flex h-20 items-center justify-between gap-5">
          <Brand />
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <a className="nav-link" key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a
                href={project.mintUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                MINT NOW <ArrowUpRight />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="border-t border-border bg-background px-6 py-5 lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <Image
            src="/assets/scene-20.webp"
            alt="The Hoodsters characters overlooking a neon-green futuristic city"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="shell relative z-10 flex min-h-[690px] flex-col justify-center py-20 lg:min-h-[740px]">
            <div className="hero-topline">
              <span className="mint-status">
                <span className="status-dot" /> MINTING SOON
              </span>
              <span className="eyebrow text-white/50">
                GENESIS COLLECTION / 001
              </span>
            </div>
            <div className="eyebrow mb-6 mt-14 text-primary">
              THE FUTURE HAS A SHARE
            </div>
            <h1 id="hero-title" className="hero-title">
              3,333 SHARES.
              <br />
              <span>ONE COLLECTIVE.</span>
            </h1>
            <p className="mt-7 max-w-[480px] text-base leading-7 text-white/65">
              The Hoodsters is a community-driven collection of 3,333 digital
              share certificates built around ownership, culture and the HOOD.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a
                  href={project.mintUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MINT ON OPENSEA <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.walletUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CHECK YOUR WALLET <ArrowUpRight />
                </a>
              </Button>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>SUPPLY</dt>
                <dd>3,333</dd>
              </div>
              <div>
                <dt>MINT</dt>
                <dd>FREE</dd>
              </div>
              <div>
                <dt>CHAIN</dt>
                <dd>ROBINHOOD</dd>
              </div>
            </dl>
          </div>
          <div className="hero-coordinate">
            <span className="text-primary">↗</span> THE HOODSTERS UNIVERSE
            <br />
            <span className="text-white/35">ANIME ART. ONCHAIN IDENTITY.</span>
          </div>
          <a
            href="#collection"
            aria-label="Explore the collection"
            className="hero-scroll"
          >
            <ArrowDown className="size-4" />
          </a>
        </section>

        <div className="manifesto-strip" aria-label="Community values">
          <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <span>ANIME ART.</span>
            <span className="strip-star">✳</span>
            <span>ONCHAIN IDENTITY.</span>
            <span className="strip-star">✳</span>
            <span>COLLECTIVE ENERGY.</span>
            <span className="strip-star hidden md:block">✳</span>
          </div>
        </div>

        <section id="collection" className="collection-section section-space">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-primary">01 / THE COLLECTION</p>
                <h2 className="section-title mt-5">
                  MEET THE
                  <br />
                  <span className="text-primary">HOODSTERS.</span>
                </h2>
              </div>
              <p className="max-w-[300px] text-sm leading-6 text-muted-foreground">
                3,333 unique Hoodsters. Different identities, styles, and
                personalities. One collective.
              </p>
            </div>
            <div className="mb-7 mt-10 flex flex-wrap items-center justify-between gap-4">
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter characters"
              >
                {filters.map((item) => (
                  <Button
                    key={item}
                    size="sm"
                    variant={item === filter ? "default" : "outline"}
                    aria-pressed={filter === item}
                    onClick={() => {
                      setFilter(item);
                      setShowAll(false);
                    }}
                    className="rounded-full"
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <span
                className="font-mono text-xs text-muted-foreground"
                aria-live="polite"
              >
                {String(filtered.length).padStart(2, "0")} ART PREVIEWS
              </span>
            </div>
            <div className="character-grid">
              {visible.map((character) => (
                <button
                  className="character-card group"
                  key={character.id}
                  onClick={(event) => {
                    characterTrigger.current = event.currentTarget;
                    setSelected(character);
                  }}
                  aria-label={`View ${character.name}`}
                >
                  <div className="character-image">
                    <Image
                      src={characterImage(character.id)}
                      alt={`${character.name}, an original Hoodster on a ${character.color.toLowerCase()} background`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="character-number">
                      SH / {String(character.id).padStart(3, "0")}
                    </span>
                    <span className="character-arrow">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-4 py-4">
                    <div>
                      <h3 className="text-sm font-semibold">
                        {character.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {character.category}
                      </p>
                    </div>
                    <span className="size-1.5 rounded-full bg-primary" />
                  </div>
                </button>
              ))}
            </div>
            {filtered.length > 8 && (
              <div className="mt-9 text-center">
                <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                  {showAll
                    ? "Show featured characters"
                    : "View all 16 characters"}
                  <ArrowDown className={cn(showAll && "rotate-180")} />
                </Button>
              </div>
            )}
          </div>
        </section>

        <section id="vision" className="section-space shell">
          <div className="about-grid">
            <div className="relative">
              <div className="scene-frame">
                <Image
                  src="/assets/scene-21.webp"
                  alt="The collective gathered around a glowing table in their city headquarters"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="image-caption">
                  <span className="status-dot" /> INSIDE THE COLLECTIVE / 001
                </span>
                <span className="frame-corner" />
              </div>
              <div className="scene-stamp">
                <Globe2 className="size-5 text-primary" />
                <div>
                  OUR WORLD.
                  <br />
                  <span>YOUR PLACE IN IT.</span>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow text-primary">02 / THE IDEA</p>
              <h2 className="section-title mt-5">
                WHAT DOES YOUR
                <br />
                SHARE <span className="text-primary">REPRESENT?</span>
              </h2>
              <p className="section-copy mt-6">
                A Hoodster is more than a collectible.
              </p>
              <p className="section-copy mt-3">
                It represents your place inside a growing digital community
                built around ownership, participation and culture.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-6">
                <div className="flex gap-3">
                  <Fingerprint className="size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">Own your identity</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Hold your share. Find your place.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">Participate</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Help shape a growing ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#collection"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-primary"
              >
                Find your place in the collective{" "}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <EcosystemSections />

        <section className="world-section" aria-labelledby="world-title">
          <Image
            src="/assets/scene-23.webp"
            alt="A luminous trading district in The Hoodsters universe"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="shell relative z-10 flex min-h-[460px] flex-col items-center justify-center py-20 text-center">
            <p className="eyebrow text-primary">THIS IS ONLY THE BEGINNING</p>
            <h2
              id="world-title"
              className="section-title mt-5 text-5xl! md:text-6xl!"
            >
              A WHOLE WORLD.
              <br />A SHARED{" "}
              <span className="text-primary">POINT OF VIEW.</span>
            </h2>
            <Button
              variant="outline"
              className="mt-7 border-white/35 bg-black/25"
              onClick={(event) => {
                filmTrigger.current = event.currentTarget;
                setFilmOpen(true);
              }}
            >
              <Play className="size-3! fill-current" /> Watch the film
            </Button>
          </div>
        </section>

        <ProjectSection />
        <MintSection />

        <section id="roadmap" className="section-space shell">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-primary">08 / THE FUTURE</p>
              <h2 className="section-title mt-5">
                THE ROAD
                <br />
                <span className="text-primary">AHEAD.</span>
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-muted-foreground">
              The collection is the starting point. What comes next will be
              shaped as the project and community grow.
            </p>
          </div>
          <div className="roadmap-grid mt-12">
            {[
              {
                number: "01",
                title: "The drop",
                status: "THE FOUNDATION",
                icon: Fingerprint,
                text: "Launch 3,333 Hoodsters. Establish the foundation of the collective.",
              },
              {
                number: "02",
                title: "The community",
                status: "THE CONNECTION",
                icon: Users,
                text: "Grow the HOOD and build the community around the collection.",
              },
              {
                number: "03",
                title: "The ecosystem",
                status: "THE HORIZON",
                icon: Sparkles,
                text: "Develop new initiatives, collaborations, and experiences.",
              },
              {
                number: "04",
                title: "The next chapter",
                status: "THE FUTURE",
                icon: Globe2,
                text: "Explore future projects and opportunities created around The Hoodsters ecosystem.",
              },
            ].map((phase) => (
              <article key={phase.number} className="roadmap-card">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">
                    CHAPTER / {phase.number}
                  </span>
                  <phase.icon className="size-5 text-white/35" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {phase.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {phase.text}
                </p>
                <div className="mt-7 flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/55">
                  <span className="size-1.5 rounded-full border border-white/40" />
                  {phase.status}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="faq-section section-space">
          <div className="shell grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow text-primary">09 / THE DETAILS</p>
              <h2 className="section-title mt-5">
                GOOD QUESTIONS.
                <br />
                <span className="text-primary">STRAIGHT ANSWERS.</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground">
                Everything you need to know about the HOOD.
              </p>
            </div>
            <Accordion type="single" collapsible defaultValue="what">
              {faqs.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="shell py-20">
          <div className="join-panel">
            <div className="relative z-10">
              <p className="eyebrow text-primary">YOUR PLACE STARTS HERE</p>
              <h2 className="section-title mt-5">
                WELCOME TO
                <br />
                <span className="text-primary">THE HOOD.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
                3,333 shares. One collective.
                <br />
                Your place starts here.
              </p>
              <Button asChild className="mt-7">
                <a
                  href={project.mintUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MINT ON OPENSEA <ArrowUpRight />
                </a>
              </Button>
            </div>
            <div className="join-art" aria-hidden="true">
              {[2, 1, 3].map((id) => (
                <div key={id}>
                  <Image
                    src={characterImage(id)}
                    fill
                    sizes="220px"
                    alt=""
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="shell flex flex-col justify-between gap-7 py-9 md:flex-row md:items-center">
          <div>
            <Brand small />
            <p className="mt-3 text-xs text-muted-foreground">
              3,333 digital shares. One collective.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            <a
              href={project.mintUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              OpenSea ↗
            </a>
            <a
              href={project.communityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              X ↗
            </a>
            <a href="#mint" className="nav-link">
              Mint
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
          </nav>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground"
          >
            Back to top <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="shell flex flex-wrap justify-between gap-3 border-t border-border py-5 text-[10px] text-muted-foreground">
          <span>
            © {new Date().getFullYear()} The Hoodsters. All rights reserved.
          </span>
          <span className="font-mono tracking-wider">
            A SHARED VISION. AN ORIGINAL WORLD.
          </span>
        </div>
      </footer>

      <Dialog open={filmOpen} onOpenChange={setFilmOpen}>
        <DialogContent
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            filmTrigger.current?.focus();
          }}
          className="max-w-5xl overflow-hidden p-0"
        >
          <DialogTitle className="sr-only">
            Enter The Hoodsters world
          </DialogTitle>
          <DialogDescription className="sr-only">
            An original animated film from The Hoodsters universe.
          </DialogDescription>
          {filmOpen && (
            <video
              className="aspect-video w-full bg-black"
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster="/assets/scene-20.webp"
            >
              <source src="/assets/sharehoodlers-film.mp4" type="video/mp4" />
              Your browser does not support embedded video.{" "}
              <a href="/assets/sharehoodlers-film.mp4">Download the film</a>.
            </video>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            characterTrigger.current?.focus();
          }}
          className="max-h-[90dvh] max-w-3xl overflow-y-auto p-0"
        >
          {selected && (
            <div className="grid sm:grid-cols-2">
              <div className="relative aspect-square">
                <Image
                  src={characterImage(selected.id)}
                  alt={selected.name}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-7">
                <p className="eyebrow text-primary">
                  SH / {String(selected.id).padStart(3, "0")}
                </p>
                <DialogTitle className="mt-4 text-3xl font-bold tracking-tight">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="mt-4 text-sm leading-7 text-muted-foreground">
                  {selected.detail}
                </DialogDescription>
                <dl className="my-6 space-y-3 border-y border-border py-5 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Style</dt>
                    <dd>{selected.category}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Background</dt>
                    <dd>{selected.color}</dd>
                  </div>
                </dl>
                <Button asChild variant="outline">
                  <a
                    href={characterImage(selected.id)}
                    download={`hoodster-${selected.name.toLowerCase().replaceAll(" ", "-")}.webp`}
                  >
                    Download artwork <ArrowDownToLine />
                  </a>
                </Button>
                <button
                  onClick={() => {
                    const index = characters.findIndex(
                      (c) => c.id === selected.id,
                    );
                    setSelected(characters[(index + 1) % characters.length]);
                  }}
                  className="mt-5 flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary"
                >
                  Next character <ChevronRight className="size-3" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
