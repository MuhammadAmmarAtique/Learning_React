
function App() {

  return (
    <>
      {/* Note */}
      {/* 1) To use bootstrap in react just copy paste bootstrap css and js "cdn" links in index.html */}
      {/* 2) Adjust copied components according to JSX e.g instead of class use className, write style prop/attribute 
        like this style={{width:"100px"}} */}

      {/* buttons */}
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>


    </>
  )
}

export default App
