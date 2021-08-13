import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@material-ui/core";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <Avatar src={user.picture} />

      </div>
    )
  }
  else{
    return(
      <div>
        <Avatar/>
      </div>
    )
  }
};

export default Profile;