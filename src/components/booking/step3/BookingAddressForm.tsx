"use client";

interface BookingAddressValues {
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  phone: string;
}

interface BookingAddressFormProps {
  values: BookingAddressValues;
  onChange: (field: keyof BookingAddressValues, value: string) => void;
}

export default function BookingAddressForm({ values, onChange }: BookingAddressFormProps) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="baf-addr1" className="form-label">Street address</label>
        <input
          id="baf-addr1"
          type="text"
          placeholder="123 Main Street"
          autoComplete="address-line1"
          className="form-input"
          value={values.address1}
          onChange={(e) => onChange("address1", e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="baf-addr2" className="form-label">
          Address line 2 <span className="baf-optional">(optional)</span>
        </label>
        <input
          id="baf-addr2"
          type="text"
          placeholder="Flat, suite, unit etc."
          autoComplete="address-line2"
          className="form-input"
          value={values.address2}
          onChange={(e) => onChange("address2", e.target.value)}
        />
      </div>

      <div className="baf-grid">
        <div className="form-group">
          <label htmlFor="baf-city" className="form-label">City</label>
          <input
            id="baf-city"
            type="text"
            placeholder="Bristol"
            autoComplete="address-level2"
            className="form-input"
            value={values.city}
            onChange={(e) => onChange("city", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="baf-postcode" className="form-label">Postcode</label>
          <input
            id="baf-postcode"
            type="text"
            placeholder="BS1 4DJ"
            autoComplete="postal-code"
            className="form-input"
            value={values.postcode}
            onChange={(e) => onChange("postcode", e.target.value.toUpperCase())}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="baf-phone" className="form-label">Phone number</label>
        <input
          id="baf-phone"
          type="tel"
          placeholder="07700 900 000"
          autoComplete="tel"
          className="form-input"
          value={values.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          required
        />
      </div>

      <style jsx>{`
        .baf-optional { font-weight: 400; color: var(--color-text-disabled); }
        .baf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; }
        @media (max-width: 500px) {
          .baf-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
