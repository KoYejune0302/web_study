import React from 'react'
import './Box.css'
import { Link } from "react-router-dom";

const Box = ({title, content, tag}) => {
    return (
        <div>
            <Link 
                to = '/detail'
                state = {{
                    title: {title},
                    content: {content},
                    tag: {tag},
                    }
                }
            >
                <div className = "Box">
                    <h4 className = "title">{title}</h4>
                    {/* <p className = "content">{content}</p> */}
                    <p className = "tag">{tag}</p>
                </div>
            </Link>
        </div>
    )
};

export default Box;

