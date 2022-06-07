import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/blogSlice';

function App() {
  const  blogs  = useSelector(state => state.blog.blog);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input type="text" placeholder='Enter Title'/>
      <>
        {blogs.map(blog => (
          <p key={blog.id}>{blog.title}</p>
        ))}
      </>
      
    </div>
  );
}

export default App;
