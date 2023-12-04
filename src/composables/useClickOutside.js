export default {
  data() {
    return {
      clickOutside: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (!this.$el || this.$el.contains(event.target)) return;
      this.clickOutside = true;
    },
  },
};
