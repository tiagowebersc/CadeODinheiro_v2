import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NbAuthService, NbAuthToken } from '@nebular/auth';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: NbAuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        const currentToken = this.authenticationService.getToken();
        let token: NbAuthToken;
        currentToken.subscribe(val => token = val);

        if (token.getValue()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token.getValue()}`,
                },
            });
        }

        return next.handle(request);
    }
}
