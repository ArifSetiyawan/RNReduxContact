import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import RootNavigator from '../../navigators/RootNavigator';
import contact from './contact';

const reducerRouter = createNavigationReducer(RootNavigator);

const reducers = combineReducers({
  form: reducerForm,
  router: reducerRouter,
  contact: contact
});

export default reducers;