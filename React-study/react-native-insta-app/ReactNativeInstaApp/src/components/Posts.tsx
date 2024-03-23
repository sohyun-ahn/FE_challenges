import {View} from 'react-native';
import React from 'react';
import PostItem from './PostItem';
import {postsData} from '../DB/postData';

const Posts = () => {
  const postsInfo = postsData;
  return (
    <View>
      {postsInfo.map(post => (
        <PostItem key={post.postTitle} data={post} />
      ))}
    </View>
  );
};

export default Posts;
