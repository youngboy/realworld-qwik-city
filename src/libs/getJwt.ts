export function toBase64(str: string) {
  // Netlify not support Buffer yet
  // Buffer.from(str).toString('base64')
  return btoa(str);
}

export function fromBase64(str: string) {
  // Netlify not support Buffer yet
  // Buffer.from(str, "base64").toString("utf-8")
  return atob(str);
}

export function getJwtString(user: any) {
  const stringUser = JSON.stringify(user);
  const jwt = toBase64(stringUser);
  return jwt;
}

export function getJwtObj(cookies: any) {
  const jwt = cookies.jwt && fromBase64(cookies.jwt);
  return jwt ? JSON.parse(jwt) : null;
}
