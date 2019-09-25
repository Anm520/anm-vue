<!--  -->
<template>
  <div class>11111qq1</div>
</template>

<script>
import { query } from '@/request/api.js';
export default {
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {
    // axios.get('/api/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb')
    //   .then(function (response) {
    //     // handle success

    //     console.log(response.data)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error)
    //   })
    // this.test();
    query({
        code: 'utf-8',
        q: '卫衣',
        callback: 'cb',
    })
      .then((response) => {
        // console.log('111');
        console.log(response);
        this.test();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {},
  watch: {},
  methods: {
test() {
  console.log('测试111');
},
  },
  components: {},
  beforeDestroy() { },
};
</script>
<style lang='scss' scoped>
</style>
