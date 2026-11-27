import { useEffect, useState } from "react";
import {
  getSessionCookieConsent,
  sessionApiFetch,
} from "@/lib/sessionApi";

export const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("checking");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    if (getSessionCookieConsent() !== "accepted") {
      setStatus("signed-out");
      return () => {
        active = false;
      };
    }

    sessionApiFetch("/api/auth/session")
      .then((response) => {
        if (!active) return;
        if (response.ok) {
          setStatus("signed-in");
        } else if (response.status === 401 || response.status === 403) {
          setStatus("signed-out");
        } else {
          setStatus("signed-out");
          setMessage("The admin service is unavailable. Try again shortly.");
        }
      })
      .catch(() => {
        if (!active) return;
        setStatus("signed-out");
        setMessage("The admin service is unavailable. Try again shortly.");
      });

    return () => {
      active = false;
    };
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    if (getSessionCookieConsent() !== "accepted") {
      setMessage("Accept admin session cookies below before signing in.");
      return;
    }

    setStatus("signing-in");
    try {
      const response = await sessionApiFetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 403) {
        setMessage("Accept admin session cookies below before signing in.");
        setStatus("signed-out");
        return;
      }
      if (response.status === 401) {
        setMessage("The username or password is incorrect.");
        setStatus("signed-out");
        return;
      }
      if (!response.ok) {
        setMessage("Unable to sign in. Please try again.");
        setStatus("signed-out");
        return;
      }

      setPassword("");
      setStatus("signed-in");
    } catch {
      setMessage("The admin service is unavailable. Try again shortly.");
      setStatus("signed-out");
    }
  };

  const handleLogout = async () => {
    setMessage("");
    try {
      const response = await sessionApiFetch("/api/auth/logout", {
        method: "POST",
      });
      if (!response.ok) {
        setMessage("Unable to sign out. Please try again.");
        return;
      }
      setStatus("signed-out");
    } catch {
      setMessage("The admin service is unavailable. Please try again.");
    }
  };

  return (
    <section className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
          Azzmar administration
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-black sm:text-4xl">
          Admin sign in
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#454545]">
          Sign in with an administrator account to access the protected
          dashboard.
        </p>

        {status === "signed-in" ? (
          <div className="mt-8">
            <p className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-900">
              You are signed in to the admin session.
            </p>
            <button
              className="mt-5 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6d001a]"
              onClick={handleLogout}
              type="button"
            >
              Sign out
            </button>
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
            <label className="block text-sm font-semibold text-black">
              Username
              <input
                autoComplete="username"
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-[#6d001a]"
                onChange={(event) => setUsername(event.target.value)}
                required
                value={username}
              />
            </label>
            <label className="block text-sm font-semibold text-black">
              Password
              <input
                autoComplete="current-password"
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-[#6d001a]"
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                value={password}
              />
            </label>
            {message && (
              <p className="text-sm font-medium text-[#6d001a]" role="alert">
                {message}
              </p>
            )}
            <button
              className="w-full rounded-full bg-[#6d001a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4d0012] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "signing-in" || status === "checking"}
              type="submit"
            >
              {status === "signing-in" ? "Signing in..." : "Sign in"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AdminPage;
