<template>
    <div class="edit">
        <NavHeader></NavHeader>
        <div class="edit-article">
            <Form :model="formItem" :label-width="80">
              <div class="input-title-wrap">
                <FormItem label="标题">
                    <Input v-model="formItem.title" placeholder="Enter title..." class="input-title"/>
                  <Button type="primary" style="margin-left: 20px" @click="submitArticle">提交</Button>
                  <Button type="ghost" style="margin-left: 20px">取消</Button>
                </FormItem>
              </div>
              <FormItem label="正文">
                <quill-editor class="editor-content"
                              v-model="formItem.content"
                              ref="quill"
                              :options="editorOption">
                </quill-editor>
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
        uid: "112233",
        title: "",
        content: ""
      },
      editorOption: {}
    };
  },
  methods: {
    submitArticle: function() {
      api.submitArticle(this.formItem).then(data => {
        if (data.status === 1) {
          this.submitArticleSuccess(data.status);
        } else {
          this.submitArticleFailed(data.msg);
        }
      });
    },
    submitArticleSuccess: function(desc) {
      this.$Notice.success({
        title: "提交成功",
        desc: desc ? desc : "文章已经成功提交"
      });
    },
    submitArticleFailed: function(desc) {
      this.$Notice.warning({
        title: "提交失败",
        desc: desc ? desc : "文章提交失败"
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
  .editor-content {
    height: 400px;
  }
}
</style>
