
const Footer = () => {
    return (
      <div className="mt-16">
          <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <p className="text-2xl">Recipe Calories</p>
                <p>All hotels and vacation rental properties<br></br> listed xon this website are independently<br></br> owned and operated. Accepted payment methods:</p>
            </aside>
            <nav>
                <header className="footer-title">For Customer</header>
                <a className="link link-hover">About Luviana</a>
                <a className="link link-hover">Customer Care/Help</a>
                <a className="link link-hover">Corporate Accounts</a>
                <a className="link link-hover">Financial Information</a>
                <a className="link link-hover">Terms & Conditions</a>
            </nav>
            <nav>
                <header className="footer-title">Recent News</header>
                <a className="link link-hover">Our Secret Island Boat Tour Is Just for You</a>
                <a className="link link-hover">Chill and Escape in Our Natural Shelters</a>
                <a className="link link-hover">September in Luviana Hotel</a>
                <a className="link link-hover">Live Music Concerts at Luviana</a>
            </nav>
            <nav>
                <header className="footer-title">Contact Us</header>
                <a className="link link-hover">3015 Grand Ave, Coconut Grove,
Merrick Way, FL 12345</a>
                <a className="link link-hover">hello@luviana.com</a>
                <a className="link link-hover">24/7 Customer Service</a>
            </nav>
        </footer>
      </div>
    );
};

export default Footer;