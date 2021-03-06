import { Routes, CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'owner',
    component: OwnerComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];