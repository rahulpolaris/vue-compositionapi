<template>
  <div>
    <hr />
    <h2>CompositionAPI05: Props,Events</h2>
    <input type="text" v-model="fname" placeholder="first name prop" />
    <input type="text" v-model="lname" placeholder="last name prop" />

    <CompositionAPI501
      :city="city"
      :fname="fname"
      :lname="lname"
      :nearbyOcean="nearbyOcean"
      @optionsApiButtonClick="handleOptionsClick"
      @compositionAPIbuttonClick="handleCompositionClick"
    />
      <div class="eventsBox" v-if="eventDataa.length !== 0">
      <p>
       <b>Event Triggered:</b> {{ eventDataa }}
      </p>
    </div>
            <article class="note"><b>Props:</b> Props must be stated in props options if you need to access it through setup(composition api) and to make props reactive in setup u must get their values through computed function(not computed option) found in vue module</article>
<article class="note"><b>Events: </b>Event emits in composition api can be accessed through second parameter of setup function.. typically named 'Context' Context.emit('customEventName',customData/Obj).. which can be catched in parent component using methods from options api or regular functions in composition API... </article>

  </div>
</template>

<script>
import CompositionAPI501 from "./composition-api05.1";
import { ref } from "vue";
export default {
  name: "CompositionAPI05",
  data: function () {
    return {
      city: "newYork",
      nearbyOcean: "Atlantic",
      // eventDataa: "",
    };
  },
  components: { CompositionAPI501 },
  setup() {
    const fname = ref("rahul");
    const lname = ref("kumar");
    const  eventDataa= ref("");

    function handleCompositionClick(d){
      console.log("compositiob button clicked from parent",d)
      eventDataa.value = d.strData
    }
    return {
      fname,
      lname,
      handleCompositionClick,
      eventDataa
    };
  },
  emits: ["optionsApiButtonClick"],
  methods: {
    handleOptionsClick(obj) {
      console.log(obj);
      this.eventDataa = obj.strData;
    },
    //  handleCompositionClick(obj){
    //   this.eventDataa = obj.strData
    //   return
    // }
  },
};
</script>

<style>
@keyframes color-shift{
  from {
    color:red;
    border-color: magenta;
  }
  to{
    color:green;
        border-color: rgb(8, 109, 156);

  }
}

.eventsBox{
border:lightgreen solid 5px;
background-color: lightsalmon;
margin: 30px auto;
max-width: 700px;

}
.eventsBox b{
  animation-name: color-shift;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 0.3s;
}
</style>