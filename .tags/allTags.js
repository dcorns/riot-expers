riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input id="greetname" type="text" name="greet"> <button>Say Hello!</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', '', '', function(opts) {
    this.sayHello = function(){
        this.greeting = this.greet.value;
        this.greet.value = '';
        this.greetname.trigger('fire');
    }.bind(this)
    this.greetname = document.getElementById('greetname');
    riot.observable(this.greetname);
    this.greetname.on('fire', function(){
        console.log('fire event fired');
    });

});
riot.tag2('hello-world', '<h3>Hello {opts.greet}</h3>', '', '', function(opts) {
});