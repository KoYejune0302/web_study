import React, {useState} from "react";
import axios from 'axios';
import './New.css'

const New = ({setModal}) => {

    const [inputList, setInputList] = useState({title : "", content : "", tag : ""});

    const {title, content, tag} = inputList;

    const changed = (data) => {
        const {value, name} = data.target;
        setInputList({...inputList,[name]: value});
    };

    const clickHandler_Add = event =>{
        console.log('Add')
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
            }).then(()=>setModal(false));  
            window.location.reload();
        }
    };

    return (
        <div className = 'Modal' onCLick={()=> setModal(false)}>
            <div className = 'modalBody'>
                <p className = "space"></p>
                <div>
                    <input
                        value={title}
                        placeholder="Title"
                        name="title"
                        onChange={changed}
                        className = 'New'
                    ></input>
                    <br></br>
                    <textarea
                        value={content}
                        placeholder="Content"
                        name="content"
                        onChange={changed}
                        className = 'content'
                    ></textarea>
                    <br></br>
                    <input 
                        value={tag}
                        placeholder="#tag"
                        name="tag"
                        onChange={changed}
                        className = 'New'
                    ></input>
                    <br></br>
                    <button onClick={()=> setModal(false)} className = 'btn'>←</button>
                    <button onClick={clickHandler_Add} className='btn'>Add MEMO</button>
                </div>
            </div>
        </div>
    )
};
 
export default New;