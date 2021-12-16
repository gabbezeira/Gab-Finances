import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export function Public() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
