import {useState, useEffect} from 'react';
import {useFetch, fetchAPI} from '../api/Common';

export default function Home() {
    const URL = "http://localhost:3001/students/";
    const [data, loading] = useFetch(URL);
    const [students, setStudents] = useState(data);   

    const handleDelete = (event, data) => {
        let raw = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetchAPI(URL + data.id, raw)
        .then(() => {
            alert("Delete successfully!");
            window.location.reload();
        })
        .catch(err => alert("Failed to delete" + err))
    }

    useEffect(()=> {
        if (data) setStudents(data);    
    },[data]);

    if (!data || loading) 
        return <div>Loading...</div>;

    return(
        <div className="container">
            <h1 className="text-center"> Student List </h1>
            <a href="/final-form" role='button' className="btn btn-primary mb-2">Add student</a>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">School Year</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map((element, index)=>
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.birthday}</td>
                                <td>{element.gender}</td>
                                <td>{element.address}</td>
                                <td>{element.schoolYear}</td>
                                <td>
                                    <button className='btn btn-danger' type='button' onClick={(e)=>handleDelete(e,element)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }    
                </tbody>
            </table>
        </div>
    )
}