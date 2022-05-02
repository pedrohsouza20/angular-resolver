import { TestBed } from '@angular/core/testing';

import { TodosResolver } from './todos.resolver';

describe('TodosResolver', () => {
  let resolver: TodosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TodosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
