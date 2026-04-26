"use client";

import React from "react";
import CompactQuoteWidget from "@/components/CompactQuoteWidget";

interface ServiceHeroProps {
  breadcrumb: {
    parent: string;
    current: string;
  };
  title: React.ReactNode;
  subtitle: string;
  meta: {
    mechanicCount: number;
    quoteTime: string;
  };
  defaultService?: string;
  idSuffix?: string;
}

export default function ServiceHero({
  breadcrumb,
  title,
  subtitle,
  meta,
  defaultService,
  idSuffix,
}: ServiceHeroProps) {
  return (
    <section className="sh-hero">
      <div className="sh-container">
        <div className="sh-head reveal">
          <div className="sh-breadcrumb">
            <span>{breadcrumb.parent}</span>
            <span className="sh-dot" />
            <span className="sh-here">{breadcrumb.current}</span>
          </div>

          <h1 className="sh-h1">{title}</h1>

          <p className="sh-sub">{subtitle}</p>
        </div>

        <div className="reveal">
          <CompactQuoteWidget defaultService={defaultService} idSuffix={idSuffix} />
        </div>

        <div className="sh-meta reveal">
          <span>
            <span className="sh-live-dot" />
            <strong>{meta.mechanicCount}</strong>&nbsp;mechanics live in Bristol
          </span>
          <span className="sh-meta-dot" />
          <span>
            Average quote in <strong>{meta.quoteTime}</strong>
          </span>
          <span className="sh-meta-dot" />
          <span>Free to post — no card needed</span>
        </div>
      </div>

      <style jsx>{`
        .sh-hero {
          position: relative;
          background:
            radial-gradient(1200px 500px at 80% -10%, rgba(13,122,95,0.07), transparent 60%),
            radial-gradient(800px 400px at 10% 100%, rgba(49,167,168,0.06), transparent 60%),
            #F8FAF9;
          overflow: hidden;
          padding: 64px 0 96px;
        }
        .sh-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(13,122,95,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,122,95,0.035) 1px, transparent 1px);
          background-size: 32px 32px;
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
          pointer-events: none;
        }

        .sh-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .sh-head {
          position: relative;
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px;
        }
        .sh-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-rubik), sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #595C5B;
          margin-bottom: 22px;
        }
        .sh-breadcrumb .sh-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #595C5B;
        }
        .sh-breadcrumb .sh-here {
          color: #0D7A5F;
        }
        .sh-h1 {
          font-family: var(--font-open-sans), sans-serif;
          font-size: 60px;
          line-height: 1.02;
          letter-spacing: -1.8px;
          font-weight: 800;
          margin: 0 0 16px;
          color: #1A1E1D;
        }
        .sh-h1 :global(em) {
          font-style: normal;
          color: #0D7A5F;
          font-family: var(--font-open-sans), sans-serif;
          font-weight: 800;
          background: linear-gradient(180deg, transparent 62%, rgba(13,122,95,0.15) 62%);
          padding: 0 2px;
        }
        .sh-sub {
          font-family: var(--font-rubik), sans-serif;
          font-size: 16px;
          line-height: 1.55;
          color: #595C5B;
          max-width: 560px;
          margin: 0 auto;
        }

        .sh-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 22px;
          flex-wrap: wrap;
          font-family: var(--font-rubik), sans-serif;
          font-size: 12.5px;
          color: #595C5B;
        }
        .sh-meta .sh-meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #8A8D8C;
        }
        .sh-meta strong {
          color: #1A1E1D;
          font-weight: 600;
        }
        .sh-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #0D7A5F;
          box-shadow: 0 0 0 0 rgba(13,122,95,0.5);
          animation: sh-pulse 2s infinite;
          display: inline-block;
          margin-right: 4px;
        }
        @keyframes sh-pulse {
          0% { box-shadow: 0 0 0 0 rgba(13,122,95,0.55); }
          70% { box-shadow: 0 0 0 6px rgba(13,122,95,0); }
          100% { box-shadow: 0 0 0 0 rgba(13,122,95,0); }
        }

        @media (max-width: 820px) {
          .sh-hero {
            padding: 48px 0 72px;
          }
          .sh-h1 {
            font-size: 40px;
            letter-spacing: -1.2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sh-live-dot {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
