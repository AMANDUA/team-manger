import {produce} from 'immer';
import {SUCCESS, PENDING, FAILURE} from '../constants';

import {
    CREATE_TEAM,
    CREATE_TEAM_USER,
    DELETE_TEAM_USER,
  } from './constants';

  const initialState = {
    teams: {},
    currentTeamIds: [],
  };

  const addTeam = (draft, team) => {
    draft.teams[team.id] = team;
    if (draft.currentTeamIds.indexOf(team.id) === -1) {
      // only push if it doesn't already exists
      draft.currentTeamIds.push(team.id);
    }
  };

  const addTeamUser = (draft, user) => {
    draft.teams[user.teamId].users.push(user);
  };

  const deleteTeamUser = (draft, user) => {
    draft.teams[user.teamId].users.shift(user);
  };

  export default produce((draft, action) => {
    switch (action.type) {
      case CREATE_TEAM:
        switch (action.status) {
          case PENDING:
            draft.isCreatingTeam = true;
            break;
          case SUCCESS:
            draft.isCreatingTeam = false;
            addTeam(draft, action.payload.team);
            break;
          case FAILURE:
            draft.isCreatingTeam = false;
            break;
          default:
            break;
        }
        break;
      case CREATE_TEAM_USER:
        switch (action.status) {
          case PENDING:
            draft.isCreatingTeamUser = true;
            break;
          case SUCCESS:
            draft.isCreatingTeamUser = false;
            addTeamUser(draft, action.payload);
            break;
          case FAILURE:
            draft.isCreatingTeamUser = false;
            break;
            default:
            break;
        }
        break;
      case DELETE_TEAM_USER:
        switch (action.status) {
          case PENDING:
            draft.isDeletingTeamUser = true;
            break;
          case SUCCESS:
            draft.isDeletingTeamUser = false;
            deleteTeamUser(draft, action.payload);
            break;
          case FAILURE:
            draft.isDeletingTeamUser = false;
            break;
            default:
            break;
        }
        break;
        default:
            break;
      }
  }, initialState);