import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectIsCreatingTeam} from '../../state/teams/selectors';
import {createTeamAction} from '../../state/teams/actions';

const CreateTeamHeader = () => {
    const [teamName, setTeamName] = useState('');
    const dispatch = useDispatch();
    const isCreatingTeam = useSelector(selectIsCreatingTeam);

    const onTeamNameChange = (event) => {
        const {value} = event.target;
    
        setTeamName(value);
      };

    const resetForm = () => {
      setTeamName('');
    }
    
    const createNewTeam = (event) => {
        event.stopPropagation();
        event.preventDefault();
    
        if (teamName?.trim() && !isCreatingTeam) {
          const params = {
            displayName: teamName,
          };
    
          dispatch(createTeamAction(params));
          resetForm();
        }
      };

    return (
        <div className="create-team-header">
          <form onSubmit={createNewTeam}>   
            <div className="select-group">
                <label>Select Type: </label>
                <select required disabled={isCreatingTeam}>
                    <option selected disabled hidden>Choose Any</option>
                    <option>Team</option>
                </select>
            </div>
            <div className="input-group">
              <label>Team Name: </label>
              <input placeholder="Enter Here" value={teamName} disabled={isCreatingTeam} onChange={onTeamNameChange}/>
            </div>
            <button
            disabled={!teamName?.trim() || isCreatingTeam}
            >
              CREATE
            </button>
          </form>
        </div>
    );
}

export default CreateTeamHeader