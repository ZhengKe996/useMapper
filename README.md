#### 基于Vuex mapState mapGetters 封装的一个方法，使用方法:

```js
import { useState } from '../useState'
 
setup(){
	const storeState = useState(['xx','yy','zz'.....])

	retrun {
		...storeState
	}
}
```

