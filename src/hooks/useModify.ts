/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2022-04-25 18:44:07
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:02:53
 * @FilePath: /uniapp_template/src/hooks/useModify.ts
 * @Description: hooks - 从详情页面返回列表页面后，更新或者删除列表中的数据
 *
 * Copyright (c) 2022 by huangpengfei 784667332@qq.com, All Rights Reserved.
 */

import { onShow } from '@dcloudio/uni-app';
import { nextTick } from 'vue';

/**
 * 从详情页面返回列表页面后，更新或者删除列表中的数据
 * @param key ui.getStorageSync 中能获取到的数据，值是对象将会更新对应数据，值是字符串或者数值将会删除对应数据
 * @param setList 更新列表中的数据
 */
export function useModify(key: string, setList: any) {
    onShow(async () => {
        const item = uni.getStorageSync(key);
        await setList(item);
        nextTick(() => {
            uni.removeStorageSync(key);
        });
    });
}
