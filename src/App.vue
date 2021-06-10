<template>
  <div id="app">
    <h4 @click="modifyAppData2" ref="h4ref">btn {{appData2}} </h4>
    <p class="text-lg text-grey-500 border-solid border-red-500 border-2 max-w-md mx-auto hover:border-green-300 cursor-help select-none py-2 leading-8 tracking-wide bg-blue-100 hover:bg-green-300">
      Few composition api features like <b>Provide/inject computed and lifecycle hooks </b>are already in app super component
    </p>
    <HelloWorld />
    <div class="nav1">
      <button
      :class="renderModule === 'ref' ? 'btn activee' : 'btn'"
      @click="renderModule = 'ref'"
    >
      Ref
    </button>
    <button
      :class="renderModule === 'reactive' ? 'btn activee' : 'btn'"
      @click="renderModule = 'reactive'"
    >
      Reactive
    </button>
    <button
      :class="renderModule === 'toRefs' ? 'btn activee' : 'btn'"
      @click="renderModule = 'toRefs'"
    > toRefs
    </button>
    </div>
    <div class="nav2"> <button
      :class="renderModule === 'Watchers' ? 'btn activee' : 'btn'"
      @click="renderModule = 'Watchers'"
    > Watchers
    </button>
    <button
      :class="renderModule === 'propsAndEvents' ? 'btn activee' : 'btn'"
      @click="renderModule = 'propsAndEvents'"
    > propsAndEvents
    </button>
    <button
      :class="renderModule === 'codeReusability' ? 'btn activee' : 'btn'"
      @click="renderModule = 'codeReusability'"
    > codeReusability
    </button>
    </div>
    
   
    <CompositionAPIref v-if="renderModule === 'ref'" />
    <CompositionAPI02 v-if="renderModule === 'reactive'" />
    <CompositionAPI03 v-if="renderModule === 'toRefs'"/>
    <CompositionAPI04 v-if="renderModule === 'Watchers'"/>
    <CompositionAPI05 v-if="renderModule === 'propsAndEvents'"/>
    <CompositionAPI06 v-if="renderModule === 'codeReusability'"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CompositionAPIref from "./components/compposition-api.vue";
import CompositionAPI02 from "./components/composition-api02.vue";
import CompositionAPI03 from "./components/composition-api03.vue";
import CompositionAPI04 from "./components/composition-api04.vue";
import CompositionAPI05 from "./components/composition-api05.vue";
import CompositionAPI06 from "./components/composition-api06.vue";
import {ref,provide,computed, onMounted} from 'vue'

export default {
  name: "App",
  setup(){
    //provided to CompositionAPI3.1 component
    const h4ref = ref(null)
const appData2=ref(1212)
function modifyAppData2()
{
  appData2.value++
}
provide('providedVar',computed(()=>appData2.value))
provide('proVidedVarModifier',modifyAppData2)
onMounted(()=>{console.log("App has been mounted",h4ref.value)})
return {
  appData2,modifyAppData2,h4ref
}
  },
  components: {
    HelloWorld,
    CompositionAPIref,
    CompositionAPI02,
    CompositionAPI03,
    CompositionAPI04,
    CompositionAPI05,
    CompositionAPI06
  },
  data() {
    return {
      renderModule: "ref",
      appData:ref(1111)
    };
  },
  methods:{
   modifyAppData(){
    console.log("method modifyAppData has  been calledw")
    this.appData.value++
   }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  padding: 0.5em 2.5em;
  font-size: 1rem;
  border: red 2px solid;
  font-weight: 550;
}
.btn-lowtier {
  padding: 0.3em 1.5em;
  font-size: 1rem;
  border: hsl(212, 100%, 50%) 1px solid;
  font-weight: 550;
  border-radius: 18px;
  background-color:lawngreen;
  transition: all 0.15s ease;
}
.btn-lowtier:hover{
  background-color:rgb(255, 210, 7)
}
.btn-lowtier:active{
  background-color:rgb(106, 202, 9)
}

.activee {
  border: green 5px solid;
}
</style>
