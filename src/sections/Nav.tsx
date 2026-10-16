import PillNav from '../components/reactbits/Components/PillNav/PillNav';
import StarBorder from '../components/reactbits/Animations/StarBorder/StarBorder';
import { LogoMark } from '../components/Logo';
import { NAV_ITEMS, SITE } from '../site';

export function Nav() {
  return (
    <header className="nav">
      <div className="nav__brand">
        <PillNav
          logo={<LogoMark size={26} tight />}
          logoAlt={`${SITE.name} home`}
          logoHref="#top"
          items={NAV_ITEMS}
          theme="dark"
          surface="glass"
          size="md"
          highlightColor="#13b5a3"
          highlightTextColor="#050a12"
          indicator="dot"
          collapse="auto"
          ariaLabel="Main"
        />
      </div>
      <div className="nav__cta">
        <StarBorder
          as="a"
          href={SITE.bookingHref}
          className="btn-star btn-star--sm"
          color="#9bebd5"
          theme="dark"
          backgroundColor="#0e1724"
          radius={22}
          thickness={1}
          glow={0.7}
          duration={5}
        >
          Book a walkthrough
        </StarBorder>
      </div>
    </header>
  );
}
