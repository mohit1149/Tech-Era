import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <div className="app-bg-container">
    <Header />
    <div className="app-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses/:id" component={CourseItemDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
