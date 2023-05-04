import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { TokenStorageService } from "../services/token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';

export class AuthInterceptor {

    constructor(
        private token: TokenStorageService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = request;
        const token = this.token.getToken();
        if (token) {
            authRequest = request.clone({
                headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)
            });
        }
        return next.handle(authRequest);
    }



}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
