<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
    // data send er jonno post;
    Route::post("/add-student",[StudentController::class,'store']);
    Route::get("/all-students",[StudentController::class,'index']);
    Route::get("/edit-student/{id}",[StudentController::class,'edit']);
    Route::post("/update-student",[StudentController::class,'update']);
    Route::delete("/delete-student/{id}",[StudentController::class,'destroy']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
