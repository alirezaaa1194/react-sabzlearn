import { HeroUIProvider } from "@heroui/system";
import { Outlet } from "react-router";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

function GeneralLayout() {
  return (
    <div>
      <HeroUIProvider>
        <Header />
        <Outlet />
        <Footer />
      </HeroUIProvider>
    </div>
  );
}

export default GeneralLayout;
