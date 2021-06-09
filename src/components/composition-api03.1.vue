<template>
    <div>
        <h4 :style="{color:'purple'}">{{fname}} {{lname}} <span :style="{color:'blue'}">uses toRefs</span></h4>
        <button @click="proVidedVarModifier">btn {{providedVar}}</button>
    </div>
</template>

<script>
   import { reactive,toRefs,inject} from 'vue'
export default {
    name:'CompositionAPI031',
    setup(){
        const providedVar = inject('providedVar')
        const proVidedVarModifier = inject('proVidedVarModifier')

    const man3 = reactive({
        fname:'naruto',
        lname:'datteBayo'
    })
    setTimeout(()=>{
        man3.fname="Sasuke"
        man3.lname="Uchiha"
    },3000)
    return{ ...toRefs(man3),providedVar,proVidedVarModifier}

    }
    // inject:['providedVar','proVidedVarModifier']
}


</script>