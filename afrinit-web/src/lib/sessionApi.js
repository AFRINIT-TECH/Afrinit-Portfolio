export const SESSION_COOKIE_CONSENT_KEY = "azzmar-admin-session-cookie-consent";
export const PUBLIC_COOKIE_PREFERENCE_KEY = "azzmar-public-cookie-preference";

export const getSessionCookieConsent = () => {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(SESSION_COOKIE_CONSENT_KEY);
};

export const saveSessionCookieConsent = (consent) => {
  window.localStorage.setItem(SESSION_COOKIE_CONSENT_KEY, consent);
};

export const getPublicCookiePreference = () => {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(PUBLIC_COOKIE_PREFERENCE_KEY);
};

export const savePublicCookiePreference = (choice) => {
  const cookieName = "azzmar_preferences";
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  if (choice === "accepted") {
    document.cookie = `${cookieName}=accepted; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
    if (!document.cookie.split("; ").includes(`${cookieName}=accepted`)) {
      throw new Error("The browser did not save the preference cookie.");
    }
  } else {
    document.cookie = `${cookieName}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
    if (document.cookie.split("; ").some((cookie) => cookie.startsWith(`${cookieName}=`))) {
      throw new Error("The browser could not remove the preference cookie.");
    }
  }

  window.localStorage.setItem(PUBLIC_COOKIE_PREFERENCE_KEY, choice);
};

export const sessionApiFetch = (url, options = {}) => {
  const headers = new Headers(options.headers);
  headers.set("X-Session-Cookie-Consent", getSessionCookieConsent() ?? "unanswered");

  return fetch(url, {
    ...options,
    credentials: "include",
    headers,
  });
};
