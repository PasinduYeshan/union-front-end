import React, { lazy } from "react";

const NavigationBar = React.lazy(() => import("./NavigationBar.js"));

const HomePage = () => {
  return (
    <>
      <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <NavigationBar />
      </main>
    </>
  );
};

export default HomePage;
