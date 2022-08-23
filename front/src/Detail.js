import React from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import './Detail.css';
 
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const Detail = () => {
    const location = useLocation();
    const title = location.state?.title;
    const content = location.state?.content;
    const tag = location.state?.tag;
    const id = location.state?.id;

    console.log(id);
    console.log(title);
    console.log(content);
    console.log(tag);

    const clickHandler_Delete = () =>{
        axios.delete(`http://127.0.0.1:8000/note/${id.id}/`);
        alert("Memo has been deleted");
        console.log('del');
    };

    const clickHandler_Back = () =>{
        console.log('Backs');
    };


    return (
        <div>
            <div className = "Detail">
                <h4 className = "de-title">Title : {title.title}</h4>
                <p className = "de-content">{content.content}</p>
                <p className = "de-tag">Tag {tag.tag}</p>
            </div>
            <Link to = '/' clasName='Link' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <button onClick={clickHandler_Back} className = 'Back'>←</button>
            </Link>
            <Link to = '/' clasName='Link' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <button onClick={clickHandler_Delete} className = 'Del'>Delete</button>
            </Link>
        </div>
  )
};
 
export default Detail;