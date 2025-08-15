import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import MobileNavigation from "@/components/MobileNavigation";
import ProgressLoding from "@/components/ProgressLoding";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="pb-24 md:pb-0">
      <ProgressLoding>
        <Header />
        {children}
        <div className="lg:hidden">
          <MobileNavigation />
        </div>
        <Footer />
        <div className="hidden md:block">
          <ChatBot />
        </div>
      </ProgressLoding>
    </div>
  );
};

export default layout;
