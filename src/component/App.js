import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENTS',
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvent = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか?')
    if(result) dispatch({ type: 'DELETE_ALL_EVENTS' })
  }

  const un = title === '' || body === ''
  const fullun =  state.length === 0

  return (
    <div className="container-fluid">
      <h4>イベントフォーム作成</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        
        <button className="btn btn-primary" onClick={addEvent} disabled={un}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={fullun}>全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
          state.map((event, index) => {
            const id = event.id
            const handleClickDeleteBtn = () => {
              const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか`)
              if(result)dispatch({type: 'DELETE_EVENTS', id})
            }
              return(
                <tr key={index}>
                <td>{id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteBtn}>削除</button></td>
              </tr> 
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
