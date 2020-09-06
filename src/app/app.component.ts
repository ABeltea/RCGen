import {Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormControl} from '@angular/forms';
import { Directive, ComponentFactoryResolver, ViewContainerRef, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selected = new FormControl(0);
  
  public tab(event, value) {    
      this.selected.setValue(value);
      console.log(value)
  }

  public tabChange($event) {
    this.selected.setValue($event.index);
      console.log($event.index)
  }

  /* public routes: [
    {
      icon: 'home',
      route: '.',
      title: 'Home',
    }, 
    {
      icon: 'library_books',
      route: '.',
      title: 'Random',
    }, 
    {
      icon: 'color_lens',
      route: '.',
      title: 'History',
    }, 
    {
      icon: 'view_quilt',
      route: '.',
      title: 'Saves',
    }, 
    {
      icon: 'picture_in_picture',
      route: '.',
      title: 'About',
    },
  ];*/
}