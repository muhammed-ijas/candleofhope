function SectionTitle({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
        {title}
      </h2>
      {centered && (
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      )}
    </div>
  );
}

export default SectionTitle;