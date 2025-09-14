export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10 prose prose-blue">
      <h1>개인정보처리방침 (예시)</h1>
      <p>본 문서는 예시입니다. 실제 서비스 제공 시 법률 자문을 거쳐 최신 정책을 반영하세요.</p>
      <h2>수집하는 개인정보 항목</h2>
      <p>이름, 연락처 등 상담에 필요한 최소한의 정보</p>
      <h2>수집 및 이용 목적</h2>
      <p>상담 및 상품 안내, 고객 문의 처리</p>
      <h2>보유 및 이용기간</h2>
      <p>관련 법령 및 내부 방침에 따른 기간 보관 후 파기</p>
      <h2>제3자 제공 및 처리위탁</h2>
      <p>필요 시 고지 및 동의 후 제공</p>
      <h2>문의처</h2>
      <p>연락처: {process.env.NEXT_PUBLIC_PHONE ?? "010-0000-0000"}</p>
    </main>
  );
}


