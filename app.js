const MyApp = {
    data (){
        return {
            name:"",
            personagens: [],
        }
    },
    mounted() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => (this.personagens = data.results))
    },
    methods: {
        search() {
            fetch(`https://rickandmortyapi.com/api/character?name=${this.name}`)
                .then((response) => response.json())
                .then((data) => (this.personagens = data.results))

        }
    }
}
  
  Vue.createApp(MyApp).mount("#app");
