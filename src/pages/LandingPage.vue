<template>
  <q-page class=""  >
  


<div class="">
    <q-parallax :height="500" :speed="0.5">
      <template v-slot:media>
        <img src="https://images.pexels.com/photos/903376/pexels-photo-903376.jpeg">
      </template>


      <div style="width:75vw">
        <NavigationBar />  
        <SearchBar />
      </div>

    </q-parallax>

    <div class="justify-center" style="">
      <div class="flex flex-center" style="width:25vw">
        <p class="text-h3 q-mt-xl"> Featured</p>
      </div>

<div class="q-mt-md full-width row wrap justify-center items-center content-center q-gutter-lg">
  <CardFeatured v-for="(item, index) in items" :key="index" class="col-3"/>

</div>

      
<div class="text-center q-ma-xl">
  <q-btn color="primary" label="More Reviews" />
</div>


    </div>
    
  </div>




  </q-page>
</template>
<style lang="css">
  .backgroundColor{
    background-color: Purple;
    width: 175px;
    color:White;
    padding: 10px;
    border-radius: 10px 10px 0px 0px;
    margin-top:15px;
    text-align:center;
    padding-bottom:1px;
  }
</style>
<script>
import NavigationBar from 'components/NavigationBar.vue';
import SearchBar from 'components/SearchBar.vue';
import CardFeatured from 'components/CardFeatured.vue';

const itemsList = [
  {stars: 1},
  {stars: 1},
  {stars: 1},
  {stars: 1},
  {stars: 1},



]

export default {
  name: "LandingPage",
  components: {
    NavigationBar,
    SearchBar,
    CardFeatured
  },
  data() {
    return {
      onReset: null,
      onSubmit: null,
      age: null,
      accept: null,
      input1: null,
      items: itemsList


    }
  }
};
</script>

    