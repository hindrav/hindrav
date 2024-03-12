import { Routes, Route } from "react-router-dom";

import { Home } from "app/pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
    </Routes>
  )
}

export { AppRoutes };