"use client";
import logo from "@/assets/datadog-icon.svg";
import { ArrowRight, Play, Globe, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans antialiased selection:bg-green-200 selection:text-green-900">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://assets.watermelon.sh/hero-34-bg.avif"
          alt="Nature landscape"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-8 py-6">
          <div className="group flex cursor-pointer items-center gap-2 text-[#2C3329]">
            <div>
              <img src={logo.src} alt="Pawvoire logo" className="h-7 w-7" />
            </div>
            <span className="text-xl font-normal tracking-tight">Pawvoire</span>
          </div>

          <div className="hidden items-center gap-10 text-sm font-medium text-[#41483E] md:flex">
            {["Journey", "Our Story", "What We Offer", "Connect"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="flex min-h-10 items-center transition-colors hover:text-black"
                >
                  {link}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-6">
            <button className="group hidden min-h-10 items-center gap-1.5 text-[14px] font-medium text-[#41483E] transition-colors hover:text-black sm:flex">
              <Globe className="h-4 w-4 opacity-70" />
              <span>EN</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
            </button>
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="flex min-h-10 items-center gap-2 rounded-sm bg-[#343F33] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all will-change-transform hover:bg-[#252D24] active:scale-[0.96]"
            >
              Log In
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </nav>

        {/* Main Hero Content */}
        <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-8 pt-10 pb-24">
          <div className="flex max-w-5xl flex-col items-start">
            {/* Headline — two lines staggered, large blur+rise */}
            <h1 className="mb-6 max-w-4xl text-[4rem] leading-[1.05] font-normal tracking-[-0.02em] text-stone-700 sm:text-[4.5rem]">
              <span className="block">Calm by Nature</span>
              <span className="block">Elegant by Experience</span>
            </h1>

            {/* Subtitle + CTA — delayed after headline */}
            <div className="flex flex-col items-start gap-10">
              <p className="max-w-lg text-lg leading-[1.4] font-normal text-pretty text-stone-600 sm:text-[1.3rem]">
                Crafted to bring balance, clarity, and subtle elegance into your
                everyday digital experience.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button className="group flex min-h-10 items-center gap-2 rounded-sm bg-[#343F33] px-7 py-4 text-[16px] font-medium text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all will-change-transform hover:bg-[#252D24] active:scale-[0.96]">
                  Discover More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button className="group flex min-h-10 items-center gap-3 rounded-sm px-4 py-4 text-[16px] font-medium text-[#2C3329] transition-all will-change-transform hover:opacity-80 active:scale-[0.96]">
                  Watch Demo
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C3329] text-white shadow-md transition-transform group-hover:scale-105">
                    <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
