import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

  public sidebarData1 = [
    {
      tittle: 'Super-Admin',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Company Management',
          route: routes.company,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
          subMenus: [],
        },
        // {
        //   menuValue: 'Encounters',
        //   route: routes.encounterTemplateList,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'x-square',
        //   subMenus: [
        //     {
        //       menuValue: 'Encounters List',
        //       route: routes.encounterTemplateList,
        //      },
        //      {
        //       menuValue: 'Encounter Templates',
        //      route: routes.PatientencounterTemplate,
        //      }
        //   ],
        // },
        {
          menuValue: 'User Management',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layout',
          subMenus: [],
        },
        {
          menuValue: 'Deactivated Company',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'users',
          subMenus: [],
        },
        {
          menuValue: 'Deactivated User',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-check',
          subMenus: [],
        },
        {
          menuValue: 'Category',
          route: routes.category,
          page: 'add-brand',
          page2: 'edit-brand',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'home',
          subMenus: [],
        },
        {
          menuValue: 'Sub-Category',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'globe',
          subMenus: [],
        },
        // {
        //   menuValue: 'Doctor Sessions',
        //   route: routes.doctorsession,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'plus-square',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Taxes',
        //   route: routes.tax,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'plus-circle',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Bill Records',
        //   route: routes.invoice,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'edit-3',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Tax',
        //   route: routes.departnameList,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'info',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Billing Record',
        //   route: routes.invoice,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'edit',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Reports',
        //   route: routes.report,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'copy',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Report',
        //   route: routes.Hospitalreport,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'plus-square',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Encounters',
        //   route: routes.encounterTemplateList,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'x-square',
        //   subMenus: [
        //     {
        //       menuValue: 'Encounters List',
        //       route: routes.encounterTemplateList,
        //      },
        //      {
        //       menuValue: 'Encounter Templates',
        //      route: routes.PatientencounterTemplate,
        //      }
        //   ],
        // },

        // {
        //   menuValue: 'Settings',
        //   route: routes.setting,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'settings',
        //   subMenus: [
        //     {
        //       menuValue: 'General-Setting',
        //       route: routes.holidays,
        //      },
        //      {
        //     menuValue: 'Holidays',
        //      route: routes.holidays,
        //      },
        //      {
        //       menuValue: 'Doctor Session',
        //        route: routes.doctorsession,
        //        },
        //      {
        //       menuValue: 'Configuration',
        //      route: routes.listings,
        //      },
        //      {
        //       menuValue: 'App-Configuration',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Email-Template',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'SMS/WhatsApp Template',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Custom Notification',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Custom Formn',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Patient Setting',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Widget Setting',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Google Event Template',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Google Meet',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Listings',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Pro Setting',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Payment',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Appointment Setting',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Permission Setting',
        //      route: routes.listings,
        //      }
        //      ,
        //      {
        //       menuValue: 'Sidebar Setting',
        //      route: routes.listings,
        //      }
        //   ],
        // },
        // {
        //   menuValue: 'Prescription',
        //   route: routes.brandList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Prescription',
        //   route: routes.prescriptionList,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'tag',
        //   subMenus: [],
        // },

        // {
        //   menuValue: 'Staff',
        //   route: routes.Staff,
        //   page: 'add-brand',
        //   page2: 'edit-brand',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'user-plus',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Invoice',
        //   route: routes.invoice,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'save',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Schedule',
        //   route: routes.schedule,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Send Custom Email',
        //   route: routes.sendcustomemail,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'align-justify',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'SMS',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'message-square',
        //   subMenus: [
        //    {
        //     menuValue: 'SMS Template',
        //     route: routes.smsTemplate,
        //    },
        //    {
        //     menuValue: 'SMS Schedule',
        //    route: routes.smsSchedule,
        //    }
        //   ],
        // },
        // {
        //   menuValue: 'SMS Template',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'SMS Schedule',
        //   route: routes.smsTemplate,
        //   page: 'sub-add-category',
        //   page2: 'edit-subcategory',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'speaker',
        //   subMenus: [],
        // }
        // {
        //   menuValue: 'Email Templates',
        //   route: routes.barcode,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'align-justify',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Landing Page',
        //   route: routes.importProduct,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //   subMenus: [
        //     {
        //       menuValue: 'Top Bar',
        //       route: routes.chat,
        //     },
        //     {
        //       menuValue: 'Custom Page',
        //       route: routes.custompage,
        //     },
        //     {
        //       menuValue: 'Home',
        //       route: routes.home,
        //     },
        //     {
        //       menuValue: 'Features',
        //       route: routes.features,
        //     },
        //     {
        //       menuValue: 'Discover',
        //       route: routes.discover,
        //     },
        //     {
        //       menuValue: 'Screenshot',
        //       route: routes.screenshot,
        //     },
        //     {
        //       menuValue: 'Pricing Plan',
        //       route: routes.pricingplan,
        //     },
        //     {
        //       menuValue: 'FAQ',
        //       route: routes.faq,
        //     },
        //     {
        //       menuValue: 'Testimonials',
        //       route: routes.testimonials,
        //     },
        //     {
        //       menuValue: 'Join User',
        //       route: routes.joinus,
        //     },

        //     // {
        //     //   menuValue: 'Client',
        //     //   route: routes.client,
        //     // },
        //   ],
        // },
        // routing flow poioja
        // {
        //   menuValue: 'Estimation',
        //   route: routes.estimation,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        // },
        //  {
        //   menuValue: 'Expense',
        //   route: routes.expenses,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //  },
        // {
        //   menuValue: 'Settings',
        //   route: routes.importProduct,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'minimize-2',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Application',
        //   route: routes.application,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'smartphone',
        //   subMenus: [
        //     {
        //       menuValue: 'Chat',
        //       route: routes.chat,
        //     },
        //     {
        //       menuValue: 'Calendar',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.calendar,
        //       subRoutes: [],
        //     },
        //     {
        //       menuValue: 'Email',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.email,
        //       subRoutes: [],
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   tittle: 'Products',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Products',
    //       route: routes.productList,
    //       page: 'edit-product',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'box',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Create Product',
    //       route: routes.addProduct,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'plus-square',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Category',
    //       page: 'add-category',
    //       page2: 'edit-category',
    //       route: routes.categoryList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'codepen',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Brands',
    //       route: routes.brandList,
    //       page: 'add-brand',
    //       page2: 'edit-brand',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'tag',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Sub Category',
    //       route: routes.subCategoryList,
    //       page: 'sub-add-category',
    //       page2: 'edit-subcategory',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'speaker',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Print Barcode',
    //       route: routes.barcode,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'align-justify',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Import Products',
    //       route: routes.importProduct,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'minimize-2',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Sales',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Sales',
    //       route: routes.salesList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       page: 'add-sales',
    //       page2: 'edit-sales',
    //       icon: 'shopping-cart',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Invoices',
    //       route: routes.invoiceReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'file-text',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Sales Return',
    //       route: routes.salesReturnLists,
    //       page: 'create-sales-return',
    //       page2: 'edit-sales-returns',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'copy',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Quotation',
    //       route: routes.quotationList,
    //       page: 'add-quotation',
    //       page2: 'edit-quotation',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'save',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'POS',
    //       route: routes.pos,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'hard-drive',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Transfer',
    //       route: routes.transfer,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'shuffle',
    //       subMenus: [
    //         {
    //           menuValue: 'Transfer List',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           page: 'add-transfer',
    //           page2: 'edit-transfer',
    //           route: routes.transferList,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Import Transfer',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.importTransfer,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Return',
    //       route: routes.return,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'corner-up-left',
    //       subMenus: [
    //         {
    //           menuValue: 'Sales Return',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.salesReturnList,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Purchase Return',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.purchaseReturnList,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Purchases',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Purchases',
    //       route: routes.purchaseList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'shopping-bag',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Import Purchases',
    //       route: routes.importPurchase,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'minimize-2',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Order',
    //       route: routes.purchaseOrderReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'file-minus',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Return',
    //       route: routes.purchaseReturnList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'refresh-cw',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Finance & Accounts',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Expense',
    //       route: routes.expense,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'file-text',
    //       subMenus: [
    //         {
    //           menuValue: 'Expenses',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.expenseList,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Expense Category',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.expenseCategory,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Peoples',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Customers',
    //       route: routes.customerList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'user',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Suppliers',
    //       route: routes.supplierList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'users',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Users',
    //       route: routes.userList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'user-check',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Stores',
    //       route: routes.storeList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'home',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Reports',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Sales Report',
    //       route: routes.salesReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'bar-chart-2',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Report',
    //       route: routes.purchaseReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'pie-chart',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Inventory Report',
    //       route: routes.inventoryReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'credit-card',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Invoice Report',
    //       route: routes.invoiceReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'file',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Purchase Report',
    //       route: routes.purchaseOrderReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'bar-chart',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Supplier Report',
    //       route: routes.supplierReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'database',
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Customer Report',
    //       route: routes.customerReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       icon: 'pie-chart',
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'User Management',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Manage Users',
    //       route: routes.users,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'users',
    //       subMenus: [
    //         {
    //           menuValue: 'New User',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.newUser,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Users List',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.usersUserList,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Pages',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Authentication',
    //       route: routes.auth,
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'shield',
    //       subMenus: [
    //         {
    //           menuValue: 'Login',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.signIn,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Register',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.signUp,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Forgot Password',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.forgotPassword,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Reset Password',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.forgotPassword,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Error Pages',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'file-minus',
    //       route: routes.errorPages,
    //       subMenus: [
    //         {
    //           menuValue: '404 Error',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.errorPage404,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: '500 Error',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.errorPage500,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Places',
    //       hasSubRoute: true,
    //       icon: 'map',
    //       showSubRoute: false,
    //       route: routes.places,
    //       subMenus: [
    //         {
    //           menuValue: 'Countries',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.countriesList,
    //           subMenus: [],
    //         },
    //         {
    //           menuValue: 'States',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.stateList,
    //           subMenus: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Blank Page',
    //       hasSubRoute: false,
    //       icon: 'file',
    //       showSubRoute: false,
    //       route: routes.blankPage,
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Components',
    //       hasSubRoute: false,
    //       icon: 'hard-drive',
    //       showSubRoute: false,
    //       route: routes.components,
    //       subMenus: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'UI Interface',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Elements',
    //       hasSubRoute: true,
    //       icon: 'layers',
    //       showSubRoute: false,
    //       route: routes.element,
    //       subMenus: [
    //         {
    //           menuValue: 'Sweet Alerts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.sweetAlerts,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Tooltip',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.tooltip,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Popover',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.popover,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Ribbon',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.ribbon,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Clipboard',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.clipboard,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Drag & Drop',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.dragDrop,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Range Slider',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.rangeSlider,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Rating',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.rating,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Toaster',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.toaster,
    //           subRoutes: [],
    //         },

    //         {
    //           menuValue: 'Text Editor',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.textEditor,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Counter',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.counter,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Scrollbar',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.scrollbar,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Spinner',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.spinner,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Notification',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.notification,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Lightbox',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.lightbox,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Timeline',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.timeline,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Form Wizard',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formWizard,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Charts',
    //       hasSubRoute: true,
    //       icon: 'bar-chart-2',
    //       showSubRoute: false,
    //       route: routes.charts,
    //       subMenus: [
    //         {
    //           menuValue: 'Apex Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartApex,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Ng2 Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartNg2,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Prime NG Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartPrime,
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       menuValue: 'Icons',
    //       hasSubRoute: true,
    //       icon: 'database',
    //       showSubRoute: false,
    //       route: routes.icons,
    //       subMenus: [
    //         {
    //           menuValue: 'Fontawesome Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconFontAwesome,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Feather Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconFeather,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Ionic Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconIonic,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Material Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconMaterial,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Pe7 Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconPe7,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Simpleline Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconSimpleline,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Themify Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconThemify,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Weather Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconWeather,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Typicon Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconTypicon,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Flag Icons',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.iconFlag,
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       menuValue: 'Forms',
    //       hasSubRoute: true,
    //       icon: 'edit',
    //       showSubRoute: false,
    //       route: routes.forms,
    //       subMenus: [
    //         {
    //           menuValue: 'Basic Inputs',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formBasicInputs,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Input Groups',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formInputsGroups,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Horizontal Form',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formHorizontal,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Vertical Form',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formVertical,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Form Mask',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formMask,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Form Validation',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formValidation,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Form Select',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.formSelect,
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       menuValue: 'Table',
    //       hasSubRoute: true,
    //       icon: 'user',
    //       showSubRoute: false,
    //       route: routes.table,
    //       subMenus: [
    //         {
    //           menuValue: 'Basic Tables',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.basicTable,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Data Tables',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.dataTable,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Settings',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Settings',
    //       hasSubRoute: true,
    //       icon: 'settings',
    //       showSubRoute: false,
    //       route: routes.settings,
    //       subMenus: [
    //         {
    //           menuValue: 'General Settings',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.generalSettings,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Email Settings',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.emailSettings,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Payment Settings',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.paymentSettings,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Currency Settings',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.currencySettings,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Group Permissions',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.groupSettings,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Tax Rates',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.taxRates,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Logout',
    //       hasSubRoute: false,
    //       icon: 'log-out',
    //       showSubRoute: false,
    //       route: routes.signIn,
    //       subMenus: [],
    //     },
    //   ],
    // },
  ];

  public sidebarData2 = [
    {
      tittle: 'Admin',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        //  {
        //   menuValue: 'Registration',
        //   route: routes.task,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'calendar',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Encounters',
        //   route: routes.encounterTemplateList,
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'x-square',
        //   subMenus: [
        //     {
        //       menuValue: 'Encounters List',
        //       route: routes.encounterTemplateList,
        //      },
        //      {
        //       menuValue: 'Encounter Templates',
        //      route: routes.PatientencounterTemplate,
        //      }
        //   ],
        // },

        {
          menuValue: 'Task Management',
          route: routes.taskadmin,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'users',
          subMenus: [],
        },


        // {
        //   menuValue: 'Total Task',
        //   route: routes.services,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'plus-square',
        //   subMenus: [],
        // },



        {
          menuValue: 'Total Task',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'plus-square',
          subMenus: [],
        },



        {
          menuValue: 'Rating',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'edit',
          subMenus: [],
        },
        {
          menuValue: 'Profile',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'arrow-down-circle',
          subMenus: [],
        },
        {
          menuValue: 'Complete Task',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'award',
          subMenus: [],
        },
      ],
    },

  ];

  public sidebarUser = [
    {
      tittle: 'User',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        },
        {
          menuValue: 'Registration',
          route: routes,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
          subMenus: [],
        },
        {
          menuValue: 'Services',
          route: routes.Users,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'hard-drive',
          subMenus: [],
        },

      ],
    },

  ];


}
