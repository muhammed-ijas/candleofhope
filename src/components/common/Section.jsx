function Section({ 
  children, 
  id, 
  className = '',
  background = 'white',
  padding = 'normal' 
}) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    dark: 'bg-gray-900 text-white',
  };

  const paddings = {
    small: 'py-8 md:py-12',
    normal: 'py-12 md:py-20',
    large: 'py-16 md:py-28',
  };

  return (
    <section 
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export default Section;