import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  addEmployee,
  addEmployeeSucc,
  deleteEmployee,
  deleteEmployeeSucc,
  loadEmployee,
  loadEmployeeFail,
  loadEmployeeSuc,
  updateEmployee,
  updateEmployeeSucc,
} from "./Employee.Action";
import { catchError, map, switchMap, of, exhaustMap } from "rxjs";
import { EmployeeService } from "../service/employee.service";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class empEffect {
  private actions$ = inject(Actions);
  private service = inject(EmployeeService);
  private toastr = inject(ToastrService);

  // Load employees
  _loadEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployee),
      exhaustMap(() =>
        this.service.GetAll().pipe(
          map((data) => loadEmployeeSuc({ list: data })),
          catchError((err) => of(loadEmployeeFail({ errMsg: err.message })))
        )
      )
    )
  );

  // Delete employee
  _deleteEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployee),
      switchMap((action) =>
        this.service.Delete(action.empId).pipe(
          map(() => {
            this.showAlert("Deleted Successfully", "pass");
            return deleteEmployeeSucc({ empId: action.empId });
          }),
          catchError((err) => {
            this.showAlert(err.message, "fail");
            return of(loadEmployeeFail({ errMsg: err.message })); // use proper fail action
          })
        )
      )
    )
  );

  // Add employee
  _addEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(addEmployee),
      switchMap((action) =>
        this.service.Create(action.data).pipe(
          map(() => {
            this.showAlert("Created Successfully", "pass");
            return addEmployeeSucc({ data: action.data });
          }),
          catchError((err) => {
            this.showAlert(err.message, "fail");
            return of(loadEmployeeFail({ errMsg: err.message })); // or create a separate addEmployeeFail
          })
        )
      )
    )
  );

  // Update employee
  _updateEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      switchMap((action) =>
        this.service.Update(action.data).pipe(
          map(() => {
            this.showAlert("Updated Successfully", "pass");
            return updateEmployeeSucc({ data: action.data });
          }),
          catchError((err) => {
            this.showAlert(err.message, "fail");
            return of(loadEmployeeFail({ errMsg: err.message })); // or updateEmployeeFail
          })
        )
      )
    )
  );

  private showAlert(message: string, response: string) {
    response === "pass"
      ? this.toastr.success(message)
      : this.toastr.error(message);
  }
}
