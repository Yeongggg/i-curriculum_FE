<template>
  <div class="sticky-top">
    <header class="navbar navbar-expand-md navbar-light d-print-none" data-bs-theme="dark">
      <div class="container-xl" id="towTop">
        <!-- 모바일 햄버거 아이콘 -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu"
          aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--  로고 -->
        <h1 class="navbar navbar-brand navbar-brand-autodark">
          <router-link class="nav-link" to="/dashboard">
            <img style="width: 160px;" :src="logo" />
          </router-link>
        </h1>
        <!-- 헤더 우측 버튼 모음 -->
        <div class="navbar-nav flex-row align-items-center order-md-last">
          <!-- 시간 버튼 -->
          <div class="nav-link px-0 d-none d-md-flex">
            <RealTimeClock />
            <!-- <span class="px-1">  {{ message }} </span> -->
          </div>
          <!-- 다크/라이트모드 버튼 -->
          <div class="d-md-flex ms-2 me-1">
            <!-- 다크모드 -->
            <a class="nav-link px-0 hide-theme-dark" data-bs-toggle="tooltip" v-on:click="toggleTheme()"
              data-bs-placement="bottom" aria-label="Enable dark mode" data-bs-original-title="Enable dark mode">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
            </a>
            <!-- 라이트 모드 -->
            <a class="nav-link px-0 hide-theme-light" data-bs-toggle="tooltip" v-on:click="toggleTheme()"
              data-bs-placement="bottom" aria-label="Enable light mode" data-bs-original-title="Enable light mode">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7">
                </path>
              </svg>
            </a>
          </div>
          
          <!-- 아바타 버튼 -->
          <div class="nav-item dropdown">
            <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <span class="avatar avatar-sm">
                <img v-if="avatarImg!=='NONE' && avatarImg" style="max-width: 80%;" :src="avatarImg" />
                <img v-else style="max-width: 80%;" src="@/static/avatars/noimage.jpg" />
              </span>
              <div class="d-none d-xl-block ps-2">
                <!-- <div class="mt-1 small text-secondary">UI Designer</div> -->
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow" style="min-width: 200px; padding: 10px;" data-bs-theme="light">
              <a class="dropdown-item pt-3 pb-1 cursor-default" style="font-weight: 600; font-size: 14px;">유저이름</a>
              <a class="dropdown-item pt-0 cursor-default">유저 이메일</a>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/myaccount">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                  <SvgIcon iconId="account" height="24" width="24" />
                </span>
                <span>Account</span>
              </router-link>
              <a href="" v-on:click="logout()" class="dropdown-item">
                <span
                  class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                  <SvgIcon iconId="logout" height="24" width="24" />
                </span>
                <span>Logout</span></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header class="navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="navbar navbar-light">
          <div class="container-xl" id="towLow" style="padding: 0">
            <ul class="navbar-nav">
              <!-- 마이페이지 -->
              <li class="nav-item">
                <router-link class="nav-link" to="/dashboard" title="Dashboard">
                  <span
                    class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                    <SvgIcon iconId="dashboard" height="24" width="24" />
                  </span>
                  <span class="nav-link-title"> 마이페이지 </span>
                </router-link>
              </li>
              
              <!-- 수강내역관리 -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown"
                  data-bs-auto-close="outside" role="button" aria-expanded="false">
                  <span
                    class="nav-link-icon d-md-none d-lg-inline-block  nav-item-first"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                    <SvgIcon iconId="vm" height="24" width="24" />
                  </span>
                  <span class="nav-link-title"> 수강내역 관리 </span>
                </a>
                <div class="dropdown-menu">
                  <div class="dropdown-menu-columns">
                    <div class="dropdown-menu-column">
                      <router-link class="dropdown-item" to="/untake" title="Project" data-bs-auto-close="outside">
                        <span class="nav-link-icon d-md-none d-lg-inline-block ">
                          <SvgIcon iconId="project" height="24" width="24" />
                        </span>
                        <span class="nav-link-title"> 과목 조회</span>
                      </router-link>

                      <router-link class="dropdown-item" to="/MyTake" title="Machine" data-bs-auto-close="outside">
                        <span
                          class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                          <SvgIcon iconId="machine" height="24" width="24" />
                        </span>
                        <span class="nav-link-title"> 이수내역 확인 </span>
                      </router-link>

                      
                    </div>
                  </div>
                </div>
              </li>
              <!-- 자료실 -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown"
                  data-bs-auto-close="outside" role="button" aria-expanded="false">
                  <span
                    class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                    <SvgIcon iconId="group" height="24" width="24" />
                  </span>
                  <span class="nav-link-title">
                    자료실
                  </span>
                </a>
                <div class="dropdown-menu">
                  <div class="dropdown-menu-columns">
                    <div class="dropdown-menu-column">
                     

                      <router-link class="dropdown-item" to="/" title="이수체계도">
                        <span
                          class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                          <SvgIcon iconId="team" height="24" width="24" />
                        </span>
                        <span class="nav-link-title"> 이수체계도 </span>
                      </router-link>

                      <router-link class="dropdown-item" to="/r" title="교과과정표">
                        <span
                          class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                          <SvgIcon iconId="employee" height="24" width="24" />
                        </span>
                        <span class="nav-link-title"> 교과과정표 </span>
                      </router-link>

                 
                    </div>
                  </div>
                </div>
              </li>
             
             
            </ul>
            
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>

import SvgIcon from "@/components/share/icons/SvgIcon.vue";
import RealTimeClock from '@/components/realtime/RealTimeClock.vue';

export default {
  name: "app",
  components: { SvgIcon, RealTimeClock },
  data() {
    return {
      title: "",
      msg: "",
      message: "",
      playAudio: false,
      avatarImg: '',
      logo:'',
    };
  },
  mounted() {
    this.logo= this.$setLogo('dark')
  },
  computed: {
    
    
  },
  methods: {
    logout() {
      // this.$store.commit("deleteSession");
      this.$router.push("/signin")
    },
    toggleTheme() {
      const currentTheme = window.document.body.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      // alert(newTheme)
      window.document.body.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem("theme", newTheme);

    }
  },
};
</script>
<style>
.nav-link-title {
  color: var(--tblr-nav-link-color) !important;
}

@media (min-width: 800px) {
  #towTop.container-xl,
  #towLow.container-xl {
    width: 86%;
  }
}
</style>
