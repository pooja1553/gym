import React, { useState } from 'react';
import './Bmi.css';
import FirstImage from '../FirstImage';


function Bmi() {
    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const [bmi,setBmi] = useState('');
    const [bmiStatus,setBmiStatus] = useState('');
    const addHeight=(e)=>{
        setHeight(e.target.value);
    }
    const addWeight=(e)=>{
        setWeight(e.target.value);
    }
    const calculateBmi=()=>{
        if(height!=='' && weight!==''){
        let h1 = Number.parseFloat(height);
        let w1 = Number.parseFloat(weight);
          if (h1 <= 0 || w1 <= 0) {
            setBmi('');
            setBmiStatus('Invalid input');
            return;
        }
        h1=h1/100;
         const calculatedBmi = (w1 / (h1 ** 2)).toFixed(1);
         setBmi(calculatedBmi);
         const bmi = parseFloat(calculatedBmi);

        if(bmi>=0 && bmi<18.5){
            setBmiStatus('Underweight');
        }
        else if(bmi>=18.5 && bmi<=24.9){
            setBmiStatus('Healthy');
        }
        else if(bmi>=25.0 && bmi<=29.9){
            setBmiStatus('Overweight');
        }
        else{
            setBmiStatus('Obese');
        }
    }
}
  return (
    <>
    <div className="bmi">
        <FirstImage h1='BMI calculator' s='>' h3=' Pages' h2='BMI calculator'/>
        <div className="bmi1">
            <div className="bmi2">
                <p className='orange'>check your body</p>
                <p className='bmi-bold'>BMI CALCULATOR CHART</p>
                <table>
                    <thead>
                        <tr>
                            <th>BMI</th>
                            <th>WEIGHT STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Below 18.5</td>
                        <td>Underweight</td></tr>
                        <tr><td>18.5 - 24.9</td>
                        <td>Healthy</td></tr>
                        <tr><td>25.0 - 29.9</td>
                        <td>Overweight</td></tr>
                        <tr><td>30.0 - and Above</td>
                        <td>Obese</td></tr>
                    </tbody>
                </table>
                <div className="bmi-cal">
                    <p> BMI is : {bmi}</p>
                    <p>Weight Status is : {bmiStatus}</p>
                    </div>
            </div>
            <div className="bmi3">
                <p className='orange'>check your body</p>
                <p  className='bmi-bold'>CALCULATE YOUR BMI</p>
                <p>Knowing your Body Mass Index (BMI) helps you understand whether you're underweight, at a healthy weight, or overweight. Use our simple BMI calculator to take the first step toward your fitness journey. Just enter your height and weight—and get instant results!</p>
                <div className="plan-input">
                    <input value={height} type="number" placeholder='Height/cm' onChange={addHeight}/>
                    <input type="number" placeholder='Weight/kg' onChange={addWeight}/>
                </div>
                <div className="plan-input">
                    <input type="text" placeholder='Age'/>
                    <input type="text" placeholder='Sex'/>
                </div>
                <button onClick={calculateBmi}>Calculate</button>
            </div>
        </div>
    </div>
    {/* <h1>{height}</h1>
    <h1>{weight}</h1>
    <h1>{bmi}</h1>
    <h1>{bmiStatus}</h1> */}
    </>
  )
}

export default Bmi