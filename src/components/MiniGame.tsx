import { useCallback, useEffect, useMemo, useRef, useState, type DragEvent } from "react";

type SlotId = "header" | "nav" | "main" | "aside" | "footer";
type PieceId = SlotId | "div";
type Slot = { id: SlotId; label: string; className: string };

const pieces: Array<{ id: PieceId; label: string; color: string; icon: string }> = [
  { id: "header", label: "<header>", color: "bg-[#c8ff32]", icon: "LOGO" },
  { id: "nav", label: "<nav>", color: "bg-[#ffe66d]", icon: "MENU · MENU" },
  { id: "main", label: "<main>", color: "bg-[#6d5dfc] text-white", icon: "CONTENT" },
  { id: "aside", label: "<aside>", color: "bg-[#ff7ac8]", icon: "SIDE" },
  { id: "footer", label: "<footer>", color: "bg-[#9ddcff]", icon: "© 2026" },
  { id: "div", label: "<div class=\"all\">", color: "bg-[#ff6b72] text-white", icon: "함정 카드" },
];

const slots: Slot[] = [
  { id: "header", label: "HEADER 영역", className: "col-span-3 h-16" },
  { id: "nav", label: "NAV 영역", className: "col-span-3 h-12" },
  { id: "main", label: "MAIN 영역", className: "col-span-2 h-36" },
  { id: "aside", label: "ASIDE 영역", className: "col-span-1 h-36" },
  { id: "footer", label: "FOOTER 영역", className: "col-span-3 h-14" },
];

const shuffle = () => [...pieces].sort(() => Math.random() - 0.5);

function BuildGame() {
  const [available, setAvailable] = useState(shuffle);
  const [placed, setPlaced] = useState<Partial<Record<SlotId, PieceId>>>({});
  const [selected, setSelected] = useState<PieceId | null>(null);
  const [wrongSlot, setWrongSlot] = useState<PieceId | null>(null);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const complete = Object.keys(placed).length === slots.length;

  useEffect(() => {
    if (!started || complete) return;
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [started, complete]);

  const availableIds = useMemo(() => new Set(available.map((piece) => piece.id)), [available]);

  const reset = () => {
    setAvailable(shuffle());
    setPlaced({});
    setSelected(null);
    setWrongSlot(null);
    setMoves(0);
    setSeconds(0);
    setStarted(true);
  };

  const placePiece = (pieceId: PieceId, slotId: SlotId) => {
    if (!availableIds.has(pieceId) || placed[slotId]) return;
    setStarted(true);
    setMoves((value) => value + 1);
    if (pieceId !== slotId) {
      setWrongSlot(slotId);
      window.setTimeout(() => setWrongSlot(null), 450);
      return;
    }
    setPlaced((current) => ({ ...current, [slotId]: pieceId }));
    setAvailable((current) => current.filter((piece) => piece.id !== pieceId));
    setSelected(null);
  };

  const drop = (event: DragEvent<HTMLButtonElement>, slotId: SlotId) => {
    event.preventDefault();
    placePiece(event.dataTransfer.getData("text/plain") as PieceId, slotId);
  };

  return (
    <section className="bg-[#ffcfdd] px-5 py-10 text-[#16131c] sm:px-10 lg:h-[calc(100svh-96px)] lg:overflow-hidden lg:py-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-black tracking-[.18em]">WEB PUBLISHER · MINI PUZZLE</p>
            <h2 className="mt-3 max-w-4xl text-[clamp(2.7rem,5vw,5.5rem)] font-black leading-[.84] tracking-[-.065em]">BUILD THE<br /><span className="text-[#6d5dfc]">WEBSITE!</span></h2>
          </div>
          <p className="max-w-md break-keep text-lg font-semibold leading-8 text-black/60">무작정 <code className="rounded bg-black/10 px-1.5 py-1 text-sm">&lt;div&gt;</code>만 쓰면 섭섭하죠. 시맨틱 태그를 알맞은 영역에 배치해 웹사이트를 완성해보세요.</p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[.62fr_1.38fr]">
          <aside className="rounded-[2rem] border-2 border-black bg-[#fff9f3] p-6 shadow-[9px_9px_0_#16131c]">
            <div className="flex items-center justify-between border-b-2 border-black pb-4"><h3 className="font-black">COMPONENT BOX</h3><span className="rounded-full bg-black px-3 py-1 font-mono text-xs font-black text-white">{available.length} LEFT</span></div>
            <p className="mt-4 text-sm font-bold text-black/45">드래그하거나 선택한 뒤 빈 영역을 눌러주세요. 만능처럼 보이는 함정 카드도 숨어 있어요.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {available.map((piece) => (
                <button
                  key={piece.id}
                  type="button"
                  draggable
                  onDragStart={(event) => event.dataTransfer.setData("text/plain", piece.id)}
                  onClick={() => { setStarted(true); setSelected((current) => current === piece.id ? null : piece.id); }}
                  className={`group flex items-center justify-between rounded-2xl border-2 border-black p-4 text-left font-mono font-black shadow-[4px_4px_0_#16131c] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#16131c] ${piece.color} ${selected === piece.id ? "-translate-y-1 ring-4 ring-white ring-offset-2 ring-offset-black" : ""}`}
                >
                  <span>{piece.label}</span><span className="text-[10px] opacity-55">{piece.icon}</span>
                </button>
              ))}
              {complete && <p className="rounded-2xl bg-[#c8ff32] p-5 text-center font-black">시맨틱 구조 완성 ✓</p>}
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 text-center"><div className="rounded-xl bg-black/5 p-3"><span className="block text-[10px] font-black tracking-widest">MOVES</span><strong className="text-2xl">{moves}</strong></div><div className="rounded-xl bg-black/5 p-3"><span className="block text-[10px] font-black tracking-widest">TIME</span><strong className="text-2xl">{seconds}s</strong></div></div>
          </aside>

          <div className="relative overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[9px_9px_0_#16131c]">
            <div className="flex items-center justify-between border-b-2 border-black bg-[#f5f5f5] px-5 py-3"><div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-[#ff6b8b]" /><span className="h-3 w-3 rounded-full bg-[#ffe66d]" /><span className="h-3 w-3 rounded-full bg-[#7be495]" /></div><span className="font-mono text-xs font-black">semantic-portfolio.dev</span><span className="text-xs">🔒</span></div>
            <div className="new-puzzle-grid grid grid-cols-3 gap-3 p-5 sm:p-7">
              {slots.map((slot) => {
                const piece = pieces.find((item) => item.id === placed[slot.id]);
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => drop(event, slot.id)}
                    onClick={() => selected && placePiece(selected, slot.id)}
                    aria-label={`${slot.label}${piece ? `에 ${piece.label} 배치됨` : " 비어 있음"}`}
                    className={`${slot.className} ${wrongSlot === slot.id ? "new-puzzle-wrong" : ""} ${piece ? `${piece.color} border-black shadow-[4px_4px_0_#16131c]` : "border-dashed border-black/25 bg-white/60 hover:border-[#6d5dfc] hover:bg-[#6d5dfc]/5"} grid place-items-center rounded-2xl border-2 transition-colors`}
                  >
                    {piece ? <span className="font-mono text-lg font-black sm:text-2xl">{piece.label}<small className="mt-1 block text-[9px] tracking-widest opacity-50">{piece.icon}</small></span> : <span className="text-[10px] font-black tracking-[.15em] text-black/25">DROP {slot.id.toUpperCase()} HERE</span>}
                  </button>
                );
              })}
            </div>
            {complete && (
              <div className="absolute inset-0 z-20 grid place-items-center bg-[#6d5dfc]/90 p-6 text-center text-white backdrop-blur-sm">
                <div className="new-puzzle-success"><div className="text-6xl">🎉</div><p className="mt-5 text-4xl font-black tracking-[-.04em]">DEPLOY SUCCESS!</p><p className="mt-2 font-bold text-white/65">{moves}번 이동 · {seconds}초 · {moves <= 6 ? "시맨틱 마스터 S" : moves <= 9 ? "튼튼한 마크업 A" : "조금 더 다듬기 B"}</p><button type="button" onClick={reset} className="mt-7 rounded-full bg-[#c8ff32] px-7 py-4 text-sm font-black text-black transition hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,.25)]">한 번 더 조립하기 ↻</button></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const auditItems = [
  { id: 1, bad: true, label: "사진", code: '<img src="hero.jpg">', detail: "대체 텍스트가 없어요", style: "bg-[#ffe66d]" },
  { id: 2, bad: false, label: "제목", code: "<h1>포트폴리오</h1>", detail: "올바른 페이지 제목", style: "bg-[#c8ff32]" },
  { id: 3, bad: true, label: "버튼?", code: '<div onclick="go()">확인</div>', detail: "div 대신 button이 필요해요", style: "bg-[#ff7ac8]" },
  { id: 4, bad: true, label: "입력창", code: '<input placeholder="이름">', detail: "연결된 label이 없어요", style: "bg-[#9ddcff]" },
  { id: 5, bad: false, label: "메뉴", code: '<nav aria-label="주 메뉴">', detail: "이름이 있는 올바른 nav", style: "bg-white" },
  { id: 6, bad: true, label: "텍스트", code: "#ddd on #fff", detail: "색상 대비가 너무 낮아요", style: "bg-[#eee] text-[#ccc]" },
  { id: 7, bad: false, label: "건너뛰기", code: '<a href="#main">본문 바로가기</a>', detail: "키보드 사용자를 위한 링크", style: "bg-[#c8ff32]" },
  { id: 8, bad: true, label: "제목 순서", code: "<h1> → <h4>", detail: "제목 단계가 건너뛰었어요", style: "bg-[#6d5dfc] text-white" },
];

function AccessibilityGame() {
  const [found, setFound] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const total = auditItems.filter((item) => item.bad).length;
  const complete = found.length === total;
  const inspect = (id: number, bad: boolean) => {
    if (found.includes(id)) return;
    if (bad) setFound((items) => [...items, id]);
    else setMistakes((value) => value + 1);
  };
  const reset = () => { setFound([]); setMistakes(0); };

  return (
    <section className="bg-[#d9ffca] px-5 py-10 text-[#16131c] sm:px-10 lg:h-[calc(100svh-96px)] lg:overflow-hidden lg:py-5">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-[10px] font-black tracking-[.18em]">ACCESSIBILITY · INSPECTOR MODE</p><h2 className="mt-2 text-[clamp(2.4rem,4vw,4.25rem)] font-black leading-[.84] tracking-[-.065em]">A11Y<br /><span className="text-[#0e7c70]">DETECTIVE!</span></h2></div><p className="max-w-md break-keep text-sm font-semibold leading-6 text-black/60">검수 5분 전! 수상한 UI를 눌러 접근성 오류 5개를 찾아주세요. 멀쩡한 요소를 의심하면 실수가 올라갑니다.</p></div>
        <div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <div className="relative rounded-[1.6rem] border-2 border-black bg-[#f8f5ee] p-4 shadow-[7px_7px_0_#16131c] sm:p-5">
            <div className="mb-3 flex items-center justify-between border-b-2 border-black pb-3"><strong className="font-mono text-sm">audit-target.html</strong><span className="rounded-full bg-black px-3 py-1.5 text-[10px] font-black text-white">FOUND {found.length}/{total}</span></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {auditItems.map((item) => {
                const solved = found.includes(item.id);
                return <button key={item.id} type="button" onClick={() => inspect(item.id, item.bad)} className={`${item.style} ${solved ? "ring-4 ring-[#0e7c70] opacity-55" : "hover:-translate-y-1 hover:shadow-[5px_5px_0_#16131c]"} min-h-[4.5rem] rounded-xl border-2 border-black p-3 text-left transition duration-200`}><span className="text-[11px] font-black">{solved ? "✓ FIXED" : item.label}</span><code className="mt-2 block break-all text-[11px] font-bold">{item.code}</code></button>;
              })}
            </div>
            {complete && <div className="absolute inset-0 grid place-items-center rounded-[1.8rem] bg-[#0e7c70]/95 p-6 text-center text-white backdrop-blur"><div className="new-puzzle-success"><div className="text-6xl">🕵🏻‍♀️</div><h3 className="mt-5 text-4xl font-black">AUDIT PASSED!</h3><p className="mt-2 font-bold text-white/65">오류 5개 발견 · 실수 {mistakes}회</p><button type="button" onClick={reset} className="mt-6 rounded-full bg-[#c8ff32] px-7 py-4 font-black text-black">다시 검사하기 ↻</button></div></div>}
          </div>
          <aside className="rounded-[1.6rem] border-2 border-black bg-white p-5 shadow-[7px_7px_0_#16131c]"><div className="flex items-center justify-between"><h3 className="font-black">AUDIT LOG</h3><span className="text-xl">🔎</span></div><div className="mt-4 space-y-2">{found.length === 0 ? <p className="rounded-xl bg-black/5 p-3 text-xs font-bold text-black/45">아직 발견한 오류가 없어요.</p> : found.map((id) => { const item = auditItems.find((entry) => entry.id === id)!; return <div key={id} className="rounded-xl bg-[#d9ffca] p-3"><strong className="text-sm">✓ {item.label}</strong><p className="mt-1 text-xs font-semibold text-black/55">{item.detail}</p></div>; })}</div><div className="mt-4 rounded-xl bg-[#ffdfdf] p-3 text-sm font-black">잘못된 의심: {mistakes}회</div></aside>
        </div>
      </div>
    </section>
  );
}

function PixelCatRun() {
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [obstacle, setObstacle] = useState(100);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const jumpingRef = useRef(false);

  const jump = useCallback(() => {
    if (!running || jumpingRef.current) return;
    jumpingRef.current = true; setJumping(true);
    window.setTimeout(() => { jumpingRef.current = false; setJumping(false); }, 620);
  }, [running]);

  useEffect(() => {
    const key = (event: KeyboardEvent) => { if ((event.code === "Space" || event.code === "ArrowUp") && running) { event.preventDefault(); jump(); } };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [jump, running]);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setObstacle((x) => {
      const next = x - Math.min(1.25 + score * .015, 2.3);
      if (next < 19 && next > 10 && !jumpingRef.current) { setRunning(false); setOver(true); setBest((value) => Math.max(value, score)); return next; }
      if (next < -8) { setScore((value) => value + 1); return 105; }
      return next;
    }), 35);
    return () => window.clearInterval(timer);
  }, [running, score]);

  const start = () => { setScore(0); setObstacle(100); setOver(false); setRunning(true); };
  return (
    <section className="bg-[#9ddcff] px-5 py-10 text-[#16131c] sm:px-10 lg:h-[calc(100svh-96px)] lg:overflow-hidden lg:py-8"><div className="mx-auto grid h-full max-w-[1440px] gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-center"><div><p className="text-xs font-black tracking-[.18em]">BREAK TIME · PIXEL RUN</p><h2 className="mt-3 text-[clamp(2.7rem,5vw,5.5rem)] font-black leading-[.84] tracking-[-.065em]">PIXEL<br /><span className="text-[#6d5dfc]">CAT RUN!</span></h2><p className="mt-5 max-w-md break-keep text-base font-semibold leading-7 text-black/60">QA가 끝난 고양이의 퇴근길! 스페이스바나 화면을 눌러 마지막 BUG를 가볍게 뛰어넘으세요.</p><div className="mt-5 flex gap-3"><span className="rounded-2xl bg-black px-5 py-3 font-black text-white">SCORE {score}</span><span className="rounded-2xl bg-[#ffe66d] px-5 py-3 font-black">BEST {Math.max(best, score)}</span></div></div>
      <div onPointerDown={jump} className="relative min-h-[430px] overflow-hidden rounded-[2rem] border-2 border-black bg-gradient-to-b from-[#c8eeff] to-[#f8dbff] shadow-[10px_10px_0_#16131c] select-none"><div className="absolute inset-x-0 top-0 flex justify-between border-b-2 border-black bg-white/90 px-5 py-3 font-mono text-xs font-black"><span>pixel-cat-run.exe</span><span>SPACE / TAP</span></div><div className="absolute bottom-0 h-24 w-full border-t-2 border-black bg-[#c8ff32]" /><div className="absolute bottom-24 left-[14%] text-6xl transition-transform duration-[620ms] ease-[cubic-bezier(.2,.8,.2,1)]" style={{ transform: jumping ? "translateY(-150px) rotate(-12deg)" : "translateY(0)" }}>🐱</div><div className="absolute bottom-24 grid h-14 w-14 place-items-center rounded-xl border-2 border-black bg-[#ff5b6e] font-mono text-[10px] font-black text-white shadow-[4px_4px_0_#16131c]" style={{ left: `${obstacle}%` }}>BUG!</div>{!running && <div className="absolute inset-0 grid place-items-center bg-white/45 text-center backdrop-blur-sm"><div><div className="text-7xl">🐱</div><h3 className="mt-5 text-3xl font-black">{over ? "BUG에 걸렸어요!" : "퇴근 준비 완료?"}</h3><button type="button" onClick={(event) => { event.stopPropagation(); start(); }} className="mt-5 rounded-full bg-black px-8 py-4 font-black text-white hover:bg-[#6d5dfc]">{over ? "다시 달리기 ↻" : "RUN →"}</button></div></div>}</div></div></section>
  );
}

const gameTabs = [
  { id: "build", label: "웹사이트 빌드", icon: "🧩", description: "시맨틱 구조 조립" },
  { id: "a11y", label: "접근성 탐정", icon: "🔎", description: "접근성 오류 찾기" },
  { id: "cat", label: "PIXEL CAT RUN", icon: "🐱", description: "버그 피하기" },
] as const;

export default function MiniGame() {
  const [game, setGame] = useState<(typeof gameTabs)[number]["id"]>("build");

  useEffect(() => {
    document.documentElement.classList.add("has-game-snap");
    return () => document.documentElement.classList.remove("has-game-snap");
  }, []);

  return (
    <div className="new-game-fullpage relative min-h-screen bg-[#16131c]">
      <div className="relative z-30 border-b border-white/10 bg-[#16131c] px-5 py-5 text-white sm:px-10 lg:h-24 lg:py-0">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 lg:h-full lg:flex-row lg:items-center lg:justify-between">
          <div className="shrink-0"><p className="text-[10px] font-black tracking-[.2em] text-[#c8ff32]">PUBLISHER ARCADE</p><h2 className="mt-1 text-xl font-black tracking-[-.03em]">CHOOSE & PLAY</h2></div>
          <div className="grid flex-1 gap-2 sm:grid-cols-3 lg:max-w-4xl" role="tablist" aria-label="미니게임 선택">
            {gameTabs.map((tab) => (
              <button key={tab.id} type="button" role="tab" aria-selected={game === tab.id} onClick={() => setGame(tab.id)} className={`${game === tab.id ? "border-[#c8ff32] bg-[#c8ff32] text-black shadow-[4px_4px_0_#6d5dfc]" : "border-white/15 bg-white/5 hover:border-white/40 hover:bg-white/10"} flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition duration-300`}>
                <span className="text-xl">{tab.icon}</span><span><strong className="block text-xs font-black">{tab.label}</strong><small className="hidden text-[10px] font-semibold opacity-55 sm:block">{tab.description}</small></span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div role="tabpanel" key={game}>
        {game === "build" ? <BuildGame /> : game === "a11y" ? <AccessibilityGame /> : <PixelCatRun />}
      </div>
      <a href="#new-contact" aria-label="다음 섹션으로 이동" className="group absolute bottom-24 right-6 z-40 hidden items-center gap-3 text-[9px] font-black tracking-[.18em] text-black/40 transition hover:text-black/75 lg:flex xl:right-10">
        <span className="relative h-12 w-7 rounded-full border border-black/30 transition group-hover:border-black/60" aria-hidden="true"><span className="new-scroll-dot absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#6d5dfc]" /></span>
        SCROLL TO EXPLORE
      </a>
    </div>
  );
}
