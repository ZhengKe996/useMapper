import { useStore, mapState } from 'vuex'
import { computed } from 'vue'

export function useState (mapper) {
    // 拿到store对象
    const store = useStore()

    // 获取到对应对象的functions：{xx:function,yy:function....}
    const storeFunctions = mapState(mapper)

    // 对数据进行转换
    const state = {}
    Object.keys(storeFunctions).forEach(functionKey => {
        state[functionKey] = computed(storeFunctions[functionKey].bind({ $store: store }))
    })
    return state
}


/**
 * 使用方式：
 *      import { useState } from '../useState'
 *
 *      setup(){
 *          const storeState = useState(['xx','yy','zz'.....])
 *
 *          retrun {
 *             ...storeState
 *         }
 *      }
 */

