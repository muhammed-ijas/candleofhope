import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-red-950  to-red-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <img 
              src="/logo.png" 
              alt="Candle of Hope International" 
              className="h-16 w-auto mb-4 bg-white p-2 rounded-lg"
            />
            <p className="text-sm leading-relaxed text-amber-100/70">
              Candle of Hope International - Registered as a Non-Profit Organisation under the Indian Trusts Registration Act, 1860
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>Akna Mirzzapur, Subhas Gram PO</p>
              <p>Sonarpur PS, South 24 Parganas</p>
              <p>West Bengal, 700147</p>
              <p className="mt-3">
                Email: <a href="mailto:candleofhopeintl@gmail.com" className="hover:text-amber-300 transition">
                  candleofhopeintl@gmail.com
                </a>
              </p>
              <p>Website: <a href="https://cohinternational.com" className="hover:text-amber-300 transition">
                cohinternational.com
              </a>
              </p>
            </div>
          </div>

          {/* Bank Details & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support Our Work</h3>
            <div className="space-y-2 text-sm mb-6">
              <p><strong className="text-white">Account Name:</strong> Candle of Hope International</p>
              <p><strong className="text-white">Bank:</strong> Federal Bank</p>
              <p><strong className="text-white">A/C No:</strong> 14000200024374</p>
              <p><strong className="text-white">IFSC:</strong> FDRL0001400</p>
             
            </div>
            
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition transform hover:scale-110">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition transform hover:scale-110">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced Copyright */}
      <div className="border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-amber-100/60">
                © {new Date().getFullYear()} <span className="text-amber-100 font-semibold">Candle of Hope International</span>. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-amber-200/50">
              <span>Designed & Developed by</span>
              <a 
                href="https://muhammed-ijas-t.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Cipher
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;