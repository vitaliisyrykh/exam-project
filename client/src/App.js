import React, { useLayoutEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Payment from './pages/Payment/Payment';
import StartContestPage from './pages/StartContestPage/StartContestPage';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateHoc from './components/PrivateHoc/PrivateHoc';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';
import OnlyNotAuthorizedUserHoc from './components/OnlyNotAuthorizedUserHoc/OnlyNotAuthorizedUserHoc';
import ContestPage from './pages/ContestPage/ContestPage';
import UserProfile from './pages/UserProfile/UserProfile';
import ContestCreationPage from './pages/ContestCreation/ContestCreationPage';
import CONSTANTS from './constants';
import browserHistory from './browserHistory';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import { requestAuthAction } from './actions/actionCreator';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App () {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const refreshToken = localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
    if (refreshToken) {
      dispatch(requestAuthAction(refreshToken));
    }
  }, []);

  return (
    <Router history={browserHistory}>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/registration' component={RegistrationPage} />
        <Route exact path='/payment' component={Payment} />
        {/* <Route
          exact
          path='/startContest'
          component={PrivateHoc(StartContestPage)}
        /> */}
        <Route roles={['buyer']} exact path='/startContest' component={StartContestPage} />
        <Route
          exact
          path='/startContest/nameContest'
          component={PrivateHoc(ContestCreationPage, {
            contestType: CONSTANTS.NAME_CONTEST,
            title: 'Company Name',
          })}
        />
        <Route
          exact
          path='/startContest/taglineContest'
          component={PrivateHoc(ContestCreationPage, {
            contestType: CONSTANTS.TAGLINE_CONTEST,
            title: 'TAGLINE',
          })}
        />
        <Route
          exact
          path='/startContest/logoContest'
          component={PrivateHoc(ContestCreationPage, {
            contestType: CONSTANTS.LOGO_CONTEST,
            title: 'LOGO',
          })}
        />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/contest/:id' component={ContestPage} />
        <Route exact path='/account' component={UserProfile} />
        <Route component={NotFound} />
      </Switch>
      <ChatContainer />
    </Router>
  );
}

export default App;
