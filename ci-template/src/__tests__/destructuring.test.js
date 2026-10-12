import { extractSpecials } from '../js/destructuring';

describe('extractSpecials', () => {
  test('should extract specials with default description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://example.com/1.png',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://example.com/2.png',
        },
      ],
    };
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://example.com/1.png',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://example.com/2.png',
        description: 'Описание недоступно', 
      }
    ]

    expect(extractSpecials(character)).toEqual(expected);
  });
  
  test('should return an empty array if no specials are provided', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      special: [],
    };
    const expected = [];

    expect(extractSpecials(character)).toEqual(expected);
  }); 
});
