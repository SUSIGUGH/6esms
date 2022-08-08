import React, { Component } from 'react'
import ListMomo from './ListMomo';
class AddMomo extends Component{
    
    render()
    {
        const momos=[{
            momoid:"1",
            momoname:"Steam Chicken Momo",
            momorate:"125",
          }]
        return(
        <div className='App-middle'>
            <h1> Add Momo</h1>
            <form>
                <div>
                <label>Name</label>
                <input type='text' name='momoname'></input>
                </div>
                <div>
                <label>Description</label>
                <input type='text' name='momodescription'></input>
                </div>
                <div>
                <label>Rate</label>
                <input type='text' name='momorate'></input>
                </div>
                <div>
                <button> Save Momo</button>
                </div>
            </form>
            <div>
                <ListMomo momos={momos}/>
            </div>
        </div>
        )
    }
   
}
export default AddMomo;
