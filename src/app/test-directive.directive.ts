import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective implements OnInit {
  constructor(private el: ElementRef) { }

  @Input() highlightColor: string;

  ngOnInit() {
    this.el.nativeElement.style.background = 'gray';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.textAlign = 'center';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highlight(this.highlightColor || 'gray');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
