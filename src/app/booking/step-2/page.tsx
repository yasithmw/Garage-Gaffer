"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useBookingSession, SelectedItem, BookingSession } from "@/components/booking/useBookingSession";
import RepairsTab from "@/components/booking/step2/RepairsTab";
import DiagnosticsTab from "@/components/booking/step2/DiagnosticsTab";
import ServicingTab from "@/components/booking/step2/ServicingTab";
import PriceSummaryPanel from "@/components/booking/step2/PriceSummaryPanel";
import PriceSummaryStickyBar from "@/components/booking/step2/PriceSummaryStickyBar";
import { SERVICING_OPTIONS } from "@/components/booking/mockData";

type ServiceTab = "repairs" | "diagnostics" | "servicing";

const TAB_LABELS: Record<ServiceTab, string> = {
  repairs: "Repairs",
  diagnostics: "Diagnostics",
  servicing: "Servicing & MOT",
};

function calcDealerTotal(items: SelectedItem[]): number {
  return items.reduce((acc, item) => {
    const sv = SERVICING_OPTIONS.find((s) => s.id === item.id);
    return acc + (sv ? sv.dealerPrice : item.price * 1.6);
  }, 0);
}

function Step2Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { getSession, updateSession, markStepComplete } = useBookingSession();

  const [session, setSession] = useState<BookingSession>(() => getSession());
  const [activeTab, setActiveTab] = useState<ServiceTab>("repairs");
  const [selectedWork, setSelectedWork] = useState<SelectedItem[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const reg = searchParams.get("reg");
    const postcode = searchParams.get("postcode");
    const service = searchParams.get("service") as ServiceTab | null;

    if (reg && postcode && service && ["repairs", "diagnostics", "servicing"].includes(service)) {
      updateSession({
        car: { reg, postcode },
        service,
        completedSteps: [1],
      });
      // clean URL
      router.replace("/booking/step-2");
    }

    const s = getSession();
    setSession(s);
    setSelectedWork(s.selectedWork ?? []);
    if (s.service && ["repairs", "diagnostics", "servicing"].includes(s.service)) {
      setActiveTab(s.service as ServiceTab);
    }
    setInitialized(true);
  }, []);

  function handleAdd(item: SelectedItem) {
    setSelectedWork((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  }

  function handleRemove(id: string) {
    setSelectedWork((prev) => prev.filter((i) => i.id !== id));
  }

  function handleNextStep() {
    updateSession({ selectedWork, service: activeTab });
    markStepComplete(2);
    router.push("/booking/step-3");
  }

  if (!initialized) {
    return <div style={{ padding: 40, textAlign: "center", color: "var(--color-text-secondary)" }}>Loading...</div>;
  }

  const dealerTotal = calcDealerTotal(selectedWork);
  const currentSession = { ...session, service: activeTab };

  return (
    <div className="s2-outer">
      <div className="s2-inner container">
        {/* Left panel */}
        <div className="s2-left">
          <div className="s2-header">
            <span className="eyebrow">Step 2 of 4</span>
            <h1 className="s2-title">Select your work</h1>
          </div>

          {/* Service tabs */}
          <div className="s2-tabs" role="tablist">
            {(["repairs", "diagnostics", "servicing"] as ServiceTab[]).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`s2-tab${activeTab === tab ? " s2-tab--active" : ""}`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {TAB_LABELS[tab]}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="s2-tab-content">
            {activeTab === "repairs" && (
              <RepairsTab selectedWork={selectedWork} onAdd={handleAdd} onRemove={handleRemove} />
            )}
            {activeTab === "diagnostics" && (
              <DiagnosticsTab selectedWork={selectedWork} onAdd={handleAdd} onRemove={handleRemove} />
            )}
            {activeTab === "servicing" && (
              <ServicingTab selectedWork={selectedWork} onAdd={handleAdd} onRemove={handleRemove} />
            )}
          </div>
        </div>

        {/* Right sidebar (desktop) */}
        <div className="s2-sidebar">
          <PriceSummaryPanel
            selectedWork={selectedWork}
            session={currentSession}
            onRemove={handleRemove}
            onNextStep={handleNextStep}
            dealerTotal={dealerTotal}
          />
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="s2-sticky-mobile">
        <PriceSummaryStickyBar
          selectedWork={selectedWork}
          session={currentSession}
          onRemove={handleRemove}
          onNextStep={handleNextStep}
          dealerTotal={dealerTotal}
        />
      </div>

      <style jsx>{`
        .s2-outer {
          padding: 32px 0 120px;
        }
        .s2-inner {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 28px;
          align-items: flex-start;
        }
        .s2-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .s2-header { margin-bottom: 4px; }
        .s2-title { font-size: 26px; font-weight: 800; letter-spacing: -0.4px; margin-bottom: 0; }
        .s2-tabs {
          display: flex; gap: 4px;
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: 4px;
        }
        .s2-tab {
          flex: 1; padding: 9px 12px; border-radius: 6px; border: none;
          background: transparent;
          font-family: var(--font-rubik), sans-serif; font-size: 13px; font-weight: 600;
          color: var(--color-text-secondary); cursor: pointer;
          transition: background var(--t-fast), color var(--t-fast);
          white-space: nowrap;
        }
        .s2-tab--active {
          background: #fff; color: var(--color-brand-primary); box-shadow: var(--shadow-sm);
        }
        .s2-tab-content {
          background: #fff; border-radius: var(--radius-xl);
          padding: 24px; box-shadow: var(--shadow-sm);
        }
        .s2-sidebar { }
        .s2-sticky-mobile { display: none; }

        @media (max-width: 960px) {
          .s2-inner {
            grid-template-columns: 1fr;
          }
          .s2-sidebar { display: none; }
          .s2-sticky-mobile {
            display: block;
            position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
          }
          .s2-outer {
            padding-bottom: 90px;
          }
        }

        @media (max-width: 560px) {
          .s2-tabs { flex-direction: column; }
          .s2-outer { padding: 20px 0 90px; }
          .s2-tab-content { padding: 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .s2-tab { transition: none; }
        }
      `}</style>
    </div>
  );
}

export default function Step2Page() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: "center", color: "var(--color-text-secondary)" }}>Loading...</div>}>
      <Step2Content />
    </Suspense>
  );
}
