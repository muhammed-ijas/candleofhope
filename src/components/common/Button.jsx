function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  type = 'button',
  disabled = false 
}) {
  const baseStyles = 'font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-primary border-2 border-white hover:bg-cream-light',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    accent: 'bg-accent text-secondary hover:bg-accent-dark',
    dark: 'bg-secondary text-white hover:bg-secondary-dark',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;