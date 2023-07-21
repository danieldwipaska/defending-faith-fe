import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './routes/Home/Home';
import { Apologetics } from './routes/Apologetics/Apologetics';
import { Exegesis } from './routes/Exegesis/Exegesis';
import { Article } from './routes/Article/Article';
import { Dashboard } from './routes/Dashboard/Dashboard';
import { AddPost } from './routes/Dashboard/AddPost';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { menu } from './enums/menu';
import { AuthProvider } from './context/AuthContext';
import { Login } from './routes/Login/Login';
import { MyAccount } from './routes/MyAccount/MyAccount';
import { AboutUs } from './routes/AboutUs/AboutUs';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <AuthProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<MyAccount />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path={`/${menu.apologetics}`} element={<Apologetics />} />
              <Route path={`/${menu.exegesis}`} element={<Exegesis />} />
              <Route path={`/${menu.dashboard}`} element={<Dashboard />} />
              <Route path={`/${menu.dashboard}/add`} element={<AddPost />} />
              <Route path="/article/:postId" element={<Article />} />
              <Route path={`/${menu.dashboard}/article/:postId`} element={<Article />} />
              <Route path={`/${menu.apologetics}/article/:postId`} element={<Article />} />
              <Route path={`/${menu.exegesis}/article/:postId`} element={<Article />} />
              <Route path="*" element={<h3>404</h3>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
