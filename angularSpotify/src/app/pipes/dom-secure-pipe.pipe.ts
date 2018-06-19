import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'domSecure'
})
export class DomSecurePipePipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){

  }
  transform(value: string, url: String): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value )
  }

}

