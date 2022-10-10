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
        <div class="flex justify-end items-end  h-20 ">
            ABSOLUTE
        </div>

    </div>
<div class="container bg-red-400 visible">
    estou oculto
</div>

<div class="container relative">
    <div class="bg-red-300 h-20 w-20 p-6 text-white rounded m-2 absolute z-10">Frente</div>
        <div class="bg-red-600 h-20 w-20 p-6 text-white rounded m-2 absolute">Atrás</div>

        
    
</div>


<div class="container relative flex justify-center my-48">
    <div class=" bg-gray-900 absolute rounded  h-20 w-20 text-white m-12 ml-24 text-right">C</div>
    <div class="z-20 bg-blue-900 absolute rounded  h-20 w-20 text-white m-6 ml-12 text-right">B</div>
    <div class="z-30 bg-yellow-900 absolute rounded  h-20 w-20 text-white text-right">A</div>

</div>
</template>
<script>
    export default {
        name:'Pag2Vue',
    }
</script>