import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[topRated]'
})
export class TopRatedDirective implements OnInit {

	@Input('topRated') rate!: number;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		if (this.rate === 10) {
			this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
		}
	}
}
