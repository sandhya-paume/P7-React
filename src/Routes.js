<Router>
      <Routes> 
        <Route path="/" element={<><Header/><Banner/><Gallery/><Footer/></>} />
        <Route path="/Accueil" element={<><Header/><Banner/><Gallery/><Footer/></>} />
        <Route path="/accommodation/:AccommodationId" element={<><Header/><Accommodation/><Footer/></>} />
        <Route path="/A Propos" element={<><Header/><About/><Footer/></>} />
        <Route path="*" element={<><Header/><Error/><Footer/></>} />
      </Routes>
</Router>
