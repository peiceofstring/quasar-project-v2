<template>

<div class=" row q-mt-lg justify-between">
       
<q-img src="https://i.imgur.com/fTzyJrw.png" width="150px" />

        


    <div class="">
<q-btn flat label="Login" />
          <q-btn outline label="Register"> 
            <q-tooltip v-model="showing" content-class="bg-primary">
              Leave a review!
            </q-tooltip>
          </q-btn>

</div>

      </div>



</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    showing:null
  }
};
</script>
