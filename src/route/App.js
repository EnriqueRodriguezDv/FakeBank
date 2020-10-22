import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Principal from "../container/Principal";
import NewSession from "../container/NewSession";
import Transfer from "../container/Transfer";
import Deposit from "../container/Deposit";
import Monopoly from "../container/Monopoly";
import History from "../container/History";
import NotFound from "../container/NotFound";
import Layout from "./Layout";

const App = () => {
  return (
    <HashRouter forceRefresh="true">
      <Layout>
        <Switch>
          <Route exact path="/" component={NewSession} />
          <Route exact path="/principal" component={Principal} />
          <Route exact path="/transfer" component={Transfer} />
          <Route exact path="/moreMoney" component={Deposit} />
          <Route exact path="/monopoly" component={Monopoly} />
          <Route exact path="/history" component={History} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
