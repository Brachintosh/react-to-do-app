import './App.css';
// import checkMark from './assets/logo-check.png'
import Swal from 'sweetalert2'
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  //  Pop up after loading the page:
  Swal.fire({
    title: 'Wellcome!',
    text: 'Do you want to enter?',
    icon: 'success',
    confirmButtonText: 'Check it!'
  })

  return (
    <div className="App">
      
      <header>
        To Do App
      </header>
      <Form />
      <ToDoList />

    </div>
  );
}

export default App;
