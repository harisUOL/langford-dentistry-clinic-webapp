import TreatmentTemplate from "@/components/TreatmentTemplate";

export default function InvisalignPage() {
  return (
    <TreatmentTemplate
      title="Invisalign Clear Aligners"
      description="Straighten your teeth discreetly with comfortable, removable aligners."
      image="/service-2.jpg"
      benefits={[
        "Nearly invisible appearance",
        "Comfortable and removable",
        "Custom-made for precise movement",
        "Suitable for teens and adults",
      ]}
      steps={[
        "Smile consultation and digital scan",
        "Custom Invisalign aligner plan",
        "Treatment with new aligners every 1–2 weeks",
      ]}
    />
  );
}
