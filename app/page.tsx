"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Send,
  ShieldCheck,
  Clock,
  CreditCard,
  CalendarClock,
} from "lucide-react";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "01000000000";
const KAKAO_URL = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com/_YOUR_CHANNEL";
const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/YOUR_TELEGRAM";

function formatPhoneDisplay(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11) return `${digits.slice(0,3)}-${digits.slice(3,7)}-${digits.slice(7)}`;
  if (digits.length === 10) return `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
  return raw;
}

const JsonLd: React.FC = () => {
  const json = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "라라머니",
    url: "https://www.example.com/",
    description:
      "신용카드 남은 한도만 있으면 5분 내 입금. 365일 24시간, 간편 본인확인 후 빠르게 상담.",
    areaServed: "KR",
    telephone: PHONE,
    sameAs: [KAKAO_URL, TELEGRAM_URL],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
};

const BLUE_GRADIENT = "from-blue-600 to-blue-800";

function track(event: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined") {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event, ...params });
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") gtag("event", event, params);
  }
}

const Header = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-blue-100">
    <div className="mx-auto max-w-[1280px] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white font-bold">
          L
        </div>
        <span className="font-semibold text-gray-900">라라머니</span>
      </div>
      <a
        href="tel:01000000000"
        data-cta="header-phone"
        className="group inline-flex items-center gap-2 text-blue-700 font-medium"
      >
        <span className="hidden sm:inline">010-0000-0000</span>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white group-hover:scale-105 transition">
          <Phone className="h-5 w-5" />
        </span>
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden">
    <div
      className={`absolute inset-0 -z-10 bg-gradient-to-br ${BLUE_GRADIENT} opacity-10`}
    />
    <div className="mx-auto max-w-[1280px] px-4 py-14 sm:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
      >
        신용카드 한도만 있으면 <br />{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          즉시 현금 마련 가능
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-5 text-lg sm:text-2xl text-gray-600"
      >
        5분 입금, 24시간 언제든지 이용 가능
      </motion.p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="#apply"
          data-cta="hero-apply"
          className="inline-flex justify-center rounded-xl px-8 py-4 text-white bg-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-700/20 font-semibold"
        >
          바로 상담받기
        </a>
        <a
          href="#benefits"
          data-cta="hero-benefits"
          className="inline-flex justify-center rounded-xl px-8 py-4 text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 font-semibold"
        >
          장점 확인하기
        </a>
      </div>
    </div>
  </section>
);

const StatCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="mt-3 text-gray-600">{desc}</p>
  </div>
);

const WhatIs: React.FC = () => (
<section id="what" className="mx-auto max-w-[1280px] px-4 py-14 sm:py-20">
<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>라라카드론이란?</h2>
<p className="mt-4 text-lg sm:text-xl text-gray-700" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>신용카드에 남은 한도 만큼 즉시 대출이 가능한 서비스</p>
<div className="mt-6 rounded-2xl border bg-blue-50/60 border-blue-100 p-6 sm:p-8">
<p className="text-gray-700" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}><span className="font-semibold">예시</span> : 신용카드 남은 한도 <span className="font-bold">500만원</span>, 대출 가능 금액 <span className="font-bold">500만원</span></p>
</div>
</section>
);

const Benefits = () => (
  <section id="benefits" className="mx-auto max-w-[1280px] px-4 py-14 sm:py-20">
    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
      서비스 장점
    </h2>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={Clock}
        title="5분 이내 입금 완료"
        desc="신청 후 빠르게 입금됩니다."
      />
      <StatCard
        icon={ShieldCheck}
        title="최대 3000만원"
        desc="남은 한도 내에서 현금 마련 가능"
      />
      <StatCard
        icon={CreditCard}
        title="신용점수 영향 없음"
        desc="카드 한도 기반 승인"
      />
      <StatCard
        icon={CalendarClock}
        title="365일 24시간"
        desc="언제든지 신청 가능"
      />
    </div>
  </section>
);

const Eligibility: React.FC = () => (
<section className="mx-auto max-w-[1280px] px-4 py-14 sm:py-20">
<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>이용 가능 대상</h2>
<ul className="mt-6 space-y-3 text-gray-700 text-lg">
<li>· 본인 명의의 신용카드, 휴대폰 소지자</li>
<li>· 사용 가능한 카드 한도 보유</li>
<li>· 사업자의 경우 사업자 대표가 신청 가능</li>
</ul>
</section>
);

const Steps: React.FC = () => (
<section className="mx-auto max-w-[1280px] px-4 py-14 sm:py-20">
<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>휴대폰으로 간편하게 진행 가능</h2>
<ol className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
{["사이트 하단 상담 버튼 클릭","본인 확인","신용카드 남은 한도 확인","서비스 진행 후 입금"].map((t, i) => (
<li key={i} className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-8 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-blue-600 text-white grid place-items-center font-bold">{i+1}</div>
<h3 className="text-xl font-semibold text-gray-900" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>Step {i+1}</h3>
</div>
<p className="mt-3 text-gray-700" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>{t}</p>
</li>
))}
</ol>
</section>
);

const TICKER_ITEMS = [
{ time: "3분 전", name: "김OO", amount: "2,500,000원", status: "상담중" },
{ time: "12분 전", name: "박OO", amount: "1,200,000원", status: "상담중" },
{ time: "20분 전", name: "최OO", amount: "3,000,000원", status: "상담중" },
{ time: "29분 전", name: "이OO", amount: "800,000원", status: "입금완료" },
{ time: "41분 전", name: "정OO", amount: "1,500,000원", status: "입금완료" },
{ time: "1시간 전", name: "윤OO", amount: "2,800,000원", status: "입금완료" },
{ time: "1시간 전", name: "한OO", amount: "1,000,000원", status: "입금완료" },
{ time: "1시간 전", name: "송OO", amount: "2,200,000원", status: "입금완료" },
{ time: "1시간 전", name: "오OO", amount: "900,000원", status: "입금완료" },
{ time: "1시간 전", name: "문OO", amount: "1,700,000원", status: "입금완료" },
];


const Row = ({ item }: { item: typeof TICKER_ITEMS[number] }) => (
<div className="flex items-center justify-between h-14 px-4 border-b last:border-b-0 border-blue-100/60 bg-white/60">
<div className="flex items-center gap-3 text-sm sm:text-base">
<span className="text-gray-500 w-16 shrink-0">{item.time}</span>
<span className="text-gray-900 font-medium w-16 shrink-0">{item.name}</span>
<span className="text-gray-800">{item.amount}</span>
</div>
<span className={`text-xs sm:text-sm rounded-full px-2.5 py-1 font-semibold ${item.status === '상담중' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{item.status}</span>
</div>
);

const ConsultTicker: React.FC = () => {
const reduceMotion = useReducedMotion();
const [isPaused, setIsPaused] = useState(false);
const rowHeight = 56; // h-14
const visible = 5;
const totalHeight = rowHeight * visible;


return (
<div className="rounded-2xl border border-blue-100 bg-white overflow-hidden shadow-sm">
<div className="h-14 px-6 flex items-center justify-between bg-blue-50/60 border-b border-blue-100">
<h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>실시간 상담 현황</h3>
<button type="button" aria-pressed={isPaused} className="text-xs sm:text-sm rounded-lg px-3 py-1.5 border border-blue-200 text-blue-700 bg-white hover:bg-blue-50" onClick={() => setIsPaused(p => !p)}>
{isPaused ? "재생" : "일시정지"}
</button>
</div>
<div className="relative" style={{ height: totalHeight }}>
{reduceMotion || isPaused ? (
<div>
{TICKER_ITEMS.slice(0, visible).map((it, idx) => <Row key={idx} item={it} />)}
</div>
) : (
<motion.div aria-label="실시간 상담 현황 리스트" className="absolute inset-0" animate={{ y: [0, -(rowHeight * (TICKER_ITEMS.length))] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
{[...TICKER_ITEMS, ...TICKER_ITEMS].map((it, idx) => <Row key={idx} item={it} />)}
</motion.div>
)}
</div>
<div className="p-4 text-xs text-gray-500 bg-white/70">* 상단 5개 항목이 우선 표시되며, 목록은 아래에서 위로 자동 스크롤됩니다. (접근성: 사용자의 &apos;감소된 모션&apos; 또는 일시정지 설정을 존중합니다.)</div>
</div>
);
};


const ContactButtons: React.FC<{ large?: boolean }> = ({ large }) => (
<div className={`flex gap-3 ${large ? 'w-full sm:w-auto sm:justify-center' : ''}`}>
<a href={`tel:${PHONE}`} className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 text-white ${large ? 'px-6 py-4 text-lg' : 'px-4 py-3 text-base'} shadow-lg shadow-blue-700/20 hover:bg-blue-800 transition`} aria-label="전화 상담" onClick={() => track("cta_call_click", { location: large ? "cta_block" : "floating" })}>
<Phone className="h-5 w-5" /> 전화 상담
</a>
<a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 text-gray-900 ${large ? 'px-6 py-4 text-lg' : 'px-4 py-3 text-base'} hover:brightness-95 transition`} aria-label="카톡 상담" onClick={() => track("cta_kakao_click", { location: large ? "cta_block" : "floating" })}>
<MessageCircle className="h-5 w-5" /> 카톡 상담
</a>
<a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 text-white ${large ? 'px-6 py-4 text-lg' : 'px-4 py-3 text-base'} hover:bg-sky-700 transition`} aria-label="텔레그램 상담" onClick={() => track("cta_telegram_click", { location: large ? "cta_block" : "floating" })}>
<Send className="h-5 w-5" /> 텔레그램 상담
</a>
</div>
);


const FloatingCtas: React.FC = () => (
<div className="fixed bottom-4 right-4 z-50 flex flex-col sm:flex-row gap-2">
<a href={`tel:${PHONE}`} className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 text-white shadow-lg hover:scale-105 transition" aria-label="전화 상담" onClick={() => track("cta_call_click", { location: "floating" })}><Phone className="h-5 w-5" /></a>
<a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 text-gray-900 shadow-lg hover:scale-105 transition" aria-label="카톡 상담" onClick={() => track("cta_kakao_click", { location: "floating" })}><MessageCircle className="h-5 w-5" /></a>
<a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 transition" aria-label="텔레그램 상담" onClick={() => track("cta_telegram_click", { location: "floating" })}><Send className="h-5 w-5" /></a>
</div>
);

const LeadForm = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [agree, setAgree] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const disabled = status === "submitting";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) return;
    if (!name.trim() || !/^[0-9\-\s()+]{8,}$/.test(phone)) return;
    try {
      setStatus("submitting");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        track("lead_submit_success");
        setName("");
        setPhone("");
        setAgree(false);
      } else {
        setStatus("error");
        track("lead_submit_error");
      }
    } catch {
      setStatus("error");
      track("lead_submit_error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md mx-auto bg-white p-6 rounded-xl border border-blue-100 shadow-sm" noValidate>
      <label className="block mb-3">
        <span className="text-gray-700">이름</span>
        <input
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">연락처</span>
        <input
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="010-1234-5678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <label className="flex items-start gap-2 mb-4">
        <input type="checkbox" required className="mt-1" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span className="text-sm text-gray-600">
          개인정보 수집 및 이용에 동의합니다. <a href="/privacy" className="underline">자세히</a>
        </span>
      </label>
      <button type="submit" data-cta="lead-form-submit" disabled={disabled || !agree} className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 font-semibold">
        {status === "submitting" ? "전송 중..." : status === "success" ? "접수 완료" : "상담 요청"}
      </button>
      {status === "error" && <p className="mt-3 text-sm text-red-600">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>}
    </form>
  );
};

const CTASection: React.FC = () => (
<section id="apply" className="relative">
<div className={`absolute inset-0 -z-10 bg-gradient-to-b ${BLUE_GRADIENT} opacity-10`} />
<div className="mx-auto max-w-[1280px] px-4 py-16 sm:py-24">
<div className="rounded-3xl border border-blue-100 bg-white/80 backdrop-blur p-8 sm:p-12 text-center shadow-sm">
<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>라라머니로 지금 바로 현금 마련 하세요</h2>
<p className="mt-4 text-gray-600 text-lg">전화, 카톡, 텔레그램으로 빠르게 상담받을 수 있어요. 또는 아래 폼으로 간편 접수!</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-center"><ContactButtons large /></div>
<LeadForm />
</div>
</div>
</section>
);

const Compliance: React.FC = () => (
<section className="mx-auto max-w-[1280px] px-4 py-10">
<h2 className="text-xl sm:text-2xl font-bold text-gray-900">유의사항 및 법적 고지 (예시 템플릿)</h2>
<ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
<li>• 본 서비스는 신용카드 잔여 한도 범위 내에서 이용 가능하며, 카드사 심사 결과에 따라 달라질 수 있습니다.</li>
<li>• 예시의 입금 소요 시간(“5분”)은 평균 처리 기준으로, 본인확인/카드사 시스템 상황에 따라 지연될 수 있습니다.</li>
<li>• 수수료/금리, 연체 시 불이익 등 상세 조건은 상담 시 안내드리며, 관련 법령 및 카드사 정책을 따릅니다.</li>
<li>• “신용점수 영향 없음” 관련 문구는 서비스 유형/진행 방식에 따라 달라질 수 있으므로, 적용 범위와 예외를 상담 과정에서 확인해주세요.</li>
<li>• 대출모집인·대리인 고지, 개인정보 처리방침, 이용약관 등 필수 고지 문서는 페이지 하단에서 확인할 수 있습니다.</li>
</ul>
</section>
);

const Footer = () => (
  <footer className="mx-auto max-w-[1280px] px-4 py-10 text-sm text-gray-500 space-y-4">
    <p>
      ※ 실제 금융상품 안내 시 관련 법령에 따른 고지 및 유의사항, 수수료·금리
      정보 등을 함께 제공해야 합니다.
    </p>
    <p>
      <a href="/privacy" className="underline">
        개인정보처리방침
      </a>{" "}
      |{" "}
      <a href="/terms" className="underline">
        이용약관
      </a>
    </p>
  </footer>
);

const Page: React.FC = () => (
<div className="min-h-screen bg-white text-gray-900" style={{fontFamily:'Pretendard,system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Apple SD Gothic Neo,sans-serif'}}>
<JsonLd />
<Header />
<main>
<Hero />
<WhatIs />
<Benefits />
<Eligibility />
<section className="mx-auto max-w-[1280px] px-4 py-14 sm:py-20"><ConsultTicker /></section>
<Steps />
<CTASection />
<Compliance />
</main>
<Footer />
<FloatingCtas />
</div>
);

export default Page;
