import React from "react";

export default function Page({ params }) {
  const slug = params.slug;
  return <div>Post page: {slug}</div>;
}
