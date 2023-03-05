import { Component } from '@angular/core';

interface IImgInfo {
  title: string;
  img: string;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pages';
  currentPage = 0;

  infoImgList: Array<IImgInfo> = [
    {
      title: 'Title 1',
      img: 'https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=600',
      isActive: true,
    },
    {
      title: 'Title 2',
      img: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600',
      isActive: false,
    },
    {
      title: 'Title 3',
      img: 'https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=600',
      isActive: false,
    },
    {
      title: 'Title 4',
      img: 'https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=600',
      isActive: false,
    },
    {
      title: 'Title 5',
      img: 'https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=600',
      isActive: false,
    },
  ];
}
