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

Route::group(['prefix' => '/product'], function () {
    Route::post('/test', [ProductController::class, 'test']);
    Route::get('/test/list', [ProductController::class, 'test']);
    Route::put('/test/{id}', [ProductController::class, 'test']);
    Route::delete('/test/{id}', [ProductController::class, 'test']);
});

//all() --> retorna todas as informações do request, independente do tipo.

//input() --> retorna apenas os campos que vierem de um input, se passarmos apenas um nome com propriedade, será acessado apenas o valor dela.

//file() --> retorna apenas os dados do tipo arquivo.

//only() --> acessa apenas os dados com o nome das propriedades passadas como parâmetro

//except() --> acessa todos os dados, exceto os passados como parâmetro.
