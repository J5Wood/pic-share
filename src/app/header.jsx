import Login from "./login";
import NavBar from "./navbar";
import serverClient from "./actions/serverClient";

export default async function Header() {
  const { session } = await serverClient();

  function renderHeader() {
    if (session) {
      return <NavBar />;
    }
    return <Login />;
  }
  return renderHeader();
}
