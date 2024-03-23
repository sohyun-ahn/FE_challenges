import {ImageRequireSource} from 'react-native';

export interface StoryType {
  id: number;
  name: string;
  image: ImageRequireSource;
}

// story data 하드코딩
export const storyData: StoryType[] = [
  {
    id: 0,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 1,
    name: 'Daniel',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 2,
    name: 'Mangom',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 3,
    name: 'Lemon',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 4,
    name: 'Goguma',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 5,
    name: 'Rabbit',
    image: require('../../assets/images/profile5.jpeg'),
  },
];
