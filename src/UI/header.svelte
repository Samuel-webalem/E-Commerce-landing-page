<script>
  import { loop_guard } from "svelte/internal";
import Cart from "./cart.svelte";
  import Hamburger from "./hamburger.svelte";
  export let displayer2;
  export let quantitys;
  export let incriment;
  let displayer = false;
  let piner = true;
  let price = 127;
  let catagory = false;
  function backdrop() {
    displayer = false;
  }
  function displayercatagory(){
    if(!catagory){
      catagory=true
    }
    else{
      catagory=false;
    }
    console.log('dis')
  }
</script>

<header>
  <div class="left">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg width="16" class="menu" height="15" xmlns="http://www.w3.org/2000/svg"
      on:click="{displayercatagory}"><path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#69707D"
        fill-rule="evenodd"></path></svg
    >
    <div class="logo">
      <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
          fill="#1D2026"
          fill-rule="nonzero"></path></svg
      >
    </div>
    <div class="catagory" id="#catagory">
      <h2>Collection</h2>
      <h2>Men</h2>
      <h2>Women</h2>
      <h2>About</h2>
      <h2>Contact</h2>
    </div>
  </div>

  <div class="profile">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg
      width="22"
      class="cart"
      on:click="{() => {
        piner = false;
        displayer = true;
      }}"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill-rule="nonzero"></path></svg
    >
    {#if displayer2 && piner}
      <p class="pin">{incriment}</p>
    {/if}
    <img src="./public\image-avatar.png" alt="" class="avatar" />
  </div>
</header>

{#if displayer}
  <Cart
    on:cancle="{backdrop}"
    quantitys="{quantitys}"
    price="{price}"
    displayer="{displayer2}"
  />
{/if}
{#if catagory}
  <Hamburger on:close={displayercatagory}><div>
      <h2>Collection</h2>
      <h2>Men</h2>
      <h2>Women</h2>
      <h2>About</h2>
      <h2>Contact</h2>
    </div></Hamburger>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap");
  header {
    display: flex;
    justify-content: space-between;
    margin: 30px 200px 0 200px;
    font-family: "Kumbh Sans", sans-serif;
    border-bottom: 2px inset hsl(220, 14%, 75%);
    padding: 0 0 10px 0;
    height: 80px;
  }

  .catagory {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
  }
  .left {
    display: flex;
  }
  .catagory h2 {
    font-size: 20px;
    font-weight: 400;
    margin: 5%;
    color: hsl(220, 14%, 75%);
    padding: 0 0 72px 0;
    cursor: pointer;
  }
  .logo {
    margin: 15px;
  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    height: 50px;
    margin: 30px;
  }
  .cart {
    position: relative;
    margin: 20px 0 20px 0;
    fill: #69707d;
  }
  .cart:hover {
    fill: black;
  }
  .avatar:hover {
    border: 3px solid hsl(26, 100%, 55%);
    border-radius: 50%;
    height: 44px;
  }
  .catagory h2:hover {
    font-weight: 1000;
    color: hsl(0, 0%, 0%);
    border-bottom: 5px solid hsl(26, 100%, 55%);
  }
  .pin {
    position: fixed;
    border-radius: 30%;
    height: 15px;
    width: 22px;
    background: hsl(26, 100%, 55%);
    text-align: center;
    color: white;
    font-size: 12px;
     margin: 5px 85px 20px 0;
  }
  .menu {
    display: none;
  }

  @media screen and (max-width: 1012px) {
    .menu {
      display: block;
      margin: 20px;
    }

    header {
      display: flex;
      justify-content: space-between;
      font-family: "Kumbh Sans", sans-serif;
      height: 30px;
      border: none;
      margin: 0;
      width: 100%;
    }
    .cart {
      position: relative;
      margin: 0 0 0 0;
      fill: #69707d;
    }
    .profile {
      display: flex;
      justify-content: right;
      margin:25px 0;
    }
    .avatar {
      height: 40px;
      margin: 10px 10px 0 0;
    }
    .cart {
      position: relative;
      margin: 20px 0 20px 0;
      fill: #69707d;
    }
    .pin {
      position: absolute;
      right: -20px;
  }
  .catagory{
    display: none;
  }
  }
   @media screen and (max-width: 1376px){
     header {
    margin:10px 0 20px 0;
    padding: 0 0 10px 0;
  }
 .pin {
     margin: 5px 100px 20px 0;
  }
  .avatar{
    margin-left:  40px;
  }
 }

</style>
