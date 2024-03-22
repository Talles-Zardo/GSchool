<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('product')->controller(ProductController::class)->group(function () {
    Route::post('', 'store');
    Route::get('', 'index');
    Route::get('/{product}', 'show');
});



// Route::controller(ProductController::class)->prefix('/product')->group(function () {
//     Route::post('/test', 'test');
//     Route::get('/test/list', 'test');
//     Route::put('/test/{id}', 'test');
//     Route::delete('/test/{id}', 'test');
// });

//all() --> retorna todas as informações do request, independente do tipo.

//input() --> retorna apenas os campos que vierem de um input, se passarmos apenas um nome com propriedade, será acessado apenas o valor dela.

//file() --> retorna apenas os dados do tipo arquivo.

//only() --> acessa apenas os dados com o nome das propriedades passadas como parâmetro

//except() --> acessa todos os dados, exceto os passados como parâmetro.
