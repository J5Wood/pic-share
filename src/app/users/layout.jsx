import NavBackButton from "../components/navBackButton";

export default function UserLayout({ children }) {
  return (
    <>
      <NavBackButton />
      {children}
    </>
  );
}
