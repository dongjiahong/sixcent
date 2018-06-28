<template>
    <div class="article">
        <NavHeader></NavHeader>
        <div class="wrap-article">
          <div class="title">{{article.title}} </div>
          <div class="author-info">
            <div class="logo"></div>
            <div class="article-brief-wrap">
              <div class="author">author</div>
              <div class="brief">
                <div class="brief-item">{{article.createDate}}</div>
                <div class="brief-item">字数: {{article.wordNumber}}</div>
                <div class="brief-item">阅读: {{article.readNumber}}</div>
                <div class="brief-item">打赏: {{article.voteNumber}}</div>
              </div>
            </div>
          </div>
          <div class="article-content">{{article.content}}</div>
        </div>
        <div class="vote-button">
          <Button type="warning" shap="circle" size="large">打 赏 支 持</Button>
        </div>
    </div>
</template>

<script>
import NavHeader from "@/components/navheader";
export default {
  name: "showArticle",
  components: {
    NavHeader
  },
  data() {
    return {
      article: {
        title: "这个牛逼呀",
        createDate: "2018.08.08 12:30",
        wordNumber: 350,
        readNumber: 999,
        voteNumber: 12,
        content:
          "如果现在就死了，这辈子所做的最正确的选择就是出家。 回想曾经的生活，有些后怕，因此常常暗自庆幸——幸亏出家了！ 倒不是说曾经的生活有多么罪恶，而是一种可怕的如温水煮青蛙般的不知不觉，一种方向有误而永远不会到达目的地的悲催，像一个错误紊乱的程序，永远不可能有正确的结果。整个指导行为的观念有误，怎么可能有真正的快乐。 如果不是出家，毫不夸张地说，这么多年白活了，且还造下不知多少恶业。因为一直没活明白，一直处在一种巨大的颠倒无明之中。出家，意味着走上一条真正的光明大道，走上一条趋向解脱的路。比所有曾经的追求都值得。因为它完全超越于欲望之上，能够帮我们建立一种使人成圣成贤的、教人觉悟的模式……没出家前，肯定不会说这样的话，因为还没体会到出家的好，就会固执地认为那时候所追求的正确无误和得到之后那看似幸福的“幸福”。出家之后，有了比照，才知道人的生命还有这样一种活法。 幸亏出家了，如果不是在僧团，早晨4点起、晚上9点睡，这些都是不可能的。可能晚上很晚才睡，早上很晚才起，一天三顿饭，也肯定不能按时。出家了，才得以走上这样一条身心规律的轨道。 幸亏出家了，也终于不用为穿什么衣服、背什么包、做什么发型、用什么护肤品等等一切外在的穿着打扮费心思了。出家人的衣服、鞋子都是清一色，样式沿袭中国古代汉服的样子，穿起来宽松舒适，让人看着则是清净庄严。想想曾经为穿衣打扮浪费了多少时间、精力和金钱，还乐此不疲，现在觉得，内心里的清净庄严所能给予人内心的力量，比一切外在的衣着装扮都来得持久。简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.article {
  .wrap-article {
    margin-top: 30px;
    margin-left: 15%;
    margin-right: 20%;

    .title {
      text-align: left;
      margin-left: 30px;
      font-size: 30px;
      font-weight: bold;
    }

    .author-info {
      margin-top: 20px;
      margin-left: 20px;
      height: 100px;
      .logo {
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: pink;
      }
      .article-brief-wrap {
        float: left;
        .author {
          font-size: 18px;
          font-weight: bold;
          text-align: left;
          margin-left: 10px;
          margin-top: 5px;
        }
        .brief {
          margin-left: 10px;
          margin-top: 5px;
          .brief-item {
            display: inline;
          }
        }
      }
    }
    .article-content {
      font-size: 18px;
      text-align: left;
    }
  }
  .vote-button {
    margin: 20px auto;
  }
}
</style>


