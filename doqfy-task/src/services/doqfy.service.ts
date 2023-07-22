import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import frequentlyUsed from '../mockdata/frequently-used.json';
import orderDetails from '../mockdata/order-details.json';
import eCount from '../mockdata/e-count.json';
import pendingAction from '../mockdata/pending-action.json';
import {
  ECount,
  FrequentlyUsed,
  OrderDetails,
  PendingAction,
} from 'src/models/doqfy-model';

@Injectable({
  providedIn: 'root',
})
export class DoqfyService {
  constructor() {}

  getFrequentlyUsed(): Observable<FrequentlyUsed[]> {
    return of(frequentlyUsed);
  }

  getOrderDetails(): Observable<OrderDetails[]> {
    return of(orderDetails);
  }

  getEcount(): Observable<ECount[]> {
    return of(eCount);
  }

  getPendingAction(): Observable<PendingAction[]> {
    return of(pendingAction);
  }
}
