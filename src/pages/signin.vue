<template>
    <div class="sign-in">
        <div class="wrap-sign">
            <div class="sign">
                <router-link to="/sign_in">
                    <div class="item">
                        登录
                    </div>
                </router-link>
                <div class="item">
                    ·
                </div>
                <router-link to="/sign_up">
                    <div class="item">
                        注册
                    </div>
                </router-link>
            </div>
            <div class="input">
                <Form :label-width="90">
                    <FormItem prop="user" label="用户名">
                        <div class="input-item">
                            <i-input type="text" v-model="siginIn.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </i-input>
                        </div>
                    </FormItem>
                    <FormItem prop="password" label="密码">
                        <div class="input-item">
                            <i-input type="password" v-model="siginIn.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </i-input>
                        </div>
                    </FormItem>
                </Form>
            </div>
            <div class="sign-button">
                <Button type="primary" shape="circle" long>
                    <router-link to="/">
                        <span>登 录</span>
                    </router-link>
                </Button>
            </div>
            <div class="welcome">欢 迎 回 来^_^</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      siginIn: {
        user: "",
        password: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.sign-in {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f1f1f1;

  .wrap-sign {
    margin: 150px auto;
    width: 400px;
    height: 400px;
    text-align: center;
    background-color: #fff;
    border-radius: 5%;

    .sign {
      font-size: 32px;
      font-weight: bold;
      a {
        color: orange;
      }
      padding-top: 20px;

      .item {
        display: inline;
      }
    }

    .input {
      margin-top: 20px;
      font-weight: bold;
      .input-item {
        width: 250px;
      }
    }
    .sign-button {
      width: 200px;
      margin: 0 auto;
      margin-top: 40px;

      span {
        font-size: 18px;
        color: #fff;
      }
    }
    .welcome {
      margin-top: 50px;
      color: #dedede;
      font-weight: bolder;
      font-size: 22px;
    }
  }
}
</style>


