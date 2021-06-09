<template>
  <div id="composition03">
    <hr />
    <h2>compositon api03: toRefs</h2>
    <h3 :style="{ color: 'orange' }">
      changing value in <span class="enlg"> {{ timer }}</span>
    </h3>
    <h4>hello {{ fname }} {{ lname }} </h4>
    <h4>hello {{ man2.fname1 }} {{ man2.lname1 }} :</h4>
    <CompositionAPI031/>
   <article class='note'><b  v-if="iftimeOut">name doesn change in first because we passed individual properties.. <br> changes in second because vue knows that it has to react to changes in state object <br> chnges in third one becuse we solved the problem of first one and second one using toRefs. it preserves the reactivity of individual properties</b></article> 

  </div>
</template>

<script>
import CompositionAPI031 from './composition-api03.1.vue'
import { ref, reactive } from "vue";
export default {
  name: "CompositionAPI03",
  setup() {
      const iftimeOut = ref(false)
    const timer = ref(3);
    const man = reactive({
      fname: "Bruce",
      lname: "wayne",
    });
    const man2 = reactive({
        fname1:'peter',
        lname1:'parker'
    })
    setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        return;
      }
    }, 1000);
    setTimeout(()=>{
        iftimeOut.value=true
        man.fname='Clark'
        man.lname='Kent'
        man2.fname1='Eddie'
        man2['lname1']='Brock'

    },3000)

    // }
    return {
      fname: man.fname,
      lname: man.lname,
      timer,
      man2,
      iftimeOut
      
    };
  },
  components:{
      CompositionAPI031
  }
};
</script>

<style>
.enlg {
  transform: scale(1.5) translateX(20px);
  color: green;
  font-size: 2rem;
}
</style>