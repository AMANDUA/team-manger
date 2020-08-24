import {createBrowserHistory, createHashHistory} from 'history';

import {hashBuild} from '../config';

export const history = hashBuild ? createHashHistory() : createBrowserHistory();

export default history;