import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Tree shaking solid imports
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp.js';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft.js';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight.js';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag.js';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons/faShareAlt.js';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart.js';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb.js';

// Tree shaking brand imports
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter.js';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook.js';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn.js';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt.js';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub.js';
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs.js';
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp.js';
import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel.js';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs.js';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs.js';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker.js';

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

