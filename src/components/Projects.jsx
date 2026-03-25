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
          overview: "Structured learning spaces that strengthen foundational literacy and numeracy for children and adults in isolated rural villages, using a level-based, personalised teaching approach.",
          objective: "To strengthen foundational literacy and numeracy skills among children and adults in isolated rural villages through structured, personalised learning.",
          whoItServes: "Children and adults in underserved rural villages with limited access to quality education.",
          howItWorks: [
            "Level-based assessment to identify each learner's starting point and group them accordingly.",
            "Personalised teaching sessions conducted in dedicated community learning spaces.",
            "Regular progress tracking and community involvement to ensure continuity and accountability.",
          ],
          icon: BookOpen,
          images: ['/project1a.png', '/project1b.png', '/project1c.png', '/project1d.png'],
        },
        {
          id: 7,
          title: "Teachers Training",
          shortDesc: "Empowering educators with skills to deliver quality and inclusive education.",
          overview: "A capacity-building initiative aimed at equipping educators with modern teaching methodologies and practical skills to improve the quality of education in rural learning environments.",
          objective: "To enhance teaching effectiveness and ensure quality, inclusive education in rural schools.",
          whoItServes: "Rural teachers, community educators, and aspiring instructors.",
          howItWorks: [
            "Training workshops and sessions.",
            "Practical teaching methodologies.",
            "Continuous mentoring and support.",
          ],
          icon: GraduationCap,
          images: ['/project7a.png', '/project7b.png', '/project7c.png', '/project7d.png'],
        },
        {
          id: 8,
          title: "Career Compass",
          shortDesc: "Guiding rural youth towards higher education, career pathways, and life opportunities.",
          overview: "A guidance platform that supports rural youth in navigating higher education, career pathways, and life decisions through structured mentoring and exposure.",
          objective: "To bridge the awareness gap and enable rural youth to access education and career opportunities.",
          whoItServes: "Students and youth from rural and underserved backgrounds.",
          howItWorks: [
            "Regular updates on career informations.",
            "Online and offline career guidance programs.",
            "Mentorship and counseling.",
          ],
          icon: Zap,
          images: ['/project8a.png', '/project8b.png', '/project8c.png', '/project8d.png'],
        },
        {
          id: 11,
          title: "Hope School",
          shortDesc: "Creating access to structured learning environments for marginalised children.",
          overview: "An initiative designed to transition of marginalized children from informal learning environments into structured formal education systems, ensuring access to quality academics and essential facilities.",
          objective: "To provide marginalized children with access to structured schooling.",
          whoItServes: "Children from marginalized communities.",
          howItWorks: [
            "Enrollment into formal schooling.",
            "Scholarship support for those in need.",
            "Continuous academic and personal development support.",
          ],
          icon: BookOpen,
          images: ['/project11a.png', '/project11b.png', '/project11c.png', '/project11d.png'],
        },
        {
          id: 5,
          title: "Model Community Project",
          shortDesc: "Building education-focused community models that enable long-term transformation.",
          overview: "A holistic development initiative that transforms a village into a model community by integrating education, livelihood, health, and social development programs.",
          objective: "To create a replicable model of sustainable rural development at the community level.",
          whoItServes: null,
          howItWorks: null,
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
          overview: "A community-based initiative that strengthens collective action by women that promote mutual support for community growth.",
          objective: "Strengthen community resilience through collective activities.",
          whoItServes: "Women from rural and marginalized communities.",
          howItWorks: null,
          icon: Users,
          images: ['/project12a.png', '/project12b.png', '/project12c.png', '/project12d.png'],
        },
        {
          id: 3,
          title: "Skill Development Centre",
          shortDesc: "Practical, skill-based training to enhance employability and income opportunities.",
          overview: "A training initiative that equips individuals with practical and vocational skills to improve employability and create income-generating opportunities.",
          objective: "To bridge the skill gap and enable individuals to access sustainable livelihood opportunities.",
          whoItServes: "Unemployed youth, women, and individuals seeking skill-based opportunities.",
          howItWorks: [
            "Hands-on vocational training.",
            "Industry-relevant skill development.",
          ],
          icon: Briefcase,
          images: ['/project3a.png', '/project3b.png', '/project3c.png', '/project3d.png'],
        },
        {
          id: 13,
          title: "Learn to Lead",
          shortDesc: "Developing leadership, communication, and life skills among rural graduates.",
          overview: "A leadership development program designed to equip rural youth and graduates with essential skills for personal growth and community engagement.",
          objective: "To develop future leaders who can contribute to community growth and social change.",
          whoItServes: "Rural youth, students, and graduates.",
          howItWorks: [
            "Leadership and personality development sessions.",
            "Communication and life skills training.",
            "Mentorship and guided learning.",
          ],
          icon: GraduationCap,
          images: ['/project13a.png', '/project13b.png', '/project13c.png', '/project13d.png'],
        },
        {
          id: 14,
          title: "ROOT'ed",
          shortDesc: "An immersive rural internship connecting students with real community challenges.",
          overview: "An immersive internship program that connects students with rural communities, enabling them to understand grassroots realities and contribute through innovative ideas and solutions.",
          objective: "To foster experiential learning and inspire youth to engage in community-driven development.",
          whoItServes: "Students and young individuals interested in social impact and rural development.",
          howItWorks: null,
          icon: Zap,
          images: ['/project14a.png', '/project14b.png', '/project14c.png', '/project14d.png'],
        },
        {
          id: null,
          title: "Industry Connect Program (ICP)",
          shortDesc: "Creating pathways between rural talent and industry opportunities.",
          overview: "A future initiative aimed at bridging the gap between rural talent and industry by creating pathways for employment, exposure, and skill alignment.",
          objective: "To connect skilled individuals from rural communities with relevant industry opportunities.",
          whoItServes: "Skilled youth and job seekers from rural backgrounds.",
          howItWorks: [
            "Industry partnerships.",
            "Placement support and guidance.",
            "Skill alignment with market needs.",
          ],
          icon: Briefcase,
          images: [],
          isPlaceholder: true,
          comingSoon: true,
        },
        {
          id: null,
          title: "Mobile Repairing Centre",
          shortDesc: "Technical skill training to create sustainable livelihood opportunities.",
          overview: null,
          objective: null,
          whoItServes: null,
          howItWorks: null,
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
          overview: "A community health initiative focused on improving awareness, access, and promoting better health practices in rural communities.",
          objective: null,
          whoItServes: null,
          howItWorks: null,
          icon: Heart,
          images: ['/project2a.png', '/project2b.png', '/project2c.png', '/project2d.png'],
        },
        {
          id: 4,
          title: "Monthly Medical Camp",
          shortDesc: "Accessible healthcare services and medical support in underserved rural areas.",
          overview: "A monthly healthcare initiative that provides basic medical services and consultations to underserved rural populations.",
          objective: null,
          whoItServes: "Individuals and families in rural and underserved areas.",
          howItWorks: [
            "Regular medical camps in villages.",
            "Basic check-ups and consultations.",
            "Distribution of essential medicines.",
          ],
          icon: Heart,
          images: ['/project4a.png', '/project4b.png', '/project4c.png', '/project4d.png'],
        },
        {
          id: 15,
          title: "Medicare Support",
          shortDesc: "Assisting individuals with access to basic medical needs and essential care.",
          overview: "A support initiative that assists individuals in accessing essential medical care, treatment, and basic health resources.",
          objective: null,
          whoItServes: "Economically vulnerable individuals requiring medical assistance.",
          howItWorks: [
            "Support for basic medical needs.",
            "Assistance in accessing treatment.",
            "Emergency and need-based interventions.",
          ],
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
          overview: "A welfare initiative that provides essential clothing to children and families, especially during festive occasions and seasonal needs.",
          objective: null,
          whoItServes: null,
          howItWorks: null,
          icon: Users,
          images: ['/project16a.png', '/project16b.png', '/project16c.png', '/project16d.png'],
        },
        {
          id: 6,
          title: "Food Kit Distribution",
          shortDesc: "Ensuring food security for vulnerable households through timely support.",
          overview: "A relief initiative aimed at addressing food insecurity by distributing essential food kits to vulnerable households.",
          objective: null,
          whoItServes: null,
          howItWorks: null,
          icon: Users,
          images: ['/project6a.png', '/project6b.png', '/project6c.png', '/project6d.png'],
        },
        {
          id: 17,
          title: "Study Kit Distribution",
          shortDesc: "Providing essential learning materials to support children's continuity in education.",
          overview: "An educational support initiative that provides essential learning materials to children, enabling them to continue their education without barriers.",
          objective: "To support children's learning by ensuring access to basic educational resources.",
          whoItServes: "School-going children from marginalized communities.",
          howItWorks: null,
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

              {/* Cards Grid — 3 per row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <div className={`relative rounded-2xl p-5 overflow-hidden transition-all duration-500 h-44 flex flex-col justify-between ${
                        project.isPlaceholder
                          ? 'bg-gradient-to-br from-gray-100 to-gray-200 cursor-default'
                          : `neumorphic-card ${getCardGradient(idx)}`
                      }`}>

                        {project.isPlaceholder ? (
                          <>
                            <div className="w-9 h-9 bg-gray-300 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-500 mb-1">{project.title}</p>
                              <span className="text-[11px] bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full font-semibold">
                                Coming Soon
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-sm leading-snug mb-1.5 line-clamp-2">
                                {project.title}
                              </h4>
                              <p className="text-white/75 text-xs leading-relaxed line-clamp-2">
                                {project.shortDesc}
                              </p>
                            </div>
                          </>
                        )}

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
              <h2 className="text-base sm:text-xl font-bold truncate pr-2">
                {expandedData.title}
              </h2>
              <button
                onClick={() => setExpandedProject(null)}
                className="ml-2 p-1.5 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
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

              {/* RIGHT — Project Details */}
              <div className="p-4 sm:p-6 flex flex-col justify-start bg-white lg:overflow-y-auto">
                <div className="space-y-4">

                  {/* Project Overview — always shown */}
                  {expandedData.overview && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-full flex-shrink-0"></div>
                        Project Overview
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm pl-3">
                        {expandedData.overview}
                      </p>
                    </div>
                  )}

                  {/* Objective — only if provided */}
                  {expandedData.objective && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-full flex-shrink-0"></div>
                        Objective
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm pl-3">
                        {expandedData.objective}
                      </p>
                    </div>
                  )}

                  {/* Who It Serves — only if provided */}
                  {expandedData.whoItServes && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-full flex-shrink-0"></div>
                        Who It Serves
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm pl-3">
                        {expandedData.whoItServes}
                      </p>
                    </div>
                  )}

                  {/* How It Works — only if provided */}
                  {expandedData.howItWorks && expandedData.howItWorks.length > 0 && (
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-full flex-shrink-0"></div>
                        How It Works
                      </h3>
                      <ul className="space-y-2 pl-3">
                        {expandedData.howItWorks.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-600"></span>
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{point}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}