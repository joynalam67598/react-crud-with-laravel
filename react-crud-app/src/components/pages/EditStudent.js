import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import swal from "sweetalert";

export default function EditStudent(props) {

	const id = props.match.params.id;
	const [studentData, setStudentData] = useState({
		id:'',
		name: "",
		course: "",
		email: "",
		phone: "",
	});
	useEffect(()=>{
		async function fetchStudent(){
			const res = await axios.get(`http://localhost:8000/api/edit-student/${id}`);
			if(res.data.status === 200)
			{
				setStudentData({
					id: res.data.student.id,
					name: res.data.student.name,
					course: res.data.student.course,
					email: res.data.student.email,
					phone: res.data.student.phone,
				});
			}
		}
		fetchStudent();
	},[id]);


	let name, value;
	const handleChange = (e) => {
		name = e.target.name;
		value = e.target.value;
		setStudentData({ ...studentData, [name]: value });
	};



	const updateStudent = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:8000/api/update-student", studentData);
			if(res.data.status===200) {
				swal({
					title: "Updated!",
					text: res.data.message,
					icon: "success",
					button: "OK!",
				});
				setStudentData({
					id:'',
					name: "",
					course: "",
					email: "",
					phone: "",
				})
			}
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
								Edit Student
								<Link to="/" className="btn btn-primary btn-sm float-end">
									Back
								</Link>
							</h4>
						</div>
						<div className="col-md-6 offset-md-3 mt-3">
							<div className="card-body">
								<form onSubmit={updateStudent}>
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
										Update Student
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
