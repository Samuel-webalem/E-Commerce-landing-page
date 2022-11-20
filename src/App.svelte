<script>
  import Header from "./UI/header.svelte";
  import Product from "./UI/product.svelte";
  import Last from "./UI/last.svelte"
  let starter=1;
  let displayy= false
  let incriment;
  function minus(){
     if(starter>1){
       starter--;
     }
  }
  function plus(){
     starter++;
  }
  function display(){
    displayy=true;
    incriment=starter;
  }
</script>

<Header {incriment} quantitys={starter} displayer2={displayy}/>
<Product {starter} on:minus={minus} on:plus={plus} on:display={display}/>
<Last/>
  