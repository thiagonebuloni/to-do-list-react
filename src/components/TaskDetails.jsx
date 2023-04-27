import React from 'react'
import { useNavigate, useParams } from "react-router-dom"

import Button from "./Button"

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useNavigate();

    const handleBackButtonClick = () => {
        history("/");
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto necessitatibus a nobis eaque voluptatum!
                </p>
            </div>
        </>
     );
};
 
export default TaskDetails;