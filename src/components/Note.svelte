<script>
    import TextArea from "./TextArea.svelte";
    import DB from '../services/notes';

    export let isNew = false;
    export let key = "";
    export let title = "";
    export let description = "";

    let isFocus = false;

    function onFocus() {
        isFocus = true;
    }

    async function addNote() {
        isFocus = false;
        await DB.writeNote(title, description);
        isNew = false;
    }

</script>

<div
    class="hover:shadow-md overflow-hidden mt-2 p-3 w-full flex flex-col rounded-md border border-gray-200 space-y-3"
>
    <TextArea bind:value={title} on:focus={onFocus} placeholder="Titulo" maxlength={999} />
    <TextArea bind:value={description} on:focus={onFocus} {isNew} placeholder="Descripcion" maxlength={19999} />
    <div class="flex justify-end">
        {#if isNew || isFocus}
            <button
                on:click={addNote}
                class="focus:outline-none font-semibold text-gray-500 mr-3 rounded-lg hover:bg-gray-100 p-2 w-16"
            >
                Listo
            </button>
        {:else}
            <img class="mr-3 h-8 rounded-full" src="https://lh3.googleusercontent.com/-sREFYFeK17E/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclfZM0nQfkFZTsjAbc9k7aDKlHsww/photo.jpg?sz=46" alt="avatar">
        {/if}
    </div>
</div>
