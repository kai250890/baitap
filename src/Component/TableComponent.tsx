import React, {Component} from "react";
import AppComponent from "./AppComponent";


export default class TableComponent extends Component<any>{
    constructor(props: any) {
        super(props);
    }
    render() {
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
                {this.props.data.map((item: any) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.desc}</td>
                        <td>
                            <button className='btn btn-secondary mx-2'>Sửa</button>
                            <button className='btn btn-danger'>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}