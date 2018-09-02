import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { AuthenticationService } from '../../services/authentication.service';


@NgModule({
    imports: [RouterModule,
        CommonModule
    ],
    declarations: [NavbarComponent],
    providers:[
        AuthenticationService
    ],
    exports: [NavbarComponent]
})

export class NavbarModule { }