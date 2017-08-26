import Home from './Home.vue';

import AddisonCentral from './components/schoolsName/AddisonCentral.vue';
import BeemanElementa from './components/schoolsName/BeemanElementa.vue';
import BinghamMemoria from './components/schoolsName/BinghamMemoria.vue';
import BridportCentra from './components/schoolsName/BridportCentra.vue';
import BristolElement from './components/schoolsName/BristolElement.vue';
import FerrisburghCen from './components/schoolsName/FerrisburghCen.vue';
import LeicesterCentr from './components/schoolsName/LeicesterCentr.vue';


export const routes = [
    { path: '', component: Home },
    { path: '/addisoncentral', component: AddisonCentral },
    { path: '/beemanelementa', component: BeemanElementa },
    { path: '/binghammemoria', component: BinghamMemoria },
    { path: '/bridportcentra', component: BridportCentra },
    { path: '/bristolelement', component: BristolElement },
    { path: '/ferrisburghcen', component: FerrisburghCen },
    { path: '/leicestercentr', component: LeicesterCentr }
]