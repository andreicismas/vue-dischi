const app = new Vue({
    el: '#app',
    data: {
        listAxios:[],
        generInclud:[],
        genre_selected:"",
    },
    mounted() {

            // chiamata api
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(resp => {
                this.listAxios = resp.data.response
                console.log(this.listAxios)
                
                // recupero il genere musica
                this.listAxios.forEach(disc => {
                    if(!this.generInclud.includes(disc.genre)) {
                        this.generInclud.push(disc.genre);
                        console.log(this.generInclud);
                    }
                });
            });
       

    }
});