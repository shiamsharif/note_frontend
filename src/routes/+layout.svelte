<script>
  import "../app.css";
</script>

<header class="flex justify-between items-center p-6 bg-orange-400">
  <div class="text-4xl text-b font-bold">
      Notepad
  </div>
  <div class="text-xl text-b font-bold bg-orange-600 p-5 rounded-full">
      +
  </div>
</header>
  
<slot />


<footer class="flex justify-end items-center p-6 bg-orange-300 bottom-0">
  <div class="text-xl text-b font-bold bg-orange-600 p-5 rounded-full">
      +
  </div>
</footer>