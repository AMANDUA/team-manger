export const selectIsCreatingTeam = (state) => state.teams.isCreatingTeam;
export const selectCurrentTeamIds = (state) => state.teams.currentTeamIds;
export const selectTeam = (state, teamId) => state.teams.teams[teamId];