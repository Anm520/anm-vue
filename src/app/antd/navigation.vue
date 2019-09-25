<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <!-- 左侧导航栏 -->
    <a-layout-sider collapsible v-model="collapsed" :style="{ overflow: 'auto', height: '100vh'}" >
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['Swiper']" mode="inline" @click="handleClick" >
        <template v-for="item in menu">
          <template v-if="item.subs">
            <a-sub-menu :key="item.key">
              <span slot="title">
                <a-icon :type="item.icon" />
                <span>{{item.title}}</span>
              </span>
              <template v-for="(subItem) in item.subs">
                <template v-if="subItem.subs">
                  <a-sub-menu :key="subItem.key">
                    <span slot="title">
                      <a-icon :type="subItem.icon" />
                      <span>{{subItem.title}}</span>
                    </span>
                    <template v-for="(threeItem) in subItem.subs">
                      <a-menu-item :key="threeItem.key">
                        <a-icon :type="threeItem.icon" />
                        <span>{{threeItem.title}}</span>
                      </a-menu-item>
                    </template>
                  </a-sub-menu>
                </template>
                <template v-else>
                  <a-menu-item :key="subItem.key">
                    <a-icon :type="subItem.icon" />
                    <span>{{subItem.title}}</span>
                  </a-menu-item>
                </template>
              </template>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="item.key">
              <a-icon :type="item.icon" />
              <span>{{item.title}}</span>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>

    <!-- 右侧内容区域 -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" >你好啊</a-layout-header>
      <a-layout-content style="margin: 0 16px; ">
        <!-- 面包屑 -->
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- 主要内容区域 -->
        <div :style="{ padding: '24px', background: '#fff', minHeight: '900px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">Anm520-</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      menu: [
        {
          icon: 'pie-chart',
          key: 'Swiper',
          title: 'Swiper',
        },
        // {
        //   icon: 'pie-chart',
        //   key: 'HelloWorld',
        //   title: '高德地图',
        // },
        // {
        //   icon: 'user',
        //   key: 'sub2',
        //   title: '二级菜单',
        //   subs: [
        //     {
        //       icon: 'pie-chart',
        //       key: 'about',
        //       title: '2-1',
        //     },
        //     {
        //       icon: 'pie-chart',
        //       key: 'HelloWorld',
        //       title: '2-2',
        //     },
        //     {
        //       icon: 'user',
        //       key: 'sub3',
        //       title: '三级菜单',
        //       subs: [
        //         {
        //           icon: 'pie-chart',
        //           key: '3-1',
        //           title: '三级1',
        //         },
        //         {
        //           icon: 'pie-chart',
        //           key: '3-2',
        //           title: '三级2',
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
      this.$router.push({ name: e.key });
    },
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
