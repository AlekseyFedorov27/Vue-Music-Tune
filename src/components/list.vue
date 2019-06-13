<template>
  <div v-if="items">
      <div v-for="(item, index) in items" :key="index">

      <router-link :to="/play/+item.artistId" class="link">
        <listItem :item='item'/>
      </router-link>

      </div>
  </div>

</template>
 <script>
 import listItem from '@/components/listItem'

 export default {
   components: { listItem },
   props:{
      items:{
          type:Array,
          required: true
      }
   },


 }
 </script>

