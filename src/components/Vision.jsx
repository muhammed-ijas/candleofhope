import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { BookOpen, Zap, Users, Globe, GraduationCap, Briefcase, Building2 } from 'lucide-react';

function Vision() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const visionPoints = [
    {
      icon: BookOpen,
      title: "Foundation Learning Centers",
      description: "Establish 300 new Foundation Learning Centres to strengthen foundational literacy across underserved villages."
    },
    {
      icon: Zap,
      title: "Skill Development Projects",
      description: "Launching new 50 skill development projects and creating a platform to market products prepared by learners."
    },
    {
      icon: Users,
      title: "Leadership & Empowerment",
      description: "Initiating projects like Hope Fellowship, Learn 2 Lead, and Educine, designed to build leadership and empower rural youth."
    },
    {
      icon: Globe,
      title: "Integrated Impact",
      description: "Committed to reaching 1,00,000 beneficiaries through integrated programs in education, health, skills, and community development."
    },
    {
      icon: GraduationCap,
      title: "Career Compass Platform",
      description: "Develop Career Compass into a platform for guidance of higher studies and career counselling."
    },
    {
      icon: Briefcase,
      title: "Employment Pathways",
      description: "Creating employment pathways for 300 youth through the Industry Connect program."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      
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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
      `}</style>

      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/image5.jpg)',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Black Overlay with Transparency */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 z-10 relative">
        
        {/* Top Section - Main Heading */}
        <motion.div 
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          
          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
              Vision 2030
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-400 via-orange-300 to-orange-400 rounded-full mx-auto"></div>
          </div>

          {/* Subtitle/Mission */}
          <p className="text-lg sm:text-xl text-gray-100 font-light leading-relaxed">
            Uplift rural villages through transformative, sustainable educational and social initiatives that empower communities to realise their potential and create a lasting impact.
          </p>
        </motion.div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px 0px -100px 0px",
              }}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-6 border border-white/20 hover:border-red-400/50 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-125  transition-transform duration-300">
                  <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300 leading-tight">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {point.description}
                </p>
              </div>

              {/* Border Accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-300 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

       

      </div>
    </section>
  );
}

export default Vision;