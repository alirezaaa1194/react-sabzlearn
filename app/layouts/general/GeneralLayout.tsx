import { HeroUIProvider } from "@heroui/system";
import { Outlet } from "react-router";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import TimeStamp from "~/components/Header/timeStamp";

function GeneralLayout() {
  return (
    <div>
      <HeroUIProvider>
        <TimeStamp />
        <Header />
        <Outlet />
        <Footer />
      </HeroUIProvider>
    </div>
  );
}

export default GeneralLayout;
