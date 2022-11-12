import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  constructor() { }

  bigChart():any{
    return [{
      name: 'pc',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'tele',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'x',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'y',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Z',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }
  cards(): any {
    return [71, 78, 39, 66];
  }

  pieChart():any {
    return [{
      type: 'pie',
      name: 'Share',
      data: [
          ['Samsung', 23],
          ['Apple', 18],
          {
              name: 'Xiaomi',
              y: 12,
              sliced: true,
              selected: true
          },
          ['Oppo*', 9],
          ['Vivo', 8],
          ['Others', 30]
      ]
  }];
  }
}
