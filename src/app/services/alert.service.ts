import { Injectable } from '@angular/core';

import swal from 'sweetalert2';

@Injectable()
export class AlertService {

  constructor() { }
  
  test(){
    swal('Hello world!');
  }
}
