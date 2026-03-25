import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";

export default function JoinUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

 const joinOptions = [
  {
    id: 1,
    number: "01",
    title: "Donate",
    description:
      "Support our mission by contributing to education, health, and livelihood initiatives in underserved rural communities, which helps to create opportunities and lasting impact where it is most needed.",
    gradient: "from-red-600 to-red-700",
  },
  {
    id: 2,
    number: "02",
    title: "Sponsor / Adopt",
    description:
      "Sponsor a child, classroom, or village to ensure continuous learning and long-term community development, building a future of dignity, education, and self-reliance.",
    gradient: "from-orange-600 to-orange-700",
  },
  {
    id: 3,
    number: "03",
    title: "Partner with Us",
    description:
      "Collaborate with us through CSR or institutional partnerships to scale sustainable and impactful initiatives. Together, we can create meaningful change across communities.",
    gradient: "from-amber-600 to-amber-700",
  },
  {
    id: 4,
    number: "04",
    title: "Volunteer / Intern",
    description:
      "Be part of our on-ground initiatives by contributing your time, skills, and passion. Experience the impact of grassroots work while helping transform lives.",
    gradient: "from-red-500 to-orange-600",
  },
  {
    id: 5,
    number: "05",
    title: "Share Your Expertise",
    description:
      "Use your knowledge and professional skills to mentor, guide, and support our programs. Your expertise can help strengthen initiatives and empower communities more effectively.",
    gradient: "from-orange-500 to-red-600",
  },
];
  return (
    <section className="relative min-h-screen py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandLine {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-slide-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        .line-expand {
          animation: expandLine 0.8s ease-out forwards;
        }
      `}</style>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonalLines"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="40"
                  x2="40"
                  y2="0"
                  stroke="#dc2626"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>

        {/* Gradient Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-100/40 via-orange-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/40 via-red-50/30 to-transparent rounded-full blur-3xl"></div>

        {/* Geometric Accent Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-red-200/20 rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-orange-200/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-6">
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px 0px -100px 0px",
              }}
              className="inline-block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600"></div>
                <span className="text-sm font-bold text-red-600 tracking-widest uppercase">
                  Get Involved
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-600"></div>
              </div>
            </motion.div>
          </div>

          <motion.h2
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl  font-bold leading-tight text-gray-900 mb-8"
          >
            Be a Part of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
              The Change
            </span>
          </motion.h2>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -left-4 top-0 text-red-200 text-6xl font-serif">
              "
            </div>
            <p className="text-base sm:text-base text-gray-700 leading-relaxed px-8">
             Candle of Hope invites individuals, organizations, and institutions to join hands in transforming rural communities across East and Northeast India. Your support helps expand education, strengthen livelihoods, improve health, and uplift marginalized families.
            </p>
            <div className="absolute -right-4 bottom-0 text-red-200 text-6xl font-serif">
              "
            </div>
          </motion.div>
        </div>

        {/* Ways to Join - Staggered Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {joinOptions.map((option, index) => (
              <motion.div
                key={option.id}
                variants={fadeIn("up", 0.05 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  margin: "-100px 0px -100px 0px",
                }}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(option.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`group relative bg-white rounded-none border-l-8 border-gray-200 hover:border-red-600 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    index % 2 === 0 ? "ml-0 mr-8" : "ml-8 mr-0"
                  }`}
                >
                  {/* Sliding Background Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${option.gradient} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 p-5 sm:p-6 flex items-start gap-4 sm:gap-5">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div
                          className={`text-5xl sm:text-6xl font-bold text-gray-100 group-hover:text-white/20 transition-colors duration-500`}
                        >
                          {option.number}
                        </div>
                        <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-red-600 to-orange-600 group-hover:from-white group-hover:to-white w-0 group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                        {option.title}
                      </h3>

                      <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                        {option.description}
                      </p>

                     
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-gray-100 group-hover:border-r-white/20 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
