/*
Escribir una funcion que al pasarle un numero:
- Muestra "fizz" si es multiplo de 3
- Muestra "buzz" si es multiplo de 5
- Muestra "fizzbuzz" si es multiplo de 3 y 5
- Muestra el numero si no es multiplo de ninguno de los dos
*/

import { expect } from "chai";
import { describe, it, test } from "vitest";

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('El parametro proporcionado no valido');
  if (Number.isNaN(number)) throw new Error('El parametro proporcionado no valido debe ser un numero y no infinito, esta recibiendo: ' + number);
  if (number % 5 === 0 && number % 3 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return number;
};

describe(fizzbuzz, () => {
  // Funcion para iniciar
  // it ("Deberia se una funcion", () => {
  //   expect(typeof fizzbuzz).toBe('function');
  // });

  test("Deberia fallar si no proporciona un numero para el parametro", () => {
    expect(() => fizzbuzz()).toThrow();
  });

  test("Deberia fallar si no proporciona un numero para el parametro y mostrar mensaje de error", () => {
    expect(() => fizzbuzz()).toThrow('El parametro proporcionado no valido');
  });

  test("Deberia fallar si no proporciona un numero para el parametro, mostrar mensaje de error y el tipo de variable", () => {
    expect(() => fizzbuzz(NaN)).toThrow('El parametro proporcionado no valido debe ser un numero y no infinito, esta recibiendo: ' + NaN);
  });

  test("Deberia devolver 1 si el numero proporcionado es 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  test("Deberia devolver 2 si el numero proporcionado es 2", () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  test("Deberia devolver 'fizz' si el numero proporcionado es multiplo de 3", () => {
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
    expect(fizzbuzz(12)).toBe('fizz');
  });

  test("Deberia devolver 'buzz' si el numero proporcionado es multiplo de 5", () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(10)).toBe('buzz');
    expect(fizzbuzz(20)).toBe('buzz');
  });

  test("Deberia devolver 'fizzbuzz' si el numero proporcionado es multiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
    expect(fizzbuzz(45)).toBe('fizzbuzz');
  });
});