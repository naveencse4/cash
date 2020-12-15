import { Route, Switch } from "react-router-dom";

import Transactions from "../Modules/Transactions/Transactions";
import Notifications from "../Modules/Notifications/Notifications";

const Content = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Transactions} exact />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    </>
  );
};

export default Content;
