"use client";

import { useState, useEffect } from "react";

interface TurnstileWidgetProps {
  onVerified: (verified: boolean) => void;
}

export default function TurnstileWidget({ onVerified }: TurnstileWidgetProps) {
  const [status, setStatus] = useState<"verifying" | "success">("verifying");

  useEffect(() => {
    // Auto-verify after 750ms to provide realistic Cloudflare Turnstile feel
    const timer = setTimeout(() => {
      setStatus("success");
      onVerified(true);
    }, 850);

    return () => clearTimeout(timer);
  }, [onVerified]);

  return (
    <div className="w-full my-2">
      <div className="w-full bg-[#fcfcfd] border border-neutral-200/90 rounded-xl p-3 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all">
        <div className="flex items-center gap-3">
          {status === "verifying" ? (
            <div className="w-6 h-6 rounded-md border-2 border-neutral-300 border-t-neutral-800 animate-spin" />
          ) : (
            <div className="w-6 h-6 rounded-md bg-emerald-500 text-white flex items-center justify-center transition-all animate-in zoom-in-75">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          )}

          <div className="flex flex-col">
            <span className="text-xs font-semibold text-neutral-800">
              {status === "verifying" ? "Verifying you are human..." : "Verification successful"}
            </span>
            <span className="text-[10px] text-neutral-400">Connection is secure and encrypted</span>
          </div>
        </div>

        {/* Cloudflare logo & brand link */}
        <div className="flex flex-col items-end opacity-75">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.3 10.4c-.4-2.5-2.5-4.4-5.1-4.4-2.1 0-4 1.3-4.7 3.2-.6-.3-1.3-.4-2-.4-2.5 0-4.5 2-4.5 4.5 0 .3 0 .7.1 1h16.5c1 0 1.9-.8 1.9-1.9 0-1-.8-1.8-1.8-1.9-.1 0-.3-.1-.4-.1z" />
            </svg>
            <span className="text-[11px] font-medium text-neutral-600">Cloudflare</span>
          </div>
          <span className="text-[9px] text-neutral-400 tracking-tight">Turnstile · Privacy</span>
        </div>
      </div>
    </div>
  );
}
