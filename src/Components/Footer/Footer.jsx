import React from "react";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-center py-6 mt-10">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} The Book Heaven. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
