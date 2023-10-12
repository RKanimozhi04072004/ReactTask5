import React,{useState} from 'react';
function AgeCalculator(){
  const [dob,setDob]=useState('');
  const [age,setAge]=useState(null);
  const calculateAge=()=>{
    const dobDate=new Date(dob);
    const currentDate=new Date();
    const ageInMilliSeconds=currentDate-dobDate;
    const ageInYears=ageInMilliSeconds/(1000*60*60*24*365.25);
    setAge(Math.floor(ageInYears));
  };
  return(
    <div class="container">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input
       type="date"
       value={dob} 
       onChange={(e)=>setDob(e.target.value)}
      />
      <br>
      </br>
      <button onClick={calculateAge}>Calculate Age</button>
      {age!==null && <h2>You are {age} years old</h2>}
    </div>
  );
}
export default AgeCalculator;