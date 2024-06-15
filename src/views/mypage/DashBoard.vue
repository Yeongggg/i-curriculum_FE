<template>
  <div class="container">
    <div v-if="onLoading">
      <div class="container container-slim py-4">
        <div class="text-center">
          <div class="text-muted mb-3">마이 페이지</div>
          <div class="progress progress-sm">
            <div class="progress-bar progress-bar-indeterminate"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="page-header">
        <div class="row align-items-end" style="height: 41px;">
          <div class="row pe-0">
            <div class="col-12">
              <div class="page-pretitle">DashBoard</div>
              <div class="btn-list justify-content-between align-items-center w-100" style="height: 25px;">
                <h2 class="page-title">마이페이지</h2>
                <!-- <div v-if="adminMode" class="btn-list justify-content-center align-items-center">
                    <div class="form-check form-switch">
                      <input class="form-check-input cursor-pointer" type="checkbox" v-model="adminMyPage" role="switch" checked>
                      <span class="form-check-label form-check-label-on">내 것만보기</span>
                      <span class="form-check-label form-check-label-off">전체 보기</span>
                    </div>
                  </div> -->

              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="hr-text"></div>
      <!-- 대시보드 영역 시작-->
      <div class="page-body mt-3" id="pageBody">
        <div class="row row-cards">
          <!-- 전체 이수학점 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icon-tabler-calculator me-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
                    <path d="M8 14l0 .01"></path>
                    <path d="M12 14l0 .01"></path>
                    <path d="M16 14l0 .01"></path>
                    <path d="M8 17l0 .01"></path>
                    <path d="M12 17l0 .01"></path>
                    <path d="M16 17l0 .01"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전체 이수학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.totalTakenCredit }} / 160
                </div>

              </div>
            </div>
          </div>
          <!-- 전공 이수학점 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-gray">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icon-tabler-cash-banknote me-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M18 12l.01 0"></path>
                    <path d="M6 12l.01 0"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전공 이수학점</h3>
                <div class="h1 my-1 me-2">
                  {{ memberData.majorTakenCredit }} / 65
                </div>

              </div>

            </div>
          </div>
          <!-- 전체 성적 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icon-tabler-coins">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z"></path>
                    <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4"></path>
                    <path
                      d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z">
                    </path>
                    <path d="M3 6v10c0 .888 .772 1.45 2 2"></path>
                    <path d="M3 11c0 .888 .772 1.45 2 2"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전체 학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.totalGrade }} /<span>(4.5)</span>
                </div>
                <div class="me-auto">
                  <span v-if="memberData.previousTotalGrade === 0"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    성적 정보 없음
                  </span>
                  <span v-else-if="memberData.totalGradeIncrese > 0"
                    class="text-green d-inline-flex align-items-center lh-1">
                    {{memberData.totalGradeIncrese}}%증가
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                  <span v-else-if="memberData.totalGradeIncrese === 0"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    변함 없음
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                  </span>
                  <span v-else class="text-red d-inline-flex align-items-center lh-1">
                    {{ memberData.totalGradeIncrese }}%감소
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down"
                      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7l6 6l4 -4l8 8"></path>
                      <path d="M21 10l0 7l-7 0"></path>
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>
          <!-- 전공 학점  -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-money" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                    <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
                    <path d="M10 13v1m0 -8v1"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전공 학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.majorGrade }}/(4.5)</div>
                <div class="me-auto">
                  <span v-if="memberData.previousMajorGrade === 0"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    성적 정보 없음
                  </span>
                  <span v-else-if="memberData.majorGradeIncrese > 0"
                    class="text-green d-inline-flex align-items-center lh-1">
                    {{memberData.totalGradeIncrese}}%증가
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                  <span v-else-if="memberData.majorGradeIncrese === 0"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    변함 없음
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                  </span>
                  <span v-else class="text-red d-inline-flex align-items-center lh-1">
                    {{ memberData.majorGradeIncrese }}%감소
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down"
                      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7l6 6l4 -4l8 8"></path>
                      <path d="M21 10l0 7l-7 0"></path>
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <!-- 비용 영역 끝-->
      <ResourceAllocation :majorEssentialList="majorEssentialList" :majorSelectiveList="majorSelectiveList" :generalSelectiveList="generalSelectiveList"
      :generalCoreList="generalCoreList" :generalEssentialList="generalEssentialList"></ResourceAllocation>
    </div>
  </div>
</template>

<script>

import ResourceAllocation from '@/components/dashboard/ResourceAllocation.vue';

export default {
  inject: ['$axios'],
  components: {
    ResourceAllocation,
  },
  props: {},
  data() {
    return {
      onLoading: true,
      value1: "",
      value2: "",
      memberData: {},
      majorList:{},  // 전공
      generalList:{}, // 교양 
      generalCoreList:{}, // 핵교
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    // todo : 데이터 불러오기 가능
    fetchData() {
      this.onLoading = true;
      this.$axios.get('/v1/dashboard', {
        params: {
          memberId: 1,  // todo 현재 학생 성적으로 바꿔야함
        }
      }).then((res) => {
        console.log(res.data.result);
        const result = res.data.result;
        this.memberData = {
          totalTakenCredit: result.totalTakenCredit,
          majorTakenCredit: result.majorTakenCredit, // 전공 이수학점
          majorGrade: result.majorGrade, // 전공 학점성적
          previousMajorGrade: result.previousMajorGrade, // 전학기까지 전공 학점성적 
          previousTotalGrade: result.previousTotalGrade, // 전학기총 학점 성적
          totalGrade: result.totalGrade, // 총 학점 성적
          totalGradeIncrese : this.calculatePercentageIncrease(result.previousTotalGrade,result.totalGrade),
          MajorGradeIncrese : this.calculatePercentageIncrease(result.previousMajorGrade,result.majorGrade)
        }
        
        this.onLoading = false;
      }).catch((err) => {
        console.log(err);
      })
    },
    calculatePercentageIncrease(initialValue, finalValue) {
      // 증가율 계산
      const increase = finalValue - initialValue;
      const percentageIncrease = (increase / initialValue) * 100;
      // 결과 반환
      return percentageIncrease;
    }

  },
  watch: {

  },
};
</script>

<style scoped>
.page-link {
  min-width: 0 !important;
}

.date-picker-cost {
  justify-content: end;
}

.cost-card-header {
  justify-content: end;
}

.cost-btn-group {
  padding-right: 0.5rem !important;
  justify-content: end;
  box-shadow: none;
}


@media (max-width: 767px) {
  .date-picker-cost {
    margin-top: 0.5rem;
    justify-content: start;
    width: 100%;
  }

  .date-picker-cost .el-date-editor {
    width: 100%;
    display: flex;
  }

  .cost-card-header {
    flex-wrap: wrap;
    justify-content: start;
  }

  .date-picker-cost {
    margin-top: 10px;
  }

  .cost-btn-group {
    padding-right: 0 !important;
    justify-content: start;
    margin-top: 10px;
    flex-wrap: wrap;
  }

}

@media (max-width: 1199px) {
  .cost-card-header {
    flex-wrap: wrap;
  }

  .date-picker-cost {
    margin-top: 10px;
  }

  .cost-btn-group {
    padding-right: 0 !important;
  }
}

.el-date-editor>.el-date-editor>.el-range-separator {
  line-height: 16px !important;
}

.el-input__icon {
  line-height: 16px !important;
}
</style>