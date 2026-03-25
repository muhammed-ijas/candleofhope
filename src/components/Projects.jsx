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
          description: "Empowering educators with advanced teaching methodologies, modern pedagogical approaches, and skill-based training to improve educational quality in rural areas.",
          objective: "To equip rural educators with modern teaching methodologies and inclusive pedagogical skills that elevate the quality of education.",
          whoItServes: "Teachers and educators working in rural and semi-urban schools and learning centres.",
          howItWorks: [
            "Structured training workshops covering modern pedagogical approaches and classroom management.",
            "Hands-on skill-building sessions with practical demonstrations and peer learning.",
            "Follow-up mentoring and support to help educators implement new methods effectively.",
          ],
          icon: GraduationCap,
          images: ['/project7a.png', '/project7b.png', '/project7c.png', '/project7d.png'],
        },
        {
          id: 8,
          title: "Career Compass",
          shortDesc: "Guiding rural youth towards higher education, career pathways, and life opportunities.",
          description: "A structured career guidance initiative that helps rural students explore opportunities, understand higher education pathways, and make informed career decisions.",
          objective: "To help rural students make informed decisions about their higher education and career pathways through structured guidance.",
          whoItServes: "Rural students in secondary and higher secondary levels who lack access to career counselling.",
          howItWorks: [
            "One-on-one and group career counselling sessions to explore individual interests and aptitudes.",
            "Exposure visits and interactions with professionals from various fields and industries.",
            "Workshops on higher education options, entrance exams, scholarships, and application processes.",
          ],
          icon: Zap,
          images: ['/project8a.png', '/project8b.png', '/project8c.png', '/project8d.png'],
        },
        {
          id: 11,
          title: "Hope School",
          shortDesc: "Creating access to structured learning environments for marginalised children.",
          description: "Hope School creates access to structured and supportive learning environments for marginalised children, ensuring continuity of education and fostering a nurturing space for holistic growth.",
          objective: "To provide marginalised children with a safe, structured, and nurturing learning environment that ensures continuity of education.",
          whoItServes: "Marginalised and out-of-school children from vulnerable and underserved communities.",
          howItWorks: [
            "Establishing structured classroom environments with trained facilitators focused on holistic development.",
            "Curriculum designed to bridge learning gaps and reintegrate children into mainstream education.",
            "Psychosocial support and community engagement to ensure children's regular attendance and wellbeing.",
          ],
          icon: BookOpen,
          images: ['/project11a.png', '/project11b.png', '/project11c.png', '/project11d.png'],
        },
        {
          id: 5,
          title: "Model Community Project",
          shortDesc: "Building education-focused community models that enable long-term transformation.",
          description: "A transformative initiative aimed at uplifting a marginalised community. The project focuses on education, health, livelihood, and social development to build a sustainable, model community.",
          objective: "To uplift an entire marginalised community by integrating education, health, livelihood, and social development into one cohesive model.",
          whoItServes: "Marginalised communities in rural areas facing compounded challenges across education, health, and livelihood.",
          howItWorks: [
            "Comprehensive community needs assessment followed by a multi-sector intervention plan.",
            "Coordinated delivery of education, healthcare, and livelihood programmes within the community.",
            "Community leadership building to ensure the model is self-sustaining beyond the programme period.",
          ],
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
          objective: "To strengthen rural self-help groups so women and families can achieve collective financial stability and mutual growth.",
          whoItServes: "Rural women and families seeking financial inclusion, collective savings, and peer support networks.",
          howItWorks: [
            "Formation and capacity building of self-help groups with training on financial planning and savings.",
            "Regular group meetings facilitated to encourage collective decision-making and accountability.",
            "Linkage to microfinance, government schemes, and livelihood opportunities for sustained growth.",
          ],
          icon: Users,
          images: ['/project12a.png', '/project12b.png', '/project12c.png', '/project12d.png'],
        },
        {
          id: 3,
          title: "Skill Development Centre",
          shortDesc: "Practical, skill-based training to enhance employability and income opportunities.",
          description: "The Skill Development Centre equips rural women and youth with practical, vocational skills — including tailoring and allied trades — enabling them to earn independently and build sustainable livelihoods.",
          objective: "To equip rural women and youth with vocational skills that enable independent earning and sustainable livelihoods.",
          whoItServes: "Rural women and youth seeking employable, income-generating vocational skills.",
          howItWorks: [
            "Hands-on vocational training in tailoring, allied trades, and market-relevant skill areas.",
            "Certification on course completion to enhance employability and credibility in the job market.",
            "Post-training support including placement assistance and links to self-employment opportunities.",
          ],
          icon: Briefcase,
          images: ['/project3a.png', '/project3b.png', '/project3c.png', '/project3d.png'],
        },
        {
          id: 13,
          title: "Learn to Lead",
          shortDesc: "Developing leadership, communication, and life skills among rural graduates.",
          description: "A leadership development programme that builds communication, problem-solving, and life skills among rural youth and graduates — preparing them to become agents of change in their communities.",
          objective: "To build leadership, communication, and life skills in rural graduates so they can drive change in their own communities.",
          whoItServes: "Rural youth and graduates who have the potential to lead but lack confidence and structured development.",
          howItWorks: [
            "Structured workshops on communication, problem-solving, teamwork, and emotional intelligence.",
            "Real-world community projects where participants apply leadership skills in practical scenarios.",
            "Mentorship and networking opportunities with experienced leaders and change-makers.",
          ],
          icon: GraduationCap,
          images: ['/project13a.png', '/project13b.png', '/project13c.png', '/project13d.png'],
        },
        {
          id: 14,
          title: "ROOT'ed",
          shortDesc: "An immersive rural internship connecting students with real community challenges.",
          description: "ROOT'ed is an immersive rural internship experience that connects students and young professionals with real grassroots challenges, fostering empathy, social awareness, and community-driven innovation.",
          objective: "To connect students and young professionals with grassroots realities, fostering empathy and community-driven thinking.",
          whoItServes: "Students and young professionals from urban backgrounds seeking meaningful rural exposure.",
          howItWorks: [
            "Immersive rural placements where interns live and work within communities for a defined period.",
            "Guided observation and engagement with local challenges across education, health, and livelihood.",
            "Structured reflection sessions and project submissions to consolidate learnings and propose solutions.",
          ],
          icon: Zap,
          images: ['/project14a.png', '/project14b.png', '/project14c.png', '/project14d.png'],
        },
        {
          id: null,
          title: "Industry Connect Program (ICP)",
          shortDesc: "Creating pathways between rural talent and industry opportunities.",
          description: "Industry experts from diverse sectors visit rural training institutions to identify skilled youth. Partner firms offer hands-on training that helps learners gain industrial exposure and refine their competencies.",
          objective: "",
          whoItServes: "",
          howItWorks: [],
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
          objective: "",
          whoItServes: "",
          howItWorks: [],
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
          objective: "To raise health and social awareness in underserved rural villages through collaborative, community-oriented initiatives.",
          whoItServes: "Residents of underserved rural villages facing compounded health, education, and welfare challenges.",
          howItWorks: [
            "Awareness campaigns conducted in collaboration with local organisations and village leaders.",
            "Interactive sessions on health, hygiene, education, and social welfare tailored to community needs.",
            "Follow-up support and referrals connecting community members to relevant services and resources.",
          ],
          icon: Heart,
          images: ['/project2a.png', '/project2b.png', '/project2c.png', '/project2d.png'],
        },
        {
          id: 4,
          title: "Monthly Medical Camp",
          shortDesc: "Accessible healthcare services and medical support in underserved rural areas.",
          description: "Regular medical camps offering free consultations, basic check-ups, medicines, and health awareness sessions for underserved rural families — bringing healthcare closer to the community.",
          objective: "To bring essential healthcare services directly to underserved rural families through regular, free medical camps.",
          whoItServes: "Rural families and individuals who lack access to affordable or nearby healthcare facilities.",
          howItWorks: [
            "Monthly camps set up in accessible village locations with qualified medical professionals.",
            "Free consultations, basic diagnostic check-ups, and distribution of essential medicines.",
            "Health awareness sessions on preventive care, nutrition, hygiene, and common illnesses.",
          ],
          icon: Heart,
          images: ['/project4a.png', '/project4b.png', '/project4c.png', '/project4d.png'],
        },
        {
          id: 15,
          title: "Medicare Support",
          shortDesc: "Assisting individuals with access to basic medical needs and essential care.",
          description: "Medicare Support assists individuals and families in accessing basic medical needs, essential medicines, and health services — bridging gaps in rural healthcare access.",
          objective: "To bridge gaps in rural healthcare access by connecting individuals and families to essential medical support.",
          whoItServes: "Vulnerable individuals and families in rural areas who cannot afford or access basic medical care.",
          howItWorks: [
            "Identification of individuals in need through community outreach and self-referral mechanisms.",
            "Facilitation of access to medicines, diagnostic services, and specialist referrals where needed.",
            "Ongoing follow-up to monitor health outcomes and provide continued support as required.",
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
          description: "Supporting children and families with essential clothing, especially during key occasions and festive seasons — restoring dignity and spreading warmth in marginalised communities.",
          objective: "To restore dignity and warmth in marginalised communities by providing essential clothing during key occasions.",
          whoItServes: "Children and families in marginalised communities who cannot afford clothing for daily needs or festive occasions.",
          howItWorks: [
            "Identification of beneficiary families through community surveys and partner organisation referrals.",
            "Collection and curation of quality clothing items suitable for the target age groups and seasons.",
            "Organised distribution events held during festive seasons or key community occasions.",
          ],
          icon: Users,
          images: ['/project16a.png', '/project16b.png', '/project16c.png', '/project16d.png'],
        },
        {
          id: 6,
          title: "Food Kit Distribution",
          shortDesc: "Ensuring food security for vulnerable households through timely support.",
          description: "Ensuring food security for vulnerable households through timely distribution of food kits — supporting children's school attendance and strengthening family resilience in times of need.",
          objective: "To ensure food security for vulnerable households and support children's school attendance through timely food kit distribution.",
          whoItServes: "Vulnerable households and families facing food insecurity, especially those with school-going children.",
          howItWorks: [
            "Identification of food-insecure households through community assessments and local partner networks.",
            "Assembly of nutritionally balanced food kits with essential dry rations and household staples.",
            "Timely distribution at community centres or doorstep delivery for immobile or elderly beneficiaries.",
          ],
          icon: Users,
          images: ['/project6a.png', '/project6b.png', '/project6c.png', '/project6d.png'],
        },
        {
          id: 17,
          title: "Study Kit Distribution",
          shortDesc: "Providing essential learning materials to support children's continuity in education.",
          description: "Providing essential learning materials — notebooks, stationery, and school supplies — to support children's education continuity, especially in families that cannot afford basic study resources.",
          objective: "To support children's educational continuity by providing essential study materials to families that cannot afford them.",
          whoItServes: "School-going children from low-income families who lack access to basic study resources.",
          howItWorks: [
            "Assessment of need through school partnerships and community outreach to identify eligible children.",
            "Procurement and packaging of quality study kits including notebooks, stationery, and school supplies.",
            "Distribution at the start of the academic year to ensure children are ready and equipped to learn.",
          ],
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
                            {/* Icon */}
                            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>

                            {/* Title + Short Desc */}
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

              {/* RIGHT — Structured Info */}
              <div className="p-4 sm:p-6 flex flex-col justify-center bg-white lg:overflow-y-auto">
                <div className="space-y-4">

                  {/* Objective */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-full"></div>
                      Objective
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm pl-3">
                      {expandedData.objective}
                    </p>
                  </div>

                  {/* Who It Serves */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-full"></div>
                      Who It Serves
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm pl-3">
                      {expandedData.whoItServes}
                    </p>
                  </div>

                  {/* How It Works */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-full"></div>
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

                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}