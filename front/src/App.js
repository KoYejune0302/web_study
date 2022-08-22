import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Box from './Box.js'
import Detail from './Detail.js'
import New from './New.js'
import { withRouter } from "react-router";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

const App = () =>{

  const [inputList, setInputList] = useState({tag : ""});
  const {tag} = inputList;

  const [text, setText] = useState([]);

  // const result = text.filter((e) => (e.title === title) && (e.content === content) && (e.tag == tag));
  const result_ex = [{title : '제목', content : '내용', tag : '1,2,3'}];
  const [result, setResult] = useState(result_ex)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/note/")
      .then((response) => {
      setText([...response.data]);
      })
      .catch(function (error) {
      console.log(error);
      });
  
    console.log('second');
    setResult(text);

    return () => {
      console.log('first');
      setResult(text);
    }
  }, []);

  const changed = (e) => {
    const {value, name} = e.target;
    setInputList({...inputList, [name]: value});
  };

  const clickHandler_Add = () =>{
    console.log("ADD");
  };

  const clickHandler_Search = () =>{
    console.log("Search");
    console.log(tag);
    const url = "http://127.0.0.1:8000/note/?search="+tag;
    axios.get(url)
      .then((response) => {
      setText([...response.data]);
      })
      .catch(function (error) {
      console.log(error);
      });
    console.log(text);
    setResult(text);
    // 입력 형태 검사
    // 형태가 이상하면 alert
    // 형태가 제대로 되있다면 search

  };

  return (
    <div className="App">
      <h1>MEMO</h1>


      <div className = "form-style pb-3">
        <a>Search by  </a>
        <input
          value = {tag}
          placeholder = "#tag"
          name = "tag"
          onChange = {changed}
        ></input>
        <button type='button' className='w-btn w-btn-gra1' onClick={clickHandler_Search}>Search</button>
      </div>

      <div className = "memo-list">
        {result.map(memo => <Box title={memo.title} content={memo.content} tag={memo.tag} />)}
      </div>

      {/* <div>
        <BrowserRouter>
          <Routes>      
            <Route
              path="/App"
              exact
              render={result.map(memo => <Box title={memo.title} content={memo.content} tag={memo.tag} />)}
            />
            <Route path="/detail" component={Detail}/>
          </Routes>
        </BrowserRouter>
      </div> */}


      <div className = "plus">
        <Link to= '/new'>
          <button type='button' className='w-btn w-btn-gra1 plus' onClick={clickHandler_Add}>Add MEMO</button>
        </Link>
      </div>

    </div>
  );
}

export default App;
