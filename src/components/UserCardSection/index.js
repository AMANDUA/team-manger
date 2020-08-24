import React from 'react';

import UserCard from '../UserCard'
import { useSelector } from 'react-redux';

import CreateUserCard from '../CreateUserCard';
import { selectTeam } from '../../state/teams/selectors';

const UserCardSection = ({teamId}) => {
    const team = useSelector((state) => selectTeam(state, teamId));
    const teamUsers = team.users;

    return (
        <div>
        <CreateUserCard />
        {teamUsers.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
        </div>
    );
}

export default UserCardSection;