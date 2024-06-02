import NavBackButton from "../components/navBackButton";
import { ReactNode } from "react";

interface MyProps {
  children?: ReactNode;
}

export default function UserLayout(props: MyProps) {
  const children = props.children;

  return (
    <>
      <NavBackButton />
      {children}
    </>
  );
}
