import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/i18n/index.js' // 引入

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Button from 'primevue/button'
import Column from 'primevue/column'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import Slider from 'primevue/slider'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tree from 'primevue/tree'
import Checkbox from 'primevue/checkbox'
import Breadcrumb from 'primevue/breadcrumb'
import MultiSelect from 'primevue/multiselect'
import Paginator from 'primevue/paginator'
import Galleria from 'primevue/galleria'
import RadioButton from 'primevue/radiobutton'
import InputNumber from 'primevue/inputnumber'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(fas, far, fab);

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(PrimeVue, { ripple: true })

app.component('InputText', InputText);
app.component('DataTable', DataTable)
app.component('Button', Button)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('Column', Column)
app.component('Rating', Rating)
app.component('Tag', Tag)
app.component('Slider', Slider)
app.component('Card', Card)
app.component('Divider', Divider)
app.component('Tree', Tree)
app.component('Checkbox', Checkbox)
app.component('Breadcrumb', Breadcrumb)
app.component('MultiSelect', MultiSelect)
app.component('Paginator', Paginator)
app.component('Galleria', Galleria)
app.component('RadioButton', RadioButton)
app.component('InputNumber', InputNumber)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Avatar', Avatar)
app.component('AvatarGroup', AvatarGroup)

app.mount('#app')

//backend
