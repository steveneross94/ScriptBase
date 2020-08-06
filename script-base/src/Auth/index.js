import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Auth = () => {

  return (
    <Switch>
      <Route path="/auth/sign-in" component={SignIn} />
      <Route path="/auth/sign-up" component={SignUp} />
      {/* <Route path='/' component={SignIn}/> */}
    </Switch>
  );
}

export default Auth;