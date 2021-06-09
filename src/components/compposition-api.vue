<template>
    <div id="composition">
        <hr ref="myline">
        <h2 ref="refElement">Compositon API : ref function</h2>
        <strong>options API data:</strong>:{{data1}} <br/>
        <i><b>composition api data: </b></i>{{c_data1}} <br>
        <b>note:</b><article class="note">
            This blok's composition api data uses ref function <b><i>(not to be confused with ref attribute to refer dom elements)</i></b> found in vue module,
                which takes data as its parameter and returns a mutable object eg:someObj... and value can be accessed by someObj.value. Howerver inside template you can directly write {\{someObj}} and it will render value property
        </article> 
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'CompositionAPIref',
    data:()=>{
        return {
            data1:1234
        }
    },
    mounted(){
        console.log("mounted compisiton blok",this.$refs)
        
    },
    setup(){
        const c_data1 = ref(5678)
        return {
            c_data1
        }
    }}</script>

    <style>
    .note{
        max-width:500px;
        margin:0 auto;
        line-height: 2em;
        letter-spacing: 1px;
    }</style>