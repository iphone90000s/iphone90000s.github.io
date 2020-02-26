<template>
  <div class="footer">    
    <hr>
    <div class='text1'>{{title}}</div>
    <div class='text1'>{{contact}}</div>
    <div class='text2'>{{copywrite}}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      title: "",
      contact: "",
      copywrite: "",
      Datas: ""
    };
  },

  methods: {},
  computed: {},
  created() {
    const vm = this;
    let formData = new FormData();
    formData.append("footer", "footer");
    this.$axios
      .post("/connect/get/footer.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        //找分類
        if (response.data.status == "error") {
          vm.Datas = {};
        } else {
          vm.title = response.data.title;
          vm.contact = response.data.contact;
          vm.copywrite = response.data.copywrite;
        }
      });
  }
};
</script>