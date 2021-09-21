import { Link } from "react-router-dom";

export default function Student() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Studen Data
                <Link
                  to="add-student"
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Student
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
