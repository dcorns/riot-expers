/**
 * index
 * Created by dcorns on 9/7/16
 * Copyright © 2016 Dale Corns
 */
///<reference path='../all.d.ts' />
'use strict';
import * as riot from 'riot';
require('../tags/hello-world.tag');
require('../tags/hello-form.tag');
document.addEventListener('DOMContentLoaded', () => {
    riot.mount("hello-world", { greet: "default no name" });
    riot.mount("hello-form");
    //Start Routing
    riot.route.start(true); //you can stop routing with riot.route.stop()
    riot.route.base('#!'); //change default routing prefix(#) to #! because we can
    //Restful Service routing
    riot.route((operation, a, b) => {
        let numA = parseInt(a, 10);
        let numB = parseInt(b, 10);
        switch (operation) {
            case 'add':
                console.log('add:', numA + numB); //  #!/add/5/4 (5+4)
                break;
            case 'multiply':
                console.log('multiply:' + numA * numB); //  #!/multiply/10/10 (10*10)
                break;
            default:
                console.log('Invalid operation'); // all unrecognized urls
                break;
        }
    });
    //specify a single route  #!/bugs
    riot.route('/bugs', () => {
        console.log('Looks like a bug!');
    });
    //specify a single route with parameters
    riot.route('/divide/*/*', (a, b) => {
        console.log(parseInt(a) / parseInt(b));
    });
    //specify a single route with query parameters
    riot.route('/powerup/..', () => {
        let params = riot.route.query();
        console.log(Math.pow(params.base, params.power));
    });
});
//# sourceMappingURL=index.js.map