import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

export type Provider = 'github' | 'google';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'app-btn-providers',
  templateUrl: './btn-providers.html'
})
export class ButtonProviders {
  @Input() isLogin = false;

  private _authService = inject(AuthService);
  private _router = inject(Router);

  providerAction(provider: Provider): void {
    if (provider === 'google') {
      this.signUpWithGoogle();
    } else {
      this.signUpWithGithub();
    }
  }

  async signUpWithGoogle(): Promise<void> {
    try {
      const result = await this._authService.signInWithGoogleProvider();
      this._router.navigateByUrl('/');
    } catch (error) {
    }
  }

  async signUpWithGithub(): Promise<void> {
    try {
      const result = await this._authService.signInWithGithubProvider();
      this._router.navigateByUrl('/');
    } catch (error) {
    }
  }
}
