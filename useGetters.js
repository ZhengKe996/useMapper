import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

export function useState (moduleName, mapper) {
    let mapperFunction = mapGetters
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFunction = createNamespacedHelpers(moduleName).mapGetters
    } else {
        mapper = moduleName
    }
    return useMapper(mapper, mapperFunction)
}

