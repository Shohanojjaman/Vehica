const Footer = () => {
  const logo = 'https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-white-retina-165x29.png';
  return (
    <footer className="bg-heading ">
      <div className="container grid grid-cols-3 items-center gap-8 py-20">
        <img src={logo} className="self-start" alt="" />
        <p className="text-white">
          Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city.
          Lowest prices and the best customer service guaranteed.
        </p>
        <div className="space-y-4 justify-self-end text-white text-right">
          <p>
            <a className="text-3xl font-black" href="tel:+(123) 456-78901">
              +(123) <span className="text-primary">456-78901</span>
            </a>
          </p>
          <p>
            <a href="mailto:support@vehica.com">support@vehica.com</a>
          </p>
          <p>
            <a
              href="https://maps.google.com/?q=West+12th+Street%0D%0ANew+York%2C+NY%2C+USA"
              target="_blank"
              rel="noopener noreferrer">
              West 12th Street New York, NY, USA
            </a>
          </p>
        </div>
      </div>
      <hr className="border-t-0 h-[2px] bg-[#3b4250]" />
      <div className="container flex items-center justify-center py-10">
        <p>
          Copyright © 2023. All rights reserved. Developed by{' '}
          <a href="https://github.com/Shohanojjaman" target="_blank" rel="noopener noreferrer" className="text-primary">
            Shohanjjaman
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
