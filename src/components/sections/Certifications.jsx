import React, { useState, useEffect } from "react"; // ✅ FIXED (added useEffect)
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"; // ✅ ADD THIS
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import pythonImg from "../../assets/certificates/python-mora.webp";
import pythonProImg from "../../assets/certificates/python-ms.webp";
import mernImg from "../../assets/certificates/mern.webp";
import invideoImg from "../../assets/certificates/invideo.webp";
import djangoImg from "../../assets/certificates/python-django.webp";
import phpImg from "../../assets/certificates/php.webp";
import psycImg from "../../assets/certificates/psychology.webp";
import englishImg from "../../assets/certificates/english.webp";

const certificates = [
  {
    title: "Python for Beginners",
    subtitle: "University of Moratuwa",
    img: pythonImg,
  },
  {
    title: "Python Programming",
    subtitle: "Microsoft Learn Student Ambassadors",
    img: pythonProImg,
  },
  { title: "MERN Stack", subtitle: "SkillEcted", img: mernImg },
  { title: "Invideo AI Master", subtitle: "Udemy", img: invideoImg },
  { title: "Python & Django", subtitle: "Udemy", img: djangoImg },
  { title: "PHP Programming", subtitle: "Udemy", img: phpImg },
  {
    title: "Psychology & Counselling",
    subtitle: "Orinsto Institute",
    img: psycImg,
  },
  {
    title: "English Extension Course",
    subtitle: "University of Peradeniya",
    img: englishImg,
  },
];

const Certifications = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleNext = () => {
    setZoomed(false);
    setSelectedIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setZoomed(false);
    setSelectedIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  // ✅ Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") {
        setSelectedIndex(null);
        setZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section
      id="certificates"
      className="relative py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Floating Blobs (Hero Style) */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400 rounded-full opacity-20 blur-3xl"
      />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold 
               tracking-tight text-gray-800 dark:text-gray-100"
        >
          Certifications & Achievements
        </h2>
        <p
          className="mt-3 text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              leading-relaxed max-w-xl mx-auto"
        >
          Recognitions, courses, and certificates validating my expertise
          <span className="hidden sm:inline">
            <br />
          </span>
          Demonstrating continuous learning and professional growth
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto mt-14 px-6">
        {/* Navigation Buttons */}
        <button
          className="custom-prev absolute top-1/2 -left-4 z-10 
                   -translate-y-1/2 bg-white dark:bg-gray-800 
                   p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          className="custom-next absolute top-1/2 -right-4 z-10 
                   -translate-y-1/2 bg-white dark:bg-gray-800 
                   p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {certificates.map((cert, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-sm text-gray-500">{cert.subtitle}</span>

                  <h3 className="text-xl font-semibold mt-1 mb-4">
                    {cert.title}
                  </h3>

                  <button
                    onClick={() => setSelectedIndex(idx)}
                    className="mt-auto px-5 py-2 rounded-full font-semibold 
                               bg-linear-to-r from-indigo-600 to-cyan-500
                               text-white hover:scale-105 transition"
                  >
                    View Certificate
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedIndex(null);
              setZoomed(false);
            }}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[85vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 flex items-center justify-center overflow-hidden relative p-4">
                <img
                  src={certificates[selectedIndex].img}
                  alt={certificates[selectedIndex].title}
                  onClick={() => setZoomed(!zoomed)}
                  className={`transition-transform duration-300 cursor-pointer 
                    ${zoomed ? "scale-150" : "scale-100"} 
                    max-h-[70vh] object-contain`}
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-4 bg-black/50 text-white px-3 py-2 rounded-full"
                >
                  ←
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 bg-black/50 text-white px-3 py-2 rounded-full"
                >
                  →
                </button>
              </div>

              <div className="p-4 border-t flex justify-between items-center">
                <h3 className="font-semibold">
                  {certificates[selectedIndex].title}
                </h3>

                <button
                  onClick={() => {
                    setSelectedIndex(null);
                    setZoomed(false);
                  }}
                  className="text-red-500 font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
