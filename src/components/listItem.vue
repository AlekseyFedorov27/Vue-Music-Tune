<template>
  <div>
    <v-divider
      :inset="item.inset"
    ></v-divider>


    <v-list-tile
      avatar
      @click=""
    >
      <v-list-tile-avatar>
        <img class="avatar" :src="item.artworkUrl100">
      </v-list-tile-avatar>

      <v-list-tile-content>

        <v-list-tile-title v-html="item.artistName"></v-list-tile-title>
        <v-list-tile-sub-title v-html="item.trackName"></v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>
<script>
export default {
  props:{
    item:{
      type: Object,
      required: true
    }
  }
}
</script>
 <style lang="scss">
 .avatar{
   width: 60px!important;
   height: auto!important;
 }
a{
   text-decoration: none!important;
   color: #000;
 }
 </style>