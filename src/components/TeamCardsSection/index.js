import React from 'react';

import TeamCard from '../TeamCard'

const TeamCardsSection = ({teamIds}) => {
    return (
        <div>
        {teamIds.map((teamId) => (
            <TeamCard key={teamId} teamId={teamId} />
        ))}
        </div>
    );
}

export default TeamCardsSection;