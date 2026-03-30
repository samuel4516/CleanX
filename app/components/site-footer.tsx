export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>CleanX Reinigung</h3>
          <p>
            Premium-feeling local cleaning service focused on careful work,
            quick estimates, and a smooth booking experience in Munich.
          </p>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul className="footer-links">
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#results">Before &amp; After</a>
            </li>
            <li>
              <a href="/#reviews">Reviews</a>
            </li>
            <li>
              <a href="/#booking">Get a Quote</a>
            </li>
            <li>
              <a href="/datenschutz">Datenschutz</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact info</h3>
          <ul className="footer-links">
            <li>Munich, Germany</li>
            <li>+49 160 95029314</li>
            <li>cleanx.munchen@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 CleanX Reinigung. All rights reserved.</p>
      </div>
    </footer>
  );
}
