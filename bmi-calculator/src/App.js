import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

window.addEventListener('change', (event) => {
  const wagainput = document.getElementById("waga").value;
  const wzrostinput = document.getElementById("wzrost").value;

  const waga = parseFloat(wagainput);
  const wzrost = parseFloat(wzrostinput / 100);

  if (isNaN(waga) || isNaN(wzrost) || waga <= 0 || wzrost <= 0) {
    document.getElementById("result").style.color = "white";
    document.getElementById("result").innerHTML = "<b>Wprowadź poprawne dane</b>";
    return;
  }

  const bmi = waga / (wzrost * wzrost);

  if(bmi > 25 && bmi < 30){
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Twoje bmi to: </br>" + bmi.toFixed(2) + "</br><b style='font-size: 2rem'>masz nadwagę</b>";
  }else if(bmi > 30) {
    document.getElementById("result").style.color = "orange";
    document.getElementById("result").innerHTML = "Twoje bmi to: </br>" + bmi.toFixed(2) + "</br><b style='font-size: 2rem'>jesteś otyły</b>";
  }else if(bmi > 18.5 && bmi < 25){
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = "Twoje bmi to: </br>" + bmi.toFixed(2) + "</br><b style='font-size: 2rem'>masz prawidłowe bmi</b>";
  }else if(bmi < 18.5){
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Twoje bmi to: </br>" + bmi.toFixed(2) + "</br><b style='font-size: 2rem'>masz niedowagę</b>";
  }
}); 
  
function App() {
  return (
    <div className="App pt-5">
      <div className="MainContainer m-auto mt-5 pt-5">
      <Form className='text-center mt-5 pt-3'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-light'>Twoja waga (w kg)</Form.Label>
        <Form.Control type="number" className='bg-dark text-light w-50 m-auto' id='waga'/>
      </Form.Group>

      <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput2">
        <Form.Label className='text-light'>Twój wzrost (w cm)</Form.Label>
        <Form.Control type="number" className='bg-dark text-light w-50 m-auto' id='wzrost'/>
      </Form.Group>
      </Form>
      <span id='result' className='d-block text-center'/>
      </div>
      <h1 className='text-center mt-4 text-light mb-0'><b>Kalkulator BMI</b></h1><br></br>
      <h4 className='text-center text-light'>Wykonane przez Franciszka Rogowskiego</h4>
    </div>
  );
} 

export default App;
