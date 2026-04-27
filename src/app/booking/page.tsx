import { redirect } from "next/navigation";

interface BookingPageProps {
  searchParams: Promise<{ reg?: string; postcode?: string; service?: string }>;
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;
  const { reg, postcode, service } = params;

  if (reg && postcode && service) {
    const qs = new URLSearchParams({ reg, postcode, service }).toString();
    redirect(`/booking/step-2?${qs}`);
  }

  redirect("/booking/step-1?clear=true");
}
