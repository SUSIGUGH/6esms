import React, { Component } from 'react'
// import ListMomo from './ListMomo';
class AddMomo extends Component{
    
    render()
    {
     /*    const momos=[{
            userid:"1",
            fullname:"Full Name",
            email:"Email",
            mobile:"mobile"
          }] */
        return(
        <div className='App-middle'>
            <h1> Register Yourself for Tasty Momo</h1>
            <form>
                <div>
                <label>Full Name</label>
                <input type='text' name='fullname'></input>
                </div>
                <div>
                <label>Email</label>
                <input type='text' name='email'></input>
                </div>
                <div>
                <label>Mobile</label>
                <input type='text' name='mobile'></input>
                </div>
                <div>
                <button> Register</button>
                </div>
            </form>
            {/* <div>
                <ListMomo momos={momos}/>
            </div> */}
        </div>
        )
    }
   
}
export default AddMomo;
