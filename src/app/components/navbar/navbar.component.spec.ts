import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('E-commerce Navbar', () => {
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(titleElement.textContent).toContain('E-commerce Navbar');
  });

  it('should render navigation options', () => {
    component.navbarText = {
      title: 'E-commerce Navbar',
      options: [
        {
          id: 1,
          description: 'Inicio',
        },
        {
          id: 2,
          description: 'Noticias',
        },
        {
          id: 3,
          description: 'Productos',
        },
        {
          id: 4,
          description: 'Videos',
        },    {
          id: 5,
          description: 'Conocenos',
        }
      ]
    };

    fixture.detectChanges();

    const optionElements: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('li');
    expect(optionElements.length).toBe(5);
    expect(optionElements[0].textContent).toContain('Inicio');
    expect(optionElements[1].textContent).toContain('Noticias');
    expect(optionElements[2].textContent).toContain('Productos');
    expect(optionElements[3].textContent).toContain('Videos');
    expect(optionElements[4].textContent).toContain('Conocenos');

  });
});
