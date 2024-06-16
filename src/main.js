import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueApexCharts from "vue3-apexcharts"; // 차트 사용
import VueSweetalert2 from 'vue-sweetalert2';
import httpApi from './utils/http';  // axios 틀작업

import 'sweetalert2/dist/sweetalert2.min.css';  //swal을 사용

// 로고 추가
function setLogo(b) {
  const a = 'etech';
  if (b === 'dark') {
    return require(`@/assets/image-test.png`)
  } else {
    return require(`@/assets/${a}-logo-blue.png`)
  }
}

//소숫점 생성
function setComma(){
  
}

// 플러그인 생성
const setLogoPlugin = {
  install(app) {
    app.config.globalProperties.$setLogo = setLogo;
    app.config.globalProperties.$setComma =setComma;
  }
};




createApp(App)
  .use(store)
  .use(router)
  .use(setLogoPlugin)
  .use(VueApexCharts)
  .use(VueSweetalert2)
  .provide('$axios', httpApi) // 전역으로 axios인스턴스를 제공
  .component('apexchart', VueApexCharts)
  .mount('#app');
  