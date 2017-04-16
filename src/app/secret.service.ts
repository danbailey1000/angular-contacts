import { Injectable } from '@angular/core';

@Injectable()
export class SecretService {
    public get adalConfig(): any {
        return {
            tenant: 'danbailey1000msn.onmicrosoft.com',
            clientId: '4fb4f3c4-23b1-4e2f-a3b1-a79698310dc0',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}
