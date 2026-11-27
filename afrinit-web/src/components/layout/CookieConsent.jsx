import { useState } from "react";
import {
  getPublicCookiePreference,
  savePublicCookiePreference,
} from "@/lib/sessionApi";

const getSavedPreference = () => {
  const preference = getPublicCookiePreference();
  return preference === "accepted" || preference === "rejected" ? preference : null;
};

export const CookieConsent = () => {
  const [preference, setPreference] = useState(getSavedPreference);
  const [error, setError] = useState("");

  const choosePreference = (choice) => {
    try {
      savePublicCookiePreference(choice);
      setPreference(choice);
      setError("");
    } catch (saveError) {
      setError(saveError.message);
    }
  };

  if (preference) return null;

  return (
    <aside
      aria-labelledby="cookie-preference-title"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6"
      role="region"
    >
      <div>
        <h2
          className="font-display text-base font-bold text-black"
          id="cookie-preference-title"
        >
          Cookie preferences
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-[#454545]">
          Allow a first-party preference cookie to remember this choice. We do
          not use analytics or advertising cookies. If you reject, we will only
          remember your choice in browser storage.
        </p>
        {error && (
          <p className="mt-2 text-sm font-medium text-[#6d001a]" role="alert">
            {error}
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <button
          className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-black transition hover:bg-black/5"
          onClick={() => choosePreference("rejected")}
          type="button"
        >
          Reject
        </button>
        <button
          className="rounded-full bg-[#6d001a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4d0012]"
          onClick={() => choosePreference("accepted")}
          type="button"
        >
          Accept
        </button>
      </div>
    </aside>
  );
};

export default CookieConsent;
