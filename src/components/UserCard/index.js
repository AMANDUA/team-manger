import React from 'react';
import {useDispatch} from 'react-redux';

import {deleteTeamUserAction} from '../../state/teams/actions';

const UserCard = ({user}) => {
    const rows = user.userDescription.split("\n").length;
    const dispatch = useDispatch();

    const DeleteTeamUser = (event) => {    
        const params = {
            teamId: user.teamId,
            userId: user.id,
        };

        dispatch(deleteTeamUserAction(params));
      };

    return (
        <div className="user-card">
        <div className="user-card-wrapper">
            <div className="user-name">
               <label>Name: </label>
               <input value={user.userName} disabled/>
           </div>
           <div className="user-description">
               <label>Description: </label>
               <textarea disabled rows={rows}>{user.userDescription}</textarea>
           </div>
           <button onClick={DeleteTeamUser}>Delete User - </button>
        </div>
        </div>
    );
}

export default UserCard;