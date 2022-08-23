import React, {useState} from "react";
import axios from 'axios';
import { Link} from "react-router-dom";
import './New.css'

const New = () => {

    const [inputList, setInputList] = useState({title : "", content : "", tag : ""});

    const {title, content, tag} = inputList;

    const changed = (data) => {
        const {value, name} = data.target;
        setInputList({...inputList,[name]: value});
    };

    const clickHandler_Add = event =>{
        if (title == ""){
            alert('Title is empty');
            event.preventDefault();
        } else if(content == ""){
            alert('Content is empty');
            event.preventDefault();
        }else if (tag.charAt(0) != '#'){
            alert('Wrong tag');
            event.preventDefault();
        } else{
            console.log(inputList);
            //입력값 검증 추가
            axios.post("http://127.0.0.1:8000/note/", {
                title: title,
                content: content,
                tag: tag,
            });  
        }
    };

    const clickHandler_Back = () =>{
        console.log('Backs');
    };

    return (
        <div>
            <p className = "space"></p>
            <div className = "New">
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
            </div>
            <Link to = '/' clasName='Link' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <button onClick={clickHandler_Back} className = 'Back'>←</button>
            </Link>
            <Link to='/' clasName='Link' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button onClick={clickHandler_Add} className='Add'>Add MEMO</button>
            </Link>
        </div>
    )
};
 
export default New;