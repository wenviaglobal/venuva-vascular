export const treatments = {
  tag: "ADVANCED MINIMALLY INVASIVE TREATMENTS",
  title: "Treatments",
  heading: "Advanced Minimally Invasive Treatments",
  description: "We offer a wide range of modern treatments designed to effectively manage vascular and interventional conditions.",
  items: [
    {
      title: "Varicose Veins Treatment",
      description: "Advanced laser and radiofrequency treatments to close damaged veins and restore healthy blood circulation.",
      icon: "Droplets",
      slug: "varicose-veins"
    },
    {
      title: "Thyroid Nodule Ablation",
      description: "Non-surgical treatment that reduces the size of benign thyroid nodules using thermal ablation.",
      icon: "Activity",
      slug: "thyroid-ablation"
    },
    {
      title: "Uterine Fibroid Embolization (UFE)",
      description: "Minimally invasive procedure that shrinks fibroids by blocking their blood supply.",
      icon: "Dna",
      slug: "ufe"
    },
    {
      title: "Varicocele Embolization",
      description: "An image-guided treatment to treat enlarged veins in the scrotum and improve fertility.",
      icon: "Stethoscope",
      slug: "varicocele"
    },
    {
      title: "Deep Vein Thrombosis (DVT) Treatment",
      description: "Catheter-directed thrombolysis for safe and effective removal of blood clots.",
      icon: "HeartPulse",
      slug: "dvt"
    },
    {
      title: "Peripheral Angioplasty (PVD)",
      description: "A procedure to restore blood flow in blocked leg arteries using pinhole technology.",
      icon: "Zap",
      slug: "peripheral-angioplasty"
    },
    {
      title: "Prostate Artery Embolization (PAE)",
      description: "Non-surgical treatment for enlarged prostate helping improve urinary symptoms.",
      icon: "Bone",
      slug: "pae"
    },
    {
      title: "Pain Intervention Procedures",
      description: "Image-guided techniques to manage chronic pain in spine, joints, and nerves.",
      icon: "Smile",
      slug: "pain-intervention"
    },
    {
      title: "Pelvic Congestion Syndrome",
      description: "Advanced embolization for chronic pelvic pain caused by varicose veins in the pelvis.",
      icon: "HeartPulse",
      slug: "pelvic-congestion"
    },
  ],
};

export const treatmentsPage = {
  hero: {
    title: "Advanced Vascular & Interventional Radiology Treatments",
    subheading: "Modern Minimally Invasive Procedures for Effective Medical Care",
    description: "At Venuva Vascular Center, we provide advanced minimally invasive treatments for a wide range of vascular and interventional conditions. Our specialists use modern imaging technology and catheter-based procedures to diagnose and treat complex medical problems safely and effectively.",
    cta: "Book Appointment",
    image: "/treatments/varicose-veins.webp"
  },
  intro: {
    title: "Our Treatments",
    subtitle: "Comprehensive Minimally Invasive Treatment Solutions",
    description: "We offer a wide range of modern image-guided procedures designed to treat vascular and interventional conditions effectively."
  },
  categories: [
    {
      id: "vascular-care",
      title: "Vascular Care",
      icon: "Droplets",
      treatments: [
        { name: "Varicose Veins", slug: "varicose-veins" },
        { name: "DVT Treatment", slug: "dvt" },
        { name: "Peripheral Angioplasty", slug: "peripheral-angioplasty" }
      ]
    },
    {
      id: "womens-health",
      title: "Women's Health",
      icon: "Dna",
      treatments: [
        { name: "Uterine Fibroids (UFE)", slug: "ufe" },
        { name: "Pelvic Congestion", slug: "pelvic-congestion" }
      ]
    },
    {
      id: "mens-health",
      title: "Men's Health",
      icon: "Stethoscope",
      treatments: [
        { name: "Varicocele Embolization", slug: "varicocele" },
        { name: "Prostate Artery Embolization (PAE)", slug: "pae" }
      ]
    },
    {
      id: "specialized-interventions",
      title: "Specialized Care",
      icon: "Activity",
      treatments: [
        { name: "Thyroid Nodule Ablation", slug: "thyroid-ablation" },
        { name: "Pain Intervention", slug: "pain-intervention" }
      ]
    }
  ],
  specialties: [
    {
      id: "varicose-veins",
      title: "Varicose Veins Treatment",
      heading: "Advanced Varicose Vein Treatments at Venuva Vascular",
      description: "At Venuva Vascular, we specialize in minimally invasive, image-guided treatments for varicose veins and other venous disorders. Using US-FDA-approved laser and radiofrequency technologies, our expert specialists safely close damaged veins, restore healthy circulation, and relieve pain and swelling.",
      fullContent: "Most procedures are day-care treatments, allowing patients to walk home the same day with minimal discomfort and fast recovery. With compassionate care and advanced precision, we help every patient regain comfort, confidence, and mobility.",
      whatIs: "Varicose veins are enlarged, twisted veins that appear just beneath the skin, most commonly on the legs, ankles, or feet. While not always dangerous, untreated cases can lead to complications such as non-healing skin ulcers.",
      symptomsDetailed: ["Bulging veins on the legs", "Leg pain, heaviness, or fatigue", "Burning, itching, or swelling"],
      whyImportant: ["Worsening pain and swelling", "Skin ulcers or bleeding", "Deep vein thrombosis (DVT)"],
      benefits: ["10+ years of experience", "Patient-centric care", "USFDA-certified technologies", "Painless day-care treatments", "Same-day recovery"],
      treatmentOptions: [
        { name: "Radiofrequency Ablation (RFA)", desc: "Seals damaged veins using controlled heat. Quick and scar-free." },
        { name: "Laser Ablation (EVLA)", desc: "Precision laser treatment to close diseased veins safely." },
        { name: "Stab Phlebectomy", desc: "Micro-surgical technique to remove surface veins through tiny punctures." }
      ],
      faqs: [
        { q: "What is the recovery time?", a: "Patients walk within hours and return home the same day." }
      ],
      icon: "Droplets",
      image: "/treatments/varicose-veins.webp"
    },
    {
      id: "dvt",
      title: "Deep Vein Thrombosis (DVT) Treatment",
      heading: "DVT Treatment with Catheter-Directed Thrombolysis",
      description: "DVT occurs when a blood clot forms in deep veins. Early diagnosis and treatment are critical to prevent life-threatening complications like pulmonary embolism.",
      fullContent: "Catheter-directed thrombolysis offers direct clot removal or dissolution. It significantly reduces long-term post-thrombotic complications and restores vein patency through a minimally invasive approach.",
      procedureSteps: [
        { step: "Access", detail: "A thin catheter is inserted via a small puncture behind the knee or groin." },
        { step: "Navigation", detail: "Guided directly into the clot using ultrasound and X-ray imaging." },
        { step: "Dissolution", detail: "Thrombolytic medication is infused directly into the clot to dissolve it." }
      ],
      benefits: ["Direct clot removal", "Restoration of vein patency", "Minimally invasive", "Reduced long-term complications"],
      recovery: "Hospital stay of 2-3 days for monitoring. Most resume normal activities within 1-2 weeks.",
      faqs: [
        { q: "What are the signs of DVT?", a: "Swelling, pain, redness, warmth, or heaviness in one leg." }
      ],
      icon: "HeartPulse",
      image: "/treatments/dvt-treatment.webp"
    },
    {
      id: "pain-intervention",
      title: "Pain Intervention Procedures",
      heading: "Minimally Invasive Pain Intervention Treatments",
      description: "Minimally invasive procedures designed to relieve chronic or acute pain in the spine, joints, and nerves by targeting the source of pain directly.",
      fullContent: "Traditional surgeries for chronic pain often involve large incisions. Our interventions offer pinhole puncture procedures without large cuts, providing relief and reducing inflammation effectively.",
      procedureSteps: [
        { step: "Assessment", detail: "Detailed evaluation and identification of exact pain source via imaging." },
        { step: "Procedure", detail: "Nerve blocks, epidural injections, or RFA deliver medication directly to the site." }
      ],
      benefits: ["Same-day discharge", "Targeted pain relief", "Reduced medication reliance", "Rapid recovery"],
      icon: "Smile",
      image: "/treatments/pain-intervention.webp"
    },
    {
      id: "peripheral-angioplasty",
      title: "Peripheral Angioplasty (PVD)",
      heading: "PVD Treatment with Angioplasty & Stenting",
      description: "Peripheral Vascular Disease (PVD) occurs when arteries in the legs become narrowed. Angioplasty restored blood flow using a tiny 2-3 mm puncture.",
      fullContent: "Traditional bypass surgery requires large incisions. Pinhole angioplasty offers faster recovery, shorter hospital stays, and reduced risk of complications without large surgical cuts.",
      procedureSteps: [
        { step: "Access", detail: "Thin catheter inserted through small puncture in groin or wrist." },
        { step: "Restoration", detail: "A balloon is inflated to widen the artery; a stent may be placed to keep it open." }
      ],
      benefits: ["No large cuts", "Faster recovery", "Improved walking ability", "Reduced risk of limb loss"],
      recovery: "Most patients stay overnight and are discharged the next day. Normal activity in 1 week.",
      icon: "Zap",
      image: "/treatments/peripheral-angioplasty.webp"
    },
    {
      id: "thyroid-ablation",
      title: "Thyroid Nodule Ablation",
      heading: "Thyroid Nodule Embolization Treatment",
      description: "Advanced, minimally invasive treatment to shrink benign thyroid nodules effectively without open surgery or scarring.",
      fullContent: "Thyroid nodule embolization provides a safe alternative to conventional surgery, targeting blood vessels to shrink the nodule while preserving normal thyroid function.",
      procedureSteps: [
        { step: "Access", detail: "Thin catheter guided to the arteries supplying the thyroid nodule." },
        { step: "Embolization", detail: "Embolic particles block blood flow, causing the nodule to shrink gradually." }
      ],
      benefits: ["No surgical scars", "Preserves thyroid function", "Same-day discharge", "Minimally invasive"],
      icon: "Activity",
      image: "/treatments/thyroid-ablation.webp"
    },
    {
      id: "ufe",
      title: "Uterine Fibroid Embolization (UFE)",
      heading: "Uterine Fibroid Embolization (UFE) Treatment",
      description: "Non-surgical, minimally invasive procedure for women with symptomatic fibroids. Shrinks fibroids by blocking their blood supply.",
      fullContent: "UFE is an excellent alternative to hysterectomy or myomectomy. It preserves the uterus, avoids surgical scars, and reduces symptoms like heavy bleeding and pelvic pain.",
      benefits: ["Preserves the uterus", "No large incisions", "Short recovery time", "Long-lasting relief"],
      icon: "Dna",
      image: "/treatments/ufe.webp"
    },
    {
      id: "varicocele",
      title: "Varicocele Embolization",
      heading: "Varicocele Embolization Treatment",
      description: "Modern, pinhole treatment for enlarged veins in the scrotum to treat pain and infertility without traditional surgery.",
      fullContent: "Unlike traditional surgery requiring groin incisions, pinhole embolization uses a tiny wrist puncture. It offers faster recovery and excellent success rates for fertility preservation.",
      procedureSteps: [
        { step: "1", detail: "Catheter inserted through wrist vein to reach abnormal testicular vein." },
        { step: "2", detail: "Tiny coils or medical glue used to block the enlarged veins." }
      ],
      benefits: ["No groin incision", "Fast recovery", "Stitch-free", "Improves sperm count"],
      icon: "Stethoscope",
      image: "/treatments/varicocele-embolization.webp"
    },
    {
      id: "pae",
      title: "Prostate Artery Embolization (PAE)",
      heading: "Prostate Artery Embolization (PAE) Treatment",
      description: "Non-surgical treatment for enlarged prostate (BPH) that reduces blood supply to the prostate gland, helping it shrink and improve urinary symptoms.",
      fullContent: "PAE is a minimally invasive alternative to traditional BPH surgery. It uses tiny particles to block blood flow to the prostate, leading to gland shrinkage and symptom relief without the risks of open surgery.",
      benefits: ["No major surgery", "Improved urinary flow", "Quick recovery", "Minimally invasive"],
      procedureSteps: [
        { step: "Navigation", detail: "A catheter is guided to the arteries supplying the prostate gland." },
        { step: "Embolization", detail: "Tiny embolic particles block blood flow, causing the prostate to shrink over time." }
      ],
      faqs: [
        { q: "Is PAE safe?", a: "Yes, it is a minimally invasive, FDA-approved procedure with high success rates." }
      ],
      icon: "Bone",
      image: "/treatments/pae.webp"
    },
    {
      id: "pelvic-congestion",
      title: "Pelvic Congestion Syndrome",
      heading: "Pelvic Congestion Syndrome Treatment",
      description: "Advanced embolization treatment for chronic pelvic pain caused by varicose veins in the pelvis.",
      fullContent: "Pelvic Congestion Syndrome is a common but often undiagnosed cause of chronic pelvic pain. Our specialists use minimally invasive embolization to block the abnormal veins and provide effective relief.",
      benefits: ["Non-surgical", "Highly effective for pelvic pain", "Image-guided precision", "Minimal recovery"],
      procedureSteps: [
        { step: "Diagnosis", detail: "Confirmed via venogram showing valves that aren't working." },
        { step: "Treatment", detail: "Embolization of the ovarian or internal iliac veins using coils." }
      ],
      icon: "HeartPulse",
      image: "/treatments/pelvic-congestion.webp"
    }
  ],
  whyChoose: {
    title: "Why Choose Our Treatments",
    items: [
      "Advanced Imaging Technology",
      "Experienced Specialists",
      "Minimally Invasive Procedures",
      "Faster Recovery Time",
      "High Treatment Success Rate"
    ]
  },
  whenToConsult: {
    title: "When to Consult a Specialist",
    intro: "You should consult a specialist if you experience symptoms such as:",
    symptoms: [
      "Leg pain or swelling",
      "Visible varicose veins",
      "Thyroid swelling",
      "Pelvic pain or heavy bleeding",
      "Circulation problems in legs",
      "Urinary problems due to enlarged prostate",
      "Chronic pain conditions"
    ],
    outro: "Early diagnosis and treatment can prevent complications and improve health outcomes."
  }
};
