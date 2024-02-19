import NavBackButton from "../components/NavBackButton";

export default function PostLayout({ children }) {
  return (
    <>
      <NavBackButton />
      {children}
    </>
  );
}
