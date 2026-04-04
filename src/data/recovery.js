import AfterDVT from "../assets/before-after/After_DVT.png";
import AfterUltra from "../assets/before-after/After_Ultra.webp";
import BeforeDVT from "../assets/before-after/Before_DVT.png";
import BeforeUltra from "../assets/before-after/Before_Ultra.webp";
import PAEAfter from "../assets/before-after/PAE_After.webp";
import PAEBefore from "../assets/before-after/PAE_Before.webp";
import PVDBefore from "../assets/before-after/PVD_Before.png";
import ThyroidAfter from "../assets/before-after/Thyroid_After.webp";
import ThyroidBefore from "../assets/before-after/Thyroid_Before.webp";
import UFEAfter from "../assets/before-after/UFE_After.webp";
import UFEBefore from "../assets/before-after/UFE_Before.webp";
import VaricoceleAfter from "../assets/before-after/Varicocele_After.webp";
import VaricoceleBefore from "../assets/before-after/Varicocele_Before.webp";

export const recoveryJourney = {
  tag: "REAL SUCCESS STORIES",
  heading: "Modern Recovery Excellence",
  description: "Experience the remarkable transformation of our patients across various specialized vascular and interventional treatments.",
  cases: [
    {
      id: "varicose-veins",
      title: "Varicose Veins",
      subtitle: "Laser Ablation Results",
      comparison: {
        before: {
          image: BeforeUltra,
          label: "Before Treatment"
        },
        after: {
          image: AfterUltra,
          label: "After treatment"
        }
      },
      timeline: [
        { week: "Day 0", title: "Immediate Relief", description: "Pinhole entry heals completely, patients walk home same day." },
        { week: "Week 2", title: "Visible Change", description: "Bulging veins begin to flatten as circulation improves." },
        { week: "Week 4", title: "Full Recovery", description: "Treated veins disappear, restoring healthy leg appearance." }
      ]
    },
    {
      id: "dvt-treatment",
      title: "Deep Vein Thrombosis (DVT)",
      subtitle: "Thrombolysis Success",
      comparison: {
        before: {
          image: BeforeDVT,
          label: "Before Treatment"
        },
        after: {
          image: AfterDVT,
          label: "After treatment"
        }
      },
      timeline: [
        { week: "Day 1", title: "Clot Dissolution", description: "Advanced thrombolysis starts clearing blockage immediately." },
        { week: "Week 1", title: "Swelling Down", description: "Leg returns to normal size as venous pressure drops." },
        { week: "Month 1", title: "Valve Health", description: "Proactive healing prevents post-thrombotic syndrome." }
      ]
    },
    {
      id: "thyroid-ablation",
      title: "Thyroid Ablation",
      subtitle: "Thermal Reduction",
      comparison: {
        before: {
          image: ThyroidBefore,
          label: "Before Treatment"
        },
        after: {
          image: ThyroidAfter,
          label: "After Treatment"
        }
      },
      timeline: [
        { week: "Day 0", title: "Pinhole Entry", description: "30-min ablation completed via a tiny needle entry." },
        { week: "Month 1", title: "Visible Effect", description: "External swelling reduces and swallowing difficulty resolves." },
        { week: "Month 6", title: "Full Success", description: "Nodule volume reduced by 80% without any surgical scars." }
      ]
    },
    {
      id: "ufe",
      title: "UFE Treatment",
      subtitle: "Fibroid Embolization",
      comparison: {
        before: {
          image: UFEBefore,
          label: "Before Treatment"
        },
        after: {
          image: UFEAfter,
          label: "After Treatment"
        }
      },
      timeline: [
        { week: "Week 1", title: "Symptom Control", description: "Heavy bleeding and pelvic pressure begin to normalize." },
        { week: "Month 3", title: "Volume Reduction", description: "Fibroids shrink significantly, preserving the uterus." },
        { week: "Year 1", title: "Full Recovery", description: "Complete symptom relief and return to active lifestyle." }
      ]
    },
    {
      id: "varicocele",
      title: "Varicocele",
      subtitle: "Pinhole Embolization",
      comparison: {
        before: {
          image: VaricoceleBefore,
          label: "Before Treatment"
        },
        after: {
          image: VaricoceleAfter,
          label: "After treatment"
        }
      },
      timeline: [
        { week: "Day 0", title: "Pinhole Entry", description: "Wrist puncture access used to block abnormal veins." },
        { week: "Week 2", title: "Heaviness Relief", description: "Scrotal discomfort and visible veins resolve." },
        { week: "Month 3", title: "Flow Restoration", description: "Normal circulation restores fertility parameters." }
      ]
    },
    {
      id: "pae",
      title: "PAE Treatment",
      subtitle: "Prostate Reduction",
      comparison: {
        before: {
          image: PAEBefore,
          label: "Before Treatment"
        },
        after: {
          image: PAEAfter,
          label: "After treatment"
        }
      },
      timeline: [
        { week: "Week 1", title: "Flow Recovery", description: "Urinary symptoms begin to improve noticeably." },
        { week: "Month 3", title: "Gland Shrinkage", description: "Significant volume reduction confirmed by imaging." },
        { week: "Month 6", title: "Quality of Life", description: "Stable relief without surgical risks or side effects." }
      ]
    },
    {
      id: "pvd",
      title: "PVD Angioplasty",
      subtitle: "Limb Rescue",
      comparison: {
        before: {
          image: PVDBefore,
          label: "Before Treatment"
        },
        after: {
          image: PVDBefore,
          label: "After treatment"
        }
      },
      timeline: [
        { week: "Day 1", title: "Flow Restoration", description: "Pinhole procedure immediately clears arterial blockage." },
        { week: "Week 2", title: "Wound Healing", description: "Oxygen reaches tissues, triggering ulcer healing." },
        { week: "Month 1", title: "Mobility", description: "Patient resumes pain-free distance walking." }
      ]
    }
  ]
};
