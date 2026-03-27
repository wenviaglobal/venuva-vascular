import slide1 from "../assets/1st-Slide.webp";
import slide2 from "../assets/2nd-slide.webp";
import slide3 from "../assets/3rd_Slide.webp";

export const heroSlides = [
  {
    subheading: "Best Vascular Specialists in Bangalore",
    heading: "Advanced Vascular & Interventional Radiology Treatments",
    description: "Expert care for varicose veins, thyroid nodules, uterine fibroids, and more using modern image-guided procedures and advanced medical technology.",
    image: slide1,
    stats: [
      { label: "Day-Care Procedure", value: "30", suffix: "Min", icon: "Zap", color: "text-hospital-sun" },
      { label: "Patients Treated", value: "10,000", suffix: "+", icon: "UserCheck", color: "text-hospital-sky-blue" },
      { label: "Experience", value: "10", suffix: "+ Yrs", icon: "Calendar", color: "text-hospital-sun" },
      { label: "Facility Available", value: "Insurance", suffix: "", icon: "ShieldCheck", color: "text-hospital-sky-blue" }
    ]
  },
  {
    subheading: "Varicose Veins Specialist",
    heading: "Painless Laser Treatment for Varicose Veins",
    description: "Walk in, Walk out procedures with zero incisions. Get relief from leg pain, swelling, and visible veins with our advanced endovenous laser treatment.",
    image: slide2,
    stats: [
      { label: "Recovery Time", value: "24", suffix: "Hrs", icon: "Zap", color: "text-hospital-sun" },
      { label: "Success Rate", value: "99", suffix: "%", icon: "ShieldCheck", color: "text-hospital-sky-blue" },
      { label: "Laser Tech", value: "Modern", suffix: "", icon: "CheckCircle", color: "text-hospital-sun" },
      { label: "Facility Available", value: "Insurance", suffix: "", icon: "ShieldCheck", color: "text-hospital-sky-blue" }
    ]
  },
  {
    subheading: "Uterine Fibroid Embolization",
    heading: "Non-Surgical Solution for Uterine Fibroids",
    description: "Preserve your uterus and avoid major surgery. UFE is a proven, minimally invasive alternative to hysterectomy with faster recovery.",
    image: slide3,
    stats: [
      { label: "Non-Surgical", value: "100", suffix: "%", icon: "ShieldCheck", color: "text-hospital-sun" },
      { label: "Typical Stay", value: "1", suffix: "Day", icon: "Calendar", color: "text-hospital-sky-blue" },
      { label: "Specialists", value: "Expert", suffix: "", icon: "UserCheck", color: "text-hospital-sun" },
      { label: "Facility Available", value: "Insurance", suffix: "", icon: "ShieldCheck", color: "text-hospital-sky-blue" }
    ]
  },
  {
    subheading: "Advanced Prostate Care (PAE)",
    heading: "Effective Treatment for Enlarged Prostate (BPH)",
    description: "Prostate Artery Embolization (PAE) offers a surgical-grade result without the risks of traditional surgery. No hospital stay required in most cases.",
    image: slide3,
    stats: [
      { label: "No Surgery", value: "Safe", suffix: "", icon: "ShieldCheck", color: "text-hospital-sun" },
      { label: "Outpatient", value: "Same", suffix: "Day", icon: "Zap", color: "text-hospital-sky-blue" },
      { label: "Result", value: "Long", suffix: "Term", icon: "UserCheck", color: "text-hospital-sun" },
      { label: "Facility Available", value: "Insurance", suffix: "", icon: "ShieldCheck", color: "text-hospital-sky-blue" }
    ]
  }
];

export const about = {
  tag: "LEADING CENTER",
  title: "About us",
  heading: "Leading Center for Vascular & Interventional Treatments",
  description: "Our hospital is a trusted center specializing in vascular and interventional radiology treatments. With advanced imaging technology and highly skilled specialists, we provide safe, effective, and minimally invasive solutions for complex medical conditions. Our focus is on image-guided procedures that reduce the need for open surgery, allowing patients to experience faster recovery, minimal pain, and shorter hospital stays. We are committed to delivering personalized treatment plans and high-quality care tailored to each patient’s needs.",
  features: [
    "Advanced Imaging Technology",
    "Highly Skilled Specialists",
    "Minimally Invasive Solutions",
    "Faster Recovery Times",
    "Personalized Treatment Plans",
    "High-Quality Care",
  ],
  image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
};

export const whyChooseUs = {
  tag: "WHY CHOOSE US",
  heading: "Trusted Experts in Minimally Invasive Treatments",
  reasons: [
    {
      title: "Experienced Specialists",
      description: "Our team includes skilled vascular specialists and interventional radiologists.",
    },
    {
      title: "Advanced Technology",
      description: "We use modern imaging systems and minimally invasive techniques for precise treatments.",
    },
    {
      title: "High Success Rates",
      description: "Our procedures are designed to deliver safe treatments and long-term results.",
    },
    {
      title: "Comprehensive Care",
      description: "From diagnosis to recovery, we provide complete patient care.",
    },
    {
      title: "Patient-Centered Approach",
      description: "Each treatment plan is tailored to meet the specific needs of the patient.",
    },
  ],
};

export const testimonial = {
  tag: "PATIENT TESTIMONIALS",
  title: "What Our Patients Say",
  quote: "Thousands of patients trust our hospital for advanced minimally invasive treatments. Our commitment to quality care, modern technology, and successful outcomes makes us a preferred healthcare destination.",
  author: "Satisfied Patient",
};

export const finalCTA = {
  heading: "Start Your Treatment Journey Today",
  subheading: "Take the first step towards better health with expert care and advanced minimally invasive treatments. Our specialists are here to guide you through the best treatment options.",
  cta: "Book Your Appointment Now",
};

export const appointment = {
  heading: "Book Your Consultation Today",
  description: "If you are experiencing symptoms such as leg pain, swelling, thyroid swelling, pelvic pain, urinary problems, or chronic pain, early diagnosis and treatment can prevent complications. Schedule a consultation with our specialists to explore the most effective treatment options.",
  cta: "Book Appointment",
};
