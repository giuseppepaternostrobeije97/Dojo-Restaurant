"use client";
// -- REACT
import { FC, useState } from "react";
// -- STYLE
import "./reservation-banner.scss";
// -- COMPONENTS
import { Button } from "../Button";
import { InputText } from "../Input/Index";

export const ReservationBanner: FC = (): JSX.Element => {
  // # MODAL STATE
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div id="reservationBanner" className=" wow fadeInUp">
      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg overflow-hidden">
            {/* Header modale */}
            <div className="bg-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Guarda il Video</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>

            <div className="relative w-full h-0 pb-[56.25%]">
              {" "}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/btPJPFnesV4"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* BANNER */}
      <div className="videoSection section">
        <button className="btn-play" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-play"></i>
        </button>
      </div>
      <div className="bookSection section"> 
        <div className="head wow fadeIn" data-wow-delay=".3s">
          <h4>Reservation</h4>
          <div className="line"></div>
        </div>
        <h2 className="title wow fadeIn" data-wow-delay=".6s">Book A Table Online</h2>
        <form className="form wow fadeIn" data-wow-delay="1s">
          <div className="formSection">
            <div className="inputContainer">
              <InputText
                name="name"
                type="text"
                placeholder="es. Mario Rossi"
                label="Your Name"
              />
            </div>
            <div className="inputContainer">
              <InputText
                name="email"
                type="email"
                placeholder="es@gmail.com"
                label="Your Email"
              />
            </div>
          </div>
          <div className="formSection">
            <div className="inputContainer">
              <InputText
                name="date"
                type="datetime-local"
                placeholder="Date & Time"
                label="Date & Time"
              />
            </div>
            <div className="inputContainer">
              <InputText
                name="people"
                type="text"
                placeholder="es. 3"
                label="No Of People"
              />
            </div>
          </div>
          <div className="formSection">
            <div className="textArea">
              <label>Special Request</label>
              <textarea name="request" placeholder="Your name" />
            </div>
          </div>
          <div className="formSection">
            <Button labelBtn="Book now" fullWidth />
          </div>
        </form>
      </div>
    </div>
  );
};
