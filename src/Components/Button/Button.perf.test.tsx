/**
 * @jest-environment jsdom
 */
 import { render, fireEvent, queryByTitle } from '@testing-library/react';
 import  {Button}  from './Button';
 import React from "react";
 
 export const ButtonTestSuite01 = ()=>{
 
     describe("Button test suite", ()=>{
 
         test('checkButtonRender', ()=> {
             const {queryByTitle} = render(<Button onClick={function (): Promise<any> {
                 throw new Error('Function not implemented.');
             } } text={''} />);
             const btn = queryByTitle("default");
             expect(btn).toBeTruthy();
         });
     
     
     });
 
 }; ButtonTestSuite01();
 