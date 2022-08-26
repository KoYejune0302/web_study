import './App.css';
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import Box from './Box.js'
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import New from './New.js';

Modal.setAppElement('#root');

const App = () =>{

  const [inputList, setInputList] = useState({tag : ""});
  const {tag} = inputList;

  const [result, setResult] = useState([{title : '', content : '', tag : ''}]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/note/")
      .then((response) => {
      setResult([...response.data]);
      })
      .catch(function (error) {
      console.log(error);
      });

    return () => {
    }
  }, []);

  const changed = (e) => {
    const {value, name} = e.target;
    setInputList({...inputList, [name]: value});
  };

  const clickHandler_Add = () =>{
    setModalIsOpen(true);
  };

  const clickHandler_re = () =>{
    tag = "";
  };

  const clickHandler_Search = () =>{
    console.log("Search");
    console.log(tag);
    const url = "http://127.0.0.1:8000/note/?search="+tag;
    axios.get(url)
      .then((response) => {
      setResult([...response.data]);
      })
      .catch(function (error) {
      console.log(error);
      });
  };

  return (
    <div className="App">
      <Link to='/' clasName='Link' style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={clickHandler_re}>
        <h1 className="first">MEMO</h1>
      </Link>

      <div className = "form-style pb-3">
        <a>Search by  </a>
        <input
          value = {tag}
          placeholder = "#tag"
          name = "tag"
          onChange = {changed}
        ></input>
        <button type='button' className='search' onClick={clickHandler_Search}>→</button>
      </div>

      <div className = "memo-list">
        {result.map(memo => <Box id = {memo.id} title={memo.title} content={memo.content} tag={memo.tag} />)}
      </div>

      <div className = "plus">
          <button type='button' className='w-btn w-btn-gra1 btn-holder' onClick={clickHandler_Add}>Add MEMO</button>
      </div>

      <Modal isOpen={modalIsOpen} className = 'modal'>
        <New setModal={setModalIsOpen}/>
      </Modal>

    </div>
  );
}

export default App;
