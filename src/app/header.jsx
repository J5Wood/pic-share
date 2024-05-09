import Login from "./login";
import NavBar from "./navBar";
import ServerClient from "./actions/serverClient";

export default async function Header() {
  const { session } = await ServerClient();

  function renderHeader() {
    if (session) {
      return <NavBar />;
    }
    return <Login />;
  }
  return renderHeader();
}
