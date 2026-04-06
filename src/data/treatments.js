import varicoseVeinsImg from "../assets/treatments/Varicose-Vein.webp";
import dvtImg from "../assets/treatments/dvt-treatment.webp";
import painInterventionImg from "../assets/treatments/pain-intervention.webp";
import peripheralAngioplastyImg from "../assets/treatments/peripheral-angioplasty.webp";
import thyroidAblationImg from "../assets/treatments/thyroid-ablation.webp";
import ufeImg from "../assets/treatments/ufe.webp";
import varicoceleImg from "../assets/treatments/Varicocele Embolization .webp";
import bphImg from "../assets/treatments/BPH.webp";
import pelvicCongestionImg from "../assets/treatments/pelvic-congestion.webp";
import taeImg from "../assets/treatments/Thyroid Artery Embolization.webp";
import drainageImg from "../assets/treatments/DrainAge.webp";
import biopsyImg from "../assets/treatments/Biopsy.webp";
import frozenShoulderImg from "../assets/treatments/frozen-shoulder.webp";
import golfersElbowImg from "../assets/treatments/golfers-elbow-medial-epicondylitis.webp";
import kneeOsteoarthritisImg from "../assets/treatments/knee-osteoarthritis.webp";
import plantarFasciitisImg from "../assets/treatments/plantar-fasciitis.webp";
import achillesTendinopathyImg from "../assets/treatments/Achilles tendonopathy.webp";
import jointInjectionImg from "../assets/treatments/Joint-InjectionPRP.webp";
import fistuloplastyImg from "../assets/treatments/Fistuloplasty.webp";
import dialysisCatheterImg from "../assets/treatments/dialysis-catheter.webp";
import liverCancerImg from "../assets/treatments/liver-cancer.webp";
import GAE from '../assets/treatments/GAE.webp'

export const treatments = {
  tag: "ADVANCED MINIMALLY INVASIVE TREATMENTS",
  title: "Treatments",
  heading: "Advanced Minimally Invasive Treatments",
  description: "We offer a wide range of modern treatments designed to effectively manage vascular and interventional conditions.",
  items: [
      {
        title: "Varicose Veins Treatment",
        description: "Advanced thermal and non-thermal solutions like EVLA, RFA, MWA, and VenaSeal™ to restore healthy circulation.",
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
      title: "Deep Vein Thrombosis (DVT)",
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
      description: "Cutting-edge, minimally invasive treatment to shrink the prostate without surgery.",
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
      title: "Pelvic Congestion Syndrome (PCS)",
      description: "Advanced embolization for chronic pelvic pain caused by varicose veins in the pelvis.",
      icon: "HeartPulse",
      slug: "pelvic-congestion"
    },
    {
      title: "Dialysis Catheter Insertion",
      description: "Placement of temporary or long-term catheters for effective hemodialysis or peritoneal dialysis.",
      icon: "Activity",
      slug: "dialysis-catheter"
    },
    {
      title: "Genicular Artery Embolization (GAE)",
      description: "A breakthrough minimally invasive treatment for chronic knee pain due to osteoarthritis.",
      icon: "Activity",
      slug: "genicular-artery-embolization"
    },
  ],
};

export const treatmentsPage = {
  hero: {
    title: "Advanced Vascular & Interventional Radiology Treatments",
    subheading: "Modern Minimally Invasive Procedures for Effective Medical Care",
    description: "At Venuva Vascular Center, we provide advanced minimally invasive treatments for a wide range of vascular and interventional conditions. Our specialists use modern imaging technology and catheter-based procedures to diagnose and treat complex medical problems safely and effectively.",
    cta: "Book Appointment",
    image: varicoseVeinsImg
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
        { name: "Deep Vein Thrombosis (DVT)", slug: "dvt" },
        { name: "Peripheral Angioplasty", slug: "peripheral-angioplasty" },
        { name: "Fistuloplasty", slug: "fistuloplasty" },
        { name: "Dialysis Catheter Insertion", slug: "dialysis-catheter" }
      ]
    },
    {
      id: "womens-health",
      title: "Women's Health",
      icon: "Dna",
      treatments: [
        { name: "Uterine Fibroids (UFE)", slug: "ufe" },
        { name: "Pelvic Congestion Syndrome (PCS)", slug: "pelvic-congestion" }
      ]
    },
    {
      id: "mens-health",
      title: "Men's Health",
      icon: "Stethoscope",
      treatments: [
        { name: "Varicocele Embolization", slug: "varicocele" },
        { name: "Prostate Artery Embolization (PAE)", slug: "pae" },
      ]
    },
    {
      id: "specialized-interventions",
      title: "Specialized Care",
      icon: "Activity",
      treatments: [
        { name: "Thyroid Nodule Ablation", slug: "thyroid-ablation" },
        { name: "Pain Intervention", slug: "pain-intervention" },
        { name: "Thyroid Artery Embolization (TAE)", slug: "tae" },
        { name: "Percutaneous Drainage", slug: "drainage" },
        { name: "Biopsy / FNAC", slug: "biopsy-fnac" }
      ]
    },
    {
      id: "pain-management",
      title: "Pain Management",
      icon: "Smile",
      treatments: [
        { name: "Frozen Shoulder", slug: "frozen-shoulder" },
        { name: "Tennis / Golfer's Elbow", slug: "tennis-elbow" },
        { name: "Knee Osteoarthritis", slug: "knee-osteoarthritis" },
        { name: "Plantar Fasciitis", slug: "plantar-fasciitis" },
        { name: "Achilles Tendinopathy", slug: "achilles-tendinopathy" },
        { name: "Joint Injections", slug: "joint-injections" },
        { name: "Genicular artery Embolization (GAE)", slug: "genicular-artery-embolization" }
      ]
    },
    {
      id: "interventional-oncology",
      title: "Interventional Oncology",
      icon: "Activity",
      treatments: [
        { name: "Liver Cancer (HCC/Metastases)", slug: "liver-cancer" }
      ]
    }
  ],
  specialties: [
    {
      id: "varicose-veins",
      title: "Varicose Veins Treatment",
      heading: "Advanced Varicose Vein Treatments at Venuva Vascular",
      description: "Varicose Veins are swollen, twisted veins that usually appear on the legs. We offer advanced, image-guided thermal and non-thermal solutions that require no hospital stay and minimal downtime.",
      fullContent: "Most procedures are day-care treatments, allowing patients to walk home the same day with minimal discomfort and fast recovery. Using US-FDA-approved laser and radiofrequency technologies, our expert specialists safely close damaged veins, restore healthy circulation, and relieve pain and swelling.",
      whatIs: "Varicose Veins occur when the small valves in the veins stop working properly, allowing blood to flow backward and pool (venous reflux). Ignoring them is not just a cosmetic issue; over time, increased pressure can lead to serious complications.",
      symptomsDetailed: [
        "Visible, bulging blue or dark purple veins",
        "Aching, heavy legs, especially after standing for long periods",
        "Swelling (Edema) in the ankles or feet",
        "Skin changes, such as itching, thinning, or dark discoloration"
      ],
      whyImportant: [
        "Spontaneous bleeding",
        "Painful blood clots",
        "Chronic venous ulcers (open sores) that are difficult to heal",
        "Deep vein thrombosis (DVT)"
      ],
      benefits: [
        "10+ years of experience",
        "Minimal downtime (1–2 days)",
        "No risk of nerve injury (with VenaSeal™)",
        "Painless day-care treatments",
        "No hospital stay required"
      ],
      treatmentOptions: [
        {
          name: "Thermal Ablation (EVLA / RFA / MWA)",
          desc: "Uses laser, radiofrequency, or microwave energy to seal the diseased vein from the inside. Once closed, the body naturally reroutes blood to healthy veins. Patients return to work within 1–2 days."
        },
        {
          name: "VenaSeal™ (Medical Glue)",
          desc: "A revolutionary non-thermal treatment using medical-grade adhesive to seal the vein permanently. No risk of nerve injury and many patients do not need to wear compression stockings afterward."
        },
        {
          name:'Sclerotherapy',
          desc:'Sclerotherapy is a popular, minimally invasive medical procedure used to eliminate varicose veins and spider veins. It involves injecting a solution directly into the affected blood vessels.\n ​The procedure is straightforward and usually performed in a clinic without anesthesia:\n ​Injection: A healthcare provider uses a fine needle to inject a chemical solution (sclerosant) into the vein.'
        }
      ],
      faqs: [
        { q: "What is the recovery time?", a: "Patients are usually walking immediately after the procedure and can return to work within 1–2 days." },
        { q: "Is VenaSeal™ better than thermal ablation?", a: "VenaSeal™ is a 'non-thermal' option that avoids nerve injury risk and the need for multiple anesthetic injections, often eliminating the need for compression stockings." }
      ],
      icon: "Droplets",
      image: varicoseVeinsImg
    },
    {
      id: "dvt",
      title: "Deep Vein Thrombosis (DVT)",
      heading: "Comprehensive DVT Diagnosis and Treatment",
      description: "DVT is a medical condition where a blood clot forms in one or more deep veins, typically in the legs. If left untreated, these clots can travel to the lungs, causing a life-threatening pulmonary embolism.",
      fullContent: "Deep vein thrombosis (DVT) is a medical condition in which a blood clot forms in one or more of the deep veins in the body, typically in the legs. DVT can cause serious health problems because the blood clots can break loose, travel through the bloodstream, and lodge in the lungs, causing a pulmonary embolism (PE). Our advanced interventional treatments focus on removing the clot safely and restoring healthy circulation.",
      whatIs: "DVT occurs when a blood clot forms in deep veins. These clots can block blood flow or, more dangerously, break free and travel to the lungs (Pulmonary Embolism).",
      symptomsDetailed: [
        "Swelling in one leg (rarely both legs).",
        "Pain or tenderness in the leg, often starting in the calf.",
        "Red or discolored skin on the leg.",
        "A feeling of warmth in the affected leg.",
        "Note: Sometimes DVT can occur without any noticeable symptoms."
      ],
      riskFactors: [
        "Prolonged immobility (sitting or lying down for long periods)",
        "Injury or recent surgery causing vein damage",
        "Medical conditions like cancer, heart disease, or inflammatory diseases",
        "Genetics and inherited blood clotting disorders",
        "Hormone therapy or birth control pills",
        "Pregnancy and obesity causing increased vein pressure",
        "Smoking and age (especially over 60)"
      ],
      treatmentOptions: [
        {
          name: "Anticoagulation Therapy",
          desc: "Blood thinners (heparin, warfarin, or DOACs) to prevent clot growth and reduce the risk of new clots."
        },
        {
          name: "Catheter-Directed Thrombolysis",
          desc: "A minimally invasive procedure where a catheter delivers clot-dissolving drugs directly to the site of the blockage."
        },
        {
          name: "Mechanical Thrombectomy",
          desc: "Using a specialized catheter to physically remove the clot from the vein, often combined with thrombolysis."
        },
        {
          name: "IVC Filter Placement",
          desc: "Inserting a small metal device in the inferior vena cava to catch and prevent clots from reaching the lungs."
        },
        {
          name: "Compression Therapy",
          desc: "Use of medical-grade compression stockings to reduce swelling and prevent post-thrombotic syndrome."
        }
      ],
      benefits: [
        "Prevents life-threatening Pulmonary Embolism",
        "Restores normal blood flow immediately",
        "Reduces risk of long-term leg swelling (post-thrombotic syndrome)",
        "Minimally invasive 'pinhole' procedures",
        "Faster recovery than traditional surgery"
      ],
      procedureSteps: [
        { step: "Access", detail: "A thin catheter is inserted via a small puncture, usually behind the knee or in the groin." },
        { step: "Imaging", detail: "The clot is located precisely using real-time ultrasound and X-ray (fluoroscopy)." },
        { step: "Removal", detail: "Clots are dissolved using medication or physically removed using mechanical thrombectomy devices." }
      ],
      prevention: [
        "Regular leg exercises to improve circulation",
        "Frequent movement during long travel",
        "Maintaining a healthy weight and staying hydrated",
        "Using compression stockings if at high risk"
      ],
      recovery: "Hospital stay of 2-3 days for monitoring. Most patients resume normal activities within 1-2 weeks.",
      faqs: [
        { q: "What are the warning signs of DVT?", a: "Look for sudden swelling, pain, redness, or warmth in one leg. If you also have chest pain or shortness of breath, seek emergency care immediately." }
      ],
      icon: "HeartPulse",
      image: dvtImg
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
      image: painInterventionImg
    },
    {
      id: "peripheral-angioplasty",
      title: "Peripheral Angioplasty (PVD)",
      heading: "PVD Treatment with Angioplasty & Stenting",
      description: "Peripheral Vascular Disease (PVD) occurs when arteries in the legs become narrowed. Angioplasty restored blood flow using a tiny 2-3 mm puncture.",
      fullContent: "Peripheral vascular disease (PVD) is progressive ciculation disorder characterised by narrowing, blockage or spasms in blood vessels . Arteries are most commonly involved so it is also called peripheral arterial disease (PAD)",
      whatIs: "Peripheral vascular disease (PVD) is progressive ciculation disorder characterised by narrowing, blockage or spasms in blood vessels . Arteries are most commonly involved so it is also called peripheral arterial disease (PAD)",
      causes: [
        "Buildup of fatty, cholesterol containing deposits (plaques) on artery walls known as atherosclerosis, which reduces blood flow to the limbs",
        "Blood vessel inflammation",
        "Injury to the arms or legs",
        "Changes in the muscles or ligaments",
        "Radiation exposure",
        "Infection"
      ],
      symptomsDetailed: [
        "Intermittent claudication - Pain after walking certain distance",
        "Hair loss on your legs and feet",
        "Numbness or weakness in the legs",
        "Brittle, slow-growing toenails",
        "Ulcers (open sores) on your feet and legs, which do not heal",
        "Changing skin colour on your legs, such as turning paler than usual or blue",
        "Shiny skin",
        "The muscles in your legs shrinking (wasting)"
      ],
      riskFactors: [
        "Smoking",
        "Diabetes",
        "Family history of peripheral artery disease, heart disease or stroke",
        "High blood pressure",
        "High cholesterol",
        "Increasing age, especially after 65 (or after 50 if you have risk factors for atherosclerosis)",
        "Obesity (a body mass index over 30)",
        "High levels of an amino acid called homocysteine"
      ],
      lifestyleChanges: [
        "Stop smoking",
        "Exercise regularly",
        "Eat a healthy diet that’s low in fats and cholesterol",
        "Manage underlying conditions like diabetes or high blood pressure"
      ],
      medications: [
        "Blood thinners",
        "Pain management",
        "Cholesterol tablets",
        "Anti hypertensives",
        "Anti diabetic tablets"
      ],
      procedureSteps: [
        { step: "Angioplasty", detail: "A procedure to restore blood flow in blocked leg arteries using pinhole technology." },
        { step: "Stenting", detail: "Placement of a tiny mesh tube to keep the artery open after angioplasty." },
        { step: "Thrombolysis", detail: "Using medication to dissolve blood clots directly within the artery." }
      ],
      benefits: ["No large cuts", "Faster recovery", "Improved walking ability", "Reduced risk of limb loss"],
      recovery: "Most patients stay overnight and are discharged the next day. Normal activity in 1 week.",
      icon: "Zap",
      image: peripheralAngioplastyImg
    },
    {
      id: "thyroid-ablation",
      title: "Thyroid Nodule Ablation",
      heading: "Thermal Ablation: The Scarless Alternative to Surgery",
      description: "Advanced, minimally invasive pinhole treatment that preserves your natural thyroid function without open surgery or scarring.",
      fullContent: "Historically, large nodules required a thyroidectomy (surgical removal). This involved general anesthesia, a permanent neck scar, and often a lifelong dependency on thyroid hormone replacement medication. At Venuva Vascular Center, we offer Thyroid Ablation, a specialized \"pinhole\" treatment that preserves your natural thyroid function.",
      whatIs: "A thyroid nodule is a growth of cells within your thyroid gland. While the discovery of a lump in the neck can be concerning, the vast majority—over 90%—are benign (non-cancerous). However, even benign nodules can cause physical and aesthetic issues as they enlarge.",
      symptomsDetailed: [
        "Compressive Symptoms: Difficulty swallowing, a persistent 'globus' sensation (feeling of a lump in the throat), or a frequent cough.",
        "Cosmetic Concerns: A visible bulge or goiter in the lower neck.",
        "Voice Changes: Mild hoarseness if the nodule presses against the laryngeal nerves."
      ],
      whyImportant: [
        "Worsening tracheal compression making breathing uncomfortable",
        "'Toxic' transformation causing overproduction of thyroid hormones (hyperthyroidism)"
      ],
      treatmentOptions: [
        {
          name: "Radiofrequency Ablation (RFA)",
          desc: "Under local anesthesia and ultrasound guidance, a fine needle-electrode generates localized heat destroying the nodule (thermal necrosis) while leaving healthy thyroid intact. Over several months, the body naturally absorbs it."
        },
        {
          name: "Microwave Ablation (MWA)",
          desc: "Utilizes microwave energy to create a highly predictable heat zone. MWA is often faster and particularly effective for very large nodules or cystic nodules."
        }
      ],
      benefits: [
        "No General Anesthesia (you remain awake)",
        "No Scars (heals like a tiny freckle)",
        "Preserves Function (no daily thyroid tablets needed)"
      ],
      icon: "Activity",
      image: thyroidAblationImg
    },
    {
      id: "ufe",
      title: "Uterine Fibroid Embolization (UFE)",
      heading: "Uterine Fibroid Embolization (UFE) Treatment",
      description: "Uterine fibroids are non-cancerous growths in the uterus that affect millions of women. While often benign, they can significantly impact your quality of life.",
      fullContent: "Uterine Fibroid Embolization (UFE) is a breakthrough, minimally invasive procedure that treats fibroids without the need for a hysterectomy or major surgery. Tiny particles (embolic agents) are injected to block the blood supply to the fibroids. Deprived of oxygen and nutrients, the fibroids shrink and die.",
      whatIs: "Uterine fibroids are non-cancerous growths in the uterus that affect millions of women. While often benign, they can significantly impact your quality of life.",
      symptomsDetailed: [
        "Heavy or prolonged menstrual bleeding (leading to anemia)",
        "Pelvic pain or a feeling of 'bulk' and pressure",
        "Frequent urination due to bladder compression",
        "Pain during intercourse"
      ],
      whyImportant: [
        "Chronic fatigue from blood loss",
        "Severe pelvic pain",
        "Complications during pregnancy",
        "Continued growth of untreated fibroids"
      ],
      procedureSteps: [
        { step: "Access", detail: "An interventional radiologist makes a tiny incision in the wrist or groin to thread a thin catheter toward the uterine arteries." },
        { step: "Mechanism", detail: "Tiny particles (embolic agents) are injected to block the blood supply to the fibroids." },
        { step: "Result", detail: "Deprived of oxygen and nutrients, the fibroids shrink and die." }
      ],
      benefits: [
        "Preserve the uterus (avoids hysterectomy)",
        "Much shorter recovery time (typically 1 week)",
        "Minimal scarring (pinhole procedure)",
        "High success rates in symptom relief"
      ],
      recovery: "Typically recovery takes about 1 week, much shorter than traditional abdominal surgery.",
      icon: "Dna",
      image: ufeImg
    },
    {
      id: "varicocele",
      title: "Varicocele",
      heading: "Varicocele Treatment with Modern Embolization",
      description: "A varicocele is an enlargement of the veins within the scrotum, similar to a varicose vein in the leg. It occurs when valves inside the veins fail to flow blood properly, causing it to pool and swell.",
      fullContent: "Varicocele Embolization is a minimally invasive, image-guided procedure performed by an Interventional Radiologist. Unlike traditional surgery, it requires no large incisions. Blood is naturally rerouted to healthy veins, relieving pressure and pain.",
      whatIs: "A varicocele is an enlargement of the veins within the scrotum, similar to a varicose vein in the leg. It occurs when valves inside the veins fail to flow blood properly, causing it to pool and swell.",
      symptomsDetailed: [
        "A dull, aching pain or heaviness in the scrotum",
        "Visible 'bag of worms' appearance",
        "Testicular atrophy (shrinking)"
      ],
      whyImportant: [
        "Male infertility",
        "Decreased testosterone production",
        "Sperm quality damage due to increased scrotal temperature"
      ],
      procedureSteps: [
        { step: "Access", detail: "A tiny catheter is inserted through a small nick in the skin (usually the groin or neck)." },
        { step: "Embolization", detail: "Using X-ray guidance, small coils or sclerosant agents are placed to block blood flow to the affected vein." },
        { step: "Result", detail: "Blood is naturally rerouted to healthy veins, relieving pressure and pain." }
      ],
      benefits: [
        "Walk-in, walk-out procedure",
        "Faster recovery and less pain",
        "Lower risk of infection",
        "No large incisions",
        "Excellent success rates for fertility preservation"
      ],
      icon: "Stethoscope",
      image: varicoceleImg
    },
    {
      id: "pae",
      title: "Prostate enlargement / Benign prostatic hyperplasia",
      heading: "Comprehensive BPH Treatment with PAE",
      description: "As men age, the prostate gland often enlarges, a condition known as Benign Prostatic Hyperplasia (BPH). While non-cancerous, an enlarged prostate compresses the urethra, leading to significant urinary difficulties.",
      fullContent: "Prostate Artery Embolization (PAE) is a cutting-edge, minimally invasive treatment performed by an Interventional Radiologist to shrink the prostate without traditional surgery (like TURP).",
      whatIs: "As men age, the prostate gland often enlarges, a condition known as Benign Prostatic Hyperplasia (BPH). While non-cancerous, an enlarged prostate compresses the urethra, leading to significant urinary difficulties.",
      symptomsDetailed: [
        "Frequent urination, especially at night (nocturia)",
        "Weak or interrupted urinary stream",
        "Difficulty starting urination or a feeling that the bladder isn't empty",
        "Urgent need to urinate"
      ],
      whyImportant: [
        "Acute urinary retention (sudden inability to urinate)",
        "Urinary tract infections (UTIs)",
        "Bladder stones",
        "Kidney damage due to back-pressure"
      ],
      procedureSteps: [
        { step: "Access", detail: "Under local anesthesia, a micro-catheter is guided through the radial artery (wrist) or femoral artery (groin) to the prostate vessels." },
        { step: "Mechanism", detail: "Microscopic particles are released to partially block blood flow to the prostate, causing it to soften and shrink over weeks." }
      ],
      benefits: [
        "No Sexual Side Effects: Near-zero risk of impotence or retrograde ejaculation.",
        "No Catheter Needed: Most patients do not require a urinary catheter after the procedure.",
        "Rapid Recovery: Return home the same day and resume normal activities within 48 hours."
      ],
      icon: "Bone",
      image: bphImg
    },
    {
      id: "pelvic-congestion",
      title: "Pelvic Congestion Syndrome (PCS)",
      heading: "Ovarian Vein Embolization (OVE): The Gold Standard",
      description: "Pelvic Congestion Syndrome (PCS) is a chronic pain condition in women caused by varicose veins in the pelvis. Much like varicose veins in the legs, the valves in the ovarian and internal iliac veins fail, causing blood to pool and the veins to become painfully engorged.",
      fullContent: "At Venuva Vascular Center, we treat the root cause of the pain through a minimally invasive, image-guided procedure called Pelvic Vein Embolization. Up to 80–90% of women report significant pain relief after this procedure.",
      whatIs: "PCS is often misdiagnosed as endometriosis or IBS. It occurs when ovarian veins become enlarged and congested, leading to chronic, debilitating pelvic pain. Ignoring it can lead to years of pain and more extensive leg varicosities.",
      symptomsDetailed: [
        "Chronic Pelvic Pain: A dull, heavy ache in the lower abdomen that worsens throughout the day, especially after standing.",
        "Post-Coital Pain: Discomfort that increases after intercourse.",
        "Visible Varicosities: Varicose veins appearing on the vulva, buttocks, or upper thighs.",
        "Bladder Irritability: A frequent urge to urinate without an underlying infection."
      ],
      whyImportant: [
        "Chronic pain significantly impacting mental health, physical activity, and intimacy.",
        "Constant pressure can lead to more extensive leg varicosities that are difficult to treat.",
        "Debilitating chronic pain lasting for years."
      ],
      procedureSteps: [
        { step: "Access", detail: "Under local anesthesia, a tiny catheter is inserted through a 'pinhole' in the neck or groin." },
        { step: "Navigation", detail: "Using X-ray guidance, the Interventional Radiologist navigates to the diseased ovarian veins." },
        { step: "Mechanism", detail: "Small medical-grade coils or a specialized foam (sclerosant) are placed inside the malfunctioning veins to seal them shut permanently." },
        { step: "Result", detail: "The pooled blood is naturally rerouted to healthy, functional veins, relieving the internal pressure and eliminating the source of chronic pain." }
      ],
      benefits: [
        "High Success Rate: Up to 80–90% of women report significant pain relief.",
        "No Hospital Stay: Most patients return home within a few hours.",
        "Quick Recovery: You can typically resume normal activities within 2–3 days.",
        "No surgical scars (pinhole procedure)."
      ],
      icon: "HeartPulse",
      image: pelvicCongestionImg
    },
    {
      id: "tae",
      title: "Thyroid Artery Embolization (TAE)",
      heading: "Thyroid Artery Embolization (TAE) Treatment",
      description: "A sophisticated vascular procedure designed to shrink the thyroid by addressing its blood supply without surgery.",
      fullContent: "While many thyroid nodules are treated directly with ablation, some cases—such as very large, multinodular goiters or hyperfunctioning glands—require a different approach. Thyroid Artery Embolization (TAE) is a sophisticated vascular procedure designed to shrink the thyroid by addressing its blood supply.",
      whatIs: "Unlike RFA or MWA, which treat the nodule from the 'inside out,' TAE works from the 'outside in' by cutting off the fuel line to the enlarged tissue.",
      symptomsDetailed: [
        "Severe neck pressure: Feeling of choking or difficulty breathing when lying down.",
        "Swallowing issues: Food getting 'stuck' in the mid-throat area.",
        "Hyperthyroidism symptoms: Rapid heartbeat, tremors, and heat intolerance."
      ],
      whyImportant: [
        "Ignoring a large, bulky goiter can lead to progressive tracheal deviation (shifting of the windpipe)",
        "May eventually require emergency surgery if the airway becomes compromised."
      ],
      procedureSteps: [
        { step: "Procedure", detail: "Under local anesthesia, an Interventional Radiologist inserts a micro-catheter through a tiny pinhole in the wrist or groin. Using advanced X-ray guidance, the catheter is navigated to the superior or inferior thyroid arteries." },
        { step: "Mechanism", detail: "Tiny, biocompatible particles (embolic agents) are injected into the specific vessels feeding the enlarged thyroid tissue." },
        { step: "Result", detail: "Deprived of its blood supply, the overactive or bulky tissue begins to starve and shrink significantly over several months." }
      ],
      benefits: [
        "No Neck Incision: Ideal for patients who want to avoid any scarring on the neck.",
        "Multinodular Treatment: Can treat multiple nodules or a diffuse goiter in a single session.",
        "Preserves Parathyroid Glands: Highly precise targeting minimizes risk to surrounding vital structures."
      ],
      icon: "Activity",
      image: taeImg
    },
    {
      id: "drainage",
      title: "Percutaneous Drainage",
      heading: "Minimally Invasive Percutaneous Drainage",
      description: "A minimally invasive medical procedure used to safely remove abnormal fluid collections—such as abscesses, pus, blood, or bile—from inside the body.",
      fullContent: "Performed by an interventional radiologist, it involves inserting a thin catheter through the skin (percutaneously) into the fluid collection using imaging guidance (like CT or ultrasound). It serves as a safer, less invasive alternative to open surgery for managing infected or symptomatic fluid buildups.",
      symptomsDetailed: [
        "Localized pain or swelling",
        "Fever and chills (indicating infection)",
        "Redness and warmth over the affected area",
        "Reduced organ function (e.g., jaundice from bile blockage)",
        "Shortness of breath (from pleural effusion)",
        "Abdominal distension (from ascites)"
      ],
      whyImportant: [
        "These symptoms often arise due to infection, surgery, trauma, or underlying diseases like pancreatitis or cancer."
      ],
      procedureSteps: [
        { step: "Imaging & Planning", detail: "Ultrasound or CT scan locates the fluid collection and determines the safest access route." },
        { step: "Preparation & Anesthesia", detail: "Local anesthesia numbs the skin; conscious sedation may be used for comfort. Fasting is required for 4–6 hours beforehand." },
        { step: "Catheter Placement", detail: "Under real-time imaging, a needle is inserted into the fluid. A guidewire is passed through, and a drainage catheter is placed using the Seldinger technique." },
        { step: "Drainage & Aftercare", detail: "Fluid drains into an external bag. The site is monitored, and patients receive instructions on drain care." }
      ],
      benefits: [
        "Minimally Invasive: No large incisions; reduces tissue damage and scarring.",
        "Faster Recovery: Shorter hospital stays and quicker return to normal activities.",
        "Lower Risk: Reduced chances of infection, bleeding, and complications compared to surgery.",
        "Avoids General Anesthesia: Safer for elderly or high-risk patients.",
        "Targeted Treatment: Enables fluid analysis (e.g., culture) for precise diagnosis."
      ],
      icon: "Droplets",
      image: drainageImg
    },
    {
      id: "biopsy-fnac",
      title: "Biopsy / FNAC",
      heading: "Image-Guided Biopsy and FNAC",
      description: "Biopsy is a medical procedure to remove a sample of tissue or cells for microscopic examination to diagnose diseases like cancer, infections, or inflammation.",
      fullContent: "FNAC (Fine Needle Aspiration Cytology) is a type of biopsy that uses a thin needle to extract cells from a lump or mass. It is minimally invasive and commonly used for thyroid, breast, or lymph node lumps.",
      symptomsDetailed: [
        "A suspicious lump or mass (e.g., in breast, neck, or lymph nodes)",
        "Abnormal imaging results (ultrasound, CT, or MRI)",
        "Unexplained swelling or persistent pain",
        "Signs of infection or inflammation",
        "Known cancer for staging or monitoring"
      ],
      procedureSteps: [
        { step: "Preparation", detail: "No fasting needed; wear loose clothing. Inform your doctor if on blood thinners." },
        { step: "Imaging Guidance", detail: "Ultrasound or CT may guide needle placement." },
        { step: "Needle Insertion", detail: "A thin needle is inserted into the lump under local anesthesia; suction draws out cells. 2-6 passes may be made." },
        { step: "Core Biopsy (if needed)", detail: "Uses a larger needle to get a tissue core. Slightly more invasive but gives more detailed results." }
      ],
      benefits: [
        "Minimally Invasive: No cuts or stitches; quick recovery.",
        "Accurate Diagnosis: Helps distinguish benign vs. malignant growths.",
        "Guides Treatment: Results determine need for surgery, chemotherapy, or monitoring.",
        "Rapid Results: Available in 3–5 days (up to 2 weeks for complex cases).",
        "Low Risk: Minimal discomfort, bleeding, or infection."
      ],
      icon: "Stethoscope",
      image: biopsyImg
    },
    {
      id: "frozen-shoulder",
      title: "Frozen Shoulder (Adhesive Capsulitis)",
      heading: "Advanced IR Treatments for Frozen Shoulder",
      description: "Non-surgical, image-guided procedures to rapidly reduce inflammation and restore mobility.",
      fullContent: "In interventional radiology, we don't just 'guess' where the needle goes. We use real-time imaging (usually Ultrasound or Fluoroscopy) to ensure the medication reaches the tiny space inside the shoulder capsule. These cutting-edge procedures offer rapid relief without the need for traditional surgery.",
      treatmentOptions: [
        {
          name: "1. Image-Guided Joint Injection (Arthrography)",
          desc: "The radiologist injects a mixture of a long-acting corticosteroid and a local anesthetic. Hydrodilatation (The 'Power' Version): Often, they will also inject a larger volume of sterile saline. This physically stretches the tightened, scarred joint capsule from the inside out—think of it like inflating a crumpled balloon to create more room for movement. The Goal: Rapidly reduce inflammation and physically break up some of the 'adhesions' (scar tissue)."
        },
        {
          name: "2. TAME (Transcatheter Arterial Microembolization)",
          desc: "This is a newer, cutting-edge IR procedure. Chronic inflammation in frozen shoulder causes neovascularization—the growth of tiny, abnormal new blood vessels and nerve fibers which cause pain and hypersensitivity. A tiny catheter is threaded through an artery up to the shoulder. Small particles are injected to temporarily block these abnormal vessels. By 'starving' these abnormal vessels, the associated pain-sensing nerves also quiet down, turning off the 'pain signal' at the source without surgery."
        }
      ],
      benefits: [
        "Non-Surgical: No large incisions or general anesthesia required.",
        "Precision Guided: Real-time imaging ensures exact delivery of medication.",
        "Rapid Relief: Quickly reduces inflammation and physically breaks up adhesions.",
        "Hydrodilatation: Effectively stretches the joint capsule to restore movement.",
        "Outpatient: Walk-in, walk-out procedure with minimal downtime."
      ],
      icon: "Smile",
      image: frozenShoulderImg
    },
    {
      id: "tennis-elbow",
      title: "Tennis / Golfer's Elbow (Epicondylitis)",
      heading: "TAME for Tennis / Golfer's Elbow",
      description: "A cutting-edge IR procedure targeting abnormal 'junk' blood vessels to stop chronic elbow pain at the source.",
      fullContent: "For tennis elbow (Lateral Epicondylitis) and golfer’s elbow (Medial Epicondylitis), TAME (Transcatheter Arterial Microembolization) addresses the biological pain signal at the source. In chronic cases, the tendon develops angiofibroblastic hyperplasia—a web of new micro-vessels (neovascularization) and associated pain fibers that standard therapies often fail to address.",
      procedureSteps: [
        { step: "Identifying the 'Blush'", detail: "Using high-resolution fluoroscopy, the interventional radiologist identifies the 'hyperemic blush'—a visual representation of abnormal, leaky micro-vessels near the epicondyle." },
        { step: "Access", detail: "Performed via a tiny puncture in the radial artery at the wrist, similar to a simple cardiac catheterization but much simpler." },
        { step: "Targeting", detail: "A microcatheter is precisely navigated to the radial recurrent artery (for tennis elbow) or the ulnar recurrent artery (for golfer’s elbow) branches." },
        { step: "Embolization", detail: "Temporary embolic particles are injected to prune the abnormal vessels, effectively 'turning off' pain signals at the source without surgery." }
      ],
      benefits: [
        "Biological Pain Relief: Addresses the pain at the source by cutting off blood supply to abnormal vessels.",
        "Precision Guided: Uses fluoroscopy to identify the exact 'blush' of inflammation.",
        "Non-Surgical: No large incisions or reconstruction of tendons required.",
        "Rapid Results: Typically leads to a significant reduction in sharp, 'stabbing' pain.",
        "Minimally Invasive: Outpatient procedure via a tiny radial artery puncture."
      ],
      icon: "Bone",
      image: golfersElbowImg
    },
    {
      id: "knee-osteoarthritis",
      title: "Knee Osteoarthritis (Mild–Moderate)",
      heading: "Advanced Interventions for Knee Osteoarthritis",
      description: "Specialized joint interventions providing profound relief for Stage 1–3 arthritis when patients are not yet ready for replacement.",
      fullContent: "For patients suffering from mild to moderate knee osteoarthritis where standard painkillers and physiotherapy have failed, we offer cutting-edge treatments to delay disease progression, massively reduce pain, and restore mobility.",
      whyImportant: [
        "Stage 1–3 arthritis with significant cartilage wear",
        "Persistent pain >6 months",
        "Not ready or eligible for total knee replacement",
        "Failed conventional conservative management"
      ],
      treatmentOptions: [
        { name: "Viscosupplementation", desc: "Injects hyaluronic acid into the joint to improve lubrication and cushioning for moderate short-term relief." },
        { name: "Genicular Nerve Block / RFA", desc: "Targets nerves around the knee to block pain signals, offering lasting relief (6–12 months)." },
        {
          name: "Genicular Artery Embolization (GAE)", desc: `A Breakthrough for Knee Pain If you suffer from chronic knee pain due to osteoarthritis and haven't found relief through injections or physical therapy—but aren't ready for a total knee replacement—Genicular Artery Embolization (GAE) may be the solution.
          An interventional radiologist makes a tiny incision (the size of a grain of rice) in the upper thigh to access the arterial system.
          Using real-time X-ray guidance, a thin catheter is threaded to the genicular arteries supplying the knee. Embolization
          Tiny particles are injected into these specific arteries to slow the blood flow.
          By reducing the blood flow, the procedure 'starves' the inflammation and calms the hyper-sensitive nerves, significantly reducing pain.` },
      ],
      icon: "Activity",
      image: kneeOsteoarthritisImg
    },
    {
      id: "plantar-fasciitis",
      title: "Plantar Fasciitis",
      heading: "Plantar Fasciitis Embolization (PFE)",
      description: "A minimally invasive procedure targeting abnormal blood vessels that contribute to chronic inflammation and heel pain.",
      fullContent: "Chronic plantar fasciitis is often driven by abnormal blood vessel formation (neovascularization). Our target embolization technique (PFE or TAME) is an outpatient procedure that directly shuts down these inflamed vessels to promote permanent healing without surgery.",
      whyImportant: [
        "Heel pain persists >6 months",
        "Failed orthotics, physical therapy, and injections",
        "Imaging shows abnormal vascularity (neovascularization)"
      ],
      procedureSteps: [
        { step: "Procedure Setup", detail: "Performed by an interventional radiologist under local anesthesia." },
        { step: "Targeting", detail: "A tiny catheter is inserted into a foot artery and guided to abnormal vessels using imaging." },
        { step: "Embolization", detail: "Embolization agents safely block blood flow to inflamed areas, reducing pain." },
        { step: "Completion", detail: "Outpatient procedure taking only 30-60 minutes with absolutely no incisions." }
      ],
      benefits: [
        "High success rate: 80–90% pain reduction reported.",
        "Minimal downtime: Most resume normal activities within 1–2 days.",
        "Avoids surgery: No risk of fascia weakening or nerve damage.",
        "Long-lasting relief: Targets the exact root cause."
      ],
      icon: "Droplets",
      image: plantarFasciitisImg
    },
    {
      id: "achilles-tendinopathy",
      title: "Achilles Tendinopathy",
      heading: "Transarterial Embolization (TAE) for Achilles Tendinopathy",
      description: "A minimally invasive procedure that blocks abnormal blood vessels contributing to chronic inflammation and Achilles pain.",
      fullContent: "Achilles tendinopathy can become notoriously chronic. By utilizing highly precise Transarterial Embolization, we cut off the abnormal, inflammatory blood supply to the tendon, allowing the body to naturally arrest the pain signals and repair the tissue.",
      whyImportant: [
        "Chronic tendon pain >3 months",
        "Failed conservative therapy (eccentric exercises, orthotics)",
        "Doppler ultrasound displays prominent hypervascularity"
      ],
      procedureSteps: [
        { step: "Preparation", detail: "Performed by our specialized interventional radiologist under standard local anesthesia." },
        { step: "Navigation", detail: "A microcatheter is guided entirely from inside the arteries down to the vessels feeding the damaged tendon." },
        { step: "Treatment", detail: "Microscopic embolization agents block the abnormal vessels, immediately curtailing the inflammatory cycle." }
      ],
      benefits: [
        "High success rate: 86% of patients report >50% pain reduction.",
        "Low risk: Completely avoids tendon weakening or surgical complications.",
        "Quick recovery: Patients resume normal light activities within days.",
        "Highly effective non-surgical alternative."
      ],
      icon: "HeartPulse",
      image: achillesTendinopathyImg
    },
    {
      id: "joint-injections",
      title: "Joint Injections (PRP & Corticosteroids)",
      heading: "Advanced Platelet-Rich Plasma (PRP) & Corticosteroid Injections",
      description: "An advanced biological treatment (PRP) and non-surgical corticosteroid injections used to relieve pain, reduce inflammation, and promote natural healing in joints.",
      fullContent: `1. PRP (Platelet-Rich Plasma) injection is the frontier of regenerative medicine. By concentrating the healing growth factors naturally found in your blood and injecting them directly into damaged joints, we jumpstart cellular repair for osteoarthritis, tendinitis, and soft tissue injuries.
      \n 2. Corticosteroid injections are a non-surgical treatment used to relieve pain and reduce inflammation in joints affected by arthritis, tendonitis, or injury. Unlike \"anabolic\" steroids used for muscle building, these are synthetic versions of cortisol, a natural hormone your body produces to fight inflammation.`,
      whatIs: `1. Platelet-rich plasma (PRP) injections are a therapeutic treatment derived from a patient's own blood, where platelets are concentrated and reinjected into injured or diseased tissue to accelerate healing.
      2. Corticosteroid injections are synthetic versions of cortisol, a natural hormone your body produces to fight inflammation. They are used to suppress the immune response at the site of injection, providing long-term relief for chronic joint conditions.`,
      whyImportant: [
        "Mild to moderate osteoarthritis",
        "Chronic tendon injuries (e.g., tennis elbow, Achilles tendinopathy)",
        "Failed response to standard corticosteroid injections or physical therapy",
        "Knees (Osteoarthritis)",
        "Shoulders (Bursitis or Rotator Cuff issues)",
        "Hips",
        "Elbows (Tennis or Golfer’s elbow)",
        "Wrists and Ankles"
      ],
      procedureSteps: [
        { step: "PRP: Blood Draw", detail: "A small, standard blood sample is taken from your arm." },
        { step: "PRP: Centrifugation", detail: "The blood is instantly spun in a high-speed centrifuge to extract and concentrate the active platelets." },
        { step: "PRP: Injection", detail: "The enriched plasma, now dense with growth factors, is precisely injected directly into the damaged joint." },
        { step: "Steroid: Preparation", detail: "The skin over the joint is cleaned and sometimes numbed with a topical spray or local anesthetic." },
        { step: "Steroid: The Injection", detail: "Using a fine needle, the specialist injects a mixture of a corticosteroid (for long-term relief) and a local anesthetic (for immediate, short-term numbing)." },
        { step: "Steroid: Precision", detail: "In some cases, your doctor may use ultrasound or X-ray (fluoroscopy) guidance to ensure the medication is delivered precisely into the joint capsule." },
        { step: "Steroid: Duration", detail: "The entire process usually takes less than 15 minutes." }
      ],
      benefits: [
        "Longer-lasting relief than traditional corticosteroids (often 6–12 months or more).",
        "Promotes actual structural healing rather than just temporarily masking pain.",
        "Virtually zero risk of allergic reaction or infection since it uses your own biology.",
        "Completely safe for repeat use, unlike steroids which can damage tissue over time.",
        "Steroids: Provide rapid reduction of swelling and inflammation for weeks to months.",
        "Steroids: Immediate numbing effect with local anesthetic included in the injection."
      ],
      recovery: "PRP: Patients experience mild soreness for 2-5 days. Avoid NSAIDs for 2 weeks to allow inflammation-driven healing. Full tissue benefits seen in 2-6 months.\n\nSteroid Relief Timeline:\n- Immediate (Hours 1–6): Relief due to local anesthetic.\n- The 'Flare' (Day 1–2): Temporary soreness as anesthetic wears off.\n- Long-Term (Days 3–7): Corticosteroid begins to work (lasts weeks to months).\n\nPost-Injection Care: Rest the joint for 24–48 hours. Apply ice packs (20 min on/off) for first 24 hours. Monitor blood sugar if diabetic. Minor flushing/skin changes may occur.",
      icon: "Dna",
      image: jointInjectionImg
    },
    {
      id: "fistuloplasty",
      title: "Fistuloplasty",
      heading: "Fistuloplasty: Restoring Your Dialysis Lifeline",
      description: "A minimally invasive procedure performed by an Interventional Radiologist to open up narrowings and prolong the life of your AV fistula.",
      fullContent: "For patients undergoing hemodialysis, a functional Arteriovenous (AV) Fistula is a lifeline. However, over time, the high-pressure blood flow can cause the vein to narrow (stenosis) or develop clots (thrombosis), making dialysis difficult or impossible.",
      whyImportant: [
        "Ignoring fistula dysfunction leads to total blockage (clotting)",
        "May require emergency surgery or the placement of a temporary neck catheter",
        "Increases the risk of infection and central vein damage"
      ],
      symptomsDetailed: [
        "Difficult Cannulation: Dialysis nurses have trouble inserting needles.",
        "Decreased 'Thrill': The vibrating sensation over the fistula feels weak or absent.",
        "High Venous Pressures: Alarms on the dialysis machine during your session.",
        "Prolonged Bleeding: Taking much longer than usual to stop bleeding after dialysis.",
        "Swelling: Significant swelling in the arm, hand, or face."
      ],
      procedureSteps: [
        { step: "Access", detail: "Under local anesthesia, a tiny needle is used to access the fistula. A thin wire and catheter are navigated through the narrowed area under X-ray guidance." },
        { step: "Mechanism", detail: "A high-pressure medical balloon is positioned at the site of the narrowing and inflated. This physically stretches the vein back to its original size." },
        { step: "Advanced Treatment", detail: "Drug-Coated Balloons (DCB): We often use balloons coated with specialized medication to prevent the narrowing from returning quickly." }
      ],
      benefits: [
        "Immediate Results: You can often use the fistula for dialysis the very next day.",
        "No Surgery: Performed through a 'pinhole,' avoiding the need for new surgical scars or general anesthesia.",
        "Repeatable: This procedure can be performed multiple times over the years to keep the same fistula working for a decade or more."
      ],
      icon: "Droplets",
      image: fistuloplastyImg
    },
    {
      id: "dialysis-catheter",
      title: "Dialysis Catheter Insertion",
      heading: "Dialysis Catheter Insertion for Hemodialysis & Peritoneal Dialysis",
      description: "Dialysis catheter insertion is a procedure to place a soft tube into a large vein (for hemodialysis) or the abdominal cavity (for peritoneal dialysis) to allow blood or fluid filtration when kidneys fail.",
      fullContent: "Done under local anesthesia with sedation, guided by ultrasound and fluoroscopy. For tunneled catheters, it's inserted via the internal jugular vein and tunneled under the skin to a chest exit site. The procedure takes 30–60 minutes and can be used immediately.",
      treatmentOptions: [
        { name: "Non-Tunneled (Temporary)", desc: "Placed in the neck (jugular) or groin (femoral) for short-term use." },
        { name: "Tunneled (Long-Term)", desc: "Passed under the skin with a Dacron cuff (e.g., Perm-Cath). Used for weeks to months." },
        { name: "Peritoneal Dialysis Catheters", desc: "Inserted into the abdomen (e.g., Tenckhoff) for home dialysis." }
      ],
      procedureSteps: [
        { step: "Guidance", detail: "Procedure is guided by ultrasound and fluoroscopy for maximum precision." },
        { step: "Insertion", detail: "Catheter is placed in the internal jugular vein or abdominal cavity." },
        { step: "Verification", detail: "Position is confirmed with a post-procedure chest X-ray." }
      ],
      riskFactors: [
        "Infection (catheter-related bloodstream infection)",
        "Blood clots (thrombosis)",
        "Bleeding or hematoma",
        "Pneumothorax (rare)",
        "Catheter malposition or malfunction",
        "Vascular erosion"
      ],
      benefits: [
        "Immediate use after placement",
        "Minimally invasive pinhole access",
        "Guided by real-time imaging",
        "Options for both short-term and long-term care"
      ],
      recovery: "Monitor for redness, swelling, or fever. Avoid strenuous activity for 3–5 days. Do not drive for 24 hours.",
      lifestyleChanges: [
        "Keep the exit site clean and dry",
        "Avoid swimming or submerging the site",
        "Regular flushing with heparin/saline to prevent blockage"
      ],
      icon: "Activity",
      image: dialysisCatheterImg
    },
    {
      id: "liver-cancer",
      title: "Liver Cancer Treatment",
      heading: "Targeted Interventional Oncology for Liver Cancer",
      description: "Advanced minimally invasive therapies for primary liver cancer (HCC) and metastatic tumors.",
      fullContent: "Liver cancer is highly vascular, making it an ideal candidate for targeted interventional radiology procedures. We offer tumor ablation, TACE, and TARE to treat cancer cells directly while sparing healthy liver tissue.",
      whatIs: "Liver cancer can be primary (starting in the liver) or metastatic (spreading from other organs). Interventional oncology provides non-surgical alternatives for patients who may not be candidates for traditional surgery.",
      symptomsDetailed: [
        "Unexplained weight loss and loss of appetite",
        "Pain or swelling in the upper right abdomen",
        "Jaundice (yellowing of skin and eyes)",
        "Persistent fatigue and nausea"
      ],
      whyImportant: [
        "Liver failure if untreated",
        "Risk of internal bleeding from portal hypertension",
        "Metastasis to other vital organs",
        "Loss of curative treatment window"
      ],
      treatmentOptions: [
        { 
          name: "Tumor Ablation (RFA / MWA)", 
          desc: "Uses thermal energy (heat) via a needle-probe to 'burn' smaller, localized tumors under ultrasound or CT guidance. Fast recovery and minimal scarring." 
        },
        { 
          name: "TACE (Trans-Arterial Chemo-Embolization)", 
          desc: "Delivers high-dose chemotherapy directly to the tumor via a micro-catheter, followed by embolic particles to starve the tumor of nutrients and trap the drug inside." 
        },
        { 
          name: "TARE / Radioembolization (Y-90)", 
          desc: "Delivers millions of microscopic radioactive beads (Y-90) through the blood supply to destroy the tumor with targeted radiation. Often better tolerated for larger tumors." 
        }
      ],
      benefits: [
        "Targeted therapy spares healthy tissue",
        "Minimally invasive 'pinhole' access",
        "Shorter recovery than traditional surgery",
        "Effective for non-surgical candidates",
        "Can lead to significant tumor shrinkage"
      ],
      icon: "Activity",
      image: liverCancerImg
    },
    {
      id: "genicular-artery-embolization",
      title: "Genicular Artery Embolization (GAE)",
      heading: "Genicular Artery Embolization (GAE): A Breakthrough for Knee Pain",
      description: "GAE is a minimally invasive, non-surgical procedure that reduces inflammation and provides long-term pain relief by targeting the blood flow to the lining of the knee.",
      fullContent: "If you suffer from chronic knee pain due to osteoarthritis and haven't found relief through injections or physical therapy—but aren't ready for a total knee replacement—Genicular Artery Embolization (GAE) may be the solution.",
      whatIs: "Osteoarthritis causes 'neovascularity'—the growth of new, abnormal blood vessels in the synovium (the lining of the knee joint). These vessels are accompanied by new sensory nerves that transmit pain signals to your brain.",
      procedureSteps: [
        { step: "Access", detail: "An interventional radiologist makes a tiny incision (the size of a grain of rice) in the upper thigh to access the arterial system." },
        { step: "Navigation", detail: "Using real-time X-ray guidance, a thin catheter is threaded to the genicular arteries supplying the knee." },
        { step: "Embolization", detail: "Tiny particles are injected into these specific arteries to slow the blood flow." },
        { step: "Relief", detail: "By reducing the blood flow, the procedure 'starves' the inflammation and calms the hyper-sensitive nerves, significantly reducing pain." }
      ],
      benefits: [
        "No Surgery: No large incisions, no stitches, and no general anesthesia.",
        "Quick Recovery: Most patients return to light activity within 24–48 hours.",
        "Preservation: It does not prevent you from having a knee replacement in the future if it eventually becomes necessary.",
        "High Success Rate: Clinical studies show that a majority of patients experience significant pain reduction and improved mobility for 12 months or longer."
      ],
      whyImportant: [
        "Moderate to severe osteoarthritis diagnosis.",
        "Localized knee pain (tender to the touch).",
        "Conservative treatments like cortisone shots or physical therapy are no longer working.",
        "Desire to delay or avoid major surgery like Total Knee Replacement (TKR)."
      ],
      recovery: "The entire process typically takes about 45 to 90 minutes. Performed under 'moderate sedation' (twilight sleep), you remain comfortable and go home the same day with nothing more than a small bandage on your hip. Pro Tip: While many patients feel relief within the first week, the 'peak' benefits are usually felt around 2 to 4 weeks as the internal inflammation fully subsides.",
      faqs: [
        { q: "Does it hurt?", a: "Most patients feel a slight pressure during the procedure but no significant pain. Some minor 'aching' in the knee is common for a few days after as the body adjusts." },
        { q: "Will insurance cover GAE?", a: "Coverage varies by provider. Since GAE is a newer procedure, our office can help you navigate the prior authorization process to determine your specific benefits." },
        { q: "How long do the results last?", a: "Current clinical data suggests that many patients enjoy significant relief for 1 to 2 years, with some studies showing even longer-lasting results." }
      ],
      icon: "Activity",
      image: GAE
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
