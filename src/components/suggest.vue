<template>
    <div class="author-suggest">
        <div class="avatar">
            <img src="https://upload.jianshu.io/users/upload_avatars/11557689/ed2ea7f3-9d7d-41fc-a05a-daebb8097b0c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
        </div>
        <div class="wrap-info">
            <div class="name"><h3>大叔来了</h3></div>
            <div class="introduce">愿你走过半生，归来仍是少年</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "suggest"
};
</script>

<style lang="scss" scoped>
.author-suggest {
  margin-top: 5px;
  height: 55px;
  .avatar {
    float: left;
    width: 50px;
    img {
      height: 100%;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .wrap-info {
    float: left;
    margin-left: 10px;
    text-align: left;
    .introduce {
      width: 200px;
      margin-top: 5px;
      font-size: 13px;
      color: #999;

      overflow: hidden;
      white-space: nowrap; // 内容不换行
      text-overflow: ellipsis; // 省略号
    }
  }
}
</style>


