<hello-form>
    <form  onsubmit={sayHello}>
    <input type="text" name="greet">
    <button>Say Hello!</button>
    </form>
    <h3>Hello {this.greeting}</h3>
    <script>
    this.sayHello = function(){
    this.greeting = this.greet.value;
    this.greet.value = '';
    }
    </script>
</hello-form>