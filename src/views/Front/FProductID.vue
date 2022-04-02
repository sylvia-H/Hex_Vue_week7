<script>
export default {
  inject: ['AUTH_TOKEN'],
  mounted() {
    this.$http.defaults.headers.common.Authorization = this.AUTH_TOKEN;
  },
};
</script>
