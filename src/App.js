import React, { useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import CartBadge from "./components/cart-badge";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import ListPage from "./components/routes/list";
import MapPage from "./components/routes/map";
import MenuPage from "./components/routes/menu";
import Counter from "./components/counter";
import OrderPage from "./components/routes/order";
import OrderCompletePage from "./components/routes/order-complete";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./history";
import { Provider as UserProvider } from "./contexts/user";
import { langs, LangContext } from "./contexts/lang";
import ToggleLang from "./components/toggle-lang";

const { Header, Content, Footer } = Layout;

function App() {
  const [user, setUser] = useState({ name: "default name" });
  const [lang, setLang] = useState(langs.ru);
  return (
    <LangContext.Provider value={lang}>
      <UserProvider value={user}>
        <ConnectedRouter history={history}>
          <Layout className="App">
            <Header className="header">
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item>
                  <NavLink
                    to={"/restaurants"}
                    activeStyle={{ color: "lightgrey" }}
                  >
                    {lang.list}
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to={"/restaurant-map"}
                    activeStyle={{ color: "lightgrey" }}
                  >
                    {lang.map}
                  </NavLink>
                </Menu.Item>
                <CartBadge />
                <span>&nbsp;</span>
                <ToggleLang
                  toggleLang={() =>
                    setLang(lang === langs.ru ? langs.en : langs.ru)
                  }
                />
              </Menu>
            </Header>
            <Content>
              <Switch>
                <Redirect from={"/"} exact to={"/restaurants"} />
                <Route path={"/restaurants"} component={ListPage} />
                <Route path={"/restaurants/counter"} component={Counter} />
                <Route
                  path={"/restaurant-map/:restaurantId"}
                  component={MapPage}
                />
                <Route path={"/restaurant-map/"} component={MapPage} />
                <Route
                  path={"/restaurant-menu/:restaurantId"}
                  component={MenuPage}
                />
                <Route path={"/order-complete"} component={OrderCompletePage} />
                <Route
                  path={"/order"}
                  render={() => <OrderPage setUser={setUser} />}
                />
                <Route path={"/error"} render={() => <h2>Error page</h2>} />
                <Route
                  path={"/"}
                  exact
                  children={props => {
                    if (props.match) {
                      console.log("matched");
                      return <h2>Page not found</h2>;
                    } else {
                      console.log("not matched");
                    }
                  }}
                />
              </Switch>
            </Content>
            <Footer>{/*<Counter />*/}</Footer>
          </Layout>
        </ConnectedRouter>
      </UserProvider>
    </LangContext.Provider>
  );
}

export default App;
