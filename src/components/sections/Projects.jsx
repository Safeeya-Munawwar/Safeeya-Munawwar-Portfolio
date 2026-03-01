import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"; // ✅ ADD THIS
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import agriImg from "../../assets/projects/agri.webp";
import netlankatravelsImg from "../../assets/projects/netlanka.webp";
import hotelImg from "../../assets/projects/hotel.webp";
import spiceImg from "../../assets/projects/spice.webp";
import netlankaImg from "../../assets/projects/net.webp";
import bookImg from "../../assets/projects/book-store.webp";
import employeeImg from "../../assets/projects/employee.webp";
import bookListImg from "../../assets/projects/book-list.webp";
import counterImg from "../../assets/projects/counter.webp";
import taskImg from "../../assets/projects/task.webp";
import islandImg from "../../assets/projects/island.webp";
import mainImg from "../../assets/projects/educertify.webp";
import unimoImg from "../../assets/projects/unimo.webp";
import portfolioNewImg from "../../assets/projects/portfolio-html.webp";
import portfolioImg from "../../assets/projects/simple-react-portfolio.webp";
import mediImg from "../../assets/projects/medicare.webp";
import libraryImg from "../../assets/projects/library.webp";
import medicineImg from "../../assets/projects/medicine.webp";
import studentImg from "../../assets/projects/student.webp";
import javapImg from "../../assets/projects/pharmacy-console.webp";
import tastyImg from "../../assets/projects/tasty.webp";

const projects = [
  {
    img: agriImg,
    title: "Agri Marketplace",
    subtitle: "E-Commerce Platform",
    tech: "React.js, Node.js, Express, MySQL",
    description:
      "A full-stack e-commerce platform for agricultural products, featuring user authentication, product listings, and order management. Private project.",
    note: "Company project – public GitHub not available, private repo only.",
  },
  {
    img: netlankatravelsImg,
    title: "Net Lanka Travels",
    subtitle: "Tour Management System",
    tech: "React.js, Node.js, Express, MongoDB",
    link: "https://netlankatravels.com",
    description:
      "A tour management website with booking, itinerary management, and online payment integration. Live production site available.",
    note: "Company project – public GitHub not available, private repo only.",
  },
  {
    img: hotelImg,
    title: "Net Lanka Hotel",
    subtitle: "Hotel Management System",
    tech: "React.js, Node.js, Express, MongoDB",
    link: "https://github.com/Safeeya-Munawwar/Hotel-Management-System.git",
    description:
      "A hotel management system for room bookings, staff management, and customer records.",
  },
  {
    img: spiceImg,
    title: "Net Lanka Spices",
    subtitle: "E-Commerce Platform",
    tech: "React.js, Node.js, Express, MongoDB",
    link: "https://github.com/Safeeya-Munawwar/NetLanka-Spices.git",
    description:
      "An online spice store with product catalog, shopping cart, and admin dashboard.",
  },
  {
    img: netlankaImg,
    title: "Net Lanka Tours & Holidays",
    subtitle: "Tour Management System",
    tech: "React.js, Node.js, Express, MongoDB",
    link: "https://github.com/Safeeya-Munawwar/NetLanka-Tours.git",
    description:
      "A tour management website with booking, itinerary management, and online payment integration.",
  },
  {
    img: bookImg,
    title: "Book Store Management System",
    subtitle: "Inventory & Sales Management",
    tech: "ASP.NET, Angular, SQL Server",
    link: "https://github.com/Safeeya-Munawwar/Bookstore-Management-System.git",
    description:
      "Manage books, sales, and inventory with ASP.NET backend and Angular frontend.",
  },
  {
    img: employeeImg,
    title: "Employee Management System",
    subtitle: "HR & Staff Management",
    tech: "ASP.NET, Angular, SQL Server",
    link: "https://github.com/Safeeya-Munawwar/Employee-Management-System.git",
    description:
      "A system to track employees, attendance, and payroll for HR purposes.",
  },
  {
    img: bookListImg,
    title: "Book List App",
    subtitle: "Interactive Book Collection",
    tech: "ASP.NET, Angular",
    link: "https://github.com/Safeeya-Munawwar/Interactive-Book-List-App-with-ASP.NET-Core-and-Angular.git",
    description:
      "An app to manage and interact with personal book collections with search and categorization.",
  },
  {
    img: counterImg,
    title: "Counter App",
    subtitle: "Angular Practice Project",
    tech: "Angular",
    link: "https://github.com/Safeeya-Munawwar/Angular-Counter-App.git",
    description:
      "A simple Angular practice project to learn state management and component interaction.",
  },
  {
    img: taskImg,
    title: "Task Management System",
    subtitle: "Productivity & Task Tracking",
    tech: "React.js, Node.js, Express, MongoDB",
    link: "https://github.com/Safeeya-Munawwar/Task-Management-System.git",
    description:
      "A web app to create, track, and manage tasks with real-time updates.",
  },
  {
    img: islandImg,
    title: "Island Explorer",
    subtitle: "Tour Website",
    tech: "React.js, EmailJS",
    link: "https://github.com/Safeeya-Munawwar/Island-Explorer-Tour-Website.git",
    description:
      "A tourism website showcasing tour packages with booking forms and email integration.",
  },
  {
    img: mainImg,
    title: "EduCertify",
    subtitle: "Result Sheet & Certificate Generator",
    tech: "React.js, Node.js, Express, MySQL, TailwindCSS",
    link: "https://github.com/Safeeya-Munawwar/Edu_Certify-ResultSheet_and_Certificate_Generator.git",
    description:
      "Generate student resultsheets and certificates automatically from stored marks data.",
  },
  {
    img: unimoImg,
    title: "Unimo Family",
    subtitle: "Restaurant Management System",
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
    link: "https://github.com/Safeeya-Munawwar/Restaurant-Management-System.git",
    description:
      "Manage restaurant orders, menus, and customer data with PHP and MySQL backend.",
  },
  {
    img: portfolioNewImg,
    title: "Personal Portfolio",
    subtitle: "Portfolio Website",
    tech: "JavaScript, HTML5, CSS3",
    link: "https://github.com/Safeeya-Munawwar/Safeeya-Munawwar-Personal-Portfolio.git",
    description:
      "Showcase of personal projects, skills, and resume in a clean web portfolio.",
  },
  {
    img: portfolioImg,
    title: "Portfolio",
    subtitle: "React Portfolio Website",
    tech: "React.js, TailwindCSS",
    link: "https://github.com/Safeeya-Munawwar/Personal-Portfolio.git",
    description:
      "A modern React-based portfolio to display projects, experience, and contact info.",
  },
  {
    img: mediImg,
    title: "MediCare Lanka",
    subtitle: "Pharmacy Management System",
    tech: "PHP, MySQL, HTML, CSS, JavaScript",
    link: "https://github.com/Safeeya-Munawwar/Pharmacy-Management-System.git",
    description:
      "Track medicines, manage stock, and handle sales for a pharmacy environment.",
  },
  {
    img: libraryImg,
    title: "Library Management System",
    subtitle: "Library Inventory & Borrowing System",
    tech: "Java, MySQL",
    link: "https://github.com/Safeeya-Munawwar/Library_Management_System.git",
    description:
      "Manage library books, borrowers, and issuing/returning with Java console application.",
  },
  {
    img: medicineImg,
    title: "Medicine Expiry Date Reminder",
    subtitle: "Expiry Notification App",
    tech: "JavaScript, HTML, CSS",
    link: "https://Safeeya-Munawwar.github.io/Medicine-Expiry-Date-Reminder-App/",
    description:
      "A simple web app to track medicine expiry dates and provide timely notifications.",
  },
  {
    img: studentImg,
    title: "Grade Management System",
    subtitle: "Student Grade Tracking",
    tech: "Java - Console Based",
    link: "https://github.com/Safeeya-Munawwar/Student-Grade-Management-System.git",
    description:
      "Console-based application to track and calculate student grades efficiently.",
  },
  {
    img: javapImg,
    title: "Pharmacy Management System",
    subtitle: "Console-Based Inventory System",
    tech: "Java - Console Based",
    link: "https://github.com/Safeeya-Munawwar/Java-Console-Based-Pharmacy-Management-System.git",
    description:
      "Java console app to manage pharmacy stock, sales, and inventory records.",
  },
  {
    img: tastyImg,
    title: "Tasty Bud Recipes",
    subtitle: "Recipe Blog",
    tech: "Blog",
    link: "https://Safeeya-Munawwar.github.io/TastyBudRecipes/",
    description:
      "A recipe blog sharing cooking recipes with categories and images.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Floating Hero Blobs */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400 rounded-full opacity-20 blur-3xl"
      />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold 
               tracking-tight text-gray-800 dark:text-gray-100"
        >
          Projects & Portfolio
        </h2>
        <p
          className="mt-3 text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              leading-relaxed max-w-xl mx-auto"
        >
          A curated selection of personal and professional projects  <span className="hidden sm:inline">
            <br />
          </span>
          Showcasing creativity, problem-solving, and technical skills
        </p>
      </motion.div>

      {/* Swiper */}
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
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="flex">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-2xl 
                         shadow-lg flex flex-col 
                         w-full h-115" // slightly taller for description
              >
                {/* Image */}
                {project.img && (
                  <div className="h-52 w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-sm text-indigo-600 dark:text-cyan-400">
                    {project.tech}
                  </span>

                  {project.subtitle && (
                    <span className="text-sm text-gray-500 mt-1 line-clamp-1">
                      {project.subtitle}
                    </span>
                  )}

                  <h3 className="text-xl font-semibold mt-2 mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  {project.description && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-4">
                      {project.description}
                    </p>
                  )}

                  {/* Note for private or restricted projects */}
                  {project.note && (
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
                      {project.note}
                    </p>
                  )}

                  {/* Conditional: link button or private project */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-center px-5 py-2 rounded-full font-semibold 
                               bg-linear-to-r from-indigo-600 to-cyan-500
                               text-white hover:scale-105 transition"
                    >
                      View Project
                    </a>
                  ) : (
                    <p
                      className="mt-4 text-center px-4 py-2 rounded-2xl font-medium
                                bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                                text-sm"
                    >
                      Private / Proprietary Project
                    </p>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
