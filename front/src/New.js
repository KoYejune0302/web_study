import React, {useState} from "react";
import axios from 'axios';
import { Link} from "react-router-dom";

const New = () => {

    const [inputList, setInputList] = useState({title : "", content : "", tag : ""});

    const {title, content, tag} = inputList;

    const changed = (data) => {
        const {value, name} = data.target;
        setInputList({...inputList,[name]: value});
    };

    const clickHandler_Add = () =>{
        console.log(inputList);
        //입력값 검증 추가
        axios.post("http://127.0.0.1:8000/note/", {
            title: title,
            content: content,
            tag: tag,
        });

    };

    return (
        <div>
            <h1>새로운 페이지입니다!</h1>
            <input
                value={title}
                placeholder="Title"
                name="title"
                onChange={changed}
            ></input>
            <br></br>
            <input
                value={content}
                placeholder="Content"
                name="content"
                onChange={changed}
            ></input>
            <br></br>
            <input 
                value={tag}
                placeholder="#tag"
                name="tag"
                onChange={changed}
            ></input>
            <br></br>
            <Link to='/'>
                <button onClick={clickHandler_Add}>Add MEMO</button>
            </Link>
        </div>
    )
};
 
export default New;