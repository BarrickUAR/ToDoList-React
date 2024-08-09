import './App.css'

function App() {
  return (
    <div className="appWrapper">
      <TaskInputForm />
      <TaskOverview />
    </div>
  )
}

function TaskInputForm() {
  return (
    <form className="taskInputForm" autoComplete="off">
      <input required type="text" name="task" placeholder="Yeni Görev Ekleyin" />
      <button type="submit" className="submitButton">
        <img src="/images/plus.svg" alt="Ekle" />
      </button>
    </form>
  )
}

function TaskOverview() {
  return (
    <div className="taskOverview">
      <p>Görev Listesi - <span className="taskCount">0</span></p>
      <ul className="taskList"></ul>
    </div>
  )
}

export default App
