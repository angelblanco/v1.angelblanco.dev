import { onMount } from 'svelte';
import { onDestroy } from 'svelte';
import { getCanonicalUrlForPath } from '../stores/canonical';
/**
 * Scrolls to the given node by id if present.
 * 
 * @param {String} id 
 */
export function scrollToId(id) {
    const anchor = document.getElementById(id);

    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Document scroll top
 */
export function documentScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

/**
 * Copies the passed text to the user clipboard.
 * 
 * @param {String} text 
 */
export function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.textContent = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

/**
 * Helper for adding eventListener on mount and remove then on destroy
 * should only be used to auto genereated markdown content.
 * 
 * @param {String} selector 
 * @param {String} event 
 * @param {String} callback 
 * @param {null|Function} rootNodeCallback 
 */
export function on(selector, event, callback, rootNodeCallback = null) {
    let nodes = [];

    onMount(() => {
        const rootNode = rootNodeCallback ? rootNodeCallback() : document;

        nodes = Array.from(rootNode.querySelectorAll(selector));

        // Keep this on parent scope
        nodes.forEach(function (node) {
            node.addEventListener(event, callback);
        });
    });

    onDestroy(() => {
        // Keep this on parent scope
        nodes.forEach(function (node) {
            node.removeEventListener(event, callback);
        });
    });
};

/**
 * Trigger a callback every x milliseconds and clear it on destroy.
 * 
 * @param {*} callback 
 * @param {*} milliseconds 
 */
export function interval(callback, milliseconds) {
    let id = null;

    // Stop the interval if its not running
    const stop = () => {
        if (id !== null) {
            clearInterval(id);
            id = null;
        }
    };

    onMount(() => {
        id = setInterval(callback, milliseconds);
    });

    onDestroy(() => stop());

    return stop;
}

/**
 * Gets the computed offset top of an element suming all of its parents.
 * 
 * @param {DomElement} node 
 */
export function documentOffset(node) {
    let parent = node;
    let left = node.offsetLeft;
    let top = node.offsetTop;

    while (parent = parent.offsetParent) {
        top += parent.offsetTop;
        left += parent.offsetLeft;
    }

    return { left, top };
}

/**
 * Scroll spy the anchor
 * 
 */
export function anchorScrollSpy(selector = 'h1, h2, h3, h4, h4, h6, h7', node = null) {
    const elementsToSpy = [];

    const handleScroll = () => {
        console.log('TODO: Scroll spy'); // TODO:
    };

    onMount(() => {
        const el = node || document.body;

        const filteredElements = Array.from(el.querySelectorAll(selector))
            .filter(element => el.getAttribute('id'))
            .map(element => ({
                element,
                id: el.getAttribute('id'),
                anchor: `#${el.getAttribute('id')}`,
                top: documentOffset(el).top,
            }));

        elementsToSpy.push(...filteredElements);
        elementsToSpy.sort((a, b) => a.top - b.top);

        window.addEventListener('scroll', handleScroll);
    });

    onDestroy(() => window.removeEventListener('scroll', handleScroll));
}

export function fullUrl(relativeUrl) {
    return getCanonicalUrlForPath(relativeUrl);
}

export function shareArticleText(article) {
    const url = fullUrl(article.shortLink);

    return `${article.title} - via ${url}`;
}

export function isValidEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(String(email).toLowerCase());
}