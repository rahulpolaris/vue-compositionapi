<template>
  <div id="composition2">
    <hr />
    <h2>Composition API02: reactive function</h2>
    <h4>
     options api-> person:= {{ o_firstName }} {{ o_lastName }} ,secret: {{ o_heroName }} <br>
     composition api with ref-> person2:= {{ c_firstName }} {{ c_lastName }} ,secret: {{ c_heroName }}
    </h4>
    <h5>{{refGreet}} -- this is ref</h5>
    <h5>{{reactiveGreet}}  -- is reactive </h5>
    <b>Note</b>
    <article class="note">
     reactive wrapper unlike ref... returns an object which can be accessed like a normal object. <b>Syntax:</b> <br><i> const someState=reactive({var1:'data1',var2:'data2'})</i>
     values can be accesed by.... someState.var1 <br><b>While in ref we would usually access value with with <i>var1.value</i>.. <br> also ref should be used for primitive values while reactive should be used for objects(values with related properties)</b>
    </article>
  </div>
</template>
<script>
import {ref, reactive} from 'vue'
export default {
  name: "CompostionAPI02",
  data: () => {
    return {
      o_firstName: "Bruce",
      o_lastName: "Wayne",
      o_heroName: "BatMan",
    };
  },
  setup(){
      const c_firstName= ref('Clark')
      const c_lastName= ref('Kent')
      const c_heroName= ref('SuperMan')
      // c_firstName.value = 'Diana'
      

     const state= reactive({
        r_firstName:'Princess',
        r_lastName:'Diana',
        r_heroName:'wonderWoman'
      })
      const refGreet = `hello ${c_heroName.value}`
      const reactiveGreet = `hello ${state.r_firstName} aka ${state.r_heroName}`
      return {
          c_firstName,c_lastName,c_heroName,refGreet,reactiveGreet
      }
  }
};
</script>