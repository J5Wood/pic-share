"use client";

export default function NavBackButton() {
  return (
    <button className="nav-back-button" onClick={() => window.history.back()}>
      BACK
    </button>
  );
}
