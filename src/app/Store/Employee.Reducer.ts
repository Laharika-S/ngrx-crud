import { createReducer, on } from '@ngrx/store';
import { employeeState } from './Employee.State';
import {
  addEmployeeSucc,
  deleteEmployeeSucc,
  loadEmployeeFail,
  loadEmployeeSuc,
  updateEmployeeSucc,
  getEmployee
} from './Employee.Action';
import { Employee } from '../model/Employee';

export function employeeReducer(state: any, action: any) {
  return _employeeReducer(state, action);
}

const _employeeReducer = createReducer(
  employeeState,

  // Load success
  on(loadEmployeeSuc, (state, action) => ({
    ...state,
    list: action.list,
    errormessage: ''
  })),

  // Load fail
  on(loadEmployeeFail, (state, action) => ({
    ...state,
    list: [],
    errormessage: action.errMsg
  })),

  // Delete success
  on(deleteEmployeeSucc, (state, action) => {
    const updatedList = state.list.filter((emp: Employee) => emp.id !== action.empId);
    return {
      ...state,
      list: updatedList,
      errormessage: ''
    };
  }),

  // Add employee success
  on(addEmployeeSucc, (state, action) => {
    return {
      ...state,
      list: [...state.list, { ...action.data }],
      errormessage: ''
    };
  }),

  // Update employee success
  on(updateEmployeeSucc, (state, action) => {
    const updatedList = state.list.map((emp: Employee) =>
      emp.id === action.data.id ? { ...action.data } : emp
    );
    return {
      ...state,
      list: updatedList,
      errormessage: ''
    };
  }),

  // Get employee by ID
  on(getEmployee, (state, action) => {
    const foundEmployee = state.list.find((emp: Employee) => emp.id === action.empId) || state.empobj;
    return {
      ...state,
      empobj: foundEmployee
    };
  })
);
