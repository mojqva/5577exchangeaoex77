import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import { useRoutes } from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'


function App() {
	const {token, login, logout, userId} = useAuth()
	const isAuthenticated = !!token // to boolean
	const routes = useRoutes(isAuthenticated)

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated
		}}>
		<Router>
			<Header
				isAuth={isAuthenticated}
			/>
			{routes}
			<Footer/>
		</Router>
		</AuthContext.Provider>
	)
}

export default App;
