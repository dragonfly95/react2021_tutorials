import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Aladin from "./components/Aladin";
import LionKing from "./components/LionKing";
import SpiderMan from "./components/SpiderMan";
import TodoApp from "./containers/TodoApp";
export default () => (
    <Router>
        <Header />
        <Route path="/aladin" component={Aladin} />
        <Route path="/lionking" component={LionKing} />
        <Route path="/spiderman" component={SpiderMan} />
        <Route path="/todo" component={TodoApp} />
    </Router>
)