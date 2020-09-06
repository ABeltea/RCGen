import { Component, Directive, ComponentFactoryResolver, ViewContainerRef, Renderer2, ElementRef, OnInit } from '@angular/core';
import { MyDynamicComponent } from './my-dynamic.component';


@Directive({
    selector: '[myDynamicDirective]'
})
export class MyDynamicDirective implements OnInit {
    constructor(
        private cfResolver: ComponentFactoryResolver,
        public vcRef: ViewContainerRef,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
      this.appendComponent();
    }

    public appendComponent() {
        const factory =  this.cfResolver.resolveComponentFactory(MyDynamicComponent);
        const componentRef = this.vcRef.createComponent(factory);
        this.renderer.appendChild(
           this.vcRef.element.nativeElement,
           componentRef.injector.get(MyDynamicComponent).elRef.nativeElement
        );
    }
}