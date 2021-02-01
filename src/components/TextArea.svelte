<script>
    import { onMount } from "svelte";

    export let value = "";
    export let placeholder = "";
    export let maxlength = 0;
    export let isNew = false;

    let textarea;
    let lastScrollHeight = 24;

    onMount(() => {
        if (isNew) {
            textarea.focus();
        }
    });

    function auto_grow({ target }) {
        value = target.value;
        let rows = textarea.getAttribute("rows");
        textarea.setAttribute("rows", 1);
        if (textarea.scrollHeight > lastScrollHeight) {
            rows++;
        } else if (rows > 1 && textarea.scrollHeight < lastScrollHeight) {
            rows--;
        }
        lastScrollHeight = textarea.scrollHeight;
        textarea.setAttribute("rows", rows);
    }
</script>

<textarea
    on:focus
    {value}
    bind:this={textarea}
    on:input={auto_grow}
    rows="1"
    {maxlength}
    class="resize-none focus:outline-none {placeholder === 'Titulo'
        ? 'font-semibold'
        : ''}"
    type="text"
    {placeholder}
/>
