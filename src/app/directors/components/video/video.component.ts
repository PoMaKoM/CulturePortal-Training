import { Video } from './../../../shared/models/details-info-director.model';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() public director: InfoDirector;
  public video: Video;
  public link: string;
  public title: string;
  public screenshot: string;

  constructor() {}

  private parceMediaURL(media: HTMLMediaElement): string {
    const regexp: RegExp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)/;
    const url = media.src;
    const match = url.match(regexp);
    return match[1];
  }

  private generateURL(id: string): string {
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }

  private createIframe(id: string): Node {
    const iframe = document.createElement('iframe');
    iframe.classList.add('video-media');
    iframe.setAttribute('allowfulscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('src', this.generateURL(id));
    iframe.setAttribute(
      'style',
      'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none'
    );

    return iframe;
  }

  public setupVideo() {
    const link: Element = document.querySelector('.video-link');
    const button: Element = document.querySelector('.video-button');
    const media: HTMLMediaElement = document.querySelector('.video-media');
    const id: string = this.parceMediaURL(media);

    const iframe: Node = this.createIframe(id);
    link.remove();
    button.remove();
    document.querySelector('.video').appendChild(iframe);
    link.removeAttribute('href');
  }

  public ngOnInit(): void {}
  public ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.director.currentValue) {
      this.video = changes.director.currentValue.en.video;
      this.link = this.video.link;
      this.title = this.video.title;
      this.screenshot = this.video.screenshot;
    }
  }
}
