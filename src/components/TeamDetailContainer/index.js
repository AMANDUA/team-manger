import React from 'react';
import { useSelector} from 'react-redux';
import { selectTeam } from '../../state/teams/selectors';
import UserCardSection from '../UserCardSection';

const TeamDetails = ({location, match}) => {
    const teamId = match.params?.teamId;
    const team = useSelector((state) => selectTeam(state, teamId));

    if (team) {
        return (
        <div className="team-details">
            <div className="team-title">
                <h2>{team.displayName}</h2>
                <UserCardSection teamId={teamId}/>
            </div>
        </div>
        );
    }

    return (
        <div className="default-section">
           <div className="default-section-logo" />
        </div>
    );
}

export default TeamDetails