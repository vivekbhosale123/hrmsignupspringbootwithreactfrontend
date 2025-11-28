import axios from "axios";
import React, { useState } from "react";


export const SignUp=()=>{

    const[employee,setEmployee]=useState({
        
        empName:"",
        empAddress:"",
        empContactNumber:"",
        empDOB:"",
        empEmailId:"",
        empPassword:""
    });

    const{empName,empAddress,empContactNumber,empDOB,empEmailId,empPassword}=employee;

    const onInputChange=(e)=>{
          setEmployee({...employee,[e.target.name]:e.target.value});
    }

    const onSubmit=(e)=>{

        e.preventDefault();

        return axios.post("http://localhost:9191/employees/save",employee)

        console.log(employee)

        alert("Signup done successfully")

    }

    return (
        <div className="container">
           <div className="row">
               <div>
                   <form onSubmit={(e)=>onSubmit(e)}>
                       <div className="mb-2">
                           Employee Name <input type="text" name="empName" value={empName} onChange={(e)=>onInputChange(e)} />
                       </div>
                        <div className="mb-2">
                           Employee Address <input type="text" name="empAddress" value={empAddress} onChange={(e)=>onInputChange(e)} />
                       </div>
                       <div className="mb-2">
                           Employee ContactNumber <input type="number" name="empContactNumber" value={empContactNumber} onChange={(e)=>onInputChange(e)} />
                       </div>
                       <div className="mb-2">
                           Employee DOB <input type="date" name="empDOB" value={empDOB} onChange={(e)=>onInputChange(e)} />
                       </div>
                       <div className="mb-2">
                           Employee emailId <input type="email" name="empEmailId" value={empEmailId} onChange={(e)=>onInputChange(e)} />
                       </div>
                       <div className="mb-2">
                           Employee Name <input type="text" name="empPassword" value={empPassword} onChange={(e)=>onInputChange(e)} />
                       </div>
                       <button className="btn btn-success">SignUp</button>
                   </form>
               </div>
           </div>
        </div>
        
    );
}