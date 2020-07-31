<!-- 主页的组件 -->
<template>
<div class='home'>
  <!-- 主页header开始 -->
  <div class="tt-home-header">
    <span>头条</span>
  </div>
  <!-- 主页header结束 -->
  <!-- 主页内容开始 -->
  <div class="tt-home-content">
    <div class="home-content-left">
      <Navigator/>
    </div>
    <div class="home-content-middle">

      <!-- 显示发头条部分开始 -->
      <div class="content-middle-top">
        <section class="middle-top-tab">
          <section v-for="item in tabs"
            :key="item.id"
           :class="['top-tab-item',{active:activeTab==item.type}]"
           @click="handleTabChange(item.type)">{{item.text}}</section>
        </section>
      </div>
      <!-- 显示发头条部分结束 -->

      <!-- 显示编辑框部分开始 -->
      <div class="content-middle-middle">
        <section v-show="activeTab=='tt'">
        <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>

        </section>
        <section v-show="activeTab=='article'">写文章</section>
      </div>
      <!-- 显示编辑框部分结束 -->

      <!-- 显示图片和发布按钮开始 -->
      <div class="content-middle-bottom">
        <section class="mid-bottom">
          <section class="left">
            <span>图片</span>
          </section>
          <section class="right" @click.stop="publishTT">
            发布
          </section>
        </section>
      </div>
      <!-- 显示图片和发布按钮结束 -->
    </div>
    <div class="home-content-right">右边</div>
  </div>
  <!-- 主页内容结束 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Navigator from "../components/Navigator"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  Navigator,
},
data() {
//这里存放数据
return {
  // 切换的标签
  tabs: [
    {id:1,text:"发微头条",type:"tt"},
    {id:2,text:"写文章",type:"article"},
  ],
  // 当前激活的tab
  activeTab: "tt", // 默认激活tt
  content: '',  // 头条里面的内容
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  handleTabChange: function(activeTab){
    this.activeTab = activeTab
  },
  publishTT: function(){
    let content = this.content
    if(!content){
      // 当内容为空的情况下
      // todo 换成 elementUI message
      alert("内容为空")
      return false
    }
    this.$axios.post("/createTT",{
        content: content,
        imgs: '',
        // oauth_token: "KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS"
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
// 用async await 异步改同步
async mounted() {
  let res = await this.$axios.get("/getArticles",{
    params:{
      lastid:0,
      type:"TT",
      page:1,
      number:20
    }
  })
  console.log(res)
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
.tt-home-header {
  width: 100%;
  height: 30px;
  background: #000;
  span {
    font-size: 18px;
    color: #ccc;
    margin-left: 5px;
  }
}
.tt-home-content {
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .home-content-left {
    flex: 1;
  }

  .home-content-middle {
    flex: 3;
  .content-middle-top {
    .middle-top-tab {
      display: flex;
      .top-tab-item {
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
      }
      .active{
        color: rgb(83, 178, 216);
        border-bottom: 2px solid red;
      }
    }
  }


  .content-middle-middle {
  section {
    textarea {
      width: 100%;
      resize: none;
    }
  }
}

.content-middle-bottom {
  width: 100%;

  .mid-bottom {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-item: center;
    .left {
      span {

      }
    }

    .right {
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      background-color: #ea4245;
      cursor: pointer;

    }
  }
}
}

  .home-content-right {
    flex: 2;
  }
}
</style>