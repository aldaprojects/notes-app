<script>
    import { onMount } from "svelte";
    import DB from '../services/notes';
    import Note from "./Note.svelte";

    let notes = [];

    let newNoteShow = false;

    function addNote() {
        newNoteShow = true;
    }

    onMount(()=>{
        DB.getNotes((newNotes)=>{
            console.log(newNotes);
            notes = [ ...newNotes ];
        });
    });

</script>

<div class="w-full flex flex-col">
    {#if newNoteShow}
        <Note bind:isNew={newNoteShow} />
    {:else} 
        <button
            on:click={addNote}
            class="hover:bg-gray-100 p-1 rounded-xl focus:outline-none flex"
        >
            <span class="mx-2 text-yellow-200"><i class="fas fa-plus" /></span>
            <p class="select-none font-semibold text-gray-500">Anade una nota...</p>
        </button>
    {/if}
    {#each notes as note}
        <Note {...note} />
    {/each}
</div>
