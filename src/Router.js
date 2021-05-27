import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/home';
import Draw from './pages/draw';
import Trans from './pages/trans';
import Dapp from './components/common/Dapp';
import CardDetail from './pages/card-detail';
import My from './pages/my';

function BaseRouter() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Dapp>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/draw">
                            <Draw></Draw>
                        </Route>
                        <Route exact path="/trans">
                            <Trans></Trans>
                        </Route>
                        <Route exact path="/carddetail">
                            <CardDetail></CardDetail>
                        </Route>
                        <Route exact path="/my">
                            <My></My>
                        </Route>
                    </Dapp>
                </Switch>
                {/* <Footer></Footer> */}
            </Router>
        </div>
    );
}

export default BaseRouter;