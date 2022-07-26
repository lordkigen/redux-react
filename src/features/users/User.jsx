import { useSelector, useDispatch } from 'react-redux'
import  {fetchUsers}  from './userSlice'
import { useEffect } from 'react'

const User = () => {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchUsers())
  }, [])

  return (
    <div>
        <h3>List of users -</h3> 
        {user.loading &&  <div>Loading ... </div> }
        {!user.loading && user.error ?  <div>{user.error}</div>: null }
        {!user.loading && user.users.length ? (
          <ul>
            {
              user.users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ) )
            }
          </ul>
        ) : null}
    </div>
  )
}

export default User