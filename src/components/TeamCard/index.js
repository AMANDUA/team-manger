import React from 'react';
import classnames from 'classnames';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';

import {selectTeam} from '../../state/teams/selectors';
import { navigateToTeam } from '../../state/teams/actions';

const TeamCard = ({teamId}) => {
    const location = useLocation();
    const team = useSelector((state) => selectTeam(state, teamId));
    const path = location.pathname;
    const selectedTeamID = path.split('/')[2];
    const dispatch = useDispatch();

    const onClick = () => {
      dispatch(navigateToTeam({teamId}));
    };
    
    return (
        <div className={classnames('team-card-wrapper', {'selected' : selectedTeamID === teamId})} onClick={onClick}>
            {team.displayName}
        </div>
    );
}

export default TeamCard;