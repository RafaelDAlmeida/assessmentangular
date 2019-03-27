(function() {

  
  angular.module('myApp')
    .component('noticiaEdit', {
    	bindings: {
        onChange: "&",
        noticia: '<'
      },
      controller: ComponentController,
      template: `<div class="form">
     <form>
      
      <div class="form-group">
        <label for="exampleInputPassword1">Titulo</label>
        <input ng-model="$ctrl.noticia.titulo" type="text" class="form-control" id="titulo" placeholder="Enter Titulo">
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">URL</label>
        <input ng-model="$ctrl.noticia.imagem" type="text" class="form-control-file" id="exampleFormControlFile1">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea ng-model="$ctrl.noticia.mensagem" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button ng-click="$ctrl.salvar()" class="btn btn-primary">Submit</button>
    </form>
  </div>`
    });


  function ComponentController() {
      this.salvar = function(){
        this.onChange({noticia: this.noticia})
      }
  }

})();