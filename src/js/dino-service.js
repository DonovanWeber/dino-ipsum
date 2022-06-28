export default class DinoService {
  static getDino(userNameLetterCount) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = `https:dinoipsum.com/api/?format=json&paragraphs=1&words=${userNameLetterCount}`;

      request.onload = () => {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}