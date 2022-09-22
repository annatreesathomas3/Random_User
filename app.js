const app = Vue.createApp({
    data() {
        return {
            welcome: "Welcome to my Page",
            fname:'sam',
            lname:'smith',
            email:'sam@gmail.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()
            console.log(results);
            this.fname=results[0].name.first
            this.lname=results[0].name.last
            this.email=results[0].email
            this.gender=results[0].gender
            this.picture=results[0].picture.large

        }
    }
})
app.mount('#app')