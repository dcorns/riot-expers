<hello-form>
    <form  onsubmit={sayHello}>
    <input type="text" name="greet">
    <button>Say Hello!</button>
    </form>
    <!--show makes contents visible if it evaluates to true-->
    <hello-world show={this.person.name} greet={this.person.name}></hello-world>
<script>
    function Person(name){
        this.name = name;
        riot.observable(this);
        this.on('change', function(){
            console.log('Person instance name changed!', this.name);
        })
    }
    this.person = new Person('Tex');

    riot.observable(this.greet);
    this.greet.on('submitted', function(){
       this.value = '';
    });

    this.sayHello = function(){
        this.person.name = this.greet.value;
        this.greet.trigger('submitted');
        this.person.trigger('change');
    }
</script>


</hello-form>