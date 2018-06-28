<template>
    <div class="edit">
        <NavHeader></NavHeader>
        <div class="edit-article">
            <Form :model="formItem" :label-width="80">
              <div class="input-title-wrap">
                <FormItem label="标题">
                    <Input v-model="formItem.input" placeholder="Enter title..." class="input-title"/>
                  <Button type="primary" style="margin-left: 20px" @click="submitArticle">提交</Button>
                  <Button type="ghost" style="margin-left: 20px">取消</Button>
                </FormItem>
              </div>
              <FormItem label="正文">
                <mavon-editor v-model="formItem.articleValue"></mavon-editor>
              </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
import NavHeader from "@/components/navheader";
import api from "../fetch/api";
export default {
  name: "edit",
  components: {
    NavHeader
  },
  data() {
    return {
      formItem: {
        input: "",
        articleValue: ""
      }
    };
  },
  methods: {
    submitArticle: function() {
      api.submitArticle(this.formItem).then(data => {
        this.formItem.input = data.status;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-article {
  margin: 0 5%;
  .input-title-wrap {
    margin-top: 30px;
    width: 680px;
    .input-title {
      width: 400px;
    }
  }
}
</style>
