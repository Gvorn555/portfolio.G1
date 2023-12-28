import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/component/header.css';
import '../styles/component/hero.css';
import '../styles/component/about.css';
import '../styles/component/work.css';
import '../styles/component/footer.css';
import '../styles/component/mobile-nav.css';
import '../styles/component/top.css'
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';


mobileNav();
darkMode();
lazyLoading();