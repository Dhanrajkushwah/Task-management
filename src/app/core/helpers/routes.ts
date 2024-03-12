export class routes {
  static navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  private static base = '';
  private static SuperAdmin = '/super-admin';
  private static User = '/user';
  // private static base = '';



  public static get baseUrl(): string {
    return this.base;
  }
  // auth routes
  public static get auth(): string {
    return this.base + '/auth';
  }

  public static get signIn(): string {
    return this.base + '/signin';
  }
  public static get signUp(): string {
    return this.base + '/signup';
  }
  public static get forgotPassword(): string {
    return this.base + '/forgetpassword';
  }


  //--------------User Routes----------->

  public static get Users(): string {
    return this.User + '/seviceslist';
  }

  public static get core(): string {
    return this.baseUrl;
  }

  public static get dashboardclient(): string {
    return this.core + '/client/dashboard';
  }

  public static get userTask(): string {
    return this.core + '/user/usertask';
  }
  public static get totalTask(): string {
    return this.core + '/user/totaltask';
  }
  

// super addmin routes only

  public static get dashboard(): string {
    return this.SuperAdmin + '/dashboard';
  }
  public static get company(): string {
    return this.SuperAdmin + '/company';
  }
  public static get category(): string {
    return this.SuperAdmin + '/catagroy';
  }

/// admin routes ////

public static get dashboardadmin(): string {
  return this.core + '/admin/dashboard';
}
public static get taskadmin(): string {
  return this.core + '/admin/task';
}
public static get ratingadmin(): string {
  return this.core + '/admin/rating';
}
public static get profileadmin(): string {
  return this.core + '/admin/profile';
}

}
