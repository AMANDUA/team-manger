export const sanitizeTeam = (team) => {
    const sanitizedTeam = {};
  
    sanitizedTeam.id = team.id;
    sanitizedTeam.displayName = team.displayName;
    sanitizedTeam.users = [];
      
    return sanitizedTeam;
  };