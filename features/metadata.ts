import 'reflect-metadata';

@controller
class Plane {
  color: string = 'blue';

  @get('/login')
  fly(): void {
    console.log('flying !!!');
  }
}

function get(path: string){
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for(let key in target.prototype){
    const path = Reflect.getMetadata('path', target.prototype, key);
    
  }
}


