import Navigation from "../Components/navigation/navigation";

const Layout = ({ children }) => {
  return (
    <section className="bg-gray-50 rounded-3xl m-4 p-4">
      <Navigation />
      {children}
    </section>
  );
};

export default Layout;
