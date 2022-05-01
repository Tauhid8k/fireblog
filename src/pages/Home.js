import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { getDocs, collection } from 'firebase/firestore';
import { store } from '../config/firebaseConfig';
import { Loader } from '../components/Loader';

const Home = () => {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const postsCollectionRef = collection(store, 'posts');

  useEffect(() => {
    setIsLoading(true);
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const simplifiedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostsList(simplifiedData);
      setIsLoading(false);
      console.log(simplifiedData);
    };
    getPosts();
  }, []);

  // Limit String Length
  function limitStr(str, length = 130) {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }

  return (
    <>
      {isLoading && <Loader center={true} />}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {!isLoading &&
          postsList.map((post) => (
            <div className='bg-white shadow rounded' key={post.id}>
              <div className='p-5'>
                <h3 className='text-2xl mb-2'>{post.title}</h3>
                <p className='mb-2'>{limitStr(post.postText)}</p>
                <Link
                  to={`/${post.id}`}
                  className='flex gap-1 items-center text-lg text-gray-600'
                >
                  Read More
                  <HiOutlineArrowNarrowRight className='read-more-icon' />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
