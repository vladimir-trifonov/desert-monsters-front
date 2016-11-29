import { Pipe, PipeTransform } from '@angular/core';
import { layoutPaths } from '../../../theme';
import { AuthService } from '../../../components/auth/auth.service';

@Pipe({ name: 'baProfilePicture' })
export class BaProfilePicturePipe implements PipeTransform {
  constructor(private authService: AuthService) { }

  transform(input: string, ext = 'png'): string {
    let defaultPhoto = layoutPaths.images.profile + 'no-photo' + '.' + ext;

    switch (input) {
      case 'user':
        let avatar = this.authService.getUserAvatar();
        return avatar ? avatar : defaultPhoto;
      default:
        return defaultPhoto;
    }
  }
}
