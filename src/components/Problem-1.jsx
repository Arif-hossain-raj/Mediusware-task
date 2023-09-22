import React, { useState } from 'react';

const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [formData, setFormData] = useState({
        name: '',
        status: '',
    });

    //getting the input data
    console.log(formData);

    const [tableData, setTableData] = useState([]);

    //input field data change

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //The table data will be changed by this handeler
    const handleSubmit = (e) => {
        e.preventDefault();

        setTableData([...tableData, formData]);

        setFormData({
            name: '',
            status: '',
        });
    };

    //storing data with status

    //not working properly in case-sensitive

    const sortTableData = (data) => {
        return data.sort((a, b) => {
            if (a.status === 'Active' || a.status === 'active' ) {
                return -1;
            } else if (a.status === 'Completed' || a.status === 'completed' && b.status !== 'Active' || b.status !== 'active' ) {
                return -1;
            } else {
                return 1;
            }
        });
    };

    const allInputData = sortTableData(
        show === 'all'
            ? tableData
            : tableData.filter((item) => item.status === show)
    );



    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6">
                    <form
                        className="row gy-2 gx-3 align-items-center mb-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'all' && 'active'}`}
                                type="button"
                                onClick={() => setShow('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'active' && 'active'}`}
                                type="button"
                                onClick={() => setShow('active')}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'completed' && 'active'}`}
                                type="button"
                                onClick={() => setShow('completed')}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {allInputData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
