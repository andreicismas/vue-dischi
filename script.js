const app = new Vue({
    el: '#app',
    data: {
        listAxios:[],
        generInclud:[],
    },
    mounted() {

            // chiamata api
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(resp => {
                this.listAxios = resp.data.response
                console.log(this.listAxios)
                
                // recupero il genere musica
                this.listAxios.forEach(disco => {
                    if(!this.generinclud.includes(disco.genre)) {
                        this.generinclud.push(disco.genre);
                        console.log(this.generinclud);
                    }
                });
            });
       

    }
});