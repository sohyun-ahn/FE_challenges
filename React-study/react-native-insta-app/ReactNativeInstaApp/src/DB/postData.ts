import {ImageRequireSource} from 'react-native';

export interface PostType {
  postTitle: string;
  postPersonImage: ImageRequireSource;
  postImage: ImageRequireSource;
  likes: number;
  isLiked: boolean;
}

// posts 데이터 하드코딩
export const postsData: PostType[] = [
  {
    postTitle: 'Ahn',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 987,
    isLiked: true,
  },
  {
    postTitle: 'Daniel',
    postPersonImage: require('../../assets/images/profile1.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 33,
    isLiked: false,
  },
  {
    postTitle: 'Mangom',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post7.jpeg'),
    likes: 1233,
    isLiked: true,
  },
  {
    postTitle: 'Lemon',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 356,
    isLiked: false,
  },
  {
    postTitle: 'Goguma',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post5.jpeg'),
    likes: 800,
    isLiked: true,
  },
];
