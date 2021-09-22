<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function store(Request $request){
        $student = new Student();
        $student->name= $request->name;
        $student->course= $request->course;
        $student->email= $request->email;
        $student->phone= $request->phone;
        $student->save();
        return response()->json([
            "status"=> 200,
            "message"=>"Student Save Successfully"
        ]);
    }

    public function index(){
        $students = Student::all();
        return response()->json([
            "status"=> 200,
            "students"=>$students
        ]);
    }

    public function edit($id){
        $student = Student::find($id);
        return response()->json([
            "status"=>200,
            "student"=>$student,
        ]);
    }
    public function update(Request $request){
        $studentId = $request->id;
        $student = Student::find($studentId);
        $student->name= $request->name;
        $student->course= $request->course;
        $student->email= $request->email;
        $student->phone= $request->phone;
        $student->update();
        return response()->json([
            "status"=>200,
            "message"=>"Data updated Successfully",
        ]);
    }
    public function destroy($id){
        $student = Student::find($id);
        $student->delete();
        return response()->json([
            "status"=>200,
            "message"=>"Data deleted Successfully",
        ]);
    }
}
