
import { render, screen, fireEvent } from '@testing-library/react';
import Calculadora from './calculadora';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () =>{


test('renders learn react link', () => {
  render(<Calculadora />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('deve limpar o campo de numeros', () => {
  const {getByTestId, getByText} = render(<Calculadora/>);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('C'));
  expect(getByTestId('txtNumeros')).toHaveValue('0');
});

it('deve somar 2+3=5', () => {
  const {getByTestId, getByText} = render(<Calculadora/>);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('5');
});

it('deve somar 2-3=-1', () => {
  const {getByTestId, getByText} = render(<Calculadora/>);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('-1');
});

it('deve somar 6/3=2', () => {
  const {getByTestId, getByText} = render(<Calculadora/>);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('2');
});

it('deve somar 2*3=6', () => {
  const {getByTestId, getByText} = render(<Calculadora/>);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('6');
});

it('deve somar 2.5+3=5.5', () => {
  const {getByTestId, getByText} = render(<Calculadora/>);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('5'))
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('5.5');
});

});
