import EventEmitter from 'eventemitter3';

export const success ='success';
export const warn ='warn';
export const info ='success';
export const error ='error';

export class AlertHelper {
  static instance;
  static emitter;

  constructor(){
    this.emitter = new EventEmitter();
  }
  
  getEmitter(){
    return this.emitter;
  }

  static getInstance(){
    if(this.instance == null){
      this.instance = new AlertHelper();
    }
    return this.instance;
  }

  handler(type,message) {
     this.emitter.emit('alert', { type: type, message: message });  
  }
  
}



  



