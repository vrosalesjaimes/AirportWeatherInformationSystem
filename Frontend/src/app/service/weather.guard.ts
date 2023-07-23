import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export var weatherGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  let currentUrl = router.url;
  let isFromPanel = currentUrl.indexOf('/panel') == -1 ? false : true;

  if(isFromPanel){
    return true;
  } else{
    return router.parseUrl('/panel');
  }
};
