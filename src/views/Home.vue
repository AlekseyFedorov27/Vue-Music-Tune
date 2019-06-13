<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

          <v-toolbar-title>Music Tunes</v-toolbar-title>

          <v-spacer></v-spacer>

            <input   class="inpSearch" type="text" v-model="SEARCH">
          <v-btn icon @click="searchMusic">
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>

          <list :items="items"/>


        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import list from '@/components/list'

export default {
  components: { list },
  data() {
    return{
      SEARCH: '',
      showInputSearch: true,
    }
  },
  methods: {
    searchMusic(){
      this.$store.dispatch('searchMusic', this.SEARCH)
    }
  },
  computed: {
    items(){
      return this.$store.getters.getPlayList
    }
  },
}
</script>
<style lang="scss" scoped>
.inpSearch{
  background-color: #fff;
  height: 30px;
  border-radius: 20px;
  color: #000;
  width: 150px;
  padding-left: 15px;
}
</style>

