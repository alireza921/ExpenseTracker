import Navigation from "../Components/navigation/navigation";

const Layout = ({ children }) => {
  return (
    <section>
      <Navigation />
      {children}
    </section>
  );
};

export default Layout;
