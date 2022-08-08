import React from 'react'
import fbimg  from "../images/fb.png"
import twimg  from "../images/tw.png"
import lnimg  from "../images/linkedin.png"
import ytimg  from "../images/ytb.png"

function Footer()
{
return <div className='App-footer'>
    <table>
        <tr>
            

            
        
        <td><a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={fbimg} alt='FB' height="30" width="30" /></a></td>
        <td><a href="www.google.com"><img src={twimg} alt='FB' height="30" width="30" /></a></td>
        <td><a href="www.google.com"><img src={lnimg} alt='FB' height="30" width="30" /></a></td>
        <td><a href="www.google.com"><img src={ytimg} alt='FB' height="30" width="30" /></a></td>
        </tr>
</table>
</div>
}

export default Footer
