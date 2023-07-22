import React from "react";

import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const IndividualDonut = ({
    userID,
    firstName,
    lastName,
    location,
    picturePath ,
    userPicturePath,
    likes,
    comments,
    _id

}) => {

  return (
    <div>
        <div key={_id}>
            <p>{firstName}</p>
            <h2>{location}</h2>

        </div>


    </div>
  )
}

export default IndividualDonut