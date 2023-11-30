import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the copyright text', () => {
    const copyrightElement = fixture.debugElement.query(By.css('.m-b-footer'));
    expect(copyrightElement.nativeElement.textContent).toEqual(
      'HotPizza - 2023, todos os direitos reservados.'
    );
  });

  it('should render the developer link', () => {
    const developerLinkElement = fixture.debugElement.query(
      By.css('a[href="#"]')
    );
    expect(developerLinkElement.nativeElement.textContent).toEqual(
      'Pedro & Kaue'
    );
  });

  it('should apply the correct styles to the footer', () => {
    const footerElement = fixture.debugElement.query(
      By.css('footer.main_footer')
    );
    expect(footerElement.nativeElement.style.position).toEqual('fixed');
    expect(footerElement.nativeElement.style.bottom).toEqual('0');
    expect(footerElement.nativeElement.style.backgroundColor).toEqual(
      '#ffffff'
    );
    expect(footerElement.nativeElement.style.color).toEqual('#fff');
    expect(footerElement.nativeElement.style.fontSize).toEqual('0.875em');
    expect(footerElement.nativeElement.style.width).toEqual('100%');
  });

  it('should apply the correct styles to the copyright text', () => {
    const copyrightElement = fixture.debugElement.query(By.css('.m-b-footer'));
    expect(copyrightElement.nativeElement.style.fontFamily).toEqual(
      '"Open Sans", sans-serif'
    );
    expect(copyrightElement.nativeElement.style.fontSize).toEqual('1em');
    expect(copyrightElement.nativeElement.style.color).toEqual('#505050');
    expect(copyrightElement.nativeElement.style.height).toEqual('20px');
  });

  it('should apply the correct styles to the developer link', () => {
    const developerLinkElement = fixture.debugElement.query(
      By.css('a[href="#"]')
    );
    expect(developerLinkElement.nativeElement.style.color).toEqual('#e82626');
    expect(developerLinkElement.nativeElement.style.textDecoration).toEqual(
      'none'
    );
  });

  it('should apply the correct hover styles to the developer link', () => {
    const developerLinkElement = fixture.debugElement.query(
      By.css('a[href="#"]')
    );
    developerLinkElement.nativeElement.dispatchEvent(
      new MouseEvent('mouseover')
    );
    fixture.detectChanges();
    expect(developerLinkElement.nativeElement.style.textDecoration).toEqual(
      'underline'
    );
  });
});
