function App() {
  // const urls = [
  //   "https://jsonplaceholder.typicode.com/posts/1",
  //   "https://jsonplaceholder.typicode.com/posts/2",
  //   "https://jsonplaceholder.typicode.com/posts/3",
  // ];

  // function fetchTopshiriq1(urls: string[]) {
  //   let ketmaketpromis = Promise.resolve();

  //   urls.forEach((url) => {
  //     ketmaketpromis = ketmaketpromis
  //       .then(() => {
  //         console.log(`${url}`);
  //         return fetch(url);
  //       })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`Error fetching ${url}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   });
  // }

  // fetchTopshiriq1(urls);

  // const url1 = "https://jsonplaceholder.typicode.com/users";
  // const url2 = "https://jsonplaceholder.typicode.com/posts";

  // function fetchTopshiriq2() {
  //   Promise.all([fetch(url1), fetch(url2)])
  //     .then((response) => {
  //       return Promise.all(
  //         response.map((response) => {
  //           if (!response.ok) {
  //             throw new Error("Xatolik");
  //           }
  //           return response.json();
  //         })
  //       );
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // fetchTopshiriq2();

  // const url1 = "https://jsonplaceholder.typicode.com/photos";
  // const url2 = "https://jsonplaceholder.typicode.com/todos";
  // const url3 = "https://jsonplaceholder.typicode.com/comments";

  // function fetchTopshiriq3() {
  //   Promise.race([fetch(url1), fetch(url2), fetch(url3)])
  //     .then((response) => {
  //       if(!response.ok){
  //         throw new Error('xatolik')
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // fetchTopshiriq3();

  // const urls = [
  //   "https://jsonplaceholder.typicode.com/posts/1",
  //   "https://jsonplaceholder.typicode.com/posts/2",
  //   "https://jsonplaceholder.typicode.com/posts/3",
  // ];

  // async function fetchTopshiriq4(urls: string[]) {
  //   try {
  //     const response = await Promise.all(
  //       urls.map((url) => {
  //         return fetch(url);
  //       })
  //     );
  //     const data = await Promise.all(
  //       response.map((response) => {
  //         if (!response.ok) {
  //           throw new Error("Xatolik");
  //         }
  //         return response.json();
  //       })
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // fetchTopshiriq4(urls);

  // const url1 = "https://jsonplaceholder.typicode.com/users";
  // const url2 = "https://jsonplaceholder.typicode.com/posts";

  // async function fetchTopshiriq5() {
  //   try {
  //     const [user, post] = await Promise.all([fetch(url1), fetch(url2)]);
  //     const users = await user.json();
  //     const posts = await post.json();
  //     console.log([users, posts]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // fetchTopshiriq5();

  // const url1 = "https://jsonplaceholder.typicode.com/photos";
  // const url2 = "https://jsonplaceholder.typicode.com/todos";
  // const url3 = "https://jsonplaceholder.typicode.com/comments";

  // async function fetchTopshiriq6() {
  //   try {
  //     const response1 = await fetch(url1);
  //     if (response1.ok) {
  //       const data = response1.json();
  //       console.log(data);
  //       return;
  //     }
  //     const response2 = await fetch(url2);
  //     if (response2.ok) {
  //       const data = response2.json();
  //       console.log(data);
  //       return;
  //     }
  //     const response3= await fetch(url3);
  //     if (response3.ok) {
  //       const data = response3.json();
  //       console.log(data);
  //       return;
  //     }
  //     console.log("Barcha so‘rovlar xato bilan tugadi.");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // fetchTopshiriq6()

  // GENERIC

  // function generic1<T>(data: T): { status: string; data: T } {
  //   return {
  //     status: "success",
  //     data: data,
  //   };
  // }
  // console.log(generic1('slaom'));

  // const meva1 = ["olma", "banan", "behi"];
  // const meva2 = ["anor", "banan", "behi"];
  // function generic2<T>(array1: T[], array2: T[]): T[] {
  //   return array1.filter((element) => array2.includes(element));
  // }
  // console.log(generic2(meva1, meva2));

  
//   class Storage<T> {
//     private items: T[] = [];
  
//     addItem(item: T): void {
//       this.items.push(item);
//     }
  
//     removeItem(item: T): void {
//       const index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//       }
//     }
  
//     getItems(): T[] {
//       return [...this.items];
//     }
//   }
  
//   const stringStorage = new Storage<string>();
// stringStorage.addItem("apple");
// stringStorage.addItem("banana");
// console.log(stringStorage.getItems());


// stringStorage.removeItem("apple");
// console.log(stringStorage.getItems());


  return <div>App</div>;
}

export default App;
