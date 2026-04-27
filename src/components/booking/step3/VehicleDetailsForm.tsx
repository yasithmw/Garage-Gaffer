"use client";

interface VehicleDetailsValues {
  drivable: boolean;
  instructions: string;
}

interface VehicleDetailsFormProps {
  values: VehicleDetailsValues;
  onChange: (field: keyof VehicleDetailsValues, value: boolean | string) => void;
}

export default function VehicleDetailsForm({ values, onChange }: VehicleDetailsFormProps) {
  return (
    <div className="vdf-wrap">
      <div className="form-group">
        <p className="form-label vdf-radio-label">Is your vehicle drivable if collected?</p>
        <div className="vdf-radios" role="radiogroup" aria-label="Vehicle drivability">
          <label className={`vdf-radio${values.drivable ? " vdf-radio--selected" : ""}`}>
            <input
              type="radio"
              name="drivable"
              checked={values.drivable}
              onChange={() => onChange("drivable", true)}
              className="vdf-radio-input"
            />
            <span className="vdf-radio-indicator" />
            <span className="vdf-radio-text">Yes</span>
          </label>
          <label className={`vdf-radio${!values.drivable ? " vdf-radio--selected" : ""}`}>
            <input
              type="radio"
              name="drivable"
              checked={!values.drivable}
              onChange={() => onChange("drivable", false)}
              className="vdf-radio-input"
            />
            <span className="vdf-radio-indicator" />
            <span className="vdf-radio-text">No</span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="vdf-instructions" className="form-label">
          Additional instructions for the mechanic{" "}
          <span className="vdf-optional">(optional)</span>
        </label>
        <textarea
          id="vdf-instructions"
          placeholder="e.g. The car is parked on the driveway. Please ring the bell on arrival."
          className="form-input vdf-textarea"
          rows={4}
          value={values.instructions}
          onChange={(e) => onChange("instructions", e.target.value)}
        />
      </div>

      <style jsx>{`
        .vdf-wrap { display: flex; flex-direction: column; gap: 4px; }
        .vdf-radio-label { margin-bottom: 10px; }
        .vdf-radios { display: flex; gap: 12px; }
        .vdf-radio {
          display: flex; align-items: center; gap: 8px; cursor: pointer;
          padding: 10px 16px; border-radius: var(--radius-md);
          border: 2px solid var(--color-divider); background: #fff;
          transition: border-color var(--t-fast), background var(--t-fast);
          min-width: 80px; justify-content: center;
        }
        .vdf-radio--selected { border-color: var(--color-brand-primary); background: var(--color-brand-mint); }
        .vdf-radio-input { position: absolute; opacity: 0; width: 0; height: 0; }
        .vdf-radio-indicator {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid var(--color-divider); background: #fff;
          flex-shrink: 0; transition: border-color var(--t-fast), background var(--t-fast);
        }
        .vdf-radio--selected .vdf-radio-indicator {
          border-color: var(--color-brand-primary);
          background: var(--color-brand-primary);
          box-shadow: inset 0 0 0 3px #fff;
        }
        .vdf-radio-text { font-size: 14px; font-weight: 600; color: var(--color-text-primary); }
        .vdf-optional { font-weight: 400; color: var(--color-text-disabled); }
        .vdf-textarea { resize: vertical; min-height: 100px; }

        @media (prefers-reduced-motion: reduce) {
          .vdf-radio, .vdf-radio-indicator { transition: none; }
        }
      `}</style>
    </div>
  );
}
