<script>
  import { createEventDispatcher } from "svelte";
  let dispach = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="backdrop"
  on:click="{() => {
    dispach('close');
  }}"
></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
  <img
    src="public\icon-close.svg"
    on:click="{() => dispach('close')}"
    class="close"
    alt=""
  />
  <slot />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap");
  .backdrop,
  main {
    display: none;
    padding: 50px;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 15px;
    height: 250%;
  }
  main {
    width: 45%;
  }
  .close {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 376px) {
    .backdrop {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.829);
      z-index: 1;
    }
    main {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: white;
    }
  }
  @media screen and (max-width: 1012px) {
    .backdrop {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.829);
      z-index: 1;
    }
    main {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: white;
    }
  }
</style>
