"use client"; // Error components must be Client Components

import ErrorComponent from "../components/errorComponent";

export default function Error({ error, reset }) {
  return ErrorComponent(error, reset);
}