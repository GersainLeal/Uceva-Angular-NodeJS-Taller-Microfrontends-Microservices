import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { STOCK_MOCK } from '../../mocks/stock.mocks';
import { StockTableComponent } from './stock-table.component';

describe('StockTableComponent', () => {
  let component: StockTableComponent;
  let fixture: ComponentFixture<StockTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada producto', () => {
    component.stock = STOCK_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.stock.length);
  });

  it('debería mostrar los datos del producto en cada columna', () => {
    component.stock = STOCK_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const item = component.stock[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(item.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(item.productName);
      expect(columns[2].nativeElement.textContent.trim()).toBe(item.sku);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(item.quantity));
      expect(columns[4].nativeElement.textContent.trim()).toBe(item.warehouse);
      expect(columns[5].nativeElement.textContent.trim()).toBe(item.status);
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Disponible']).toBe('success');
    expect(component.statusMap['Bajo stock']).toBe('warning');
    expect(component.statusMap['Agotado']).toBe('danger');
  });
});
