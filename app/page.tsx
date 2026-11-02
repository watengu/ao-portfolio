type LinkItem = {
  name: string;
  desc: string;
  href: string;
};

type PlainItem = {
  name: string;
  desc: string;
};

type CaseItem = {
  name: string;
  href: string;
  kind: string;
  task: string;
  design: string;
  build: string;
  now: string;
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

const CASES: CaseItem[] = [
  {
    name: "Enaema",
    href: "https://enaema-ruddy.vercel.app",
    kind: "実績・稼働中",
    task: "天気と時間帯で変わる美容ケアの、順番に迷う。",
    design: "毎朝開く、私だけの美容誌の表紙。表紙とタスクが日替わり。",
    build: "ログインと天気連動まで実装したWebアプリ。",
    now: "公開中。Googleログインで、誰でも使えます。",
  },
  {
    name: "マァスゥ",
    href: "https://maasuu.vercel.app",
    kind: "実績・稼働中",
    task: "紹介から始まるつながりに、期限と安全の仕組みが要る。",
    design: "プロフィール集約のホーム＋期限つきの接続。",
    build: "招待リンクが必須の、紹介制SNS。",
    now: "公開中。テスト運用を続けています。",
  },
  {
    name: "会員制サービスの見本",
    href: "https://dating-club-demo.vercel.app",
    kind: "デモ・架空データ使用中",
    task: "会員制の入口は、見せないことと伝わることの両立が要る。",
    design: "入口の約束は1つだけ。料金は1つの比較表に集約。",
    build: "LPと、会員ページのデモ一式。",
    now: "見本として公開中。登場するクラブと会員は、すべて架空です。",
  },
];

const SAMPLES: LinkItem[] = [
  {
    name: "入り口の見本 4パターン",
    desc: "A アプリLP型／B プロフィール型／C 差し込み型／D 会員制型。",
    href: "https://watengu.github.io/entrance-patterns/",
  },
  {
    name: "見本のご案内",
    desc: "パターンの選び方と、公開のしかた。",
    href: "https://watengu.github.io/entrance-patterns/guide.html",
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

const FLOW: { step: string; desc: string }[] = [
  { step: "要件整理", desc: "今の困りごとと、サイトで変えたいことを伺います。" },
  { step: "構造設計", desc: "見本の型から選んで、完成形を先に確認します。" },
  { step: "制作", desc: "写真と文章をお預かりして、作ります。" },
  { step: "動作確認", desc: "スマホで実際に開いて、導線まで確認します。" },
  { step: "公開", desc: "公開して、ファイル一式をお渡しします。" },
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
      <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--gold)]">
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

function CaseBlock({ item, delay }: { item: CaseItem; delay: string }) {
  return (
    <div
      className="rise border-t border-[var(--line-soft)] pt-4 first:border-t-0 first:pt-0"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-baseline gap-3">
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium tracking-wide text-[var(--ink)] underline-offset-4 hover:underline"
        >
          {item.name}
        </a>
        <span className="text-[11px] tracking-[0.1em] text-[var(--gold)]">
          {item.kind}
        </span>
      </div>
      <dl className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--muted)]">
        <div className="flex gap-2">
          <dt className="shrink-0 text-[var(--ink)]">課題</dt>
          <dd>{item.task}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 text-[var(--ink)]">設計</dt>
          <dd>{item.design}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 text-[var(--ink)]">制作</dt>
          <dd>{item.build}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 text-[var(--ink)]">現状</dt>
          <dd>{item.now}</dd>
        </div>
      </dl>
    </div>
  );
}

function PlainRow({ item, delay }: { item: PlainItem; delay: string }) {
  return (
    <div
      className="rise border-t border-[var(--line-soft)] pt-4 first:border-t-0 first:pt-0"
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
    <main className="mx-auto flex w-full max-w-[430px] flex-1 flex-col px-6 pb-16 pt-12">
      {/* Profile head — Pattern B: round emblem + name + one line */}
      <header className="rise flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="images/emblem.webp"
          alt="茶屋のエンブレム"
          width={88}
          height={88}
          className="h-[88px] w-[88px] rounded-full border border-[var(--line)] object-cover shadow-[0_0_0_6px_rgba(201,162,39,0.07),0_9px_20px_rgba(0,0,0,0.23)]"
        />
        <h1 className="font-display mt-5 text-4xl font-semibold tracking-[0.3em] text-[var(--ink)]">
          茶屋
        </h1>
        <p className="mt-3 text-sm leading-relaxed tracking-wide text-[var(--muted)]">
          アプリとメディアを、ひとりで作っています。
        </p>
        <div
          className="mt-6 flex items-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[var(--gold)]" />
          <span className="block h-1.5 w-1.5 rotate-45 bg-[var(--gold)]" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[var(--gold)]" />
        </div>
      </header>

      {/* The one button that matters most */}
      <div className="rise mt-8" style={{ animationDelay: "0.08s" }}>
        <a
          href={FEATURED.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 rounded-2xl bg-[var(--gold)] px-6 py-4 text-base font-semibold tracking-[0.15em] text-[#171106] shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Enaema を開く
          <span
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
        <p className="mt-4 text-center">
          <a
            href="#service"
            className="text-[13px] tracking-wide text-[var(--muted)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--ink)]"
          >
            サイト制作をお考えの方へ
          </a>
        </p>
      </div>

      {/* Enaema, the real screen */}
      <figure className="rise mt-6" style={{ animationDelay: "0.12s" }}>
        <a
          href={FEATURED.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-[var(--line-soft)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/enaema-preview.webp"
            alt="Enaema の実際の表紙画面"
            width={701}
            height={720}
            className="block h-[250px] w-full object-cover object-top"
          />
        </a>
        <figcaption className="mt-2 text-center text-[11px] tracking-wide text-[var(--muted)]">
          Enaema の表紙（実際の画面）
        </figcaption>
      </figure>

      {/* Apps */}
      <section className="mt-12">
        <SectionHeading en="APPS" ja="アプリ" delay="0.16s" />
        <p
          className="rise mt-3 text-[12px] leading-relaxed text-[var(--muted)]"
          style={{ animationDelay: "0.18s" }}
        >
          すべて公開中です。タップでそのまま開きます。
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {APPS.map((item, i) => (
            <LinkCard
              key={item.href + item.name}
              item={item}
              delay={`${0.22 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      {/* Cases */}
      <section className="mt-12">
        <SectionHeading en="CASES" ja="実例" delay="0.5s" />
        <div className="mt-5 flex flex-col gap-5">
          {CASES.map((item, i) => (
            <CaseBlock
              key={item.name}
              item={item}
              delay={`${0.56 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      {/* Samples for clients */}
      <section className="mt-12">
        <SectionHeading en="SAMPLES" ja="サイト見本" delay="0.78s" />
        <div className="mt-5 flex flex-col gap-3">
          {SAMPLES.map((item, i) => (
            <LinkCard
              key={item.href}
              item={item}
              delay={`${0.84 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      {/* Service */}
      <section id="service" className="mt-12 scroll-mt-6">
        <SectionHeading en="SERVICE" ja="ご依頼について" delay="0.98s" />
        <div
          className="rise mt-5 space-y-5 text-[13px] leading-relaxed text-[var(--muted)]"
          style={{ animationDelay: "1.04s" }}
        >
          <div>
            <p className="text-[15px] font-medium tracking-wide text-[var(--ink)]">
              依頼できる範囲
            </p>
            <p className="mt-2">
              新規サイトの制作と、今あるサイトのリニューアル。スマホ対応、https化、問い合わせへの導線、地図とSNSへのリンク、写真と文面の差し替えができます。素材（写真・文章）は、ご支給いただく形が原則です。
            </p>
            <p className="mt-2">
              予約システム、ネット決済、会員機能は対象外です。毎日の更新代行と、写真撮影そのものも行いません。機能を絞る代わりに、公開後の月額維持費がかからない設計にしています。
            </p>
          </div>
          <div>
            <p className="text-[15px] font-medium tracking-wide text-[var(--ink)]">
              制作の進め方
            </p>
            <ol className="mt-2 space-y-2">
              {FLOW.map((f, i) => (
                <li key={f.step} className="flex gap-3">
                  <span className="font-display shrink-0 text-[var(--gold)]">
                    {i + 1}
                  </span>
                  <span>
                    <span className="text-[var(--ink)]">{f.step}</span>
                    <span className="mt-0.5 block">{f.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-[15px] font-medium tracking-wide text-[var(--ink)]">
              納品と運用
            </p>
            <p className="mt-2">
              納品物は、公開済みのサイトとファイル一式です。そのまま渡せる形にします。運用は静かな静的サイトの設計で、独自ドメイン代のみ実費、それ以外の固定費はかかりません。
            </p>
            <p className="mt-2">
              料金と納期は、内容を伺ってからご案内します。
            </p>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="mt-12">
        <SectionHeading en="MEDIA" ja="メディア" delay="1.1s" />
        <div className="mt-5 flex flex-col gap-3">
          {MEDIA.map((item, i) => (
            <LinkCard
              key={item.href}
              item={item}
              delay={`${1.16 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      {/* Works */}
      <section className="mt-12">
        <SectionHeading en="WORKS" ja="作品" delay="1.44s" />
        <div className="mt-5 flex flex-col gap-5">
          {WORKS.map((item, i) => (
            <PlainRow
              key={item.name}
              item={item}
              delay={`${1.5 + i * 0.06}s`}
            />
          ))}
        </div>
      </section>

      <footer
        className="rise mt-16 flex flex-col items-center gap-2 text-center"
        style={{ animationDelay: "1.66s" }}
      >
        <span
          className="block h-1 w-1 rotate-45 bg-[var(--gold)] opacity-70"
          aria-hidden="true"
        />
        <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
          © 2026 茶屋
        </p>
        <p className="text-[10px] tracking-[0.2em] text-[var(--muted)]">
          v1
        </p>
      </footer>
    </main>
  );
}
