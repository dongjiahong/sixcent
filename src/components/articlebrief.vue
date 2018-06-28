<!--        case one 
+-----------------------------+--------+
|           title             |        |
+-----------------------------+        |
|           brief             |  image |
|                             |        |
+-----------------------------+        |
| author message upvote       |        |
+-----------------------------+--------+
            case two
+--------------------------------------+
|           title                      |
+--------------------------------------+
|           brief                      |
|                                      |
+--------------------------------------+
| author message upvote                |
+--------------------------------------+
-->
<template>
    <div class="article-brief">
        <div class="wrap-info">
          <router-link to="/article">
            <div class="a-title"><h2>谈写作:给向我咨询如何写好书评的“您”的答信(内有书单)</h2></div>
            <div class="a-brief">
                亲爱的您: 迄今为止，我已在我的文评集子《文心雕玉》里发了十多篇书评，文评，和影评，且反响不错，
                现在我在此分享我的书评经验，由于罗列出一百来本现
            </div>
          </router-link>
          <div class="wrap-sweet">
              <div class="author">丹妮姐姐</div>
              <div class="message">message</div>
              <div class="upvote">upvote</div>
          </div>
        </div>
        <div class="a-image"></div>
    </div>
</template>
<script>
export default {
  name: "articleBrief"
};
</script>

<style lang="scss" scoped>
.article-brief {
  height: 100px;
  margin-top: 15px;
  border-bottom: 1px solid #888;

  .wrap-info {
    text-align: left;
    width: 80%;
    float: left;

    .a-title {
      color: #444;
    }
    .a-brief {
      color: #999;
      height: 40px;
    }
    .wrap-sweet {
      color: #999;
      .author {
        display: inline;
      }
      .message {
        display: inline;
      }
      .upvote {
        display: inline;
      }
    }
  }

  .a-image {
    float: right;
    height: 80px;
    width: 100px;
    background-color: pink;
  }
}
</style>


