import Image from "next/image";

const quotes = [
  {
    line: "“This lawn? I fought a demon buffalo for it. You think you can handle those hoof prints?”",
    context: "Carl explaining his suburban war stories to Frylock, 2003.",
  },
  {
    line: "“The stache is federally licensed. I had to bench-press a Camaro to get certified.”",
    context: "After the DMV revoked his license for the sixth time.",
  },
  {
    line: "“Respect the pool. It respects no one, especially not Steve.”",
    context: "Poolside rules briefing delivered at 3:07 a.m.",
  },
  {
    line: "“My cardio routine is yelling at the Mooninites until they teleport away crying.”",
    context: "Confidential training log discovered in his garage.",
  },
];

const specs = [
  { label: "Height of Hair Glory", value: "22.7 cm pompadour lift (unassisted)" },
  { label: "Garage Horsepower", value: "Built Ford Tough + 8 mystery NOS canisters" },
  { label: "Preferred Armor", value: "Gold chainmail tank top & vintage Zubaz" },
  { label: "Battle Motto", value: "“Swing first. Ask later. Swagger always.”" },
  { label: "Allies", value: "Aqua Teens (begrudgingly), Drastic Measures Dan, The Jersey Spirit" },
  { label: "Nemeses", value: "Mooninites, Cybernetic Santas, HOA bylaws" },
];

const achievements = [
  {
    title: "2001 • Pool Sovereign",
    detail:
      "Declared the Brutananadilewski pool a sovereign nation. Negotiated a non-aggression pact with Meatwad in exchange for seven boxes of Pizza Bagels.",
  },
  {
    title: "2004 • Fryer of the North",
    detail:
      "Defeated a rampaging robo-turkey using only flip-flops, a car battery, and unfiltered rage. Neighborhood still whispers about it.",
  },
  {
    title: "2007 • Spirit of Secaucus",
    detail:
      "Haunted his own house during a paranormal invasion. Spirits filed a restraining order and relocated to Paramus.",
  },
  {
    title: "2012 • Mr. Novemberfest",
    detail:
      "Won the Drastic Measures car show after executing a burnout so radiant it temporarily opened a portal to another dimension.",
  },
];

const dossiers = [
  {
    header: "Battle-Ready Resume",
    body: [
      "Former owner of the legendary 1976 Chrysler Cordoba (RIP).",
      "Certified master of improvised weaponry: grill tongs, bowling trophies, mid-tier fireworks.",
      "Can identify every Aqua Teen villain by smell alone.",
      "Holds the New Jersey record for fastest backyard barbed-wire installation.",
    ],
  },
  {
    header: "Lifestyle Protocols",
    body: [
      "Breakfast: Cold pizza, two Red Bulls, motivational yelling in the mirror.",
      "Evening ritual: Watching the Giants highlights while polishing chains.",
      "Sunday sacrament: Detailing the pool with a boom box tuned to Judas Priest.",
      "Self-care: Deep conditioning the chest hair, rain or shine.",
    ],
  },
  {
    header: "Security Clearances",
    body: [
      "Level Omega Garage Access • All rows of the tool pegboard accounted for.",
      "HOA Watch List • Considered both a threat and a necessary deterrent.",
      "Multiversal Recognition • Mooninites refer to him only in whispers.",
      "Neighborhood Panic Button • Activated anytime Carl barbecues after midnight.",
    ],
  },
];

const artifacts = [
  {
    src: "/images/carl-victory.svg",
    title: "Garage Throne Sigil",
    caption: "Neon emblem rumored to glow whenever Carl scores discounted tires.",
  },
  {
    src: "/images/carl-pool-crest.svg",
    title: "Sacred Pool Crest",
    caption: "Displayed during pool diplomacy summits to intimidate rival floaties.",
  },
  {
    src: "/images/carl-pompadour.svg",
    title: "Pompadour Frequency Map",
    caption: "Visualizes the seismic readings caused by his wind-resistant hair arc.",
  },
  {
    src: "/images/carl-chainstorm.svg",
    title: "Chainstorm Lattice",
    caption: "Holographic study of the gravitational field around his gold chains.",
  },
  {
    src: "/images/carl-muscle.svg",
    title: "Flex Reverberation",
    caption: "Captures the ripple effect a single flex has across Secaucus County.",
  },
  {
    src: "/images/carl-glare.svg",
    title: "Death Glare Prism",
    caption: "Six angles of the stare that has felled rogue mascots and mailboxes alike.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#ff00a8] via-[#5f2eff] to-[#00f0ff] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/3 rounded-full bg-gradient-to-tr from-[#ffb347] via-[#f70052] to-[#1700ff] blur-3xl" />
        <div className="absolute top-1/3 right-0 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-gradient-to-bl from-[#00ffb3] via-[#0099ff] to-[#6c00ff] blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-20 sm:px-10 lg:px-16">
        <header className="relative rounded-3xl border border-white/10 bg-black/60 p-10 shadow-[0_0_60px_rgba(255,0,170,0.4)] backdrop-blur-xl">
          <div className="absolute -top-14 right-10 hidden h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400/60 bg-black/70 text-xs uppercase tracking-[0.35em] text-fuchsia-200 shadow-[0_0_40px_rgba(255,0,170,0.55)] sm:flex">
            EST. 2000
          </div>
          <p className="mb-6 text-lg uppercase tracking-[0.35em] text-white/70">
            Official Shrine of
          </p>
          <h1
            className="glitch text-shadow-neon text-5xl font-black uppercase sm:text-6xl md:text-7xl"
            data-text="Carl Brutananadilewski"
          >
            Carl Brutananadilewski
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Patron saint of backyard bravado, New Jersey thunder, and unstoppable
            garage energy. This shrine captures Carl in all his neon glory —
            hero, neighbor, and barrier between the suburbs and cosmic chaos.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-sm uppercase tracking-[0.2em] text-white/80">
              <span className="block text-3xl font-black text-white">NJ</span>
              Secaucus Overlord
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#ff2fb9]/10 via-[#5f2eff]/10 to-transparent p-6 text-sm uppercase tracking-[0.2em] text-white/80">
              <span className="block text-3xl font-black text-white">∞</span>
              Pool Security Level
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#00f0ff]/10 via-[#ff9d00]/10 to-transparent p-6 text-sm uppercase tracking-[0.2em] text-white/80">
              <span className="block text-3xl font-black text-white">24/7</span>
              Vigilance Schedule
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#ff007a]/10 via-[#00ff95]/10 to-transparent p-6 text-sm uppercase tracking-[0.2em] text-white/80">
              <span className="block text-3xl font-black text-white">S+</span>
              Swagger Rank
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-10 backdrop-blur-xl">
            <div className="absolute inset-0 grid-shimmer opacity-30" />
            <h2 className="relative mb-6 text-3xl font-black uppercase tracking-[0.25em] text-white">
              Carl Spec Sheet
            </h2>
            <div className="relative grid gap-6 sm:grid-cols-2">
              {specs.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white/90">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#5f2eff]/40 via-[#ff007a]/40 to-[#00ffb3]/30 p-10 shadow-[0_0_30px_rgba(102,0,255,0.45)] backdrop-blur-xl">
            <h2 className="mb-6 text-3xl font-black uppercase tracking-[0.25em]">
              Garage Signal
            </h2>
            <p className="text-lg text-white/85">
              If the garage light flickers three times, it means Carl has initiated
              Operation: Supreme Grilling. All neighbors are advised to either
              bring tribute in the form of hot wings or vacate within 50 yards.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/60">
              WARNING: HOT CHARCOAL + COSMIC ENERGY
            </p>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {dossiers.map((dossier) => (
            <article
              key={dossier.header}
              className="relative rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-lg"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full border border-white/10 bg-[#ff2fb9]/40 blur-md" />
              <h3 className="relative text-2xl font-black uppercase tracking-[0.25em] text-white">
                {dossier.header}
              </h3>
              <ul className="relative mt-6 space-y-4 text-base text-white/80">
                {dossier.body.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#ff00a8] shadow-[0_0_10px_rgba(255,0,170,0.7)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/60 p-10 backdrop-blur-lg">
          <h2 className="mb-8 text-center text-3xl font-black uppercase tracking-[0.35em] text-white">
            Canonized Quotes
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {quotes.map((quote) => (
              <blockquote
                key={quote.line}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-6 text-lg text-white/90 shadow-[0_0_30px_rgba(255,0,170,0.2)]"
              >
                <span className="absolute -left-3 -top-3 text-5xl text-[#ff2fb9]">“</span>
                <p className="pl-4">{quote.line}</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  {quote.context}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-10 backdrop-blur-xl">
          <h2 className="text-center text-3xl font-black uppercase tracking-[0.35em] text-white">
            Timeline of Glory
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {achievements.map((event) => (
              <article
                key={event.title}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#ff007a]/20 via-[#5f2eff]/20 to-transparent p-8"
              >
                <div className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#00ffb3] shadow-[0_0_15px_rgba(0,255,179,0.7)]" />
                <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-white">
                  {event.title}
                </h3>
                <p className="mt-4 text-base text-white/85">{event.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/65 p-10 backdrop-blur-xl">
          <h2 className="mb-10 text-center text-3xl font-black uppercase tracking-[0.35em] text-white">
            Neon Relics of Carl
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {artifacts.map((artifact) => (
              <figure
                key={artifact.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,0,170,0.25)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 spin-slow rounded-3xl border border-transparent">
                    <div className="absolute inset-3 rounded-3xl border border-dashed border-[#ff2fb9]/40" />
                  </div>
                </div>
                <div className="relative mx-auto flex h-48 w-full items-center justify-center rounded-2xl bg-black/70 p-6">
                  <Image
                    src={artifact.src}
                    alt={artifact.title}
                    width={320}
                    height={192}
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="relative mt-6 space-y-2 text-center">
                  <h3 className="text-xl font-black uppercase tracking-[0.25em] text-white">
                    {artifact.title}
                  </h3>
                  <p className="text-sm text-white/75">{artifact.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <footer className="mb-6 rounded-full border border-white/10 bg-black/70 px-6 py-4 text-center text-xs uppercase tracking-[0.35em] text-white/60 backdrop-blur">
          Carl Brutananadilewski • Guardian of the Pool • Defender of Suburban
          Thunder • © {new Date().getFullYear()}
        </footer>
      </section>
    </main>
  );
}
