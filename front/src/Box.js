import React from 'react'
import './Box.css'
import { Link } from "react-router-dom";

const Box = ({id, title, content, tag}) => {
    return (
        <div>
            <Link 
                to = '/detail'
                state = {{
                    id : {id},
                    title: {title},
                    content: {content},
                    tag: {tag},
                    }
                }
                clasName='Link' style={{ color: 'inherit', textDecoration: 'inherit'}}
            >
                <div className = "Box">
                    <p className = "title">{title}</p>
                    <p className = "tag">{tag}</p>
                </div>
            </Link>
        </div>
    )
};

export default Box;

