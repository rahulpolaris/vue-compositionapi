
import {ref} from 'vue'

const usualCounter = ref(0)
function incUsualCounter(){
    usualCounter.value++
}

export {usualCounter,incUsualCounter}