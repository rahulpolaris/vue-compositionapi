<template>
    <div id="compositionapi06">
        <hr>
        <h2>CompositionAPI06: logic reusability-- mixins vs compositionAPI functional imports</h2>
        <div class='divide-modules'>
            <div class="mixinApproach Reusable-grid-child">
                <h3>Mixin Approach</h3>
                <h3>{{mixinCounter}}</h3>
                <button @click="incMixinCounter">+</button>
            </div>
            <div class="compositionApproach Reusable-grid-child">
                              <h3>composition APi's functional Approach</h3>
                <h3>{{usualCounter}}</h3>
                <button @click="incUsualCounter">+</button>
  
            </div>
        </div>
     
    </div>
</template>

<script>
import myMixin from './utils/mymixin'
import {usualCounter,incUsualCounter} from './utils/somesetup'
export default {
    name:'CompositionAPI06',
    mixins:[myMixin],
    setup(){
      return {
          usualCounter,incUsualCounter
      }
    }
    
}

</script>

<style>
.divide-modules{
    max-width:700px;
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 15px;
margin:5px auto;
text-align: center;
}
.Reusable-grid-child{
    background-color: rgb(248, 200, 182);
    padding:15px 10px;
}
</style>
