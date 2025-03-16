import React from "react";
import ContactCard from "./ContactCard";

const RightSide = () => {
  return (
    <div className="">
      <div className="w-[388px] h-[653px] rounded-[40px] overflow-hidden mb-[14px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.650894397919!2d-73.98542808459323!3d40.748817279326836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af7a1b84f5%3A0x528b65e98f41e9de!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1676486327490!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactCard />
    </div>
  );
};

export default RightSide;
