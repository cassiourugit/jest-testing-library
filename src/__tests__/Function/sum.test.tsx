import { sum } from '../../Function/sum'

describe('Sum unit tests', () => {
    it('Should return 4 when adding 2+2', () => {
      const result = sum(2, 2);
  
      expect(result).toBe(4);
    });
  
    it('Should return Invalid format when no numbers are passed', () => {
      jest.spyOn(console, 'error');

      expect(() => sum('2', 2)).toThrow('Invalid format');
    });

    it('should wait 2 seconds', (done) => {
        setTimeout(() => {
          done();
        }, 2000);
      });

    //Exemplo de teste skipado atrabés do x
    xit('Should skip this test', () => {
        expect(true).toBe(true)
    })

    //Exemplo onde apenas este teste será executado, por conta do f antes do it
    // fit('Should run only this test', () => {
    //     expect(true).toBe(true)
    // })

    //Exemplo de it.todo
    it.todo('Make a test to assert sum of float numbers')
  });