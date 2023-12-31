import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import DrawerCreateForm from "./pages/drawers/DrawerCreateForm";
import DrawerEditForm from "./pages/drawers/DrawerEditForm";
import DrawerPage from "./pages/drawers/DrawerPage";
import DrawersPage from "./pages/drawers/DrawersPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    // Context objects passed to child componets 
 
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <DrawersPage message="No results found. Adjust the search keyword." />
                )}
              />
              <Route
                exact
                path="/liked"
                render={() => (
                  <DrawersPage
                    message="No results found. Adjust the search keyword or like a post."
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                  />
                )}
              />
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/drawers/create" render={() => <DrawerCreateForm />} />
              <Route exact path="/drawers/:id/edit" render={() => <DrawerEditForm />} />
              <Route exact path="/drawers/:id" render={() => <DrawerPage />} />
              <Route exact path="/drawers/" render={() => <DrawersPage />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>

  );
}

export default App;
