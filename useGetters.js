import { useStore, mapGetters } from 'vuex'
import { computed } from 'vue'

export function useGetters (mapper) {
    // 拿到store对象
    const store = useStore()

    // 获取到对应对象的functions：{xx:function,yy:function....}
    const storeFunctions = mapGetters(mapper)

    // 对数据进行转换
    const getters = {}
    Object.keys(storeFunctions).forEach(functionKey => {
        getters[functionKey] = computed(storeFunctions[functionKey].bind({ $store: store }))
    })
    return getters
}

