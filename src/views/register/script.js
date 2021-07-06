export default {
  name: "Register",
  data() {
    return {
      dataForm: {
        email: "",
      },
    };
  },
  methods: {
    routePageLogin() {
      this.$router.push("login");
    },
  },
};
