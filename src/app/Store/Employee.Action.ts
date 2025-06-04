import { createAction, props } from "@ngrx/store";
import { Employee } from "../model/Employee";

// Action Type Constants
export const LOAD_EMPLOYEE = '[Employee] Load All';
export const LOAD_EMPLOYEE_SUCCESS = '[Employee] Load All Success';
export const LOAD_EMPLOYEE_FAIL = '[Employee] Load All Fail';

export const DELETE_EMPLOYEE = '[Employee] Delete';
export const DELETE_EMPLOYEE_SUCCESS = '[Employee] Delete Success';

export const ADD_EMPLOYEE = '[Employee] Add';
export const ADD_EMPLOYEE_SUCCESS = '[Employee] Add Success';

export const UPDATE_EMPLOYEE = '[Employee] Update';
export const UPDATE_EMPLOYEE_SUCCESS = '[Employee] Update Success';

export const GET_EMPLOYEE = '[Employee] Get By ID';

// Load Actions
export const loadEmployee = createAction(LOAD_EMPLOYEE);
export const loadEmployeeSuc = createAction(
  LOAD_EMPLOYEE_SUCCESS,
  props<{ list: Employee[] }>()
);
export const loadEmployeeFail = createAction(
  LOAD_EMPLOYEE_FAIL,
  props<{ errMsg: string }>()
);

// Delete Actions
export const deleteEmployee = createAction(
  DELETE_EMPLOYEE,
  props<{ empId: number }>()
);
export const deleteEmployeeSucc = createAction(
  DELETE_EMPLOYEE_SUCCESS,
  props<{ empId: number }>()
);

// Add Actions
export const addEmployee = createAction(
  ADD_EMPLOYEE,
  props<{ data: Employee }>()
);
export const addEmployeeSucc = createAction(
  ADD_EMPLOYEE_SUCCESS,
  props<{ data: Employee }>()
);

// Update Actions
export const updateEmployee = createAction(
  UPDATE_EMPLOYEE,
  props<{ data: Employee }>()
);
export const updateEmployeeSucc = createAction(
  UPDATE_EMPLOYEE_SUCCESS,
  props<{ data: Employee }>()
);

// Get by ID Action
export const getEmployee = createAction(
  GET_EMPLOYEE,
  props<{ empId: number }>()
);

// Optional: empty action placeholder (e.g., to reset state)
export const emptyAction = createAction('[Employee] Empty');
