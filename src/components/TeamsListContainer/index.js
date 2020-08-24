import React from 'react';
import {useSelector} from 'react-redux';

import {selectCurrentTeamIds} from '../../state/teams/selectors';
import TeamCardsSection from '../TeamCardsSection'

const TeamList = () => {
    const currentTeamIds = useSelector(selectCurrentTeamIds);

    return (
        <div className="team-list">
        <h2>Teams</h2>
        <TeamCardsSection
          teamIds={currentTeamIds}
        />
        </div>
    );
}

export default TeamList;