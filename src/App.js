import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global } from "./constants";
import { MonstGifContextProvider } from "./contexts";
import { errorBoundary } from "./helpers";
import { notDefaultExportLazyImport } from "./utils";

const Header = notDefaultExportLazyImport("Header");
const Main = notDefaultExportLazyImport("Main");
const Favorites = notDefaultExportLazyImport("Favorites");
const Social = notDefaultExportLazyImport("Social");
const NotFound = notDefaultExportLazyImport("NotFound");
const Footer = notDefaultExportLazyImport("Footer");

const App = () => (
  <Suspense fallback={<p>Cargando...</p>}>
    <Global />
    <BrowserRouter>
      <MonstGifContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/favorites/" component={Favorites} />
          <Route exact path="/social/" component={Social} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </MonstGifContextProvider>
    </BrowserRouter>
  </Suspense>
);

export default errorBoundary(App);
