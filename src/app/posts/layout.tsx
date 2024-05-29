import NavBackButton from "../components/navBackButton";

export default function PostLayout({ children }) {
  return (
    <>
      <NavBackButton />
      {children}
    </>
  );
}
