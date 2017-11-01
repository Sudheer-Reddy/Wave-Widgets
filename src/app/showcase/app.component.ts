import { Component } from '@angular/core';
import { PictureComponent } from '../components/picture/picture.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  labelCaption: string = 'Label';
  labelClasses: string = 'text-danger';
  showLabel: boolean = true;
  captionWidth: string = '300px';
  captionHeight: string = '10px';

  showControls: boolean = true;
  enableLoop: boolean = false;
  audioUrl: string = 'https://www.w3schools.com/html/horse.mp3';
  audioWidth: string = '300px';
  audioHeight: string = '30px';
  muteAudio: boolean;

  samplePicUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  pictureWidth: string = '100px';
  pictureHeight: string = '100px';

  buttonCaption: string = 'Button';
  buttonClasses: string = 'btn-primary';
  buttonIconClass: string = 'glyphicon glyphicon-plus';
  buttonBadgeValue: string = 'New';

  anchorCaption: string = 'Link';
  anchorLink: string = 'www.google.com';
  anchorTarget: string = '_blank';
  anchorIconClass: string = 'glyphicon glyphicon-plus';

  iconCaption: string = 'Icon';
  iconClass: string = 'glyphicon glyphicon-plus';
  iconSize: string = '20px';
  iconPosition: string = 'right';
  iconColor: string = 'blue';

  imageData: string[] = [];

  imageClicked (data) {
    this.imageData.push(`Src: ${data.isolateScope.picturesource}`);
  }
}
