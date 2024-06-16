<template>
    <div class="container">
      
      <div class="page-header">
        <div class="row align-items-end">
          <div class="col">
            <div class="page-pretitle">계정 설정</div>
            <h2 class="page-title" style="height: 25px;">계정 정보</h2>
          </div>
        </div>
      </div>
      <div style="margin: 10px 0 0 0;"></div>
      <div class="page-body mt-0">
        <div class="card border">
          <div class="row g-0" >
            <!-- Account 좌측 사이드바 메뉴 -->
            <div class="col-md-2 border-end">
              <div class="card-body">
                <h1 class="subheader">목록</h1>
                <div class="list-group list-group-transparent">
                  <a
                    class="list-group-item list-group-item-action d-flex align-items-center"
                    :class="currMenu === 'profile-comp' ? 'active' : ''"
                    @click="openMenu('profile-comp')"
                    >유저 정보</a
                  >
                  <a
                    class="list-group-item list-group-item-action d-flex align-items-center"
                    :class="currMenu === 'notifications-page' ? 'active' : ''"
                    @click="openMenu('notifications-page')"
                    >Q&A</a
                  >
                </div>
               
              </div>
            </div>
            <!-- 본문 페이지 -->
            <div class="col-12 col-md-10 d-flex flex-column">
              <profile-comp />
            </div>
  
           
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import ProfileComp from "./ProfileComp.vue";
  
  
  export default {
    name: "account-comp",
    components: {
      "profile-comp": ProfileComp,
    },
    props: {},
    data() {
      return {
        currMenu: "profile-comp",
      };
    },
    mounted() {},
    methods: {
      openMenu(str) {
        this.currMenu = str;
      },
    },
    watch: {},
  };
  </script>
  
  <style></style>
  