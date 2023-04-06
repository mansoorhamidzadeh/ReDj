import Header from './components/Header';
import './App.css';
import NoteListPage from './pages/NoteListPage';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import NotePage from './pages/NotePage';
function App() {
  return (
    <Router>
 <div class='App'>
  <Header/>
  
 
<Routes>
  <Route path='/' element={<NoteListPage/>}/>
  <Route path='note/:id' element={<NotePage/>}/>
</Routes>
 </div>
 </Router>
  );
}

export default App;
