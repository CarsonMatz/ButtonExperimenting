import { render, fireEvent, queryByTitle } from '@testing-library/react';
import  {Button}  from './Button';

it('checkButtonRender', ()=> {
    const {queryByTitle} = render(<Button onClick={function (): Promise<any> {
        throw new Error('Function not implemented.');
    } } text={''} />);
    const btn = queryByTitle("default");
    expect(btn).toBeTruthy();
});
