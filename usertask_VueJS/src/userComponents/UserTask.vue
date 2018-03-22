<template>
    <div id="app">

        <table width=1300 border="0" align="center" class="margin-top" style="bgcolor:skyblue">
            <th align="center" colspan="2" border="0" bgcolor="87ceeb">
                <h2 align="center">USER TASK </h2>
            </th>
            <tr>
                <td width="250px" bgcolor="#D3D3D3">User : {{User.userName}}</td>
                <td width="1070px" bgcolor="#DCDCDC"></td>
            </tr>
            <tr>
                <td bgcolor="#D3D3D3">Email : {{User.email}}</td>
                <td rowspan="1" bgcolor="#DCDCDC"></td>
            </tr>
            <tr bgcolor="#DCDCDC">
                <td bgcolor="#D3D3D3">Mobile No : {{User.userMobileNumber}}</td>
                <td align="center" ><label>Your todays tasks:</label>
                    <select width="350px" v-model="singleTask" align="center">
                        <option v-for="sTask in list" v-bind:value="sTask.taskName">
                           Task Name: {{ sTask.taskName }} and End date is {{sTask.endDate}}
                        </option>

                    </select>
                   
                </td>
            </tr>
            <tr>
                <td bgcolor="#D3D3D3">City : {{User.userCity}}</td>
                <td rowspan="2" bgcolor="#DCDCDC"></td>
            </tr>
            <tr>
                <td bgcolor="#D3D3D3">ZipCode : {{User.zipcode}}</td>
                <td bgcolor="#DCDCDC"></td>
            </tr>

        </table>
       
    </div>
</template>

<script>
export default {

    props: ['userId'],

    data() {

        return {
            email: '',
            password: '',
            someData: {},
            status: true,
            User: {
                userName: '',
                email: '',
                password: '',
                userMobileNumber: '',
                userCity: '',
                zipcode: ''
            },
            usertasks: [],
            singleTask: '',
            data: {
                list1: null
            },
            list:[]
        }

    },

    methods: {
        getId() {
            return this.$router.params.userID;
        },

        getData() {

            this.$http.get(`http://localhost:8081/login?email=${this.email}&password=${this.password}`).then(response => {
                this.usertasks = response.data;
                for (var key in this.usertasks) {
                    console.log(key.taskName);
                }
                this.status = true
                //  console.log(this.someData)
                alert("Valid User")
            }, response => {
                this.status = false
                console.log("Error")
            })
        }
    },

    created() {

        this.$http.get(`http://localhost:8081/usertask/secured/gettask/${this.$route.params.userId}`).then(response => {
            this.list = response.data;
            for (var key in this.list) {
                    console.log(key.taskName);
                }
        }, response => {
            this.status = false;
            console.log("Error");
             this.$router.push({ path: `/`});
        });

        this.$http.get(`http://localhost:8081/getuser/${this.$route.params.userId}`).then(response => {
            this.User = response.body;
            console.log(this.someData);
        }, response => {
            this.status = false;
            console.log("Error");
        });
    },

    computed: {}

}
</script>

<style>

</style>