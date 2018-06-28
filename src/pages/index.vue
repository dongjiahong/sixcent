<template>
    <div class="index">
        <NavHeader></NavHeader>
        <div class="wrap-content">
            <div class="articles">
              <ArticleBrief></ArticleBrief>
              <ArticleBrief></ArticleBrief>
              <ArticleBrief></ArticleBrief>
              <ArticleBrief></ArticleBrief>
            </div>
            <div class="suggest">
                <Suggest></Suggest>
                <Suggest></Suggest>
                <Suggest></Suggest>
            </div>
        </div>
    </div>
</template>

<script>
import NavHeader from "@/components/navheader";
import ArticleBrief from "@/components/articlebrief";
import Suggest from "@/components/suggest";
export default {
  name: "index",
  components: {
    NavHeader,
    ArticleBrief,
    Suggest
  }
};
</script>

<style lang="scss" scoped>
.index {
  .wrap-content {
    margin: 0px 20%;
    min-width: 1000px;
    margin-top: 30px;

    .articles {
      width: 600px;
      float: left;
    }
    .suggest {
      margin-top: 100px;
      margin-left: 40px;
      width: 300px;
      float: left;
    }
  }
}
</style>
