<script>
  import Notes from "./components/Notes.svelte";

</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<div class="h-screen flex flex-col justify-center items-center">
  <div class="h-5/6 w-screen flex border-gray-50 border shadow-sm">
    <div class="h-full w-1/3 border-r p-2 border-gray-100">
      <Notes />
    </div>
    <div class="h-full w-2/3">
      hola
    </div>
  </div>
</div>