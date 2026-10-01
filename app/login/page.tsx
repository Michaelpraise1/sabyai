"use client";

import { useState } from "react";
import Link from "next/link";
import AuthSideCard from "../components/AuthSideCard";
import TurnstileWidget from "../components/TurnstileWidget";
import { ToastProvider, useToast } from "../components/Toast";

function LoginForm() {
  const { success, error, info } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [isTurnstileVerified, setIsTurnstileVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      error("Missing fields", "Please enter both your work email and password.");
      return;
    }

    if (!isTurnstileVerified) {
      error("Security verification required", "Please wait for Cloudflare Turnstile to verify.");
      return;
    }

    setIsSubmitting(true);

    // Simulate authentication API call
    setTimeout(() => {
      setIsSubmitting(false);
      success("Welcome back!", `Signed in successfully as ${email}. Redirecting to dashboard...`);
    }, 1200);
  };

  const handleOAuth = (provider: string) => {
    info(`Connecting to ${provider}...`, "Redirecting to single sign-on authentication.");
    setTimeout(() => {
      success("Authenticated!", `Connected via ${provider}. Opening your command center...`);
    }, 1000);
  };

  const handleFillDemo = () => {
    setEmail("alex.morgan@enterprise.ai");
    setPassword("SabySecure2026!");
    success("Demo filled", "Test credentials loaded. Click 'Log in' to proceed.");
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      error("Email required", "Please enter your email address to receive reset instructions.");
      return;
    }
    setForgotPasswordOpen(false);
    success("Password reset sent", `We have emailed password reset instructions to ${resetEmail}.`);
    setResetEmail("");
  };

  return (
    <div className="flex-1 flex flex-col justify-between items-center py-6 px-4 sm:px-8 md:px-12 w-full">
      {/* Top mobile brand header */}
      <div className="w-full flex md:hidden items-center justify-between pb-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8C3 5.24 5.24 3 8 3s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" fill="white" />
              <circle cx="8" cy="8" r="2" fill="black" />
            </svg>
          </div>
          <span className="font-bold text-base text-black tracking-tight">Saby</span>
          <span className="text-[10px] font-semibold bg-black text-white px-1.5 py-0.5 rounded-full">AI</span>
        </Link>
        <Link href="/register" className="text-xs font-semibold text-neutral-600 hover:text-black">
          Create account →
        </Link>
      </div>

      {/* Main Centered Form Card */}
      <div className="mx-auto w-full max-w-md my-auto space-y-6">
        {/* Header matching Tiptap Cloud */}
        <div className="space-y-1.5 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-neutral-100 flex items-center justify-center text-2xl shadow-sm mb-3">
            ⚡
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">
            Log in
          </h1>
          <p className="text-sm text-neutral-500">
            Join teams already working with Saby AI.
          </p>
        </div>

        {/* Quick Demo Credentials Pill */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleFillDemo}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-black bg-neutral-100 hover:bg-neutral-200/80 px-3 py-1.5 rounded-full transition-all border border-neutral-200/60"
          >
            <span>⚡ Demo: Click to autofill test credentials</span>
          </button>
        </div>

        {/* Social SSO Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleOAuth("Google")}
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-neutral-200/90 bg-white hover:bg-neutral-50 text-xs font-medium text-neutral-700 transition shadow-sm active:scale-[0.99]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={() => handleOAuth("GitHub")}
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-neutral-200/90 bg-white hover:bg-neutral-50 text-xs font-medium text-neutral-700 transition shadow-sm active:scale-[0.99]"
          >
            <svg className="w-4 h-4 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-4">
          <div className="border-t border-neutral-200/90" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F5F5F7] px-3 text-xs text-neutral-400 font-medium">
            or continue with
          </span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700" htmlFor="email">
              Work Email
            </label>
            <div className="group relative flex items-center rounded-xl bg-white px-3 border border-neutral-200/90 hover:border-neutral-300 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 transition-all">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full py-2.5 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-neutral-700" htmlFor="password">
                Password
              </label>
              <button
                type="button"
                onClick={() => setForgotPasswordOpen(true)}
                className="text-xs text-neutral-500 hover:text-black hover:underline transition"
              >
                Forgot password?
              </button>
            </div>
            <div className="group relative flex items-center rounded-xl bg-white px-3 border border-neutral-200/90 hover:border-neutral-300 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 transition-all">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full py-2.5 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none pr-8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 text-neutral-400 hover:text-neutral-700 p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center">
            <label className="inline-flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-neutral-300 text-black focus:ring-black accent-black"
              />
              <span className="text-xs text-neutral-600">Remember this device for 30 days</span>
            </label>
          </div>

          {/* Cloudflare Turnstile simulation */}
          <TurnstileWidget onVerified={setIsTurnstileVerified} />

          {/* Submit CTA button */}
          <button
            type="submit"
            disabled={isSubmitting || !isTurnstileVerified}
            className="w-full h-11 bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed font-medium text-sm rounded-xl transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <span>Log in</span>
            )}
          </button>
        </form>

        {/* Register switcher */}
        <div className="pt-2 text-center">
          <div className="border-t border-neutral-200/90 my-5 relative">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-neutral-400 bg-[#F5F5F7] px-3 font-medium">
              Don&apos;t have an account?
            </span>
          </div>
          <Link
            href="/register"
            className="text-xs font-semibold text-neutral-800 hover:text-black underline underline-offset-2 hover:opacity-80 transition"
          >
            Create an account — Start 14-day free trial
          </Link>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotPasswordOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-neutral-200 space-y-4">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-normal text-neutral-900">Reset your password</h3>
              <p className="text-xs text-neutral-500">
                Enter your registered work email and we will send you a secure link to reset your password.
              </p>
            </div>
            <form onSubmit={handleResetPassword} className="space-y-3">
              <input
                type="email"
                required
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 outline-none focus:border-black"
              />
              <div className="flex items-center gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setForgotPasswordOpen(false)}
                  className="px-3 py-1.5 text-xs text-neutral-600 hover:text-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold bg-black text-white rounded-xl hover:bg-neutral-800"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer matching Tiptap Cloud */}
      <footer className="mt-8 text-xs text-center text-neutral-400 flex flex-wrap items-center justify-center gap-2">
        <a href="#" className="hover:text-neutral-700 transition">Legal Notice</a>
        <span>·</span>
        <a href="#" className="hover:text-neutral-700 transition">Privacy Policy</a>
        <span>·</span>
        <a href="#" className="hover:text-neutral-700 transition">Terms of Service</a>
        <span>·</span>
        <a href="#" className="hover:text-neutral-700 transition">System Status</a>
      </footer>
    </div>
  );
}

export default function LoginPage() {
  return (
    <ToastProvider>
      <main className="min-h-screen bg-[#F5F5F7] flex flex-col md:flex-row items-stretch justify-stretch gap-1 p-2 sm:p-3">
        <AuthSideCard mode="login" />
        <LoginForm />
      </main>
    </ToastProvider>
  );
}
