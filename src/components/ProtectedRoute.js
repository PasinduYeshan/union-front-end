import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectors } from "src/store";

const ProtectedRoute = ({ isLoggedIn, accountType, location, ...rest }) => {
    if (!isLoggedIn) {
      return <Route {...rest} />;
    }
  
    if (useSelector(selectors.user.selectUserId) !== "") {
      if (accountType) {
        if (accountType.indexOf(useSelector(selectors.user.selectAccountType)) !== -1) {
          return <Route {...rest} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/404",
              }}
            />
          );
        }
      } else {
        return <Route {...rest} />;
      }
    }
  
    return (
      <Redirect
        to={{
          pathname: "/auth/login",
          state: {
            from: location,
          },
        }}
      />
    );
  };
  
export default ProtectedRoute;
  
