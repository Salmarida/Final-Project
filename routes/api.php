<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PantientsController;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/patients', [PantientsController::class, 'index']);
    Route::post('/patients', [PantientsController::class, 'store']);
    Route::get('/patients/{id}', [PantientsController::class, 'show']);
    Route::put('/patients/{id}', [PantientsController::class, 'update']);
    Route::delete('/patients/{id}', [PantientsController::class, 'destroy']);
    Route::get('/patients/search/{name}', [PantientsController::class, 'search']);
    Route::get('/patients/status/positive', [PantientsController::class, 'positive']);
    Route::get('/patients/status/recovered', [PantientsController::class, 'recovered']);
    Route::get('/patients/status/dead', [PantientsController::class, 'dead']);

});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);