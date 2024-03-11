import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.scss']
})
export class AppoinmentComponent {
  appointmentForm!: FormGroup;
  checkForm: boolean = false;
  allDoctor: any = [];
  allPatient: any = [];
  allDepartment: any = [];
  id: any;
  book: boolean = false
  getAppointById: any = [];
  allAppoint: any = [];
  imgs!: File;
  imagesBox = './assets/img/product/product1.jpg'
  allClinic: any = [];
  yesterday = new Date();
  now: any;
  doctorName!: any
  clinicName!: any
  availablebookslot: any
  clr!: string
  constructor(
    private _fb: FormBuilder,
    private _comapnyService: CompanyService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {


  }
  ngOnInit(): void {
    const datePipe = new DatePipe('en-Us');
    this.now = datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.builditemForm();
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // if (this.id) {
    //   this._comapnyService.getAppointmentById(this.id).subscribe({
    //     next: (res) => {
    //       console.log(res, "getbyid");
    //       this.getAppointById = res;
    //       this.appointmentForm.patchValue({ name: this.getAppointById[0].name })
    //       this.appointmentForm.patchValue({ age: this.getAppointById[0].age })
    //       this.appointmentForm.patchValue({ gender: this.getAppointById[0].gender })
    //       this.appointmentForm.patchValue({ department: this.getAppointById[0].department })
    //       this.appointmentForm.patchValue({ date: this.getAppointById[0].date })
    //       this.appointmentForm.patchValue({ doctorName: this.getAppointById[0].doctorName })
    //       this.appointmentForm.patchValue({ fees: this.getAppointById[0].fees })
    //     }
    //   })
    // }
  }
  onPageLoad() {

  }
  builditemForm() {
    this.appointmentForm = this._fb.group({
      service: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      status: ['', Validators.required],
      doctorName: ['', Validators.required],
      serviceDetails: ['', Validators.required],
      tax: ['', Validators.required],
      medicalReport: ['', Validators.required],
      patientName: ['', Validators.required],
      availableSlot: [''],
      selectClinic: ['', Validators.required],

    });

    this._comapnyService.getAllDepartment().subscribe({
      next: (res) => {
        this.allDepartment = res
      }
    })
    this._comapnyService.getAllPatient().subscribe({
      next: (res) => {
        this.allPatient = res
      }
    })
    this._comapnyService.getAllClinic().subscribe({
      next: (res) => {
        this.allClinic = res
      }
    })
  }

  Onupload(event: any) {

    if (event.target.files.length > 0) {
      this.imgs = event.target.files[0];

    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {

        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;

        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }

  }

  slot(val: any, name: any) {
    console.log(val);
    console.log(name);

    this.availablebookslot = val + ',' + name
    this.clr = val

  }
  saveAppointment() {
    if (this.appointmentForm.invalid) {
      this.checkForm = true;
      return
    }
    let Formdata: FormData = new FormData();
    Formdata.append("service", this.appointmentForm.value.service)
    Formdata.append("appointmentDate", this.appointmentForm.value.appointmentDate);
    Formdata.append("status", this.appointmentForm.value.status);
    Formdata.append("doctorName", this.appointmentForm.value.doctorName);
    Formdata.append("serviceDetails", this.appointmentForm.value.serviceDetails);
    Formdata.append("tax", this.appointmentForm.value.tax);
    Formdata.append("patientName", this.appointmentForm.value.patientName);
    Formdata.append("availableSlot", this.availablebookslot);
    Formdata.append("medicalReport", this.imgs);
    Formdata.append("selectClinic", this.appointmentForm.value.selectClinic);

    this._comapnyService.addAppointment(Formdata).subscribe({
      next: (res) => {
        console.log("data added", res);
        this._router.navigate(["/super-admin/appointmentlist"])
        this.appointmentForm.reset()

      },
      error: (err) => {
        console.log(err, "error in appointment post api")
      }
    })
  }
  navigatePatient() {
    this._router.navigate(["/super-admin/patient/add"])
  }

  cancelCoupan() {
    this._router.navigate(["/super-admin/appointmentlist"])
  }



  clinicChange(event: any) {
    this.clinicName = event.target.value
    console.log(this.clinicName);
    this._comapnyService.getAllDoctorInAppoint(this.clinicName).subscribe({
      next: (res) => {
        console.log(res)
        this.allDoctor = res
      }
    })
  }
  test: any
  doctorChange(event: any) {
    this.doctorName = event.target.value
    console.log(this.doctorName);
    this._comapnyService.getAllTimeSlot(this.clinicName, this.doctorName).subscribe({
      next: (res) => {
        console.log(res)
        this.allAppoint = res
        this.allAppoint.forEach(function (item: any) {
          Object.keys(item).forEach(function (key) {
            console.log(item[key]);
          });
        });
        this._comapnyService.getAppointment().subscribe(res => {
          console.log(res)
          res.map((av: any) => {
            let availableSlot = av.availableSlot
       
            var [time, day] = (availableSlot.split(','));

            
            this.allAppoint.map((m: any) => {
              let me = m.morningSessionFrom
              if (day == 'morning') {
                console.log(day);
                
                if (time === m.morningSessionFrom) {
              (m.morningSessionFrom = 'booked')

                }
                else{
                }
              }
            })
          })
        })
      }
    })

  }



}
