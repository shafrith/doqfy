export interface ECount {
  heading: string;
  initiated: number;
  pending: number;
  signed: number;
  expired: number;
}

export interface FrequentlyUsed {
  heading: string;
  content: string;
}

export interface OrderDetails {
  numberOfOrders: number;
  orderStatus: string;
  growthPercent: string;
}

export interface PendingAction {
  heading: string;
  actionTime: string;
  content: string;
}
