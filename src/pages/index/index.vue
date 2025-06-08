<template>
    <view class="page-view">
        <uv-navbar :left-icon="false" :fixed="false" title="KernelSU" :safeAreaInsetTop="false"/>
        
        <view class="content-view">
            <uv-form labelPosition="top" :model="form" labelWidth="256rpx" ref="formRef">
                <uv-form-item label="执行命令">
                    <uv-textarea v-model="form.cmd" height="300rpx"/>
                </uv-form-item>
                
                <uv-form-item label="输出结果">
                    <uv-textarea v-model="form.result" disabled height="500rpx"/>
                </uv-form-item>
            </uv-form>
            
            <uv-button type="primary" @click="execute">执行</uv-button>
        </view>
    
    
    </view>
</template>

<script setup>
import {ref} from 'vue'
import {exec} from 'kernelsu'

const form = ref({})

const execute = async () => {
    const res = await exec(form.value.cmd)
    if (res.errno === 0) {
        form.value.result = res.stdout.replaceAll('\\n', '\n')
    } else {
        form.value.result = res.stderr.replaceAll('\\n', '\n')
    }
}
</script>

<style>
.content-view {
    flex: 1;
    padding: 24rpx;
    box-sizing: border-box;
}

.page-view {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
