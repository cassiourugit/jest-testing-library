const sum = (num1: any, num2: any) => {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
      return num1 + num2;
    } else {
      throw new Error('Invalid format');
    }
  };

  export default sum;
