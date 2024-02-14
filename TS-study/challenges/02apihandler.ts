interface ApiHandler<T> {
  fetchData(endpoint: string): Promise<T>;
}

class ApiHandler<T> implements ApiHandler<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetchData(endpoint: string): Promise<T> {
    try {
      const url = this.baseUrl + endpoint;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data: T = await response.json();
      return data;
    } catch (err) {
      throw new Error(`에러발생: ${err}`);
    }
  }
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function main() {
  const apiHandler = new ApiHandler<Post[]>(
    "https://jsonplaceholder.typicode.com"
  );
  try {
    const result: Post[] = await apiHandler.fetchData("/posts");
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
main();
