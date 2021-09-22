import { Link } from "react-router-dom";
import axios from "axios";
import React,{useEffect,useState} from 'react';

export default function Student() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    async  function fetchData(){
      setLoading(true);
      const res = await axios.get('http://localhost:8000/api/all-students');
      if(res.data.status===200){
        setStudents(res.data.students);
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Student Data
                <Link
                  to="/addStudent"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Student
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped table-bordered text-center">
                <thead>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Course</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {loading && <tr><td colSpan="6">Loading...</td></tr>}
                {!loading && (
                  students.map((student) =>
                      <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.course}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>
                        <Link to={`editStudent/${student.id}`} className="btn btn-outline-success m-1 btn-sm">Edit</Link>
                        <Link to={`delete-student/${student.id}`} className="btn btn-outline-danger m-1 btn-sm">Delete</Link>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
