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
          <form action="./" method="get" autocomplete="off" novalidate>
            <div class="mb-3">
              <label class="form-label">아이디( ID or Email)</label>
              <input v-model="menberInfo.clientId" type="email" class="form-control" placeholder="your@email.com"
                autocomplete="off" />
            </div>
            <div class="mb-3">
              <label class="form-label">닉네임</label>
              <input v-model="menberInfo.nickname" type="email" class="form-control" placeholder="nickname"
                autocomplete="off" />
            </div>
            <div class="mb-2">
              <label class="form-label">
                비밀번호(Password)
                <!-- <span class="form-label-description text-primary">
                    <router-link to="/forgotpassword" tabindex="-1" style="color: rgba(var(--tblr-link-color-rgb),var(--tblr-link-opacity,1))"> 비밀번호 찾기</router-link>
                  </span> -->
              </label>
              <div class="input-group input-group-flat">
                <input v-model="menberInfo.password" type="password" class="form-control" placeholder="Your password"
                  autocomplete="off" />
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
            <br>

            <div class="mb-3">
              <label class="form-label">학과</label>
              <input v-model="menberInfo.department_name" type="email" class="form-control" placeholder="학과를 입려하시오."
                autocomplete="off" />
            </div>

            <div class="form-footer mb-2 text-center">
              <a @click="createMember()" class="btn  btn-pill btn-primary" role="button">회원가입</a>
            </div>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
import router from '@/router'





export default {
  inject: ['$axios'],
  data() {
    return {
      apiurl: '/v1/members',
      menberInfo: { //이메일 비밀번호 닉네임 입학년도 완료학기 소속과이름
        clientId: '',
        password: '',
        nickname: '',
        department_name: '',
        joinYear: 0,
        compeleteTerm: 0
      }
    }
  },
  methods: {
    createMember() {
      this.$swal({
        title: "회원가입 하시겠습니까?",
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        closeOnConfirm: true,
        closeOnCancel: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.post(`${this.apiurl}/join`, {
            clientId: this.menberInfo.clientId,
            password: this.menberInfo.password,
            nickname: this.menberInfo.nickname,
            department_name: this.menberInfo.department_name,
            joinYear: 2019,
            compeleteTerm: 4
          }).then((res) => {
            console.log(res);
            if (res) {
              this.$swal('완료 되었습니다.', '', 'success')
              router.push('/signin')
            } else {
              alert('실패')
            }
          }).catch((err) => {
            console.log(err);
          })
        }
      })
    }
  }
}
</script>