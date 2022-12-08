<script>
  import { createEventDispatcher } from "svelte";
  const images = [
    {
      id: 0,
      imgurl: "public/image-product-1.jpg",
    },
    {
      id: 1,
      imgurl: "public/image-product-2.jpg",
    },
    {
      id: 2,
      imgurl: "public/image-product-3.jpg",
    },
    {
      id: 3,
      imgurl: "public/image-product-4.jpg",
    },
  ];
  export let main;
  let a =false;
  let currentimg;
  export let currentid;
  let dispach = createEventDispatcher();
  function view(event) {
    let current = event.target.className.charAt(0);
        main = images[current].imgurl;
        currentimg=images[current].id;
        let sec = document.querySelectorAll('section img')
    sec.forEach(element => {
      element.id='child2';
      // @ts-ignore
      element.parentNode.id=''
    });
    event.target.parentNode.id='parent'
    event.target.id='child';
  }
  function next(){
     if(currentid===images.length-1){
      currentid=0;
      main=images[currentid].imgurl
     }
     else{
      currentid++;
        main=images[currentid].imgurl
      console.log(currentid)
     }
  }
  function previous(){
     if(currentid===0){
      currentid=images.length;
      currentid--;
      main=images[currentid].imgurl
      
     }
     else{
        currentid--;
        main=images[currentid].imgurl
     }
  }
  
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="backdrop"
  on:click="{() => {
    dispach('cancle');
  }}"
></div>
<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svg
    width="54"
    height="55"
    class="close"
    on:click={() => {
    dispach('cancle');
  }}
    viewBox="0 0 20 25"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
      fill-rule="evenodd"></path></svg
  >
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="pictures">
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="pic">
     
      <img class="main-img" src="{main}" />
       <svg
        class="previous"
        on:click="{previous}"
        width="55"
        height="55"
        viewBox="-16 0 50 18"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M11 1 3 9l8 8"
          stroke-width="2"
          fill-rule="evenodd"></path></svg
      >
      <svg
        width="55"
        class="next"
        on:click="{next}"
        height="55"
        viewBox="-22 0 50 18"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="m2 1 8 8-8 8"
          stroke-width="2"
          fill-rule="evenodd"></path></svg
      >
    </div>
    <div class="thumbnail">
      <section class="sec"><img
        src="public\image-product-1-thumbnail.jpg"
        id="opp"
        class="0"
        on:click="{view}"
        alt=""
      /></section>
      <section class="sec"><img
        src="public\image-product-2-thumbnail.jpg"
        id="opp"
        class="1"
        on:click="{view}"
        alt=""
      /></section>
      <section class="sec"><img
        src="public\image-product-3-thumbnail.jpg"
        id="opp"
        class="2"
        on:click="{view}"
        alt=""
      /></section>
      <section class="sec">
      <img
        src="public\image-product-4-thumbnail.jpg"
        id="opp"
        class="3"
        on:click="{view}"
        alt=""
      />
      </section>
      
    </div>
  </div>
</main>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.829);
    z-index: 10;
  }
  main {
    position: absolute;
    left: 40%;
    height: 680px;
    width: 520px;
    border-radius: 5px;
    z-index: 100;
    top: -1px;
    margin: 50px 0 0 0;
    cursor: pointer;
  }
  .pic {
    display: flex;
    justify-content: space-evenly;
  }
  .main-img {
    height: 470px;
    width: 470px;
    margin: 0 40px 10px 40px;
    border-radius: 15px;
    position: relative;
  }
  .thumbnail {
    display: flex;
    height: 100px;
    width: 90px;
    margin: 10px 0 0 55px;
  }
  section{
    width: 89px;
    height: 87px;
    margin: 8px 5px 5px 10px;
  }
  section img {
    border-radius: 10px;
    opacity: 1;
    width: 90px;
  }
  section:hover{
    opacity: 0.5;
  }
  .previous {
    position: absolute;
    background: whitesmoke;
    border-radius: 50%;
    fill: none;
    top: 300px;
    left: 1px;
    stroke:#1D2026;
  }
  .next {
    position: absolute;
    top: 300px;
    right: 1px;
    fill: none;
    background: whitesmoke;
    border-radius: 50%;
    stroke: #1D2026;
  }
  .close {
    margin: 0 00 20px 460px;
    fill: hsl(0, 0%, 100%);
    top: 30px;
  }
  .previous:hover{
    stroke: hsl(26, 100%, 55%);
  }
  .next:hover{
    stroke: hsl(26, 100%, 55%);
  }
  .close:hover{
    fill: hsl(26, 100%, 55%);
  }
  @media screen and (max-width: 1012px) {
    main{
      display: none;
    }
    .backdrop{
      display: none;
    }
  }
</style>
