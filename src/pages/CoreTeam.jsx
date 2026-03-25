import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";
import { Linkedin, Mail, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Founder & Executive Director",
    bio: "Over 15 years of experience in rural community development and social entrepreneurship across Northeast India.",
    avatar: "AS",
    gradient: "from-red-600 to-red-700",
    socials: { linkedin: "#", mail: "arjun@candleofhope.org" },
  },
  {
    id: 2,
    name: "Priya Devi",
    role: "Director – Education Programs",
    bio: "Former government school teacher turned education reformer, championing foundational literacy in underserved villages.",
    avatar: "PD",
    gradient: "from-orange-600 to-orange-700",
    socials: { linkedin: "#", mail: "priya@candleofhope.org" },
  },
  {
    id: 3,
    name: "Rajan Kalita",
    role: "Head – Skill Development",
    bio: "Trained vocational expert with a decade of experience creating livelihood pathways for rural youth and women.",
    avatar: "RK",
    gradient: "from-amber-600 to-amber-700",
    socials: { linkedin: "#", mail: "rajan@candleofhope.org" },
  },
  {
    id: 4,
    name: "Sunita Gogoi",
    role: "Community Outreach Lead",
    bio: "Grassroots mobiliser who has built trust with over 200 village communities across Assam and West Bengal.",
    avatar: "SG",
    gradient: "from-red-500 to-orange-600",
    socials: { linkedin: "#", mail: "sunita@candleofhope.org" },
  },
  {
    id: 5,
    name: "Dr. Mohan Das",
    role: "Health Programs Advisor",
    bio: "Public health physician driving integrated health and sanitation initiatives in remote tribal regions.",
    avatar: "MD",
    gradient: "from-orange-500 to-red-600",
    socials: { linkedin: "#", mail: "mohan@candleofhope.org" },
  },
  {
    id: 6,
    name: "Meena Bora",
    role: "Women Empowerment Head",
    bio: "Social worker and gender rights advocate with a passion for building self-reliant women's collectives.",
    avatar: "MB",
    gradient: "from-red-600 to-amber-600",
    socials: { linkedin: "#", mail: "meena@candleofhope.org" },
  },

];

export default function CoreTeam() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative min-h-screen py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">

      {/* Animations */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
      `}</style>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalTeam" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="#dc2626" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalTeam)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-100/40 via-orange-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/40 via-red-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-red-200/20 rotate-12" />
        <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-orange-200/20 rotate-45" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20">

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600" />
              <span className="text-sm font-bold text-red-600 tracking-widest uppercase">
                Our People
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-600" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-8"
          >
            Meet Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
              Core Team
            </span>
          </motion.h2>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -left-4 top-0 text-red-200 text-6xl font-serif">"</div>
            <p className="text-base text-gray-700 leading-relaxed px-8">
              Behind every village touched and every life transformed is a passionate team of changemakers who have dedicated themselves to the mission of Candle of Hope International.
            </p>
            <div className="absolute -right-4 bottom-0 text-red-200 text-6xl font-serif">"</div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={fadeIn("up", 0.05 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="group relative bg-white rounded-none border-b-4 border-gray-200 hover:border-red-600 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">

                {/* Sliding background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-out`}
                />

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[36px] border-r-[36px] border-t-transparent border-r-gray-100 group-hover:border-r-white/20 transition-all duration-500 z-10" />

                <div className="relative z-10 p-6 flex flex-col items-center text-center h-full">

                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      <span className="text-white text-lg font-bold tracking-wide">
                        {member.avatar}
                      </span>
                    </div>
                    {/* Pulse ring */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-125 transition-all duration-500`}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-500 leading-tight">
                    {member.name}
                  </h3>

                  {/* Role pill */}
                  <div className="mb-3">
                    <span className="inline-block text-xs font-semibold text-red-600 group-hover:text-white/80 transition-colors duration-500 border border-red-200 group-hover:border-white/30 rounded-full px-3 py-0.5">
                      {member.role}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 group-hover:bg-none group-hover:bg-white mb-3 transition-all duration-500" />

                  {/* Bio */}
                  <p className="text-xs text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-500 flex-1">
                    {member.bio}
                  </p>

                  {/* Socials */}
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-500 w-full justify-center">
                    <a
                      href={member.socials.linkedin}
                      className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors duration-500" />
                    </a>
                    <a
                      href={`mailto:${member.socials.mail}`}
                      className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      aria-label="Email"
                    >
                      <Mail className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 mb-4">
            Want to join our growing team of changemakers?
          </p>
          <a
            href="/join-us"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-red-200 transition-all duration-500"
          >
            Join Our Mission
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}