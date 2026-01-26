export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0, // Reduced movement
      opacity: 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0, // Reduced movement
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6, 
        delay: delay || 0, 
        ease: [0.6, 0.0, 0.4, 2],
      },
    },
  };
};