<template>
    <div class="container mx-auto">
       <button class="btn-blue hover:btn-blue mx-2">Button 1</button>
       <button class="btn-red btn-red:hover mx-2">Button 2</button>
       <button class="btn-green btn-gree:hover mx-2">Button 3</button>
    </div>
    
    <div class="container bg-red-300 mx-auto text-center text-white font-bold py-4 rounded my-3">
        <p>Texto</p>
    </div>
    <div class="container bg-green-300 mx-auto text-center text-white font-bold py-4 rounded my-3">
        <p>Texto</p>
    </div>
    <div class="container bg-green-400 md:bg-blue-600 xl:bg-green-400 mx-auto rounded">
        texto
        </div>
        <div class="container bg-purple-700 mx-auto rounded p-10">
        <p>Border box</p>
        </div>
        <div class="container bg-teal-400 mx-auto rounded p-10">
          <p>Box content</p>
        </div>
    <div class="container">
        <span class="block bg-red-300">Não são elementos de bloco</span>
        <span class="block bg-red-300">Não são elementos de bloco</span>
        <div class="bg-blue-500 inline-block">Block</div>
        <div class="bg-blue-500 inline-block">Block</div>
        <div class="bg-green-900 hidden">
            <h1 >estou aparecendo </h1>
        </div>
         
    </div>
    <div class="container m-6 p-6 overflow-auto h-20 bg-red-400 rounded">
        <div class="bg-red-900  ">1</div>
        <div class="bg-rose-500 ">2</div>
        <div class="bg-amber-500 ">3</div>
        <div class="bg-red-900  ">1</div>
        <div class="bg-rose-500 ">2</div>
        <div class="bg-amber-500 ">3</div>
        <div class="bg-red-900  ">1</div>
        <div class="bg-rose-500 ">2</div>
        <div class="bg-amber-500 ">3</div>
        <div class="bg-red-900  ">1</div>
        <div class="bg-rose-500 ">2</div>
        <div class="bg-amber-500 ">3</div>

    </div>
    <div class="overflow-y-auto h-16 m-6 bg-green-400">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </div>

    <div class="relative bg-pink-600 h-20">
        <div class="absolute top=0 right-0 bg-pink-900">
            ABSOLUTE
        </div>

    </div>
    <div class=" bg-blue-400 h-20">
        <div class="flex justify-end items-end right-0 h-20 ">
            ABSOLUTE
        </div>

    </div>
<div class="container bg-red-400 ">
    estou oculto
</div>
</template>
<script>
    export default {
        name:'Pag2Vue',
    }
</script>