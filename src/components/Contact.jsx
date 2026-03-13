import { PhoneCall, MapPin, Mail, Clock } from "lucide-react";
import { contact } from "../data";

const iconMap = {
  PhoneCall: PhoneCall,
  MapPin: MapPin,
  Mail: Mail,
  Clock: Clock,
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-hospital-sky-blue font-bold tracking-[0.2em] mb-4 uppercase text-xs">
            {contact.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-hospital-navy">
            {contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contact.cards.map((card, idx) => {
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
