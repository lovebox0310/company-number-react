import './App.css'

function App() {
  const handleChange = (e) => {
    const t = e.target
    t.value = String(t.value).replace(/\D/gm, '')
    if (t.value.length >= 3 && t.value.length <= 4) {
      t.value = t.value.replace(/(\d{3})/g, '$1-')
    } else if (t.value.length >= 5 && t.value.length <= 9) {
      t.value = t.value.replace(/(\d{3})(\d{2})/g, '$1-$2-')
    } else {
      t.value = t.value.slice(0, 10)
      t.value = t.value.replace(/(\d{3})(\d{2})(\d{5})/g, '$1-$2-$3')
    }
  }

  return (
    <div className="App">
      <h1>사업자 번호 입력창</h1>
      <input
        type="text"
        name="companyNumber"
        id="companyNumber"
        onChange={handleChange}
      />
    </div>
  )
}

export default App
