import NavBar from "./NavBar";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
