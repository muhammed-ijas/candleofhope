import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { BookOpen, Heart, Briefcase, Users, GraduationCap, Zap, Building2, X } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "Education",
      title: "Foundation Learning Centres (FLC)",
      description: "Structured learning spaces that strengthen foundational literacy and numeracy for children and adults in isolated rural villages, using a level-based, personalised teaching approach.",
      icon: BookOpen
    },
    {
      id: 2,
      category: "Health & Awareness",
      title: "Project Jeevan Jyothi",
      description: "A rural community–oriented awareness initiative conducted in collaboration with local organization's, addressing health, education, welfare, and social development issues.",
      icon: Heart
    },
    {
      id: 3,
      category: "Skill Development",
      title: "Skill Development Centre",
      description: "The Stitching Centre equips rural women with practical tailoring skills, enabling them to earn independently and build sustainable livelihoods.",
      icon: Briefcase
    },
    {
      id: 4,
      category: "Health & Medical",
      title: "Monthly Charitable Medical Camp",
      description: "Regular medical camps offering free consultations, basic check-ups, medicines, and health awareness sessions for underserved rural families.",
      icon: Heart
    },
    {
      id: 5,
      category: "Community Development",
      title: "Samsi 2.0 – Model Community Project",
      description: "A transformative initiative aimed at uplifting a marginalised snake-charmer community living in a slum area. The project focuses on education, health, livelihood, and social development to convert the colony into a sustainable, model community.",
      icon: Building2
    },
    {
      id: 6,
      category: "Education & Support",
      title: "Food Distribution Program",
      description: "Attracting and retaining students from marginalised areas in the classroom through a supportive food distribution program that strengthens their engagement in education.",
      icon: Users
    },
    {
      id: 7,
      category: "Training & Development",
      title: "Teachers Training",
      description: "Empowering educators with advanced teaching methodologies, modern pedagogical approaches, and skill-based training to improve educational quality in rural areas.",
      icon: GraduationCap
    },
    {
      id: 8,
      category: "Career Development",
      title: "Career Compass",
      description: "A structured career guidance initiative that helps rural students explore opportunities, understand higher education pathways, and make informed career decisions.",
      icon: Zap
    },
    {
      id: 9,
      category: "Industry & Employment",
      title: "ICP – Industry Connect Program",
      description: "Industry experts from diverse sectors visit rural training institutions to identify skilled and aspiring youth. Partner firms offer practical, hands-on training that helps learners gain industrial exposure and refine their technical competencies.",
      icon: Briefcase
    },
    {
      id: 10,
      category: "Welfare & Relief",
      title: "Humanitarian & Welfare Programs",
      description: "Small-scale relief efforts, including blanket distribution, food kits, study materials, clothing, and emergency assistance to families in distress.",
      icon: Users
    }
  ];

  const expandedData = expandedProject ? projects.find(p => p.id === expandedProject) : null;

  return (
    <div className="relative min-h-screen bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-modal-in {
          animation: modalSlideIn 0.3s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .neumorphic-card {
          background: #dc2626;
          box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3),
                      -15px -15px 30px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .neumorphic-card:hover {
          box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.4),
                      -20px -20px 40px rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 z-10 relative">
        
        {/* Header */}
        <motion.div 
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
            Ongoing Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-400 via-orange-300 to-orange-400 rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-base text-gray-600">
            Transformative initiatives creating lasting impact across rural communities
          </p>
        </motion.div>

        {/* All 10 Projects Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              
              return (
                <motion.button
                  key={project.id}
                  variants={fadeIn("up", 0.05 * idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                    margin: "-100px 0px -100px 0px",
                  }}
                  onClick={() => setExpandedProject(project.id)}
                  className="w-full"
                >
                  {/* Card Container */}
                  <div className="relative rounded-3xl p-6 overflow-hidden transition-all duration-500 neumorphic-card h-64 flex flex-col items-center justify-center">
                  

                    {/* Number Badge */}
                    {/* <div className="text-5xl font-bold text-white/90 mb-2">
                      {String(project.id).padStart(2, '0')}
                    </div> */}

                    {/* Title - Truncated */}
                    <h4 className="text-white font-bold text-center text-sm line-clamp-2">
                      {project.title}
                    </h4>

                    {/* Category Badge */}
                    <p className="text-white/70 text-xs mt-3 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {expandedProject && (
        <div
          className="animate-fade-in fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setExpandedProject(null)}
        ></div>
      )}

      {/* Modal */}
      {expandedData && (
        <div className="animate-modal-in fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-8 flex items-start justify-between rounded-t-3xl">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-3">
                
                  <span className="text-xs font-semibold text-red-200 bg-red-900/50 px-3 py-1 rounded-full">
                    {expandedData.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold">
                  {expandedData.title}
                </h2>
              </div>
              <button
                onClick={() => setExpandedProject(null)}
                className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-base">
                  {expandedData.description}
                </p>
              </div>

             

              {/* Close Button */}
              <button
                onClick={() => setExpandedProject(null)}
                className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}