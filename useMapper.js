
import { useStore } from 'vuex'
import { computed } from 'vue'

export function useMapper (mapper, mapFunction) {
    // 拿到store对象
    const store = useStore()

    // 获取到对应对象的functions：{xx:function,yy:function....}
    const storeFunctions = mapFunction(mapper)

    // 对数据进行转换
    const state = {}
    Object.keys(storeFunctions).forEach(functionKey => {
        state[functionKey] = computed(storeFunctions[functionKey].bind({ $store: store }))
    })
    return state
}

