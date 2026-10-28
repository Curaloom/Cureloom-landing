import { Wordmark } from '../components/Logo';
import { NAV_ITEMS, SITE } from '../site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Wordmark size={22} color="#15231d" />
            <p className="footer__tag">{SITE.tagline}</p>
          </div>
          <div className="footer__col">
            <h4>Product</h4>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Programs</h4>
            <ul>
              <li>Chronic Care Management (99490, 99439)</li>
              <li>Complex CCM (99487, 99489)</li>
              <li>Advanced Primary Care Management, Levels 1–3 (G0556, G0557, G0558)</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
              </li>
              <li>
                <a href={SITE.bookingHref}>Request a walkthrough</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {SITE.year} {SITE.name}. {SITE.slogan}
          </span>
          <span>Curalooms is a care-management workflow tool. It does not give medical advice or make clinical decisions.</span>
        </div>
      </div>
    </footer>
  );
}
