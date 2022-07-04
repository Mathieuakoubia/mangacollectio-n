import React from 'react'

export default function AnimatedRoute() {
    const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/">
            <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
