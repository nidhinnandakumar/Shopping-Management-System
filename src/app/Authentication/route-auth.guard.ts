import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const routeAuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthenticationService).isloggedIn();
  return true;
};
