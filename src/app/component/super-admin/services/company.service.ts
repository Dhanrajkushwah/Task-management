import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  constructor(
    private _http: HttpClient
  ) { }






  ///-----------------------------------------Company Api ---------------------------------------------->

  addCompany(data: any) {
    return this._http.post<any>(environment._api + "/api/admin/createadmin", data)
  }
  getCompany() {
    return this._http.get<any>(environment._api + "/api/admin/admin")
  }
  deleteCompany(id: string) {
    return this._http.delete<any>(environment._api + '/api/admin/admin/' + id)
  }
  addPlan(data: any) {
    return this._http.post<any>(environment._api + "/api/plan", data)
  }
  getCompanyById(cid: any) {
    return this._http.get<any>(environment._api + "/api/admin/profile/" + cid)
  }
  updateCompany(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/admin/" + id, data)
  }
  ///-----------------------------------------Plan Api ---------------------------------------------->

  updatePlan(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/plan/" + id, data)
  }
  getPlan() {
    return this._http.get<any>(environment._api + "/api/plan")

  }
  getPlanById(pid: any) {
    return this._http.get<any>(environment._api + "/api/plan/" + pid)
  }

  ///-----------------------------------------Product Api ---------------------------------------------->


  getClient() {
    return this._http.get<any>(environment._api + "/api/client")
  }
  getUser() {
    return this._http.get<any>(environment._api + "/api/user")
  }
  ///-----------------------------------------Deal Api ---------------------------------------------->
  addDeal(data: any) {
    return this._http.post<any>(environment._api + "/api/deals", data)
  }
  updateDeal(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/deals/" + id, data)
  }
  getDeal() {
    return this._http.get<any>(environment._api + "/api/deals")
  }
  getDealById(pid: any) {
    return this._http.get<any>(environment._api + "/api/deals/" + pid)
  }
  deleteDeal(pid: any) {
    return this._http.delete<any>(environment._api + "/api/deals/" + pid)
  }
  // --------------------------------leads data----------------------------------------------------------
  addLead(data: any) {
    return this._http.post<any>(environment._api + "/api/leads", data)
  }
  updateLead(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/leads/" + id, data)
  }
  getLead() {
    return this._http.get<any>(environment._api + "/api/leads")
  }
  getLeadById(pid: any) {
    return this._http.get<any>(environment._api + "/api/leads/" + pid)
  }
  deleteLead(id: any) {
    return this._http.delete<any>(environment._api + "/api/leads/" + id)
  }


  ///-----------------------------------------User Api ---------------------------------------------->
  addUser(data: any) {
    return this._http.post<any>(environment._api + "/api/admin/createuser", data)
  }
  GetUser() {
    return this._http.get<any>(environment._api + "/api/admin/user")
  }
  deleteUser(id: any) {
    return this._http.delete<any>(`${environment._api}/api/admin/user/${id}`)
  }
  editUser(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/user/" + id, data)
  }
  resetpass(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/userpassword/" + id, data)
  }

  ///-----------------------------------------Landing page ScreenShorts Api ---------------------------------------------->

  addScreenshortsList(data: any) {
    return this._http.post<any>(environment._api + "/api/landingpage/screenshotlist", data)
  }
  GetScreenshortsList() {
    return this._http.get<any>(environment._api + "/api/landingpage/screenshotlist")
  }
  deleteScreenshortsList(id: any) {
    return this._http.delete<any>(`${environment._api}/api/landingpage/screenshotlist/${id}`)
  }
  editScreenshortsList(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/admin/client/" + id, data)
  }


  ///-----------------------------------------Discover Api ---------------------------------------------->
  Getdiscover() {
    return this._http.get<any>(environment._api + "/api/landingpage/discover")
  }
  Adddiscover(id: any, data: any) {
    return this._http.put<any>(environment._api + "/api/landingpage/discover/" + id, data)
  }
  ///-------------------------------------------Create Discover Api ---------------------------------------------->
  adddiscover(data: any) {
    return this._http.post<any>(environment._api + "/api/landingpage/discoverlist", data)
  }
  GetAlldiscover() {
    return this._http.get<any>(environment._api + "/api/landingpage/discoverlist")
  }
  deletediscover(id: any) {
    return this._http.delete<any>(`${environment._api}/api/landingpage/discoverlist/${id}`)
  }
  getDiscoverById(_id: any) {
    return this._http.get<any>(environment._api + "/api/landingpage/discoverlist/" + _id)
  }
  updatediscover(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/landingpage/discoverlist/" + id, data)
  }
  ///-----------------------------------------Feature Api ---------------------------------------------->

  updateFeature(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/landingpage/feature" + id, data)
  }
  getFeature() {
    return this._http.get<any>(environment._api + "/api/landingpage/feature")
  }
  getFeatureList() {
    return this._http.get<any>(environment._api + "/api/landingpage/featurelist")
  }

  addFeature(data: any) {
    return this._http.post<any>(environment._api + "/api/landingpage/featurelist", data)
  }


  // getDealById(pid:any){
  //   return this._http.get<any>(environment._api+"/api/deals/"+pid)
  // }
  // deleteDeal(pid:any){
  //   return this._http.delete<any>(environment._api+"/api/deals/"+pid)
  // }

  ///-------------------------Doctor api-------------------------------->
  getDoctor() {
    return this._http.get<any>(environment._api + "/api/doctor")
  }
  addDoctor(data: any) {
    return this._http.post<any>(environment._api + "/api/doctor", data)
  }
  deletedoctor(id: any) {
    return this._http.delete<any>(environment._api+ "/api/doctor/"+id)
  }
  editDoctor(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/doctor/" + id, data)
  }
  DoctorById(id: string) {
    return this._http.get<any>(environment._api + "/api/doctor/" + id)
  }
  /////////////////////////////// New Service For Hospital /////////////////////////////////////
  addPatient(data: any) {
    return this._http.post<any>(environment._api + "/api/session", data)
  }
  deletePatient(id: any) {
    return this._http.delete<any>(environment._api + "/api/patient/" +id )
  }
  updatePatient(id: any, obj:any) {
    return this._http.put<any>(environment._api + "/api/patient/" +id , obj)
  }

  getAllAppointment(data: any) {
    return this._http.get<any>(`${environment._api}/api/session/${data}`)
  }

  getAllPatient() {
    return this._http.get<any>(environment._api + "/api/patient")
  }
  getAllDepartment() {
    return this._http.get<any>(environment._api + "/api/department")
  }


  addPrescription(data: any) {
    return this._http.post<any>(environment._api + "/api/precipitation", data)
  }

  getAllDoctorDepartment(depart: any) {
    return this._http.get<any>(environment._api + "/api/precipitation/department/" + depart)
  }
  getPatientDetails(depart: any) {
    return this._http.get<any>(environment._api + "/api/precipitation/patient/" + depart)
  }
  // //////////////////////////////////**************pooja appointment****************************///////// */
  addAppointment(obj: any) {
    return this._http.post<any>(environment._api + "/api/appointment", obj)
  }
  getAppointment() {
    return this._http.get<any>(environment._api + "/api/appointment")
  }
  getAppointmentByPatient(patientName:any) {
    return this._http.get<any>(environment._api + "/api/appointment/patient/"+ patientName)
  }
  getAppointmentByDoctor(doctorName:any) {
    return this._http.get<any>(environment._api + "/api/appointment/doctor/"+ doctorName)
  }
  getAppointmentByResp(recepName:any) {
    return this._http.get<any>(environment._api + "/api/appointment/clinic/"+ recepName)
  }
  
  getAppointmentById(id: any) {
    let URL = `${environment._api + "/api/appointment/"}/${id}`;
    return this._http.get<any>(URL)
  }
  deleteAppointmentById(id: any) {
    let URL = `${environment._api + "/api/appointment/"}/${id}`;
    return this._http.delete<any>(URL)
  }
  ///--------------------------Hospital--------------------------------------

  getHospital() {
    return this._http.get<any>(environment._api + "/api/hospital")
  }
  addhospital(data: any) {
    return this._http.post<any>(environment._api + "/api/hospital", data)
  }

  deleteHospital(id: any) {
    return this._http.delete<any>(`${environment._api}/api/hospital/${id}`)
  }
  gethospitalById(pid: any) {
    return this._http.get<any>(environment._api + "/api/profile/" + pid)
  }
  edithospital(id: string, data: any) {
    return this._http.put<any>(environment._api + "/api/hospital/" + id, data)
  }

  //------------------------------Staff----------------------------------------
  getStaff() {
    return this._http.get<any>(environment._api + "/api/staff")
  }
  addStaff(data: any) {
    return this._http.post<any>(environment._api + "/api/staff", data)
  }
 
  editStaff(id:any,data: any) {
    return this._http.put<any>(environment._api + "/api/staff/"+id, data)
  }
  deleteStaff(id:any) {
    return this._http.delete<any>(environment._api + "/api/staff/"+id, )
  }
  



  ///--------------------------Hospital Schedule--------------------------------------

  getschedules() {
    return this._http.get<any>(environment._api + "/api/schedule")
  }
  addschedule(data: any) {
    return this._http.post<any>(environment._api + "/api/schedule", data)
  }



  ///--------------------------Hospital Schedule--------------------------------------

  getdepartmentset() {
    return this._http.get<any>(environment._api + "/api/department")
  }
  adddepartmentse(data: any) {
    return this._http.post<any>(environment._api + "/api/department", data)
  }
  getAllPatientDetail(patientData: any) {
    return this._http.get<any>(environment._api + "/api/precipitation/patient/" + patientData)
  }
  getAllDoctor() {
    return this._http.get<any>(environment._api + "/api/precipitation/doctor")
  }
  //-------------------------------Client Api-----------------------------------

  getAllClinic() {
    return this._http.get<any>(environment._api + "/api/clinic")
  }
  addClinic(data: any) {
    return this._http.post<any>(environment._api + "/api/clinic", data)
  }
  getClinicByID(id: any) {
    return this._http.get<any>(environment._api + "/api/clinic/"+id )
  }
  deleteClinicByID(id: any) {
    return this._http.delete<any>(environment._api + "/api/clinic/"+id )
  }
  updateClinicByID(id: any, obj:any) {
    return this._http.put<any>(environment._api + "/api/clinic/"+id ,obj)
  }


  ///------------------------Hospital Services--------------------------------

  getServices() {
    return this._http.get<any>(environment._api + "/api/service")
  }
  addServices(data: any) {
    return this._http.post<any>(environment._api + "/api/service", data)
  }
  deleteServices(id: any) {
    return this._http.delete<any>(environment._api + "/api/service/"+id)
  }
  GetServicesById(id: any) {
    return this._http.get<any>(environment._api + "/api/service/"+id)
  }
  UpdateServicesById(id: any, data:any) {
    return this._http.put<any>(environment._api + "/api/service/"+id, data)
  }


 ///--------------------------Hospital clinic--------------------------------
 getClinic() {
  return this._http.get<any>(environment._api + "/api/clinic")
}
gaddClinic(data: any) {
  return this._http.post<any>(environment._api + "/api/clinic", data)
}

 ///--------------------------Hospital Tax--------------------------------

 getTax() {
  return this._http.get<any>(environment._api + "/api/tax")
}
getTaxById(id:any) {
  return this._http.get<any>(environment._api + "/api/tax/"+id)
}
updateTaxById(data:any,id:any) {
  return this._http.put<any>(environment._api + "/api/tax/"+id, data)
}
addTax(data: any) {
  return this._http.post<any>(environment._api + "/api/tax", data)
}
deleteTax(id:any){
  return this._http.delete<any>(`${environment._api}/api/tax/${id}`)
}



// ------------------------------Patient Encounter ______________------------------------------------------------------------------------_______________

addEncounter(data:any){
  return this._http.post<any>(environment._api + "/api/encounter", data)
}
getEncounter() {
  return this._http.get<any>(environment._api + "/api/encounter")
}
getEncounterById(id:any) {
  return this._http.get<any>(environment._api + "/api/encounter/"+id)
}
deleteEncounterById(id:any) {
  return this._http.delete<any>(environment._api + "/api/encounter/"+id)
}
updateEncounterById(id:any, data:any) {
  return this._http.put<any>(environment._api + "/api/encounter/"+id, data)
}
// ------------------------------Patient Encounter end ______________------------------------------------------------------------------------_______________

getAllDoctorInAppoint(data: any) {
  return this._http.get<any>(`${environment._api}/api/superadmin-appointment/clinic/${data}`)
}
getSessionlist() {
  return this._http.get<any>(environment._api + "/api/session")
}
getAllTimeSlot(data: any,data1:any) {
  return this._http.get<any>(`${environment._api}/api/superadmin-appointment/clinic/${data}/${data1}`)
}

getAllDoctorsession(id:any){
  return this._http.get<any>(`${environment._api}/api/superadmin-appointment/clinic/${id}`)

}

//--------------------Billing Record------------------------->
addbillrecord(data: any) {
  return this._http.post<any>(environment._api + "/api/bill", data)
}

getBilldata() {
  return this._http.get<any>(environment._api + "/api/bill")
}
getBilldataById(id:any) {
  return this._http.get<any>(environment._api + "/api/bill/" +id)
}
updateBilldataById(id:any, data:any) {
  return this._http.put<any>(environment._api + "/api/bill/" +id , data)
}
deletebill(id: any) {
  return this._http.delete<any>(`${environment._api}/api/bill/${id}`)
}


// -----------------------------------------Template Encounter______________________________________________________________________________?

addEncounterTemplate(data:any){
  return this._http.post<any>(environment._api + "/api/encountertemplate", data)
}
getEncounterTemplate(){
  return this._http.get<any>(environment._api + "/api/encountertemplate/get", )
}
getEncounterTemplateById(id:any){
  return this._http.get<any>(environment._api + "/api/encountertemplate/"+ id)
}
deleteEncounterTemplateById(id:any){
  return this._http.delete<any>(environment._api + "/api/encountertemplate/"+id)
}

UpdateEncounterTemplateById(id:any, data:any){
  return this._http.put<any>(environment._api + "/api/encountertemplate/"+id, data)
}

getClinicStatusUpdate(id:any,data:any){
  return this._http.put<any>(environment._api + "/api/clinic/clinicStatus/"+id,data)
}

}
// clinicStatus




