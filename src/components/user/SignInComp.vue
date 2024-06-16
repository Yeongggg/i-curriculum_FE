<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="text-center mt-4 mb-4">
        <h2>
          <!-- 화이트 로고 -->
          <img src="@/assets/image.png" width="200px" />
          <!-- 블루 로고 -->
        </h2>
      </div>
      <div class="card card-md">
        <div class="card-body">
          <h2 class="h3 text-center mb-4">로그인 후 사용하세요</h2>
          <form action="./" method="get" autocomplete="off" novalidate>
            <div class="mb-3">
              <label class="form-label">아이디( ID or Email)</label>
              <input type="email" class="form-control" placeholder="your@email.com" autocomplete="off"
                v-model="loginInfo.email" />
            </div>
            <div class="mb-2">
              <label class="form-label">
                비밀번호(Password)
                <!-- <span class="form-label-description text-primary">
                    <router-link to="/forgotpassword" tabindex="-1" style="color: rgba(var(--tblr-link-color-rgb),var(--tblr-link-opacity,1))"> 비밀번호 찾기</router-link>
                  </span> -->
              </label>
              <div class="input-group input-group-flat">
                <input type="password" class="form-control" placeholder="Your password" autocomplete="off"
                  v-model="loginInfo.password" />
                <span class="input-group-text">
                  <a href="#" class="link-secondary" title="Show password"
                    data-bs-toggle="tooltip"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path
                        d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div class="form-footer mb-2 text-center">
              <a @click="userValidation()" class="btn  btn-pill btn-primary" role="button">로그인</a>
            </div>
          </form>
        </div>

      </div>
      <!--todo : 회원가입 로직을 완성하면 추가해야한다.-->
      <div class="text-center text-muted mt-3">
        <router-link to="/createMember" tabindex="-1" class=""
          style="color: rgba(var(--tblr-link-color-rgb),var(--tblr-link-opacity,1))">회원가입</router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  inject: ['$axios'],
  data() {
    return {
      apiurl: '/v1/members',
      loginInfo: {
        email: '',
        password: ''
      },
    };
  },
  mounted: function () {

  },
  methods: {
    userValidation() {
      // 로그인 검증 로직 추가
      
      
      if (this.loginInfo.email && this.loginInfo.password) {
        // 예제에서는 간단히 조건을 체크하여 로그인 처리를 합니다.
        // 실제로는 백엔드와 통신하여 인증을 수행해야 합니다.
        //formdata생성
        const frm = new FormData()
        frm.append('username', this.loginInfo.email)
        frm.append('password', this.loginInfo.password)
        console.log(frm, "seok");
        this.$axios.post('/login', frm, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        ).then((res) => {
          console.log(res.headers.authorization, "seok");

          // 토큰을 LocalStorage에 저장
          localStorage.setItem("authorization", res.headers.authorization);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("memberId", res.data.memberId);
          console.log(res);
          // this.$store.commit('setUser', { username: res.data.memberId });
          console.log(localStorage)
          
          this.$router.push({ name: 'dashboard' });
        })
          .catch((err) => {
            console.log(err);
          })
      } else {
        alert('Please enter your username and password');
      }
    }
  },
  unmounted: function () {
  }
};
</script>

<style>
/* 스타일은 필요에 따라 작성하세요 */
</style>