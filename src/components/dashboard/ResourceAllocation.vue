<template>
<div>
  <div class="row row-cards mt-0">
    <div class="col-lg-6 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">전공 필수</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a class="btn-action" @click="openModal"><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </a>
          </div>
        </div>

        <apexchart type="donut" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">전공 선택</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a href="#" class="btn-action"><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </a>
          </div>
        </div>
        <apexchart type="donut" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </div>
  <div class="row row-cards mt-0">
    <div class="col-lg-6 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">교양 필수</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a href="#" class="btn-action"><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </a>
          </div>
        </div>
        <apexchart type="donut" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">핵심 교양</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a href="#" class="btn-action"><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </a>
          </div>
        </div>
        <apexchart type="donut" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </div>


  <RecommendComp :isVisible="modalvisable" @close="modalvisable = false" :RecommendDataList="dumyData"> </RecommendComp>
  </div>
</template>

<script>
import RecommendComp from "@/components/dashboard/RecommendComp.vue";
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
    RecommendComp: RecommendComp,
  },
  props: {
    majorEssentialList: {},  //전필
    majorSelectiveList: {}, //전선
    generalSelectiveList: {}, //교필
    generalCoreList: {}, // 핵교
    generalEssentialList: {}//교선
  },
  data() {
    return {
      dumyData: {  // 추천해줘야하는 과목들
        major: "전필",
        DataList: [
          {
            hak: "CSE5555",
            name: "알고리즘",
            grade: 3
          },
          {
            hak: "CSE1234",
            name: "컴퓨터네트워크",
            grade: 3
          },
          {
            hak: "god3456",
            name: "DB",
            grade: 3
          },
        ]
      },
      modalvisable: false,// 모달 visable
      // 차트 데이터
      series: [80, 20],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%"
          },
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: ["#FFFFFF"]
          },

        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['이수학점', '미이수학점'],
        colors: ["#00E396", "#F05650"],
        plotOptions: {
          pie: {
            donut: {
              size: '60%',
              labels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: '전체학점',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          }
        }
      },
    };
  }
  ,
  mounted() {
    console.log("seok");

  },
  methods: {
    openModal() {
      this.modalvisable = true;
    },

  }
};
</script>

<style>
.card {
  margin: 1rem;
}

.card-body {
  padding: 1rem;
}

.recommend-text {

  font-size: 16px;

}
</style>