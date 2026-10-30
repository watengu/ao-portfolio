type LinkItem = {
  name: string;
  desc: string;
  href: string;
};

type PlainItem = {
  name: string;
  desc: string;
};

const FEATURED = {
  name: "Enaema",
  href: "https://enaema-ruddy.vercel.app",
};

const APPS: LinkItem[] = [
  {
    name: "Enaema（Buffly）",
    desc: "美容タスクをこなして、きれいになるSNS。",
    href: "https://enaema-ruddy.vercel.app",
  },
  {
    name: "マァスゥ",
    desc: "紹介から始まる、期限つきのつながり。",
    href: "https://maasuu.vercel.app",
  },
  {
    name: "今日の開運バフ",
    desc: "日替わりの開運アクションを届ける占いアプリ。",
    href: "https://watengu.github.io/kaiun-buff/",
  },
  {
    name: "What to Wear in Tokyo Today",
    desc: "東京の今日の天気に合わせた服装ガイド（英語）。",
    href: "https://watengu.github.io/tokyo-outfit/",
  },
];

const MEDIA: LinkItem[] = [
  {
    name: "Girls Concierge（Instagram）",
    desc: "似合わせ美容・ファッション @easyaigirl",
    href: "https://www.instagram.com/easyaigirl/",
  },
  {
    name: "Girls Concierge（TikTok）",
    desc: "@easyaigirl",
    href: "https://www.tiktok.com/@easyaigirl",
  },
  {
    name: "Girls Concierge（Threads）",
    desc: "@coffeeman131313",
    href: "https://www.threads.net/@coffeeman131313",
  },
  {
    name: "X（リージェント）",
    desc: "実験と記録 @Regent_ginza",
    href: "https://x.com/Regent_ginza",
  },
];

const WORKS: PlainItem[] = [
  {
    name: "LINEスタンプ",
    desc: "クリエイター名「AO」。マーモットの「まぁ＆すぅ」ほか。",
  },
  {
    name: "長編ライトノベル",
    desc: "完結済み。",
  },
];

function SectionHeading({
  en,
  ja,
  delay,
}: {
  en: string;
  ja: string;
  delay: string;
}) {
  return (
    <div
      className="rise flex items-baseline gap-3"
      style={{ animationDelay: delay }}
    >
      <span className="text-[11px] font-semibold tracking-[0.35em] text-[var(--gold)]">
        {en}
      </span>
      <span className="font-display text-sm tracking-[0.2em] text-[var(--ink)]">
        {ja}
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" aria-hidden="true" />
    </div>
  );
}

function LinkCard({ item, delay }: { item: LinkItem; delay: string }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="rise group flex items-center gap-4 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] px-5 py-4 transition-colors duration-300 hover:border-[var(--line)] hover:bg-[var(--surface-soft)]"
      style={{ animationDelay: delay }}
    >
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-medium tracking-wide text-[var(--ink)]">
          {item.name}
        </span>
        <span className="mt-1 block text-[13px] leading-relaxed text-[var(--muted)]">
          {item.desc}
        </span>
      </span>
      <span
        className="shrink-0 text-sm text-[var(--gold)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  );
}

function PlainCard({ item, delay }: { item: PlainItem; delay: string }) {
  return (
    <div
      className="rise rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] px-5 py-4"
      style={{ animationDelay: delay }}
    >
      <span className="block text-[15px] font-medium tracking-wide text-[var(--ink)]">
        {item.name}
      </span>
      <span className="mt-1 block text-[13px] leading-relaxed text-[var(--muted)]">
        {item.desc}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[430px] flex-1 flex-col px-6 pb-16 pt-16">
      {/* Profile head — Pattern B: round emblem + name + one line */}
      <header className="rise flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="images/emblem.webp"
          alt="茶屋のエンブレム"
          width={112}
          height={112}
          className="h-28 w-28 rounded-full border border-[var(--line)] object-cover shadow-[0_0_0_6px_rgba(201,162,39,0.07),0_18px_40px_rgba(0,0,0,0.45)]"
        />
        <h1 className="font-display mt-7 text-4xl font-semibold tracking-[0.3em] text-[var(--ink)]">
          茶屋
        </h1>
        <p className="mt-4 text-sm leading-relaxed tracking-wide text-[var(--muted)]">
          アプリとメディアを、ひとりで作っています。
        </p>
        <div
          className="mt-8 flex items-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[var(--gold)]" />
          <span className="block h-1.5 w-1.5 rotate-45 bg-[var(--gold)]" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[var(--gold)]" />
        </div>
      </header>

      {/* The one button that matters most */}
      <div className="rise mt-10" style={{ animationDelay: "0.08s" }}>
        <a
          href={FEATURED.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-[var(--gold-bright)] to-[var(--gold)] px-6 py-4 text-base font-semibold tracking-[0.15em] text-[#171106] shadow-[0_14px_34px_rgba(201,162,39,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Enaema を開く
          <span
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      </div>

      {/* Apps */}
      <section className="mt-14">
        <SectionHeading en="APPS" ja="アプリ" delay="0.14s" />
        <div className="mt-5 flex flex-col gap-3">
          {APPS.map((item, i) => (
            <LinkCard
              key={item.href + item.name}
              item={item}
              delay={`${0.2 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      {/* Media */}
      <section className="mt-12">
        <SectionHeading en="MEDIA" ja="メディア" delay="0.46s" />
        <div className="mt-5 flex flex-col gap-3">
          {MEDIA.map((item, i) => (
            <LinkCard
              key={item.href}
              item={item}
              delay={`${0.52 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      {/* Works */}
      <section className="mt-12">
        <SectionHeading en="WORKS" ja="作品" delay="0.78s" />
        <div className="mt-5 flex flex-col gap-3">
          {WORKS.map((item, i) => (
            <PlainCard
              key={item.name}
              item={item}
              delay={`${0.84 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      <footer
        className="rise mt-16 flex flex-col items-center gap-2 text-center"
        style={{ animationDelay: "1s" }}
      >
        <span
          className="block h-1 w-1 rotate-45 bg-[var(--gold)] opacity-70"
          aria-hidden="true"
        />
        <p className="text-xs tracking-[0.2em] text-[var(--muted-deep)]">
          © 2026 茶屋
        </p>
        <p className="text-[10px] tracking-[0.3em] text-[var(--muted-deep)]">
          v0
        </p>
      </footer>
    </main>
  );
}
