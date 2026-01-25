function Navigation() {
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Areas of Work', href: '#areas' },
    { name: 'Projects', href: '#projects' },
    { name: 'Vision 2030', href: '#vision2030' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex space-x-6">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => scrollToSection(e, link.href)}
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;