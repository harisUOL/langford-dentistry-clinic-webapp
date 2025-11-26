import TreatmentTemplate from "@/components/TreatmentTemplate";

export default function ImplantsPage() {
  return (
    <TreatmentTemplate
      title="Teeth Whitening"
      description="A long-lasting solution to replace missing teeth and restore confidence."
      image="/gallery-2.jpg"
      benefits={[
        "Permanent and natural-looking",
        "Improves chewing and speech",
        "Prevents bone loss",
        "Long-lasting with proper care",
      ]}
      steps={[
        "Consultation and 3D imaging",
        "Implant placement under local anaesthesia",
        "Healing period followed by crown fitting",
      ]}
    />
  );
}
