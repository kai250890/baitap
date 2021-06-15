import React, {useState, useEffect, forwardRef} from "react";
import AppComponent from "./AppComponent";


export default function TableComponent() {
    const [items, setItems]: any = useState([]);
    const [val, delVal]: any = useState([]);
    async function deleteFunction(id: any) {
        const postData = {
            id: id,
        }
        const response = await AppComponent(`https://60c61a0d19aa1e001769ecf4.mockapi.io/products/${id}`, 'DELETE',postData)
        if (response.status == 200){
            delVal(response.json());
        }
        else {
            console.log(response)
        }
    }

    useEffect(() => {
        fetch("https://60c61a0d19aa1e001769ecf4.mockapi.io/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [val])
    return (
        <table className='table table-hover table-bordered my-3'>
            <thead>
            <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {items.map((item: any) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.desc}</td>
                    <td>
                        <button className='btn btn-secondary mx-2'>Sửa</button>
                        <button onClick={() => deleteFunction(item.id)} className='btn btn-danger'>Xóa</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}