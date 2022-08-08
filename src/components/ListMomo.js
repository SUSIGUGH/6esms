import React from 'react';
import {GoTrashcan} from "react-icons/go";

const ListMomo = (props) => {
    console.log(props)
    const showMomos = props.momos.map((momo) => {
        const { momoname, momorate } = momo


        return (
            <div>
                <table border="2">
                    <tr >
                        <td> {momoname}</td>
                        <td> {momorate}</td>
                        <td> <img src={require("../images/spl1.jpg")} alt='Text' /></td>
                        <td> <GoTrashcan /></td>

                    </tr>
                </table>


            </div>
        );
    })
    return (
        <div>
            {showMomos}
        </div>
    )
}
export default ListMomo;