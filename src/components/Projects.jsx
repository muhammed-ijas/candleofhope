import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { BookOpen, Heart, Briefcase, Users, GraduationCap, Zap, Building2, Wrench, X } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  const categories = [
    {
      name: "Education & Literacy",
      projects: [
        {
          id: 1,
          title: "Foundation Learning Centres (FLC)",
          shortDesc: "Strengthening foundational learning in underserved rural communities.",
          description: "Structured learning spaces that strengthen foundational literacy and numeracy for children and adults in isolated rural villages, using a level-based, personalised teaching approach.",
          icon: BookOpen,
          images: ['/project1a.png', '/project1b.png', '/project1c.png', '/project1d.png'],
        },
        {
          id: 7,
          title: "Teachers Training",
          shortDesc: "Empowering educators with skills to deliver quality and inclusive education.",
          description: "Empowering educators with advanced teaching methodologies, modern pedagogical approaches, and skill-based training to improve educational quality in rural areas.",
          icon: GraduationCap,
          images: ['/project7a.png', '/project7b.png', '/project7c.png', '/project7d.png'],
        },
        {
          id: 8,
          title: "Career Compass",
          shortDesc: "Guiding rural youth towards higher education, career pathways, and life opportunities.",
          description: "A structured career guidance initiative that helps rural students explore opportunities, understand higher education pathways, and make informed career decisions.",
          icon: Zap,
          images: ['/project8a.png', '/project8b.png', '/project8c.png', '/project8d.png'],
        },
        {
          id: 11,
          title: "Hope School",
          shortDesc: "Creating access to structured learning environments for marginalised children.",
          description: "Hope School creates access to structured and supportive learning environments for marginalised children, ensuring continuity of education and fostering a nurturing space for holistic growth.",
          icon: BookOpen,
          images: ['/project11a.png', '/project11b.png', '/project11c.png', '/project11d.png'],
        },
        {
          id: 5,
          title: "Model Community Project",
          shortDesc: "Building education-focused community models that enable long-term transformation.",
          description: "A transformative initiative aimed at uplifting a marginalised community. The project focuses on education, health, livelihood, and social development to build a sustainable, model community.",
          icon: Building2,
          images: ['/project5a.png', '/project5b.png', '/project5c.png', '/project5d.png'],
        },
      ]
    },
    {
      name: "Livelihood & Skill Development",
      projects: [
        {
          id: 12,
          title: "Self Help Groups (SHG)",
          shortDesc: "Strengthening community-based groups to promote collective growth.",
          description: "Strengthening community-based self-help groups to promote collective financial planning, savings, and mutual support — enabling rural women and families to grow together sustainably.",
          icon: Users,
          images: ['/project12a.png', '/project12b.png', '/project12c.png', '/project12d.png'],
        },
        {
          id: 3,
          title: "Skill Development Centre",
          shortDesc: "Practical, skill-based training to enhance employability and income opportunities.",
          description: "The Skill Development Centre equips rural women and youth with practical, vocational skills — including tailoring and allied trades — enabling them to earn independently and build sustainable livelihoods.",
          icon: Briefcase,
          images: ['/project3a.png', '/project3b.png', '/project3c.png', '/project3d.png'],
        },
        {
          id: 13,
          title: "Learn to Lead",
          shortDesc: "Developing leadership, communication, and life skills among rural graduates.",
          description: "A leadership development programme that builds communication, problem-solving, and life skills among rural youth and graduates — preparing them to become agents of change in their communities.",
          icon: GraduationCap,
          images: ['/project13a.png', '/project13b.png', '/project13c.png', '/project13d.png'],
        },
        {
          id: 14,
          title: "ROOT'ed",
          shortDesc: "An immersive rural internship connecting students with real community challenges.",
          description: "ROOT'ed is an immersive rural internship experience that connects students and young professionals with real grassroots challenges, fostering empathy, social awareness, and community-driven innovation.",
          icon: Zap,
          images: ['/project14a.png', '/project14b.png', '/project14c.png', '/project14d.png'],
        },
        {
          id: null,
          title: "Industry Connect Program (ICP)",
          shortDesc: "Creating pathways between rural talent and industry opportunities.",
          description: "Industry experts from diverse sectors visit rural training institutions to identify skilled youth. Partner firms offer hands-on training that helps learners gain industrial exposure and refine their competencies.",
          icon: Briefcase,
          images: [],
          isPlaceholder: true,
          comingSoon: true,
        },
        {
          id: null,
          title: "Mobile Repairing Centre",
          shortDesc: "Technical skill training to create sustainable livelihood opportunities.",
          description: "Offering technical skill training in mobile phone repair and electronics servicing to create sustainable, self-employment livelihood opportunities for rural youth.",
          icon: Wrench,
          images: [],
          isPlaceholder: true,
          comingSoon: true,
        },
      ]
    },
    {
      name: "Health & Wellbeing",
      projects: [
        {
          id: 2,
          title: "Project Jeevan Jyothi",
          shortDesc: "Promoting community health through awareness, support, and targeted health initiatives.",
          description: "A rural community-oriented awareness initiative conducted in collaboration with local organisations, addressing health, education, welfare, and social development issues in underserved villages.",
          icon: Heart,
          images: ['/project2a.png', '/project2b.png', '/project2c.png', '/project2d.png'],
        },
        {
          id: 4,
          title: "Monthly Medical Camp",
          shortDesc: "Accessible healthcare services and medical support in underserved rural areas.",
          description: "Regular medical camps offering free consultations, basic check-ups, medicines, and health awareness sessions for underserved rural families — bringing healthcare closer to the community.",
          icon: Heart,
          images: ['/project4a.png', '/project4b.png', '/project4c.png', '/project4d.png'],
        },
        {
          id: 15,
          title: "Medicare Support",
          shortDesc: "Assisting individuals with access to basic medical needs and essential care.",
          description: "Medicare Support assists individuals and families in accessing basic medical needs, essential medicines, and health services — bridging gaps in rural healthcare access.",
          icon: Heart,
          images: ['/project15a.png', '/project15b.png', '/project15c.png', '/project15d.png'],
        },
      ]
    },
    {
      name: "Humanitarian & Welfare Programs",
      projects: [
        {
          id: 16,
          title: "Dress Distribution",
          shortDesc: "Supporting children and families with essential clothing during key occasions.",
          description: "Supporting children and families with essential clothing, especially during key occasions and festive seasons — restoring dignity and spreading warmth in marginalised communities.",
          icon: Users,
          images: ['/project16a.png', '/project16b.png', '/project16c.png', '/project16d.png'],
        },
        {
          id: 6,
          title: "Food Kit Distribution",
          shortDesc: "Ensuring food security for vulnerable households through timely support.",
          description: "Ensuring food security for vulnerable households through timely distribution of food kits — supporting children's school attendance and strengthening family resilience in times of need.",
          icon: Users,
          images: ['/project6a.png', '/project6b.png', '/project6c.png', '/project6d.png'],
        },
        {
          id: 17,
          title: "Study Kit Distribution",
          shortDesc: "Providing essential learning materials to support children's continuity in education.",
          description: "Providing essential learning materials — notebooks, stationery, and school supplies — to support children's education continuity, especially in families that cannot afford basic study resources.",
          icon: BookOpen,
          images: ['/project17a.png', '/project17b.png', '/project17c.png', '/project17d.png'],
        },
      ]
    },
  ];

  const categoryAccents = {
    "Education & Literacy": "from-red-600 to-red-700",
    "Livelihood & Skill Development": "from-orange-600 to-orange-700",
    "Health & Wellbeing": "from-rose-600 to-red-700",
    "Humanitarian & Welfare Programs": "from-amber-600 to-orange-600",
  };

  const expandedData = expandedProject
    ? categories.flatMap(cat => cat.projects).find(p => p.id === expandedProject)
    : null;

  useEffect(() => {
    if (!expandedData || !expandedData.images || expandedData.images.length === 0) return;
    setCurrentImageIndex(0);
    setImageError({});
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % expandedData.images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [expandedData?.id]);

  const handleImageError = (imagePath) => {
    setImageError(prev => ({ ...prev, [imagePath]: true }));
  };

  const getCardGradient = (idx) =>
    idx % 2 === 0
      ? 'bg-gradient-to-br from-red-500 to-red-600'
      : 'bg-gradient-to-br from-red-700 to-red-900';

  return (
    <div className="relative min-h-screen bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInBg {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-modal-in  { animation: modalSlideIn 0.3s ease-out forwards; }
        .animate-fade-in   { animation: fadeInBg 0.3s ease-out forwards; }
        .neumorphic-card {
          box-shadow: 15px 15px 30px rgba(0,0,0,0.3), -15px -15px 30px rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        .neumorphic-card:hover {
          box-shadow: 20px 20px 40px rgba(0,0,0,0.4), -20px -20px 40px rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 z-10 relative">

        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
            Our Ongoing Initiatives
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 via-red-700 to-red-900 rounded-full mx-auto mb-6"></div>
          <p className="text-base text-gray-600">
            Transformative initiatives creating lasting impact across rural communities
          </p>
        </motion.div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto space-y-14">
          {categories.map((category) => (
            <div key={category.name}>

              {/* Category Title */}
              <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                className="mb-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${categoryAccents[category.name] || 'from-red-600 to-red-700'} rounded-full`}></div>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.projects.map((project, idx) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.button
                      key={`${category.name}-${idx}`}
                      variants={fadeIn("up", 0.05 * idx)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                      onClick={() => !project.isPlaceholder && setExpandedProject(project.id)}
                      className="w-full text-left"
                      disabled={project.isPlaceholder && !project.comingSoon}
                    >
                      <div className={`relative rounded-2xl p-4 overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between ${
                        project.isPlaceholder
                          ? 'bg-gradient-to-br from-gray-100 to-gray-200 cursor-default'
                          : `neumorphic-card ${getCardGradient(idx)}`
                      }`}>

                        {project.isPlaceholder ? (
                          <>
                            <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-gray-500" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-500 mb-1">{project.title}</p>
                              <span className="text-[10px] bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full font-semibold">
                                Coming Soon
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Icon */}
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>

                            {/* Title + Short Desc */}
                            <div>
                              <h4 className="text-white font-bold text-xs leading-snug mb-1.5 line-clamp-2">
                                {project.title}
                              </h4>
                              <p className="text-white/75 text-[10px] leading-relaxed line-clamp-2">
                                {project.shortDesc}
                              </p>
                            </div>
                          </>
                        )}

                        {/* Decorative corner */}
                        {!project.isPlaceholder && (
                          <div className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-r-[28px] border-t-transparent border-r-white/10"></div>
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

            {/* Modal Content */}
            <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-0 min-h-0 overflow-y-auto lg:overflow-hidden">

              {/* LEFT — Image Slider */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 flex flex-col items-center justify-center flex-shrink-0 lg:flex-shrink">
                <div className="relative w-full max-w-[280px]">
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
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
                              <div className="text-center space-y-2 px-3">
                                <div className="relative w-16 h-16 mx-auto">
                                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 animate-pulse"></div>
                                  <div className="absolute inset-2 bg-white rounded-full border-2 border-red-400 flex items-center justify-center shadow-lg">
                                    <span className="text-2xl font-bold text-red-600">{index + 1}</span>
                                  </div>
                                </div>
                                <p className="text-red-700 text-xs bg-white/80 px-2 py-1 rounded-full inline-block shadow-sm">
                                  {image.split('/').pop()}
                                </p>
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

                  {/* Dot indicators */}
                  <div className="mt-4 flex justify-center gap-2">
                    {expandedData.images && expandedData.images.map((_, index) => (
                      <button
                        key={`dot-${expandedData.id}-${index}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-red-600 w-8' : 'bg-red-300 w-2 hover:bg-red-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — Description */}
              <div className="p-4 sm:p-6 flex flex-col justify-center bg-white lg:overflow-y-auto">
                <div className="space-y-4">
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