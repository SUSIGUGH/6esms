import React from 'react'
import spl1 from '../images/spl1.jpg'
import spl2 from '../images/spl2.png'
import add from '../images/add.JPG'

const ListMomo = () => {
        return(
            <div>
                <center>
            <h2>Today's Special</h2>
            </center>
            <div>
                <center>
                <table>
                    <tr>
                        <td><img src={spl1} alt='Click' height='180px' width='180px'></img></td>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <td><img src={add} alt='Click' height='180px' width='180px'></img></td>
                    </tr>
                    <tr>
                        <td><img src={spl2} alt='Click' height='180px' width='180px'></img></td>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <td><img src={add} alt='Click' height='180px' width='180px'></img></td>
                    </tr>
                </table>
                </center>
                
            
            </div>
            </div>
        );


   
}

export default ListMomo;