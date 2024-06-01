import './App.css';
import { useState } from "react";

function App() {

  const [list, setList] = useState([]) // list 1 array ha is lye array bracket
  const [text, setText] = useState('')
  const [editIndex, setEditIndex] = useState(null);

  const [error, setError] = useState()


  //            ||||||||||||||||||||||||||||||||  ADD ITEM FUNCT  ||||||||||||||||||||||||||||||||||||||

  function AddItem() {// Yahan input value ko list me add karne ka code hoga

    if (text === '') {
      errorMessage('Fill out the field')
      return
    }

    // purpose: List me input ki value push krwani ha
    //mojod: LIST: list (mojod), INPUT: text (la mojod) 

    if (!text.trim() == '') { // without value ya space ho to list me value add na ho

      // if (text.trim() !== '') ye condition bh kam kr sakti ha yhn par 

      const copyList = [...list]
      copyList.push(text)
      setList(copyList)
    }

    setText('') //The input field should be empty after the value is add
  }


  //              ||||||||||||||||||||||||||||||||| UPDATE TEXT FUNCT  |||||||||||||||||||||||||||||||||||||

  function updateTxt(e) {// Yahan item ko update karne ka code hoga
    // console.log(e);
    // console.log(e.target.value);
    const value = e.target.value
    console.log(value);
    setText(value)
  }

  //              ||||||||||||||||||||||||||||||||| DELETE ITEM FUNCT |||||||||||||||||||||||||||||||||||||


  function deleteItem(index) {

    // PURPOSE: Jis INDEX per click hua, usko LIST me se SPLICE krna hai
    //Mojod: LIST: mojod, INDEX: la mojod: index

    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
  }


  //              ||||||||||||||||||||||||||||||||| EDIT ITEM FUNCT |||||||||||||||||||||||||||||||||||||

  function editItem(index) {
    setEditIndex(index);
    setText(list[index]);
  }


  //              ||||||||||||||||||||||||||||||||||| UPDATE ITEM FUNCT  |||||||||||||||||||||||||||||||||||

  function updateItem() {
    if (editIndex !== null && text.trim() !== '') {
      const copyList = [...list];
      copyList[editIndex] = text;
      setList(copyList);
      setText('');
      setEditIndex(null);
    }
  }

  //              ||||||||||||||||||||||||||||  DELETE ALL FUNCT  ||||||||||||||||||||||||||||||||||||||||||

  function deleteAll() {
    setList([])
  }


  //              ||||||||||||||||||||||||||||| ERROR MESSAGE FUNCT |||||||||||||||||||||||||||||||||||||||||


  function errorMessage(message) {
    setError(message)

    setTimeout(() => {
      setError('')
    }, 2000)
  }

  //              ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  return (
    <div className="App">
      <div className="App-header">
        <div className='title'><p>Todo App</p></div>

        <div className="container">

          <input type="text" placeholder="Enter Your Task" onChange={updateTxt} value={text} className='input' />

          {editIndex === null
            ?
            (<button onClick={AddItem} className='addBtn'> Add Item</button>)
            :
            (<button onClick={updateItem} className='updBtn'> Update Item</button>)
          }

          <button onClick={deleteAll} className='DeltBtn'>Delete All</button>

        </div>

          </div>

          <div className="parent">

          <div className='errMsg'>
          {error}
          <div>

            <div className="listContainer">

              <ul className='list'>

                {list.map(function (items, index) {
                  return (<div key={index}>
                    <li style={{ backgroundColor: editIndex === index ? 'orange' : 'transparent', borderRadius: '6px' }}>
                      {items}

                      <button onClick={() => editItem(index)} className='editBtn'>Edit</button>
                      <button onClick={() => deleteItem(index)} className='deletBtn'>Delete</button>

                    </li>
                  </div>)
                })}
              </ul>

            </div>
          </div>

        </div>

      </div>
    </div>

  );
}

export default App;
