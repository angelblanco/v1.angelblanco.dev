export const config = [
  {
    resource: 'articles',
    preffix: 'a',
    path: '/articles/',
  },
];

export function resourceForPreffix(preffix) {
  const it = config.find((c) => c.preffix === preffix);

  return it ? it.resource : null;
}

export function pathForPreffix(preffix) {
  const it = config.find((c) => c.preffix === preffix);

  return it ? it.path : null;
}

export function preffixForResource(resource) {
  const it = config.find((c) => c.resource === resource);

  return it ? it.preffix : null;
}

export function intAsString(value) {
  const strValue = `${value}`.trim();

  if (!strValue.match(/^[1-9][0-9]*$/)) {
    throw new Error(
      'The provided value is not an base 10 integer or an string integer greater than 0'
    );
  }

  return strValue;
}

export function base64Encode(str) {
  try {
    return btoa(str);
  } catch {
    return Buffer.from(str).toString('base64');
  }
}

export function base64Decode(str) {
  try {
    return atob(str);
  } catch {
    return Buffer.from(str, 'base64').toString();
  }
}

export function shortLinkTo(preffix, id) {
  const hash = shortner(preffix, id);

  return `/go/${hash}`;
}

export function shortner(preffix, id) {
  const idString = intAsString(id);

  if (!preffix.match(/^[a-z]+$/)) {
    throw new Error('Shortner must recieve an [a-z]+ lowercased preffix');
  }

  const initalJoinSting = `${preffix}-${idString}`;
  const zerosToFill =
    0 === initalJoinSting.length % 3
      ? ''
      : '0'.repeat(3 - (initalJoinSting.length % 3));

  return base64Encode(`${preffix}${zerosToFill}-${idString}`);
}

export function reverseShortner(str) {
  const err = (msg) => {
    throw new Error(
      `Unable to reverse shortner the provided id "${str}". ${msg}`
    );
  };

  try {
    const decoded = base64Decode(str);

    const match = /^([a-z]+)[0]*\-([1-9][0-9]*)$/.exec(decoded);

    if (!match) {
      err('No matches pattern');
    }

    const [, preffix, id] = match;

    return {
      preffix,
      id,
    };
  } catch (e) {
    err(e);
  }
}
