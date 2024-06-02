"use client";

import { useEffect } from "react";

export interface ErrorInterface {
  error: Error;
}

export default function ErrorComponent({ error }: ErrorInterface) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-component">
      <h2>We&apos;re Sorry!</h2>
      <p>Something seems to have gone wrong.</p>
      <p>Please click the try again button, or try refreshing the page.</p>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  );
}
