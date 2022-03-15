import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Tree shaking solid imports
import {
  faChevronUp,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faHashtag,
  faShareAlt,
  faComments,
  faHeart,
  faBomb,
  faBook,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

// Tree shaking brand imports
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faGithubAlt,
  faGithub,
  faVuejs,
  faPhp,
  faLaravel,
  faJs,
  faNodeJs,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';

const icons = [
  // Solid
  faChevronUp,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faHashtag,
  faShareAlt,
  faComments,
  faHeart,
  faBomb,
  faBook,
  faUser,

  // Brands
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faGithubAlt,
  faGithub,
  faVuejs,
  faPhp,
  faLaravel,
  faJs,
  faNodeJs,
  faDocker,
];

icons.forEach((icon) => library.add(icon));

dom.watch();
