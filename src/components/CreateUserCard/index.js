import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import {createTeamUserAction} from '../../state/teams/actions';

const CreateUserCard = () => {
    const { teamId } = useParams();
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const dispatch = useDispatch();

    const onUserNameChange = (event) => {
        const {value} = event.target;
    
        setUserName(value);
      };

      const onUserDescriptionChange = (event) => {
        const {value} = event.target;
    
        setUserDescription(value);
      }; 

    const resetForm = () => {
        setUserName('');
        setUserDescription('');
    }
    
    const createNewTeamUser = (event) => {
        event.stopPropagation();
        event.preventDefault();
    
        const params = {
            teamId,
            userName,
            userDescription
        };

        dispatch(createTeamUserAction(params));
        resetForm();
      };

    return (
        <div className="main">
        <div className="default-user-card">
           <div className="user-name-section">
               <label>Name: </label>
               <input placeholder="Enter here" value={userName} onChange={onUserNameChange}/>
           </div>
           <div className="user-description-section">
               <label>Description: </label>
               <textarea rows={7} cols={8} value={userDescription} onChange={onUserDescriptionChange}/>
           </div>
           <button onClick={createNewTeamUser} disabled={!userName?.trim() || !userDescription?.trim()}>Create User + </button>
        </div>
        </div>
    );
}

export default CreateUserCard;