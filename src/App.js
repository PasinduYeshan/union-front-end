import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

// Toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
// const Login = React.lazy(() => import("./views/pages/login/Login"));
// const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404Error = React.lazy(() =>
  import("./views/pages/page404/404ErrorPage")
);
// const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const HomePage = React.lazy(() => import("./views/pages/landing/HomePage"));
const ContactUsPage = React.lazy(() =>
  import("./views/pages/contactUs/contactUsPage")
);
const LoginPage = React.lazy(() => import("./views/pages/login/LoginPage"));
const TeamPage = React.lazy(() => import("./views/pages/team/TeamPage"));
const AboutUsPage = React.lazy(() =>
  import("./views/pages/aboutUs/AboutUsPage")
);
const EventsPage = React.lazy(() => import("./views/pages/events/EventsPage"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <LoginPage {...props} />}
            />
            <Route
              exact
              path="/contact-us"
              name="Login Page"
              render={(props) => <ContactUsPage {...props} />}
            />
            <Route
              exact
              path="/team"
              name="Team Page"
              render={(props) => <TeamPage {...props} />}
            />
            <Route
              exact
              path="/about-us"
              name="About Us"
              render={(props) => <AboutUsPage {...props} />}
            />
            <Route
              exact
              path="/events"
              name="Events"
              render={(props) => <EventsPage {...props} />}
            />
            {/* <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            /> */}
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404Error {...props} />}
            />
            {/* <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            /> */}
            <Route
              exact
              path="/"
              name="Home Page"
              render={(props) => <HomePage {...props} />}
            />
            <Route
              path="/office"
              name="Office Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
