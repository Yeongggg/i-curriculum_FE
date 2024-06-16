<template>

    <div class="d-flex">
        <div class="side-filter border-end" v-if="isSidebarOpen">
            <!--필터 시작-->
            <div class="" style="width: 100%; padding: 25px">
                <form action="./" method="get" autocomplete="off" novalidate="">
                    <div class="subheader mb-2">검색 필터</div>
                    <div class="list-group list-group-transparent mb-3">
                        <a class="list-group-item list-group-item-action d-flex align-items-center active" href="#">
                            과목 개수
                            <small class="text-secondary ms-auto">24</small>
                        </a>
                    </div>
                    <div class="subheader mb-2">강의명</div>
                    <div class="mb-3">
                        <input placeholder="강의명을 입력하세요">
                    </div>
                    <div class="subheader mb-2">학수번호</div>
                    <div class="mb-3">
                        <input placeholder="학수번호를 입력하세요">
                    </div>
                    <div class="subheader mb-2"> 영역 </div>
                    <div class="mb-3">
                        <label class="form-check">
                            <input type="checkbox" class="form-check-input" name="form-tags[]" value="business">
                            <span class="form-check-label">전공 필수</span>
                        </label>
                        <label class="form-check">
                            <input type="checkbox" class="form-check-input" name="form-tags[]" value="evening">
                            <span class="form-check-label">전공 선택</span>
                        </label>
                        <label class="form-check">
                            <input type="checkbox" class="form-check-input" name="form-tags[]" value="party">
                            <span class="form-check-label">교양 필수</span>
                        </label>
                        <label class="form-check">
                            <input type="checkbox" class="form-check-input" name="form-tags[]" value="party">
                            <span class="form-check-label">일반 교양</span>
                        </label>
                        <label class="form-check">
                            <input type="checkbox" class="form-check-input" name="form-tags[]" value="party">
                            <span class="form-check-label">핵심 교양</span>
                        </label>
                    </div>

                    <div class="mt-5">
                        <button class="btn btn-primary w-100">
                            검색
                        </button>
                        <a href="#" class="btn btn-link w-100">
                            초기화
                        </a>
                    </div>
                </form>
            </div>
        </div>


        <div style="padding: 0 1rem; overflow: auto;"
            :class="{ 'sidebar-open': isSidebarOpen, 'container': isContentClass1, 'container-filter': !isContentClass1 }">

            <div class="page-header">
                <div class="row align-items-end project-header">
                    <div>
                        <div class="page-pretitle">수강 조회</div>
                        <div class="btn-list" style="height: 25px; display: flex; ">
                            <h2 class="page-title">검색 필터</h2>

                            <!-- filter 필터 버튼 -->
                            <button class="form-selectgroup-label" style="padding: 0px 10px; height: 25px;"
                                @click="toggleSidebar">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter m-0"
                                    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z">
                                    </path>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>
            </div>
            <div class="hr-text"></div>

            <!--내가 추가한 과목들-->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title" style="padding: 0.8rem; ">장바구니</h3>
                    <div class="btn btn-pill" style="margin: 10px 10px 10px 10px; padding: 0.4rem" @click="AddTake">
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-table-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                            <path d="M3 10h18" />
                            <path d="M10 3v18" />
                            <path d="M16 19h6" />
                            <path d="M19 16v6" />
                        </svg>
                        이수내역 추가하기
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">

                        <table class="table table-vcenter table-nowrap">
                            <thead>
                                <tr>
                                    <th>학수번호</th>
                                    <th>과목명</th>
                                    <th>영역</th>
                                    <th>학점</th>
                                    <th>이수학기</th>
                                    <th class="w-1"></th>
                                </tr>
                            </thead>
                            <tbody v-if='MyBucketList.length > 0'>
                                <tr v-for="(item, index) in MyBucketList" :key="index">
                                    <td>{{ item.hak }}</td>
                                    <td @click="toggleModal(index, item, 'update')"><a class="text-ellipsis-project">{{
            item.name }}</a></td>
                                    <td>{{ item.code }}</td>
                                    <td>{{ item.myGrade }}</td>
                                    <td>{{ item.myYear }}</td>
                                    <td>
                                        <a class="text-ellipsis-project" @click="deleteBucketData(index)">삭제</a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="5">추가한 과목이없습니다.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div class="hr-text"></div>
            <div class="card">
                <!--데이터를 불러오는중이면 로딩바-->
                <div v-if="onLoading" class="progress progress-sm">
                    <div class="progress-bar progress-bar-indeterminate bg-red"></div>
                </div>
                <div v-else>
                    <!-- 스크롤 관리-->
                    <div class="card-header" style="padding: 0.8rem; ">
                        <h3 class="card-title">과목조회</h3>
                        <div id="show_btn" v-show="showBtnVisible" @click="toggleTable" class="btn btn-pill"
                            style="margin: 10px 10px 10px 10px; padding: 0.4rem">
                            &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M18 13l-6 6" />
                                <path d="M6 13l6 6" />
                            </svg>
                            펼치기
                        </div>
                        <div id="hide_btn" v-show="hideBtnVisible" @click="toggleTable" class="btn btn-pill"
                            style="margin: 10px 10px 10px 10px; padding: 0.4rem">&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M18 11l-6 -6" />
                                <path d="M6 11l6 -6" />
                            </svg>
                            접기
                        </div>
                    </div>
                    <div class="card-body long_tbody">
                        <!--과목 조회 창-->
                        <div class="table-responsive">
                            <!-- 접어둘때 이용-->
                            <table id="short_table" v-show="showShortTable" class="table table-vcenter">
                                <thead>
                                    <tr>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>이수학기</th>
                                        <th>수강인원</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr v-for="(item, index) in unTakeList" :key="index">
                                        <td>{{ item.hak }}</td>
                                        <td><a class="text-ellipsis-project" @click="toggleModal(index, item, 'add')">{{
            item.name }}</a>
                                        </td>
                                        <td>{{ item.code }}</td>
                                        <td>{{ item.grade }}</td>
                                        <td>{{ item.year }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table id="long_table" v-show="showLongTable" class="table table-vcenter ">
                                <thead>
                                    <tr>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>학점</th>
                                        <th>이수학기</th>
                                        <th>수강인원</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paweł Kuna</td>
                                        <td>
                                            <a class="text-ellipsis-project" @click="toggleModal"> UI Designer,
                                                Training</a>
                                        </td>
                                        <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffie Lewzey</td>
                                        <td>
                                            Chemical Engineer, Support
                                        </td>
                                        <td><a href="#" class="text-reset">jlewzey1@seesaa.net</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mallory Hulme</td>
                                        <td>
                                            Geologist IV, Support
                                        </td>
                                        <td><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>
                                        <td>
                                            User
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dunn Slane</td>
                                        <td>
                                            Research Nurse, Sales
                                        </td>
                                        <td><a href="#" class="text-reset">dslane3@epa.gov</a></td>
                                        <td>
                                            Owner
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emmy Levet</td>
                                        <td>
                                            VP Product Management, Accounting
                                        </td>
                                        <td><a href="#" class="text-reset">elevet4@senate.gov</a>
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            <a href="#">Edit</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>

        </div>




        <TakeBuket ref="updateModalComponent" :modalType="modalType" :courseData="courseData" :updateItem="updateItem"
            :addItem="addItem"></TakeBuket>


    </div>



</template>

<script>

import TakeBuket from './component/TakeBuket.vue'


export default {
    inject:['$axios'],
    components: {
        TakeBuket: TakeBuket,
    },
    data() {
        return {
            modalType: 'add',
            onLoading:false,  // 데이터를 가져오면 onloading의 값이 false가 된다.
            isSidebarOpen: false,
            isContentClass1: true,

            showShortTable: true,
            showLongTable: false,
            // 조회해서 가져올 데이터
            unTakeList: [],
            searchOptions: { // 검색 옵션 객체

            },
            MyBucketList: [],
            courseData: {}, // 신청 컴포넌트에 들어갈 DATA

        }
    },
    mounted() {
        console.log('mounted 호출됨');
        this.fetchData();
    },
    methods: {
        fetchData() { // 데이터를 가져오는 함수
            this.onLoading = true;
            console.log('fetchData 호출됨'); // 로그 추가
            this.$axios.get('/v1/courses/untake', {
                params: {
                    memberId: 1 // TODO : 실제 사용자 ID로 변경
                }
            })
            .then(response => { 
                console.log('응답 받음:', response.data);
                const responseList = response.data.result.untakenCourseDTOList;
                this.unTakeList = responseList.map(item => ({
                    hak: item.courseCode, // 학수번호
                    courseId: item.courseId,
                    name: item.courseName, // 과목명
                    code: item.categoryName, // 영역
                    grade: item.credit, // 학점
                    year: item.level, // 이수학기
                    people: item.takenNumber // 수강인원
                }));
                console.log("here", this.unTakeList);
            })
            .catch(error => {
                console.error('오류 발생:', error); // 오류 로그 추가
                this.$swal("데이터를 가져오는데 실패했습니다.", '', "error");
            })
            .finally(() => {
                this.onLoading = false;
            });
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            this.isContentClass1 = !this.isContentClass1;
        },
        toggleModal(idx, item, type) { // 장바구니 모달 여는 함수
            this.courseData = item;
            if (type === 'update') {
                this.modalType = idx
            } else {
                this.modalType = type;
            }
            this.$refs.updateModalComponent.clickModal();
        },
        toggleTable() { // 테이블 접기 늘리기
            this.showLongTable = !this.showLongTable;
            this.showShortTable = !this.showShortTable;
        },
        AddTake() {
        // MyBucketList를 CreateTakeDTO 형식으로 변환
        const createTakeDTOList = this.MyBucketList.map(item => {
                return {
                    courseId: Number(item.courseId), // 실제 데이터에서 적절한 필드를 매핑하세요
                    takenTerm: Number(item.myYear), // 이수학기
                    grade: String(item.myGrade), // 성적 (문자열로 변환)
                    category: String(item.code) // 영역
                };
            });

        // CreateTakeListDTO 형식으로 데이터 래핑
        const requestData = {
            createTakeDTOList: createTakeDTOList
        };

        this.$axios.post('/v1/courses/take/new', requestData, {
            params: {
                memberId: 1 // TODO: 실제 사용자 ID로 변경
            }
        })
        .then(response => {
            console.log('응답 받음:', response.data); 
            this.$swal("이수내역 추가완료", '', 'success')
                .then((val) => {
                    if (val.isConfirmed) {
                        this.$router.push('/MyTake');
                    }
                });
        })
        .catch(error => {
            console.error('오류 발생:', error); 
            this.$swal("이수내역 추가에 실패했습니다.", '', "error");
        });
    }
,
        addItem(item) { // 장바구니에 추가하는 함수
            const addItem = item;
            this.MyBucketList.push(addItem)
            this.MyBucketList.forEach((item, index) => {
            console.log(`Item ${index + 1}:`);
            console.log(`  courseId: ${item.courseId}`);
            console.log(`  hak: ${item.hak}`);
            console.log(`  name: ${item.name}`);
            console.log(`  code: ${item.code}`);
            console.log(`  myGrade: ${item.myGrade}`);
            console.log(`  myYear: ${item.myYear}`);
        });

            this.$refs.updateModalComponent.closeModal();
            this.$swal("장바구니 추가완료", '', "success");
        },
        updateItem(idx, item) { // 장바구니에 추가하는 함수
            const addItem = item;
            this.MyBucketList.with(idx, addItem)
            this.$refs.updateModalComponent.closeModal();
            this.$swal("수정완료", '', "success");
        },
        deleteBucketData(idx) {
            this.$swal({
                title: "삭제 하시겠습니까?",
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
                    this.MyBucketList.splice(idx, 1);
                    this.$swal("삭제완료", '', "success");
                }
            })
        }

    },
    computed: {
        showBtnVisible() {
            return this.showShortTable;
        },
        hideBtnVisible() {
            return this.showLongTable;
        },
    },
    watch: {

    }
}

</script>

<style>
.long_tbody {
    display: block;
    width: 100%;
    max-height: 600px;
    overflow: auto;
}
</style>