
import './App.css'
import InfoCard from './components/common/InfoCard'
import InfoRow from './components/common/InfoRow'

function App() {

  return (
    
    <InfoCard>
      <InfoRow label="Name" value="John Doe" />
      <InfoRow label="Email" value="john.doe@example.com" />
    </InfoCard>
  
   
  )
}

export default App
