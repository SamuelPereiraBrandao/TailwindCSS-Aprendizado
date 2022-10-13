<template>
  <div class="flex container bg-green-400 p-8 w-screen my-2 rounded">
    <div class="flex-1 bg-green-800 rounded">1</div>
    <div class="flex-1 bg-green-800 rounded">1</div>
    <div class="flex-1 bg-green-800 rounded">1</div>
  </div>

  <div class="grid bg-red-300 grid-cols-3 p-2">
    <div class="bg-red-500">1</div>
    <div class="bg-red-600">2</div>
    <div class="bg-red-700">3</div>
  </div>
  <div class="grid bg-red-300 grid-cols-4">
    <div class="bg-red-600">1</div>
    <div class="bg-red-600">2</div>
    <div class="bg-red-600">3</div>
    <div class="bg-red-600">4</div>
  </div>
  <div class="grid grid-cols-2">
    <div class="bg-green-600">1</div>
    <div class="bg-green-600">2</div>
  </div>
  <div class="grid grid-cols-3 text-center">
    <div class="bg-red-300 m-1 rounded">1</div>
    <div class="bg-red-600 m-1 rounded">2</div>
    <div class="bg-red-300 m-1 rounded">3</div>
    <div class="bg-red-600 m-1 rounded">4</div>
    <div class="bg-red-300 m-1 rounded">5</div>
    <div class="bg-red-600 m-1 rounded">6</div>
    <div class="bg-red-300 m-1 rounded">7</div>
    <div class="bg-red-600 m-1 rounded">8</div>
    <div class="bg-red-300 m-1 rounded">9</div>
  </div>
  <div class="grid grid-cols-6 m-2">
    <div class="col-span-1 bg-yellow-500">
      <ul>
        <li>Home</li>
        <li>Produtos</li>
        <li>Contato</li>
        <li>Blog</li>
      </ul>
    </div>
    <div class="col-span-5 bg-blue-500">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa impedit, veritatis
        obcaecati accusantium perferendis esse ullam fuga necessitatibus dolorum quo rerum
        exercitationem quae quia aliquid asperiores soluta eveniet aspernatur? Quasi?
        Necessitatibus eius doloremque facilis libero similique, praesentium officiis quos
        adipisci excepturi beatae quasi dignissimos alias blanditiis hic provident error
        nemo quidem amet voluptatem magnam quia ipsam esse. Saepe, odio accusantium.
        Impedit dolor dolore qui vitae nisi corporis architecto reprehenderit, reiciendis,
        tenetur laboriosam aliquid similique dolorum ipsam deleniti! Nesciunt dolor eum
        eligendi veniam saepe perferendis quidem deleniti laudantium! Quae, similique
        sint? Odio, quam quisquam dicta, eligendi quasi ea mollitia velit sapiente
        pariatur provident harum recusandae natus. Ipsam, harum distinctio, minima
        inventore, culpa reiciendis labore praesentium ea fugiat nisi quis possimus
        obcaecati. Esse quo ut iure, non aperiam mollitia labore cumque, ipsum facilis
        dolore quod natus, possimus obcaecati illo voluptate rerum! Tenetur nostrum
        necessitatibus, consectetur qui asperiores ea debitis dolorum odio. Qui. Quod,
        facere maiores repellendus voluptatibus at corporis distinctio consequuntur
        consequatur quis praesentium quae nam officiis numquam. At nemo minima accusamus
        ipsum exercitationem ad molestias, fugiat, voluptatem sunt ipsam soluta laborum.
        Soluta at nihil facere voluptatem impedit voluptates, quasi eveniet illum facilis
        tempora quis neque est nam quas ipsum earum reprehenderit minima. Harum ratione
        enim aperiam laboriosam? Harum ipsam reiciendis sit. Enim, aspernatur voluptates
        ducimus quidem recusandae corrupti illo unde tenetur delectus quisquam minus
        veniam laudantium officiis quasi adipisci esse neque dolore nam? Ut amet nihil
        consequuntur vel, est debitis soluta! Iusto adipisci praesentium vitae explicabo
        voluptate architecto sint nulla reprehenderit, illum, quae molestias ea fugit
        veniam reiciendis itaque atque. Mollitia facere repellat accusantium, dicta quidem
        similique possimus debitis blanditiis odit! Provident, itaque, ea sapiente libero
        sit blanditiis illo dolore facilis rerum, minus at possimus est vel. Voluptatem
        nisi placeat adipisci nesciunt, fuga in rerum sapiente ipsam enim minima nostrum
        nobis?
      </p>
    </div>
  </div>

  <div class="grid grid-cols-4 m-2">
    <div class="col-span-1 bg-red-700">
      <p>Barra lateral esquerda</p>
    </div>
    <div class="col-span-2 m-2 bg-red-300">
      <p>Contéudo</p>
    </div>
    <div class="col-span-3 m-2 bg-red-700">
      <p>Barra lateral direita</p>
    </div>
  </div>
  <div class="grid grid-cols-4">
    <div class="col-span-4 bg-yellow-900 text-white">
      <p>Barra de navegação</p>
    </div>
  </div>
  <div class="grid grid-rows-4 grid-flow-row text-center">
    <div class="bg-green-100">1</div>
    <div class="bg-green-200">2</div>
    <div class="bg-green-300">3</div>
    <div class="bg-green-400">4</div>
    <div class="bg-green-500">5</div>
    <div class="bg-green-600">6</div>
    <div class="bg-green-700">7</div>
    <div class="bg-green-800">8</div>
  </div>
  <div class="grid grid-cols-2 gap-1 text-center m-2">
    <div class="grid-cols-1 bg-gray-400 rounded">1</div>
    <div class="grid-cols-2 bg-gray-400 rounded">2</div>
    <div class="grid-cols-3 bg-gray-400 rounded">3</div>
    <div class="grid-cols-1 bg-gray-400 rounded">4</div>
    <div class="grid-cols-2 bg-gray-400 rounded">5</div>
    <div class="grid-cols-3 bg-gray-400 rounded">6</div>
  </div>

  <div class="flex p-2 bg-red-300 justify-end text-white">
    <div class="bg-red-600 p-4 m-4 rounded">1</div>
    <div class="bg-red-600 p-4 m-4 rounded">2</div>
    <div class="bg-red-600 p-4 m-4 rounded">3</div>
    <div class="bg-red-600 p-4 m-4 rounded">4</div>
  </div>
  <div class="flex p-2 bg-blue-300 justify-center text-white">
    <div class="bg-blue-600 p-4 m-4 rounded">1</div>
    <div class="bg-blue-600 p-4 m-4 rounded">2</div>
    <div class="bg-blue-600 p-4 m-4 rounded">3</div>
    <div class="bg-blue-600 p-4 m-4 rounded">4</div>
  </div>
  <div class="flex p-2 bg-green-300 justify-start text-white">
    <div class="bg-green-600 p-4 m-4 rounded">1</div>
    <div class="bg-green-600 p-4 m-4 rounded">2</div>
    <div class="bg-green-600 p-4 m-4 rounded">3</div>
    <div class="bg-green-600 p-4 m-4 rounded">4</div>
  </div>
  <div class="flex p-2 bg-orange-300 justify-between text-white">
    <div class="bg-orange-600 p-4 m-4 rounded">1</div>
    <div class="bg-orange-600 p-4 m-4 rounded">2</div>
    <div class="bg-orange-600 p-4 m-4 rounded">3</div>
    <div class="bg-orange-600 p-4 m-4 rounded">4</div>
  </div>
  <div class="flex p-2 bg-sky-300 justify-around text-white">
    <div class="bg-sky-600 p-4 m-4 rounded">1</div>
    <div class="bg-sky-600 p-4 m-4 rounded">2</div>
    <div class="bg-sky-600 p-4 m-4 rounded">3</div>
    <div class="bg-sky-600 p-4 m-4 rounded">4</div>
  </div>

  <div class="bg-purple-400 flex h-40 items-center justify-center">
    <div class="bg-purple-700 m-2 p-2">1</div>
    <div class="bg-purple-700 m-2 p-2">2</div>
    <div class="bg-purple-700 m-2 p-2">3</div>
  </div>

  <div class="bg-yellow-400 h-40 p-10">
    <span class="bg-yellow-600 p-4 rounded">padding</span>
    <span class="bg-yellow-600 px-4 rounded">padding x</span>
    <span class="bg-yellow-600 py-4 rounded">padding y</span>
  </div>

  <div class="bg-blue-700 text-white font-bold p-4 max-w-5xl">Max WIDTH</div>
  <div class="bg-blue-600 text-white font-bold p-4 w-40 min-w-full min-h-screen">
    Min WIDTH
  </div>
</template>
<script>
export default {
  name: "Pag4Vue",
};
</script>
