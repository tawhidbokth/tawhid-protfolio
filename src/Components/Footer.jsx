import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5 text-white footer-center  p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Tawhid Ahmed
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
