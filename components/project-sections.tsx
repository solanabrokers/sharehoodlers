import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  CircleDollarSign,
  Globe2,
  Layers,
  Network,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { project } from "@/lib/project";

export function EcosystemSections() {
  return (
    <>
      <section className="section-space ecosystem-section">
        <div className="shell grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">03 / THE ECOSYSTEM</p>
            <h2 className="section-title mt-5">
              BUILT TO <span className="text-primary">GROW.</span>
            </h2>
            <p className="section-copy mt-6">
              The collection is only the foundation. shareHOODlers is designed
              to develop into a broader ecosystem of projects, collaborations,
              creative experiences and community initiatives.
            </p>
            <p className="mt-8 font-mono text-[10px] tracking-widest text-primary">
              ONE FOUNDATION. ENDLESS DIRECTIONS.
            </p>
          </div>
          <div className="ecosystem-path">
            {[
              { name: "COLLECTION", icon: Layers },
              { name: "COMMUNITY", icon: Users },
              { name: "ECOSYSTEM", icon: Network },
              { name: "NEW EXPERIENCES", icon: Globe2 },
            ].map((item, i) => (
              <div key={item.name} className="ecosystem-node">
                <span className="node-dot" />
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <strong>{item.name}</strong>
                <item.icon className="ml-auto size-5 text-primary/60" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space border-y border-border">
        <div className="shell grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">04 / THE VISION</p>
            <h2 className="section-title mt-5">
              THE MARKET FUELS
              <br />
              <span className="text-primary">THE ECOSYSTEM.</span>
            </h2>
            <p className="section-copy mt-6">
              Secondary-market activity can generate creator royalties that
              support the continued development of the shareHOODlers ecosystem.
            </p>
            <p className="section-copy mt-4">
              Our vision is to use project-generated royalties to support future
              development, community initiatives and potential holder-focused
              rewards.
            </p>
            <p className="mt-6 border-l border-primary/40 pl-4 text-xs leading-6 text-muted-foreground">
              Rewards and distributions are not guaranteed and depend on project
              implementation, marketplace activity and available funds.
            </p>
          </div>
          <div
            className="flow-diagram"
            aria-label="Trading activity, royalties, ecosystem and community support the HOOD"
          >
            <div className="flow-core">
              <Network className="mb-3 size-8 text-primary" />
              <strong>THE HOOD</strong>
              <span>CONTINUOUS CULTURE</span>
            </div>
            {[
              { name: "TRADING ACTIVITY", icon: ChartNoAxesCombined },
              { name: "ROYALTIES", icon: CircleDollarSign },
              { name: "ECOSYSTEM", icon: Network },
              { name: "COMMUNITY", icon: Users },
            ].map((item, i) => (
              <div key={item.name} className={`flow-node flow-node-${i}`}>
                <item.icon className="size-4 text-primary" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectSection() {
  return (
    <>
      <section id="project" className="section-space shell">
        <p className="eyebrow text-primary">05 / THE PROJECT</p>
        <h2 className="section-title mt-5">
          MORE THAN <span className="text-primary">A MINT.</span>
        </h2>
        <p className="section-copy mt-6 max-w-2xl">
          The first 3,333 shareHOODlers establish the foundation. From there,
          the project can expand through new artwork, collaborations, digital
          experiences, community initiatives and future projects.
        </p>
        <div className="project-grid mt-10">
          {[
            {
              title: "CREATIVE",
              text: "New artwork, characters and visual experiences.",
              image: "scene-17",
            },
            {
              title: "COLLABORATIONS",
              text: "Work with communities, creators and projects across Web3.",
              image: "scene-19",
            },
            {
              title: "EXPERIENCES",
              text: "Explore new ways for the HOOD to exist beyond the collection.",
              image: "scene-22",
            },
          ].map((card, i) => (
            <article className="project-card" key={card.title}>
              <Image
                src={`/assets/${card.image}.webp`}
                alt={card.text}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <span className="absolute left-6 top-6 font-mono text-xs text-primary">
                0{i + 1} / WHAT’S NEXT
              </span>
              <div className="absolute inset-x-6 bottom-6">
                <h3>{card.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/65">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="chain-section">
        <Image
          src="/assets/scene-18.webp"
          alt="The neon-lit home of the shareHOODlers"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="shell relative py-24">
          <p className="eyebrow text-primary">06 / THE CHAIN</p>
          <h2 className="section-title mt-5">
            BUILT ON
            <br />
            <span className="text-primary">ROBINHOOD CHAIN.</span>
          </h2>
          <p className="section-copy mt-6 max-w-lg">
            shareHOODlers is built on Robinhood Chain, bringing the collection
            into an onchain environment designed around digital assets and
            ownership.
          </p>
          <span className="mt-7 inline-flex items-center gap-3 border border-primary/25 bg-primary/5 px-4 py-3 font-mono text-xs text-primary">
            <Network className="size-4" /> ONCHAIN BY DESIGN
          </span>
        </div>
      </section>
    </>
  );
}

export function MintSection() {
  return (
    <section id="mint" className="section-space shell">
      <div className="mint-panel">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow text-primary">07 / THE DROP</p>
          <span className="mint-status">
            <span className="status-dot" /> MINTING SOON
          </span>
        </div>
        <div className="mint-main">
          <div>
            <h2 className="section-title">
              THE
              <br />
              <span className="text-primary">OPENING BELL.</span>
            </h2>
            <p className="mt-5 text-sm text-muted-foreground">
              Your place in the collective begins here.
            </p>
          </div>
          <dl className="mint-metrics">
            <div>
              <dt>TOTAL SUPPLY</dt>
              <dd>3,333</dd>
            </div>
            <div>
              <dt>MINT</dt>
              <dd>FREE</dd>
            </div>
            <div>
              <dt>MINT DATE</dt>
              <dd>{project.mintDate}</dd>
            </div>
          </dl>
        </div>
        <div className="mint-schedule">
          {project.phases.map((phase) => (
            <div key={phase.name}>
              <span>{phase.name}</span>
              <strong>{phase.time}</strong>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a
                href={project.mintUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                MINT ON OPENSEA <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={project.walletUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                CHECK WALLET <ArrowUpRight />
              </a>
            </Button>
          </div>
          <span className="flex items-center gap-2 font-mono text-[9px] tracking-wider text-muted-foreground">
            THE HOOD IS OPEN TO EVERYONE.{" "}
            <ArrowDownRight className="size-4 text-primary" />
          </span>
        </div>
      </div>
    </section>
  );
}
