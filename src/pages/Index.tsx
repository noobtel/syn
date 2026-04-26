import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ShieldCheck,
  TrendingUp,
  Activity,
  Zap,
  LineChart,
  Brain,
} from "lucide-react";
import synMark from "@/assets/syn-mark.png";

const navItems = ["Pools", "AI Bot", "Whitepaper", "$SYN", "Community"];

const stats = [
  { label: "TVL Scanned", value: "$184M" },
  { label: "Pools Tracked", value: "12,480" },
  { label: "Avg Risk Score", value: "Low" },
  { label: "Signals / 24h", value: "326" },
];

const pools = [
  { pair: "SOL / USDC", tvl: "$24.1M", apr: "38.2%", risk: "Low", vol: "$8.4M" },
  { pair: "JUP / SOL", tvl: "$11.7M", apr: "62.5%", risk: "Low", vol: "$5.1M" },
  { pair: "JTO / USDC", tvl: "$6.2M", apr: "54.9%", risk: "Low", vol: "$3.3M" },
  { pair: "WIF / SOL", tvl: "$4.8M", apr: "81.3%", risk: "Med", vol: "$6.0M" },
  { pair: "BONK / SOL", tvl: "$3.9M", apr: "44.1%", risk: "Low", vol: "$2.7M" },
  { pair: "PYTH / USDC", tvl: "$3.2M", apr: "29.6%", risk: "Low", vol: "$1.9M" },
];

const features = [
  {
    icon: Brain,
    title: "AI Pool Discovery",
    desc: "Continuously scans Solana DEXs, scoring every pool on volume, depth, IL exposure and contract risk.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-First Filtering",
    desc: "Only pools that clear our low-risk threshold surface — no rugs, no thin liquidity, no shady deployers.",
  },
  {
    icon: TrendingUp,
    title: "High-Volume Signal",
    desc: "Volume-to-TVL ratios, fee velocity and momentum are weighted to find pools actually printing yield.",
  },
  {
    icon: Zap,
    title: "Real-Time Execution",
    desc: "Signals delivered the moment opportunity opens. Optional auto-routing through trusted aggregators.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="sticky top-4 z-50 px-4">
        <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-3 py-2 shadow-card">
          <a href="#" className="flex items-center gap-2 pl-2">
            <img
              src={synMark}
              alt="Syn"
              width={28}
              height={28}
              className="h-7 w-7 invert"
            />
            <span className="text-base font-semibold tracking-tight">
              Syn <span className="ml-1 font-serif text-muted-foreground">結</span>
            </span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navItems.map((n) => (
              <li key={n}>
                <a href="#" className="transition-colors hover:text-foreground">
                  {n}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70 animate-pulse" />
              <span className="text-muted-foreground">MC</span>
              <span className="font-medium">$1.2M</span>
            </div>
            <Button
              size="sm"
              className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Buy $SYN
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="border-b border-border/60">
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <img
            src={synMark}
            alt=""
            aria-hidden="true"
            width={512}
            height={512}
            className="pointer-events-none absolute right-0 top-8 hidden h-[420px] w-[420px] select-none opacity-[0.07] invert lg:block"
          />
          <div className="relative max-w-3xl">
            <div className="mb-6 font-serif text-sm tracking-[0.3em] text-muted-foreground">
              結 · SYN
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              <span className="text-gradient">AI-driven liquidity</span>{" "}
              intelligence for Solana.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Syn runs an autonomous bot that scans every Solana liquidity pool
              in real time, scoring volume and risk so you only farm what
              actually pays.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-gradient-primary text-primary-foreground glow hover:opacity-90"
              >
                Buy $SYN
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent hover:bg-muted/40"
              >
                View Pools
              </Button>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-5 py-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Capabilities
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              An AI built to hunt yield.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Syn replaces hours of manual pool research with a model trained
              on what good liquidity actually looks like.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-8">
                <f.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              <Activity className="mr-1.5 inline h-3.5 w-3.5" />
              How it works
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Three steps from noise to alpha.
            </h2>
            <ol className="mt-10 space-y-8">
              {[
                {
                  t: "Ingest",
                  d: "Real-time feeds from Meteora, Raydium, Orca, Lifinity and more — every block.",
                },
                {
                  t: "Score",
                  d: "AI assigns each pool a Risk Score and an Opportunity Score using 40+ on-chain signals.",
                },
                {
                  t: "Surface",
                  d: "Only pools above the low-risk / high-volume threshold reach your dashboard.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-xs font-medium text-muted-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* terminal */}
          <Card className="overflow-hidden border-border bg-card p-0 shadow-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-2 text-xs text-muted-foreground">syn-bot · live</span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-xs leading-relaxed text-muted-foreground">
{`> scanning 12,480 pools across 7 DEXs
> filter: tvl > $1M | vol/tvl > 0.4 | risk < 0.25

`}<span className="text-foreground">[OK]</span>{`  SOL/USDC   risk 0.08  vol $8.4M  apr 38.2%
`}<span className="text-foreground">[OK]</span>{`  JUP/SOL    risk 0.11  vol $5.1M  apr 62.5%
`}<span className="text-foreground">[OK]</span>{`  JTO/USDC   risk 0.14  vol $3.3M  apr 54.9%
`}<span className="text-muted-foreground">[!]</span>{`   WIF/SOL    risk 0.27  vol $6.0M  apr 81.3%

> 4 signals dispatched · next scan in 12s`}
            </pre>
          </Card>
        </div>
      </section>

      {/* POOLS TABLE */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-primary">
                <LineChart className="mr-1.5 inline h-3.5 w-3.5" />
                Live picks
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Top pools surfaced by Syn
              </h2>
            </div>
            <Button variant="outline" className="hidden border-border bg-transparent sm:inline-flex">
              View all
            </Button>
          </div>

          <Card className="mt-10 overflow-hidden border-border bg-card p-0">
            <div className="grid grid-cols-5 gap-4 border-b border-border px-6 py-3 text-xs uppercase tracking-wider text-muted-foreground">
              <div>Pair</div>
              <div className="text-right">TVL</div>
              <div className="text-right">24h Vol</div>
              <div className="text-right">APR</div>
              <div className="text-right">Risk</div>
            </div>
            {pools.map((p) => (
              <div
                key={p.pair}
                className="grid grid-cols-5 items-center gap-4 border-b border-border/60 px-6 py-4 text-sm transition-smooth last:border-0 hover:bg-muted/30"
              >
                <div className="font-medium">{p.pair}</div>
                <div className="text-right text-muted-foreground">{p.tvl}</div>
                <div className="text-right text-muted-foreground">{p.vol}</div>
                <div className="text-right font-medium">{p.apr}</div>
                <div className="text-right">
                  <span
                    className={`rounded-md border px-2 py-0.5 text-xs ${
                      p.risk === "Low"
                        ? "border-border bg-muted text-foreground"
                        : "border-border bg-transparent text-muted-foreground"
                    }`}
                  >
                    {p.risk}
                  </span>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border px-6 py-20 text-center shadow-card glass">
          <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-80 blur-2xl" />
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Stop guessing. <span className="text-gradient">Start farming smart.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Syn turns the entire Solana liquidity landscape into a single,
            risk-scored feed of opportunities.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full bg-gradient-primary text-primary-foreground glow hover:opacity-90">
              Buy $SYN
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border bg-transparent">
              Read Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={synMark} alt="" width={20} height={20} className="h-5 w-5 invert" loading="lazy" />
            <span className="font-medium text-foreground">Syn 結</span>
            <span>· AI liquidity intelligence</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Docs</a>
            <a href="https://x.com/syn_solana?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">X</a>
            <a href="https://t.me/syn_sol" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Telegram</a>
            <a href="#" className="hover:text-foreground">Contract</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
