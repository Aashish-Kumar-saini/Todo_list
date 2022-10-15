import './App.css';
import Header from './AllComponents/Header';
import Todos from './AllComponents/Todos';
import Footer from './AllComponents/Footer';
import React, { useEffect, useState } from 'react';
import Addtodo from './AllComponents/Addtodo';
import About from './AllComponents/About';
import Contact from './AllComponents/Contact';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on Delete of ", todo);

  

    setTodos(tds.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(tds));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno=1;
    if (tds.length === 0) {
      sno = 1;
    }
    else {
      sno = tds[tds.length - 1].s_no + 1;
    }

    const myTodo = {
      s_no: sno,
      todo_title: title,
      todo_desc: desc,
    }
    setTodos([...tds, myTodo])
    console.log(myTodo)
  }

  const [tds, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tds));
  }, [tds])

  return (
    <>

      <Router>
        <Header title="Just Todos" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todosvar={tds} onDel={onDelete} />
              </>
            )
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;