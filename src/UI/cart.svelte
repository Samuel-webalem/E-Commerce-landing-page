<script>
  import { createEventDispatcher } from "svelte";
  const dispach = createEventDispatcher();
  export let displayer;
  export let price;
  export let quantitys;
  let totalprice = price * quantitys;
  console.log(displayer);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="backdrop"
  on:click="{() => {
    dispach('cancle');
  }}"
></div>
<main>
  <div class="head">
    <h3>Cart</h3>
  </div>
  {#if displayer}
    <div class="discription">
      <div class="disc2">
        <img src="public\image-product-1-thumbnail.jpg" alt="" />
        <div class="text">
          <h4>Fall Limited Edition Sneakers</h4>
          <p class="price">${price} x {quantitys} <strong>${totalprice}.00</strong></p>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="icon">
          <svg
            width="16"
            class="delete"
            on:click="{() => (displayer = false)}"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><defs
              ><path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"></path></defs
            ><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"></use></svg
          >
        </div>
      </div>
      <button on:click="{() => (displayer = false)}">Checkout</button>
    </div>
  {:else}
    <h4 class="empty">Your cart is empty</h4>
  {/if}
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap");
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  main {
    font-family: "Kumbh Sans", sans-serif;
    position: fixed;
    display: block;
    width: 400px;
    height: 240px;
    right: 0;
    top: 0;
    margin: 6% 5% 0 0;
    border-radius: 5px;
    border-radius: 10px;
    background: white;
    cursor: pointer;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }

  .head {
    position: absolute;
    border-bottom: 2px inset hsl(220, 14%, 75%);
    height: 50px;
    width: 100%;
    font-size: 20px;
  }
  .head h3 {
    width: 50%;
    margin: 10px;
  }
  .discription {
    position: relative;
    display: block;
    margin: 50px 0 0 0;
  }
  .discription img {
    width: 50px;
    height: 50px;
    margin: 20px 10px 0 5px;
    border-radius: 5px;
  }

  button {
    height: 50px;
    width: 80%;
    border-radius: 10px;
    border: none;
    background: hsl(26, 100%, 55%);
    font-size: 20px;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    font-weight: 500;
    margin: 20px 30px 0 30px;
  }
  .disc2 {
    font-family: "Kumbh Sans", sans-serif;
    display: flex;
    color: hsl(219, 9%, 45%);
    margin: 70px 30px 10px 30px;
  }
  .delete {
    margin: 30px 10px 10px 30px;
  }
  .price {
    position: absolute;
    top: 30px;
  }
  .text strong {
    color: black;
  }
  .empty {
    font-family: "Kumbh Sans", sans-serif;
    text-align: center;
    margin-top: 30%;
    color: hsl(220, 13%, 13%);
  }

    @media screen and (max-width: 1012px) {
    main {
      position: absolute;
    width: 400px;
    height: 240px;
    right: 0;
    top: 0;
    margin: 6% 5% 0 0;
    z-index: 1;
  }
    
  }
   @media screen and (max-width: 376px){
     main {
      position: fixed;
    width: 80%;
    height: 200px;
    margin:80px 55px;
    text-align: center;
    z-index: 1;
  }
  .price {
    position: relative;
    margin: 0;
    top:-13px;
  }
  
  .disc2 {
    font-family: "Kumbh Sans", sans-serif;
    display: flex;
    justify-content: space-evenly;
    color: hsl(219, 9%, 45%);
    margin: 50px 10px 10px 10px;
    font-size: 15px;
    text-align: left;
  }
  button{
    height: 30px;
    width: 200px;
    font-size: 19px;
    margin: 0 0 20px 0;
  }
   }
</style>
