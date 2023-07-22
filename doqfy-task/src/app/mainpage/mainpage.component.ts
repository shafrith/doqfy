import { Component, OnInit } from '@angular/core';
import { DoqfyService } from '../../services/doqfy.service';
import { lastValueFrom } from 'rxjs';
import { ECount, FrequentlyUsed, OrderDetails } from 'src/models/doqfy-model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  frequentUsed!: FrequentlyUsed[];
  orderDetails!: OrderDetails[];
  eCount!: ECount[];
  data: any;
  options: any;

  constructor(private service: DoqfyService) {}

  private getFrequentlyUsed(): void {
    lastValueFrom(this.service.getFrequentlyUsed()).then(
      (result: FrequentlyUsed[]) => {
        this.frequentUsed = result;
      }
    );
  }

  private getOrderDetails(): void {
    lastValueFrom(this.service.getOrderDetails()).then(
      (result: OrderDetails[]) => {
        this.orderDetails = result;
      }
    );
  }

  private getEcount(): void {
    lastValueFrom(this.service.getEcount()).then((result: ECount[]) => {
      this.eCount = result;

      this.data = {
        labels: ['Initiated', 'Pending', 'Signed', 'Expired'],
        datasets: [
          {
            data: [100, 20, 20, 20],
            backgroundColor: ['#e6e7eb', '#ead0fd', '#b270ec', '#612e86'],
            hoverBackgroundColor: ['#e6e7eb', '#ead0fd', '#b270ec', '#612e86'],
          },
        ],
      };

      this.options = {
        cutout: '80%',
      };
    });
  }

  ngOnInit(): void {
    this.getFrequentlyUsed();
    this.getOrderDetails();
    this.getEcount();
  }
}
