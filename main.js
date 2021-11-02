const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
  },
  template:
    /*html*/
    `<h1>{{counter}}</h1>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
    `,
});
