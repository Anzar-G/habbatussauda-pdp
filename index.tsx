import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
const OrderPage = React.lazy(() => import('./pages/OrderPage'));

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/order"
          element={
            <React.Suspense fallback={<div className="p-8">Memuat halaman pemesanan...</div>}>
              <OrderPage />
            </React.Suspense>
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);