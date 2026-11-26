import { useState } from "react";
import {
  getSessionCookieConsent,
  saveSessionCookieConsent,
} from "@/lib/sessionApi";

const getSavedConsent = () => {
  const consent = getSessionCookieConsent();
  return consent === "accepted" || consent === "rejected" ? consent : null;
};

export const AdminSessionConsent = () => {
  const [consent, setConsent] = useState(getSavedConsent);
  const [error, setError] = useState("");

  const chooseConsent = (choice) => {
    saveSessionCookieConsent(choice);
    setConsent(choice);
    setError("");

    if (choice === "rejected") {
      fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            setError("The server could not revoke the existing admin session.");
          }
        })
        .catch(() => {
          setError("The server could not be reached to revoke the admin session.");
        });
    }
  };

  if (consent === "accepted") return null;

  return (
    <aside
      aria-labelledby="admin-session-consent-title"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6"
      role="region"
    >
      <div>
        <h2
          className="font-display text-base font-bold text-black"
          id="admin-session-consent-title"
        >
          {consent === "rejected"
            ? "Admin sign-in is disabled"
            : "Admin session cookies"}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-[#454545]">
          {consent === "rejected"
            ? "You rejected admin session cookies. Sign-in remains disabled until you enable them."
            : "An HttpOnly cookie keeps your admin sign-in secure. The browser cookie expires when you close it, and the server session expires after 12 hours. Rejecting disables admin sign-in."}
        </p>
        {error && (
          <p className="mt-2 text-sm font-medium text-[#6d001a]" role="alert">
            {error}
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {consent !== "rejected" && (
          <button
            className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-black transition hover:bg-black/5"
            onClick={() => chooseConsent("rejected")}
            type="button"
          >
            Reject
          </button>
        )}
        <button
          className="rounded-full bg-[#6d001a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4d0012]"
          onClick={() => chooseConsent("accepted")}
          type="button"
        >
          {consent === "rejected" ? "Enable session cookies" : "Accept session cookies"}
        </button>
      </div>
    </aside>
  );
};

export default AdminSessionConsent;
