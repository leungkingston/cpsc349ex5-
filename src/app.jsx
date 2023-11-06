const USERNAME = 'leungkingston@gmail.com'
const PASSWORD = 'adminadmin'

// import PocketBase from 'pocketbase'
import PocketBase from 'https://cdnjs.cloudflare.com/ajax/libs/pocketbase/0.8.0-rc1/pocketbase.es.mjs'
const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App () {
  return (
    <div className='App'>
      <h1>Hello, {authData.admin.email}</h1>
    </div>
  )
}