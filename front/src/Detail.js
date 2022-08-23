import React from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
 
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
        alert("Memo has been deleted");
        axios.delete(`http://127.0.0.1:8000/note/${id.id}/`);
    };


    return (
        <div>
            <h1>상세 페이지입니다!</h1>
            <div className = "Detail">
                <h4 className = "title">{title.title}</h4>
                <p className = "content">{content.content}</p>
                <p className = "tag">{tag.tag}</p>
            </div>
            <Link to = '/'>
                <button onClick={clickHandler_Delete}>Delete MEMO</button>
            </Link>
        </div>
  )
};
 
export default Detail;