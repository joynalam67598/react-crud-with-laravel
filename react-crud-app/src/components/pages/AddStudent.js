import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddStudent() {
  const [studentData, setStudentData] = useState({
    name: "",
    course: "",
    email: "",
    phone: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStudentData({ ...studentData, [name]: value });
  };

  const saveStudent = async (e) => {
    e.prventDefault();
    try {
      const res = await axios.post("/api/add-student", studentData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Add Student
                <Link to="/" className="btn btn-primary btn-sm float-end">
                  Back
                </Link>
              </h4>
            </div>
            <div className="col-md-6 offset-md-3 mt-3">
              <div className="card-body">
                <form onSubmit={saveStudent}>
                  <div className="form-group mb-3">
                    <label>Student Name</label>
                    <input
                      type="text"
                      name="name"
                      value={studentData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Course</label>
                    <input
                      type="text"
                      name="course"
                      value={studentData.course}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Email</label>
                    <input
                      type="email"
                      name="email"
                      value={studentData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Phone No.</label>
                    <input
                      type="text"
                      name="phone"
                      value={studentData.phone}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-info btn-block">
                    Save Student
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
