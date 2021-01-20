<template>
<div>
<div
  class=" bg-primary text-white text-center q-mt-xl q-pa-md"
  style=" width:175px; border-radius: 5px 5px 0 0;"
>
          <!-- <q-icon name="search" class="q-mx-sm q-mt-xs"/> -->
            <p class="text-body1 text-weight-bold">Resturant Search</p> 
        </div>
<div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md row bg-primary q-pb-md " style="border-radius: 5px" >
      <q-input
        filled
        clearable
        v-model="name"
        label="Cuisine"
        lazy-rules
        class="col-4 "
        label-color="white"
        color="white"
      >
      <template v-slot:prepend>
          <q-icon name="mail" class="text-white"/>
        </template>

      </q-input>
<!-- :rules="[val => (val && val.length > 0) || 'Please type something']" -->

      <q-input
      filled
      clearable
      v-model="name"
      label="Location"
      label-color="white"
      color="white"
      lazy-rules

      class="col"
      >
      <template v-slot:prepend>
          <q-icon name="mail" class="text-white" />
        </template>

      </q-input>


      <div>
<q-btn
  color="primary"
  size="xl"
  icon="search"
  style="border-radius:5px"
  class="q-mr-lg "
  
/>


      </div>
    </q-form>

        </div>
</div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
     showing:null, onSubmit: null, onReset: null, name:null, age:null, accept:null,


  }
};
</script>
