import Link from "next/link";

const features = [
  {
    number: "01",
    title: "일관된 인터페이스",
    description: "색상, 타이포그래피, 컴포넌트를 한 곳에서 확인하고 같은 기준으로 화면을 만듭니다.",
    tag: "DESIGN SYSTEM",
  },
  {
    number: "02",
    title: "분리된 데이터 계층",
    description: "API 요청을 화면에서 분리해 데이터를 가져오고 다루는 방식을 명확하게 유지합니다.",
    tag: "API LAYER",
  },
  {
    number: "03",
    title: "배포까지 이어지는 흐름",
    description: "main 브랜치의 변경사항을 GitHub Pages에 자동으로 배포합니다.",
    tag: "GITHUB PAGES",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <header className="border-b border-base-content/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight" aria-label="next hurai 홈">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-content">h.</span>
            <span>next hurai<span className="text-primary">.</span></span>
          </Link>
          <Link href="/design-system" className="btn btn-ghost btn-sm rounded-full">디자인 시스템 <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-base-content/10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-10 lg:pb-28 lg:pt-28">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-base-content/10 bg-base-200/60 px-3 py-1.5 text-xs font-semibold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-primary" /> NEXT.JS STARTER
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              더 좋은 시작을 위한<br /><span className="text-primary">작은 기반.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-base-content/65 sm:text-lg">
              아이디어를 만드는 일에 집중하세요. 화면을 구성하는 규칙부터 데이터 연결, 배포까지 필요한 출발점을 준비했습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/design-system" className="btn btn-primary rounded-full px-6">디자인 시스템 살펴보기 <span aria-hidden="true">↗</span></Link>
              <a href="https://github.com/hjkwon-github/next-hurai" className="btn btn-outline rounded-full px-6">GitHub 저장소 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="rounded-3xl border border-base-content/10 bg-base-200/50 p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-base-content/10 pb-5">
              <span className="text-xs font-bold tracking-[0.2em] text-base-content/50">THE FOUNDATION</span>
              <span className="badge badge-primary badge-sm">READY</span>
            </div>
            <div className="py-8 sm:py-11">
              <p className="text-sm text-base-content/55">Build with clarity.</p>
              <p className="mt-3 max-w-sm text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">생각을 현실로 만드는<br />더 단단한 첫걸음.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-base-content/10 pt-5 text-xs font-semibold text-base-content/60">
              <span>Next.js</span><span>DaisyUI 5</span><span>GitHub Pages</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div><p className="mb-3 text-xs font-bold tracking-[0.2em] text-primary">WHAT&apos;S INSIDE</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">필요한 것부터 차근차근.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-base-content/60">프로젝트를 확장하기 쉽게, 자주 필요한 기본 요소를 담았습니다.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number} className="flex min-h-64 flex-col rounded-2xl border border-base-content/10 bg-base-100 p-6">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold text-primary">{feature.number}</span><span className="text-[10px] font-bold tracking-[0.15em] text-base-content/40">{feature.tag}</span></div>
              <div className="mt-auto pt-12"><h3 className="text-xl font-bold tracking-tight">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-base-content/60">{feature.description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <footer className="border-t border-base-content/10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-7 text-xs text-base-content/50 lg:px-10"><span className="font-semibold text-base-content">next hurai.</span><span>Made for a thoughtful start.</span></div></footer>
    </main>
  );
}
