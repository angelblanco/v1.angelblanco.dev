export default md => {
  const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const hIndex = tokens[idx].attrIndex('href');

    if (hIndex >= 0) {
      const href = tokens[idx].attrs[hIndex][1];

      // Adds target blank except for the anchors.
      if (!href.startsWith('#')) {
        // If you are sure other plugins can't add `target` - drop check below
        const aIndex = tokens[idx].attrIndex('target');

        if (aIndex < 0) {
          tokens[idx].attrPush(['target', '_blank']); // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
        }
      }
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };
};