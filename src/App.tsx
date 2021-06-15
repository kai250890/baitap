import React, {createRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TableComponent from "./Component/TableComponent";

function App() {
    return (
        <div className="App container">
            <div className='my-3 d-flex flex-row-reverse'>
                <button className='btn btn-primary '>Tạo mới</button>
            </div>
            <div className='my-3'>
                <TableComponent/>
            </div>
        </div>
    );
}

export default App;
