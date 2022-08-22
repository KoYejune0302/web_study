import React from "react";
import { useLocation } from "react-router-dom";
 
const Detail = () => {
    const location = useLocation();
    const title = location.state?.title;
    const content = location.state?.content;
    const tag = location.state?.tag;

    console.log(title);
    console.log(content);
    console.log(tag);
    return (
        <div>
            <h1>상세 페이지입니다!</h1>
            <div className = "Detail">
                <h4 className = "title">{title.title}</h4>
                <p className = "content">{content.content}</p>
                <p className = "tag">{tag.tag}</p>
            </div>
        </div>
  )
};
 
export default Detail;