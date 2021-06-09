<template>
  <div id="composition4">
    <hr />
    <h2>composition api 04: Watchers and Computed</h2>
    <div id="computed">
      <b>first name</b>:{{ fname }} <br />
      <b>last name</b>:{{ lname }} <br />
      <b>computed full name</b>:{{ fullname }}
    </div>
    <div>
      <h3>PP calculator with watchers and ref :)</h3>
      <input type="text" v-model="PPsize" placeholder="enter PP Size" /><span
        v-if="PPsize.length !== 0"
        :style="{ color: PPsizeTextDefault }"
        >watcher</span
      ><br /><input
        type="text"
        v-model="PPcolor"
        placeholder="enter PP color"
      /><span v-if="PPcolor.length !== 0" :style="{ color: PPcolorTextDefault }"
        >watcher</span
      >
      <br />
      <strong v-if="PPsize.length !== 0 && PPcolor.length !== 0"
        >My PP is {{ PPsize }} and its {{ PPcolor }}</strong
      >
    </div>

    <div>
      <h3>Hero' Crush with watchers and reactive</h3>
      <input
        type="text"
        v-model="crushFirsname"
        placeholder="enter crushFirsname"
      /><span v-if="crushFirsname.length !== 0" :style="{ backgroundColor: crushFirstNameBgColor }"
        >watcher</span
      >
      <br /><input
        type="text"
        v-model="crushLasName"
        placeholder="enter crushLasName"
      /><span v-if="crushLasName.length !== 0" :style="{ backgroundColor: crushLastNameBgColor }"
        >watcher</span>
      <br />
      <strong v-if="crushFirsname.length !== 0 && crushLasName.length !== 0"
        >Hero's Crush is {{ crushFirsname }} - {{ crushLasName }} and she lives
        in {{ Crushcity }}</strong
      >
    </div>
    <article class="note">
        For watching objects we must pass callback function  which returns a deep copy of object... only then we would be able to access old value
        (in options api we watch computed deep copy of objectModel in data function)
    </article>
  </div>
</template>

<script>
import { ref, computed, watch, toRefs, reactive } from "vue";
export default {
  name: "CompositionAPI04",
  setup() {
    const fname = ref("Peter");
    const lname = ref("Parker");
    const fullname = computed(() => {
      return `${fname.value} ${lname.value}`;
    });
    const Crush = reactive({
      Crushcity: "NewYork",
      crushname: { crushFirsname: "", crushLasName: "" },
    });
    const PPsize = ref("");
    const PPcolor = ref("");
    const PPcolorTextDefault = ref("black");
    const PPsizeTextDefault = ref("black");
    const crushFirstNameBgColor = ref("white");
    const crushLastNameBgColor = ref("white");
    watch(
      [PPsize, PPcolor],
      (nv, ov) => {
        console.log(ov[0], ov[1], nv[0], nv[1], "composoition ref watchers");
        if (nv[0].length % 2 === 0) {
          PPsizeTextDefault.value = "red";
        } else {
          PPsizeTextDefault.value = "blue";
        }
        if (nv[1].length % 2 === 0) {
          PPcolorTextDefault.value = "red";
        } else {
          PPcolorTextDefault.value = "blue";
        }
      },
      { immediate: true }
    );
    //in watch we used a callback function which returns a deep copy of crush object
    watch(
      () => {
        return { ...Crush, crushname: { ...Crush.crushname } };
      },
      (nv, ov) => {
        console.log(ov, nv);
        if (nv.crushname.crushFirsname.length % 2 === 0) {
          crushFirstNameBgColor.value = "yellow";
        } else {
          crushFirstNameBgColor.value = "lightgreen";
        }
        if (nv.crushname.crushLasName.length % 2 === 0) {
          crushLastNameBgColor.value = "yellow";
        } else {
          crushLastNameBgColor.value = "lightgreen";
        }
      },
      { deep: true }
    );
    return {
      fname,
      lname,
      fullname,
      PPsize,
      PPcolor,
      PPcolorTextDefault,
      PPsizeTextDefault,
      ...toRefs(Crush.crushname),
      ...toRefs(Crush),
      crushFirstNameBgColor,
      crushLastNameBgColor,
    };
  },
};
</script>


