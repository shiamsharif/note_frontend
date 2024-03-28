<script lang="ts">
  import Note from "$lib/components/Note.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  // const notes = data.notes;
  const { notes } = data;
</script>


<section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-5 bg-orange-200 p-10">
  {#each notes as note}
    <Note 
      title={note.title}
      content={note.content}
    />
  {/each}
</section>

