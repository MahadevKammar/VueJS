import login from './userComponents/Login.vue'
import Register from './userComponents/Registration';
import usertask from './userComponents/UserTask.vue';

export const routes=[
    {path:"/",component:login},
    {path:"/register",component:Register},
    {path:"/usertask/:userId",component:usertask, props: true}

]