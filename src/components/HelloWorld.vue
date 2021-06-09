<template>
  <div id="HelloWorld">
    <h3 :style="{ color: 'red' }">
      Hello World {{ admin.name }} is {{ admin.age }} years old and lives at
      {{ admin.address.street }}
    </h3>
    <button :class="{ active: true }" @click="addAge" @mouseover="pushToArr">
      Increase</button
    ><button class="decrease" @mouseover="popArr" @click="minusAge">
      Decrease
    </button>
    <div id="array">
      <h4 :key="i" v-for="(a, i) in arrs">{{ a }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      admin: {
        name: "rahul",
        age: 26,
        address: {
          street: 2,
          city: "delhi",
        },
      },
     
      arrs: [0],
      count: 0,
    };
  },
  computed:{
 adminCopy : function(){
   return {...this.admin,address:{...this.admin.address}}
 }
  },
  methods: {
    addAge() {
      this.admin.age += 1;
      this.admin.address.street += Math.ceil(Math.random() * 5);
      this.count++;
      // console.log(e)
    },
    minusAge() {
      this.admin.age -= 1;
      this.admin.address.street -= Math.ceil(Math.random() * 5);
      //  console.log(e)
      this.count--;
    },
    pushToArr() {
      this.arrs.push(this.arrs[this.arrs.length - 1] + 1);
    },
    popArr() {
      this.arrs.pop();
    },
  },mounted(){
    console.log("this is admin copy", this.adminCopy)
  },
  watch: {
    arrs: {
      handler: function (val, old) {
        console.log(" aarr vupdated", val, old);
        if (val.length === 0) this.arrs.push(0);
      },
      deep: true,
    },
    count: {
      handler: function (v,ov) {
        console.log("count updted",v,ov);
      },
    },
    adminCopy: {
      handler: function (v, ov) {
        console.log("address updated", v, ov);
      },
      deep: true,
      // immediate:true
    }
  }
};
</script>