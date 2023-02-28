import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
function App() {
  return (
		<main>
            <Routes>
                <Route path={"*"} element={<Home />} />
            </Routes>
		</main>
	);
}
export default App;
