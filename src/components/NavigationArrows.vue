<template>
                        <div class="parallax-slider-navigation">
        <div class="nav-indicator prevArrow" id='prevArrow' @click='() => null'>
          <div class='nav-arrows' style="display: flex">
            <p :style="ArrowTxt" :class='{hideContent: toggle}'>{{$t('back')}}</p>
            <hr
            :style='ArrowLine' 
              style="
                color: white;
                width: 35px;
                height: 2px;
                z-index: 55;
                margin-left: 15px;
              " :class='{hideContent: toggle}'
            />
          </div>
        </div>
        <div class="nav-indicator nextArrow" id='nextArrow' @click='()=>null'
         :class='{hideContent: toggleNext}'>
          <div style="display: flex">
            <hr
              style="
                background-color: white;
                color: white;
                width: 35px;
                height: 2px;
                z-index: 55;
                margin-right: 15px;
              "
            />
            
            <p>{{$t('next')}}</p>
          </div>
        </div>
      </div>
     
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    props: ['color', 'lineColor', 'toggle', 'toggleNext'],
    data(){
      return {
        stateNAV: 0
      }
    },
    mounted(){
      // console.log(this.getCartQuantity());
    },
    computed: {
      ArrowTxt () {
        return 'color: ' + this.color;
      },
      ArrowLine() {
          return 'background-color: ' + this.lineColor;
      },
       ...mapGetters(['getNavbarState']),
    },
    methods: {
      ...mapActions(['goNext','goBack']),
    },
}
</script>

<style>
.hideContent {
  display:none;
}
.parallax-slider-navigation {
  position: absolute;
  top:40%;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}
.nextArrow {
   margin-right: 20px;
}
.prevArrow {
  margin-left: 20px;
}
.nav-indicator {
  color: white;
  font-family: arrowFONT;
  font-size: 25px;
  /* height: 160px;
  width: 140px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #6b77f6;
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%); */
}
/* @media all and(max-width: 1249px) {
  .nav-arrows {
      margin-top:20%;
  }
}
@media all and (min-width: 1440px) {
.nav-arrows {
    margin-top:40%;
    }
}
@media all and (min-width: 1640px) {
  .nav-arrows {
      margin-top:45%;
    }
}
@media all and (min-width: 1740px) {
  .nav-arrows {
    margin-top:50%;
    }
} */
</style>