import NavBackButton from "../components/NavBackButton";

export default function UserLayout({ children }) {
  return (
    <>
      <NavBackButton />
      {children}
    </>
  );
}
