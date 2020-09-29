import get from 'lodash/get';

const env = (key, defaultValue = null) => ({ key, value: get(process.env, key, defaultValue) }); 

export default () => [
    // App variables
    env('APP_BASE_TITLE'),
    env('APP_BASE_URL'),

    // 3rd party values
    env('GOOGLE_ANALYTICS_MEASUREMENT_ID'),    
    env('DISQUS_USER'),
    env('TWITTER_USER'),
    env('TINY_LETTER_USER'),
    env('PROJECT_GITHUB_URL'),
];