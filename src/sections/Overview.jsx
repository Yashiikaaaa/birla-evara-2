import React from 'react';
import image from '../assets/Main-Elevation-Birla-Evara-Birla-Sarjapur-Apartments.jpg';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
           Birla Evara Phase 2 - 20:20:60 Payment Plan
          </span>
          <br />
          
          <span>
            <br /> 
            <p> 
           Birla Templetown is an upcoming apartment project Off Sarjapur Road, East Bengaluru. Its acquisition of a 27-acre land parcel marks its ongoing rapid expansion . More than 80 per cent of the land is used for greenery and open spaces.             <p />
            <br/>
            <p>Birla Temple town is recogognized for its premier rseidential and commercial destination with strategic connectivity to key business hubs in Bengaluru. It is close to NH 44 and provides easy access to Hosa Road. Additionally, a thoughtful mixed-use development strategy ensures all diverse needs of its residents are fulfilled.
            </p>
            
            </p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
