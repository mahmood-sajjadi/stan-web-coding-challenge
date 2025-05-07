import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { routes, PageNotFoundElement, defaultUri } from "./routes";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {
            routes.map(route => (<Route key={route.title} index={route.uri === defaultUri} path={route.uri} element={route.element}/>))
          }
          {PageNotFoundElement ? <Route path='*' element={PageNotFoundElement} /> : null}
        </Route>
      </Routes>
    </Router>
  )
}
  