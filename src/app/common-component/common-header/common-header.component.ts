import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router, Event as RouterEvent, RouterLink } from '@angular/router';
import { SettingsService, SidebarService } from 'src/app/core/core.index';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import { routes } from 'src/app/core/helpers/routes';
import * as Feather from 'feather-icons';
import { ServiceService } from 'src/app/auth/authservice/service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// import { CompanyService } from 'src/app/component/super-admin/services/company.service';

@Component({
  selector: 'app-common-header',
  standalone: true,
  imports: [CommonModule, RouterLink,MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {
  public routes = routes;
  activePath = '';
  showSearch = false;
  public changeLayout = '1';
  public darkTheme = false;
  public logoPath = '';
  public miniSidebar = false;
  elem = document.documentElement
  public addClass = false;
  data: any
  img: any
  role: any
  name: any
  doctorData: any =[]
  hospitalData: any =[]
  constructor(
    private Router: Router,
    private settings: SettingsService,
    private sidebar: SidebarService,
    private webStorage: WebstorgeService,
    private _profileData: ServiceService,
  ) {

    this.activePath = this.Router.url.split('/')[2];
    this.Router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[2];
      }
    });
    this.settings.changeLayout.subscribe((res: string) => {
      this.changeLayout = res;
    });
    this.sidebar.sideBarPosition.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.settings.changeTheme.subscribe((res: string) => {
      if (res == 'Dark') {
        this.darkTheme = true;
        this.logoPath = 'assets/img/logo-white.png';
      } else {
        this.darkTheme = false;
        this.logoPath = 'assets/img/logo.jpg';
      }
    });
  }

  ngOnInit(): void {
    console.log();
    Feather.replace();
    this.profile();

  }

  profile() {
    const admin_id = sessionStorage.getItem("admin_id");
    const superadmin_id = sessionStorage.getItem("superadmin_id");
    const client_id = sessionStorage.getItem("client_id");
    const user_id = sessionStorage.getItem("user_id");
    if (admin_id) {
      this._profileData.GetProfile(admin_id).subscribe({
        next: (res) => {
          this.data = res;
          this.role = this.data.role
          this.name = this.data.firstname + " " + this.data.lastname
        },
        error(err) {
          console.log(err)
        },
      })
    }
    else if (superadmin_id) {
      this._profileData.GetProfile(superadmin_id).subscribe({
        next: (res) => {
          this.data = res;
          this.img = this.data.image
          this.role = this.data.role
          this.name = "Super-Admin"
        },
        error(err) {
          console.log(err)
        },
      })
    }
    else if (client_id) {
      this._profileData.GetProfile(client_id).subscribe({
        next: (res) => {
          this.data = res;
          this.img = this.data.image
          this.img = 'https://logodix.com/logo/1956442.png';
          this.role = this.data.role
          this.name = "Patient"
        },
        error(err) {
          console.log(err)
        },
      })
    }
    else if (user_id) {
      this._profileData.GetProfile(user_id).subscribe({
        next: (res) => {
          this.data = res;
          this.img = this.data.image
          this.role = this.data.role
          this.name = "Receptionist"
        },
        error(err) {
          console.log(err)
        },
      })
    }
  }

  logouts() {
    sessionStorage.removeItem('admin-token')
    sessionStorage.removeItem('superadmin-token')
    sessionStorage.removeItem('user-token')
    sessionStorage.removeItem('client-token')
    sessionStorage.removeItem('manager-token')
    sessionStorage.removeItem('manager_id')
    sessionStorage.removeItem('superadmin_id')
    sessionStorage.removeItem('admin_id')
    sessionStorage.removeItem('client_id')
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('menuValue')
    sessionStorage.removeItem('superadmin-department')
    sessionStorage.removeItem('admin-department')
    sessionStorage.removeItem('client-department')
    sessionStorage.removeItem('user-department')
    sessionStorage.removeItem('manager-department')

    this.Router.navigateByUrl("sign-in/signin", { replaceUrl: true })
  }

  public logout(): void {
    this.webStorage.Logout();
  }

  public toggleSidebar(): void {
    this.sidebar.switchSideMenuPosition();
  }

  public togglesMobileSideBar(): void {
    this.sidebar.switchMobileSideBarPosition();
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }


//   getHospital() {
//     this.service.getHospital().subscribe(res => {
//       this.hospitalData = res
//       console.log("HospitalData",this.hospitalData);
//       if (res && res.length > 0) {
//         this.user = {
//           name: res[0].name,
//           image: res[0].image,
//         };
//       }
//     },
//     (error) => {
//       console.error("Error fetching doctors", error);
//     }
//   );
// }


  // getDoctors() {
  //   this.service.getDoctor().subscribe(
  //     (res: any) => {
  //       this.doctorData = res;
  //       console.log("DoctorData", this.doctorData);
  //       if (res && res.length > 0) {
  //         this.user = {
  //           name: res[0].name,
  //           image: res[0].image,
  //         };
  //       }
  //     },
  //     (error) => {
  //       console.error("Error fetching doctors", error);
  //     }
  //   );
  // }
}

