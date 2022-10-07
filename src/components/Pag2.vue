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
    <div class="container m-6 p-6 bg-red-300 rounded">
        <div class="bg-red-900  md:inline-block">1</div>
        <div class="bg-rose-500 md:inline-block">2</div>
        <div class="bg-amber-500 md:inline-block">3</div>

    </div>
</template>
<script>
    export default {
        name:'Pag2Vue',
    }
</script>