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
      bio: "Dr Harsha M T is a highly experienced Vascular and Interventional Radiologist in Bengaluru, known for performing advanced minimally invasive image-guided procedures that replace traditional open surgeries. \n \n With extensive international training and experience, Dr Harsha specializes in treating complex vascular and non-vascular conditions using advanced imaging technologies such as CT, Ultrasound, and Fluoroscopy. \n \n  His patient-focused approach combines the precision of radiology with the expertise of a surgeon to deliver effective treatments with minimal pain, faster recovery, and no large surgical scars.",
      // qualifications: ["MBBS", "MD", " FVIR (AIIMS)","EBIR","EDiR","Dip. ICRI"],
      certifications: ["Indian Society of Vascular & Interventional Radiology", "Fellow of Royal College of Radiologists (FRCR)"],
      achievements: ["5000+ Successful Procedures", "Best Interventional Radiologist Award 2023"],
      focus: ["Varicose Veins", "Thyroid Nodule Ablation", "Uterine Fibroid Embolization"],
      linkedin: "#",
      twitter: "#",
      experience: "10+ Years",
      role: "Consultant",
      tabs: {
        biography: "Dr. Harsha M T is a renowned Vascular Specialist and Interventional Radiologist with over 10+ years of experience in performing complex minimally invasive procedures. He is one of the finest specialists in Bangalore, highly qualified in image-guided treatments. He relocated to Bangalore and has been instrumental in establishing advanced interventional radiology practices. \n \n With extensive international training and experience, Dr Harsha specializes in treating complex vascular and non-vascular conditions using advanced imaging technologies such as CT, Ultrasound, and Fluoroscopy. \n \n His patient-focused approach combines the precision of radiology with the expertise of a surgeon to deliver effective treatments with minimal pain, faster recovery, and no large surgical scars. \n \n   Venuva Vascular Center \n Dr Harsha M T at Venuva Vascular Center, a specialized facility focused on minimally invasive vascular and interventional radiology treatments through pinhole-sized access.",
        expertise: ["Varicose Veins Treatment", "Thyroid Nodule Ablation", "Uterine Fibroid Embolization", "Prostate Artery Embolization","Peripheral Vascular Disease Treatment", "Deep Vein Thrombosis (DVT) management","Varicocele Embolisation","Liver Cancer Interventions","Dialysis Access Procedures"],
        education: ["MBBS", "MD – Radio-Diagnosis (PGIMER Chandigarh)", "FVIR (AIIMS Rishikesh)"," Fellowship in Vascular interventional Radiology - SNUH SOUTH KOREA","European Board of Interventional Radiology (EBIR)","European Diploma in Radiology (EDiR)","Diplomate of the Indian College of Radiology and Imaging (Dip. ICRI)"],
        publications: ["Modern Approaches to Varicose Vein Treatment - Indian Journal of Radiology", "Case Study: Successful UFE on symptomatic fibroids"],
        memberships: [" Indian Society of Vascular and Interventional Radiology (ISVIR) ", "Cardiovascular and Interventional Radiological Society of Europe (CIRSE)","Indian Radiological and Imaging Association (IRIA)"," Korean Society of Radiology (KSR)"]
      }
    },
    {
      id: "expert-specialist-2",
      slug: "dr-monish-v",
      name: "Dr. Monish V",
      specialty: "Vascular Interventional Radiologist ",
      image: imgMonish,
      bio: "An expert in interventional radiology, Dr. Shishir Kumar specializes in minimally invasive treatments for DVT, Peripheral Angioplasty, and other complex vascular conditions.",
      // qualifications: ["MBBS", "MD Radiology", "DNB"],
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
        expertise: ["Varicose Veins","Uterine Fibroids Embolization (UFE)","Enlarged Prostate (BPH)","Blocked Leg Arteries (PAD)","Varicocele (Male Infertility)","Thyroid Nodules","Image-Guided Biopsies & FNAC","Deep Vein Thrombosis (DVT)"],
        education: ["MBBS", "MD Radiology", "DNB"],
        publications: ["Advancements in DVT Treatment - Vascular Journal", "Minimal Access Procedures in Modern Medicine"],
        memberships: ["Vascular Society of India", "Indian Society of Vascular & Interventional Radiology (ISVIR)"]
      }
    }
  ],
};


export const contact = {
  tag: "GET IN TOUCH",
  title: "Contact Venuva Vascular Center",
  cards: [
    {
      title: "Call Us",
      info1: "(+91) 90199 00716",
      info2: "Emergency & Appointments",
      icon: "PhoneCall",
      color: "bg-hospital-navy",
      textColor: "text-white",
      iconColor: "text-hospital-sky-blue",
    },
    {
      title: "Email Us",
      info1: "venuvavascular@gmail.com",
      info2: "For general inquiries",
      icon: "Mail",
      color: "bg-white",
      textColor: "text-hospital-navy",
      iconColor: "text-hospital-sky-blue",
    },
    {
      title: "Visit Us",
      info1: "Padma Apartments",
      info2: "No.38, 8th Cross road, 5th Main Rd, Malleshwaram, Bengaluru, Karnataka 560003",
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
