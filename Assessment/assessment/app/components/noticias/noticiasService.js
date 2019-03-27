(function() {

  angular.module('myApp')
  .service('NoticiasService', ['$resource', function($resource) {
    let Resource = $resource('http://104.248.235.252:3003/api/noticias/:id',
                             {id:'@id'},
			    {update:{method:'PUT'}});
    this.noticias = Resource.query();
    this.getNoticias = () => {
      return this.noticias;
    };
    this.criarNoticia = (noticia) => {
      let newNoticia = new Resource()
      newNoticia.titulo = noticia.titulo
      newNoticia.mensagem = noticia.mensagem
      newNoticia.imagem = noticia.imagem
      newNoticia.$save()
      this.noticias.push(newNoticia)
    };

    this.getbyid = (id) => {

      console.log('get by id: ',id)
      let noticia = this.noticias.find((n) => n.id == id)
      console.log("noticia: ",noticia)
      return noticia
    }
    this.atualizarNoticia = (noticia) => {
      noticia.$update();
    }
    this.deletarNoticia = (noticia) =>{
      console.log('delete')
      noticia.$delete();
    }
  }])
})(); 
