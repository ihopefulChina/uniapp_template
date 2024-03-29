/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-16 10:52:23
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-26 09:47:59
 * @FilePath: /uniapp_template/src/layout/pageContainer/useModal.ts
 * @Description: 全局Modal hooks
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ShowModalOptions } from './modal/type';

export const useModal = defineStore('modalStore', () => {
    const isShowModal = ref<boolean>(false);
    const modalParmas = ref<ShowModalOptions>();

    const showModal = (params?: ShowModalOptions) => {
        modalParmas.value = params;
        isShowModal.value = !!params;
    };

    return {
        showModal,
        isShowModal,
        modalParmas,
    };
});
