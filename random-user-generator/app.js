
const App = {
    
    data () {
        return {
            name: 'Quyum Kehinde',
            job: 'Web Developer',
            gender: 'male',
            email: 'kehindequyum@gmail.com',
            image: 'images/person-1.jpg'
        }
    },
    methods: {
        generate () {
            fetch("https://randomuser.me/api/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const { results } = data;
                const user = results[0]
                console.log(user)
                this.name = user.name.first + " " + user.name.last;
                this.email = user.email;
                this.gender = user.gender;
                this.image = user.picture.large;
            })   
            
            
           
        }
    }
}
Vue.createApp(App).mount("#root");