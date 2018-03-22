<template>
    <div id="app">

        <form>
            <table width=500 border="1" align="center" class="margin-top" style="bgcolor:skyblue">
                <th align="center" colspan="2">
                    <h2 align="center">REGISTRATION </h2>
                </th>
                <tr align="center">
                    <td>UserName:</td>
                    <td><input type="text" v-model="User.userName" required pattern="^[a-zA-Z][a-zA-Z]{1,20}$"></input>
                    </td>
                </tr>
                <tr align="center">
                    <td>Email:</td>
                    <td><input type="email" v-model="User.email" required></input>
                    </td>
                </tr>
                <tr align="center">
                    <td>Password:</td>
                    <td><input type="password" v-model="User.password" required> </input>
                    </td>
                </tr>
                <tr align="center">
                    <td>MobileNo:</td>
                    <td><input type="tel" v-model="User.userMobileNumber" maxlength="10" minlength="10" pattern="[7-9][0-9]{9}" required> </input>
                    </td>
                </tr>
                <tr align="center">
                    <td>City:</td>
                    <td><input type="text" v-model="User.userCity" pattern="^[a-zA-Z][a-zA-Z]{1,15}$" required> </input>
                    </td>
                </tr>
                <tr align="center">
                    <td>zipcode:</td>
                    <td><input type="text" v-model="User.zipcode" pattern="^[1-9][0-9]{5}$" required> </input>
                    </td>
                </tr>
                <tr align="center">
                    <td colspan="2"><input type="button" value="REGISTER" @click="postData()"></input>
                    </td>
                </tr>

            </table>
        </form>
    </div>
</template>

<script>
export default {



    data() {

        return {
            User: {
                userName: '',
                email: '',
                password: '',
                userMobileNumber: '',
                userCity: '',
                zipcode: ''
            },
            someData: {},
            status: true,
            registered: false
        }

    },

    methods: {

        postData() {
            this.$http.post('http://localhost:8081/saveuser',  this.User).then(function(response) {               
                this.registered = true
                console.log(this.registered)
                alert("Succesfully registered!!!")
                this.$router.push({ path: '/' });
              //  console.log(this.someData)
            }, function(response) {
                // Error
                console.log(response.data)
            });
           
           
        }
    },

    created() { },

    computed: {}

}
</script>

<style>
.widthoftext {

    width: 350px
}



.margin-top {

    margin-top: 200px
}



.textcolor {

    text-decoration-colore: white;
}
</style>