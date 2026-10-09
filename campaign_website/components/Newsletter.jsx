"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setErrorMsg("");
    setStatus("loading");

    // Simulate clean client-side submission
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="bg-[#35163F] text-[#FAF8F3] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#9B7AE8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center justify-center gap-2">
          <span className="w-6 h-[1.5px] bg-[#9B7AE8]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9B7AE8]">
            A LITTLE INSPIRATION GOES A LONG WAY.
          </span>
          <span className="w-6 h-[1.5px] bg-[#9B7AE8]" />
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F3] leading-[1.15]">
          YOUR NEXT CHAPTER <br />
          <span className="italic font-normal text-[#F0E9FA]">
            STARTS HERE.
          </span>
        </h2>

        <p className="text-base text-[#F0E9FA]/80 font-sans max-w-xl mx-auto leading-relaxed">
          Get new collection updates, campaign stories, and a little encouragement for whatever you're building next.
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="bg-[#51265F]/60 border border-[#9B7AE8] p-6 max-w-md mx-auto text-center space-y-2 animate-in fade-in">
            <CheckCircle2 className="w-8 h-8 text-[#9B7AE8] mx-auto" />
            <h4 className="font-heading text-lg font-bold text-[#FAF8F3]">
              You're on the insider list.
            </h4>
            <p className="text-xs text-[#F0E9FA]/80">
              Welcome to the movement. We'll be in touch when the next capsule drops.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[11px] text-[#9B7AE8] underline underline-offset-4 mt-2 inline-block font-sans hover:text-[#FAF8F3]"
            >
              Sign up another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-2 space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 bg-[#FAF8F3] text-[#242126] font-sans text-sm placeholder:text-[#716A75]/70 outline-none border border-transparent focus:border-[#9B7AE8] rounded-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3.5 bg-[#9B7AE8] hover:bg-[#8654E9] text-[#35163F] font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>{status === "loading" ? "JOINING…" : "COUNT ME IN"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {status === "error" && (
              <p className="text-xs text-red-300 text-left font-sans">{errorMsg}</p>
            )}

            <p className="text-[11px] text-[#F0E9FA]/60 font-sans tracking-wide">
              No noise. Just the good stuff. (Campaign demo subscription).
            </p>
          </form>
        )}

      </div>
    </section>
  );
}
