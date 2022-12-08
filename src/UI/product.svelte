<script>
  // @ts-nocheck
  import Slider from "./Slider.svelte";
  import { createEventDispatcher } from "svelte";
  let dispach = createEventDispatcher();
  let displayer = false;
  let containerid=0;
  let displayer2 = false;
  export const images = [
    {
      id: 0,
      imgurl: "./public/image-product-1.jpg",
    },
    {
      id: 1,
      imgurl: "./public/image-product-2.jpg",
    },
    {
      id: 2,
      imgurl: "./public/image-product-3.jpg",
    },
    {
      id: 3,
      imgurl: "./public/image-product-4.jpg",
    },
  ];

  let main = images[0].imgurl;
  export let starter;
  let currentpic;
  function view(event) {
    let current = event.target.className.charAt(0);
    let sec = document.querySelectorAll("section img");
    sec.forEach((element) => {
      element.id = "child2";
      element.parentNode.id = "";
    });
    event.target.parentNode.id = "parent";
    event.target.id = "child";
    main = images[current].imgurl;
    containerid=images[current].id;
    currentpic = event.target.className.charAt(0);
  }

  function quantity(event) {
    if (event.target.id === "minus" && starter > 0) {
      starter--;
    }
    if (event.target.id === "plus") {
      starter++;
    }
  }
  function backdrop() {
    displayer = false;
  }

  function next(){
     console.log(Object(main).charAt(27)-1)
     let jump = Object(main).charAt(27)-1;
     if(jump>images.length-2){
      jump=0;
      main=images[jump].imgurl
       containerid=images[jump].id;
     }
     else{
        main=images[jump+1].imgurl
         containerid=images[jump+1].id;
     }
  }
  function previous(){
     let jump = Object(main).charAt(27)-1;
     if(jump===0){
      jump=images.length;
      main=images[jump-1].imgurl
       containerid=images[jump-1].id;
     }
     else{
        main=images[jump-1].imgurl;
         containerid=images[jump-1].id;
     }}
</script>

<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="pictures">
    
    <img
      class="main-img"
      src="{main}"
      alt=""
      on:click={() => {displayer=true}}>
    <div class="slide">
    <svg
        class="prev"
        width="55"
        height="55"
        on:click="{previous}"
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
        height="55"
        on:click="{next}"
        viewBox="-22 0 50 18"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="m2 1 8 8-8 8"
          stroke-width="2"
          fill-rule="evenodd"></path></svg
      >
    </div>
    
    <div class="thumbnail">
      <section class="sec">
        <img
          src="public\image-product-1-thumbnail.jpg"
          id="opp"
          class="0"
          on:click="{view}"
          alt=""
        />
      </section>
      <section class="sec">
        <img
          src="public\image-product-2-thumbnail.jpg"
          id="opp"
          class="1"
          on:click="{view}"
          alt=""
        />
      </section>
      <section class="sec">
        <img
          src="public\image-product-3-thumbnail.jpg"
          id="opp"
          class="2"
          on:click="{view}"
          alt=""
        />
      </section>
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
  <div class="discription">
    <div class="container">
      <p class="company">SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div class="price">
        <h2>$125.00 <span>50%</span></h2>
        <p class="del">$250.00</p>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="operation">
        <div class="adj">
          <img
            src="public\icon-minus.svg"
            id="minus"
            on:click="{() => {
              dispach('minus');
            }}"
            alt=""
          />
          <h3>{starter}</h3>
          <img
            src="public\icon-plus.svg"
            id="plus"
            on:click="{() => {
              dispach('plus');
            }}"
            alt=""
          />
        </div>
        <button
          on:click="{() => {
            dispach('display');
          }}"
          ><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill-rule="nonzero"></path></svg
          >
          Add to cart</button
        >
      </div>
    </div>
  </div>
</main>
{#if displayer}
  <Slider main="{main}" on:cancle="{backdrop}" currentid={containerid}/>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap");
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-family: "Kumbh Sans", sans-serif;
    cursor: pointer;
  }
  .pictures {
    height: 580px;
    width: 500px;
    margin: 0 50px 0 0;
  }
  .main-img {
    height: 450px;
    width: 420px;
    margin: 0 40px 10px 40px;
    border-radius: 15px;
  }
  .thumbnail {
    display: flex;
    height: 100px;
    width: 100px;
    margin-left: 30px;
  }
  section {
    width: 95px;
    margin: 0 0 0 12px;
  }
  section img {
    width: 95px;
    opacity: 1;
    border-radius: 10px;
  }
  section:hover {
    opacity: 0.5;
  }
  .prev,.next{
    display: none;
  }
  .discription {
    height: 600px;
    width: 500px;
    margin: 0 50px 0 0;
  }
  .discription .company {
    color: hsl(26, 100%, 55%);
    font-weight: 700;
  }
  .discription p {
    font-family: "Kumbh Sans", sans-serif;
    font-size: 16px;
    color: hsl(219, 9%, 45%);
  }
  .discription h1 {
    font-size: 40px;
    display: flex;
  }
  .discription h2 span {
    color: hsl(26, 100%, 55%);
    font-size: 20px;
    background: hsl(25, 100%, 94%);
    padding: 5px;
    margin: 10px;
    border-radius: 8px;
  }
  .container {
    margin: 80px 20px 0 20px;
    font-family: "Kumbh Sans", sans-serif;
  }
  .del {
    text-decoration: line-through;
    position: relative;
    top: -20px;
    font-weight: 700;
  }
  .operation {
    display: flex;
    justify-content: space-evenly;
  }
  button {
    height: 50px;
    width: 300px;
    border-radius: 10px;
    border: none;
    background: hsl(26, 100%, 55%);
    font-size: 20px;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    font-weight: 700;
    text-align: center;
  }
  button:hover {
    opacity: 0.5;
  }
  button svg {
    fill: hsl(0, 0%, 100%);
    font-weight: 1000;
  }
  .adj {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: hsl(223, 64%, 98%);
    height: 50px;
    width: 120px;
  }
  @media screen and (max-width: 1012px) {
    main {
      display: block;
      font-family: "Kumbh Sans", sans-serif;
      cursor: pointer;
      width: 100%;
      height: 900px;
      margin: 0 0 0 20px;
    }
    .thumbnail {
      display: none;
    }
    .pictures {
      height: 400px;
      width: 100%;
      margin: 0;
    }
    .main-img {
      width: 100%;
      height: 100%;
      margin-left: 0;
      border-radius: 0;
    }
    .discription {
      margin: 0;
      width: 100%;
    }
    .container {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    .discription h1 {
      font-size: 25px;
      display: flex;
    }
    .price {
      display: flex;
      justify-content: space-between;
    }
    .del {
      top: 0;
      margin-top: 20px;
    }
    .operation {
      text-align: center;
      position: relative;
      display: block;
      width: 100%;
    }
    .operation .adj {
      justify-content: space-between;
      padding: 10px 20px;
      width: 80%;
      margin: 5%;
    }
    button {
      height: 50px;
      width: 70%;
      margin: 20px 10px;
    }
    .slide{
      display: flex;
      justify-content: space-between;
      margin: 30px;
    }
    .prev {
    display: flex;
    position: relative;
    background: whitesmoke;
    border-radius: 50%;
    fill: none;
    top: -250px;
    right: 1;
    stroke:#1D2026;
  }
  .next {
    display: flex;
    position: relative;
    top: -250px;
    fill: none;
    background: whitesmoke;
    border-radius: 50%;
    stroke: #1D2026;
  }
  }
</style>
