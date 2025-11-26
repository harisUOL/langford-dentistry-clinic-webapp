import TreatmentTemplate from "@/components/TreatmentTemplate";

export default function VeneersPage() {
  return (
    <TreatmentTemplate
      title="Dental Veneers"
      description="Transform your smile with ultra-thin, natural-looking porcelain veneers."
      image="/gallery-3.jpg"
      benefits={[
        "Instant smile transformation",
        "Corrects chips, gaps, and discoloration",
        "Long-lasting and high aesthetic quality",
        "Custom-made for each tooth",
      ]}
      steps={[
        "Smile assessment & scan",
        "Tooth preparation & temporary veneers",
        "Fitting of permanent veneers",
      ]}
    />
  );
}
