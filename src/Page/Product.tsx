import React, {useState, useEffect} from "react";
import TableComponent from "../Component/TableComponent";
import FormComponent from "../Component/CreateComponent";

function Product () {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://60c61a0d19aa1e001769ecf4.mockapi.io/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    setError(error);
                }
            )
    }, [])

    return(
        <div>
            <div>
                <FormComponent title={'Tạo mới'}/>
            </div>
            <div>
                <TableComponent data={items}/>
            </div>
        </div>
    );

}

export default Product;