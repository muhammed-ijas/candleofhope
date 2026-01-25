function Card({ 
  children, 
  className = '',
  hover = true,
  padding = 'normal',
  shadow = true 
}) {
  const baseStyles = 'bg-white rounded-lg transition duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  const shadowStyles = shadow ? 'shadow-lg' : '';
  
  const paddingStyles = {
    none: '',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8',
  };

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${shadowStyles} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;