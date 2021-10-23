import { mapState, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

export function useState (moduleName, mapper) {
    let mapperFunction = mapState
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFunction = createNamespacedHelpers(moduleName).mapState
    } else {
        mapper = moduleName
    }

    return useMapper(mapper, mapperFunction)
}

