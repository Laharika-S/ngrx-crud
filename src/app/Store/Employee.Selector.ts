import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeModel } from "./Employee.Model";
//import { EmployeeState } from "./Employee.State";
//import{getEmployeeState} from "./Employee.Effects"

const getEmployeeState=createFeatureSelector<EmployeeModel>('emp');

export const getEmpList=createSelector(
    getEmployeeState,
    (state)=> { 
        return state.list;
});

export const selectEmployee=createSelector(
    getEmployeeState,
    (state)=>{
    return state.empobj;
});