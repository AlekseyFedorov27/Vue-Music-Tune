<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="play.artworkUrl100"
          height="300px"
        >
          <v-layout
            column
            fill-height
          >
            <v-card-title>
              <router-link to="/">
                <v-btn dark icon>
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </router-link>
              <v-spacer></v-spacer>



              <!-- <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn> -->
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-2 pt-2 title">{{play.artistName}}</div>
              <div class="display-1 pl-2 pt-2 title">{{play.trackName}}</div>
            </v-card-title>
          </v-layout>
        </v-img>

          <vuetify-audio :file="play.previewUrl" :ended="audioFinish"></vuetify-audio>


      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import VuetifyAudio from 'vuetify-audio'

export default {
  data() {
    return {
      file: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/41/12/dc/4112dc6b-1a7e-bd15-bb7a-f162db7f3dd9/mzaf_5813346444924148658.plus.aac.p.m4a',
    };
  },
  components: { 'vuetify-audio': VuetifyAudio },
    data() {
    return {
      play: null
      // id:this.$route.params.id
    }
  },
  methods: {
      audioFinish () {
          // console.log('You see this means audio finish.');
      }
  },
  created () {
    let id=this.$route.params.id
    this.play=this.$store.getters.getPlay(id)
  },
}
</script>
<style lang="scss" scoped>
.title{
  background-color: rgba(77, 77, 77, 0.4);
  width: 100%;
}
.v-slider .v-slider--is-active{
  background-color: rgb(99, 99, 99)!important;
}
.v-slider__track__container{
  background-color: rgb(99, 99, 99)!important;
}
.theme--dark.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb {
  background-color: rgb(54, 129, 240)!important;
}
</style>

