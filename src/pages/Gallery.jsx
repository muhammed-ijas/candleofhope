import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { BookOpen, Heart, Briefcase, Users, GraduationCap, Zap, Building2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const galleryData = [
    {
      category: "Education",
      icon: BookOpen,
      projects: [
        {
          title: "Foundation Learning Centres (FLC)",
          images: ['/project1a.png', '/project1b.png', '/project1c.png', '/project1d.png']
        },
        {
          title: "Teachers Training",
          images: ['/project7a.png', '/project7b.png', '/project7c.png', '/project7d.png']
        },
        {
          title: "Career Compass",
          images: ['/project8a.png', '/project8b.png', '/project8c.png', '/project8d.png']
        }
      ]
    },
    {
      category: "Skill",
      icon: Briefcase,
      projects: [
        {
          title: "Skill Development Centre",
          images: ['/project3a.png', '/project3b.png', '/project3c.png', '/project3d.png']
        },
        {
          title: "ICP – Industry Connect Program",
          images: ['/project9a.png', '/project9b.png', '/project9c.png', '/project9d.png']
        }
      ]
    },
    {
      category: "Health",
      icon: Heart,
      projects: [
        {
          title: "Project Jeevan Jyothi",
          images: ['/project2a.png', '/project2b.png', '/project2c.png', '/project2d.png']
        },
        {
          title: "Monthly Charitable Medical Camp",
          images: ['/project4a.png', '/project4b.png', '/project4c.png', '/project4d.png']
        },
        {
          title: "Food Distribution Program",
          images: ['/project6a.png', '/project6b.png', '/project6c.png', '/project6d.png']
        },
        {
          title: "Humanitarian & Welfare Programs",
          images: ['/project10a.png', '/project10b.png', '/project10c.png', '/project10d.png']
        }
      ]
    },
    {
      category: "Youth Upskilling",
      icon: Building2,
      projects: [
        {
          title: "Samsi 2.0 – Model Community Project",
          images: ['/project5a.png', '/project5b.png', '/project5c.png', '/project5d.png']
        }
      ]
    }
  ];

  const categories = ['All', ...galleryData.map(item => item.category)];

  const openLightbox = (image, allImages, index) => {
    setLightboxImage(image);
    setLightboxImages(allImages);
    setCurrentLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxImages([]);
    setCurrentLightboxIndex(0);
  };

  const nextImage = () => {
    const newIndex = (currentLightboxIndex + 1) % lightboxImages.length;
    setCurrentLightboxIndex(newIndex);
    setLightboxImage(lightboxImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    setCurrentLightboxIndex(newIndex);
    setLightboxImage(lightboxImages[newIndex]);
  };

  const filteredData = selectedCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImage) return;
      
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, currentLightboxIndex, lightboxImages]);

  return (
    <section className="relative min-h-screen py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      
      {/* Animations */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-3">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">
            Capturing moments of transformation across our initiatives
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, idx) => {
            const categoryData = galleryData.find(item => item.category === category);
            const IconComponent = categoryData?.icon;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-4 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                  {category}
                </span>
                {selectedCategory === category && (
                  <div className="absolute inset-0 shimmer rounded-full"></div>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Gallery Grid by Category */}
        <div className="space-y-12">
          {filteredData.map((categoryData, catIndex) => (
            <motion.div 
              key={categoryData.category}
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px 0px -100px 0px",
              }}
            >
              {/* Category Header */}
              {selectedCategory === 'All' && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg shadow-md">
                      <categoryData.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {categoryData.category}
                    </h3>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
              )}

              {/* Projects */}
              <div className="space-y-8">
                {categoryData.projects.map((project, projIndex) => (
                  <div key={projIndex}>
                    {/* Project Title */}
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-1 h-5 bg-gradient-to-b from-red-600 to-orange-600 rounded-full"></div>
                      {project.title}
                    </h4>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {project.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          variants={fadeIn("up", 0.05 * imgIndex)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{
                            once: true,
                            margin: "-50px 0px -50px 0px",
                          }}
                          className="group relative aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                          onClick={() => openLightbox(image, project.images, imgIndex)}
                        >
                          {/* Actual Image */}
                          <img 
                            src={image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          
                          {/* Fallback placeholder (hidden by default) */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 items-center justify-center" style={{ display: 'none' }}>
                            <div className="text-center p-3">
                              <div className="w-10 h-10 mx-auto mb-2 bg-white/50 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-xs text-gray-600 font-medium">{image.split('/').pop()}</p>
                            </div>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                            <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                              View
                            </div>
                          </div>

                          {/* Border Animation */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 transition-all duration-300 rounded-lg"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Navigation Buttons */}
            {lightboxImages.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={lightboxImage} 
                alt="Gallery"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback for lightbox */}
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl p-12 items-center justify-center min-h-[400px]" style={{ display: 'none' }}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/50 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-700 font-semibold mb-1">{lightboxImage.split('/').pop()}</p>
                  {lightboxImages.length > 1 && (
                    <p className="text-sm text-gray-600">
                      Image {currentLightboxIndex + 1} of {lightboxImages.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}