export default {
  data() {
    return {
      windowSize: {
        width: 0,
        height: 0,
      },
    };
  },
  methods: {
    updateWindowSize() {
      this.windowSize.width = window.innerWidth;
      this.windowSize.height = window.innerHeight;
    },
  },
  mounted() {
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowSize);
  },
};
