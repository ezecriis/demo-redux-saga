import { Switch, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import { NAVIGATION } from '../../defaultValues';
import Home from './home';
import Profile from './profile';

function PrivateRoute() {
    return (
        <Layout>
            <Switch>
                <Route path={NAVIGATION.home} render={(props) => <Home {...props} />} />
                <Route path={NAVIGATION.profile} render={(props) => <Profile {...props} />} />
            </Switch>
        </Layout>
    )
}

export default PrivateRoute;
