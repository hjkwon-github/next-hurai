import Link from "next/link";

const colors = [
  { name: "Primary", className: "bg-primary text-primary-content", token: "primary" },
  { name: "Secondary", className: "bg-secondary text-secondary-content", token: "secondary" },
  { name: "Accent", className: "bg-accent text-accent-content", token: "accent" },
  { name: "Neutral", className: "bg-neutral text-neutral-content", token: "neutral" },
  { name: "Base 100", className: "bg-base-100 text-base-content", token: "base-100" },
  { name: "Base 200", className: "bg-base-200 text-base-content", token: "base-200" },
  { name: "Base 300", className: "bg-base-300 text-base-content", token: "base-300" },
];

const sections = ["컬러", "타이포그래피", "버튼", "입력", "상태", "카드"];

function SectionHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><p className="mb-2 text-xs font-bold tracking-[0.16em] text-primary">{number} / FOUNDATION</p><h2 className="text-2xl font-bold tracking-tight">{title}</h2></div><p className="max-w-sm text-sm leading-6 text-base-content/55">{description}</p></div>;
}

export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <header className="border-b border-base-content/10"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"><Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-content">h.</span><span>next hurai<span className="text-primary">.</span></span></Link><Link href="/" className="btn btn-ghost btn-sm rounded-full">← 홈으로</Link></div></header>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="border-b border-base-content/10 py-16 sm:py-20"><p className="mb-4 text-xs font-bold tracking-[0.2em] text-primary">DESIGN SYSTEM / 01</p><h1 className="text-4xl font-bold tracking-tight sm:text-6xl">만드는 기준을<br />한눈에.</h1><p className="mt-6 max-w-xl text-base leading-8 text-base-content/60">일관된 경험을 위한 색상, 글자, 그리고 기본 컴포넌트입니다. DaisyUI의 의미 있는 토큰을 사용해 필요한 화면을 조합해 보세요.</p></div>
        <div className="grid gap-12 py-12 lg:grid-cols-[180px_1fr] lg:gap-16 lg:py-16">
          <aside><p className="mb-4 text-xs font-bold tracking-[0.15em] text-base-content/40">ON THIS PAGE</p><nav aria-label="디자인 시스템 목차" className="flex flex-wrap gap-2 lg:sticky lg:top-8 lg:flex-col">{sections.map((section, index) => <a key={section} href={`#section-${index + 1}`} className="rounded-lg px-3 py-2 text-sm text-base-content/60 transition-colors hover:bg-base-200 hover:text-base-content">{section}</a>)}</nav></aside>
          <div className="min-w-0 space-y-16">
            <section id="section-1"><SectionHeading number="01" title="컬러" description="의미에 따라 정의된 색상 토큰으로 화면 전체에 일관성을 더합니다." /><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{colors.map((color) => <div key={color.token} className="overflow-hidden rounded-xl border border-base-content/10"><div className={`h-24 ${color.className}`} /><div className="bg-base-100 p-3"><p className="text-sm font-bold">{color.name}</p><p className="mt-1 text-xs text-base-content/50">{color.token}</p></div></div>)}</div></section>
            <section id="section-2"><SectionHeading number="02" title="타이포그래피" description="크기와 굵기의 차이로 정보의 순서를 명확하게 전달합니다." /><div className="space-y-6 rounded-2xl border border-base-content/10 p-6 sm:p-8"><div><p className="mb-2 text-xs text-base-content/45">DISPLAY / BOLD</p><p className="text-4xl font-bold tracking-tight sm:text-5xl">새로운 시작을 위해</p></div><div className="border-t border-base-content/10 pt-6"><p className="mb-2 text-xs text-base-content/45">HEADING / BOLD</p><p className="text-2xl font-bold tracking-tight">좋은 경험은 작은 디테일에서</p></div><div className="border-t border-base-content/10 pt-6"><p className="mb-2 text-xs text-base-content/45">BODY / REGULAR</p><p className="leading-7 text-base-content/70">읽기 편한 문장과 충분한 여백은 내용을 더 쉽게 이해하도록 돕습니다.</p></div></div></section>
            <section id="section-3"><SectionHeading number="03" title="버튼" description="행동의 중요도에 따라 버튼의 형태와 색상을 선택합니다." /><div className="flex flex-wrap items-center gap-3 rounded-2xl border border-base-content/10 p-6 sm:p-8"><button type="button" className="btn btn-primary">Primary</button><button type="button" className="btn btn-secondary">Secondary</button><button type="button" className="btn btn-outline">Outline</button><button type="button" className="btn btn-ghost">Ghost</button><button type="button" className="btn" disabled>Disabled</button></div></section>
            <section id="section-4"><SectionHeading number="04" title="입력" description="명확한 라벨과 안내 문구로 사용자의 입력을 돕습니다." /><div className="grid gap-6 rounded-2xl border border-base-content/10 p-6 sm:grid-cols-2 sm:p-8"><fieldset className="fieldset"><legend className="fieldset-legend">이름</legend><input className="input w-full" type="text" placeholder="이름을 입력하세요" /><p className="label">표시할 이름을 입력해 주세요.</p></fieldset><fieldset className="fieldset"><legend className="fieldset-legend">카테고리</legend><select className="select w-full" defaultValue=""><option value="" disabled>카테고리 선택</option><option>디자인</option><option>개발</option><option>기타</option></select></fieldset><label className="flex items-center gap-3 text-sm"><input type="checkbox" className="checkbox checkbox-primary" defaultChecked /> 체크박스</label><label className="flex items-center gap-3 text-sm"><input type="checkbox" className="toggle toggle-primary" defaultChecked /> 알림 설정</label></div></section>
            <section id="section-5"><SectionHeading number="05" title="상태" description="색상과 텍스트를 함께 사용해 상태를 쉽게 구분합니다." /><div className="space-y-5 rounded-2xl border border-base-content/10 p-6 sm:p-8"><div className="flex flex-wrap gap-2"><span className="badge badge-primary">Primary</span><span className="badge badge-success">Success</span><span className="badge badge-warning">Warning</span><span className="badge badge-error">Error</span><span className="badge badge-ghost">Default</span></div><div role="status" className="alert alert-info"><span>필요한 정보를 이곳에서 안내할 수 있습니다.</span></div></div></section>
            <section id="section-6"><SectionHeading number="06" title="카드" description="관련된 정보를 하나의 단위로 묶어 보여줍니다." /><div className="grid gap-4 sm:grid-cols-2"><article className="card border border-base-content/10 bg-base-100"><div className="card-body"><div className="badge badge-primary badge-outline">NEW</div><h3 className="card-title mt-3">아이디어를 시작하세요</h3><p className="text-sm leading-6 text-base-content/60">작은 구성 요소를 조합해 새로운 화면을 만들어 보세요.</p><div className="card-actions mt-4"><Link href="/" className="btn btn-primary btn-sm">자세히 보기</Link></div></div></article><article className="card bg-base-200"><div className="card-body"><p className="text-xs font-bold tracking-[0.15em] text-base-content/45">A SIMPLE PRINCIPLE</p><h3 className="card-title mt-3">명확하게, 일관되게.</h3><p className="text-sm leading-6 text-base-content/60">공통된 언어로 더 나은 경험을 만듭니다.</p></div></article></div></section>
          </div>
        </div>
      </div>
      <footer className="border-t border-base-content/10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-7 text-xs text-base-content/50 lg:px-10"><span className="font-semibold text-base-content">next hurai.</span><span>Design system · Built with DaisyUI</span></div></footer>
    </main>
  );
}
