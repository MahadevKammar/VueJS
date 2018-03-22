<template>
    <div id="app">

        <form @submit.prevent="">

            <table width=500 border="2" align="center" class="margin-top" style="bgcolor:skyblue">
                <th align="center" colspan="2" border="0">
                    <h2>LOGIN </h2>
                </th>
                <tr>

                    <td > <label for="email">Email </label></td>

                    <td align="center">
                        <div class="input" :class="{invalid: $v.email.$error}"> 
                            <input type="email" @blur="$v.email.$touch()" v-model="email" required></input>
                        </div>                       
                    </td>

                </tr>
                <tr>
                    <td>Password:</td>
                    <td align="center"><input type="password" v-model="password" required> </input>
                    </td>
                </tr>
                <tr align="center">
                    <td colspan="2"><input type="button" value="LOGIN" @click="getData()"  :disabled="$v.$invalid"></input>
                    </td>
                </tr>
                <tr v-if="!status" align="center" style="color:red">
                    <td colspan="2">Email or password is wrong </td>
                </tr>
            </table>

        </form>

    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
    data() {

        return {
            email:  '',
            password: '',
            someData: {},
            status: true,
            userId: 0
        }

    },

    methods: {

        getData() {

            this.$http.get(`http://localhost:8081/login?email=${this.email}&password=${this.password}`).then(response => {
                this.someData = response.body;
                this.status = true
                console.log(this.someData.userId)
                alert("Valid User")
                this.$router.push({ path: `/usertask/${this.someData.userId}` });
            }, response => {
                this.status = false
                console.log("Error")
            })
        }
    },

    created() {

    },

    computed: {},
    validations: {
        email: {
            required,
            email
        }
    }
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

.input.invalid input {
    border: 2px solid red;
    background-color: #ffc9aa;
}
</style>