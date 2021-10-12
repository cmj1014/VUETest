module.exports.mixins1 = {
  data() {
    return {
      minxinOne: "minxinOne",

    };
  },
  mounted() {

    setTimeout(() => {
      console.log("minxin mounted")
    }, 100);
  },
  methods: {
    minxinAction() {
      console.log("minxinAction");

    }
  }
}