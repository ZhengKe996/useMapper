import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

export function useState (mapper) {
    let mapperFunction = mapGetters
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFunction = createNamespacedHelpers(moduleName)
    }
    return useMapper(mapper, mapperFunction)
}

