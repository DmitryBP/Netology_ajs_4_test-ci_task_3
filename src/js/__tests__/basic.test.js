import fetchData from "../http";
import { getLevel } from "../app";

jest.mock("../http");
beforeEach(() => {
  jest.resetAllMocks();
});


describe('getLevel', () => {
  it('должен возвращать информацию об уровне, если ответ успешный', () => {
    fetchData.mockImplementation(() => ({ status: 'ok', level: 10 }));
    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 10');
  });

  it('должен возвращать сообщение об ошибке, если ответ не успешный', () => {
    fetchData.mockImplementation(() => ({ status: 'error' }));
    const result = getLevel(1);
    expect(result).toBe('Информация об уровне временно недоступна');
  });

  it('должен возвращать сообщение об ошибке, если произошла ошибка при запросе', () => {
    fetchData.mockImplementation(() => { throw new Error('Ошибка при запросе'); });
    expect(() => getLevel(1)).toThrow('Ошибка при запросе');
  });
});