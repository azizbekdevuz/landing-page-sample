import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as Record<string, unknown>));
    const name: string = (body?.name ?? "").toString();
    const phone: string = (body?.phone ?? "").toString();

    if (!name.trim() || !/^[0-9\-\s()+]{8,}$/.test(phone)) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    // Placeholder: send to email/webhook/CRM here
    // await fetch(process.env.LEAD_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify({ name, phone }) });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


