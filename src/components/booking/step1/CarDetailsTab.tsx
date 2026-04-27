"use client";

const MAKES = ["Audi", "BMW", "Citroën", "Ford", "Honda", "Hyundai", "Kia", "Mazda", "Mercedes-Benz", "Nissan", "Peugeot", "Renault", "Seat", "Skoda", "Toyota", "Vauxhall", "Volkswagen", "Volvo"];

const MODELS_BY_MAKE: Record<string, string[]> = {
  "Audi": ["A1", "A3", "A4", "A5", "A6", "Q3", "Q5", "Q7", "TT"],
  "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "X1", "X3", "X5"],
  "Ford": ["Fiesta", "Focus", "Kuga", "Mondeo", "Puma", "Ranger", "Transit"],
  "Toyota": ["Aygo", "Corolla", "GR Yaris", "RAV4", "Yaris"],
  "Volkswagen": ["Golf", "Passat", "Polo", "T-Cross", "T-Roc", "Tiguan", "Up"],
  "Vauxhall": ["Astra", "Corsa", "Crossland", "Grandland", "Insignia", "Mokka"],
  "Honda": ["Civic", "CR-V", "HR-V", "Jazz"],
  "Hyundai": ["i10", "i20", "i30", "Ioniq", "Kona", "Tucson"],
  "Kia": ["Ceed", "Niro", "Picanto", "Rio", "Sportage", "Stonic"],
  "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "CLA", "E-Class", "GLA", "GLC"],
  "Nissan": ["Juke", "Leaf", "Micra", "Qashqai", "X-Trail"],
  "Peugeot": ["108", "208", "2008", "308", "3008", "508"],
  "Renault": ["Captur", "Clio", "Megane", "Zoe"],
  "Seat": ["Arona", "Ateca", "Ibiza", "Leon", "Tarraco"],
  "Skoda": ["Fabia", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Superb"],
  "Citroën": ["C1", "C3", "C3 Aircross", "C4", "C5 Aircross"],
  "Mazda": ["CX-3", "CX-5", "CX-30", "Mazda2", "Mazda3"],
  "Volvo": ["S60", "S90", "V40", "V60", "V90", "XC40", "XC60", "XC90"],
};

const FUEL_TYPES = ["Petrol", "Diesel", "Hybrid", "Plug-in Hybrid", "Electric", "LPG"];
const ENGINE_SIZES = ["1.0L", "1.2L", "1.4L", "1.5L", "1.6L", "1.8L", "2.0L", "2.5L", "3.0L", "Other"];
const YEARS = Array.from({ length: 26 }, (_, i) => String(2025 - i));

export interface CarDetailsValues {
  make: string;
  model: string;
  fuelType: string;
  engineCapacity: string;
  year: string;
  postcode: string;
}

interface CarDetailsTabProps {
  values: CarDetailsValues;
  onChange: (field: keyof CarDetailsValues, value: string) => void;
}

export default function CarDetailsTab({ values, onChange }: CarDetailsTabProps) {
  const models = values.make ? (MODELS_BY_MAKE[values.make] ?? []) : [];

  return (
    <div>
      <div className="cdt-grid">
        <div className="form-group">
          <label htmlFor="cdt-make" className="form-label">Make</label>
          <select
            id="cdt-make"
            className="form-select"
            value={values.make}
            onChange={(e) => {
              onChange("make", e.target.value);
              onChange("model", "");
            }}
          >
            <option value="">Select make</option>
            {MAKES.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cdt-model" className="form-label">Model</label>
          <select
            id="cdt-model"
            className="form-select"
            value={values.model}
            onChange={(e) => onChange("model", e.target.value)}
            disabled={!values.make}
          >
            <option value="">Select model</option>
            {models.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cdt-fuel" className="form-label">Fuel type</label>
          <select
            id="cdt-fuel"
            className="form-select"
            value={values.fuelType}
            onChange={(e) => onChange("fuelType", e.target.value)}
            disabled={!values.model}
          >
            <option value="">Select fuel type</option>
            {FUEL_TYPES.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cdt-engine" className="form-label">Engine size</label>
          <select
            id="cdt-engine"
            className="form-select"
            value={values.engineCapacity}
            onChange={(e) => onChange("engineCapacity", e.target.value)}
            disabled={!values.fuelType}
          >
            <option value="">Select engine size</option>
            {ENGINE_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cdt-year" className="form-label">Year</label>
          <select
            id="cdt-year"
            className="form-select"
            value={values.year}
            onChange={(e) => onChange("year", e.target.value)}
            disabled={!values.engineCapacity}
          >
            <option value="">Select year</option>
            {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cdt-postcode" className="form-label">Postcode</label>
          <input
            id="cdt-postcode"
            type="text"
            placeholder="e.g. BS1 4DJ"
            autoComplete="postal-code"
            className="form-input"
            value={values.postcode}
            onChange={(e) => onChange("postcode", e.target.value.toUpperCase())}
          />
        </div>
      </div>

      <style jsx>{`
        .cdt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 16px;
        }
        @media (max-width: 500px) {
          .cdt-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
