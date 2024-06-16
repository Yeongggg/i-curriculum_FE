<template>
    <div>
        <div class="offcanvas offcanvas-end cmp-udpate" tabindex="-1" id="updateModal"
            aria-labelledby="offcanvasStartLabel" style="width:700px">
            <div class="offcanvas-header btn-list">
                <h2 class="offcanvas-title" id="offcanvasStartLabel">
                    수강 바구니
                </h2>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                    ref="closeModal"></button>
            </div>
            <div class="offcanvas-body">
                <!-- <div v-if="loading">
                    <div class="container container-slim py-4">
                        <div class="text-center">
                            <div class="text-muted mb-3">loading</div>
                            <div class="progress progress-sm">
                                <div class="progress-bar progress-bar-indeterminate"></div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="card">
                    <div class="card-body">
                        <form class="cmp-update-form">
                            <!-- 상세보기 form -->

                            <div class="form-group mb-3 row">
                                <label class="form-label col-form-label">


                                    <div class="mb-3">
                                        <label class="form-label">학수번호</label>
                                        <input type="text" class="form-control" name="example-text-input"
                                            v-model="updateData.hak" readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">이름</label>
                                        <input type="text" class="form-control" name="example-password-input"
                                            v-model="updateData.name" readonly />
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-label">영역</div>
                                        <select v-model="updateData.code" class="form-select">
                                            <option value="전공필수">전공필수</option>
                                            <option value="전공선택">전공선택</option>
                                            <option value="교양필수">교양필수</option>
                                            <option value="교양선택">교양선택</option>
                                            <option value="핵심교양 1">핵심교양 1</option>
                                            <option value="핵심교양 2">핵심교양 2</option>
                                            <option value="핵심교양 3">핵심교양 3</option>
                                            <option value="핵심교양 4">핵심교양 4</option>
                                            <option value="핵심교양 5">핵심교양 5</option>
                                            <option value="핵심교양 6">핵심교양 6</option>
                                            <option value="창의영역">창의영역</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-label">학점</div>
                                        <select v-model="updateData.myGrade" class="form-select">
                                            <option value="A+">A+</option>
                                            <option value="A0">A0</option>
                                            <option value="B+">B+</option>
                                            <option value="B0">B0</option>
                                            <option value="C+">C+</option>
                                            <option value="C0">C0</option>
                                            <option value="D+">D+</option>
                                            <option value="D0">D0</option>
                                            <option value="P">P</option>
                                            <option value="F">F</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-label">이수학기</div>
                                        <select v-model="updateData.myYear" class="form-select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>

                                    <div v-if="modalType == 'add'" @click="addItem(updateData)" class="btn btn-sm">장바구니에
                                        담기
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-basket-plus">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M17 10l-2 -6" />
                                            <path d="M7 10l2 -6" />
                                            <path
                                                d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.359 2.043" />
                                            <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                            <path d="M16 19h6" />
                                            <path d="M19 16v6" />
                                        </svg>
                                    </div>
                                    <div v-else @click="updateItem(modalType,updateData)" class="btn btn-sm">수정하기
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-basket-plus">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M17 10l-2 -6" />
                                            <path d="M7 10l2 -6" />
                                            <path
                                                d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.359 2.043" />
                                            <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                            <path d="M16 19h6" />
                                            <path d="M19 16v6" />
                                        </svg>

                                    </div>
                                </label>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- 끝 -->

        <!-- ref 버튼 클릭 트리서를 이용하여 페이지 열기 -->
        <div style="display:none">
            <a data-bs-toggle="offcanvas" href="#updateModal" ref="updateModal" aria-controls="offcanvasStart">생성
                offcanvas</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        courseData: {},
        updateItem: Function,
        addItem: Function,
        modalType: String
    },
    data() {
        return {
            updateData: {

            },
        }
    },
    mounted() {

    },
    methods: {
        clickModal: function () {
            this.$refs.updateModal.click();
        },
        closeModal: function () {
            this.$refs.closeModal.click();
        },
    },
    watch: {
        courseData(val) {
            this.updateData = val;
        }
    }
}
</script>