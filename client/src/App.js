import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import { useRoutes } from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import usePay from './hooks/pay.hook'


function App() {
	const {token, login, logout, userId} = useAuth()
	const {payment, pay} = usePay()
	const isAuthenticated = !!token // to boolean
	const isPayment = payment
	const routes = useRoutes(isAuthenticated, isPayment)

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated, isPayment, pay
		}}>
		<Router>
			<Header
				isAuth={isAuthenticated}
			/>
			{routes}
			<button onClick={() => console.log(payment)}>
				CONSOLE
			</button>
			<Footer/>
		</Router>
		</AuthContext.Provider>
	)
}

export default App;
