import {sanitizeTeam} from '../../components/utils/teams';
import {v4 as uuid} from 'uuid';

import {PENDING, SUCCESS} from '../constants';
import {
    CREATE_TEAM,
    CREATE_TEAM_USER,
    DELETE_TEAM_USER,
  } from './constants';

import history from '../../lib/history';


export const createTeamAction = (params) => (dispatch, getState) => {
    dispatch({
      type: CREATE_TEAM,
      status: PENDING,
    });

    const teamId = uuid();

    const options = {
        ...params,
        id: teamId,
      };

    dispatch({
        type: CREATE_TEAM,
        status: SUCCESS,
        payload: {
            team: sanitizeTeam(options),
        },
    });
    dispatch(navigateToTeam({teamId}));
};

export const navigateToTeam = ({teamId}) => (dispatch, getState) => {
    const path = `/teams/${teamId}`;

    history.push(path);
};

export const createTeamUserAction = (params) => (dispatch, getState) => {
  dispatch({
    type: CREATE_TEAM_USER,
    status: PENDING,
  });

  const userId = uuid();

  dispatch({
      type: CREATE_TEAM_USER,
      status: SUCCESS,
      payload: {
        ...params,
        id: userId,
      },
  });
};

export const deleteTeamUserAction = (params) => (dispatch, getState) => {
  dispatch({
    type: DELETE_TEAM_USER,
    status: PENDING,
  });

  dispatch({
      type: DELETE_TEAM_USER,
      status: SUCCESS,
      payload: {
        ...params,
      },
  });
};