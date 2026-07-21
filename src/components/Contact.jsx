import { PhoneCall, MapPin, Mail, Clock } from "lucide-react";
import { useSettings } from "../context/ContentContext";

const iconMap = {
  PhoneCall: PhoneCall,
  MapPin: MapPin,
  Mail: Mail,
  Clock: Clock,
};

const Contact = () => {
  const c = useSettings("contact");
  // Cards derived from CMS-managed contact settings (styling kept as before).
  const cards = [
    { title: "Call Us", info1: c.emergencyPhone, info2: "Emergency & Appointments", icon: "PhoneCall", color: "bg-hospital-navy", textColor: "text-white", iconColor: "text-hospital-sky-blue" },
    { title: "Email Us", info1: c.email, info2: "For general inquiries", icon: "Mail", color: "bg-white", textColor: "text-hospital-navy", iconColor: "text-hospital-sky-blue" },
    { title: "Visit Us", info1: c.address, info2: c.addressDetail, icon: "MapPin", color: "bg-white", textColor: "text-hospital-navy", iconColor: "text-hospital-sky-blue" },
    { title: "Working Hours", info1: c.workHours, info2: "Everyday (Mon-Sun)", icon: "Clock", color: "bg-white", textColor: "text-hospital-navy", iconColor: "text-hospital-sky-blue" },
  ];
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-hospital-sun font-bold tracking-[0.2em] mb-4 uppercase text-xs">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-hospital-navy">
            Contact Venuva Vascular Center
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={idx}
                className={`${card.color} ${card.textColor || 'text-hospital-navy'} p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center`}
              >
                <div className="mb-6">
                  {Icon && <Icon className={`${card.iconColor} w-10 h-10`} />}
                </div>
                <h3 className="font-extrabold text-sm tracking-widest uppercase mb-4">{card.title}</h3>
                <p className="font-semibold mb-1">{card.info1}</p>
                <p className="font-semibold opacity-80">{card.info2}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
