import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  // 데이터를 가져오고 수정하고 할 수 있는 객체 생성
  projectId: "g4evwk86",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-16",
});

// helper function to build image urls
const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).url(); // urlFor이라는 함수 만들어 이것을 이용하여 우리가 sanity로 데이터 생성했던 것들의 image url들을 받을 수 있음.

export default client;

// cors(cross origin resource sharing): 원래 origin이 다르면 쉐어가 불가능 하지만 우리는 client는 3000 port, server는 3333 port를 쓰기에 origin이 다른 것들을 가능하게 해주는 것
// => delivery app 디렉터리에서 >npx sanity cors add http://localhost:3000 해주면 됨!
