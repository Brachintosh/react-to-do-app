import './App.css';
// import checkMark from './assets/logo-check.png'
import Swal from 'sweetalert2'

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
      <div>
        Hello react!
      </div>
      <h3>Hola ?</h3>


    </div>
  );
}

export default App;
