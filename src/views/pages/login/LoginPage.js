import React from "react";
const NavigationBar = React.lazy(() =>
  import("../../../components/common/NavigationBar")
);
const FooterComponent = React.lazy(() =>
  import("../../../components/common/FooterComponent")
);
const LoginSection = React.lazy(() => import("./LoginSection"));

export default function LoginPage() {
  const forgotPassword = () => {};
  const login = () => {};
  return (
    <>
      <div className="h-screen">
        <div className="relative bg-white overflow-hidden">
          <NavigationBar activeNav="Log in" />
          <LoginSection />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}


