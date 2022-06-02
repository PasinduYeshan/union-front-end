import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CContainer, CSpinner } from '@coreui/react';
import { ProtectedRoute } from "./index";

// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <ProtectedRoute
                  isLoggedIn={route.isLoggedIn}
                  accountType={route.accountType}
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
