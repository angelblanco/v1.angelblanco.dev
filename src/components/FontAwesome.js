import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Tree shaking solid imports
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons/faShareAlt';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';

// Tree shaking brand imports
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs';
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';
import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';

const icons = [
    // Solid
    faChevronUp,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faHashtag,
    faShareAlt,
    faComments,
    faHeart,

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
    faBomb,
];

icons.forEach(icon => library.add(icon));

dom.watch();

