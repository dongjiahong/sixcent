<template>
    <div class="nav-header">
        <Layout>
            <Header class="header">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <router-link to="/">
                        <div class="logo"></div>
                    </router-link>
                    <div class="nav-item">
                        <menu-item name="2">
                            <Input v-model="searchValue" icon="ios-search" placeholder="搜索吧..." style="width: 200px"/>
                        </menu-item>
                        <menu-item name="3">
                            <router-link to="/sign_in">
                                登录
                            </router-link>
                        </menu-item>
                        <menu-item name="4">
                            <router-link to="/sign_up">
                                注册
                            </router-link>
                        </menu-item>
                        <menu-item name="5">
                            <router-link to="/edit">
                                写文章
                            </router-link>
                        </menu-item>
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>

<script>
export default {
  name: "navHeader",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    getValue() {
      return {};
    }
  }
};
</script>

<style <style lang="scss" scoped>
.nav-header {
  background: #fff;
  .logo {
    float: left;
    width: 60px;
    height: 100%;
    border-radius: 50%;
    background-color: pink;
  }
  .nav-item {
    float: right;
    a {
      color: #ccc;
    }
  }
}
</style>
