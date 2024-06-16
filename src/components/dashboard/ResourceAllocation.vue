<template>
  <div class="row row-cards mt-0">
    <div class="col-lg-4 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">전공</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a class="btn-action" @click="openMajorModal">
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

        <apexchart type="donut" height="350" :options="majorChartOptions" :series="majorSeries"></apexchart>
      </div>
    </div>
    <div class="col-lg-4 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">교양</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a class="btn-action" @click="openGeneralModal">
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
        <apexchart type="donut" height="350" :options="generalChartOptions" :series="generalSeries"></apexchart>
      </div>
    </div>
    <div class="col-lg-4 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">핵심 교양</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a class="btn-action" @click="openGeneralCoreModal"><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
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
        <apexchart type="donut" height="350" :options="generalCoreChartOptions" :series="generalCoreSeries"></apexchart>
      </div>
    </div>
  </div>
  

 <!-- 성적 추이도를 나타내는 꺾은선 그래프 -->
 <div class="col-lg-12 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">성적 추이도</h3>
        </div>
        <apexchart type="line" height="350" :options="lineChartOptions" :series="lineChartSeries"></apexchart>
      </div>
  </div>

  <RecommendComp :isVisible="modalMajorVisible" @close="modalMajorVisible = false" :RecommendDataList="majorList"> </RecommendComp>
  <RecommendComp :isVisible="modalGeneralVisible" @close="modalGeneralVisible = false" :RecommendDataList="generalList"> </RecommendComp>
  <RecommendComp :isVisible="modalGeneralCoreVisible" @close="modalGeneralCoreVisible = false" :RecommendDataList="generalCoreList"> </RecommendComp>
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
    majorList: [],  // 전공
    generalList: [], // 교양 
    generalCoreList: [], // 핵교
    totalTakenCredit: Number, // 전체이수학점
    generalCoreTakenCredit:Number, //핵심교양 이수학점
    generalEssentialTakenCredit: Number, // 교양 필수 이수학점
    majorTakenCredit: Number, // 전공 이수 학점 
    majorEssentialTakenCredit: Number, // 전공 필수 이수 학점
    one: Number,
    two: Number,
    three: Number,
    four: Number,
    five: Number,
    six: Number,
    creative: Number,
  },
  data() {
    return {
      modalMajorVisible: false, // 전공 모달
      modalGeneralVisible: false, // 교양 모달
      modalGeneralCoreVisible: false,//핵교 모달
      // 차트 데이터
      majorSeries: [], // 전공
      generalSeries: [], //교양
      generalCoreSeries: [], //핵교
      lineChartSeries: [], // 성적 추이 그래프

      gradeData: [3.2, 3.5, 3.8, 4.0], // 예시 성적 데이터

      //차트 옵션
      majorChartOptions: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%"
          },
          style: {
            fontSize: '10px',
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
        labels: ['전공필수', '전공선택', '미이수'],
        colors: ["#008FFB","#00E396", "#F05650"],
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
      generalChartOptions: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%"
          },
          style: {
            fontSize: '10px',
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
        labels: ['교양필수', '교양선택','핵심교양','미이수'],
        colors: ["#008FFB","#00E396",'#FEB019',"#F05650"],
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
      generalCoreChartOptions: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%"
          },
          style: {
            fontSize: '10px',
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
        labels: ['1영역', '2영역', '3영역','4영역','5영역','6영역','창의영역'],
        colors: ["#008FFB","#00E396","#FF5733","#FFC300","#900C3F","#DAF7A6","#6F42C1"],
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
                  label: '핵심교양',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                     w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          }
        }
      },
  lineChartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '학년별 성적 추이도',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // alternating row colors
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['1학년', '2학년', '3학년', '4학년'],
        }
      }
    };
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      console.log('Major List:', this.majorList);
      console.log('Major List:', this.generalList);
      console.log('General Core List:', this.generalCoreList);

      console.log("전체 이수 학점: ",this.totalTakenCredit);
      console.log("전공 이수 학점: ",this.majorTakenCredit);

      console.log("교양 선택 이수 학점: ",this.totalTakenCredit - this.majorTakenCredit - this.generalCoreTakenCredit);
      console.log("교양 필수 이수 학점",this.generalEssentialTakenCredit);
      console.log("핵심 교양 이수 학점: ",this.generalCoreTakenCredit);
      
      console.log("전공 필수 이수 학점: ",this.majorEssentialTakenCredit);
      this.majorSeries = [this.majorEssentialTakenCredit, this.majorTakenCredit - this.majorEssentialTakenCredit, 65 - this.majorTakenCredit];
      this.generalSeries = [this.generalEssentialTakenCredit,this.totalTakenCredit - this.majorTakenCredit - this.generalCoreTakenCredit,this.generalCoreTakenCredit,65-this.generalEssentialTakenCredit-this.totalTakenCredit+this.majorTakenCredit];
      this.generalCoreSeries = [this.one,this.two,this.three,this.four,this.five,this.six,this.creative]; // 핵심 교양 여러개 들으면 일교로 빠지는데 일단 얼마나 이수했는지만 나타내면 좋을것 같음
      
      this.lineChartSeries = [{
        name: "성적",
        data: this.gradeData
      }];
   
       // '전공 이수 학점'이 65 이상인지 확인하여 시리즈를 설정
      if (this.majorTakenCredit >= 65) {
      this.majorSeries = [65];
      this.majorChartOptions.labels = ['완료'];
      this.majorChartOptions.colors = ['#00E396']; // 완료 색상
      this.majorChartOptions.plotOptions.pie.donut.labels.total.label = '전공 요구 사항 충족';
      
    } 
      // '교양 이수 학점'이 65 이상인지 확인하여 시리즈를 설정
      if (this.totalTakenCredit - this.majorTakenCredit + this.generalCoreTakenCredit>= 65) {
      this.generalSeries = [65];
      this.generalChartOptions.labels = ['완료'];
      this.generalChartOptions.colors = ['#00E396']; // 완료 색상
      this.generalChartOptions.plotOptions.pie.donut.labels.total.label = '교양 요구 사항 충족';
      
    } 
     // '핵심교양 이수 학점'이 12 이상인지 확인하여 시리즈를 설정
     if (this.generalCoreTakenCredit>= 12) {
      this.generalCoreSeries = [12];
      this.generalCoreChartOptions.labels = ['완료'];
      this.generalCoreChartOptions.colors = ['#00E396']; // 완료 색상
      this.generalCoreChartOptions.plotOptions.pie.donut.labels.total.label = '핵심교양 요구 사항 충족';
      
    } 
      
    },
    openMajorModal() {
      if(this.majorTakenCredit >= 65){
        this.$swal("이미 전공 졸업 요건을 충족 했습니다.", '', "success");
      
      }else{
        this.modalMajorVisible = true;
      }
    },
    openGeneralModal() {
      if(this.totalTakenCredit - this.majorTakenCredit + this.generalCoreTakenCredit>=65){
     
        this.$swal("이미 교양 졸업 요건을 충족 했습니다.", '', "success");
      
      }else{
        this.modalGeneralVisible = true;
      }

    },
    openGeneralCoreModal(){
      if(this.generalCoreTakenCredit >=1){
     
     this.$swal("이미 핵심교양 졸업 요건을 충족 했습니다.", '', "success");
   
   }else{
     this.modalGeneralVisible = true;
   }
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