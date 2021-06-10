<template>
  <div class="sub-component">
    <h4>subComponent</h4>
    <h5>
      props are
      <span class="highlight"
        >{{ propfname }},{{ lname }},{{ city }},{{ nearbyOcean }} ...{{fullName}}</span
      >

    </h5>
    <div class="buttons">
      <button class="btn-lowtier" @click="handleOptionsApiButton">Button with regular options emit</button> |
      <button  class="btn-lowtier" @click="handleCompositionAPIButton">Button with <span class="highlight">Composition APi's</span> Context</button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "CompositionAPI501",
  props:['fname','lname','city','nearbyOcean'],
  setup(props,context) {
 console.log(props)
 const fullName = computed(()=>`${props.fname}  ${props.lname   }`)
 const propfname = computed(()=>props.fname)
//  const proplname = props.lname

function handleCompositionAPIButton(e){
const dataObj = {
  event:e,
  numData:1234,
  strData:"Data from compostion API"
}
context.emit("compositionAPIbuttonClick",dataObj)
return

}
 return {
     fullName,propfname,handleCompositionAPIButton
 }
  },
  methods:{
    handleOptionsApiButton(e){
      const eventObjWithSomeData = {
        event:e,
         numData:1122,
         strData:'Data From Options API'
      }
      this.$emit("optionsApiButtonClick",eventObjWithSomeData)
    }
  }

 
};
</script>
<style>
.highlight {
  color: red;
  letter-spacing: 2px;
}
.sub-component{
  border:3px dashed pink;
  max-width:750px;
  margin:20px auto;
  padding:2em 0;
  background-color: rgb(241, 241, 241);
}
</style>