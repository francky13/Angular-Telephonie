import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

   formOption (use_authorization = false) {
    const options = {
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    return options;
}
}
