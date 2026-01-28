import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { BookOpen, Heart, Briefcase, Users, GraduationCap, Zap, Building2, X } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  // Organized by categories with 4 cards each
  const categories = [
    {
      name: "Education",
      projects: [
        {
          id: 1,
          title: "Foundation Learning Centres (FLC)",
          description: "Structured learning spaces that strengthen foundational literacy and numeracy for children and adults in isolated rural villages, using a level-based, personalised teaching approach.",
          icon: BookOpen,
          images: ['/project1a.png', '/project1b.png', '/project1c.png', '/project1d.png']
        },
        {
          id: 7,
          title: "Teachers Training",
          description: "Empowering educators with advanced teaching methodologies, modern pedagogical approaches, and skill-based training to improve educational quality in rural areas.",
          icon: GraduationCap,
          images: ['/project7a.png', '/project7b.png', '/project7c.png', '/project7d.png']
        },
        {
          id: 8,
          title: "Career Compass",
          description: "A structured career guidance initiative that helps rural students explore opportunities, understand higher education pathways, and make informed career decisions.",
          icon: Zap,
          images: ['/project8a.png', '/project8b.png', '/project8c.png', '/project8d.png']
        },
        {
          id: null,
          title: "Coming Soon",
          description: "",
          icon: BookOpen,
          images: [],
          isPlaceholder: true
        }
      ]
    },
    {
      name: "Skill",
      projects: [
        {
          id: 3,
          title: "Skill Development Centre",
          description: "The Stitching Centre equips rural women with practical tailoring skills, enabling them to earn independently and build sustainable livelihoods.",
          icon: Briefcase,
          images: ['/project3a.png', '/project3b.png', '/project3c.png', '/project3d.png']
        },
        {
          id: 9,
          title: "ICP – Industry Connect Program",
          description: "Industry experts from diverse sectors visit rural training institutions to identify skilled and aspiring youth. Partner firms offer practical, hands-on training that helps learners gain industrial exposure and refine their technical competencies.",
          icon: Briefcase,
          images: ['/project9a.png', '/project9b.png', '/project9c.png', '/project9d.png']
        },
        {
          id: null,
          title: "Coming Soon",
          description: "",
          icon: Briefcase,
          images: [],
          isPlaceholder: true
        },
        {
          id: null,
          title: "Coming Soon",
          description: "",
          icon: Briefcase,
          images: [],
          isPlaceholder: true
        }
      ]
    },
    {
      name: "Health",
      projects: [
        {
          id: 2,
          title: "Project Jeevan Jyothi",
          description: "A rural community–oriented awareness initiative conducted in collaboration with local organization's, addressing health, education, welfare, and social development issues.",
          icon: Heart,
          images: ['/project2a.png', '/project2b.png', '/project2c.png', '/project2d.png']
        },
        {
          id: 4,
          title: "Monthly Charitable Medical Camp",
          description: "Regular medical camps offering free consultations, basic check-ups, medicines, and health awareness sessions for underserved rural families.",
          icon: Heart,
          images: ['/project4a.png', '/project4b.png', '/project4c.png', '/project4d.png']
        },
        {
          id: 6,
          title: "Food Distribution Program",
          description: "Attracting and retaining students from marginalised areas in the classroom through a supportive food distribution program that strengthens their engagement in education.",
          icon: Users,
          images: ['/project6a.png', '/project6b.png', '/project6c.png', '/project6d.png']
        },
        {
          id: 10,
          title: "Humanitarian & Welfare Programs",
          description: "Small-scale relief efforts, including blanket distribution, food kits, study materials, clothing, and emergency assistance to families in distress.",
          icon: Users,
          images: ['/project10a.png', '/project10b.png', '/project10c.png', '/project10d.png']
        }
      ]
    },
    {
      name: "Youth Upskilling",
      projects: [
        {
          id: 5,
          title: "Samsi 2.0 – Model Community Project",
          description: "A transformative initiative aimed at uplifting a marginalised snake-charmer community living in a slum area. The project focuses on education, health, livelihood, and social development to convert the colony into a sustainable, model community.",
          icon: Building2,
          images: ['/project5a.png', '/project5b.png', '/project5c.png', '/project5d.png']
        },
        {
          id: null,
          title: "Coming Soon",
          description: "",
          icon: Building2,
          images: [],
          isPlaceholder: true
        },
        {
          id: null,
          title: "Coming Soon",
          description: "",
          icon: Building2,
          images: [],
          isPlaceholder: true
        },
        {
          id: null,
          title: "Coming Soon",
          description: "",
          icon: Building2,
          images: [],
          isPlaceholder: true
        }
      ]
    }
  ];

  // Find expanded project from all categories
  const expandedData = expandedProject 
    ? categories.flatMap(cat => cat.projects).find(p => p.id === expandedProject) 
    : null;

  // Auto-slide images every 3 seconds
  useEffect(() => {
    if (!expandedData || !expandedData.images || expandedData.images.length === 0) {
      return;
    }
    
    setCurrentImageIndex(0);
    setImageError({});
    
    let intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % expandedData.images.length;
        return nextIndex;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [expandedData?.id]);

  const handleImageError = (imagePath) => {
    setImageError(prev => ({ ...prev, [imagePath]: true }));
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to get card gradient based on index
  const getCardGradient = (index) => {
    if (index % 2 === 0) {
      return 'bg-gradient-to-br from-red-500 to-red-600';
    } else {
      return 'bg-gradient-to-br from-red-700 to-red-900';
    }
  };

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
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 via-red-700 to-red-900 rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-base text-gray-600">
            Transformative initiatives creating lasting impact across rural communities
          </p>
        </motion.div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((category) => (
            <div key={category.name}>
              {/* Category Title */}
              <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  margin: "-100px 0px -100px 0px",
                }}
                className="mb-6"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
              </motion.div>

              {/* Projects Grid - Always 4 cards, no zigzag, reduced spacing */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {category.projects.map((project, idx) => {
                  const IconComponent = project.icon;
                  
                  return (
                    <motion.button
                      key={`${category.name}-${idx}`}
                      variants={fadeIn("up", 0.05 * idx)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{
                        once: true,
                        margin: "-100px 0px -100px 0px",
                      }}
                      onClick={() => !project.isPlaceholder && setExpandedProject(project.id)}
                      className="w-full"
                      disabled={project.isPlaceholder}
                    >
                      {/* Card Container */}
                      <div className={`relative rounded-3xl p-4 overflow-hidden transition-all duration-500 h-52 flex flex-col items-center justify-center ${
                        project.isPlaceholder 
                          ? 'bg-gradient-to-br from-gray-200 to-gray-300 cursor-not-allowed opacity-60' 
                          : `neumorphic-card ${getCardGradient(idx)}`
                      }`}>
                        
                        {project.isPlaceholder ? (
                          <>
                            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center mb-3">
                              <IconComponent className="w-5 h-5 text-gray-500" />
                            </div>
                            <h4 className="text-gray-600 font-bold text-center text-sm">
                              {project.title}
                            </h4>
                          </>
                        ) : (
                          <>
                            {/* Title - Centered */}
                            <h4 className="text-white font-bold text-center text-sm line-clamp-4 mb-3">
                              {project.title}
                            </h4>

                            {/* Category Badge */}
                            <p className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                              {category.name}
                            </p>
                          </>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
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
        <div 
          className="animate-modal-in fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setExpandedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:h-[75vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 sm:p-4 flex items-start justify-between flex-shrink-0">
              <div className="flex-1 min-w-0">
                <h2 className="text-base sm:text-xl font-bold truncate pr-2">
                  {expandedData.title}
                </h2>
              </div>
              <button
                onClick={() => setExpandedProject(null)}
                className="ml-2 p-1.5 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Responsive Layout */}
            <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-0 min-h-0 overflow-y-auto lg:overflow-hidden">
              
              {/* LEFT/TOP - Image Slider */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 flex flex-col items-center justify-center flex-shrink-0 lg:flex-shrink">
                <div className="relative w-full max-w-[280px]">
                  
                  {/* Image Container - Rounded Square */}
                  <div className="aspect-square relative">
                    <div className="relative w-full h-full overflow-hidden shadow-2xl bg-gradient-to-br from-red-950 via-red-900 to-black rounded-3xl">
                      {expandedData.images && expandedData.images.map((image, index) => (
                        <div
                          key={`${expandedData.id}-${image}-${index}`}
                          className={`absolute inset-0 transition-opacity duration-700 ${
                            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                        >
                          {imageError[image] ? (
                            // Fallback when image fails to load
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
                              <div className="text-center space-y-2 px-3">
                                <div className="relative w-16 h-16 mx-auto">
                                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 animate-pulse"></div>
                                  <div className="absolute inset-2 bg-white rounded-full border-2 border-red-400 flex items-center justify-center shadow-lg">
                                    <span className="text-2xl font-bold text-red-600">
                                      {index + 1}
                                    </span>
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-red-900 font-bold text-sm">
                                    Image {index + 1}
                                  </p>
                                  <p className="text-red-700 text-xs bg-white/80 px-2 py-1 rounded-full inline-block shadow-sm">
                                    {image.split('/').pop()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={image}
                              alt={`${expandedData.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover rounded-3xl"
                              onError={() => handleImageError(image)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image indicators - Below image, centered */}
                  <div className="mt-4 flex justify-center gap-2">
                    {expandedData.images && expandedData.images.map((_, index) => (
                      <button
                        key={`dot-${expandedData.id}-${index}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToImage(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-red-600 w-8' 
                            : 'bg-red-300 w-2 hover:bg-red-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT/BOTTOM - Description */}
              <div className="p-4 sm:p-6 flex flex-col justify-center bg-white lg:overflow-y-auto">
                <div className="space-y-4">
                  {/* Description */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-1 h-5 bg-gradient-to-b from-red-600 to-red-700 rounded-full"></div>
                      Project Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                      {expandedData.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}