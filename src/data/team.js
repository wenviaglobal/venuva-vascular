import imgHarsha from '../assets/doctor-images/Dr.-Harsha-M-T.webp';
import imgMonish from '../assets/doctor-images/Dr. Monish V.webp';

export const doctorsSection = {
  tag: "EXPERT MEDICAL TEAM",
  heading: "Experienced Vascular & Interventional Specialists",
  description: "Our team consists of highly qualified specialists dedicated to providing advanced minimally invasive care.",
  doctors: [
    {
      id: "expert-specialist-1",
      slug: "dr-harsha-m-t",
      name: "Dr. Harsha M T",
      specialty: "Vascular Specialist & Interventional Radiologist",
      image: imgHarsha,
      bio: "Dr. Harsha M T is a renowned Vascular Specialist and Interventional Radiologist with over 10+ years of experience in performing complex minimally invasive procedures. He specializes in image-guided treatments that offer patients a safe alternative to traditional surgery.",
      qualifications: ["MBBS", "MD Radiology", "Fellowship in Interventional Radiology"],
      certifications: ["Indian Society of Vascular & Interventional Radiology", "Fellow of Royal College of Radiologists (FRCR)"],
      achievements: ["5000+ Successful Procedures", "Best Interventional Radiologist Award 2023"],
      focus: ["Varicose Veins", "Thyroid Nodule Ablation", "Uterine Fibroid Embolization"],
      linkedin: "#",
      twitter: "#",
      experience: "10+ Years",
      role: "Consultant",
      tabs: {
        biography: "Dr. Harsha M T is a renowned Vascular Specialist and Interventional Radiologist with over 10+ years of experience in performing complex minimally invasive procedures. He is one of the finest specialists in Bangalore, highly qualified in image-guided treatments. He relocated to Bangalore and has been instrumental in establishing advanced interventional radiology practices.",
        expertise: ["Endovenous Laser Ablation (EVLA)", "Radiofrequency Ablation (RFA)", "Uterine Fibroid Embolization", "Prostate Artery Embolization", "Deep Vein Thrombosis (DVT) management"],
        education: ["MBBS - Rajiv Gandhi University of Health Sciences", "MD Radiology", "Fellowship in Interventional Radiology"],
        publications: ["Modern Approaches to Varicose Vein Treatment - Indian Journal of Radiology", "Case Study: Successful UFE on symptomatic fibroids"],
        memberships: ["Indian Society of Vascular & Interventional Radiology (ISVIR)", "Fellow of Royal College of Radiologists (FRCR)"]
      }
    },
    {
      id: "expert-specialist-2",
      slug: "Dr. Monish V",
      name: "Dr. Monish V",
      specialty: "Vascular Interventional Radiologist ",
      image: imgMonish,
      bio: "An expert in interventional radiology, Dr. Shishir Kumar specializes in minimally invasive treatments for DVT, Peripheral Angioplasty, and other complex vascular conditions.",
      qualifications: ["MBBS", "MD Radiology", "DNB"],
      certifications: ["Vascular Society of India", "ISVIR member"],
      achievements: ["Success in 3000+ Vascular Interventions", "Renowned Specialist in Bangalore"],
      focus: ["DVT Treatment", "Peripheral Angioplasty", "Aortic Aneurysm Repair"],
      linkedin: "#",
      twitter: "#",
      experience: "12+ Years",
      role: "Senior Consultant",
      tabs: {
        biography: `Dr. Monish V is a Vascular Interventional Radiologist with over a decade of experience in minimally invasive, image-guided treatments. He specializes in helping patients avoid major surgery by providing proven non-surgical and catheter-based solutions wherever possible.\n
         His clinical focus includes conditions such as varicose veins, varicocele, uterine fibroids, thyroid nodules, enlarged prostate, blocked leg arteries, and selected cases of deep vein thrombosis. Most procedures are performed as day-care treatments with faster recovery, minimal discomfort, and no surgical scars.\n
         Dr. Monish has been published in reputed national and international journals and has presented his work at leading interventional radiology conferences. He is actively involved in advancing evidence-based, minimally invasive care.`,
        expertise: ["Catheter-directed Thrombolysis", "Peripheral Angioplasty & Stenting", "Thyroid Nodule Ablation", "Pain Intervention Procedures"],
        education: ["MBBS", "MD Radiology", "DNB"],
        publications: ["Advancements in DVT Treatment - Vascular Journal", "Minimal Access Procedures in Modern Medicine"],
        memberships: ["Vascular Society of India", "Indian Society of Vascular & Interventional Radiology (ISVIR)"]
      }
    }
  ],
};

// export const news = {
//   tag: "LATEST UPDATES",
//   title: "News & Healthcare Articles",
//   posts: [
//     {
//       date: "May 15, 2024",
//       author: "Medical Team",
//       title: "New Minimally Invasive Treatment for Varicose Veins Now Available",
//       description: "We are excited to introduce advanced EVLA and Venaseal treatments to provide safer and more effective solutions for varicose veins.",
//       image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800",
//       views: "1.2k",
//       likes: "85",
//     },
//     {
//       date: "April 10, 2024",
//       author: "Radiology Specialist",
//       title: "Understanding the Benefits of Non-Surgical Thyroid Nodule Ablation",
//       description: "Learn how thermal ablation can safely shrink thyroid nodules without the need for traditional open surgery.",
//       image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800",
//       views: "950",
//       likes: "112",
//     },
//   ],
// };

export const contact = {
  tag: "GET IN TOUCH",
  title: "Contact Venuva Vascular Center",
  cards: [
    {
      title: "Call Us",
      info1: "(+91) 98765 43210",
      info2: "Emergency & Appointments",
      icon: "PhoneCall",
      color: "bg-hospital-navy",
      textColor: "text-white",
      iconColor: "text-hospital-sky-blue",
    },
    {
      title: "Email Us",
      info1: "info@venuva.com",
      info2: "For general inquiries",
      icon: "Mail",
      color: "bg-white",
      textColor: "text-hospital-navy",
      iconColor: "text-hospital-sky-blue",
    },
    {
      title: "Visit Us",
      info1: "Vascular Care Center",
      info2: "Main Hospital Road, India",
      icon: "MapPin",
      color: "bg-white",
      textColor: "text-hospital-navy",
      iconColor: "text-hospital-sky-blue",
    },
    {
      title: "Working Hours",
      info1: "09:00 - 20:00",
      info2: "Everyday (Mon-Sun)",
      icon: "Clock",
      color: "bg-white",
      textColor: "text-hospital-navy",
      iconColor: "text-hospital-sky-blue",
    },
  ],
};
